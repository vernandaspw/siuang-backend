const db = require('../../../config/db')

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { z } = require('zod');
const { selectAdmin } = require('../../../models/field');
const mail = require('../../../config/mail');
const { convertServerToClient, datetimeServerTambahMenit, formatCountdown } = require('../../../config/datetime');
const { token } = require('morgan');

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;



const userValidator = z.object({
    email: z.string({
        message: 'wajib di isi'
    }).nonempty({ message: 'wajib diisi' }).email({ message: "Email tidak valid" }),
    password: z.string({
        message: 'wajib di isi'
    }).nonempty({ message: 'wajib diisi' }).min(6, { message: "Password harus minimal 6 karakter" }),
});

exports.login = async (req, res) => {
    const datetimeServer = new Date();
    const datetimeClient = convertServerToClient(datetimeServer);
    try {
        const { email, password } = req.body;

        const validator = userValidator.safeParse(req.body);

        if (!validator.success) {
            return res.status(422).json({
                errors: validator.error.errors,
                data: null,
            });
        }

        const user = await db.siuang.admin.findUnique({
            // select: selectAdmin,
            where: {
                email,
            },
        });

        if (!user) {
            return res.status(400).json({ message: 'Pengguna tidak ditemukan' });
        }

            if (user.isaktif == false) {
                return res.status(400).json({ message: 'Pengguna tidak aktif' });
            }
        // return res.json(datetimeServer)
        if (user.pass_fail_at > datetimeServer) {
            return res.status(400).json({
                msg: 'gagal ' + user.pass_fail + ' login, coba kembali setelah ' + convertServerToClient(user.pass_fail_at),
                data: {
                    pass_fail: user.pass_fail,
                    pass_fail_at: convertServerToClient(user.pass_fail_at),
                    countdown: formatCountdown(user.pass_fail_at - datetimeServer)
                }
            })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            failUpdate = await db.siuang.admin.update({
                where: {
                    email
                },
                data: {
                    pass_fail: user.pass_fail + 1,
                }
            })
            if (failUpdate.pass_fail < 5) {
                return res.status(400).json({ msg: 'Password salah, ' + failUpdate.pass_fail + ' percobaan', data: { pass_fail: failUpdate.pass_fail } });
            } else if (failUpdate.pass_fail == 5) {
                dataUpdate = await db.siuang.admin.update({
                    where: {
                        email
                    },
                    data: {
                        pass_fail: failUpdate.pass_fail,
                        pass_fail_at: datetimeServerTambahMenit(datetimeServer, parseInt(process.env.PASS_FAIL_1_AT))

                    }
                })
                return res.status(400).json({
                    msg: 'password salah, telah gagal ' + failUpdate.pass_fail + ' kali percobaan, ulangi kembali dalam ' + convertServerToClient(dataUpdate.pass_fail_at),
                    data: {
                        pass_fail: dataUpdate.pass_fail,
                        pass_fail_at: convertServerToClient(dataUpdate.pass_fail_at),
                        countdown: formatCountdown(new Date(dataUpdate.pass_fail_at) - datetimeServer)
                    }
                })
            } else if (failUpdate.pass_fail >= 6 && failUpdate.pass_fail <= 9) {
                dataUpdate = await db.siuang.admin.update({
                    where: {
                        email
                    },
                    data: {
                        pass_fail: failUpdate.pass_fail,
                        pass_fail_at: datetimeServerTambahMenit(datetimeServer, parseInt(process.env.PASS_FAIL_1_AT))

                    }
                })
                return res.status(400).json({
                    msg: 'password salah, telah gagal ' + failUpdate.pass_fail + ' kali percobaan, ulangi kembali dalam ' + convertServerToClient(dataUpdate.pass_fail_at),
                    data: {
                        pass_fail: dataUpdate.pass_fail,
                        pass_fail_at: convertServerToClient(dataUpdate.pass_fail_at),
                        countdown: formatCountdown(new Date(dataUpdate.pass_fail_at) - datetimeServer)
                    }
                })
            } else if (failUpdate.pass_fail == 10) {
                dataUpdate = await db.siuang.admin.update({
                    where: {
                        email
                    },
                    data: {
                        pass_fail: failUpdate.pass_fail,
                        pass_fail_at: datetimeServerTambahMenit(datetimeServer, parseInt(process.env.PASS_FAIL_2_AT)),
                        isaktif: false,
                    }
                })
                return res.status(400).json({
                    msg: 'password salah, telah gagal ' + failUpdate.pass_fail + ' kali percobaan, akun di nonaktifkan',
                    data: {
                        isaktif: dataUpdate.isaktif,
                        pass_fail: dataUpdate.pass_fail,
                        pass_fail_at: convertServerToClient(dataUpdate.pass_fail_at),
                        countdown: formatCountdown(new Date(dataUpdate.pass_fail_at) - datetimeServer)
                    }
                })
            } else if (failUpdate.pass_fail >= 11) {
                dataUpdate = await db.siuang.admin.update({
                    where: {
                        email
                    },
                    data: {
                        pass_fail: failUpdate.pass_fail,
                        pass_fail_at: datetimeServerTambahMenit(datetimeServer, parseInt(process.env.PASS_FAIL_2_AT))
                    }
                })
                return res.status(400).json({
                    msg: 'password salah, telah gagal ' + failUpdate.pass_fail + ' kali percobaan, ulangi kembali dalam ' + convertServerToClient(dataUpdate.pass_fail_at),
                    data: {
                        pass_fail: dataUpdate.pass_fail,
                        pass_fail_at: convertServerToClient(dataUpdate.pass_fail_at),
                        countdown: formatCountdown(new Date(dataUpdate.pass_fail_at) - datetimeServer)
                    }
                })
            }
        }



        dataUpdate = await db.siuang.admin.update({
            where: {
                email
            },
            data: {
                pass_fail: 0,
                pass_fail_at: null
            }
        })

        return res.status(200).json({ msg: 'redirect send otp' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Terjadi kesalahan saat mencoba masuk ' + error });
    }
};

exports.sendOtp = async (req, res) => {
    const datetimeServer = new Date();
    const datetimeClient = convertServerToClient(datetimeServer);
    try {
        const { email } = req.body

        if (!email) {
            return res.status(400).json({ msg: 'email wajib diisi' })
        }

        // const validator = userValidator.safeParse(req.body);
        // if (!validator.success) {
        //     return res.status(422).json({
        //         errors: validator.error.errors,
        //         data: null,
        //     });
        // }

        const user = await db.siuang.admin.findUnique({
            select: selectAdmin,
            where: {
                email,
            },
        });

        if (!user) {
            return res.status(400).json({ message: 'Pengguna tidak ditemukan' });
        }
        if (user.isaktif == false) {
            return res.status(400).json({ message: 'Pengguna tidak aktif' });
        }

        if (user.otp_resend_at >= datetimeServer) {
            return res.status(400).json({
                msg: 'ulangi otp pada ' + convertServerToClient(user.otp_resend_at),
                data: {
                    otp_resend_at: convertServerToClient(user.otp_resend_at),
                }
            })
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        try {
            const resMail = await mail({
                to: user.email,
                subject: 'Kode OTP',
                text: 'Kode OTP Anda adalah ' + otp,
                html: '<h4>Kode OTP Anda adalah <strong> ' + otp + ' </strong></h4>',
            });
        } catch (error) {
            return res.status(200).json({ msg: 'gagal kirim otp ke email' })
        }

        // update user otp and expired_at server
        const userUpdate = await db.siuang.admin.update({
            where: {
                email
            },
            data: {
                otp: await bcrypt.hash(otp, 10),
                otp_resend_at: datetimeServerTambahMenit(datetimeServer, parseInt(process.env.OTP_RESEND_AT)),
                otp_expired_at: datetimeServerTambahMenit(datetimeServer, parseInt(process.env.OTP_EXPIRED_AT)),

            }
        })

        return res.status(200).json({
            code: 200,
            msg: 'success',
            data: {
                nama: userUpdate.nama,
                email: userUpdate.email,
                phone: userUpdate.phone,
                password: userUpdate.password,
                isaktif: userUpdate.isaktif,
                otp_resend_at: convertServerToClient(userUpdate.otp_resend_at),
                otp_expired_at: convertServerToClient(userUpdate.otp_expired_at),
            }
        });


    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Terjadi kesalahan saat mencoba masuk ' + error });
    }
}

exports.loginWithOtp = async (req, res) => {
    const otpValidator = z.object({
        email: z.string({
            message: 'wajib di isi'
        }).nonempty({ message: 'wajib diisi' }).email({ message: "Email tidak valid" }),
        password: z.string({
            message: 'wajib di isi'
        }).nonempty({ message: 'wajib diisi' }).min(6, { message: "Password harus minimal 6 karakter" }),
        otp: z.string({
            message: 'wajib di isi'
        }).nonempty({ message: 'wajib diisi' }),

    });
    try {

        const datetimeServer = new Date();
        const datetimeClient = convertServerToClient(datetimeServer);

        const { email, password, otp } = req.body;

        const validator = otpValidator.safeParse(req.body);

        if (!validator.success) {
            return res.status(422).json({
                errors: validator.error.errors,
                data: null,
            });
        }

        const user = await db.siuang.admin.findUnique({
            where: {
                email,
            },
        });

        if (!user) {
            return res.status(400).json({ message: 'Pengguna tidak ditemukan' });
        }

        if (user.isaktif == false) {
            return res.status(400).json({ message: 'Pengguna tidak aktif' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Password salah' });
        }

        if (user.otp_expired_at < datetimeServer) {
            return res.status(400).json({
                msg: 'OTP telah expired ' + convertServerToClient(user.otp_expired_at),
                data: {
                    otp_expired_at: convertServerToClient(user.otp_expired_at),
                }
            })
        }

        if (user.otp_fail_at > datetimeServer) {
            return res.status(400).json({
                msg: 'OTP gagal ' + user.otp_fail + ' kali, coba kembali setelah ' + convertServerToClient(user.otp_fail_at),
                data: {
                    otp_fail: user.otp_fail,
                    otp_fail_at: convertServerToClient(user.otp_fail_at),
                    countdown: formatCountdown(user.otp_fail_at - datetimeServer)
                }
            })
        }


        const isOtpValid = await bcrypt.compare(otp, user.otp);
        // return res.json(isOtpValid)

        if (!isOtpValid) {
            failUpdate = await db.siuang.admin.update({
                where: {
                    email
                },
                data: {
                    otp_fail: user.otp_fail + 1
                }
            })
            if (failUpdate.otp_fail < 5) {
                return res.status(400).json({ msg: 'OTP salah, ' + failUpdate.otp_fail + ' percobaan', data: { otp_fail: failUpdate.otp_fail } });
            } else if (failUpdate.otp_fail == 5) {
                dataUpdate = await db.siuang.admin.update({
                    where: {
                        email
                    },
                    data: {
                        otp_fail: failUpdate.otp_fail,
                        otp_fail_at: datetimeServerTambahMenit(datetimeServer, parseInt(process.env.OTP_FAIL_1_AT))
                    }
                })
                return res.status(400).json({
                    msg: 'OTP salah, telah gagal ' + dataUpdate.otp_fail + ' kali percobaan, ulangi kembali dalam ' + convertServerToClient(dataUpdate.otp_fail_at),
                    data: {
                        otp_fail: dataUpdate.otp_fail,
                        otp_fail_at: convertServerToClient(dataUpdate.otp_fail_at),
                        countdown: formatCountdown(new Date(dataUpdate.otp_fail_at) - datetimeServer)
                    }
                })
            } else if (failUpdate.otp_fail >= 6 && failUpdate.otp_fail <= 9) {

                dataUpdate = await db.siuang.admin.update({
                    where: {
                        email
                    },
                    data: {
                        otp_fail: failUpdate.otp_fail,
                        otp_fail_at: datetimeServerTambahMenit(datetimeServer, parseInt(process.env.OTP_FAIL_1_AT))

                    }
                })
                return res.status(400).json({
                    msg: 'OTP salah, telah gagal ' + failUpdate.otp_fail + ' kali percobaan, ulangi kembali dalam ' + convertServerToClient(dataUpdate.otp_fail_at),
                    data: {
                        otp_fail: dataUpdate.otp_fail,
                        otp_fail_at: convertServerToClient(dataUpdate.otp_fail_at),
                        countdown: formatCountdown(new Date(dataUpdate.otp_fail_at) - datetimeServer)
                    }
                })
            } else if (failUpdate.otp_fail == 10) {
                dataUpdate = await db.siuang.admin.update({
                    where: {
                        email
                    },
                    data: {
                        otp_fail: failUpdate.otp_fail,
                        otp_fail_at: datetimeServerTambahMenit(datetimeServer, parseInt(process.env.OTP_FAIL_2_AT)),
                        isaktif: false,
                    }
                })
                return res.status(400).json({
                    msg: 'OTP salah, telah gagal ' + failUpdate.otp_fail + ' kali percobaan, akun di nonaktifkan',
                    data: {
                        isaktif: dataUpdate.isaktif,
                        otp_fail: dataUpdate.otp_fail,
                        otp_fail_at: convertServerToClient(dataUpdate.otp_fail_at),
                        countdown: formatCountdown(new Date(dataUpdate.otp_fail_at) - datetimeServer)
                    }
                })
            } else if (failUpdate.otp_fail >= 11) {
                dataUpdate = await db.siuang.admin.update({
                    where: {
                        email
                    },
                    data: {
                        otp_fail: failUpdate.otp_fail,
                        otp_fail_at: datetimeServerTambahMenit(datetimeServer, parseInt(process.env.OTP_FAIL_2_AT))
                    }
                })
                return res.status(400).json({
                    msg: 'OTP salah, telah gagal ' + failUpdate.otp_fail + ' kali percobaan, ulangi kembali dalam ' + convertServerToClient(dataUpdate.otp_fail_at),
                    data: {
                        otp_fail: dataUpdate.otp_fail,
                        otp_fail_at: convertServerToClient(dataUpdate.otp_fail_at),
                        countdown: formatCountdown(new Date(dataUpdate.otp_fail_at) - datetimeServer)
                    }
                })
            }

        }


        const payload = {
            id: user.id,
            nama: user.nama,
            email: user.email,
            phone: user.phone,
            isaktif: user.isaktif,
            role: user.role
        }

        const accessTokenExpiresIn = process.env.JWT_ACCESS_TOKEN_EXPIRED
        const refreshTokenExpiresIn = process.env.JWT_REFRESH_TOKEN_EXPIRED
        const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: accessTokenExpiresIn });
        const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: refreshTokenExpiresIn });

        await db.siuang.admin.update({
            where: {
                id: user.id,
            },
            data: {
                token: accessToken,
                tokenRefresh: refreshToken,
                otp: null,
                otp_expired_at: null,
                otp_resend_at: null,
                otp_fail: 0,
                otp_fail_at: null,
            }
        })

        res.cookie(process.env.COOKIES_TOKEN, accessToken, {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.cookie(process.env.COOKIES_TOKEN_REFRESH, refreshToken, {
            httpOnly: true,
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({ accessToken, accessTokenExpiresIn, refreshToken, refreshTokenExpiresIn });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Terjadi kesalahan saat mencoba masuk ' + error });
    }
}

exports.refreshToken = async (req, res) => {
    const { refreshToken } = req.body;

    try {
        const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET);

        if (!decoded || !decoded.id) {
            return res.status(403).json({ message: 'Token refresh tidak valid' });
        }
        const user = await db.siuang.admin.findUnique({
            where: {
                id: decoded.id,
            },
        });

        if (!user) {
            return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
        }

        if (refreshToken != user.tokenRefresh) {
            return res.status(403).json({ message: 'Token refresh tidak berlaku' });
        }

        if (user.isaktif == false) {
            return res.status(400).json({ message: 'Pengguna tidak aktif' });
        }

        const payload = {
            id: user.id,
            nama: user.nama,
            email: user.email,
            phone: user.phone,
            isaktif: user.isaktif,
            role: user.role
        }

        const accessTokenExpiresIn = process.env.JWT_ACCESS_TOKEN_EXPIRED
        const refreshTokenExpiresIn = process.env.JWT_REFRESH_TOKEN_EXPIRED
        const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: accessTokenExpiresIn });
        const newRefreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: refreshTokenExpiresIn });

        await db.siuang.admin.update({
            where: {
                id: user.id,
            },
            data: {
                token: accessToken,
                tokenRefresh: newRefreshToken
            }
        })

        res.cookie(process.env.COOKIES_TOKEN, accessToken, {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.cookie(process.env.COOKIES_TOKEN_REFRESH, refreshToken, {
            httpOnly: true,
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({ accessToken, accessTokenExpiresIn, refreshToken: newRefreshToken, refreshTokenExpiresIn });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Terjadi kesalahan saat memperbarui token akses' + error });
    }
}

exports.logout = async (req, res) => {
    try {
        const user = req.user

        await db.siuang.admin.update({
            where: { id: user.id },
            data: { token: null, tokenRefresh: null },
        });

        res.clearCookie(process.env.COOKIES_TOKEN);
        res.clearCookie(process.env.COOKIES_TOKEN_REFRESH);

        return res.status(200).json({ message: 'Berhasil logout' });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Terjadi kesalahan saat logout: ' + error });
    }
};

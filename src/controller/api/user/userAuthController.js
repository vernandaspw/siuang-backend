const db = require('../../../config/db')

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { z } = require('zod');
const { waktuConvertServerToClient, waktuServerTambahHari } = require("../../../config/datetime");
const { v4: uuidv4 } = require('uuid');
const { user } = require('../../../seeder/seeder');

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

exports.register = async (req, res) => {
    const { nama, email, phone, password } = req.body;

    const datetimeServer = new Date();
    const datetimeClient = waktuConvertServerToClient(datetimeServer);
    // FREE TRIAL 1 BULAN

    try {
        const userValidator = z.object({
            nama: z.string({
                message: 'wajib di isi'
            }).nonempty({ message: 'wajib diisi' }),
            email: z.string({
                message: 'wajib di isi'
            }).nonempty({ message: 'wajib diisi' }).email({ message: "Email tidak valid" }),
            phone: z.string().nullable(),
            password: z.string({
                message: 'wajib di isi'
            }).nonempty({ message: 'wajib diisi' }).min(6, { message: "Password harus minimal 6 karakter" }),
        });
        const validator = userValidator.safeParse(req.body);
        if (!validator.success) {
            return res.status(422).json({
                errors: validator.error.errors,
            });
        }
        const existingEmail = await db.siuang.users.findUnique({
            where: {
                email,
            },
        });
        if (existingEmail) {
            return res.status(400).json({ message: 'email sudah digunakan' });
        }

        if (phone) {

            const existingPhone = await db.siuang.users.findUnique({
                where: {
                    phone,
                },
            });
            if (existingPhone) {
                return res.status(400).json({ message: 'nomor telepon sudah digunakan' });
            }
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            await db.siuang.$transaction(async (tx) => {

                const newUser = await tx.users.create({
                    data: {
                        id: uuidv4(),
                        nama,
                        email,
                        phone: phone ? phone : null,
                        isaktif: true,
                        password: hashedPassword,
                        created_at: datetimeServer
                    },
                });


                const group = await tx.groups.create({
                    data: {
                        id: uuidv4(),
                        nama: 'group saya',
                        user_id: newUser.id,
                        isPremium: true,
                        isPremium: true,
                        premium_expired_at: waktuServerTambahHari(datetimeServer, 30),
                        created_at: datetimeServer,
                    }
                })

                
                const group_users = await tx.group_users.create({
                    data: {
                        id: uuidv4(),
                        group_id: group.id,
                        user_id: newUser.id,
                        status: 'aktif',
                        role: 'admin',
                        created_at: datetimeServer,
                    }
                })
                
                const updateUser = await tx.users.update({
                    where: {
                        id : newUser.id,
                    },
                    data: {
                        group_id: group.id
                    }
                })

                const aset_kategori = await tx.aset_kategoris.create({
                    data: {
                        id: uuidv4(),
                        nama: 'Aset Lancar',
                        group_id: group.id,
                        created_at: datetimeServer,
                    }
                })
                const aset = await tx.asets.create({
                    data: {
                        id: uuidv4(),
                        group_id: group.id,
                        urut: 1,
                        user_id: newUser.id,
                        aset_kategori_id: aset_kategori.id,
                        nama: 'Tunai',
                        color_bg: '#40A578',
                        color_text: '#FFFFFF',
                        created_at: datetimeServer,
                    }
                })

                const aset_akun = await tx.aset_akuns.create({
                    data: {
                        id: uuidv4(),
                        urut: 1,
                        aset_id: aset.id,
                        group_id: group.id,
                        user_id: newUser.id,
                        nama: 'Dompet',
                        color_bg: '#40A578',
                        color_text: '#FFFFFF',
                        created_at: datetimeServer,
                    }
                })

                await tx.transaksi_kategoris.create({
                    data: {
                        id: uuidv4(),
                        group_id: group.id,
                        tipe: 'masuk',
                        nama: 'Gaji',
                        user_id: user.id,
                        created_at: datetimeServer,
                    }
                })
                await tx.transaksi_kategoris.create({
                    data: {
                        id: uuidv4(),
                        group_id: group.id,
                        tipe: 'masuk',
                        nama: 'pemberian',
                        user_id: user.id,
                        created_at: datetimeServer,
                    }
                })

                const kategori_keluar_makanan = await tx.transaksi_kategoris.create({
                    data: {
                        id: uuidv4(),
                        group_id: group.id,
                        tipe: 'keluar',
                        nama: 'makanan dan minuman',
                        user_id: user.id,
                        created_at: datetimeServer,
                    }
                })
                await tx.transaksi_kategoris.createMany({
                    data: [
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_keluar_makanan.id,
                            tipe: 'keluar',
                            nama: 'bahan makanan',
                            label_id: '6fa7556f-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_keluar_makanan.id,
                            tipe: 'keluar',
                            nama: 'Cepat saji',
                            label_id: '66e5f84c-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        }

                    ]
                })

                return res.status(201).json({ message: 'Pengguna berhasil didaftarkan', user: newUser });
            })
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    } catch (error) {

        console.error('Error:', error);
        res.status(500).json({ message: 'Terjadi kesalahan saat mendaftarkan ' + error });
    }
}

exports.login = async (req, res) => {

    const { email, password } = req.body;

    try {
        const userValidator = z.object({
            email: z.string({
                message: 'wajib di isi'
            }).nonempty({ message: 'wajib diisi' }).email({ message: "Email tidak valid" }),
            password: z.string({
                message: 'wajib di isi'
            }).nonempty({ message: 'wajib diisi' }).min(6, { message: "Password harus minimal 6 karakter" }),
        });

        const datetimeServer = new Date();
        const datetimeClient = waktuConvertServerToClient(datetimeServer);

        const validator = userValidator.safeParse(req.body);

        if (!validator.success) {
            return res.status(422).json({
                errors: validator.error.errors,
                data: null,
            });
        }

        const user = await db.siuang.users.findUnique({
            where: {
                email,
            },
        });

        if (!user) {
            return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
        }

        if (user.isaktif == false) {
            return res.status(400).json({ message: 'Pengguna tidak aktif' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Password salah' });
        }

        const payload = {
            id: user.id,
            nama: user.nama,
            email: user.email,
            phone: user.phone,
            isaktif: user.isaktif,
            isPremium: user.isPremium,
            premium_expired_at: user.premium_expired_at
        }

        const accessTokenExpiresIn = process.env.JWT_ACCESS_TOKEN_EXPIRED
        const refreshTokenExpiresIn = process.env.JWT_REFRESH_TOKEN_EXPIRED
        const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: accessTokenExpiresIn });
        const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: refreshTokenExpiresIn });

        await db.siuang.users.update({
            where: {
                id: user.id,
            },
            data: {
                token: accessToken,
                tokenRefresh: refreshToken,
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
        res.status(500).json({ message: 'Terjadi kesalahan saat mencoba masuk' + error });
    }
};

exports.refreshToken = async (req, res) => {
    const { refreshToken } = req.body;

    try {
        const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET);

        if (!decoded || !decoded.id) {
            return res.status(403).json({ message: 'Token refresh tidak valid' });
        }

        const user = await db.siuang.users.findUnique({
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
            isPremium: user.isPremium,
            premium_expired_at: user.premium_expired_at
        }

        const accessTokenExpiresIn = process.env.JWT_ACCESS_TOKEN_EXPIRED
        const refreshTokenExpiresIn = process.env.JWT_REFRESH_TOKEN_EXPIRED
        const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: accessTokenExpiresIn });
        const newRefreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: refreshTokenExpiresIn });

        await db.siuang.users.update({
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
        res.status(500).json({ message: 'Terjadi kesalahan saat memperbarui token akses' + error.message });
    }
}

exports.logout = async (req, res) => {
    try {
        const user = req.user

        await db.siuang.users.update({
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
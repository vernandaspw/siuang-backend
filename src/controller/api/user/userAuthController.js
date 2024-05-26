const db = require('../../../config/db')

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { z } = require('zod');
const { convertServerToClient } = require("../../../config/datetime");


const JWT_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

// exports.register = async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         const existingUser = await prisma.user.findUnique({
//             where: {
//                 username,
//             },
//         });

//         if (existingUser) {
//             return res.status(400).json({ message: 'Username sudah digunakan' });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);

//         const newUser = await prisma.user.create({
//             data: {
//                 username,
//                 password: hashedPassword,
//             },
//         });

//         res.status(201).json({ message: 'Pengguna berhasil didaftarkan', user: newUser });
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).json({ message: 'Terjadi kesalahan saat mendaftarkan pengguna' });
//     }
// }

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
        const datetimeClient = convertServerToClient(datetimeServer);

        const validator = userValidator.safeParse(req.body);

        if (!validator.success) {
            return res.status(422).json({
                errors: validator.error.errors,
                data: null,
            });
        }

        const user = await db.siuang.user.findUnique({
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

        await db.siuang.user.update({
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

        const user = await db.siuang.user.findUnique({
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

        await db.siuang.user.update({
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
        res.status(500).json({ message: 'Terjadi kesalahan saat memperbarui token akses' });
    }
}

exports.logout = async (req, res) => {
    try {
        const user = req.user

        await db.siuang.user.update({
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
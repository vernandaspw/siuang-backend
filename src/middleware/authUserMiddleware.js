const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const db = require('../config/db');
const { waktuConvertServerToClient } = require('../config/datetime');

const JWT_SECRET = process.env.JWT_SECRET;

async function authUserMiddleware(req, res, next) {

    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return res.status(401).json({ msg: 'Token akses tidak ditemukan' });
        }

        const accessToken = authorizationHeader.split(' ')[1];
        if (!accessToken) {
            return res.status(401).json({ msg: 'Format token akses tidak benar' });
        }

        const decoded = jwt.verify(accessToken, JWT_SECRET);
        if (!decoded || !decoded.id) {
            return res.status(401).json({ msg: 'Token akses tidak valid' });
        }
        const currentTime = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
        if (decoded.exp < currentTime) {
            return res.status(403).json({ msg: 'Token telah kedaluwarsa' })
        }

        // const tokenCookies = req.cookies[process.env.COOKIES_TOKEN];

        // if (accessToken != tokenCookies) {
        //     return res.status(401).json({ msg: 'Token cookies tidak valid' });
        // }


        let user = await db.siuang.users.findUnique({
            where: {
                id: decoded.id,
            },
        });

        if (!user) {
            return res.status(401).json({ msg: 'Pengguna tidak ditemukan' });
        }

        if (accessToken != user.token) {
            return res.status(403).json({ msg: 'Token akses tidak berlaku' });
        }


        if (!user.isaktif) {
            return res.status(401).json({ msg: 'Pengguna tidak aktif' });
        }

        // const datetimeServer = new Date();
        // // return res.json(waktuConvertServerToClient(user.premium_expired_at))

        // if (user.premium_expired_at != null && user.premium_expired_at < datetimeServer) {
        //     if (user.isPremium == true) {
        //         var updateDataPremium = await db.siuang.users.update({
        //             where: {
        //                 id: user.id,
        //             },
        //             data: {
        //                 isPremium: false
        //             },
        //         })
        //     }
        // }

        // if (updateDataPremium) {
        //     user = updateDataPremium
        // }

        var updateDataLastSeen = await db.siuang.users.update({
            where: {
                id: user.id,
            },
            data: {
                lastSeenAt: new Date()
            },
        })
        if (updateDataLastSeen) {
            user = updateDataLastSeen
        }


        user = {
            id: user.id,
            nama: user.nama,
            email: user.email,
            phone: user.phone,
            isaktif: user.isaktif,
            google_id: user.google_id,
            group_id: user.group_id,
            // token: user.token,
            // tokenRefresh: user.tokenRefresh,
            created_at: user.created_at,
            lastSeenAtServer: user.lastSeenAt,
            lastSeenAtClient: waktuConvertServerToClient(user.lastSeenAt)
        }

        // if (!user.group_id) {
        //     return res.status(400).json({msg: 'pilih group dahulu', data : 'redirect ke halaman pilih group'})
        // }

        req.user = user;


        // Lanjutkan ke handler permintaan selanjutnya
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            console.error('TokenExpiredError:', error); // Logging error
            return res.status(403).json({ msg: 'Token akses sudah kedaluwarsa' });
        } else if (error.name === 'JsonWebTokenError') {
            console.error('JsonWebTokenError:', error); // Logging error
            return res.status(401).json({ msg: 'Token akses tidak valid:' + error.message });
        } else {
            console.error('Error:', error); // Logging error
            return res.status(401).json({ msg: 'Token akses tidak valid' + error.message });
        }
    }
}

module.exports = authUserMiddleware;

const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const db = require('../config/db');
const { convertServerToClient } = require('../config/datetime');

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


        const tokenCookies = req.cookies[process.env.COOKIES_TOKEN];

        if (accessToken != tokenCookies) {
            return res.status(401).json({ msg: 'Token cookies tidak valid' });
        }

        const decoded = jwt.verify(accessToken, JWT_SECRET);
        if (!decoded || !decoded.id) {
            return res.status(401).json({ msg: 'Token akses tidak valid' });
        }

        const user = await db.siuang.user.findUnique({
            where: {
                id: decoded.id,
            },
        });

        if (!user) {
            return res.status(401).json({ msg: 'Pengguna tidak ditemukan' });
        }

        if (accessToken != user.token) {
            return res.status(401).json({ msg: 'Token akses tidak berlaku' });
        }


        if (!user.isaktif) {
            return res.status(401).json({ msg: 'Pengguna tidak aktif' });
        }

        const datetimeServer = new Date();
        // return res.json(convertServerToClient(user.premium_expired_at))

        if (user.premium_expired_at != null && user.premium_expired_at < datetimeServer) {
            if (user.isPremium == true) {
                var updateData = await db.siuang.user.update({
                    where: {
                        id: user.id,
                    },
                    data: {
                        isPremium: false
                    }
                })
            }
        }

        if (updateData) {
            user = updateData
        }

        req.user = user;

        // Lanjutkan ke handler permintaan selanjutnya
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            console.error('TokenExpiredError:', error); // Logging error
            return res.status(401).json({ msg: 'Token akses sudah kedaluwarsa' });
        } else if (error.name === 'JsonWebTokenError') {
            console.error('JsonWebTokenError:', error); // Logging error
            return res.status(401).json({ msg: `Token akses tidak valid: ${error.message}` });
        } else {
            console.error('Error:', error); // Logging error
            return res.status(401).json({ msg: 'Token akses tidak valid' + error.message });
        }
    }
}

module.exports = authUserMiddleware;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    const { username, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: {
                username,
            },
        });

        if (!user) {
            return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Password salah' });
        }

        const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
        const refreshToken = jwt.sign({ userId: user.id }, JWT_REFRESH_SECRET, { expiresIn: '7d' });

        res.status(200).json({ accessToken, refreshToken });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Terjadi kesalahan saat mencoba masuk' });
    }
};

exports.refreshToken = async (req, res) => {
    const { refreshToken } = req.body;

    try {
        const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET);

        if (!decoded || !decoded.userId) {
            return res.status(403).json({ message: 'Token refresh tidak valid' });
        }

        const user = await prisma.user.findUnique({
            where: {
                id: decoded.userId,
            },
        });

        if (!user) {
            return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
        }

        const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

        const newRefreshToken = jwt.sign({ userId: user.id }, JWT_REFRESH_SECRET, { expiresIn: '7d' });

        res.status(200).json({ accessToken, refreshToken: newRefreshToken });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Terjadi kesalahan saat memperbarui token akses' });
    }
}

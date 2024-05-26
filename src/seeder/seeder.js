const db = require('../config/db')
const datetime = require('../config/datetime')

const bcrypt = require('bcryptjs');


exports.user = async (req, res) => {
    try {

        const newUser = await db.siuang.user.createMany({
            data: [
                {
                    nama: 'admin',
                    username: 'admin',
                    password: await bcrypt.hash('4dmin@123', 10),
                    isAdmin: true,
                    created_at: datetime.server
                },
                {
                    nama: 'vernanda',
                    username: 'vernandaspw',
                    email: 'vernandaspw@gmail.com',
                    password: await bcrypt.hash('12345678aZ', 10),
                    isAdmin: true,
                    created_at: datetime.server
                },
            ]
        });

        // buat aset kategori

        //  buat aset

        //  buat aset akun 

        

        res.status(201).json({ message: 'Pengguna berhasil didaftarkan', user: newUser });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: error });
    }
}



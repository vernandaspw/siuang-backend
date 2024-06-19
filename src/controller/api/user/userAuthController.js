const db = require('../../../config/db')

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { z } = require('zod');
const { waktuConvertServerToClient, waktuServerTambahHari } = require("../../../config/datetime");
const { v4: uuidv4 } = require('uuid');
const { user } = require('../../../seeder/seeder');
const { body, validationResult } = require('express-validator');

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

exports.register = async (req, res) => {
    const { nama, email, phone, password } = req.body;

    const datetimeServer = new Date();
    const datetimeClient = waktuConvertServerToClient(datetimeServer);
    // FREE TRIAL 1 BULAN

    try {
        await Promise.all([
            body('nama').notEmpty().withMessage('wajib di isi').run(req),
            body('email').notEmpty().withMessage('wajib di isi').isEmail().withMessage('isi email dengan benar').run(req),
            body('phone').notEmpty().withMessage('wajib di isi').run(req),
            body('password').notEmpty().withMessage('wajib di isi').run(req),
        ])

        const errorsValidator = validationResult(req);
        if (!errorsValidator.isEmpty()) {
            return res.status(422).json({ errors: errorsValidator.array() });
        }


        const existingEmail = await db.siuang.users.findUnique({
            where: {
                email,
            },
        });
        if (existingEmail) {
            return res.status(400).json({ msg: 'email sudah digunakan' });
        }

        if (phone) {

            const existingPhone = await db.siuang.users.findUnique({
                where: {
                    phone,
                },
            });
            if (existingPhone) {
                return res.status(400).json({ msg: 'nomor telepon sudah digunakan' });
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
                        id: newUser.id,
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

                await tx.transaksi_kategoris.createMany({
                    data: [
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            tipe: 'masuk',
                            nama: 'Gaji',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            tipe: 'masuk',
                            nama: 'pemberian',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            tipe: 'masuk',
                            nama: 'upah jasa',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            tipe: 'masuk',
                            nama: 'penjualan',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),

                            group_id: group.id,
                            tipe: 'masuk',
                            nama: 'profit',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            tipe: 'masuk',
                            nama: 'pemasukan lainnya',
                            user_id: user.id,
                            created_at: datetimeServer,
                        }
                    ]
                })


                const kategori_makanan_minuman = await tx.transaksi_kategoris.create({
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
                            partOf: kategori_makanan_minuman.id,
                            tipe: 'keluar',
                            nama: 'bahan makanan',
                            label_id: '6fa7556f-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_makanan_minuman.id,
                            tipe: 'keluar',
                            nama: 'buah',
                            label_id: '6fa7556f-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_makanan_minuman.id,
                            tipe: 'keluar',
                            nama: 'Cepat saji/jajan',
                            label_id: '66e5f84c-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_makanan_minuman.id,
                            tipe: 'keluar',
                            nama: 'cafe/restoran',
                            label_id: '66e5f84c-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        }

                    ]
                })
                const kategori_belanja = await tx.transaksi_kategoris.create({
                    data: {
                        id: uuidv4(),
                        group_id: group.id,
                        tipe: 'keluar',
                        nama: 'belanja',
                        user_id: user.id,
                        created_at: datetimeServer,
                    }
                })
                await tx.transaksi_kategoris.createMany({
                    data: [
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_belanja.id,
                            tipe: 'keluar',
                            nama: 'Pakaian',
                            label_id: '6fa7556f-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_belanja.id,
                            tipe: 'keluar',
                            nama: 'Obat',
                            label_id: '6fa7556f-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_belanja.id,
                            tipe: 'keluar',
                            nama: 'Elektronik',
                            label_id: '6fa7556f-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_belanja.id,
                            tipe: 'keluar',
                            nama: 'Keperluan Diri',
                            label_id: '6fa7556f-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_belanja.id,
                            tipe: 'keluar',
                            nama: 'Aksesoris',
                            label_id: '66e5f84c-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_belanja.id,
                            tipe: 'keluar',
                            nama: 'Peralatan Rumah',
                            label_id: '6fa7556f-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                    ]
                })
                const kategori_transportasi = await tx.transaksi_kategoris.create({
                    data: {
                        id: uuidv4(),
                        group_id: group.id,
                        tipe: 'keluar',
                        nama: 'transportasi',
                        user_id: user.id,
                        created_at: datetimeServer,
                    }
                })
                await tx.transaksi_kategoris.createMany({
                    data: [
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_transportasi.id,
                            tipe: 'keluar',
                            nama: 'Angkutan Umum',
                            label_id: '6fa7556f-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                    ]
                })
                const kategori_Kendaraan = await tx.transaksi_kategoris.create({
                    data: {
                        id: uuidv4(),
                        group_id: group.id,
                        tipe: 'keluar',
                        nama: 'Kendaraan',
                        user_id: user.id,
                        created_at: datetimeServer,
                    }
                })
                await tx.transaksi_kategoris.createMany({
                    data: [
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_Kendaraan.id,
                            tipe: 'keluar',
                            nama: 'Parkir',
                            label_id: '6fa7556f-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_Kendaraan.id,
                            tipe: 'keluar',
                            nama: 'Bensin',
                            label_id: '6fa7556f-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_Kendaraan.id,
                            tipe: 'keluar',
                            nama: 'Perawatan kendaraan',
                            label_id: '6fa7556f-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_Kendaraan.id,
                            tipe: 'keluar',
                            nama: 'Cuci Kendaraan',
                            label_id: '6fa7556f-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                    ]
                })
                const kategori_Kehidupan = await tx.transaksi_kategoris.create({
                    data: {
                        id: uuidv4(),
                        group_id: group.id,
                        tipe: 'keluar',
                        nama: 'Kehidupan',
                        user_id: user.id,
                        created_at: datetimeServer,
                    }
                })
                await tx.transaksi_kategoris.createMany({
                    data: [
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_Kehidupan.id,
                            tipe: 'keluar',
                            nama: 'Olahraga',
                            label_id: '6fa7556f-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_Kehidupan.id,
                            tipe: 'keluar',
                            nama: 'Buku',
                            label_id: '6fa7556f-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_Kehidupan.id,
                            tipe: 'keluar',
                            nama: 'Pendidikan',
                            label_id: '6fa7556f-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_Kehidupan.id,
                            tipe: 'keluar',
                            nama: 'Kesehatan',
                            label_id: '6fa7556f-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                    ]
                })
                const kategori_hiburan = await tx.transaksi_kategoris.create({
                    data: {
                        id: uuidv4(),
                        group_id: group.id,
                        tipe: 'keluar',
                        nama: 'Hiburan',
                        user_id: user.id,
                        created_at: datetimeServer,
                    }
                })
                await tx.transaksi_kategoris.createMany({
                    data: [
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_hiburan.id,
                            tipe: 'keluar',
                            nama: 'Hobi',
                            label_id: '66e5f84c-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_hiburan.id,
                            tipe: 'keluar',
                            nama: 'Liburan',
                            label_id: '66e5f84c-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_hiburan.id,
                            tipe: 'keluar',
                            nama: 'Event',
                            label_id: '66e5f84c-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_hiburan.id,
                            tipe: 'keluar',
                            nama: 'Bioskop',
                            label_id: '66e5f84c-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                    ]
                })
                const kategori_keuangan = await tx.transaksi_kategoris.create({
                    data: {
                        id: uuidv4(),
                        group_id: group.id,
                        tipe: 'keluar',
                        nama: 'Keuangan',
                        user_id: user.id,
                        created_at: datetimeServer,
                    }
                })
                await tx.transaksi_kategoris.createMany({
                    data: [
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_keuangan.id,
                            tipe: 'keluar',
                            nama: 'biaya',
                            label_id: '753f8e47-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_keuangan.id,
                            tipe: 'keluar',
                            nama: 'anak',
                            label_id: '753f8e47-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_keuangan.id,
                            tipe: 'keluar',
                            nama: 'denda',
                            label_id: '753f8e47-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_keuangan.id,
                            tipe: 'keluar',
                            nama: 'asuransi',
                            label_id: '753f8e47-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_keuangan.id,
                            tipe: 'keluar',
                            nama: 'pajak',
                            label_id: '753f8e47-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_keuangan.id,
                            tipe: 'keluar',
                            nama: 'investasi',
                            label_id: '6fa7556f-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },

                    ]
                })
                const kategori_tagihan = await tx.transaksi_kategoris.create({
                    data: {
                        id: uuidv4(),
                        group_id: group.id,
                        tipe: 'keluar',
                        nama: 'Tagihan & utilitas',
                        user_id: user.id,
                        created_at: datetimeServer,
                    }
                })
                await tx.transaksi_kategoris.createMany({
                    data: [
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_tagihan.id,
                            tipe: 'keluar',
                            nama: 'Sewa',
                            label_id: '6fa7556f-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_tagihan.id,
                            tipe: 'keluar',
                            nama: 'Air',
                            label_id: '6fa7556f-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_tagihan.id,
                            tipe: 'keluar',
                            nama: 'Gas',
                            label_id: '6fa7556f-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_tagihan.id,
                            tipe: 'keluar',
                            nama: 'Internet',
                            label_id: '6fa7556f-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_tagihan.id,
                            tipe: 'keluar',
                            nama: 'Listrik',
                            label_id: '6fa7556f-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_tagihan.id,
                            tipe: 'keluar',
                            nama: 'Pulsa',
                            label_id: '6fa7556f-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_tagihan.id,
                            tipe: 'keluar',
                            nama: 'Keamanan',
                            label_id: '6fa7556f-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },

                    ]
                })
                const kategori_hadiah = await tx.transaksi_kategoris.create({
                    data: {
                        id: uuidv4(),
                        group_id: group.id,
                        tipe: 'keluar',
                        nama: 'Hadiah & Donasi',
                        user_id: user.id,
                        created_at: datetimeServer,
                    }
                })
                await tx.transaksi_kategoris.createMany({
                    data: [
                        {
                            id: uuidv4(),
                            group_id: group.id,
                            partOf: kategori_hadiah.id,
                            tipe: 'keluar',
                            nama: 'Hadiah',
                            label_id: '66e5f84c-2547-11ef-af81-d8bbc1fa90cb',
                            user_id: user.id,
                            created_at: datetimeServer,
                        },

                    ]
                })
                const kategori_hilang = await tx.transaksi_kategoris.create({
                    data: {
                        id: uuidv4(),
                        group_id: group.id,
                        tipe: 'keluar',
                        nama: 'hilang',
                        user_id: user.id,
                        created_at: datetimeServer,
                    }
                })


                return res.status(200).json({ msg: 'Pengguna berhasil didaftarkan', user: newUser });
            })
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    } catch (error) {

        console.error('Error:', error);
        res.status(500).json({ msg: 'Terjadi kesalahan saat mendaftarkan ' + error });
    }
}

exports.login = async (req, res) => {

    const { email, password } = req.body;

    try {
        await Promise.all([
            body('email').notEmpty().withMessage('wajib di isi').isEmail().withMessage('isi email dengan benar').run(req),
            body('password').notEmpty().withMessage('wajib di isi').run(req),
        ])

        const errorsValidator = validationResult(req);
        if (!errorsValidator.isEmpty()) {
            return res.status(422).json({ errors: errorsValidator.array() });
        }

        const datetimeServer = new Date();
        const datetimeClient = waktuConvertServerToClient(datetimeServer);

        const user = await db.siuang.users.findUnique({
            where: {
                email,
            },
        });

        if (!user) {
            return res.status(400).json({ msg: 'Pengguna tidak ditemukan' });
        }

        if (user.isaktif == false) {
            return res.status(400).json({ msg: 'Pengguna tidak aktif' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ msg: 'Password salah' });
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
        res.status(500).json({ msg: 'Terjadi kesalahan saat mencoba masuk' + error });
    }
};

exports.refreshToken = async (req, res) => {
    const { refreshToken } = req.body;

    try {
        const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET);

        if (!decoded || !decoded.id) {
            return res.status(401).json({ msg: 'Token refresh tidak valid' });
        }

        const currentTime = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik
        if (decoded.exp < currentTime) {
            return res.status(401).json({ msg: 'Token telah kedaluwarsa' })
        }

        const user = await db.siuang.users.findUnique({
            where: {
                id: decoded.id,
            },
        });

        if (!user) {
            return res.status(401).json({ msg: 'Pengguna tidak ditemukan' });
        }

        if (refreshToken != user.tokenRefresh) {
            return res.status(401).json({ msg: 'Token refresh tidak berlaku' });
        }


        if (user.isaktif == false) {
            return res.status(401).json({ msg: 'Pengguna tidak aktif' });
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
        if (error.name === 'TokenExpiredError') {
            console.error('TokenExpiredError:', error); // Logging error
            return res.status(401).json({ msg: 'Token akses sudah kedaluwarsa' });
        } else if (error.name === 'JsonWebTokenError') {
            console.error('JsonWebTokenError:', error); // Logging error
            return res.status(401).json({ msg: 'Token akses tidak valid:' + error.message });
        } else {
            console.error('Error:', error); // Logging error
            return res.status(401).json({ msg: 'Token akses tidak valid' + error.message });
        }
    }
}

exports.user = async (req, res) => {
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

        let user = await db.siuang.users.findUnique({
            where: {
                id: decoded.id,
            },
            select: {
                id: true,
                nama: true,
                email: true,
                phone: true,
                isaktif: true,
                group_id: true,
                google_id: true,
                lastSeenAt: true,
                token: true,
                created_at: true
            }
        });

        if (!user) {
            return res.status(401).json({ msg: 'Pengguna tidak ditemukan' });
        }

        if (accessToken != user.token) {
            return res.status(403).json({ msg: 'Token akses tidak berlaku' });
        }

        return res.status(200).json({ msg: 'Token masih berlaku', data: user });
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
};

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
const db = require('../../../config/db')

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { z } = require('zod');
const { waktuConvertServerToClient, waktuServerTambahHari, waktuConvertClientToServer, waktuServerTambahMenit } = require("../../../config/datetime");
const { v4: uuidv4 } = require('uuid');
const { user } = require('../../../seeder/seeder');
const { body, validationResult } = require('express-validator');

exports.get = async (req, res) => {
    try {
        const { page = 1, limit = 10, orderBy = 'desc', aset_akun_id } = req.query;

        // Hitung jumlah data yang akan dilewati (skip)
        const skip = (page - 1) * limit;
        // Ambil jumlah data yang diinginkan (limit)
        const take = parseInt(limit);
        const where = {
            group_id: req.user.group_id,
        };
         
        if (aset_akun_id !== null) {
            where.aset_akun_id = aset_akun_id;
        }
        const transaksis = await db.siuang.transaksis.findMany({
            skip: skip,
            take: take,
            orderBy: {
                created_at: orderBy
            },
            where: where
        });

        return res.status(200).json(transaksis)

    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}
exports.create = async (req, res) => {
    try {

        await body('transaksi_kategori_id').notEmpty().withMessage('Wajib diisi').run(req);
        await body('aset_akun_id').notEmpty().withMessage('Wajib diisi').run(req);
        await body('nominal').notEmpty().withMessage('Wajib diisi').run(req);

        await body('catatan').isLength({ max: 150 }).withMessage('maksimal 150 huruf').run(req);
        await body('created_at').notEmpty().withMessage('Wajib diisi').run(req);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const { transaksi_kategori_id, aset_akun_id, nominal, catatan, img, transaksiOf } = req.body
        let { label_id, isLaporan, created_at } = req.body

        const group_id = req.user.group_id

        created_at = waktuConvertClientToServer(created_at)
        const user_id = req.user.id
        if (isEmpty(isLaporan)) {
            isLaporan = true
        }
        // cek transaksi kategori, apakah tipe masuk
        const transaksi_kategori = await db.siuang.transaksi_kategoris.findFirst({
            where: {
                id: transaksi_kategori_id,
                OR: [
                    { group_id: group_id },
                    { group_id: null }
                ]
            }
        });
        if (!transaksi_kategori) {
            return res.status(400).json({ msg: 'kategori tidak ada' })
        }
        const tipe = transaksi_kategori.tipe
        if (!label_id) {
            if (transaksi_kategori.label_id) {
                label_id = transaksi_kategori.label_id
            }
        }
        // cek aset akun
        const aset_akun = await db.siuang.aset_akuns.findUnique({
            where: {
                id: aset_akun_id,
                group_id: group_id
            }
        })
        if (!aset_akun) {
            return res.status(400).json({ msg: 'aset akun tidak ada' })
        }
        // jika ada aset akun
        // cek saldo pada aset akun 
        const transaksis = await db.siuang.transaksis.findMany({
            where: {
                aset_akun_id: aset_akun.id,
                group_id: group_id
            }
        });


        // cek apakah saldo cukup untuk melakukan pengurangan jika tipe keluar
        if (tipe == 'keluar') {
            const totalMasuk = transaksis.reduce((acc, transaksi) => {
                if (transaksi.tipe === 'masuk') {
                    return acc + parseInt(transaksi.nominal);
                } else {
                    return acc;
                }
            }, 0);

            const totalKeluar = transaksis.reduce((acc, transaksi) => {
                if (transaksi.tipe === 'keluar') {
                    return acc + parseInt(transaksi.nominal);
                } else {
                    return acc;
                }
            }, 0);

            const saldo = totalMasuk - totalKeluar
            if (saldo < Number(nominal)) {
                return res.status(400).json({ msg: 'saldo tidak cukup' })
            }
        }

        await db.siuang.$transaction(async (tx) => {
            const data = await tx.transaksis.create({
                data: {
                    id: uuidv4(),
                    tipe,
                    transaksi_kategori_id,
                    label_id: label_id ? label_id : null,
                    aset_akun_id,
                    nominal: Number(nominal),
                    group_id,
                    user_id,
                    created_at,
                    isLaporan: Boolean(isLaporan),
                    catatan: catatan ? catatan : null,
                    img: img ? img : null
                }
            })

            return res.json({
                msg: 'success',
                data: data
            });
        })
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};


exports.transfer = async (req, res) => {
    try {
        const { aset_akun_asal_id, aset_akun_tujuan_id, nominal, catatan } = req.body
        let { isLaporan, created_at } = req.body
        const group_id = req.user.group_id
        created_at = waktuConvertClientToServer(created_at)
        const user_id = req.user.id
        if (!isLaporan) {
            isLaporan = false
        }


        await body('aset_akun_asal_id').notEmpty().withMessage('Wajib diisi').run(req);
        await body('aset_akun_tujuan_id').notEmpty().withMessage('Wajib diisi').run(req);
        await body('nominal').notEmpty().withMessage('Wajib diisi').run(req);
        await body('catatan').isLength({ max: 150 }).withMessage('maksimal 150 huruf').run(req);
        await body('created_at').notEmpty().withMessage('Wajib diisi').run(req);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        // create asal
        // aset asal
        // KELUAR 
        // cek aset akun
        const aset_akun_asal = await db.siuang.aset_akuns.findUnique({
            where: {
                id: aset_akun_asal_id,
                group_id: group_id
            }
        })
        if (!aset_akun_asal) {
            return res.status(400).json({ msg: 'aset akun tidak ada' })
        }
        // jika ada aset akun
        // cek saldo pada aset akun 
        const transaksis = await db.siuang.transaksis.findMany({
            where: {
                aset_akun_id: aset_akun_asal_id,
                group_id: group_id
            }
        });
        let saldo;
        if (transaksis) {
            const totalMasuk = transaksis.reduce((acc, transaksi) => {
                if (transaksi.tipe === 'masuk') {
                    return acc + parseInt(transaksi.nominal);
                } else {
                    return acc;
                }
            }, 0);
            const totalKeluar = transaksis.reduce((acc, transaksi) => {
                if (transaksi.tipe === 'keluar') {
                    return acc + parseInt(transaksi.nominal);
                } else {
                    return acc;
                }
            }, 0);

            saldo = totalMasuk - totalKeluar
        } else {
            saldo = 0
        }
        // return res.json(saldo)

        if (saldo < Number(nominal)) {

            return res.status(400).json({ msg: 'saldo tidak cukup' })
        }

        const aset_akun_tujuan = await db.siuang.aset_akuns.findUnique({
            where: {
                id: aset_akun_tujuan_id,
                group_id: group_id
            }
        })
        if (!aset_akun_tujuan) {
            return res.status(400).json({ msg: 'aset akun tidak ada' })
        }
        await db.siuang.$transaction(async (tx) => {
            const dataAsal = await tx.transaksis.create({
                data: {
                    id: uuidv4(),
                    tipe: 'keluar',
                    transaksi_kategori_id: 'c499bf0e-255c-11ef-af81-d8bbc1fa90cb',
                    aset_akun_id: aset_akun_asal_id,
                    nominal: Number(nominal),
                    group_id,
                    user_id,
                    created_at,
                    isLaporan: Boolean(isLaporan),
                    catatan: catatan ? catatan : null,
                }
            })

            // create tujuan
            // aset tujuan
            // MASUK 

            const dataTujuan = await tx.transaksis.create({
                data: {
                    id: uuidv4(),
                    tipe: 'masuk',
                    transaksi_kategori_id: 'bd0c0baf-255c-11ef-af81-d8bbc1fa90cb',
                    aset_akun_id: aset_akun_tujuan_id,
                    nominal: Number(nominal),
                    group_id,
                    user_id,
                    created_at,
                    transaksiOf: dataAsal.id,
                    isLaporan: Boolean(isLaporan),
                    catatan: catatan ? catatan : null,
                }
            })

            await tx.transaksis.update({
                where: {
                    id: dataAsal.id
                },
                data: {
                    transaksiOf: dataTujuan.id
                }
            })

            return res.json({
                msg: 'success',
                data: { dataAsal, dataTujuan }
            });
        })
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};


exports.update = async (req, res) => {
    try {
        const { id } = req.body

        // kebutuhan edit
        let {
            transaksi_kategori_id,
            aset_akun_id,
            nominal,
            catatan,
            img,
        } = req.body
        let { label_id, isLaporan, created_at } = req.body

        const group_id = req.user.group_id

        created_at = waktuConvertClientToServer(created_at)
        const user_id = req.user.id

        // cari transaksi id dan group_id

        // pada transaksi cek dahulu, jika transfer tidak boleh ganti kategori, label, isLaporan, 
        const transaksi = await db.siuang.transaksis.findFirst({
            where: {
                id: id,
                group_id: group_id
            }
        })
        if (!transaksi) {
            return res.status(404).json({ msg: 'transaksi tidak ditemukan' })
        }

        nominal = transaksi.nominal == nominal ? transaksi.nominal : nominal

        created_at = transaksi.created_at == null ? transaksi.created_at : created_at
        if (Number(nominal) <= 0) {
            return res.status(400).json({ msg: 'tidak boleh kuran dari 1' })
        }

        if (!transaksi.transaksiOf) {

            if (!isLaporan) {
                isLaporan = true
            }
            if (!label_id) {
                label_id = null
            }
            if (!catatan) {
                catatan = null
            }

            // jika bukan transfer
            transaksi_kategori_id = transaksi_kategori_id == null ? transaksi.transaksi_kategori_id : transaksi_kategori_id
            aset_akun_id = aset_akun_id == null ? transaksi.aset_akun_id : aset_akun_id
            catatan = catatan == null ? transaksi.catatan : catatan
            img = img == null ? transaksi.img : img
            label_id = label_id == null ? transaksi.label_id : label_id
            isLaporan = isLaporan == null ? transaksi.isLaporan : isLaporan
            // return res.json(transaksi.transaksi_kategori_id)
            // cek kategori
            const transaksi_kategoris = await db.siuang.transaksi_kategoris.findFirst({
                where: {
                    id: transaksi_kategori_id,
                    OR: [
                        { group_id: group_id },
                        { group_id: null }
                    ]
                }
            });
            if (!transaksi_kategoris) {
                return res.status(400).json({ msg: 'kategori tidak ada' })
            }
            label_id = label_id == null ? transaksi_kategoris.label_id : label_id
            const tipe = transaksi_kategoris.tipe
            // cek aset_akun
            const aset_akuns = await db.siuang.aset_akuns.findFirst({
                where: {
                    id: aset_akun_id,
                    group_id: group_id
                }
            })

            if (!aset_akuns) {
                return res.status(400).json({ msg: 'aset tidak ada' })
            }

            // sini
            const transaksis = await db.siuang.transaksis.findMany({
                where: {
                    aset_akun_id: aset_akun_id,
                    group_id: group_id
                }
            });
            const totalMasuk = transaksis.reduce((acc, transaksi) => {
                if (transaksi.tipe === 'masuk') {
                    return acc + parseInt(transaksi.nominal);
                } else {
                    return acc;
                }
            }, 0);

            const totalKeluar = transaksis.reduce((acc, transaksi) => {
                if (transaksi.tipe === 'keluar') {
                    return acc + parseInt(transaksi.nominal);
                } else {
                    return acc;
                }
            }, 0);
            const saldo = totalMasuk - totalKeluar
            if (transaksi.tipe == 'masuk') {
                var saldoReal = saldo - Number(transaksi.nominal)
            } else {
                var saldoReal = saldo + Number(transaksi.nominal)
            }
            if (tipe == 'keluar') {
                if (saldoReal < Number(nominal)) {
                    return res.status(400).json({ msg: 'saldo tidak cukup' })
                }
            }

            await db.siuang.$transaction(async (tx) => {
                const updateTransaksi = await tx.transaksis.update({
                    where: {
                        id: id,
                        group_id: group_id
                    },
                    data: {
                        tipe: tipe,
                        transaksi_kategori_id: transaksi_kategori_id,
                        label_id: label_id ? label_id : null,
                        aset_akun_id: aset_akun_id,
                        nominal: Number(nominal),
                        catatan: catatan ? catatan : null,
                        img: img ? img : null,
                        isLaporan: Boolean(isLaporan),
                        created_at: created_at,
                        updated_at: new Date()
                    }
                })
                return res.status(200).json({
                    msg: 'success',
                    data: updateTransaksi
                })
            })
        } else {
            // return res.json('update transfer dalam pengembangan')
            // jika transfer | ubah 
            let { aset_akun_asal_id, aset_akun_tujuan_id } = req.body
            if (!aset_akun_asal_id) {
                return res.status(400).json({ msg: 'isi aset_akun_asal_id' })
            }
            if (!aset_akun_tujuan_id) {
                return res.status(400).json({ msg: 'isi aset_akun_tujuan_id' })
            }
            // cek transaksi
            const transaksi = await db.siuang.transaksis.findFirst({
                where: {
                    id: id,
                    group_id: group_id
                }
            })
            if (!transaksi) {
                return res.status(404).json({ msg: 'transaksi tidak ditemukan' })
            }

            // cek kategori aset_akun_asal_id
            const asetAkunAsal = await db.siuang.aset_akuns.findFirst({
                where: {
                    id: aset_akun_asal_id,
                    group_id: group_id
                }
            })
            if (!asetAkunAsal) {
                return res.status(404).json({ msg: 'aset asal tidak ditemukan' })
            }
            const asetAkunTujuan = await db.siuang.aset_akuns.findFirst({
                where: {
                    id: aset_akun_tujuan_id,
                    group_id: group_id
                }
            })
            if (!asetAkunTujuan) {
                return res.status(404).json({ msg: 'aset tujuan tidak ditemukan' })
            }

            // cek kategori aset_akun_tujuan_id

            // tentukan variabel
            if (!isLaporan) {
                isLaporan = false
            }
            if (!catatan) {
                catatan = null
            }

            isLaporan = isLaporan == null ? transaksi.isLaporan : isLaporan
            catatan = catatan == null ? transaksi.catatan : catatan

            const tipe = transaksi.tipe
            // mencari id asal/keluar ;; tujuan/masuk
            // cek tujuan / tansaksiOf
            let idAsal
            let idTujuan

            if (tipe == 'keluar') {
                idAsal = transaksi.id
                idTujuan = transaksi.transaksiOf


            } else {
                idAsal = transaksi.transaksiOf
                idTujuan = transaksi.id
            }

            const transaksis = await db.siuang.transaksis.findMany({
                where: {
                    aset_akun_id: aset_akun_asal_id,
                    group_id: group_id
                }
            });
            const totalMasuk = transaksis.reduce((acc, transaksi) => {
                if (transaksi.tipe === 'masuk') {
                    return acc + parseInt(transaksi.nominal);
                } else {
                    return acc;
                }
            }, 0);

            const totalKeluar = transaksis.reduce((acc, transaksi) => {
                if (transaksi.tipe === 'keluar') {
                    return acc + parseInt(transaksi.nominal);
                } else {
                    return acc;
                }
            }, 0);

            const saldo = totalMasuk - totalKeluar
            const saldoReal = saldo - Number(transaksi.nominal)
            // return res.json({saldo, saldoReal, tipe, idAsal, aset_akun_asal_id, idTujuan, aset_akun_asal_id, nominal})
            if (saldoReal < (Number(nominal))) {
                return res.status(400).json({ msg: 'saldo tidak cukup' })
            }

            await db.siuang.$transaction(async (tx) => {
                const updateTransaksiAsal = await tx.transaksis.update({
                    where: {
                        id: idAsal
                    },
                    data: {
                        aset_akun_id: aset_akun_asal_id,
                        nominal: Number(nominal),
                        catatan: catatan ? catatan : null,
                        isLaporan: Boolean(isLaporan),
                        created_at: created_at,
                        updated_at: new Date()
                    }
                })
                const updateTransaksiTujuan = await tx.transaksis.update({
                    where: {
                        id: idTujuan
                    },
                    data: {
                        aset_akun_id: aset_akun_tujuan_id,
                        nominal: Number(nominal),
                        catatan: catatan ? catatan : null,
                        isLaporan: Boolean(isLaporan),
                        created_at: created_at,
                        updated_at: new Date()
                    }
                })

                return res.status(200).json({
                    msg: 'success',
                    data: {
                        updateTransaksiAsal, updateTransaksiTujuan
                    }
                })
            })
        }
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}


exports.delete = async (req, res) => {
    try {
        const { id } = req.body
        const { group_id } = req.user.group_id

        // Cari data berdasarkan id dan group_id
        const existingData = await db.siuang.transaksis.findFirst({
            where: {
                id: id,
                group_id: group_id
            }
        });
        // Jika data tidak ditemukan, kembalikan respon 404
        if (!existingData) {
            return res.status(404).json({ msg: 'Data not found' });
        }
        const deletedData = await db.siuang.transaksis.delete({
            where: {
                id: id
            }
        });
        if (existingData.transaksiOf) {
            // bukan transfer
            // Hapus data yang ditemukan
            var deletedData2 = await db.siuang.transaksis.delete({
                where: {
                    id: existingData.transaksiOf
                }
            });
        }




        return res.status(200).json({
            msg: 'success',
            data: { deletedData, deletedData2 }
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'error',
            data: error
        })

    }
}
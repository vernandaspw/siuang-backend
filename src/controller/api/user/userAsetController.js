const db = require('../../../config/db')

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { z } = require('zod');
const { waktuConvertServerToClient, waktuServerTambahHari } = require("../../../config/datetime");
const { v4: uuidv4 } = require('uuid');
const { user } = require('../../../seeder/seeder');

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

exports.getAll = async (req, res) => {
    try {
        
        const groupId = req.user.group_id; 
        
        const transaksis = await db.siuang.transaksis.findMany({
            where: {
                group_id: groupId,
            }
        });

        if (!groupId) {
            return res.status(400).json({
                msg: 'group id wajib di isi',
            });
        }

        const kategoris = await db.siuang.aset_kategoris.findMany({
            where: {
                group_id: groupId,
                deleted_at: null
            }
        });

        const asets = await db.siuang.asets.findMany({
            where: {
                group_id: groupId,
                deleted_at: null
            }
        });

        const aset_akuns = await db.siuang.aset_akuns.findMany({
            where: {
                group_id: groupId,
                deleted_at: null
            }
        });

        // Map untuk menyimpan aset_akun berdasarkan aset_id
        const asetAkunMap = new Map();
        aset_akuns.forEach(aset_akun => {
            if (!asetAkunMap.has(aset_akun.aset_id)) {
                asetAkunMap.set(aset_akun.aset_id, []);
            }
            asetAkunMap.get(aset_akun.aset_id).push(aset_akun);
        });

        // Menambahkan aset_akuns ke dalam asets yang sesuai dan menghitung saldo aset_akun
        asets.forEach(aset => {
            aset.aset_akuns = asetAkunMap.get(aset.id) || [];
            aset.saldo = 0;
            aset.aset_akuns.forEach(aset_akun => {
                const transaksiAsetAkun = transaksis.filter(transaksi => transaksi.aset_akun_id === aset_akun.id);
                const saldoAsetAkun = transaksiAsetAkun.reduce((saldo, transaksi) => {
                    if (transaksi.tipe === 'masuk') {
                        return saldo + parseInt(transaksi.nominal);
                    } else if (transaksi.tipe === 'keluar') {
                        return saldo - parseInt(transaksi.nominal);
                    }
                }, 0);
                aset_akun.saldo = saldoAsetAkun;
                aset.saldo += saldoAsetAkun;
            });
        });

        // Menambahkan saldo pada aset_kategoris dan menghitung saldo aset_akun untuk setiap kategori
        kategoris.forEach(kategori => {
            kategori.asets = asets.filter(aset => aset.aset_kategori_id === kategori.id);
            kategori.aset_akuns = kategori.asets.reduce((acc, cur) => {
                return acc.concat(cur.aset_akuns);
            }, []);
            kategori.saldo = kategori.asets.reduce((saldo, aset) => saldo + aset.saldo, 0);
        });

        // Filter asets dan aset_akuns yang tidak memiliki aset_kategori_id
        const tanpa_kategoris = {
            asets: asets.filter(aset => !aset.aset_kategori_id),
            aset_akuns: aset_akuns.filter(aset_akun => {
                const aset = asets.find(aset => aset.id === aset_akun.aset_id);
                return !aset || !aset.aset_kategori_id;
            })
        };

        return res.json({
            msg: 'success',
            data: {
                kategoris,
                tanpa_kategoris
            }
        });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

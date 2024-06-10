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
        const user = req.user
        // return res.json(user)
        const datas = await db.siuang.group_users.findMany({
            where: {
                user_id: user.id,
            }
        });

        return res.json({
            msg: 'success',
            data: datas
        });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const { nama } = req.body
        if (!nama) {
            return res.status(400).json({ msg: 'nama wajib di isi' })
        }
        await db.siuang.$transaction(async (tx) => {
            const user = req.user
            const groups = await tx.groups.create({
                data: {
                    id: uuidv4(),
                    nama: nama,
                    user_id: user.id,
                    isPremium: true,
                    premium_expired_at: waktuServerTambahHari(new Date(), 7),
                    created_at: new Date()
                }
            });

            const group_users = await tx.group_users.create({
                data: {
                    id: uuidv4(),
                    user_id: user.id,
                    group_id: groups.id,
                    status: 'aktif',
                    role: 'admin',
                    created_at: new Date(),
                }
            });

            return res.json({
                msg: 'success',
                data: { groups, group_users }
            });
        })
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

exports.pilihGroup = async (req, res) => {
    //  bisa pilih jika status : aktif
    try {
        const { group_user_id } = req.body
        if (!group_user_id) {
            return res.status(400).json({ msg: 'pilih group!' })
        }
        const group_user = await db.siuang.group_users.findUnique({
            where: {
                id: group_user_id
            }
        })
        if (!group_user) {
            return res.status(400).json({ msg: 'group tidak ditemukan' })
        }
        if (group_user.status != 'aktif') {
            return res.status(400).json({ msg: 'status :' + group_user.status })
        }

        // update
        await db.siuang.$transaction(async (tx) => {
            await tx.users.update({
                where: {
                    id: req.user.id
                },
                data: {
                    group_id: group_user.group_id,
                }
            })

            return res.status(200).json({ msg: 'berhasil pilih' })
        })
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}



exports.updateGroup = async (req, res) => {
    // yg bisa update admin
    try {
        const { group_user_id, nama } = req.body
        if (!group_user_id) {
            return res.status(400).json({ msg: 'pilih group!' })
        }
        if (!nama) {
            return res.status(400).json({ msg: 'nama wajib di isi!' })
        }

        const group_user = await db.siuang.group_users.findUnique({
            where: {
                id: group_user_id
            }
        })
        if (!group_user) {
            return res.status(400).json({ msg: 'group tidak ditemukan' })
        }
        if (group_user.status != 'aktif') {
            return res.status(400).json({ msg: 'status :' + group_user.status })
        }
        if (group_user.role != 'admin') {
            return res.status(400).json({ msg: 'status :' + group_user.status })
        }

        // update
        await db.siuang.$transaction(async (tx) => {
            const groupUpdated = await tx.groups.update({
                where: {
                    id: group_user.group_id
                },
                data: {
                    nama: nama
                }
            })

            return res.status(200).json({ msg: 'berhasil edit group: ' + groupUpdated.nama })
        })
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }

}
exports.deleteGroup = async (req, res) => {
    // yg bisa update admin
    try {
        const { group_user_id } = req.body
        if (!group_user_id) {
            return res.status(400).json({ msg: 'pilih group!' })
        }

        const group_user = await db.siuang.group_users.findUnique({
            where: {
                id: group_user_id
            }
        })
        if (!group_user) {
            return res.status(400).json({ msg: 'group tidak ditemukan' })
        }
        if (group_user.status != 'aktif') {
            return res.status(400).json({ msg: 'status :' + group_user.status })
        }
        if (group_user.role != 'admin') {
            return res.status(400).json({ msg: 'status :' + group_user.status })
        }
        const id = group_user.group_id
        // update

        await db.siuang.groups.findUnique({
            where: {
                id: id
            }
        });

        const group = await db.siuang.groups.delete({
            where: {
                id: id
            }
        });


        return res.status(200).json({ msg: 'berhasil hapus group' })

    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}

exports.addUser = async (req, res) => {
    // yg bisa add admin
    // yg bisa update admin
    try {
        const { group_user_id, user_id, status, role } = req.body
        if (!group_user_id) {
            return res.status(400).json({ msg: 'pilih group!' })
        }

        const group_user = await db.siuang.group_users.findUnique({
            where: {
                id: group_user_id
            }
        })
        if (!group_user) {
            return res.status(400).json({ msg: 'group tidak ditemukan' })
        }
        if (group_user.status != 'aktif') {
            return res.status(400).json({ msg: 'status :' + group_user.status })
        }
        if (group_user.role != 'admin') {
            return res.status(400).json({ msg: 'status :' + group_user.status })
        }

        const id = group_user.group_id

        // cek user apakah telah ada

        const cek = await db.siuang.group_users.findFirst({
            where: {
                group_id: id,
                user_id: user_id
            }
        });

        if (cek) {
            return res.status(400).json({ msg: 'user sudah ada di group' });
        }

        const tambahUser = await db.siuang.group_users.create({
            data: {
                group_id: id,
                user_id: user_id,
                status: status,
                role: role,
                created_at: new Date()
            }
        });



        return res.status(200).json({ msg: 'berhasil tambah user ' + tambahUser })

    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}

exports.updateUser = async (req, res) => {
    // yg bisa update admin
    const { group_user_id, status, role } = req.body
    try {
        if (!group_user_id) {
            return res.status(400).json({ msg: 'pilih user!' })
        }

        const group_user = await db.siuang.group_users.findUnique({
            where: {
                id: group_user_id
            }
        })
        if (!group_user) {
            return res.status(400).json({ msg: 'group tidak ditemukan' })
        }
        if (group_user.status != 'aktif') {
            return res.status(400).json({ msg: 'status :' + group_user.status })
        }
        if (group_user.role != 'admin') {
            return res.status(400).json({ msg: 'status :' + group_user.status })
        }



        const id = group_user.group_id

        // cek user apakah telah ada

        const cek = await db.siuang.group_users.findFirst({
           
        });

        if (cek) {
            return res.status(400).json({ msg: 'user sudah ada di group' });
        }

        const updateUser = await db.siuang.group_users.update({
            where: {
                id: group_user_id,
                user_id: group_user.user_id
            },
            data: {
                status: status,
                role: role,
                created_at: new Date()
            }
        });

        return res.status(200).json({ msg: 'berhasil update user ' + tambahUser })

    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }

}

exports.deleteUser = async (req, res) => {
    // yg bisa delete admin
    try {
        const { group_user_id } = req.body
        if (!group_user_id) {
            return res.status(400).json({ msg: 'pilih group!' })
        }

        const group_user = await db.siuang.group_users.findUnique({
            where: {
                id: group_user_id
            }
        })
        if (!group_user) {
            return res.status(400).json({ msg: 'group tidak ditemukan' })
        }
        if (group_user.status != 'aktif') {
            return res.status(400).json({ msg: 'status :' + group_user.status })
        }
        if (group_user.role != 'admin') {
            return res.status(400).json({ msg: 'status :' + group_user.status })
        }
    
        // update

        await db.siuang.group_users.findUnique({
            where: {
                id: group_user_id
            }
        });

        const group = await db.siuang.group_users.delete({
            where: {
                id: group_user_id
            }
        });

        return res.status(200).json({ msg: 'berhasil hapus group' })

    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}
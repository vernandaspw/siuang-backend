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
        const group_id = req.user.group_id
        const { tipe } = req.body

        const data = await db.siuang.transaksi_kategoris.findMany({
            where: {
                tipe: tipe,
                OR: [
                    { group_id: group_id },
                    { group_id: null }
                ]
            }
        });

        const parentMap = new Map();
        const datas = [];

        data.forEach(item => {
            if (item.partOf === null) {
                const parentItem = { ...item, children: [] };
                parentMap.set(item.id, parentItem);
                datas.push(parentItem);
            }
        });

        data.forEach(item => {
            if (item.partOf !== null) {
                if (parentMap.has(item.partOf)) {
                    parentMap.get(item.partOf).children.push(item);
                } else {
                    // Handle cases where parent might not be loaded yet
                    parentMap.set(item.partOf, { children: [item] });
                }
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

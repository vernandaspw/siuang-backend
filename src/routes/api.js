var express = require('express');
var router = express.Router();
const authAdminMiddleware = require('../middleware/authAdminMiddleware')
const authUserMiddleware = require('../middleware/authUserMiddleware')

router.get('/seed-user', require('../seeder/seeder').user);

router.post('/v1/admin/auth/login', require('../controller/api/admin/adminAuthController').login);
router.post('/v1/admin/auth/login-send-otp', require('../controller/api/admin/adminAuthController').sendOtp);
router.post('/v1/admin/auth/login-with-otp', require('../controller/api/admin/adminAuthController').loginWithOtp);
router.post('/v1/admin/auth/token', require('../controller/api/admin/adminAuthController').refreshToken);
router.post('/v1/admin/auth/logout', authAdminMiddleware, require('../controller/api/admin/adminAuthController').logout);

router.post('/v1/auth/daftar', require('../controller/api/user/userAuthController').register)
router.post('/v1/auth/login', require('../controller/api/user/userAuthController').login)
router.post('/v1/auth/token', require('../controller/api/user/userAuthController').refreshToken)
router.post('/v1/auth/logout', authUserMiddleware, require('../controller/api/user/userAuthController').logout)

// group
router.get('/v1/group', authUserMiddleware, require('../controller/api/user/groupController').getAll)
router.post('/v1/group/create', authUserMiddleware, require('../controller/api/user/groupController').create)
router.post('/v1/group/pilih', authUserMiddleware, require('../controller/api/user/groupController').pilihGroup)
router.put('/v1/group/update-group', authUserMiddleware, require('../controller/api/user/groupController').updateGroup)
router.delete('/v1/group/delete-group', authUserMiddleware, require('../controller/api/user/groupController').deleteGroup)
router.post('/v1/group/add-user', authUserMiddleware, require('../controller/api/user/groupController').addUser)
router.put('/v1/group/update-user', authUserMiddleware, require('../controller/api/user/groupController').updateUser)
router.delete('/v1/group/delete-user', authUserMiddleware, require('../controller/api/user/groupController').deleteUser)

// filtur aset
router.get('/v1/aset', authUserMiddleware, require('../controller/api/user/userAsetController').getAll)
// router.post('/v1/aset-kategori/create', authUserMiddleware, require('../controller/api/user/userAsetController').asetKategoriCreate)
// router.put('/v1/aset-kategori/update', authUserMiddleware, require('../controller/api/user/userAsetController').asetKategoriUpdate)
// router.delete('/v1/aset-kategori/delete', authUserMiddleware, require('../controller/api/user/userAsetController').asetKategoriDelete)
// router.post('/v1/asets/create', authUserMiddleware, require('../controller/api/user/userAsetController').asetsCreate)
// router.put('/v1/asets/update', authUserMiddleware, require('../controller/api/user/userAsetController').asetsUpdate)
// router.delete('/v1/asets/delete', authUserMiddleware, require('../controller/api/user/userAsetController').asetsDelete)
// router.post('/v1/aset-akun/create', authUserMiddleware, require('../controller/api/user/userAsetController').asetAkunCreate)
// router.put('/v1/aset-akun/update', authUserMiddleware, require('../controller/api/user/userAsetController').asetAkunUpdate)
// router.delete('/v1/aset-akun/delete', authUserMiddleware, require('../controller/api/user/userAsetController').asetAkunDelete)

// transaksi kategori
router.get('/v1/transaksi-kategori', authUserMiddleware, require('../controller/api/user/transaksiKategoriController').getAll)
// router.post('/v1/transaksi-kategori/create', authUserMiddleware, require('../controller/api/user/transaksiKategoriController').create)
// router.put('/v1/transaksi-kategori/update', authUserMiddleware, require('../controller/api/user/transaksiKategoriController').update)
// router.delete('/v1/transaksi-kategori/delete', authUserMiddleware, require('../controller/api/user/transaksiKategoriController').delete)

// transaksi
router.get('/v1/transaksi', authUserMiddleware, require('../controller/api/user/transaksiController').get)
router.post('/v1/transaksi/create', authUserMiddleware, require('../controller/api/user/transaksiController').create)
router.put('/v1/transaksi/update', authUserMiddleware, require('../controller/api/user/transaksiController').update)
router.post('/v1/transaksi/transfer', authUserMiddleware, require('../controller/api/user/transaksiController').transfer)
router.delete('/v1/transaksi/delete', authUserMiddleware, require('../controller/api/user/transaksiController').delete)

module.exports = router
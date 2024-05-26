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

router.post('/v1/auth/login', require('../controller/api/user/userAuthController').login)
router.post('/v1/auth/token', require('../controller/api/user/userAuthController').refreshToken)
router.post('/v1/auth/logout', authUserMiddleware, require('../controller/api/user/userAuthController').logout)

module.exports = router
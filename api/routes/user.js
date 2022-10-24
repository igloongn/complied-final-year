const express = require('express');
const { Users, createUser, login } = require('../controller/user');
const router = express.Router()



router.route('/').get(Users).post(createUser)
router.route('/login').post(login)


module.exports = router



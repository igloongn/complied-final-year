const express = require('express');
const { getTest } = require('../controller/test');
const { checkAuth } = require('../middleware/auth');
const router = express.Router()



router.route('/').get(checkAuth, getTest)


module.exports = router



const express = require('express');
const router = express.Router();
const {Login, userHistory} = require('../controllers/userController');


router.route('/').get(Login);
router.route('/userHistory').get(userHistory);

module.exports = router;
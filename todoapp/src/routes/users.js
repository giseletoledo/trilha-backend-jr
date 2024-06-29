const express = require('express');
const UsersController = require('../controllers/usersController');

const router = express.Router();

router.post('/signup', UsersController.signup);
router.post('/signin', UsersController.signin);

module.exports = router;

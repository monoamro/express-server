const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

// get request to homepage
router.get('/', usersController.getAll);

module.exports = router;
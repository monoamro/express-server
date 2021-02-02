const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

// get request to homepage
router.get('/', usersController.getAll);
router.get('/:id', usersController.getUserById);

module.exports = router;
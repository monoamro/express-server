const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/orders');

router.get('/', ordersController.getAll);
router.get('/:id', ordersController.getOrderById);
router.post('/', ordersController.insertNewOrder)

module.exports = router;
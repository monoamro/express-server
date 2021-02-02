const express = require('express');
const app = express();
require('dotenv').config()

const usersRoutes = require('./routes/users')
const ordersRoutes = require('./routes/orders')

const { PORT } = process.env;

app.use('/users', usersRoutes)
app.use('/orders', ordersRoutes)

app.listen(PORT, () => {console.log(`You're connected to port ${PORT}`)})


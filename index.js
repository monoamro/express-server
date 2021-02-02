const express = require('express');
const app = express();
require('dotenv').config()

const usersRoutes = require('./routes/users')

const { PORT } = process.env;

app.use('/users', usersRoutes)

app.listen(PORT, () => {console.log(`You're connected to port ${PORT}`)})


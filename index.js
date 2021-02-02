const { Console } = require('console');
const express = require('express');
const app = express();
const PORT = 3000;
const { Pool } = require('pg')

const { USER, HOST, DB, PASSWORD, DBPORT, PORT } = process.env;

const pool = new Pool ({
    user: USER,
    host: HOST,
    database: DB,
    password: PASSWORD,
    port: DBPORT
})

app.get('/', (req, res) => {res.send("Hello America")})

app.listen(PORT, () => {console.log(`You're connected to port ${PORT}`)})


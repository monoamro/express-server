require('dotenv').config()
const { Pool } = require('pg')

const { dbUSER, HOST, DB, PASSWORD, DBPORT } = process.env;

const pool = new Pool ({
    user: dbUSER,
    host: HOST,
    database: DB,
    password: PASSWORD,
    port: DBPORT
})

module.exports = pool;
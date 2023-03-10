import { Pool } from "pg";

const { DB_USER, DB_PASSWORD, DB_PORT, DB_HOST } = require("../main/config.js")


const pool = new Pool({
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    host: DB_HOST
})

module.exports = pool; 

const dotenv = require("dotenv");

dotenv.config({ path: "../../envs/.env" });

const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_USER = process.env.DB_USER;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_DATABASE = process.env.DB_DATABASE;

modules.exports = {
  DB_PASSWORD,
  DB_USER,
  DB_DATABASE,
  DB_HOST,
  DB_PORT,
};

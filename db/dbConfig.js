const pgp = require("pg-promise")();
require("dotenv").config();

const db = pgp(cn);

module.exports = db;
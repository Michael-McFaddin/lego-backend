const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./lego.db");

module.exports = db;

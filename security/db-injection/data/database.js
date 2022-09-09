const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "0.0.0.0",
  database: "security",
  user: "root",
  password: "your-pw",
});

module.exports = pool;

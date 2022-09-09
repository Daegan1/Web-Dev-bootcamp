const mysql = require("mysql2/promise");

mysql.createPool({
  host: "localhost",
  database: "blog",
  user: "root",
  password: "Daegan75",
});

module.exports = pool;

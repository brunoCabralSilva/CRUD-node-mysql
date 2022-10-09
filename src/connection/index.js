const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  port: 3333,
  database: 'sakila',
  user: 'root',
  password: 'root',
});

module.exports = connection;
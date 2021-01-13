// Establish connecction to MySQL database
const mysql = require('mysql');
let connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'Apple123!',
    database: 'inventory_db',
});

connection.connect();

module.exports = connection;
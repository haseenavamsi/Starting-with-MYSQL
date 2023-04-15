const mysql = require('mysql2');

const pool = mysql.createPool({
host:'localhost',
user:'root',
database:'node-complete',
password:'Haseena@9177'
});

module.exports = pool.promise(); 
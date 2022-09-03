const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    port:'3306',
    user:'root',
    database:'pushnotification',
    password:'1234'
})

module.exports = pool.promise();
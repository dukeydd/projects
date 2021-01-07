var mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

var con = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

con.connect(function(err) {
    if (err) throw err;
    console.log("I'm connected")
})
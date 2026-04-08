const mysql2 = require('mysql2');

const conn = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_react'
});

conn.connect((err) => {
    if (err) {
        console.log(err);
    }
    console.log('Conectado a MySQL');
});

module.exports = conn;
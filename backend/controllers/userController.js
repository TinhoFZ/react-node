const conn = require('../db/conn');
const logAction = require('../utils/logger');

exports.registerUser = (req, res) => {
    const { name, email, password } = req.body;
    
    const sql = `
        INSERT INTO users(name, email, password)
        VALUES(?, ?, ?)
    `
    
    conn.query(sql, [name, email, password], (err, result) => {
        if (err) {
            console.log(err);
            return res.send("Error");
        }

        const userId = result.insertId;

        logAction({
            id_user: insertId,
            action: 'USER_CREATED'
        });
    });
}
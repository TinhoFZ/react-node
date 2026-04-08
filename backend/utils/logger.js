const conn = require('../db/conn');

function logAction({ id_user, action }) {
    const sql = `
        INSERT INTO action_logs (id_user, action)
        VALUES (?, ?)
    `;

    conn.query(sql, [id_user, action], (err) => {
        if (err) {
            console.log('Erro no log: ', err);
        }
    });
}

module.exports = logAction;
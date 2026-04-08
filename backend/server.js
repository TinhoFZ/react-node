const express = require('express')

const app = express();

const userRoutes = require('./routes/users');
app.use('/users', userRoutes)

app.get('/', (req, res) => {
    res.send("Conectado com MySQL");
});

app.listen(3001, () => {
    console.log("Servidor na porta 3001");
});
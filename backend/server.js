const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/mensagem", (req, res) => {
    res.json({ mensagem: "Node está rodando" });
});

app.listen(3001, () => {
    console.log("Servidor na porta 3001");
});
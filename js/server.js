const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { inserirContratos } = require('./db_insert');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/contratos', (req, res) => {
    const contratos = req.body.contratos;
    inserirContratos(contratos);
    res.status(200).send('Contratos inseridos com sucesso');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
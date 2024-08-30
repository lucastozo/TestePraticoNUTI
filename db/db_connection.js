const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "dbNUTI"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Conectado");
});

function insert(contrato) {
  const sql = `CALL InserirContrato(
      '${contrato.dataInicio}', 
      '${contrato.dataFim}', 
      '${contrato.empresa}', 
      '${contrato.servico}', 
      ${contrato.valor}
      );`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log('Contrato inserido (caso já não exista)');
  });
}

class Contrato {
  constructor(dataInicio, dataFim, empresa, servico, valor) {
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;
    this.empresa = empresa;
    this.servico = servico;
    this.valor = valor;
  }
}

module.exports = {
  Contrato,
  insert
};
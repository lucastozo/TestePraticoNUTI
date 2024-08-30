const { Contrato, insert } = require('../db/db_connection');

/* função para receber o array de contratos e inserir no banco de dados */
function inserirContratos(contratos) {
    if (contratos.length === 0) return;
    contratos.forEach(contrato => {
        let dataInicio = contrato.dataVigenciaInicio;
        let dataFim = contrato.dataVigenciaFim;
        let empresa = contrato.nomeRazaoSocialFornecedor;
        let servico = contrato.objetoContrato;
        let valor = contrato.valorInicial;
        let novoContrato = new Contrato(dataInicio, dataFim, empresa, servico, valor);
        db_insert(novoContrato);
    });
}

function db_insert(Contrato) {
    insert(Contrato);
}

module.exports = {
    inserirContratos
};
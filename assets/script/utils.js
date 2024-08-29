/* 
função para extrair somente os dados que
serão utilizados no desafio proposto
*/
async function extractUsefulData(data) {
    /* dados que serão utilizados */
    /*
        1. As informações do órgão
        2. Todos os contratos do órgão que possuem data inicial de vigência dentro do período informado. Para cada contrato, deve ser informado: data de vigência inicial, data de vigência final, razão social do fornecedor, objeto do contrato e valor inicial do contrato.
        3. O valor total dos contratos obtidos.
    */
   /* Exemplo de array recebido:
        {
            "numeroControlePncpCompra": "46522991000173-1-000099/2024",
            "codigoPaisFornecedor": "BRA",
            "nomeRazaoSocialFornecedor": "MIGRA DISTRIBUIDORA LTDA",
            "orgaoSubRogado": null,
            "orgaoEntidade": {
                "cnpj": "46522991000173",
                "razaoSocial": "MUNICIPIO DE JANDIRA",
                "poderId": "N",
                "esferaId": "M"
            },
            "anoContrato": 2024,
            "tipoContrato": {
                "id": 7,
                "nome": "Empenho"
            },
            "numeroContratoEmpenho": "06990",
            "dataAssinatura": "2024-08-01",
            "dataVigenciaInicio": "2024-08-01",
            "dataVigenciaFim": "2024-09-01",
            "niFornecedor": "48061037000156",
            "tipoPessoa": "PJ",
            "categoriaProcesso": {
                "id": 2,
                "nome": "Compras"
            },
            "dataPublicacaoPncp": "2024-08-14T09:49:03",
            "dataAtualizacao": "2024-08-14T09:49:03",
            "sequencialContrato": 35,
            "unidadeOrgao": {
                "ufNome": "São Paulo",
                "codigoUnidade": "1",
                "nomeUnidade": "Prefeitura Municipal de Jandira",
                "ufSigla": "SP",
                "municipioNome": "Jandira",
                "codigoIbge": "3525003"
            },
            "informacaoComplementar": "",
            "processo": "S/00038",
            "unidadeSubRogada": null,
            "niFornecedorSubContratado": null,
            "nomeFornecedorSubContratado": null,
            "receita": false,
            "tipoPessoaSubContratada": null,
            "objetoContrato": "AQUIS.DE BEBEDOURO ",
            "valorInicial": 7056,
            "numeroParcelas": 1,
            "valorParcela": 7056,
            "valorGlobal": 7056,
            "valorAcumulado": 7056,
            "numeroRetificacao": 0,
            "identificadorCipi": null,
            "urlCipi": null,
            "numeroControlePNCP": "46522991000173-2-000035/2024",
            "usuarioNome": "CONAM Consultoria em Administração Municipal"
        }
    */

    /*
        contratos (array):
            dataVigenciaInicio -> data.dataVigenciaInicio
            dataVigenciaFim -> data.dataVigenciaFim
            nomeRazaoSocialFornecedor -> data.nomeRazaoSocialFornecedor
            objetoContrato -> data.objetoContrato
            valorInicial -> data.valorInicial
            valorAcumulado -> data.valorAcumulado
        valorTotalContratos -> para cada contrato, somar o valorAcumulado
    */
    let contratos = [];
    let valorTotalContratos = 0;
    data = data.data;
    data.forEach(item => {
        contratos.push({
            dataVigenciaInicio: item.dataVigenciaInicio,
            dataVigenciaFim: item.dataVigenciaFim,
            nomeRazaoSocialFornecedor: item.nomeRazaoSocialFornecedor,
            objetoContrato: item.objetoContrato,
            valorInicial: item.valorInicial,
            valorAcumulado: item.valorAcumulado
        });
        valorTotalContratos += item.valorAcumulado;
    });
    return [contratos, valorTotalContratos];
}

/* função para converter a data de yyyy-mm-dd para dd/mm/yyyy */
function converterData(data) {
    let partes = data.split('-');
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}
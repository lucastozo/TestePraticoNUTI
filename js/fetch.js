async function getData() {
    const baseUrl = "https://pncp.gov.br/api/consulta/v1/contratos";
    const params = new URLSearchParams({
        dataInicial: '20240801', // 2024-08-01
        dataFinal: '20240831', // 2024-08-31
        cnpjOrgao: '46522991000173',
        pagina: '1'
    });
    const url = `${baseUrl}?${params.toString()}`;
    
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'accept': '*/*'
        },
    });
    
    if (response.ok) {
        const data = await response.json();
        return data;
    } else if (response.status === 500) {
        alert('Falha interna no servidor da API, tente novamente mais tarde');
        return null;
    }
    throw new Error(`Falha ao buscar dados: ${response.status}`);
}
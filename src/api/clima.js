import axios from "axios";

const api = axios.create({
  baseURL: "http:?/localhost:5000",
  timeout: 10000,
  headers: {
    Accept: 'application/json'
  }
})

async function buscarClimaApi(cidade){
    const { dados } = await api.get('/', {
        params: {cidade: cidade}
    })

    //localhost:5000/?cidade=São Paulo

    if (!dados || typeof dados !== 'object') {
        throw new Error('Resposta inválida da API');
    }
    if (dados.error){
        throw new Error(dados.error)
    }

    const clima = dados.weather || dados

    if (typeof clima !== 'object' || Array.isArray(clima)) {
        throw new Error('Resposta inválida da API');
    }
        return clima
}

export function obterrClimaErro(error){
    if (axios.isAxiosError(error)){
        return error.response.data.error
    }

    if(error.code === 'ECONNABORTED'){
        return 'Tempo de resposta da API esgotado'
    }

    if (!error.response) {
        return 'Não foi possível conectar à API'
    }

    if (error instanceof Error){
        return error.message
    } else {
        return "não foi possível obter o clima"
    }
    
}
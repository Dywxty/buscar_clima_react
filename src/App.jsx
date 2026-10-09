import { useEffect, useState } from "react";
import '../static/css/style.css'

function getTheme(icon = ''){
    const weatherIcons = String(icon).toLowerCase();

    if (weatherIcon.includes('rain')) || weatherIcon.includes('storm') {
        return 'rainy';
    }

    if (weatherIcon.includes('cloud')) {
        return 'cloudy';
    }

    if (weatherIcon.includes('night')) {
        return 'clear-night'; 
    }

    return 'sunny';
}

function App(){
    const cidade_incial = '';
    const [cidade, setCidade] = useState(cidade_incial);
    const [clima, setClima] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function buscarClima(cidade){
        setLoading(true)
        setError('')

        try{
            const result = await buscarClimaApi(cidade)
        } catch (error){
            setError(obterrClimaErro(error))
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (cidade_inicial !== ''){
            buscarClima(cidade_inicial.trim())
        }
    }
)

    return (
    <h1>Projeto buscar clima</h1>
    );
}
export default App;
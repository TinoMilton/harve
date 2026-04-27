import axios from 'axios';

const API_KEY = 'a4a120c8';

async function buscaFilmes(id_movie) {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=a4a120c8&i=${id_movie}`);
    console.log(response.data);
}

buscaFilmes();
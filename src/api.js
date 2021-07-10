import axios from 'axios'

const url = 'https://rickandmortyapi.com/api'

async function getAll(all)
{
    return await axios.get(`${url}/${all}`)
}

async function getPersonaje(url)
{
    return await axios.get(url)
}

export default{
    getAll,
    getPersonaje
}
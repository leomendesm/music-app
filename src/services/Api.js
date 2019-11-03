import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://itunes.apple.com',
    headers: {
        'Access-Control-Allow-Credentials' : true,
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET',
        'Access-Control-Allow-Headers':'application/json',
    }
});

export default instance
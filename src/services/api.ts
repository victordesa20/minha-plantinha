import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/victordesa20/hc-desafio2-json'
})

export default api;
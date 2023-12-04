import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.86.9:3333'
})

export { api }
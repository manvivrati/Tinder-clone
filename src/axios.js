import axios from 'axios';

// creating instance
const instance = axios.create({
    baseURL: 'http://localhost:8001'
})

export default instance;
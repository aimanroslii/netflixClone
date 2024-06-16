import axios from 'axios';

// create an isntance with initialize the base url
const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3"
})

export default instance;



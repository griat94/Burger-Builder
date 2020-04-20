import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-builder-r2c5n5.firebaseio.com/'
});

export default instance; 
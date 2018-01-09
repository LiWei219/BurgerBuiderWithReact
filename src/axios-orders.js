import axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://react-my-burger-7435d.firebaseio.com/'
});

export default instance;
import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://127.0.0.1:8000/',
        headers: {
            Authorization: token
        }
    })
}

export default axiosWithAuth
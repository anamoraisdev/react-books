import axios from 'axios';

const axiosHttp = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        Accept: 'application/json',
        Content: 'application/json'
    }
})

// Add a request interceptor
axiosHttp.interceptors.request.use(function (config) {
    const token = sessionStorage.getItem('token')
    if(token && config.headers){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
},function (error) {
    console.log('erro no interceptor do axios')
    return Promise.reject(error);
});

export default axiosHttp;
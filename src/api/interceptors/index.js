import axios from 'axios'
import { message } from 'antd';

axios.interceptors.request.use((config) => {
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    if(response.status === 200){
        const data = response.data;
        if(data.code === 200){
            return data;
        }else{
            message.error(data.msg); 
            return data;
        }
    }else{
        message.error('服务器错误');
    }
}, function (error) {
    message.error('服务器错误');
    return Promise.reject(error);
});

export { axios as instance}
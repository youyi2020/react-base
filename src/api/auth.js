import {baseUrl} from './../config/index.js'
import {instance as axios} from './interceptors'


export const authLogin = (params)=> {
  return new Promise((resolve, reject) => {
    axios.post(`${baseUrl}/auth/login`,params).then(data => {
      if(data.code == 200){
        resolve(data.result);
      }
    }).catch(err => {
      reject(err);
    });
  })
};
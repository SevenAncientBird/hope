import axios from 'axios'

axios.defaults.timeout = 50000;

// 请求地址，动态赋值的环境变量
// axios.defaults.baseUrl = import.meta.env.development.BASE_API_URL;

axios.interceptors.request.use(
    config => {
        config.headers = {
            'Content-Type':'application/json;charset=UTF-8',
            'token':'123123'
        };
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        const { response } = error;
        if(response){
            return Promise.reject(response.data);
        }else{
            console.log('网络连接一场')
        }
    }
)

export function request(url = '',params = {},type = 'GET'){
    return new Promise((resolve,reject) => {
        let promise = null;
        if(type.toUpperCase() === 'GET'){
            promise = axios({
                url,
                params
            })
        }else if(type.toUpperCase() === 'POST'){
            promise = axios({
                url,
                data:params
            })
        }

        promise.then(res => {
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}
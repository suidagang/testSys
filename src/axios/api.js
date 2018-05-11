import axios from 'axios';
//处理post请求请求参数为From Data的情况
import qs from 'qs';
//import { Message } from 'element-ui';

axios.defaults.timeout = 5000;
//axios.defaults.baseURL ='http://iot.ideyee.com';
axios.defaults.baseURL ='http://localhost:2441';

//http request 拦截器(请求前的拦截 做公交加token等操作)
axios.interceptors.request.use(
    config => {
        // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
        config.data = config.data;
        config.headers = {
            'Content-Type':'application/x-www-form-urlencoded'
        }
        // if(token){
        //   config.params = {'token':token}
        // }
        return config;
    },
    error => {
        return Promise.reject(err);
    }
);


//http response 拦截器(请求成功的统一处理，比如后台返回code=1 就表示没登录要统一跳转登录页)
axios.interceptors.response.use(
    response => {
        if(response.data.Code ==1){
            router.push({
                path:"/login",
                querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
            })
        }
        return response;
    },
    error => {
        return Promise.reject(error)
    }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params={}){
    return new Promise((resolve,reject) => {
        axios.get(url,{
                params:params
            })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.post(url,qs.stringify(data))
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err)
            })
    })
}

/*
 * @Author: your name
 * @Date: 2020-02-25 14:43:31
 * @LastEditTime: 2020-03-03 20:49:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\admin\src\http.js
 */
import axios from 'axios'
import Vue from 'vue'
import router from './router'


let http = axios.create({
  baseURL: "http://localhost:3000/admin/api"
})
// 请求拦截
http.interceptors.request.use(config=>{
  if(localStorage.token){
    config.headers.Authorization = 'Bearer ' + (localStorage.token || '')
  }
  return config
},err=>{
  return Promise.reject(err)
})
// 响应拦截
http.interceptors.response.use(res=>{
  return res
},err=>{
  if(err.response.data.message){
    Vue.prototype.$message({
      type: 'error',
      message: err.response.data.message
    })
    if(err.response.status == 401){
      router.push('/login')
    }
  }
  return Promise.reject(err)
})



export default http
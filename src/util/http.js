import axios from 'axios'
import Vue from 'vue'
import { Toast } from 'vant'

Vue.use(Toast)

const http = axios.create({
  baseURL: 'https://m.maizuo.com', // 基准url
  timeout: 10000,
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1596502176387264316178433","bc":"310100"}'
  }
})
http.interceptors.request.use(function (config) {
  // Do something before request is sent
  // 显示loading
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    overlay: true,
    duration: 0 // 值为 0 时，toast 不会消失
  })

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
http.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data

  // 停止加载
  Toast.clear()
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error

  // 隐藏loading
  // 停止加载
  Toast.clear()
  return Promise.reject(error)
})

export default http

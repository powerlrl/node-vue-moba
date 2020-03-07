/*
 * @Author: your name
 * @Date: 2020-02-25 12:25:05
 * @LastEditTime: 2020-03-03 22:09:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\admin\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import http from './http'
import './style.css'

Vue.prototype.$http = http

Vue.config.productionTip = false

Vue.mixin({
  computed: {
    uploadUrl(){
      return this.$http.defaults.baseURL + '/upload'
    }
  },
  methods: {
    getAuthHeaders(){
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

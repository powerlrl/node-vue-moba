/*
 * @Author: your name
 * @Date: 2020-03-04 14:46:17
 * @LastEditTime: 2020-03-06 12:33:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\web\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/style.scss'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/iconfont/iconfont.css'
import ListCard from './components/ListCard.vue'
Vue.use(VueAwesomeSwiper, /* { default global options } */)


Vue.config.productionTip = false

import Card from './components/Card.vue'
Vue.component('m-card',Card)
Vue.component('m-list-card',ListCard)

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000/web/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

/**
 * @file: main.js
 * @author: Paulo Alves
 * @description: responsável pelas configurações de inicialização da aplicação.
 * @version 1.0.1(28/04/2020)
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'

Vue.use(VueAxios, axios)

axios.defaults.baseURL = 'http://localhost:3000/api'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

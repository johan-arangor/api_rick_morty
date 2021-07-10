import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
//Importa libreria de roters
import router from '@/router'
//Importa libreria de vuetify
import vuetify from '@/plugins/vuetify'
//Importa libreria de API
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

//hace global axios
Vue.use(VueAxios, axios, Vuex)

new Vue({
  router,
  vuetify,
  Vuex,
  render: h => h(App)
}).$mount('#app')

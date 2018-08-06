import Vue from 'vue'
import Vuetify from 'vuetify'

import router from './router'
import App from './App'

import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
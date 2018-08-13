import Vue from 'vue'
import Vuetify from 'vuetify'

import myfetch from './common/myfetch';
//是否模拟数据
// import './common/mock';

import router from './router'
import App from './App'

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify);

let globalEventHub = new Vue();
myfetch.globalEventHub = globalEventHub;

Vue.prototype.$myfetch = myfetch;
Vue.prototype.$globalEventHub = globalEventHub;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
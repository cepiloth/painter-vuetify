import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'		// <-- 추가
import 'vuetify/dist/vuetify.min.css'	// <-- 추가
Vue.use(Vuetify);			// <-- 추가

new Vue({
  el: '#app',
  vuetify : new Vuetify(),		// <-- 추가
  render: h => h(App)
})
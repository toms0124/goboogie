import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import 'babel-polyfill'

Vue.use(Vuetify)


new Vue({
  el: '#app',
  render: h => h(App),
//라우터 객체를 넘김
  router
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import VueMaterial from 'vue-material'
import { store } from './store'

Vue.use(VueSweetalert2)
Vue.use(VueMaterial)
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

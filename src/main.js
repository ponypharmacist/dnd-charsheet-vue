// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
// https://vuematerial.io/getting-started - Material Design for Vue
import VueMaterial from 'vue-material'
// separate components can also be imported
// import { MdField, MdTabs } from 'vue-material/dist/components/index.js'
import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/theme/default-dark.css'

Vue.use(VueSweetalert2)
Vue.use(VueMaterial)
// Vue.use(MdField)
// Vue.use(MdTabs)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

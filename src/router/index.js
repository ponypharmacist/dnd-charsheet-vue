import Vue from 'vue'
import Router from 'vue-router'
import tavern from '@/components/tavern'
import create from '@/components/create'
import charsheet from '@/components/charsheet'
Vue.use(Router)

export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    { path: '/', component: tavern },
    { path: '/home', redirect: '/' },
    { path: '/create', component: create },
    { path: '/charsheet/:charID', component: charsheet }
  ]
})

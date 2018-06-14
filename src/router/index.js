import Vue from 'vue'
import Router from 'vue-router'
import viewCharacters from '@/components/viewCharacters'
import addCharacter from '@/components/addCharacter'
import viewCharsheet from '@/components/viewCharsheet'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: viewCharacters },
    { path: '/add-character', component: addCharacter },
    { path: '/charsheet/:charID', component: viewCharsheet }
  ]
})

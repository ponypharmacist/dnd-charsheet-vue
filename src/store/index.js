import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 9000,
    enableLocalStorage: true,
    character: {}
  },
  getters: {
    count: state => state.enableLocalStorage,
    isLogged: state => state.isLogged,
    storedNumberMatches (state) {
      return matchNumber => { return state.count === matchNumber }
    }
    // Shorthand:
    // storedNumberMatches: state => matchNumber => state.counts === matchNumber
  },
  mutations: {
    stateOpenCharacter (state, characterData) {
      store.state.character = characterData
    }
  }
})

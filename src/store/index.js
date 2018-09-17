import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 9000,
    character: {},
    localCharactersList: [],
    rollQueue: [],
    // Level up stuff
    levelUpOne: false,
    levelUpTwo: false,
    // Utility and Interface
    importModal: false
  },
  // Getters
  getters: {
    character: state => state.character,
    localCharactersList: state => state.localCharactersList,
    levelUpOne: state => state.levelUpOne,
    levelUpTwo: state => state.levelUpTwo,
    importModal: state => state.importModal,
    rollQueue: state => state.rollQueue
  },
  // end of getters

  // Mutations
  mutations: {
    readCharacter (state, characterData) {
      store.state.character = characterData
    },
    mutateCharacter (state, payload) {
      store.state.character[payload.param] = payload.value
      console.log(store.state.character[payload.param])
    },
    updateCharactersList (state, arr) {
      store.state.localCharactersList = arr
    },

    updateRollQueue (state, payload) {
      let rollObject = {
        date: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        message: payload.message,
        note: payload.note
      }
      if (store.state.rollQueue.length >= 3) {
        store.state.rollQueue.shift()
      }
      store.state.rollQueue.push(rollObject)
    },

    // Utility and Interface
    toggleImportModal (state) {
      state.importModal = !state.importModal
    },

    // Level Up stuff
    levelUp (state) {
      state.levelUpOne = !state.levelUpOne
    },
    levelUpNext (state) {
      state.levelUpTwo = !state.levelUpTwo
    },
    levelUpStepback (state) {
      state.levelUpOne = true
      state.levelUpTwo = false
    }
  }
  // end of mutations
})

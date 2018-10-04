<template lang="pug" src="./tavern.pug"></template>

<script>
/* eslint-disable */
import axios from 'axios';
import Disclaimer from './common/Disclaimer';
import { readLocalStorage,
         updateLocalStorage,
         clearLocalStorage } from '../helpers';
import { mapGetters, 
         mapMutations } from 'vuex';
export default {
  name:'tavern',
  components: { Disclaimer },
  data() {
    return {
      tavernList: [],
      localCharactersList: [],
      noLocalCharactersFound: true,
      importModal: false,
      importString: '',
    }
  },
  // on Mounted
  mounted() {
    // clearLocalStorage('localCharactersList');
    // Get charsheets from LS by default
    if (readLocalStorage('localCharactersList')) {
      this.noLocalCharactersFound = false;
      this.updateTavern();
    }
  },
  // Methods
  methods: {
    updateTavern () {
      this.localCharactersList = readLocalStorage('localCharactersList');
      this.tavernList = [];
      for (let item of this.localCharactersList) {
        // Fill the tavern with local characters one by one
        this.tavernList.push(readLocalStorage(item));
      }
    },

    deleteCharacter (charID) {
      clearLocalStorage(charID);
      let deleteFrom = this.localCharactersList.indexOf(charID);
      this.localCharactersList.splice(deleteFrom, 1);
      // Update locally stored list of names and character record
      updateLocalStorage(this.localCharactersList, 'localCharactersList');
      this.updateTavern();
    },

    commitImport () {
      // 1. Generate a friendly nospace name
      let nospaceName = JSON.parse(this.importString)._id;
      // 2. Update the list of local characters with a nospace name
      if (!this.localCharactersList) {
        this.localCharactersList = [nospaceName];
      } else {
        this.localCharactersList.push(nospaceName);
      }
      // 3. Update locally stored list of names
      updateLocalStorage (this.localCharactersList, 'localCharactersList');
      // 4. Create a LS item for this character
      updateLocalStorage (JSON.parse(this.importString), nospaceName);
      this.importModal = false;
      this.updateTavern();
    }
  }
}
</script>

<style></style>

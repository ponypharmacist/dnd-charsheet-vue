<template lang="pug" src="./tavern.pug"></template>

<script>
/* eslint-disable */
import axios from 'axios';
import Spinner from './common/Spinner';
import { readLocalStorage,
         updateLocalStorage,
         clearLocalStorage } from '../helpers';
import { mapGetters, 
         mapMutations } from 'vuex';

export default {
  name:'tavern',
  components: { Spinner },
  data() {
    return {
      tavernList: [],
      isLoading: true,
      rollQueue: [],
      localCharactersList: [],
      noLocalCharactersFound: false,
    }
  },
  // on Mounted
  mounted() {
    // clearLocalStorage('localCharactersList');
    // Get charsheets from LS by default

    this.isLoading = false;
    if (!readLocalStorage('localCharactersList')) {
      this.noLocalCharactersFound = true;
    }
    if (readLocalStorage('localCharactersList')) {
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

    updateRollQueue (string, note) {
      let rollObject = {
        date: this.prettyDate(),
        string: string,
        note: note
      };
      if (this.rollQueue.length >= 3) {
        this.rollQueue.shift();
      }
      this.rollQueue.push(rollObject);
    },

    prettyDate () {
      let dateWithouthSecond = new Date();
      return dateWithouthSecond.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    },
  }
}
</script>

<style></style>

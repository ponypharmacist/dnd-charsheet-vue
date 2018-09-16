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
    if (this.$store.state.enableLocalStorage) {
      this.isLoading = false;
      if (!readLocalStorage('localCharactersList')) {
        this.noLocalCharactersFound = true;
      }
      if (readLocalStorage('localCharactersList')) {
        this.updateTavern();
      }
    }

    // Get charsheets from DB if LS is disabled
    if (!this.$store.state.enableLocalStorage) {
      axios.get('https://dnd-charsheet-api.herokuapp.com/charsheets', {
        timeout: 5000
      })
        .then((response) => {
          this.isLoading = false;
          console.log('Response.data came in:');
          console.log(response.data);
          this.tavernList = response.data;
          // TODO: Check if there's local data
          // TODO: compare versions of local and remote data, when they are available
          this.updateRollQueue('Loading complete.');
        })
        .catch((error) => {
          console.log(error);
          this.updateRollQueue('Error loading data from server. Error message: ' + error.message);
        });
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
      if (this.$store.state.enableLocalStorage) {
        clearLocalStorage(charID);
        let deleteFrom = this.localCharactersList.indexOf(charID);
        this.localCharactersList.splice(deleteFrom, 1);
        // Update locally stored list of names and character record
        updateLocalStorage(this.localCharactersList, 'localCharactersList');
        this.updateTavern();
      }
      if (!this.$store.state.enableLocalStorage) {
        console.log('Trying to delete: ' + charID);
        this.isLoading = true;
        axios.delete('https://dnd-charsheet-api.herokuapp.com/charsheets/delete/' + charID)
        this.isLoading = false;
        // .then((response) => {
        //   console.log('Success deleting.');
        //   this.isLoading = false;
        // })
        // .catch((error) => {
        //   console.log('Failed to delete. ' + error);
        //   this.isLoading = false;
        // });
      }
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

<template lang="pug" src="./tavern.pug"></template>

<script>
/* eslint-disable */
import axios from 'axios';
import Spinner from './common/Spinner';
import { readLocalStorage,
         updateLocalStorage,
         clearLocalStorage } from '../helpers';
export default {
  name:'tavern',
  components: { Spinner },
  data() {
    return {
      Character: [],
      isLoading: true,
      rollQueue: [],
      // Local storage
      enableLocalStorage: false,
      localCharactersList: [],
    }
  },
  // on Mounted
  mounted() {
    if (this.enableLocalStorage && !readLocalStorage('localCharactersList')) {
      window.location = '/create';
    }

    if (this.enableLocalStorage && readLocalStorage('localCharactersList')) {
      this.isLoading = false;
      // 1. Get list of locally stored characters
      this.localCharactersList = readLocalStorage('localCharactersList');
      console.log(this.localCharactersList);
      // 2. 
      for (let item of this.localCharactersList) {
        this.Character.push(readLocalStorage(item));
      }
    }

    if (!this.enableLocalStorage) {
      // Get charsheets from DB
      axios.get('https://dnd-charsheet-api.herokuapp.com/charsheets', {
        timeout: 5000
      })
        .then((response) => {
          this.isLoading = false;
          console.log('Response.data came in:');
          console.log(response.data);
          this.Character = response.data;
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
    deleteCharacter (charID) {
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

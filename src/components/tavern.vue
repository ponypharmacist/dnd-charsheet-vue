<template lang="pug" src="./tavern.pug"></template>

<script>
/* eslint-disable */
import axios from 'axios';
import Spinner from './common/Spinner';
export default {
  name:'tavern',
  components: { Spinner },
  data() {
    return {
      Character: [],
      isLoading: true,
      errorMessage: 'Starting up, may take some time.'
    }
  },
  mounted() {
    axios.get('https://dnd-charsheet-api.herokuapp.com/charsheets', {
      timeout: 5000
    })
      .then((response) => {
        this.isLoading = false;
        console.log(response.data);
        console.log('response.data came in');
        this.Character = response.data;
      })
      .catch((error) => {
        // ToDo: display UI message failed loading
        console.log(error);
        console.log('catch(error) fired');
        this.errorMessage = error;
      });
  },
  methods: {
    deleteCharacter(charID) {
      console.log('Trying to delete: ' + charID);
      this.isLoading = true;
      axios.delete('https://dnd-charsheet-api.herokuapp.com/charsheets/delete/' + charID)
      .then((response) => {
        console.log('Success deleting.');
        this.isLoading = false;
      })
      .catch((error) => {
        console.log('Failed to delete. ' + error);
        this.isLoading = false;
      });
    }
  }
}
</script>

<style></style>

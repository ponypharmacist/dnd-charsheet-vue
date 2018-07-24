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
    axios.get('https://dnd-charsheet-api.herokuapp.com/charsheets')
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
      axios.delete('https://dnd-charsheet-api.herokuapp.com/charsheets/delete/' + charID, {
      method: 'DELETE',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      withCredentials: false
      })
      .then((response) => {
        console.log(response);
        this.isLoading = false;
      })
      .catch((error) => {
        console.log(error);
        this.isLoading = false;
      });
    }
  }
}
</script>

<style></style>

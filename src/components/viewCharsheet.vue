<template lang="pug" src="./viewCharsheet.pug"></template>

<script>
/* eslint-disable */
import axios from 'axios';
import Spinner from './common/Spinner';
import { capitalize, rollDice, rollString, getModifier, decoratePositive, flattenArray } from '../helpers';
import { races, backgrounds, classes, feats } from '../tables';
export default {
  name:'viewCharsheet',
  components: { Spinner },
  data() {
    return {
      Character: [],
      isLoading: true
    }
  },
  mounted() {
    const charID = this.$route.params.charID;
    console.log(charID);
    axios.get(`https://dnd-charsheet-api.herokuapp.com/charsheets/select/${charID}`)
      .then((response) => {
        this.isLoading = false;
        console.log(response.data);
        this.Character = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  filters: {
    capitalize,
    decoratePositive,
    flattenArray,
    getModifier
  }
}
</script>

<style></style>

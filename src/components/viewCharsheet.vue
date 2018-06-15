<template>
  <div class="container">
    <div class="row text-center">
      <template v-if="isLoading">
        <spinner></spinner>
      </template>
    </div>

    <div class="row" v-if="!isLoading">
      <div class="col-md-12 mb-1 golden-border">
        <table class="table table-striped table-borderes">
          <thead>
            <tr>
              <th class="center">Name: {{ Character.characterName }}</th>
              <th class="center">Race: {{ Character.race }}</th>
              <th>Class: {{ Character.class }}</th>
            </tr>
          </thead>
        </table>
      </div>

      <div class="col-md-6 golden-border">
        <div class="stat-block">Strength: {{ Character.strength }}</div>
        <div class="stat-block">Dexterity: {{ Character.dexterity }}</div>
        <div class="stat-block">Constitution: {{ Character.constitution }}</div>
        <div class="stat-block">Intelligence: {{ Character.intelligence }}</div>
        <div class="stat-block">Wisdom: {{ Character.wisdom }}</div>
        <div class="stat-block">Charisma: {{ Character.charisma }}</div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
import Spinner from './common/Spinner';
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
}
</script>

<style>

</style>

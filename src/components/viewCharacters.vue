<template>
  <div class="container">
    <div class="row text-center" v-if="isLoading">
      <div class="col-md-12">
      <template>
        <spinner></spinner>
      </template>
      </div>
    </div>
    <div class="well golden-border" v-if="!isLoading">
      <table class="table table-striped table-borderes">
        <thead>
          <tr>
            <th>Name</th>
            <th>Race/Class</th>
            <th>Stats</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="char_alias in Character">
            <td class="text-left"> <a class="view-name" v-bind:href="'/charsheet/' + char_alias._id">{{ char_alias.characterName }}</a> </td>
            <td class="text-left"> lvl. {{ char_alias.level }} {{ char_alias.race }} ({{ char_alias.subrace }}) / {{ char_alias.class }}</td>
            <td class="text-left">
              Background: {{ char_alias.background }}. Alignment: {{ char_alias.alignment }}. <br/>
              S:{{ char_alias.strength }} D:{{ char_alias.dexterity }} C:{{ char_alias.constitution }} I:{{ char_alias.intelligence }} W:{{ char_alias.wisdom }} Ch:{{ char_alias.charisma }}
            </td>
            <td><a class="delete-icon" @click="deleteCharacter(char_alias._id)">X</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
import Spinner from './common/Spinner';
export default {
  name:'viewCharacters',
  components: { Spinner },
  data() {
    return {
      Character: [],
      isLoading: true
    }
  },
  mounted() {
  axios.get('https://dnd-charsheet-api.herokuapp.com/charsheets')
    .then((response) => {
      this.isLoading = false;
      console.log(response.data);
      this.Character = response.data;
    })
    .catch((error) => {
      console.log(error);
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

<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.delete-icon {
  color: red;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}
.delete-icon:hover {
  color: white;
}
</style>

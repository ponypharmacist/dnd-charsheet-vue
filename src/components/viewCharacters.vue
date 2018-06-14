<template>
  <div class="container">
    <div class="well">
      <table class="table table-striped table-borderes">
        <thead>
          <tr>
            <th class="center">Username</th>
            <th class="center">ID</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user_alias in User">
            <td class="text-left"> <a v-bind:href="'/charsheet/' + user_alias._id">{{ user_alias.username}}</a> </td>
            <td class="text-left"> {{ user_alias.password}}</td>
            <td class="text-left"> {{ user_alias.email}}</td>
          </tr>
        </tbody>
      </table>
      <router-link to="/add-user">
        <button class="brn btn-large btn-block btn-success full-width"> Add User </button>
      </router-link>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {
    name:'View Characters',
    data() {
        return {
            User: [],
        }
    },
    mounted() {
    axios.get('https://dnd-charsheet-api.herokuapp.com/users')
        .then((response) => {
            console.log(response.data);
            this.User = response.data;
        })
        .catch((error) => {
            console.log(error);
        });
    },
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
img{
  max-width: 25%;
}
</style>

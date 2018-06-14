<template>
  <div class="container">
    <div class="well">
      <table class="table table-striped table-borderes">
        <thead>
          <tr>
            <th class="center">Username: {{ User.username }}</th>
            <th class="center">Password: {{ User.password }}</th>
            <th>Email: {{ User.email }}</th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {
    name:'Charsheet viewer',
    data() {
        return {
            User: []
        }
    },
    mounted() {
    const charID = this.$route.params.charID;
    console.log(charID);
    axios.get(`https://dnd-charsheet-api.herokuapp.com/users/select/${charID}`)
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

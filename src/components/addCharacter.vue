<template>
  <div class="container">

    <form v-if="!submitted">
      <div class="row">
        <div class="col-md-12 golden-border">
          <h4>New Character</h4>
          <div class="form-group col-md-4">
            <label class="pull-left">Name</label>
            <input type="text" class="form-control" placeholder="Character Name" v-model="Character.characterName">
          </div>
          <div class="form-group col-md-4">
            <label class="pull-left">Race</label>
            <input type="text" class="form-control" placeholder="Race" v-model="Character.race">
          </div>
          <div class="form-group col-md-4">
            <label class="pull-left">Class</label>
            <input type="text" class="form-control col-md-8" placeholder="Class " v-model="Character.class">
          </div>
          <div class="form-group col-md-4">
            <label class="pull-left">Background</label>
            <input type="text" class="form-control" placeholder="" v-model="Character.background">
          </div>
          <div class="form-group col-md-4">
            <label class="pull-left">Alignment</label>
            <input type="text" class="form-control" placeholder="" v-model="Character.alignment">
          </div>
          <div class="form-group col-md-4">
            <label class="pull-left">Level</label>
            <input type="number" class="form-control" placeholder="Lvl" v-model="Character.level">
          </div>
        </div>

        <div class="col-md-6 golden-border form-inline">
          <div class="form-group">
            <input type="number" class="form-control" placeholder="Str" v-model="Character.strength">
          </div>
          <div class="form-group">
            <input type="number" class="form-control" placeholder="Dex" v-model="Character.dexterity">
          </div>
          <div class="form-group">
            <input type="number" class="form-control" placeholder="Con" v-model="Character.constitution">
          </div>
          <div class="form-group">
            <input type="number" class="form-control" placeholder="Int" v-model="Character.intelligence">
          </div>
          <div class="form-group">
            <input type="number" class="form-control" placeholder="Wis" v-model="Character.wisdom">
          </div>
          <div class="form-group">
            <input type="number" class="form-control" placeholder="Cha" v-model="Character.charisma">
          </div>
        </div>

        <div class="col-md-12">
          <button type="button" class="btn btn-large btn-primary" @click="addToAPI">Сохранить</button>
        </div>
      </div>
    </form>
      <div v-if="submitted">
        <h3>Thanks for adding your character!</h3>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {
  name: 'addCharacter',
  data() {
    return {
      Character: {
        characterName: '',
        race: '',
        class: '',
        level: '',
        background: '',
        alignment: '',
        strength: '',
        dexterity: '',
        constitution: '',
        intelligence: '',
        wisdom: '',
        charisma: ''
      },
      submitted: false
    }
  },
  methods: {
    addToAPI() {
      let newCharacter = {
        characterName: this.Character.characterName,
        race: this.Character.race,
        class: this.Character.class,
        level: this.Character.level,
        background: this.Character.background,
        alignment: this.Character.alignment,
        strength: this.Character.strength,
        dexterity: this.Character.dexterity,
        constitution: this.Character.constitution,
        intelligence: this.Character.intelligence,
        wisdom: this.Character.wisdom,
        charisma: this.Character.charisma
      }
      console.log(newCharacter);
      axios.post('https://dnd-charsheet-api.herokuapp.com/charsheets/create', newCharacter)
        .then((response) => {
          console.log(response);
          this.submitted = true;
        })
        .catch((error) => {
          console.log(error);
          submitted: false
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
h3 {
  color: #ecbe57;
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
</style>

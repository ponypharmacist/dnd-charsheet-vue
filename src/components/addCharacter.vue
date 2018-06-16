<template>
  <div class="container">

    <form v-if="!submitted">
      <div class="row mb-2">
        <div class="col-md-12 golden-border">
          <h4>New Character level <input type="number" class="form-control input-inline input-short" min="1" max="20" v-model="Character.level"></h4>

          <div class="row">
            <div class="form-group col-md-4 ">
              <label class="pull-left">Name</label>
              <input type="text" class="form-control" placeholder="Character Name" v-model="Character.characterName">
            </div>
            <div class="form-group col-md-4">
              <label class="pull-left">Alignment</label>
              <select class="form-control" v-model="Character.alignment">
                <option value="Lawful Good">Lawful Good</option>
                <option value="Neutral Good">Neutral Good</option>
                <option value="Chaotic Good">Chaotic Good</option>
                <option value="Lawful Neutral">Lawful Neutral</option>
                <option value="True Neutral">True Neutral</option>
                <option value="Chaotic Neutral">Chaotic Neutral</option>
                <option value="Lawful Evil">Lawful Evil</option>
                <option value="Neutral Evil">Neutral Evil</option>
                <option value="Chaotic Evil">Chaotic Evil</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="form-group col-md-3">
              <label class="pull-left">Race</label>
              <select class="form-control" v-model="Character.race">
                <option v-for="(race, key) in races" v-bind:value="key">{{ race.title }}</option>
              </select>
            </div>
            <div class="form-group col-md-3">
              <label class="pull-left">Subrace</label>
              <select class="form-control" v-if="Character.race" v-model="Character.subrace">
                <option v-for="(subrace, key) in races[Character.race].subraces" v-bind:value="key">{{ subrace.title }}</option>
              </select>
            </div>
            <div class="form-group col-md-3">
              <label class="pull-left">Class</label>
              <input type="text" class="form-control col-md-8" placeholder="Class " v-model="Character.class">
            </div>
            <div class="form-group col-md-3">
              <label class="pull-left">Background</label>
              <input type="text" class="form-control" placeholder="" v-model="Character.background">
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-2">
        <div class="col-md-3 golden-border">
          <h3>Feats</h3>
          <div class="feat-list" v-if="Character.background && Character.subrace">
            <div class="feat-list-item">
              <div class="feat-name">Lucky</div>
              <div class="feat-description">You can reroll any 1 on a d20 roll.</div>
            </div>
            <div class="feat-list-item">
              <div class="feat-name">Lucky</div>
              <div class="feat-description">You can reroll any 1 on a d20 roll.</div>
            </div>
          </div>
        </div>

        <div class="col-md-3 golden-border">
          <h3>Proficiencies</h3>
        </div>

        <div class="col-md-3 golden-border">
          <h3>Languages</h3>
        </div>
      </div>

      <div class="row mb-2">
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
      </div>

      <div class="row">
        <div class="col-md-12">
          <button type="button" class="btn btn-large btn-primary" @click="addToAPI">Сохранить</button>
          <button type="button" class="btn btn-large btn-primary" @click="testDice">Тест дайсов</button>
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
import { capitalize, formatDate, calculateAge, rollDice, rollString } from '../helpers';
import { races, backgrounds, classes, feats } from '../tables';
export default {
  name: 'addCharacter',
  data() {
    return {
      races: races,
      classes: classes,
      backgrounds: backgrounds,
      feats: feats,
      Character: {
        characterName: '',
        race: '',
        subrace: '',
        class: '',
        level: 1,
        background: '',
        alignment: '',
        strength: '',
        dexterity: '',
        constitution: '',
        intelligence: '',
        wisdom: '',
        charisma: '',
        languages: [],
        feats: [],
        proficiencies: []
      },
      submitted: false
    }
  },
  computed: {
    // use {{ age }}
    age () {
      return calculateAge(new Date())
    }
  },
  filters: {
    capitalize,
    formatDate
  },
  methods: {
    testDice() {
      console.log('Rolled 2d10+2, result is: ' + rollString('2d10+2'));
      console.log('Rolled 2d10-2, result is: ' + rollDice(10, 2, -2));
      console.log('Rolled a d20, result is: ' + rollDice(20));
    },
    addToAPI() {
    let newCharacter = this.Character;
    console.log(newCharacter);
    axios.post('https://dnd-charsheet-api.herokuapp.com/charsheets/create', newCharacter)
      .then((response) => {
        console.log(response);
        this.submitted = true;
        window.location = '/';
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

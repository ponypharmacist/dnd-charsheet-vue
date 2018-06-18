<template lang="pug" src="./addCharacter.pug"></template>
<script>
/* eslint-disable */
import axios from 'axios';
import { capitalize, rollDice, rollString, genderPronoun, genderPosessive } from '../helpers';
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
        level: 1,
        gender: '',
        race: '',
        subrace: '',
        class: '',
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
    characterRace() { return this.Character.race; },
    characterSubrace() { return this.Character.subrace; },
    characterFeats() { return this.Character.feats; },
  },
  watch: {
    characterSubrace() {
      this.collectFeats();
    }
  },
  filters: {
    capitalize,
    genderPronoun,
    genderPosessive
  },
  methods: {
    collectFeats() {
      // get feats from race
      // get feats from subrace
      // get feats from class
      // get feats from background
      // merge feats
    },
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
<style scoped></style>

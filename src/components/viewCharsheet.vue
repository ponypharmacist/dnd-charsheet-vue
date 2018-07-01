<template lang="pug" src="./viewCharsheet.pug"></template>

<script>
/* eslint-disable */
import axios from 'axios';
import Spinner from './common/Spinner';
import { capitalize, rollDice, rollString, getModifier, decoratePositive, flattenArray } from '../helpers';
import { races, backgrounds, classes, feats, armors, weapons } from '../tables';
export default {
  name:'viewCharsheet',
  components: { Spinner },
  data() {
    return {
      charID: '',
      // tables of stuff
      races: races,
      classes: classes,
      backgrounds: backgrounds,
      feats: feats,
      // UI stuff
      isLoading: true,
      updated: false,
      showSnackbar: false,
      snackMessage: 'none',
      // Character stuff
      Character: []
    }
  },
  mounted() {
    this.charID = this.$route.params.charID;
    this.getCharacter(this.charID);
  },
  computed: {
    proficiencyBonus: function() {
      return 2;
    }
  },
  filters: {
    capitalize,
    decoratePositive,
    flattenArray,
    getModifier,
    add(number, bonus) {
      return number + bonus;
    }
  },
  methods: {
    getSkillBonus (attribute, skill) {
      let profBonus = this.Character.skills.includes(skill) ? this.proficiencyBonus : 0;
      return profBonus + getModifier(this.Character[attribute]);
    },
    roll(attribute, skill) {
      let bonus = this.getSkillBonus(attribute, skill);
      let rollResult = rollDice(20);
      let criticalSuccess = rollResult == 20 ? ' CRITICAL SUCCESS!' : '';
      let criticalFail = rollResult == 1 ? ' CRITICAL FAIL!' : '';
      this.snackMessage = 'You roll ' + skill + ' for ' + (rollResult + bonus) + '.' + criticalSuccess + criticalFail;
    },
    getCharacter (charID) {
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
    updateAPI () {
    let updateCharacter = {
      name: this.Character.name,
      level: this.Character.level,
      race: this.Character.race,
      subrace: this.Character.subrace,
      clas: this.Character.clas,
      background: this.Character.background,

      strength: this.Character.strength,
      dexterity: this.Character.dexterity,
      constitution: this.Character.constitution,
      intelligence: this.Character.intelligence,
      wisdom: this.Character.wisdom,
      charisma: this.Character.charisma,

      healthBonusFromFeats: this.Character.healthBonusFromFeats,
      maxHealth: this.Character.maxHealth,
      speed: this.Character.speed,
      gold: this.Character.gold,
      items: this.Character.items,

      languages: this.Character.languages,
      proficienciesCombat: this.Character.proficienciesCombat,
      tools: this.Character.tools,
      feats: this.Character.feats,
      skills: this.Character.skills
    }
    console.log(updateCharacter);
    let charID = this.charID;
    console.log(charID);
    axios.put(`https://dnd-charsheet-api.herokuapp.com/charsheets/update/${charID}`, updateCharacter)
      .then((response) => {
        console.log(response);
        this.updated = true;
      })
      .catch((error) => {
        console.log(error);
        this.updated = false;
      });
    }
  }
}
</script>

<style></style>

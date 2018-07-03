<template lang="pug" src="./viewCharsheet.pug"></template>

<script>
/* eslint-disable */
import axios from 'axios';
import Spinner from './common/Spinner';
import { capitalize, rollDice, rollString, getModifier, decoratePositive, flattenArray } from '../helpers';
import { races, backgrounds, classes, feats, armors, weaponsM, weaponsR } from '../tables';
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
      armors: armors,
      weaponsM: weaponsM,
      weaponsR: weaponsR,
      // UI stuff
      isLoading: true,
      updated: false,
      showSnackbar: false,
      rollQueue: ['', '', ''],
      // Character stuff
      Character: []
    }
  },

  // Mounted
  mounted() {
    this.charID = this.$route.params.charID;
    this.getCharacter(this.charID);
  },

  // Computed
  computed: {
    proficiencyBonus: function() {
      return 2;
    },
    armorClass: function() {
      let attributeModifier = getModifier(this.Character.dexterity);
      let baseAC = 10;
      let shield = this.Character.shield ? 2 : 0;
      if (this.Character.clas == 'barbarian' && this.Character.armor == 'noArmor' && !this.Character.shield) {
        attributeModifier += getModifier(this.Character.Constitution);
      } else if (this.Character.clas == 'monk' && this.Character.armor == 'noArmor' && !this.Character.shield) {
        attributeModifier += getModifier(this.Character.wisdom);
      } else if (this.armors[this.Character.armor].type == 'heavy') {
        baseAC = this.armors[this.Character.armor].ac;
        attributeModifier = 0;
      } else if (this.armors[this.Character.armor].type == 'medium') {
        baseAC = this.armors[this.Character.armor].ac;
        attributeModifier = getModifier(this.Character.dexterity) >= 2 ? 2 : getModifier(this.Character.dexterity);
      } else {
        baseAC = this.armors[this.Character.armor].ac;
      }
      return baseAC + attributeModifier + shield;
    },
    maxHealth: function() {
      let toughness = this.Character.feats.includes('dwarvenToughness') ? 1 : 0;
      let bonus = getModifier(this.Character.constitution);
      return this.classes[this.Character.clas].hitDie + bonus + toughness;
    }
  },

  // Filters
  filters: {
    capitalize,
    decoratePositive,
    flattenArray,
    getModifier,
    add(number, bonus) {
      return number + bonus;
    }
  },

  // Methods
  methods: {
    getSkillBonus (attribute, skill) {
      let profBonus = this.Character.skills.includes(skill) ? this.proficiencyBonus : 0;
      return profBonus + getModifier(this.Character[attribute]);
    },
    roll (attribute, skill) {
      let bonus = this.getSkillBonus(attribute, skill);
      let rollResult = rollDice(20);
      let criticalSuccess = rollResult == 20 ? ' CRITICAL SUCCESS!' : '';
      let criticalFail = rollResult == 1 ? ' CRITICAL FAIL!' : '';
      let updateString = 'You roll ' + capitalize(skill) + ' for ' + (rollResult + bonus) + '. ';
      let note = criticalSuccess + criticalFail;
      this.updateRollQueue(this.prettyDate(), updateString, note);
    },
    rollAttribute (attribute) {
      let rollResult = rollDice(20);
      let bonus = getModifier(this.Character[attribute]);
      let updateString = 'You roll ' + capitalize(attribute) + ' for ' + (rollResult + bonus) + '. ';
      this.updateRollQueue(this.prettyDate(), updateString);
    },
    updateRollQueue (date, string, note) {
      let rollObject = {
        date: date,
        string: string,
        note: note
      };
      this.rollQueue.shift();
      this.rollQueue.push(rollObject);
    },
    prettyDate () {
      let dateWithouthSecond = new Date();
      return dateWithouthSecond.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    },

    // API calls
    getCharacter (charID) {
      console.log(charID);
      axios.get(`https://dnd-charsheet-api.herokuapp.com/charsheets/select/${charID}`)
        .then((response) => {
          this.isLoading = false;
          console.log('Got my character from API!');
          this.Character = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    updateAPI () {
    let updateCharacter = this.Character;
    let charID = this.charID;
    console.log(charID);
    axios.put(`https://dnd-charsheet-api.herokuapp.com/charsheets/update/${charID}`, updateCharacter)
      .then((response) => {
      console.log('Sent my character to API!');
        this.updated = true;
      })
      .catch((error) => {
        console.log(error);
        this.updated = false;
      });
    }
  } // end of methods
}
</script>

<style></style>

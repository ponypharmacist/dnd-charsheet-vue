<template lang="pug" src="./addCharacter.pug"></template>
<script>
/* eslint-disable */
import axios from 'axios';
import { capitalize, rollDice, rollString, genderPronoun, genderPosessive, getModifier, decoratePositive, parseAbilityBonus } from '../helpers';
import { races, backgrounds, classes, feats } from '../tables';
export default {
  name: 'addCharacter',
  data() {
    return {
      // tables of stuff
      races: races,
      classes: classes,
      backgrounds: backgrounds,
      feats: feats,
      // form and visuals stuff
      submitted: false,
      // character stuff
      characterName: '',
      characterLevel: 1,
      characterGender: '',
      characterRace: '',
      characterSubrace: '',
      characterClass: '',
      characterBackground: '',
      characterAlignment: '',
      characterStrength: 14,
      characterDexterity: 14,
      characterConstitution: 14,
      characterIntelligence: 14,
      characterWisdom: 14,
      characterCharisma: 8,
      characterLanguages: [],
      characterProficiencies: [],
      characterSkills: [], // make computed, set -> push item (if not there), remove item (if there)
      characterMaxHealth: 0
    }
  },
  computed: {
    characterFeats: function() {
      if (this.characterSubrace && this.characterClass) {
        let raceFeats, subraceFeats, classFeats, resultingFeatList;
        raceFeats = this.races[this.characterRace].feats ? this.races[this.characterRace].feats : [];
        subraceFeats = this.races[this.characterRace].subraces[this.characterSubrace].feats ? this.races[this.characterRace].subraces[this.characterSubrace].feats : [];
        classFeats = this.classes[this.characterClass].feats ? this.classes[this.characterClass].feats : [];
        resultingFeatList = Array.from(new Set(raceFeats.concat(subraceFeats).concat(classFeats)));
        console.log(resultingFeatList);
        return resultingFeatList;
      } else {
        return [];
      }
    },
    healthBonusFromFeats: function() {
      return this.characterFeats.includes('dwarvenToughness') ? 1 : 0;
    },
    healthBonus: function() {
      return getModifier(this.characterConstitution);
    }
  },
  watch: {
  },
  filters: {
    capitalize,
    genderPronoun,
    genderPosessive,
    getModifier,
    decoratePositive
  },
  methods: {
    clearSubrace() {
      this.characterSubrace = '';
    },
    applyAbilityBonuses(array) {
      for (let expression of array) {
        this[parseAbilityBonus(expression).abilityName] += parseAbilityBonus(expression).abilityBonus;
      }
    },
    rollAbilities() {
      this.characterConstitution = rollString('3d6');
      // this.applyAbilityBonuses(this.races[this.characterRace].abilityScore);
    },
    testDice() {
      console.log('Rolled 2d10+2, result is: ' + rollString('2d10+2'));
      console.log('Rolled 2d10-2, result is: ' + rollDice(10, 2, -2));
      console.log('Rolled a d20, result is: ' + rollDice(20));
    },
    // Last method, sends new character to database
    addToAPI() {
    let newCharacter = {
      characterName: this.characterName,
      characterName: this.characterName,
      characterLevel: this.characterLevel,
      characterGender: this.characterGender,
      characterRace: this.characterRace,
      characterSubrace: this.characterSubrace,
      characterClass: this.characterClass,
      characterBackground: this.characterBackground,
      characterAlignment: this.characterAlignment,
      characterStrength: this.characterStrength,
      characterDexterity: this.characterDexterity,
      characterConstitution: this.characterConstitution,
      characterIntelligence: this.characterIntelligence,
      characterWisdom: this.characterWisdom,
      characterCharisma: this.characterCharisma,
      characterLanguages: this.characterLanguages,
      characterFeats: this.characterFeats,
      characterProficiencies: this.characterProficiencies,
      characterSkills: this.characterSkills,
      characterMaxHealth: this.characterMaxHealth
    }
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

<template lang="pug" src="./addCharacter.pug"></template>
<script>
/* eslint-disable */
import axios from 'axios';
import Attributes from './partials/Attributes';
import { capitalize, rollDice, rollString, roll4d6Stats, getModifier, decoratePositive, flattenArray } from '../helpers';
import { races, backgrounds, classes, feats } from '../tables';
export default {
  name: 'addCharacter',
  components: { Attributes },
  data() {
    return {
      // tables of stuff
      races: races,
      classes: classes,
      backgrounds: backgrounds,
      feats: feats,
      // form and visuals stuff
      submitted: false,
      languageDialog: false,
      // character stuff
      characterName: '',
      characterLevel: 1,
      characterRace: '',
      characterSubrace: '',
      characterClass: '',
      characterBackground: '',
      characterStrength: 12,
      characterDexterity: 12,
      characterConstitution: 12,
      characterIntelligence: 12,
      characterWisdom: 12,
      characterCharisma: 8,
      characterItems: 'Bag of shopping',
      characterGold: 36
    }
  },
  computed: {
    characterSkills: {
      // make computed, set -> push item (if not there), remove item (if there)
      // If a character would gain the same proficiency from two different sources, he or she can choose a different proficiency of the same kind (skill or tool) instead.
      get: function() { return; },
      set: function() { return; }
    },
    characterFeats: function() { // ToDo: feats from BG
      let fromRace = this.characterRace ? this.races[this.characterRace].feats : [];
      let fromSubrace = this.characterSubrace ? this.races[this.characterRace].subraces[this.characterSubrace].feats : [];
      let fromClass = this.characterClass ? this.classes[this.characterClass].feats : [];
      return Array.from(new Set(fromRace.concat(fromSubrace).concat(fromClass)));
    },
    characterProficienciesCombat: {
      get: function() {
        let fromRace = this.characterRace ? this.races[this.characterRace].profCombat : [];
        let fromSubrace = this.characterSubrace ? this.races[this.characterRace].subraces[this.characterSubrace].profCombat : [];
        let fromClass = this.characterClass ? this.classes[this.characterClass].profCombat : [];
        let cleanList = Array.from(new Set(fromClass.concat(fromSubrace).concat(fromRace)));
        let finalList = '';
        for (let prof of cleanList) {
          finalList += capitalize(prof) + ', ';
        }
        finalList = finalList.slice(0, -2);
        return finalList;
      },
      set: function(profString) { return profString; }
    },
    characterLanguages: function() {
      let fromRace = this.characterRace ? this.races[this.characterRace].languages : [];
      let fromSubrace = this.characterSubrace ? this.races[this.characterRace].subraces[this.characterSubrace].languages ? this.races[this.characterRace].subraces[this.characterSubrace].languages : [] : [];
      // check for extra languages
      return Array.from(new Set(fromRace.concat(fromSubrace)));
    },
    extraLanguages: function() {
      let subraceLang = this.characterSubrace ? this.races[this.characterRace].subraces[this.characterSubrace].extraLanguage ? this.races[this.characterRace].subraces[this.characterSubrace].extraLanguage : 0 : 0;
      let raceLang = this.characterRace ? this.races[this.characterRace].extraLanguage ?  this.races[this.characterRace].extraLanguage : 0 : 0;
      return subraceLang + raceLang;
    },
    totalLanguages: {
      get: function() { return flattenArray(this.characterLanguages) + (this.extraLanguages > 0 ? ' (add ' + this.extraLanguages + ' more)' : ''); },
      set: function(langString) { return langString; }
    },
    healthBonusFromFeats: function() {
      return this.characterFeats.includes('dwarvenToughness') ? 1 : 0;
    },
    healthBonus: function() {
      return getModifier(this.characterConstitution);
    },
    characterMaxHealth: function() {
      return this.characterClass ? this.classes[this.characterClass].hitDie + this.healthBonus + this.healthBonusFromFeats : 0;
    },
    strengthBonus: function() { return this.hasBonus('strength'); },
    dexterityBonus: function() { return this.hasBonus('dexterity'); },
    constitutionBonus: function() { return this.hasBonus('constitution'); },
    intelligenceBonus: function() { return this.hasBonus('intelligence'); },
    wisdomBonus: function() { return this.hasBonus('wisdom'); },
    charismaBonus: function() { return this.hasBonus('charisma'); },
    characterSpeed: function() {
      let raceSpeed = this.characterRace ? this.races[this.characterRace].speed : 30;
      let subraceSpeed = this.characterSubrace ? this.races[this.characterRace].subraces[this.characterSubrace].speed ? this.races[this.characterRace].subraces[this.characterSubrace].speed : false : false;
      return subraceSpeed ? subraceSpeed : raceSpeed;
    }
  },
  watch: {
    characterRace: function (race) {
      this.clearSubrace();
    }
  },
  filters: {
    capitalize,
    getModifier,
    decoratePositive,
    flattenArray,
    add(number, bonus) {
      return number + bonus;
    }
  },
  methods: {
    updateCharacter (value, statname) {
      let capStatname = capitalize(statname)
      this['character' + capStatname] = value + this[statname + 'Bonus'];
      console.log('Character ' + capStatname + ' changed: ' + this['character' + capStatname]);
    },
    hasBonus (attribute) {
      let fromRace = this.characterRace ? this.races[this.characterRace][attribute] ? this.races[this.characterRace][attribute] : 0 : 0;
      let fromSubrace = this.characterSubrace ? this.races[this.characterRace].subraces[this.characterSubrace][attribute] ? this.races[this.characterRace].subraces[this.characterSubrace][attribute] : 0 : 0;
      return fromRace + fromSubrace;
    },
    clearSubrace () {
      this.characterSubrace = undefined;
    },
    testDice () {
      console.log('Rolled 2d10+2, result is: ' + rollString('2d10+2'));
      console.log('Rolled 2d10-2, result is: ' + rollDice(10, 2, -2));
      console.log('Rolled a d20, result is: ' + rollDice(20));
    },
    // Last method, sends new character to database
    addToAPI () {
    let newCharacter = {
      characterName: this.characterName,
      characterLevel: this.characterLevel,
      characterRace: this.characterRace,
      characterSubrace: this.characterSubrace,
      characterClass: this.characterClass,
      characterBackground: this.characterBackground,

      characterStrength: this.characterStrength,
      characterDexterity: this.characterDexterity,
      characterConstitution: this.characterConstitution,
      characterIntelligence: this.characterIntelligence,
      characterWisdom: this.characterWisdom,
      characterCharisma: this.characterCharisma,

      healthBonusFromFeats: this.healthBonusFromFeats,
      characterMaxHealth: this.characterMaxHealth,
      characterSpeed: this.characterSpeed,

      characterLanguages: this.totalLanguages,
      characterFeats: this.characterFeats,
      characterSkills: this.characterSkills,
      characterProficienciesCombat: this.characterProficienciesCombat,
      characterSkills: this.characterSkills
      // ToDo: proficiency with tools

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

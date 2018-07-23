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
      errorMessage: 'test',
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
    subraceTitle: function() {
      return this.races[this.Character.race].subraces[this.Character.subrace].title;
    },
    proficiencyBonus: function() {
      let profBonus = 2;
      if (this.Character.level >= 17) {
        profBonus = 6;
      } else if (this.Character.level >= 13) {
        profBonus = 5;
      } else if (this.Character.level >= 9) {
        profBonus = 4;
      } else if (this.Character.level >= 5) {
        profBonus = 3;
      } else {}
      return profBonus;
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
    },
    weaponMeleeDamage: function() {
      let finesse = this.weaponsM[this.Character.weaponMelee].modifiers.includes('finesse') ? true : false;
      let highestModifier = getModifier(this.Character.strength) > getModifier(this.Character.dexterity) ? getModifier(this.Character.strength) : getModifier(this.Character.dexterity);
      return finesse ? highestModifier : getModifier(this.Character.strength);
    },
    weaponMelee2Damage: function() {
      let finesse = this.weaponsM[this.Character.weaponMelee2].modifiers.includes('finesse') ? true : false;
      let highestModifier = getModifier(this.Character.strength) > getModifier(this.Character.dexterity) ? getModifier(this.Character.strength) : getModifier(this.Character.dexterity);
      return finesse ? highestModifier : getModifier(this.Character.strength);
    },
    weaponMeleeAttack: function() {
      return this.weaponMeleeDamage + this.proficiencyBonus;
    },
    weaponMelee2Attack: function() {
      return this.weaponMeleeDamage + this.proficiencyBonus;
    },
    weaponRangedAttack: function() {
      return getModifier(this.Character.dexterity) + this.proficiencyBonus;
    }
  },

  // Watch
  watch: {
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
    spellsLvl (lvl) {
      return this.classes[this.Character.clas].spellslots ? this.classes[this.Character.clas].spellslots[this.Character.level][lvl] : 0;
    },
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
      this.updateRollQueue(updateString, note);
    },
    rollAttribute (attribute, title = false) {
      let rollResult = rollDice(20);
      let bonus = getModifier(this.Character[attribute]);
      let name = title ? title : attribute;
      let updateString = 'You roll ' + capitalize(name) + ' for ' + (rollResult + bonus) + '. ';
      this.updateRollQueue(updateString);
    },
    rollAttack (weapon) {
      let weaponName = this.weaponsM[this.Character[weapon]].title;
      let rollResult = rollDice(20);
      let bonus = this[weapon + 'Attack'];
      let criticalSuccess = rollResult == 20 ? ' CRITICAL HIT!' : '';
      let criticalFail = rollResult == 1 ? ' CRITICAL MISS!' : '';
      let note = criticalSuccess + criticalFail;
      let updateString = 'You attack with ' + weaponName + ' and roll ' + (rollResult + bonus) + '. ';
      this.updateRollQueue(updateString, note);
    },
    rollDamage (weapon) {
      let weaponName = this.weaponsM[this.Character[weapon]].title;
      let weaponDamage = this.weaponsM[this.Character[weapon]].damage;
      let rollResult = rollString(weaponDamage);
      let bonus = this[weapon + 'Damage'];
      let updateString = 'You swing your ' + weaponName + ' for ' + (rollResult + bonus) + ' damage. ';
      this.updateRollQueue(updateString);
    },
    rollAttackRanged (weapon) {
      let weaponName = this.weaponsR[this.Character[weapon]].title;
      let rollResult = rollDice(20);
      let bonus = this.weaponRangedAttack;
      let criticalSuccess = rollResult == 20 ? ' CRITICAL HIT!' : '';
      let criticalFail = rollResult == 1 ? ' CRITICAL MISS!' : '';
      let note = criticalSuccess + criticalFail;
      let updateString = 'You attack with ' + weaponName + ' and roll ' + (rollResult + bonus) + '. ';
      this.updateRollQueue(updateString, note);
    },
    rollDamageRanged (weapon) {
      let weaponName = this.weaponsR[this.Character[weapon]].title;
      let weaponDamage = this.weaponsR[this.Character[weapon]].damage;
      let rollResult = rollString(weaponDamage);
      let bonus = this.weaponRangedAttack;
      let updateString = 'You shoot your ' + weaponName + ' for ' + (rollResult + bonus) + ' damage. ';
      this.updateRollQueue(updateString);
    },
    updateRollQueue (string, note) {
      let rollObject = {
        date: this.prettyDate(),
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
          this.errorMessage = error;
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
        this.updateRollQueue('Saved changes successfully.');
      })
      .catch((error) => {
        console.log(error);
        this.updated = false;
        this.updateRollQueue('Failed to save changes! =( Try again later.');
      });
    }
  } // end of methods
}
</script>

<style></style>

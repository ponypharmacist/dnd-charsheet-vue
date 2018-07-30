<template lang="pug" src="./charsheet.pug"></template>

<script>
/* eslint-disable */
import axios from 'axios';
import Spinner from './common/Spinner';
import { capitalize, rollDice, rollString, getModifier, decoratePositive, flattenArray } from '../helpers';
import { races } from '../tables/races';
import { backgrounds } from '../tables/backgrounds';
import { classes } from '../tables/classes';
import { feats } from '../tables/feats';
import { customfeats } from '../tables/customfeats';
import { armors } from '../tables/armors';
import { weapons } from '../tables/weapons';
export default {
  name:'charsheet',
  components: { Spinner },
  data() {
    return {
      charID: '',
      errorMessage: '',
      // tables of stuff
      races: races,
      classes: classes,
      backgrounds: backgrounds,
      feats: feats,
      customfeats: customfeats,
      armors: armors,
      weapons: weapons,
      // UI stuff
      isLoading: true,
      updated: false,
      editStats: false,
      levelUpOne: false,
      levelUpTwo: false,
      rollQueue: [],
      armorClassBonus: 0,
      attackBonus: 0,
      // Level Up stuff
      levelUpHealthMethod: 'maximum',
      levelUpHealthRandom: 0,
      levelUpFeats: [],
      levelUpFeatsOverAttributes: false,
      extraFeat: false,
      extraFeatList: 'actor',
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
      if (this.Character.clas == 'barbarian' && this.Character.armor == 'noArmor') {
        attributeModifier += getModifier(this.Character.constitution);
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

    // Weapon Related
    wieldsTwohanded: function() {
      return this.Character.weaponMelee ? this.weapons[this.Character.weaponMelee].modifiers.includes('twohanded') : false;
    },
    rangedWeapons: function() {
      let shortlist = {};
      for (let weapon in this.weapons) {
        if (this.weapons[weapon].range) {
          shortlist[weapon] = this.weapons[weapon];
        }
      }
      return shortlist;
    },
    meleeWeapons: function() {
      let shortlist = {};
      for (let weapon in this.weapons) {
        if (!this.weapons[weapon].range || this.weapons[weapon].modifiers.includes('thrown')) {
          shortlist[weapon] = this.weapons[weapon];
        }
      }
      return shortlist;
    },
    weaponMeleeDamage: function() {
      let finesse = this.weapons[this.Character.weaponMelee].modifiers.includes('finesse') ? true : false;
      let highestModifier = getModifier(this.Character.strength) > getModifier(this.Character.dexterity) ? getModifier(this.Character.strength) : getModifier(this.Character.dexterity);
      return finesse ? highestModifier : getModifier(this.Character.strength);
    },
    weaponMelee2Damage: function() {
      let finesse = this.weapons[this.Character.weaponMelee2].modifiers.includes('finesse') ? true : false;
      let highestModifier = getModifier(this.Character.strength) > getModifier(this.Character.dexterity) ? getModifier(this.Character.strength) : getModifier(this.Character.dexterity);
      return finesse ? highestModifier : getModifier(this.Character.strength);
    },
    weaponRangedDamage: function() {
      let finesse = this.weapons[this.Character.weaponRanged].modifiers.includes('finesse') ? true : false;
      return finesse ? getModifier(this.Character.dexterity) : getModifier(this.Character.strength);
    },
    weaponMeleeAttack: function() {
      return this.weaponMeleeDamage + this.proficiencyBonus;
    },
    weaponMelee2Attack: function() {
      return this.weaponMeleeDamage + this.proficiencyBonus;
    },
    weaponRangedAttack: function() {
      return getModifier(this.Character.dexterity) + this.proficiencyBonus;
    },

    // Level Up stuff
    levelUpHealthMax: function() {
      let toughness = this.Character.feats.includes('dwarvenToughness') ? 1 : 0;
      let bonus = getModifier(this.Character.constitution);
      return this.classes[this.Character.clas].hitDie + bonus + toughness;
    },
    levelUpHealthAverage: function() {
      let toughness = this.Character.feats.includes('dwarvenToughness') ? 1 : 0;
      let bonus = getModifier(this.Character.constitution);
      let average = this.classes[this.Character.clas].hitDie / 2 + 1;
      return average + toughness + bonus;
    }

    // ToDo: constitution bonus applies to all hit dice retroactively, so I need to separate base HP and HP from modifiers
    // then current max health is to be calculated from BaseMaxHealth + Modifiers*Level
  },

  // Watch
  watch: {
  },

  // Filters
  filters: {
    capitalize,
    decoratePositive,
    flattenArray,
    getModifier
  },

  // Methods
  methods: {
    levelUp () {
      if (this.Character.level < 20) {
        this.levelUpOne = true;
      }
    },
    levelUpStepTwo () {
      this.levelUpGetFeats();
      if (this.levelUpFeats == false && this.levelUpFeatsOverAttributes == false) {
        this.levelUpOne = false;
        this.levelUpComplete();
      } else {
        this.levelUpOne = false;
        this.levelUpTwo = true;
      }
    },
    levelUpRollHealth () {
      let toughness = this.Character.feats.includes('dwarvenToughness') ? 1 : 0;
      let bonus = getModifier(this.Character.constitution);
      this.levelUpHealthRandom = rollDice(this.classes[this.Character.clas].hitDie) + bonus + toughness;
    },
    levelUpGetFeats () {
      this.levelUpFeats = this.classes[this.Character.clas].feats[this.Character.level + 1];
      if (this.levelUpFeats.includes('asImprovement')) {
        this.levelUpFeats.splice(this.levelUpFeats.indexOf('asImprovement'), 1);
        this.levelUpFeatsOverAttributes = true;
      }
    },
    levelUpComplete () {
      // Add health from level up to MaxHealth
      if (this.levelUpHealthMethod == 'maximum') {
        this.Character.maxHealth = this.Character.maxHealth + this.levelUpHealthMax;
      } else if (this.levelUpHealthMethod == 'average') {
        this.Character.maxHealth = this.Character.maxHealth + this.levelUpHealthAverage;
      } else {
        this.Character.maxHealth = this.Character.maxHealth + this.levelUpHealthRandom;
      }
      // Add new feats
      this.Character.feats = this.Character.feats.concat(this.levelUpFeats);
      this.Character.feats = this.extraFeat == true ? this.Character.feats.concat(this.extraFeatList) : this.Character.feats;
      // Iterate level
      this.Character.level = ++this.Character.level;
      // Save to DB
      // this.updateAPI();
      // Reset booleans
      this.levelUpTwo = false;
      this.levelUpFeatsOverAttributes = false;
      this.extraFeat = false;
      this.updateRollQueue('Level up complete!');
    },

    spellsLvl (lvl) {
      return this.classes[this.Character.clas].spellslots ? this.classes[this.Character.clas].spellslots[this.Character.level][lvl] : 0;
    },

    getSkillBonus (attribute, skill) {
      let profBonus = this.Character.skills.includes(skill) ? this.proficiencyBonus : 0;
      return profBonus + getModifier(this.Character[attribute]);
    },
    rollSkill (attribute, skill) {
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
      let weaponName = this.weapons[this.Character[weapon]].title;
      let rollResult = rollDice(20);
      let bonus = this[weapon + 'Attack'];
      let criticalSuccess = rollResult == 20 ? ' CRITICAL HIT!' : '';
      let criticalFail = rollResult == 1 ? ' CRITICAL MISS!' : '';
      let note = criticalSuccess + criticalFail;
      let updateString = 'You attack with ' + weaponName + ' and roll ' + (rollResult + bonus) + '. ';
      this.updateRollQueue(updateString, note);
    },
    rollDamage (weapon) {
      let weaponName = this.weapons[this.Character[weapon]].title;
      let weaponDamage = this.weapons[this.Character[weapon]].damage;
      let rollResult = rollString(weaponDamage);
      let bonus = this[weapon + 'Damage'];
      let updateString = 'You swing your ' + weaponName + ' for ' + (rollResult + bonus) + ' damage. ';
      this.updateRollQueue(updateString);
    },
    rollAttackRanged (weapon) {
      let weaponName = this.weapons[this.Character[weapon]].title;
      let rollResult = rollDice(20);
      let bonus = this.weaponRangedAttack;
      let criticalSuccess = rollResult == 20 ? ' CRITICAL HIT!' : '';
      let criticalFail = rollResult == 1 ? ' CRITICAL MISS!' : '';
      let note = criticalSuccess + criticalFail;
      let updateString = 'You attack with ' + weaponName + ' and roll ' + (rollResult + bonus) + '. ';
      this.updateRollQueue(updateString, note);
    },
    rollDamageRanged (weapon) {
      let weaponName = this.weapons[this.Character[weapon]].title;
      let weaponDamage = this.weapons[this.Character[weapon]].damage;
      let rollResult = rollString(weaponDamage);
      let bonus = this.weaponRangedAttack;
      let updateString = 'You shoot your ' + weaponName + ' for ' + (rollResult + bonus) + ' damage. ';
      this.updateRollQueue(updateString);
    },

    prettyDate () {
      let dateWithouthSecond = new Date();
      return dateWithouthSecond.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    },

    rollDiceSingle(sides) {
      let updateString = 'You roll a d' + sides + ' for ' + rollDice(sides) +  '.';
      this.updateRollQueue(updateString);
    },

    updateRollQueue (string, note) {
      let rollObject = {
        date: this.prettyDate(),
        string: string,
        note: note
      };
      if (this.rollQueue.length >= 3) {
        this.rollQueue.shift();
      }
      this.rollQueue.push(rollObject);
    },

    // API calls
    getCharacter (charID) {
      console.log(charID);
      axios.get(`https://dnd-charsheet-api.herokuapp.com/charsheets/select/${charID}`, {
        timeout: 5000
      })
        .then((response) => {
          this.isLoading = false;
          console.log('Got my character from API!');
          this.Character = response.data;
        })
        .catch((error) => {
          console.log(error);
          console.log('catch.error fired')
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

<template lang="pug" src="./charsheet.pug"></template>

<script>
/* eslint-disable */
import axios from 'axios';
import Spinner from './common/Spinner';
import LevelUp from './modals/LevelUp';
import { capitalize,
         rollDice,
         rollString,
         getModifier,
         decoratePositive,
         flattenArray,
         readLocalStorage,
         updateLocalStorage } from '../helpers';
import { mapGetters, 
         mapMutations } from 'vuex';
import { races } from '../tables/races';
import { backgrounds } from '../tables/backgrounds';
import { classes } from '../tables/classes';
import { feats } from '../tables/feats';
import { customfeats } from '../tables/customfeats';
import { armors } from '../tables/armors';
import { weapons } from '../tables/weapons';
export default {
  name:'charsheet',
  components: { Spinner, LevelUp },
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
      armorClassBonus: 0,
      attackBonus: 0,
      customRollValue: '3d6+1',
    }
  },

  // Mounted
  mounted() {
    this.charID = this.$route.params.charID;
    this.$store.commit('readCharacter', readLocalStorage(this.charID));
    this.isLoading = false;
  },

  // Computed
  computed: {
    ...mapGetters(['character',
                   'rollQueue']),

    subraceTitle: function() {
      return this.races[this.character.race].subraces[this.character.subrace].title;
    },

    proficiencyBonus: function() {
      return Math.ceil(this.character.level/4)+1;
    },

    armorClass: function() {
      let attributeModifier = getModifier(this.character.dexterity);
      let baseAC = 10;
      let shield = this.character.shield ? 2 : 0;
      if (this.character.clas == 'barbarian' && this.character.armor == 'noArmor') {
        attributeModifier += getModifier(this.character.constitution);
      } else if (this.character.clas == 'monk' && this.character.armor == 'noArmor' && !this.character.shield) {
        attributeModifier += getModifier(this.character.wisdom);
      } else if (this.armors[this.character.armor].type == 'heavy') {
        baseAC = this.armors[this.character.armor].ac;
        attributeModifier = 0;
      } else if (this.armors[this.character.armor].type == 'medium') {
        baseAC = this.armors[this.character.armor].ac;
        attributeModifier = getModifier(this.character.dexterity) >= 2 ? 2 : getModifier(this.character.dexterity);
      } else {
        baseAC = this.armors[this.character.armor].ac;
      }
      return baseAC + attributeModifier + shield;
    },

    // Weapon Related
    wieldsTwohanded: function() {
      return this.character.weaponMelee ? this.weapons[this.character.weaponMelee].modifiers.includes('twohanded') : false;
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
      let finesse = this.weapons[this.character.weaponMelee].modifiers.includes('finesse') ? true : false;
      let highestModifier = getModifier(this.character.strength) > getModifier(this.character.dexterity) ? getModifier(this.character.strength) : getModifier(this.character.dexterity);
      return finesse ? highestModifier : getModifier(this.character.strength);
    },
    weaponMelee2Damage: function() {
      let finesse = this.weapons[this.character.weaponMelee2].modifiers.includes('finesse') ? true : false;
      let highestModifier = getModifier(this.character.strength) > getModifier(this.character.dexterity) ? getModifier(this.character.strength) : getModifier(this.character.dexterity);
      return finesse ? highestModifier : getModifier(this.character.strength);
    },
    weaponRangedDamage: function() {
      let finesse = this.weapons[this.character.weaponRanged].modifiers.includes('finesse') ? true : false;
      return finesse ? getModifier(this.character.dexterity) : getModifier(this.character.strength);
    },
    weaponMeleeAttack: function() {
      return this.weaponMeleeDamage + this.proficiencyBonus;
    },
    weaponMelee2Attack: function() {
      return this.weaponMeleeDamage + this.proficiencyBonus;
    },
    weaponRangedAttack: function() {
      return getModifier(this.character.dexterity) + this.proficiencyBonus;
    },

    exportCharacterFile: function() {
      let textFiledata = new Blob([JSON.stringify(this.character)], {
        type: 'text/plain'
      });
      return window.URL.createObjectURL(textFiledata);
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
    ...mapMutations([
      'stateOpenCharacter',
      'levelUp',
      'updateRollQueue'
    ]),

    exportCharacterToClipboard () {
      // Create new element
      var el = document.createElement('textarea');
      // Set value (string to be copied)
      el.value = JSON.stringify(this.character);
      // Set non-editable to avoid focus and move outside of view
      el.setAttribute('readonly', '');
      el.style = {position: 'absolute', left: '-9999px'};
      document.body.appendChild(el);
      // Select text inside element
      el.select();
      // Copy text to clipboard
      document.execCommand('copy');
      // Remove temporary element
      document.body.removeChild(el);
      this.updateRollQueue({message: 'Character data copied to clipboard!'});
    },

    spellsLvl (lvl) {
      return this.classes[this.character.clas].spellslots ? this.classes[this.character.clas].spellslots[this.character.level][lvl] : 0;
    },

    getSkillBonus (attribute, skill) {
      let profBonus = this.character.skills.includes(skill) ? this.proficiencyBonus : 0;
      return profBonus + getModifier(this.character[attribute]);
    },
    rollSkill (attribute, skill) {
      let bonus = this.getSkillBonus(attribute, skill);
      let rollResult = rollDice(20);
      let criticalSuccess = rollResult == 20 ? ' CRITICAL SUCCESS!' : '';
      let criticalFail = rollResult == 1 ? ' CRITICAL FAIL!' : '';
      let updateString = 'You roll ' + capitalize(skill) + ' for ' + (rollResult + bonus) + '. ';
      let note = criticalSuccess + criticalFail;
      this.updateRollQueue({message: updateString, note: note});
    },
    rollAttribute (attribute, title = false) {
      let rollResult = rollDice(20);
      let bonus = getModifier(this.character[attribute]);
      let name = title ? title : attribute;
      let updateString = 'You roll ' + capitalize(name) + ' for ' + (rollResult + bonus) + '. ';
      this.updateRollQueue({message: updateString});
    },

    rollAttack (weapon) {
      let weaponName = this.weapons[this.character[weapon]].title;
      let rollResult = rollDice(20);
      let bonus = this[weapon + 'Attack'];
      let criticalSuccess = rollResult == 20 ? ' CRITICAL HIT!' : '';
      let criticalFail = rollResult == 1 ? ' CRITICAL MISS!' : '';
      let note = criticalSuccess + criticalFail;
      let updateString = 'You attack with ' + weaponName + ' and roll ' + (rollResult + bonus) + '. ';
      this.updateRollQueue({message: updateString, note: note});
    },
    rollDamage (weapon) {
      let weaponName = this.weapons[this.character[weapon]].title;
      let weaponDamage = this.weapons[this.character[weapon]].damage;
      let rollResult = rollString(weaponDamage);
      let bonus = this[weapon + 'Damage'];
      let updateString = 'You swing your ' + weaponName + ' for ' + (rollResult + bonus) + ' damage. ';
      this.updateRollQueue({message: updateString});
    },
    rollAttackRanged (weapon) {
      let weaponName = this.weapons[this.character[weapon]].title;
      let rollResult = rollDice(20);
      let bonus = this.weaponRangedAttack;
      let criticalSuccess = rollResult == 20 ? ' CRITICAL HIT!' : '';
      let criticalFail = rollResult == 1 ? ' CRITICAL MISS!' : '';
      let note = criticalSuccess + criticalFail;
      let updateString = 'You attack with ' + weaponName + ' and roll ' + (rollResult + bonus) + '. ';
      this.updateRollQueue({message: updateString, note: note});
    },
    rollDamageRanged (weapon) {
      let weaponName = this.weapons[this.character[weapon]].title;
      let weaponDamage = this.weapons[this.character[weapon]].damage;
      let rollResult = rollString(weaponDamage);
      let bonus = this.weaponRangedDamage;
      let updateString = 'You shoot your ' + weaponName + ' for ' + (rollResult + bonus) + ' damage. ';
      this.updateRollQueue({message: updateString});
    },

    rollDiceSingle (sides) {
      let updateString = 'You roll a d' + sides + ' for ' + rollDice(sides) +  '.';
      this.updateRollQueue({message: updateString});
    },

    rollString (diceString) {
      let updateString = 'You roll ' + diceString + ' for ' + rollString(diceString) +  '.';
      this.updateRollQueue({message: updateString});
    },

    doLongRest () {
      this.character.spellslots = [[], [], [], [], [], [], [], [], [], []];
      this.character.currentHealth = this.character.maxHealth;
      this.updateLocalCharacter();
    },
    toggleEditStats () {
      if (this.editStats) {
        this.editStats = false;
        this.updateLocalCharacter();
      } else {
        this.editStats = true;
      }
    },

    // TODO: save to local on every major changes
    updateLocalCharacter () {
      updateLocalStorage (this.character, this.character._id);
      console.log('Local Character Updated.');
    }
  } // end of methods
}
</script>
<style></style>

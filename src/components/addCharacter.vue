<template lang="pug" src="./addCharacter.pug"></template>
<script>
/* eslint-disable */
import axios from 'axios';
import Attributes from './partials/Attributes';
import { capitalize, rollDice, rollString, roll4d6Stats, getModifier, decoratePositive, flattenArray, flattenArrayMultiline } from '../helpers';
import { races, backgrounds, classes, feats, armors, weaponsM, weaponsR } from '../tables';
export default {
  name: 'addCharacter',
  components: { Attributes },
  data() {
    return {
      location: 'addCharacter',
      // tables of stuff
      races: races,
      classes: classes,
      backgrounds: backgrounds,
      feats: feats,
      armors: armors,
      weaponsM: weaponsM,
      weaponsR: weaponsR,
      // form and visuals stuff
      submitted: false,
      skillsDialog: false,
      skillsDialogNext: false,
      // character stuff
      characterName: '',
      characterLevel: 1,
      characterRace: '',
      characterSubrace: '',
      characterClass: '',
      characterBackground: '',
      characterStrength: 16,
      characterDexterity: 14,
      characterConstitution: 13,
      characterIntelligence: 12,
      characterWisdom: 10,
      characterCharisma: 9,
      characterGold: 0,
      characterSkills: [],
      characterProficienciesCombat: '',
      characterTools: '',
      characterItems: '',
      languagesString: '',
      characterArmor: 'noArmor',
      characterShield: false,
      characterWeaponMelee: 'club',
      characterWeaponMelee2: 'dagger',
      characterWeaponRanged: 'dart',
        // make computed, set -> push item (if not there), remove item (if there)
        // If a character would gain the same proficiency from two different sources, he or she can choose a different proficiency of the same kind (skill or tool) instead.
    }
  },
  computed: {
    wieldsTwohanded: function() {
      return this.characterWeaponMelee ? this.weaponsM[this.characterWeaponMelee].modifiers.includes('twohanded') : false;
    },
    characterGoldAmount: {
      get: function() {
        return this.characterBackground ? this.backgrounds[this.characterBackground].money : 0;
      },
      set: function(goldNumber) {
        return goldNumber;
      }
    },
    armorClass: function() {
      let attributeModifier = getModifier(this.characterDexterity);
      let baseAC = 10;
      let shield = this.characterShield ? 2 : 0;
      if (this.characterClass == 'barbarian' && this.characterArmor == 'noArmor' && !this.characterShield) {
        attributeModifier += getModifier(this.characterConstitution);
      } else if (this.characterClass == 'monk' && this.characterArmor == 'noArmor' && !this.characterShield) {
        attributeModifier += getModifier(this.characterWisdom);
      } else if (this.armors[this.characterArmor].type == 'heavy') {
        baseAC = this.armors[this.characterArmor].ac;
        attributeModifier = 0;
      } else if (this.armors[this.characterArmor].type == 'medium') {
        baseAC = this.armors[this.characterArmor].ac;
        attributeModifier = getModifier(this.characterDexterity) >= 2 ? 2 : getModifier(this.characterDexterity);
      } else {
        baseAC = this.armors[this.characterArmor].ac;
      }
      return baseAC + attributeModifier + shield;
    },
    characterItemsList: {
      get: function() {
        let fromBackground = this.characterBackground ? this.backgrounds[this.characterBackground].equipment : [];
        let fromClass = this.characterClass ? this.classes[this.characterClass].equipment : [];
        return flattenArrayMultiline(fromBackground.concat(fromClass));
      },
      set: function(itemsString) {
        this.characterItems = itemsString;
        return itemsString;
      }
    },
    characterToolsList: {
      get: function() {
        let fromRace = this.characterRace ? this.races[this.characterRace].tools ? this.races[this.characterRace].tools : [] : [];
        let fromClass = this.characterClass ? this.classes[this.characterClass].tools : [];
        let fromBackground = this.characterBackground ? this.backgrounds[this.characterBackground].tools : [];
        return Array.from(new Set(fromRace.concat(fromClass).concat(fromBackground)));
      },
      set: function(toolsString) {
        this.characterTools = toolsString;
        return toolsString;
      }
    },
    skillsChoice: function() {
      return this.characterClass ? this.classes[this.characterClass].skillsChoice ? this.classes[this.characterClass].skillsChoice : [] : [];
    },
    staticSkills: function() {
      let fromRace = this.characterRace ? this.races[this.characterRace].skills ? this.races[this.characterRace].skills : [] : [];
      let fromClass = this.characterClass ? this.classes[this.characterClass].skills ? this.classes[this.characterClass].skills : [] : [];
      let fromBackground = this.characterBackground ? this.backgrounds[this.characterBackground].skills ? this.backgrounds[this.characterBackground].skills : [] : [];
      return Array.from(new Set(fromRace.concat(fromBackground).concat(fromClass)));
    },
    skillsAllowed: function() {
      return this.characterClass ? this.classes[this.characterClass].skillsAllowed ? this.classes[this.characterClass].skillsAllowed : 0 : 0;
    },
    skillpoints: function() {
      let fromRace = this.characterRace ? this.races[this.characterRace].skillpoints ? this.races[this.characterRace].skillpoints : 0 : 0;
      let fromClass = this.characterClass ? this.classes[this.characterClass].skillpoints ? this.classes[this.characterClass].skillpoints : 0 : 0;
      return fromRace + fromClass;
    },
    characterFeats: function() {
      let fromRace = this.characterRace ? this.races[this.characterRace].feats : [];
      let fromSubrace = this.characterSubrace ? this.races[this.characterRace].subraces[this.characterSubrace].feats : [];
      let fromClass = this.characterClass ? this.classes[this.characterClass].feats : [];
      let fromBackground = this.characterBackground ? this.backgrounds[this.characterBackground].feats : [];
      return Array.from(new Set(fromRace.concat(fromSubrace).concat(fromClass).concat(fromBackground)));
    },
    combatProficienciesList: {
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
      set: function(profString) {
        return profString;
      }
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
      let bgLang = this.characterBackground ? this.backgrounds[this.characterBackground].extraLanguage ?  this.backgrounds[this.characterBackground].extraLanguage : 0 : 0;
      return subraceLang + raceLang + bgLang;
    },
    totalLanguages: {
      get: function() {
        return flattenArray(this.characterLanguages) + (this.extraLanguages > 0 ? ' (add ' + this.extraLanguages + ' more)' : '');
      },
      set: function(langString) {
        this.languagesString = langString;
        return langString;
      }
    },
    maxHealth: function() {
      let toughness = this.characterFeats.includes('dwarvenToughness') ? 1 : 0;
      let bonus = getModifier(this.characterConstitution);
      return this.characterClass ? this.classes[this.characterClass].hitDie + bonus + toughness : 0;
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
    },
    sumOfStats: function () {
      return parseInt(this.characterStrength) + parseInt(this.characterDexterity) + parseInt(this.characterConstitution) + parseInt(this.characterIntelligence) + parseInt(this.characterWisdom) + parseInt(this.characterCharisma)
    }
  },
  watch: {
    characterRace: function () {
      this.clearSubrace();
      this.pickSkills();
    },
    characterClass: function () {
      this.pickSkills();
    },
    characterBackground: function () {
      this.pickSkills();
    },
    staticSkills: function () {
      this.characterSkills = this.staticSkills;
    },
    combatProficienciesList: function () {
      this.characterProficienciesCombat = this.combatProficienciesList;
    },
    characterGoldAmount: function() {
      this.characterGold = this.characterGoldAmount;
    }
  },
  filters: {
    capitalize,
    getModifier,
    decoratePositive,
    flattenArray,
    flattenArrayMultiline,
    add(number, bonus) {
      return number + bonus;
    }
  },
  methods: {
    pickSkills () {
      this.skillsDialog = (this.characterClass && this.characterBackground && this.characterRace && this.skillsAllowed) ? true : false;
      this.skillsDialogNext = (this.characterClass && this.characterBackground && this.characterRace && !this.skillsAllowed) ? true : false;
    },
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
    swap (from, to) {
      let buffer = this[to]
      this[to] = this[from]
      this[from] = buffer
    },
    roll4d6 () {
      this.characterStrength = this.rollAttribute()
      this.characterDexterity = this.rollAttribute()
      this.characterConstitution = this.rollAttribute()
      this.characterIntelligence = this.rollAttribute()
      this.characterWisdom = this.rollAttribute()
      this.characterCharisma = this.rollAttribute()
    },
    rollAttribute () {
      let fourDice = [rollDice(6), rollDice(6), rollDice(6), rollDice(6)]
      const smallest = Math.min.apply(null, fourDice)
      const pos = fourDice.indexOf(smallest)
      const reducer = (accumulator, currentValue) => accumulator + currentValue
      let result = fourDice.slice(0, pos).concat(fourDice.slice(pos + 1)).reduce(reducer)
      return result
    },
    // Last method, sends new character to database
    addToAPI () {
    let newCharacter = {
      name: this.characterName,
      level: this.characterLevel,
      race: this.characterRace,
      subrace: this.characterSubrace,
      clas: this.characterClass,
      background: this.characterBackground,

      strength: parseInt(this.characterStrength) + parseInt(this.strengthBonus),
      dexterity: parseInt(this.characterDexterity) + parseInt(this.dexterityBonus),
      constitution: parseInt(this.characterConstitution) + parseInt(this.constitutionBonus),
      intelligence: parseInt(this.characterIntelligence) + parseInt(this.intelligenceBonus),
      wisdom: parseInt(this.characterWisdom) + parseInt(this.wisdomBonus),
      charisma: parseInt(this.characterCharisma) + parseInt(this.charismaBonus),

      currentHealth: this.maxHealth,
      speed: this.characterSpeed,
      copper: 0,
      silver: 0,
      gold: this.characterGold,
      platinum: 0,
      items: this.characterItems,
      armor: this.characterArmor,
      shield: this.characterShield,
      weaponMelee: this.characterWeaponMelee ? this.characterWeaponMelee : '',
      weaponMelee2: this.characterWeaponMelee2 ? this.characterWeaponMelee2 : '',
      weaponRanged: this.characterWeaponRanged ? this.characterWeaponRanged : '',

      languages: this.languagesString,
      proficienciesCombat: this.characterProficienciesCombat.toString(),
      tools: this.characterTools,
      feats: this.characterFeats,
      skills: this.characterSkills,
      notes: 'Alignment: pick one!',
      flavor: '',
      spellslots: [[], [], [], [], [], [], [], [], [], []]
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
        this.submitted = false;
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

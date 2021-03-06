<template lang="pug" src="./create.pug"></template>
<script>
/* eslint-disable */
import Disclaimer from './common/Disclaimer';
import { capitalize,
         rollDice,
         roll4d6Stats,
         getModifier,
         decoratePositive,
         flattenArray,
         flattenArrayMultiline,
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
  name: 'create',
  components: { Disclaimer },
  data() {
    return {
      // tables of stuff
      races,
      classes,
      backgrounds,
      feats,
      customfeats,
      armors,
      weapons,
      // form and visuals stuff
      submitted: false,
      skillsDialog: false,
      skillsDialogNext: false,
      extraFeat: false,
      extraFeatList: 'actor',
      // Local storage
      localCharactersList: [''],
      // character stuff
      name: '',
      level: 1,
      race: '',
      subrace: '',
      clas: '',
      background: '',
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

  mounted() {
    this.localCharactersList = readLocalStorage('localCharactersList');
    console.log(this.localCharactersList);
  },

  // Computed
  computed: {
    characterLanguages: function() {
      let fromRace = this.race ? this.races[this.race].languages : [];
      let fromSubrace = this.subrace ? this.races[this.race].subraces[this.subrace].languages ? this.races[this.race].subraces[this.subrace].languages : [] : [];
      return Array.from(new Set(fromRace.concat(fromSubrace)));
    },

    extraLanguages: function() {
      let subraceLang = this.subrace ? this.races[this.race].subraces[this.subrace].extraLanguage ? this.races[this.race].subraces[this.subrace].extraLanguage : 0 : 0;
      let raceLang = this.race ? this.races[this.race].extraLanguage ? this.races[this.race].extraLanguage : 0 : 0;
      let bgLang = this.background ? this.backgrounds[this.background].extraLanguage ? this.backgrounds[this.background].extraLanguage : 0 : 0;
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

    combatProficienciesList: {
      get: function() {
        let fromRace = this.race ? this.races[this.race].profCombat : [];
        let fromSubrace = this.subrace ? this.races[this.race].subraces[this.subrace].profCombat : [];
        let fromClass = this.clas ? this.classes[this.clas].profCombat : [];
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

    characterToolsList: {
      get: function() {
        let fromRace = this.race ? this.races[this.race].tools ? this.races[this.race].tools : [] : [];
        let fromClass = this.clas ? this.classes[this.clas].tools : [];
        let fromBackground = this.background ? this.backgrounds[this.background].tools : [];
        return Array.from(new Set(fromRace.concat(fromClass).concat(fromBackground)));
      },
      set: function(toolsString) {
        this.characterTools = toolsString;
        return toolsString;
      }
    },

    characterGoldAmount: {
      get: function() {
        return this.background ? this.backgrounds[this.background].money : 0;
      },
      set: function(goldNumber) {
        return goldNumber;
      }
    },

    characterItemsList: {
      get: function() {
        let fromBackground = this.background ? this.backgrounds[this.background].equipment : [];
        let fromClass = this.clas ? this.classes[this.clas].equipment : [];
        return flattenArrayMultiline(fromBackground.concat(fromClass));
      },
      set: function(itemsString) {
        this.characterItems = itemsString;
        return itemsString;
      }
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

    wieldsTwohanded: function() {
      return this.characterWeaponMelee ? this.weapons[this.characterWeaponMelee].modifiers.includes('twohanded') : false;
    },

    armorClass: function() {
      let attributeModifier = getModifier(this.dexterity);
      let baseAC = 10;
      let shield = this.characterShield ? 2 : 0;
      if (this.clas == 'barbarian' && this.characterArmor == 'noArmor') {
        attributeModifier += getModifier(this.constitution);
      } else if (this.clas == 'monk' && this.characterArmor == 'noArmor' && !this.characterShield) {
        attributeModifier += getModifier(this.wisdom);
      } else if (this.armors[this.characterArmor].type == 'heavy') {
        baseAC = this.armors[this.characterArmor].ac;
        attributeModifier = 0;
      } else if (this.armors[this.characterArmor].type == 'medium') {
        baseAC = this.armors[this.characterArmor].ac;
        attributeModifier = getModifier(this.dexterity) >= 2 ? 2 : getModifier(this.dexterity);
      } else {
        baseAC = this.armors[this.characterArmor].ac;
      }
      return baseAC + attributeModifier + shield;
    },

    skillsChoice: function() {
      return this.clas ? this.classes[this.clas].skillsChoice ? this.classes[this.clas].skillsChoice : [] : [];
    },

    staticSkills: function() {
      let fromRace = this.race ? this.races[this.race].skills ? this.races[this.race].skills : [] : [];
      let fromClass = this.clas ? this.classes[this.clas].skills ? this.classes[this.clas].skills : [] : [];
      let fromBackground = this.background ? this.backgrounds[this.background].skills ? this.backgrounds[this.background].skills : [] : [];
      return Array.from(new Set(fromRace.concat(fromBackground).concat(fromClass)));
    },

    skillsAllowed: function() {
      return this.clas ? this.classes[this.clas].skillsAllowed ? this.classes[this.clas].skillsAllowed : 0 : 0;
    },

    skillpoints: function() {
      let fromRace = this.race ? this.races[this.race].skillpoints ? this.races[this.race].skillpoints : 0 : 0;
      let fromClass = this.clas ? this.classes[this.clas].skillpoints ? this.classes[this.clas].skillpoints : 0 : 0;
      return fromRace + fromClass;
    },

    characterFeats: function() {
      let fromRace = this.race ? this.races[this.race].feats : [];
      let fromSubrace = this.subrace ? this.races[this.race].subraces[this.subrace].feats : [];
      let fromClass = this.clas ? this.classes[this.clas].feats[1] : [];
      let fromBackground = this.background ? this.backgrounds[this.background].feats : [];
      let extraFeat = this.extraFeat ? this.extraFeatList : [];
      return Array.from(new Set(fromRace.concat(fromSubrace).concat(extraFeat).concat(fromClass).concat(fromBackground)));
    },

    maxHealth: function() {
      let toughness = this.characterFeats.includes('dwarvenToughness') ? 1 : 0;
      let bonus = getModifier(this.constitution);
      return this.clas ? this.classes[this.clas].hitDie + bonus + toughness : 0;
      // ToDo: custom feat bonus or something, read up
    },

    characterSpeed: function() {
      let raceSpeed = this.race ? this.races[this.race].speed : 30;
      let subraceSpeed = this.subrace ? this.races[this.race].subraces[this.subrace].speed ? this.races[this.race].subraces[this.subrace].speed : false : false;
      return subraceSpeed ? subraceSpeed : raceSpeed;
    },

    strength: function() {
      return parseInt(this.characterStrength) + parseInt(this.strengthBonus);
    },
    dexterity: function() {
      return parseInt(this.characterDexterity) + parseInt(this.dexterityBonus);
    },
    constitution: function() {
      return parseInt(this.characterConstitution) + parseInt(this.constitutionBonus);
    },
    intelligence: function() {
      return parseInt(this.characterIntelligence) + parseInt(this.intelligenceBonus);
    },
    wisdom: function() {
      return parseInt(this.characterWisdom) + parseInt(this.wisdomBonus);
    },
    charisma: function() {
      return parseInt(this.characterCharisma) + parseInt(this.charismaBonus);
    },

    strengthBonus: function() { return this.hasBonus('strength'); },
    dexterityBonus: function() { return this.hasBonus('dexterity'); },
    constitutionBonus: function() { return this.hasBonus('constitution'); },
    intelligenceBonus: function() { return this.hasBonus('intelligence'); },
    wisdomBonus: function() { return this.hasBonus('wisdom'); },
    charismaBonus: function() { return this.hasBonus('charisma'); },

    sumOfStats: function () {
      return parseInt(this.strength) + parseInt(this.dexterity) + parseInt(this.constitution) + parseInt(this.intelligence) + parseInt(this.wisdom) + parseInt(this.charisma);
    }
  },

  // Watch
  watch: {
    race: function () {
      this.clearSubrace();
      this.pickSkills();
    },
    clas: function () {
      this.pickSkills();
    },
    background: function () {
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

  // Filters
  filters: {
    capitalize,
    getModifier,
    decoratePositive,
    flattenArray,
    flattenArrayMultiline
  },

  // Methods
  methods: {
    pickSkills () {
      this.skillsDialog = (this.clas && this.background && this.race && this.skillsAllowed) ? true : false;
      this.skillsDialogNext = (this.clas && this.background && this.race && !this.skillsAllowed) ? true : false;
    },
    hasBonus (attribute) {
      let fromRace = this.race ? this.races[this.race][attribute] ? this.races[this.race][attribute] : 0 : 0;
      let fromSubrace = this.subrace ? this.races[this.race].subraces[this.subrace][attribute] ? this.races[this.race].subraces[this.subrace][attribute] : 0 : 0;
      return this.extraFeat ? 0 : fromRace + fromSubrace;
    },
    clearSubrace () {
      this.subrace = undefined;
    },
    swap (from, to) {
      let buffer = this[to];
      this[to] = this[from];
      this[from] = buffer;
    },
    roll4d6 () {
      this.characterStrength = this.rollAttribute();
      this.characterDexterity = this.rollAttribute();
      this.characterConstitution = this.rollAttribute();
      this.characterIntelligence = this.rollAttribute();
      this.characterWisdom = this.rollAttribute();
      this.characterCharisma = this.rollAttribute();
    },
    rollAttribute () {
      let fourDice = [rollDice(6), rollDice(6), rollDice(6), rollDice(6)];
      const smallest = Math.min.apply(null, fourDice);
      const pos = fourDice.indexOf(smallest);
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let result = fourDice.slice(0, pos).concat(fourDice.slice(pos + 1)).reduce(reducer);
      return result;
    },
    // Last method, sends new character to database
    addToAPI () {
      let newCharacter = {
        name: this.name,
        level: this.level,
        race: this.race,
        subrace: this.subrace,
        clas: this.clas,
        background: this.background,

        strength: this.strength,
        dexterity: this.dexterity,
        constitution: this.constitution,
        intelligence: this.intelligence,
        wisdom: this.wisdom,
        charisma: this.charisma,

        maxHealth: this.maxHealth,
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

      // Put new character into local storage
      // 1. Generate a friendly nospace name
      let nospaceName = this.name.split(' ').join('');
      newCharacter._id = nospaceName;
      // 2. Update the list of local characters with a nospace name
      if (!this.localCharactersList) {
        this.localCharactersList = [nospaceName];
        console.log('New array');
      } else {
        this.localCharactersList.push(nospaceName);
        console.log('Pushed');
      }
      // 3. Update locally stored list of names
      updateLocalStorage (this.localCharactersList, 'localCharactersList');
      // 4. Create a LS item for this character
      updateLocalStorage (newCharacter, nospaceName);
      // 5. Go to tavern
      window.location = '/';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

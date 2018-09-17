<template lang="pug">
  div.levelup
    // Health from level dialog
    md-dialog.dialog(:md-active="levelUpOne" :md-fullscreen="false")
      md-dialog-title Health from level up
      .md-layout(md-dynamic-height)
        .md-layout-item
          md-radio(v-model="levelUpHealthMethod" value="maximum") Maximum ({{ levelUpHealthMax }})
          br
          md-radio(v-model="levelUpHealthMethod" value="average") Average ({{ levelUpHealthAverage }})
          br
          md-radio(v-model="levelUpHealthMethod" value="random") 
            a.roll-link(@click="levelUpRollHealth") Random ({{ levelUpHealthRandom }})

      md-dialog-actions
        md-button.md-primary(@click="levelUp()") Close
        md-button.md-primary(@click="levelUpStepTwo()") Next

    // Feats from level dialog
    md-dialog.dialog(:md-active="levelUpTwo" :md-fullscreen="false")
      md-dialog-title New feats
      .md-layout(md-dynamic-height)
        .md-layout-item
          div(v-for="(feat, key) in levelUpFeats" v-bind:key="levelUpFeats[feat]" v-bind:value="key")
            div {{ feats[feat].title }}
            div {{ feats[feat].description }}
          p(v-if="levelUpFeatsOverAttributes")
            | Attribute Score Improvement available! 
            br
            | You can put 2 points into any combination of attributes.

          .feat-checkbox(v-if="levelUpFeatsOverAttributes")
            md-checkbox(v-model="extraFeat") I want extra feat instead of stat bonus.
          
          md-field(v-if="extraFeat")
            label(for="bonusFeatList") Extra Feat
            md-select(v-model="extraFeatList" name="bonusFeatList")
              md-option(v-for="(feat, key) in customfeats" v-bind:key="customfeats[feat]" v-bind:value="key") {{ feat.title }}

      md-dialog-actions
        md-button.md-primary(@click="levelUpStepback") Back
        md-button.md-primary(@click="levelUpComplete") Complete
</template>

<script>
/* eslint-disable */
import { capitalize,
         rollDice,
         rollString,
         getModifier,
         decoratePositive } from '../../helpers';
import { classes } from '../../tables/classes';
import { feats } from '../../tables/feats';
import { customfeats } from '../../tables/customfeats';
import { mapGetters, 
         mapMutations } from 'vuex';
export default {
  name: 'LevelUp',
  data() {
    return {
      classes,
      feats,
      customfeats,
      // Level Up stuff
      levelUpHealthMethod: 'maximum',
      levelUpHealthRandom: 0,
      levelUpFeats: [],
      levelUpFeatsOverAttributes: false,
      extraFeat: false,
      extraFeatList: 'actor',
    }
  },

  // Computed
  computed: {
    ...mapGetters(['character',
                   'levelUpOne',
                   'levelUpTwo']),
    // Level Up stuff
    levelUpHealthMax: function() {
      let toughness = this.character.feats.includes('dwarvenToughness') ? 1 : 0;
      let bonus = getModifier(this.character.constitution);
      return this.classes[this.character.clas].hitDie + bonus + toughness;
    },
    levelUpHealthAverage: function() {
      let toughness = this.character.feats.includes('dwarvenToughness') ? 1 : 0;
      let bonus = getModifier(this.character.constitution);
      let average = this.classes[this.character.clas].hitDie / 2 + 1;
      return average + toughness + bonus;
    }
  },

  // Methods
  methods: {
    ...mapMutations([
      'levelUp',
      'levelUpNext',
      'levelUpStepback',
      'mutateCharacter',
      'updateRollQueue',
    ]),

    levelUpStepTwo () {
      this.levelUpGetFeats();
      if (this.levelUpFeats == false && this.levelUpFeatsOverAttributes == false) {
        this.levelUp();
        this.levelUpComplete();
      } else {
        this.levelUp();
        this.levelUpNext();
      }
    },

    levelUpRollHealth () {
      let toughness = this.character.feats.includes('dwarvenToughness') ? 1 : 0;
      let bonus = getModifier(this.character.constitution);
      this.levelUpHealthRandom = rollDice(this.classes[this.character.clas].hitDie) + bonus + toughness;
    },

    levelUpGetFeats () {
      this.levelUpFeats = this.classes[this.character.clas].feats[this.character.level + 1];
      if (this.levelUpFeats.includes('asImprovement')) {
        this.levelUpFeats.splice(this.levelUpFeats.indexOf('asImprovement'), 1);
        this.levelUpFeatsOverAttributes = true;
      }
    },

    levelUpComplete () {
      // Add health from level up to MaxHealth
      let newHealthValue = 0;
      if (this.levelUpHealthMethod == 'maximum') {
        newHealthValue = this.character.maxHealth + this.levelUpHealthMax;
      } else if (this.levelUpHealthMethod == 'average') {
        newHealthValue = this.character.maxHealth + this.levelUpHealthAverage;
      } else {
        newHealthValue = this.character.maxHealth + this.levelUpHealthRandom;
      }
      // Add new feats
      let newFeats = this.character.feats.concat(this.levelUpFeats);
      newFeats = this.extraFeat == true ? this.character.feats.concat(this.extraFeatList) : this.character.feats;
      // Iterate level
      this.mutateCharacter({param: 'feats', value: newFeats});
      this.mutateCharacter({param: 'maxHealth', value: newHealthValue});
      this.mutateCharacter({param: 'level', value: this.character.level + 1});
      // Reset booleans
      this.levelUpNext()
      this.levelUpFeatsOverAttributes = false;
      this.extraFeat = false;
      // Message queue update
      this.updateRollQueue({message: 'Level up complete!'});
    }
  }
}
</script>

<style>
</style>

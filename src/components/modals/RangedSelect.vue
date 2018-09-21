<template lang="pug">
  md-dialog.weapon-select-dialog.dialog(:md-active="rangedSelectModal" :md-fullscreen="false")
    md-dialog-title Ranged Weapons
    .md-layout(md-dynamic-height)
      .weapon-list
        md-button.md-dense.md-raised.md-primary(@click="changeRanged('shotbow')") Shortbow (1d6)
        md-button.md-dense.md-raised.md-primary(@click="changeRanged('longbow')") Longbow (1d8)
        md-button.md-dense.md-raised.md-primary(@click="changeRanged('sling')") Sling (1d4)
        md-button.md-dense.md-raised.md-primary(@click="changeRanged('dart')") Dart (1d4)
        md-button.md-dense.md-raised.md-primary(@click="changeRanged('dagger')") Dagger (1d4)
        md-button.md-dense.md-raised.md-primary(@click="changeRanged('crossbowHand')") Crossbow, hand (1d6)
        md-button.md-dense.md-raised.md-primary(@click="changeRanged('crossbowLight')") Crossbow, light (1d8)
        md-button.md-dense.md-raised.md-primary(@click="changeRanged('crossbowHeavy')") Crossbow, heavy (1d10)
        md-button.md-dense.md-raised.md-primary(@click="changeRanged('handaxe')") Handaxe (1d6)
        md-button.md-dense.md-raised.md-primary(@click="changeRanged('javelin')") Javelin (1d4)
        md-button.md-dense.md-raised.md-primary(@click="changeRanged('lightHammer')") Light Hammer (1d4)
        md-button.md-dense.md-raised.md-primary(@click="changeRanged('spear')") Spear (1d6)
        md-button.md-dense.md-raised.md-primary(@click="changeRanged('trident')") Trident (1d6)
        md-button.md-dense.md-raised.md-primary(@click="changeRanged('blowgun')") Blowgun (1)

    md-dialog-actions
      md-button.md-primary.md-raised(@click="toggleRangedSelect()") Close
</template>

<script>
/* eslint-disable */
import { mapGetters, 
         mapMutations } from 'vuex';
export default {
  name: 'RangedSelect',
  data() {
    return {
    }
  },

  // Computed
  computed: {
    ...mapGetters([
      'rangedSelectModal'
    ])
  },

  // Methods
  methods: {
    ...mapMutations([
      'mutateCharacter',
      'toggleRangedSelect'
    ]),

    changeRanged (rangedType) {
      this.mutateCharacter({param: 'weaponRanged', value: rangedType});
      this.toggleRangedSelect();
    }
  }
}
</script>

<style>
</style>

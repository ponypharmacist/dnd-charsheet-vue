<template lang="pug">
  md-dialog.armor-select-dialog.dialog(:md-active="armorSelectModal" :md-fullscreen="false")
    md-dialog-title Armors
    .md-layout(md-dynamic-height)
      .md-layout-item
        .md-subtitle Light Armors
        md-button.md-dense.md-raised.md-primary(@click="changeArmor('noArmor')") No Armor (AC: 10)
        md-button.md-dense.md-raised.md-primary(@click="changeArmor('padded')") Padded Armor (AC: 11, stealth)
        md-button.md-dense.md-raised.md-primary(@click="changeArmor('leather')") Leather Armor (AC: 11, stealth)
        md-button.md-dense.md-raised.md-primary(@click="changeArmor('studded')") Studded Leather Armor (AC: 12)
      .md-layout-item
        .md-subtitle Medium Armors
        md-button.md-dense.md-raised.md-primary(@click="changeArmor('hide')") Hide Armor (AC: 12, stealth)
        md-button.md-dense.md-raised.md-primary(@click="changeArmor('chainShirt')") Chain Shirt (AC: 13, stealth)
        md-button.md-dense.md-raised.md-primary(@click="changeArmor('scaleMail')") Scale Mail (AC: 14)
        md-button.md-dense.md-raised.md-primary(@click="changeArmor('breastplate')") Breastplate (AC: 14, stealth)
        md-button.md-dense.md-raised.md-primary(@click="changeArmor('halfPlate')") Half Plate Armor (AC: 15)
      .md-layout-item
        .md-subtitle Heavy Armors
        md-button.md-dense.md-raised.md-primary(@click="changeArmor('ringMail')") Ring Mail Armor (AC: 14)
        md-button.md-dense.md-raised.md-primary(@click="changeArmor('chainMail')") Chain Mail Armor (AC: 16)
        md-button.md-dense.md-raised.md-primary(@click="changeArmor('splint')") Splint Armor (AC: 17)
        md-button.md-dense.md-raised.md-primary(@click="changeArmor('plate')") Plate Armor (AC: 18)

    md-dialog-actions
      md-button.md-primary.md-raised(@click="toggleArmorSelect()") Close
</template>

<script>
/* eslint-disable */
import { mapGetters, 
         mapMutations } from 'vuex';
export default {
  name: 'ArmorSelect',
  data() {
    return {
    }
  },

  // Computed
  computed: {
    ...mapGetters([
      'armorSelectModal'
    ]),
  },

  // Methods
  methods: {
    ...mapMutations([
      'mutateCharacter',
      'toggleArmorSelect'
    ]),

    changeArmor (armorType) {
      this.mutateCharacter({param: 'armor', value: armorType});
      this.toggleArmorSelect();
    }
  }
}
</script>

<style>
</style>

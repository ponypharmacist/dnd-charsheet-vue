<template lang="pug">
  md-dialog.weapon-select-dialog.dialog(:md-active="modalIsActive" :md-fullscreen="false")
    md-dialog-title Weapons
    .md-layout(md-dynamic-height)
      .weapon-list
        .md-subtitle Simple Weapons
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('unarmed')") Unarmed Strike
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('club')") Club (1d4)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('dagger')") Dagger (1d4)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('greatclub')") Greatclub (1d8)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('handaxe')") Handaxe (1d6)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('javelin')") Javelin (1d6)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('lightHammer')") Light Hammer (1d4)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('mace')") Mace (1d6)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('quarterstaffs')") Quarterstaff (1d6)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('sickle')") Sickle (1d4)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('spear')") Spear (1d6)
      .weapon-list
        .md-subtitle Martial Weapons
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('battleaxe')") Battleaxe (1d8)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('flail')") Flail (1d8)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('glaive')") Glaive (1d10)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('greataxe')") Greataxe (1d12)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('greatsword')") Greatsword (2d6)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('halberd')") Halberd (1d10)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('lance')") Lance (1d12)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('longsword')") Longsword (1d8)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('maul')") Maul (2d6)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('morningstar')") Morningstar (1d8)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('pike')") Pike (1d10)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('rapier')") Rapier (1d8)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('scimitar')") Scimitar (1d6)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('shortsword')") Shortsword (1d6)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('trident')") Trident (1d6)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('warPick')") War pick (1d8)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('warhammer')") Warhammer (1d8)
        md-button.md-dense.md-raised.md-primary(@click="changeWeapon('whip')") Whip (1d4)

    md-dialog-actions
      md-button.md-primary.md-raised(@click="toggleWeaponSelect()") Close
</template>

<script>
/* eslint-disable */
import { mapGetters, 
         mapMutations } from 'vuex';
export default {
  name: 'WeaponSelect',
  data() {
    return {
    }
  },

  // Computed
  computed: {
    ...mapGetters([
      'weaponSelectModal'
    ]),
    modalIsActive () {
      return !!this.weaponSelectModal
    }
  },

  // Methods
  methods: {
    ...mapMutations([
      'mutateCharacter',
      'toggleWeaponSelect'
    ]),

    changeWeapon (weaponType) {
      this.mutateCharacter({param: this.weaponSelectModal, value: weaponType});
      this.toggleWeaponSelect(false);
    }
  }
}
</script>

<style>
</style>

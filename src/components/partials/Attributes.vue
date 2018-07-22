<template lang="pug" src="./Attributes.pug">
</template>

<script>
import { getModifier, decoratePositive, rollDice } from '../../helpers'
export default {
  name: 'Attributes',
  props: {
    updateCharacter: Object, // ToDo does not seem to work
    strengthBonus: Number,
    dexterityBonus: Number,
    constitutionBonus: Number,
    intelligenceBonus: Number,
    wisdomBonus: Number,
    charismaBonus: Number
  },
  data () {
    return {
      strength: 16,
      dexterity: 14,
      constitution: 13,
      intelligence: 12,
      wisdom: 10,
      charisma: 9
    }
  },
  filters: {
    getModifier,
    decoratePositive
  },
  computed: {
    sumOfStats: function () {
      return parseInt(this.strength) + parseInt(this.dexterity) + parseInt(this.constitution) + parseInt(this.intelligence) + parseInt(this.wisdom) + parseInt(this.charisma)
    }
  },
  methods: {
    swap (from, to) {
      let buffer = this[to]
      this[to] = this[from]
      this[from] = buffer
    },
    roll4d6 () {
      this.strength = this.rollAttribute()
      this.dexterity = this.rollAttribute()
      this.constitution = this.rollAttribute()
      this.intelligence = this.rollAttribute()
      this.wisdom = this.rollAttribute()
      this.charisma = this.rollAttribute()
    },
    rollAttribute () {
      let fourDice = [rollDice(6), rollDice(6), rollDice(6), rollDice(6)]
      const smallest = Math.min.apply(null, fourDice)
      const pos = fourDice.indexOf(smallest)
      const reducer = (accumulator, currentValue) => accumulator + currentValue
      let result = fourDice.slice(0, pos).concat(fourDice.slice(pos + 1)).reduce(reducer)
      return result
    },
    onInput (statname) {
      this.$emit('updateCharacter', parseInt(this[statname]), statname)
    }
  }
}
</script>

<style>
</style>

<template lang="pug" src="./Attributes.pug">
</template>

<script>
import { getModifier, decoratePositive, rollDice } from '../../helpers'
export default {
  name: 'Attributes',
  props: [ 'setStr' ],
  data () {
    return {
      strength: 24,
      dexterity: 14,
      constitution: 14,
      intelligence: 14,
      wisdom: 14,
      charisma: 10
    }
  },
  filters: {
    getModifier,
    decoratePositive
  },
  methods: {
    rollAttribute () {
      let fourDice = [rollDice(6), rollDice(6), rollDice(6), rollDice(6)]
      const smallest = Math.min.apply(null, fourDice)
      const pos = fourDice.indexOf(smallest)
      const reducer = (accumulator, currentValue) => accumulator + currentValue
      let result = fourDice.slice(0, pos).concat(fourDice.slice(pos + 1)).reduce(reducer)
      console.log(result)
      return result
    },
    rollStrength () {
      this.strength = this.rollAttribute()
    }
  }
}
</script>

<style>
</style>

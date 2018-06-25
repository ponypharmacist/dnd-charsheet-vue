<template lang="pug" src="./Attributes.pug">
</template>

<script>
import { getModifier, decoratePositive, rollDice } from '../../helpers'
export default {
  name: 'Attributes',
  props: [ 'updateCharacter' ],
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
      console.log(result)
      return result
    },
    onInput (statname) {
      this.$emit('updateCharacter', this[statname], statname)
    }
  }
}
</script>

<style>
</style>

// Capitalize text filter
export const capitalize = (text) => {
  return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

// Dice roller
export const rollDice = (die, times = 1, modifier = 0) => {
  let sumOfRolls = 0
  for (let i = 1; i <= times; i++) {
    let currentRoll = Math.ceil(Math.random() * Math.floor(die))
    sumOfRolls += currentRoll
    console.log('Rolled a d' + die + ' #' + i + ' for ' + currentRoll)
  }
  return sumOfRolls + modifier
}

// Dice expression (e.g. '2d6+2') roller. Expression is a String.
export const rollString = (expression) => {
  let times = parseInt(expression.split(/[d+]/)[0])
  let die = parseInt(expression.split(/[d+]/)[1])
  let modifier = parseInt(expression.split(/[d+]/)[2])
  return rollDice(die, times, modifier)
}

// Calculate modifier filter
export const getModifier = (abilityValue) => {
  return Math.floor((abilityValue - 10) / 2)
}

// Decorate positive numbers with a plus
export const decoratePositive = (number) => {
  return number > 0 ? '+' + number : number
}

// Parse ability bonuses from race and subrace
export const parseAbilityBonus = (expression) => {
  let abilityName = expression.split('+')[0]
  let abilityBonus = parseInt(expression.split('+')[1])
  return {
    abilityName: abilityName,
    abilityBonus: abilityBonus
  }
}

// Flatten array to a list
export const flattenArray = (array) => {
  return array.join(', ')
}

export const capitalize = (text) => {
  return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

export const formatDate = (date) => {
  const toFormat = new Date(date).toString().split(' ')
  return `${toFormat[2]} ${toFormat[1]} ${toFormat[3]}`
}

// http://stackoverflow.com/questions/4060004/calculate-age-in-javascript/21984136#21984136
export const calculateAge = (birthday) => {
  const ageDifMs = Date.now() - birthday.getTime()
  const ageDate = new Date(ageDifMs)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
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

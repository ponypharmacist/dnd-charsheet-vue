
// Dice roller
function rollDice(die, times = 1, modifier = 0) {
  let sumOfRolls = 0;
  for (let i = 1; i <= times; i++) {
    let currentRoll = Math.ceil(Math.random() * Math.floor(die));
    sumOfRolls += currentRoll;
    console.log('Rolled a d' + die + ' #' + i + ' for ' + currentRoll);
  }
  return sumOfRolls + modifier;
};

// Dice expression (e.g. '2d6+2') roller. Expression is a String.
function rollString(expression) {
  let times = parseInt(expression.split(/[d+]/)[0]);
  let die = parseInt(expression.split(/[d+]/)[1]);
  let modifier = parseInt(expression.split(/[d+]/)[2]);
  return rollDice(die, times, modifier ? modifier : 0);
};

console.log('Rolled 2d10+2, result is: ' + rollString('2d10+2'));
console.log('Rolled 2d10-2, result is: ' + rollDice(10, 2, -2));
console.log('Rolled a d20, result is: ' + rollDice(20));

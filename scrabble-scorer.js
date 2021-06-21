// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require('readline-sync');
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z'],
};
function oldScrabbleScorer(word) {
  word = word.toUpperCase();
  let letterPoints = '';
  for (let i = 0; i < word.length; i++) {
    for (const pointValue in oldPointStructure) {
      if (oldPointStructure[pointValue].includes(word[i])) {
        letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
      }
    }
  }
  return letterPoints;
}
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //


function initialPrompt() {
  let word = input.question("Let's play some scrabble! \nEnter a word: ");
  return word;
}
console.log(oldScrabbleScorer(initialPrompt()));

function simpleScore(word) {
  let num = '';
  for (let i = 1; i <= word.length; i++) {
    num = i;
  }
  return num;
}

function vowelBonusScore(word) {
  let vowelBonus = 0;
  for (i = 0; i < word.length; i++) {
    if (
      word[i] == 'A' ||
      word[i] == 'E' ||
      word[i] == 'O' ||
      word[i] == 'U'
    ) {
      vowelBonus += 3;
    }
    vowelBonus += 1;
  }
  return vowelBonus;
};
function scrabbleScore(word) {
    let sum = 0;
    let i = 0;
    let score = 0;
    for (i = 0; i < oldPointStructure.length; i++) {
        letter = newPointStructure[i];
        sum += parseInt(transform(oldPointStructure));
    }
    return (sum*1);
}
console.log(scrabbleScore());

let scoringAlgorithms = [
  {
    name: 'Simple Score',
    description: 'Each letter is worth 1 point.',
    scorerFunction: simpleScore,
    },
    {
    name: 'Bonus Vowels',
    description: 'Vowels are 3 pts, consonants are 1 pt.',
    scorerFunction: vowelBonusScore,
  },
  {
    name: 'Scrabble',
    description: 'The traditional scoring algorithm.',
    scorerFunction: scrabbleScore,
  },
];
console.log(scorerPrompt(scoringAlgorithms));

function scorerPrompt(word) {
  let scoreType = input.question(
    'Which scoring algorithm would you like to use?\n\n0-Simple: One point per character\n1- Vowel Bonus: Vowels are worth 3 points\n2- Scrabble: Uses scrabble point system\nEnter 0,1, or 2: '
  );
 console.log("algorithm name: ", scoringAlgorithms[0].name);
console.log("scoreFunction result: ", scoringAlgorithms[0].scoreFunction("JavaScript", simpleScore));


console.log("algorithm name: ", scoringAlgorithms[1].name);
console.log("scoreFunction result: ", scoringAlgorithms[1].scoreFunction("JavaScript", vowelBonusScore));

console.log("algorithm name: ", scoringAlgorithms[2].name);
console.log("scoreFunction result: ", scoringAlgorithms[2].scoreFunction("JavaScript", newPointStructure));
}

function transform(oldPointStructure){
for (items in oldPointStructure){
  for (i=0; i < oldPointStructure['1'].length; i++){
    oldPointStructure[oldPointStructure['1'][i]] = 1;
  }
  for (i=0; i < oldPointStructure['2'].length; i++){
    oldPointStructure[oldPointStructure['2'][i]] = 2;
  } 
for (i=0; i < oldPointStructure['3'].length; i++){
    oldPointStructure[oldPointStructure['3'][i]] = 3;
  }
for (i=0; i < oldPointStructure['4'].length; i++){
    oldPointStructure[oldPointStructure['4'][i]] = 4;
  } 
for (i=0; i < oldPointStructure['5'].length; i++){
    oldPointStructure[oldPointStructure['5'][i]] = 5;
  } 
for (i=0; i < oldPointStructure['8'].length; i++){
    oldPointStructure[oldPointStructure['8'][i]] = 8;
  } 
for (i=0; i < oldPointStructure['10'].length; i++){
    oldPointStructure[oldPointStructure['10'][i]] = 10;
  } 
}
return oldPointStructure;
let newPointStructure = transform(oldPointStructure);

function runProgram(){
initialPrompt();
scorerPrompt();
console.log(newPointStructure);
}
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
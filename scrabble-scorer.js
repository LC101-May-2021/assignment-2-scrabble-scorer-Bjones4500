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
//console.log(`Each letter is 1 point\nPoints for ${word}: ${simpleScore}`);
//return simpleScore;
let vowelBonusScore = function (word) {
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
    scorerFunction: function (word){
let num = '';
  for (let i = 1; i <= word.length; i++) {
    num = i;
  }
  return num;
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
  if ((scoreType == 0)) {
    return console.log(scoringAlgorithms[0].scorerFunction(word));
    console.log(`Is worth ${simpleScore(word)} points`);
  }
  if ((scoreType == 1)) {
    return console.log(scoringAlgorithms[1].scorerFunction(word));
    console.log(`Is worth ${bonusVowels(word)} points`);
  }
  if ((scoreType == 2)) {
    return console.log(scoringAlgorithms[2].scorerFunction(word));
    console.log(`Is worth ${scrabbleScoring(word, newPointStructure)} points`);
  }
}

const transform = (oldPointStructure) => Object
  .entries(oldPointStructure) 
  .reduce((result, [score, letters]) => { 
    letters.forEach(letter => {
      result[letter.toLowerCase()] = score;
    });
    
    return result;
    
  }, {});

//console.log(transform(oldPointStructure));
newPointStructure = transform(oldPointStructure);

function runProgram()



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
  scorerPrompt: scorerPrompt,
};



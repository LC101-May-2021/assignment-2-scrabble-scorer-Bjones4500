// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
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

let simpleScore = 
console.log(`Each letter is 1 point\nPoints for ${word}: ${simpleScore}`);
return simpleScore;
  
let vowelBonusScore =
console.log(`Each Vowel is 3 Points and each consonantsis 1\nPoints for ${word}: ${vowelBonusScore}`);
return vowelBonusScore;
}

let scrabbleScore = ;

let scoringAlgorithms = [
  {name: "Simple Score",description: "Each letter is worth 1 point.",scorerFunction: simpleScore},
  {name: "Bonus Vowels", description: "Vowels are 3 pts, consonants are 1 pt.",scorerFunction: vowelBonusScore}, {name: "Scrabble",description:"The traditional scoring algorithm.", scorerFunction: oldScrabbleScorer}];

console.log(scorerPrompt(scoringAlgorithms));

function scorerPrompt(word) {
 let  scoreType = input.question("Which scoring algorithm would you like to use?\n\n0-Simple: One point per character\n1- Vowel Bonus: Vowels are worth 3 points\n2- Scrabble: Uses scrabble point system\nEnter 0,1, or 2: ");
  if (scoreType == 0) {
    console.log("Algorithm Name: ", scoringAlgorithms[0].name);
    scrabbleScore = scoringAlgorithms[0].scorerFunction;
    console.log("Results: ", scrabbleScore);
     } else if (scoreType ==1){
    console.log("Algorithm Name: ", scoringAlgorithms[1].name);
    scrabbleScore = scoringAlgorithms[1].scorerFunction;
    console.log("Results: ", scrabbleScore);
     } else if (scoreType == 2){
    console.log("Algorithm Name: ", scoringAlgorithms[2].name);
     scrabbleScore = scoringAlgorithms[2].scorerFunction;
    console.log("Results: ", scrabbleScore);
  }
  return scrabbleScore;
}


function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   
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


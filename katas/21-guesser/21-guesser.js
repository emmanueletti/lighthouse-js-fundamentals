/*
In this kata you'll be responsible for setting up your JS file from scratch. Make sure it is well organized!

Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end, the number of tries needed should be printed.

Inputting the same number multiple times should only count as one try. If the user provides an answer which isn't a number, print an error message and do not count this as a try.
*/

let prompt = require("prompt-sync")();

// function to generate a random number
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// generate a random number
let randomNumber = getRandomInt(1, 100);
let attempts = 0;
let lastSubmission = '';

// TEST: give me the number to i don't have to keep guessing
console.log(randomNumber);

// prompt at least once before checking the loop conditions. keep going till user guesses right
do {

  // prompt user for an answer
  answer = prompt("Guess a number: ");

  // check to make sure user entered number, if not give an error
  // prompt returns a string
  if (Number.isNaN(Number(answer))) {
    console.log('Not a number! Try again!')
  } else {

    // if user entered number, check to make sure it is not the same as last submission
    if (answer !== lastSubmission) {

      // the magic
      if (Number(answer) > randomNumber) {
        console.log('Too High!');
        attempts++;
      } else if (Number(answer) < randomNumber) {
        console.log('Too Low!');
        attempts++;
      }

    } else {
      console.log('Already Guessed!');
    }

  }

  // at the end of each cycle, save the last entered number for comparison
  lastSubmission = answer;

} while (Number(answer) !== randomNumber);

console.log(`Congratulations! It took you ${attempts} attempts!`)

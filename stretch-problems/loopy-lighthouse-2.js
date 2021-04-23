/*
Wrap the code you've written in a function called loopyLighthouse(range, multiples, words) that you call with 3 parameters.

    range should be an array of 2 numbers representing the start and end values for the loop.
    multiples should be an array of 2 numbers representing the multiples you want to replace with words.
    words should be an array of 2 strings representing the words that will replace the multiples.

The loopyLighthouse function should log to the console all the numbers from 15 to 90, except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", and multiples of 2 and 5 with "BattyBeacon".
*/


function loopyLighthouse(range, multiples, words) {
  for (let counter = range[0]; counter <= range[1]; counter++) {
    if ((counter % multiples[0] === 0) && (counter % multiples[1] === 0)) {
      console.log(words.join(''));
    } else if (counter % multiples[0] === 0) {
      console.log(words[0]);
    } else if (counter % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(counter);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
/*
In Square Code, the spaces are removed from the english text and the characters are written into a square (or rectangle). For example, the sentence "If man was meant to stay on the ground god would have given us roots" is 54 characters long, once the spaces are removed, so it is written into a rectangle with 7 rows and 8 columns.

The square root of 54 (Math.sqrt(54)) is 7.3484692283495345. If we round this number up (Math.ceil(Math.sqrt(54))), we get 8. If we use that for the number of characters on each line (the number of columns), then our text will be close to a square shape.

The message is then coded by reading down the columns going left to right. For example, the message above is coded as:

And that's the output of the algorithm. We can then reverse the process to decrypt the text and read the original message.
*/

/* INITIAL PLAN
- read through string and remove all the spaces
- calculate the square root of the new string length and round up = "row length"
- use that number to create a box with a new line break every "row length"
- read the box column by column
REDUCTION
  - to read one column, when your rounded sqrt is 8
  - each "columun" will be 9 characters away from each other (including the added "\n")
  - to read one column, you start from index 0 and jump 9 characters to the next, then add that character to your final string - repeat this to the end of the string
  - to read the next column, you have to read the string all over again but now shift from starting at index 0 to starting at the next index, then keep jumping 9 spaces through the string like before
- to solve original problem, repeat this by the rounded sqrt number (so in the case of a sqrt rounded number of 8, repeat this cycle 8 times - adding a space each cycle)

*/

//BUILD
const squareCode = function (message) {
  
  // read through and remove all spaces
  let processed = '';
  for (let i = 0; i < message.length; i++) {
    if (message[i] === ' ') {
      processed;
    } else {
      processed += message[i];
    }
  }

  // calculate rounded sqrt with given formula
  let rowLength = Math.ceil(Math.sqrt(processed.length));

  // create box string using rounded sqrt
  let boxString = '';
  for (let i = 0; i < processed.length; i++) {
    if (i !== 0 && i % rowLength === 0) {
      boxString += '\n';
      boxString += processed[i];
    } else {
      boxString += processed[i];
    } 
  }

  // positioning and cycling magic
  let scrambled = '';
  let shift = 0;
  let cycle = 0;

  while (cycle < rowLength) {

    for (let i = shift; i < boxString.length; i += rowLength + 1) {
      if (boxString[i] === '\n') {
        scrambled;
      } else if (i === 0) { 
        scrambled += boxString[i];
      } else {
        scrambled += boxString[i];
      }
    }

    scrambled += ' ';
    shift++;
    cycle++;
  }

  return scrambled;
};


//TEST
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
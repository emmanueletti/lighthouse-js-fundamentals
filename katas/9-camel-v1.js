// Create a function named camelCase that will convert a string to camel case, and return the result.

/* INITIAL THOUGHTS
- go through string and copy it to another
- when there is a space, replace the next character with the uppercase versions of itself
- now create another copy of the string just created
- and everytime there is a space, skip it (somehow)

*/

// BUILD

const camelCase = function (input) {
  // loop to go through string and when encounters a space, adds the capitalized version of the character in front of it. this creates a string where there will be letter repeats -  a capitlized version and a non capitalized version
  let capped = '';

  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      capped += input[i+1].toUpperCase();
    } else {
      capped += input[i];
    }
  }

  // go through string and at each element, look behind you to see if the previous letter is equal to a capitalized version of itself (aka if it is capitalized), if so then insert the current element into the new string but also a backspace escape sequence which will delete the current element when it is console logged.

  //initialzied new string with the first of the old string because the loop needs to start at j = 1 or else the first if statement will give undefined as index position 0 can't look behind itself. but if i start loop at j=1 and initialize new string as an emplty string, then the first letter of 'capped' will be ignored

  let cleanString = capped[0];


  for (let j = 1; j < capped.length; j++) {
    if (capped[j-1] === capped[j-1].toUpperCase()) {
      cleanString += capped[j];
      cleanString += '\b';
    } else {
      cleanString += capped[j];
    }
  }

  // the final returned string will have the escape seqences in them so when they get console logged they will be activated
  return cleanString;
};

// TEST


console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
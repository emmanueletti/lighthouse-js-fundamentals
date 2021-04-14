// Create a function named multiplicationTable that receives a number maxValue as input and creates a square multiplication table where maxValue is the largest value in the table.

//We will be given a number as our input data. This number is the highest value of our multiplication table. Our job is to generate a multiplication table for the values from 1 to the provided number - printed onto the console.

/* INITIAL THOUGHTS
- given a max value
- start from one up the max value (REPEAT - LOOP)
- at first value multiply and add it to a string with a space
- REPEAT this maxValue number of times then add a new line escape sequence
- ...
- at the end, return the massive string
*/

// BUILD V2
const multiplicationTable = function (maxValue) {
  let table = '';

  for (let row = 1; row <= maxValue; row++) {
      for (let col = 1; col <= maxValue; col++) {
        // for some wierd reason, javascript increments the table string instead of continually adding the result of 1*1 to the first row string - stead it calcualtes it to be 1 then increments the table string and adds the result as a string ... wierd OR maybe JS type casts the table string as a number first, does the incremental addition, then my addiiton of the string at the end turns it back to a string?
        table += (col * row + ' ');
      }
      table += '\n'
    } 
  return table;
};


//TEST
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));


/* V1
const multiplicationTable = function (maxValue) {
  let table = '';

  for (let i = 0; i < maxValue; i++) {
    if (i === 0) {
      for (let j = 1; j <= maxValue; j++) {
        table += (j + ' ');
      }
      table += '\n'
    } else {
      for (let k = 1; k <= maxValue; k++) {
        table += (k * i) + ' ';
      }
      table += '\n'

    }

  }

  return table;
};

*/
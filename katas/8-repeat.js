// Create a function named repeatNumbers that will return a string with each of the given values repeated the appropriate number of times, if there are multiple sets of values each set should be separated by a comma.If there is only one set of values then you should omit the comma

/*
STEPS
*/


const repeatNumbers = function (data) {
  
  // loop to print repeat the numbers then add a comma and space after each array
  let string = '';
  for (let i = 0; i < data.length; i++) {

    for (let j = 0; j < data[i][1]; j++) {
      string += data[i][0];
    }
    string += ', ';
  }

  // loop to remove the last ', ' from the end of the string
  let cleanString = '';
  for (let k = 0; k < string.length - 2; k++) {
    cleanString += string[k];
  }
  return cleanString;
};


//TEST
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
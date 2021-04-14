
// Create a function named numberOfVowels that will receive a string and return the number of vowels (a,e,i,o,u) in that string.

/*
STEPS
- create a loop that iterates over the string
- for each element if it matches to a or e or i ... or u
- then increase a counter by 1
*/


const numberOfVowels = function (data) {
  counter = 0;
  for (const letter of data) {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' ) {
      counter++;
    }
  }
  return counter;
};


// TEST
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
// Create a function named urlEncode that will receive a string of words, and return that string with all of the whitespace characters converted to % 20. If there is whitespace on the outside of the string, like in our second example above, you should only replace the whitespace within the string.

/*
- first trim the text
- then loop and check if each character is an empty space
- if so, then replace with '%20' 
*/


const urlEncode = function (text) {
  let trimmed = text.trim();
  let encoded = '';
  for (let i = 0; i < trimmed.length; i++){
    if (trimmed[i] === ' ') {
      encoded += '%20'
    } else {
      encoded += trimmed[i];
    }
  }
  return encoded;
};

// TEST
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
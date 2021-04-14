// cleaned up version of the logic found in V1
// GOAL: refactor and simplify solution

//INITIAL THOUGHTS
// instead of two different functions, do it all in one function, with character lookbacks and all. don't even need the backspace escape sequence

// BUILD

const camelCase = function (input) {

  let camelCased = '';

  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      // this is my way of saying do nothing and move on to the next element in the loop
      camelCased;
    } else if (input[i-1] === ' ') {
      // this is my look back path, where if the previous character was a space, then go ahead and uppercase the current character
      camelCased += input[i].toUpperCase();
    } else {
      //this is for everything else
      camelCased += input[i];
    }
  }
  return camelCased;
};

// TEST


console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
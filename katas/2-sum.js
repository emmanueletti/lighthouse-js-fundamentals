/*
TASK
Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.
*/

/*
STEPS
- first filter to see if condition is even or odd
- if even (or odd)
  - loop through the array and += a counter variable
  - return the counter variable
*/

const conditionalSum = function (values, condition) {
  if (condition === 'even') {
    let evenSum = 0;
    for (const element of values) {
      if (element % 2 === 0) {
        evenSum += element;
      }
    }
    return evenSum;
  } else {
    let oddSum = 0;
    for (const element of values) {
      if (element % 2 !== 0) {
        oddSum += element;
      }
    }
    return oddSum;
  }
};

// TEST


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
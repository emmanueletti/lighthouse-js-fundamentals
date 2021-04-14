/*
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
*/

/*
STEPS
- create function that takes an array as input
- loop through array and compare each number with a starting value (counter1)
- if the value in the array is larger than the counter, then update the counter with that value
- do another loop to find the value is is NOT the first value but is larger than all the other values
- save that value into the final counter 2
- then return the sum of both
*/

function sumLargestNumbers(array) {

  let counter1 = array[0];
  let counter2 = array[0];

  for (const element of array) {
    if (element > counter1) {
      counter1 = element;
    }
  }
  
  for (const element of array) {
    if (element < counter1 && element > counter2) {
      counter2 = element;
    }
  }

  return counter1 + counter2;
}


//TEST
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
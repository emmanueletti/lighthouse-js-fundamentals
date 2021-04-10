// In this challenge, we will be building a function that determines the last index of an item in an array.
// When this function is given an array and a value, it should return the index of the last time the value occurs in the array. If the value never occurs, the function should return -1.

/*
STEPS
- create a function that takes an array and a value - DONE
- then loop through the given array - DONE
- compare each element with the value given
- each time it sees the value, save the index location
- update the index location when it sees the value further along the array
- at the end of the loop, return the index location last saved
- if last index location is emppty or unchanged, then return -1
*/

function lastIndexOf(array, value){
  const workingArray = array;
  let indexLocation = -1;
  for(let i = 0; i < workingArray.length; i++){
    if(workingArray[i] === value){
      indexLocation = i;
    }
  }
  return indexLocation;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
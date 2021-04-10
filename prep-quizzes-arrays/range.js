// Define a function called range
// The function takes 3 integer parameters: start, end, and step.
// The function should return an array of numbers from start to end counting by step.
// The function should return an empty array [] if given incorrect parameters, such as:
      // start, end, or step being undefined
      // start being greater than end
      // step being 0, or negative


/*

STEPS
- make a working function that recieves 3 parameters and validates them according to following checks - DONE
    - return an empty array if start, step, or end are undefined - DONE
    - return empty array if start is greater than end - DONE
    - return empty array if step is 0 or negative - DONE

- create an empty array - DONE
- LOOOOOPPP
    - have function add the step into the start
    - then save the result into the array
    - and repeat this procedure till the result is greater than end
    - then return the array
*/

function range(start, end, step){
  const array = [];
  if(start === undefined || end === undefined || step === undefined){
    return array;
  } else if(start > end){
    return array;
  } else if( step <=0 ){
    return array;
  } else {
    let nextNumber = start;
    while(nextNumber <= end) {
      array.push(nextNumber);
      nextNumber += step;
    }
    return array;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

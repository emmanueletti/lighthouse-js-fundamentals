/*
We need to complete a function called smartGarbage(trash, bins), which will be responsible for increasing the garbage count for waste, recycling, or compost depending on what trash is submitted.
Our function will receive two arguments:

    The first argument, trash, is a string that will tell our function what type of item is being submitted.
    The second argument, bins, is an object containing three properties (waste, recycling, and compost), which hold some numerical value. Our function must increase the correct value in the bins object, and then return the newly updated object.

*/

/*
STEPS
- check to see if 
*/

function smartGarbage(trash, bins) {
  bins[trash]++;
  return bins;
}


//TEST
console.log(smartGarbage('waste', { waste: 4, recycling: 2, compost: 5 }));
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
console.log(smartGarbage('compost', { waste: 4, recycling: 2, compost: 5 }));
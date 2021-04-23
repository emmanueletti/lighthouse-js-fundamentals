// INCOMPLETE

/*
The taxi driver is given a list of directions that tell her whether to turn left or right, and how many blocks to drive for. Every time the taxi driver has to turn left, she will make a 90° turn anticlockwise, and every time the taxi driver has to turn right, she will make a 90° turn clockwise.

Create a function named blocksAway that will receive an array of directions, and return an object that calculates how far north and east those directions will take someone.
*/

/* INITIAL PLAN
- we start at [0, 0]
- we have an array of instructions made up of alternating string types and number types
- the first string type tells us whether we will be working with the x or y coordinates
- the next character will tell us how much to increase the x or the y
- the next occurance of a string will tell us to switch axis - irregardless of left or right
- if it is "left" and we are on the x axis, then decrease the x axis
- if it is 'right' and we are on the x axis, then increase
- if it is left and we are on the y axis, increase

- summary, we need to track the direction as well as the axis we are workong on

- at the end we need to update an object with the deifference of each axis between the final coordiantes and the initial [0,0] coorinates

NEED TO CODE THE EQUIVALENT OF RETOTATING THE BOARD 90 CW AND CCW
*/
const blocksAway = function (directions) {

  // add an END string to let us know when the instructions are over
  directions.push('END');
  
  // initial working variables
  let coord = [0, 0];
  let currentAxis = 'undecided';
  let directionMode = 'undecided';
  let degreeRotated = 0;

  // loop through the directions array
  for (let i = 0; i < directions.length; i++){

    console.log(`cycle ${i}, degreeRotated: ${degreeRotated}`);

    // initial index
    if (i === 0) {

      // setting the initial direction
      directionMode = directions[i];

      if (directionMode === 'right') {
        currentAxis = 'x';
        degreeRotated += 90;
      } else {
        currentAxis = 'y';
      }

    // moving on the next set of arrays between the first and the ending cap
    } else if (i !== 0 && directions[i] !== 'END') {

      // first check if the current element is a number, so we can move the right number of spaces
      if (typeof directions[i] === 'number') {
        
        if (currentAxis === 'x') {
          
          if (directionMode === 'right') {
            degreeRotated += 90;
            coord[0] += directions[i];
            currentAxis = 'y';

          } else {
            degreeRotated -= 90;
            coord[0] -= directions[i];
            currentAxis = 'y';

          }
          
        } else if (currentAxis === 'y') {

          if (directionMode === 'right') {
            degreeRotated += 90;
            coord[1] -= directions[i];
            currentAxis = 'x';

          } else {
            degreeRotated -= 90;
            coord[1] += directions[i];
            currentAxis = 'x';

          }

        }



      // check if element is a string, so we can change the modes
      } else if (typeof directions[i] === 'string') {
        directionMode = directions[i];
      }
    } 
  }

  let distanceAway = {
    east: coord[0],
    north: coord[1],
  };

  console.log(coord);
  return distanceAway;

};

//TEST
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
// console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
// console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

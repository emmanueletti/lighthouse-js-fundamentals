/* The taxi driver is given a list of directions that tell her whether to turn left or right, and how many blocks to drive for. 

Every time the taxi driver has to turn left, she will make a 90° turn anticlockwise, and every time the taxi driver has to turn right, she will make a 90° turn clockwise.

Create a function named blocksAway that will receive an array of directions, and return an object that calculates how far north and east those directions will take someone.
*/

/* INITIAL PLAN
- we have an array with numbers and strings making up directions
- the first time we move, is just a decision to either go up or rotate right
- each time the array mentions "left" we make a turn CCW
- each time the array mentions 'right' we make a turn CW

WHAT DOES IT MEAN TO ROTATE CCW or CW
- when you rotate 180 degrees, you left becomes right and your right becomes left - inverse mode
- keep track of your rotations and multiply the amounf of moves to make by the rotation if its -1 or 1??

- then we "move" in that direction for the right amout of spaces 
- once the set of instructions have been completed
- we calculate the location difference between that and where we started [0, 0]
*/

const blocksAway = function (directions) {
  // add an END string to let us know when the instructions are over
  directions.push('END');

  // initial working variables
  let coord = [0, 0];
  let degreeRotated = 0; // reset everytime you reach 2 (180 degree turn - we invert)
  let toggle = '';


  //initialization
  if (directions[0] === 'right') {
    toggle = 'go in x';
  } else {
    toggle = 'go in y';
  }

  for (let i = 0; i < directions.length && directions[i] !== 'END'; i += 2) {

    if (directions[i] === 'right' && toggle === 'go in x') {
      degreeRotated += 90;

      // if we have rotated more than 180 degrees then our directions get inverted
      if (degreeRotated >= 180) {
        //inversion from the norm
        coord[0] -= directions[i + 1];
        toggle = 'go in y';
      } else {
        coord[0] += directions[i + 1];
        toggle = 'go in y';
      }

    } else if (directions[i] === 'left' && toggle === 'go in y') {
      degreeRotated -= 90;

      // if we have rotated more than 180 degrees then our directions get inverted
      if (degreeRotated >= 180) {
        //inversion from the norm
        coord[1] -= directions[i + 1];
        toggle = 'go in x';
      } else {
        coord[1] += directions[i+1];
        toggle = 'go in x';
      }

    } else if (directions[i] === 'right' && toggle === 'go in y') {
      degreeRotated += 90;

      // if we have rotated more than 180 degrees then our directions get inverted
      if (degreeRotated >= 180) {
        //inversion from the norm
        coord[1] += directions[i+1];
        toggle = 'go in x';
      } else {
        coord[1] -= directions[i+1];
        toggle = 'go in x';
      }

    } else if (directions[i] === 'left' && toggle === 'go in x') {
      degreeRotated -= 90;

      // if we have rotated more than 180 degrees then our directions get inverted
      if (degreeRotated >= 180) {
        //inversion from the norm
        coord[0] += directions[i+1];
        toggle = 'go in y';
      } else {
        coord[0] -= directions[i+1];
        toggle = 'go in y';
      }
    }


    // code to reset the degreeRotated if we have rotated in one full revolution
    if (degreeRotated >= 360 ) {
      degreeRotated = 0;
    }


    // internal test
    // console.log(`cycle ${i}: degreeRotated ${degreeRotated}, paces moved ${directions[i+1]}, ending location ${coord}, next move: ${toggle}`);
    
  }

  let distanceAway = {
    east: coord[0],
    north: coord[1],
  };

  return distanceAway;
};


//TEST
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

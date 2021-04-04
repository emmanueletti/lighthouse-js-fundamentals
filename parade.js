// loop though an array with move instructions - DONE
// check which direction is in each element of the array - DONE
// update the position array according to what direction is in each element of the array - DONE
// see if each element in the move instruction has a move instruction - DONE
// update the staring [0,0] coordinatate array as such - DONE


const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']


function finalPosition(array) {
  
  const position = [0,0];
  
  // used a For of loop to practise using this type of room for arrays
  for(let element of array) {
    // used a switch statement to make code more readable thatn than the long list of if else statements I would've have had to write
    switch (element) {
    case 'north':
      position[1]++
      break;
    case 'south':
      position[1]--
      break;
    case 'east':
      position[0]++
      break;
    case 'west':
      position[0]--
      break;
    }
  }

  return position;

}

console.log(finalPosition(moves));
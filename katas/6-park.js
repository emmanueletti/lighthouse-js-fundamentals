// We need to write a function called whereCanIPark() that returns the coordinates of an available parking spot for the vehicle, or returns false if there is no available spot.Our function receives an array of arrays representing parking spots, and a string with type of the vehicle that is looking for a parking spot.

/*
There are three kinds of possible vehicles: regular cars, small cars, and motorcycles.

Regular cars can only park in R spots.
Small cars can park in R or S spots.
Motorcycles can park in R, S, or M spots.
In the array of parking spots, spots are written in both lower-case and upper-case. An upper-case letter means that the particular spot is AVAILABLE, while lower-case letters mean that the spot is UNAVAILABLE.

Our function must return an array with the coordinates of the spot as an [X, Y] pair. See the example input and output below for an illustration.
*/

/* STEPS
- first what vehicle is trying to park
if regular:
- loop through parking spaces to see if there is an uppercase R
- break loop as soon as found
- return index of row and coloum

if small:
- loop through and see if there is upper case R or S
- break loop as soon as found

if motocycle
- loop through and see if upper case R,S,M
*/

const whereCanIPark = function (spots, vehicle) {
  
  let parkingFound = false;

  if (vehicle === 'regular') {

    for (let row = 0; row < spots.length; row++) {
      for (let col = 0; col < spots[row].length; col++) {
        if (spots[row][col] === 'R') {
          return [col, row]
        }
      }
    }

    return parkingFound;

  } else if (vehicle === 'small') {

    for (let row = 0; row < spots.length; row++) {
      for (let col = 0; col < spots[row].length; col++) {
        if (spots[row][col] === 'R' || spots[row][col] === 'S') {
          return [col, row]
        }
      }
    }

    return parkingFound;

  } else if (vehicle === 'motorcycle') {

    for (let row = 0; row < spots.length; row++) {
      for (let col = 0; col < spots[row].length; col++) {
        if (spots[row][col] === 'R' || spots[row][col] === 'S' || spots[row][col] === 'M') {
          return [col, row]
        }
      } 
    }

    return parkingFound;
  }
};


// TEST
console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))
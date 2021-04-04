const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


function chooseStations(array) {
  // created an empty array for which to store locations that pass our conditional test
  let approved = [];
  
  // loops through each element in an array of possible voting locations
  for (let i = 0; i < array.length; i++) {

    // in each iteration of the loop, check this condition to see if location passes our eligibility criteria to be a voting station
    if ((stations[i][1] >= 20) && ((stations[i][2] === 'school') || (stations[i][2] === 'community centre'))) {
      
      // locations that pass our condition tests gets thier lcoation name, found in first index location, pushed into our empty array
      approved.push(stations[i][0]);
    }
  }
  // function returns the approved array
  return approved;

}

console.log(chooseStations(stations));

// official solution: https://www.youtube.com/watch?v=16UXovpvyf8&t=580s
// a lot cleaner implementation with nested conditionals and more variable usage for increased readability
// Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name.If there are two instructors with the longest name, return the first one.

/*
STEPS
- loop through array and compare the length of the array.name string value to a counter intitialized to 0
- only update the counter if the new length is greater than the counter
- if it is greater than, update the counter to the new length
- and store the index of the object
- after the loop, return the object
*/

const instructorWithLongestName = function (instructors) {
  let counter = 0;
  longestNameIndex = 0;
  for (let i = 0; i < instructors.length; i++) {
    let eachName = instructors[i].name;
    if (eachName.length > counter) {
      counter = eachName.length;
      longestNameIndex = i;
    }
  }
  return instructors[longestNameIndex];
};


// TEST
console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));
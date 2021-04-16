// Create a function named organizeInstructors that will receive an array of instructor objects, and will return a new object that has the following format:
/* 
{
CourseName: [instructors]
}
*/


/* INITIAL THOUGHTS
- go through instructors array
- pull the course name
- store the course name into a RESULTS object - DONE
- go through the instructor array again
- if instructor course name exists as a property in the RESULTS object and is empty
- then add the instructor name as an array
- 
*/

const organizeInstructors = function (instructors) {
  let result = {};
  for (let i = 0; i < instructors.length; i++) {
    let courseName = instructors[i].course;
    if (result[courseName]) {
      result[courseName].push(instructors[i].name);
    } else {
      result[courseName] = [instructors[i].name];
    }
  }
  return result;
};


//TEST

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));

console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));


/* LEARNING MOMENT

You can initialize an empty objects property name with a property that is the result of a calculation or reference stored in a variable

let prop = 'foo';
let o = {
  [prop]: 'hey',
}

or

let prop = 'foo';
let o = {};
o = {
  [prop]: 'hey',
}

or

let prop = 'foo';
let o = {
  ['b' + 'ar']: 'there'
}
*/

// Also remember that there are two ways to access object property, dot notation and bracket notation
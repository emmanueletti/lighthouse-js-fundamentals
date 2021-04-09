function ageCalculator(name, yearOfBirth, currentYear){
  let string = `${name} is ${currentYear - yearOfBirth} years old.`;
  return string;
}


console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
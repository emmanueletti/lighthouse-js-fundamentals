let counter = 0;

while (counter <= 100) {
  if ((counter % 3) === 0 && ((counter & 5) === 0)) {
    console.log('FizzBuzz', counter);
  } else if ((counter % 3) === 0) {
    console.log('Fizz', counter);
  } else if ((counter % 5) === 0) {
    console.log('Buzz', counter);
  } else {
    console.log(counter);
  }
  counter ++
}
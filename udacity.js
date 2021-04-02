// bottles
let counter = 99

while (counter > 0) {
  console.log(counter + ' bottles of juice on the wall! ' + counter + ' bottles of juice!, Take one down and pass it around ... ' + (counter-1) + ' bottles of juice on the wall!')
  counter --
}

//fizzbuzz
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
  counter++
}


//factorial
for (let row = 0; row <= 25; row++) {
  for (let seat = 0; seat <= 99; seat++) {
    console.log(row + '-' + seat)
  }
}

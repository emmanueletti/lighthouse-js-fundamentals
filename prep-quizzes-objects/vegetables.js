/*
For this challenge, we'll need to implement a function called judgeVegetable()that will decide which vegetable is best based on a given judging characteristic. Our function will receive two parameters: a list of veggies(as an array of objects), and a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).

Our function must return the name of the person who submitted (vegetables.submitter) the vegetable with the highest ranking in the provided category.
*/

/*
STEPS
- loop through array of objects - DONE
- compare value given metric with a starter value - DONE
- if value is bigger then update "winner" variable with submitters name - DONE
- if another bigger value is found, then update "winner" variable with that submitters name - DONE
- after loop, return the "winner" variable - DONE
*/

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

function judgeVegetable(vegetables, metric) {
  let winner = 'no one';
  let counter = 0;

  vegetables.forEach(function (element) {
    if (element[metric] > counter) {
      counter = element[metric];
      winner = element.submitter;
    }
  });

return winner;
}

console.log(judgeVegetable(vegetables, 'redness'));
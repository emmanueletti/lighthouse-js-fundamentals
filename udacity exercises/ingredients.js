const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log('First Loop: ' + ingredients[i]);
  i++;
}

console.log(' \n '); 

// Write a for loop that prints out the contents of ingredients:
for(let i = 0; i < ingredients.length; i++){
  console.log('Second Loop: ' + ingredients[i]);
}

console.log(' \n ');

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for(let i = ingredients.length - 1; i >= 0; i--){
  console.log('Reverse Loop: ' + ingredients[i]);
}
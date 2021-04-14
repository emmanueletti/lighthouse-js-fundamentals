/* GOAL
refactor V1 solution and make it even simpler by taking the inner functionality and repackaging it into a helper function
*/

// BUILD
const recipeFinder = function (bakeryArray, recipeBook) {
  const recipeFound = [];

  for (let i = 0; i < recipeBook.length; i++) {
    for (let j = 0; j < recipeBook[i].ingredients.length; j++) {
      for (let k = 0; k < bakeryArray.length; k++) {
        if (bakeryArray[k] === recipeBook[i].ingredients[j]) {
          recipeFound.push(recipeBook[i]);
        }
      }
    }
  }

return recipeFound;
}


const chooseRecipe = function (bakeryA, bakeryB, recipes) {

  let recipeCandidate = recipeFinder(bakeryA, recipes);
  let finalMatch = recipeFinder(bakeryB, recipeCandidate);
  
  return finalMatch[0].name;
}

//TEST

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
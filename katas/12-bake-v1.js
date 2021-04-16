// We need to complete a function called chooseRecipe(), which will receive three parameters: - An array of ingredients in stock at Bakery A - An array of ingredients in stock at Bakery B - An array of recipe objects. Each recipe has a name property(string) and an ingredient property(array)
// We are limiting our search to two ingredient recipes. We want to find a recipe that utilizes one ingredient from Bakery A and one from Bakery B Our chooseRecipe() function should return the name of the correct recipe. 

/* INITIAL THOUGHTS
- backeries already have different stock items
- go through bakery A's stock and see which recipes they have at least 1 ingredient for
- store those recipes in an object
- compare that object with bakery b's stock and see if they have in stock an ingredient from that recipe
- return the recipe name of the first match

*/

// BUILD
const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  
  const recipeCandidates = [];
  // step 1 - which recipes does bakeryA have an ingredient for
  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < recipes[i].ingredients.length; j++) {
      for (let k = 0; k < bakeryA.length; k++) {
        if (bakeryA[k] === recipes[i].ingredients[j]) {
          recipeCandidates.push(recipes[i]);
        }
      }
    }
  }

  // step 2 - check to see if backeryB has a ingredient for those recipes that bakeryA can make
  for (let i = 0; i < recipeCandidates.length; i++) {
    for (let j = 0; j < recipeCandidates[i].ingredients.length; j++) {
      for (let k = 0; k < bakeryB.length; k++) {
        if (bakeryB[k] === recipeCandidates[i].ingredients[j]) {
          return recipeCandidates[i].name;
        }
      }
    }
  }
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

//BIG LEARNING MOMENT
// nest loops are a pain to deal with
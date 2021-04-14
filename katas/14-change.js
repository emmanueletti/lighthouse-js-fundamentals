// We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000. Our function calculateChange should return an object which describes the total amount of change for the cashier to give back.Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

/* INITIAL THOUGHTS
- calculate how many cents should be given back - ChangeNeeded
- we want a remainder of zero but don't know how long that will take (while loop?)
- see how many of a denomination can go into the the changeNeeded
- is there a remainder?
- if there is then see how many denoms can go into THAT remainder?
- repeat THIS till remainder is zero

- can we build a remainder finder that will be called everytime till remainder is zero? - function calls itself??? - RECURSION QUESTION????
*/



const calculateChange = function (total, cash) {
  let changeToGive = cash - total;

  let changeNeeded = changeToGive;

  let result = {};

  // while there is still a remainder, this loop will go over subtracting a mutually exclusive set number, and incrementing an counter that will be initialized in a at first empty object, so that we only return the values we need.
  // once that path has been gone trhough, the loop will come out and check the while condition again, if still found to be true it will run the path for the first if condition it meets to go down
  // each if condition makes sure that the math it will do will not push the changeNeeded counter into a negative state
  while (changeNeeded > 0) {

    // $20 step
    if (changeNeeded - 2000 >= 0) {
      changeNeeded -= 2000;
      // nested if statement to check if empty objecy already has twentyDollar in it, if not then initialize to 1, if it does then increment by 1
      if (result.twentyDollar) {
        result.twentyDollar += 1;
      } else {
        result.twentyDollar = 1;
      }

      // $10 dollar step
    } else if (changeNeeded - 1000 >= 0) {
      changeNeeded -= 1000;
      if (result.tenDollar) {
        result.tenDollar += 1;
      } else {
        result.tenDollar = 1;
      }
    
      // $5 step
    } else if (changeNeeded - 500 >= 0) {
      changeNeeded -= 500;
      if (result.fiveDollar) {
        result.fiveDollar += 1;
      } else {
        result.fiveDollar =1;
      }
      
      // $2 step
    } else if (changeNeeded - 200 >= 0) {
      changeNeeded -= 200;
      if (result.twentyDollar) {
        result.twoDollar += 1;
      } else {
        result.twoDollar =1;
      }

      // $1 step
    } else if (changeNeeded - 100 >= 0) {
      changeNeeded -= 100;
      if (result.oneDollar) {
        result.oneDollar += 1;
      } else {
        result.oneDollar = 1;
      }

      // quarter step
    } else if (changeNeeded - 25 >= 0) {
      changeNeeded -= 25;
      if (result.quarter) {
        result.quarter += 1;
      } else {
        result.quarter =1;
      }
      
      // dime step
    } else if (changeNeeded - 10 >= 0) {
      changeNeeded -= 10;
      if (result.dime) {
        result.dime += 1;
      } else {
        result.dime = 1;
      }
      
      // nickle step
    } else if (changeNeeded - 5 >= 0) {
      changeNeeded -= 5;
      if (result.nickle) {
        result.nickle += 1;
      } else {
        result.nickle = 1;
      }
      result.nickle += 1;

      // cent step
    } else if (changeNeeded - 1 >= 0) {
      changeNeeded -= 1;
      if (result.penny) {
        result.penny += 1;
      } else {
        result.penny = 1;
      }
    }
  }

  return result;
};


//TEST
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
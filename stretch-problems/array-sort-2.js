

function merge(arrayOne, arrayTwo) {
  let mergedArray = arrayOne.concat(arrayTwo)
  let sortedArray = mergedArray.sort();
  return sortedArray;
}

//TEST

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);
// 1. create a function that adds numbers to our array
// 2. sort that array in ascending order
// 3. return the sorted array for export


var ourArray = [];

function addToArray(n) {
  ourArray.push(n);
};

function compareNumbers(a, b) {
  return a - b;
}

function returnSortedArray() {
  ourArray.sort(compareNumbers);
  return ourArray;
}


module.exports = {
  addToArray: addToArray,
  returnSortedArray: returnSortedArray
}

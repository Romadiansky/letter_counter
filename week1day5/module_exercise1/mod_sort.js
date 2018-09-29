function ourSorting(array) {

  array.sort(compareNumbers);
  return array;
}

  var compareNumbers = function(a, b) {
    return a - b;
  }

array = [4,700,6,1,56];

//console.log(ourSorting(array));


module.exports = {
  ourSorting: ourSorting
}



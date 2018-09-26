function letterIndexer(uniqueLetters, counterArray) {

  var objectOutput = {};

  for (var i = 0; i < uniqueLetters.length; i++) {
    objectOutput[uniqueLetters[i]] = counterArray[i];
  }
  return objectOutput;
}


var string = "lighthouse in the house"
string = string.split(" ").join("").split("");
var uniqueLetters = [];


for (var i = 0; i < string.length; i++) {
  var isThere = false;
  for (var n = 0; n < uniqueLetters.length; n++) {
    if (string[i] == uniqueLetters[n]) {
    isThere = true;
    }
  }
  if (!isThere) {
    uniqueLetters.push(string[i]);
  }
}


var indexArray = [];
for (var x = 0; x < uniqueLetters.length; x++) {
  var index = [];

  for (var y = 0; y < string.length; y++) {
    if (uniqueLetters[x] == string[y]) {
    index.push(y);
    }
  }
  indexArray.push(index);
}

console.log(letterIndexer(uniqueLetters, indexArray));
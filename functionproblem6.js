function swapCase(str) {
  var swappedStr = '';
  for (var i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === char.toUpperCase()) {
      swappedStr += char.toLowerCase();
    } else {
      swappedStr += char.toUpperCase();
    }
  }
  return swappedStr;
}

// Sample Input
var sampleInput = "Test";

// Swap the case and print the output
var output = swapCase(sampleInput);
console.log(output); 
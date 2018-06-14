// Chapter 1 - Fundamentals
// Page 59
// Previous Lengths
// You are passed an array containing strings. Working within the same array, replace each string with a number with the length at the previous array index - and return the array
// Video: https://youtu.be/NNArYaaEED4

var myArray = ["my", "array", "of", "strings"];

function previousLengths(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i -1].length;
  }
  return arr;
}

previousLengths(myArray);
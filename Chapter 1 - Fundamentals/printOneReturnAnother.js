// Chapter 1 - Fundamentals
// Page 59
// Print One. Return Another
// Build a function that takes an array of numbers. The function should print the second-to-last value in the array, and return the first odd value in the array.
// Video: https://youtu.be/zf14LOJUYO4

var myArr = [6,91,56,22,,1,4,35,8,14];

function printOneReturnAnother(arr) {Print
  var secondToLast = arr[arr.length - 2];
  console.log(secondToLast);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      return arr[i];
    }
  }
}


printOneReturnAnother(myArr);
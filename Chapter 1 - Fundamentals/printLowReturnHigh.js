// Chapter 1 - Fundamentals
// Page 59
// Print Low. Return High
// Create a function that takes an array of numbers. The function should print the lowest value in the array and return the highest value in the array.
// Video: https://youtu.be/HYpLjhPyV6k

var myArr = [9,56,4,35,8,14];

function printLowReturnHigh(arr) {
  var low = arr[0];
  var high = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < low) {
      low = arr[i];
    } else if (arr[i] > high) {
      high = arr[i];
    }
  }
  console.log(low);
  return high;
}

printLowReturnHigh(myArr);
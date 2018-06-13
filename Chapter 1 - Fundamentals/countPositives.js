//Chapter 1 - Fundamentals
// Algorithm Challenge - Count Positives
// Page 59
// Given an array of numbers, create a function to replace the last value in the array with the number of positive values. Example: countPositives([-1,1,1,1]) changes the array to [-1,1,1,3] and returns it.
// Video: https://youtu.be/xKKcNipS9VU

var myArr = [-2,-3,1,4,2,5];

function countPositives(arr) {
  var positives = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positives++;
    }
  }
  arr[arr.length - 1] = positives;
  return arr;
}

countPositives(myArr);
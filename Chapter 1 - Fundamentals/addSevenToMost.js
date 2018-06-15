// Chapter 1 - Fundamentals
// Page 59
// Algorithm Challenge - Add Seven to Most
// Build a function that accepts an array. Return a new array with all values except first, adding 7 to each. Do not alter the original array
// Video: https://youtu.be/wfpmFfVFARs

var myArr = [2,6,3,6,8,9];

function addSevenToMost(arr) {
  var newArr = [];
  for (var i = 1; i < arr.length; i++) {
    newArr.push(arr[i] + 7);
  }
  console.log(arr);
  return newArr;
}

addSevenToMost(myArr);
// Chapter 1 - Fundamentals
// Algorithm Challenge - Reverse Array 
// Page 59
// Given an array, write a function to reverse the values, in-place. Example: reverse([1,2,3,4]) should return the same array containing [4,3,2,1]
// Video: https://youtu.be/dffiQsX1swM

var myArr = [3, 8, 2, 5, 9, 12, 34];

function reverseArray(arr) {
  for (var i = 0; i < arr.length/2; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length-1 -i];
    arr[arr.length-1 -i] = temp;
  }
  return arr;
}

reverseArray(myArr);
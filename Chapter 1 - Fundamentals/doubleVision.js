// Algorithm Challenge
// Double Vision
// Page 56
// Given an array, create a function to return a new array where each value in the original array has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing the original
// Video: https://youtu.be/1ItY8MCjSns

var myArr = [1,2,3];

function doubleVision(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}

doubleVision(myArr);
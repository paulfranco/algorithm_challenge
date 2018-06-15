// Chapter 1 - Fundamentals
// Algorithm Challenge - Swap Toward the Center
// Given an array, swap the first and last values, the third and third-to-last value, etc. Input[true,42,"Ada", 2, "pizza"] becomes ["pizza", 42, "Ada", 2, true]. Change [1,2,3,4,5,6] to [6,2,4,3,5,1]
// Video: https://youtu.be/s0Wxt464Dl8

var myArr = [1,2,3,4,5,6];

function swap(arr) {
  for (var i = 0; i < arr.length/2; i+=2) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

swap(myArr);
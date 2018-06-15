// Chapter 1 - Fundamentals
// Algorithm Challenge - Outlook: Negative
// Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5]
// Page 60
// Video: https://youtu.be/q0o1Mj6w6Fw

var myArr = [1,4,-7, 9, -2];

function outlookNegative(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i] * -1);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

outlookNegative(myArr);
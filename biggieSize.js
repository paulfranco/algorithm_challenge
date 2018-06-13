// Chapter 1 Fundamentals
// Page 59
// Biggie Size
// Given an array. Write a function that changes all positive numbers in the array to the string "big". 

var myArr = [-2,2,5,4,7,8,-22, -1];

function big(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = "big";
    }
  }
  return arr;
}

big(myArr);
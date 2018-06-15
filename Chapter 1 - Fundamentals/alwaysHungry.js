// Chapter 1 - Fundamentals
// Algorithm Challenge - Always Hungry
// Page 60
// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then print "I'm hungry" once.
// Video: https://youtu.be/XntwmRo5j1Y 

var myArr = ["today", "we", "eat", "real", "food"];

function alwaysHungry(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "food") {
      console.log("yummy");
    } else {
      console.log("I'm hungry");
    }
  }
}

alwaysHungry(myArr);
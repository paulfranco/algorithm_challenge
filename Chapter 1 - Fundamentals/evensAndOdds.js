// Chapter 1 - Fundamentals
// Algorithm Challenge- Evens and Odds
// Page 59
// Create a function that accepts an array. Every time that array has three odd values in a row print "That's Odd!". Every time the array has three evens in a row, print "Even more so!"
// Video: https://youtu.be/GVxh0Yivshs

var myArr = [4,6,2,27,58,98,44,21,66,3,7,5];

function evensAndOdds(arr) {
  var evenCount = 0;
  var oddCount = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      oddCount = 0;
      evenCount++;
    } else {
      evenCount = 0;
      oddCount++;
    }
    if (evenCount == 3) {
        console.log("Even more so!");
        evenCount = 0;
    } else if (oddCount == 3) {
          console.log("Thats odd");
          oddCount = 0;
    } 
  }
}


evensAndOdds(myArr);
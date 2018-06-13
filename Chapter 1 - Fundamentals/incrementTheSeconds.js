//Chapter 1 - Fundamentals
// Algorithm Challenge - Increment the Seconds
// Page 59
// Given an array, add 1 to the odd elements([1],[3], etc.) console.log all of the values and return the array
// Video: https://youtu.be/n1sNk29y45U

var myArr = [1,2,3,4,5,6];

function incrementTheSeconds(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      arr[i] += 1;
    }
  }
  console.log(arr);
  return arr;
}

incrementTheSeconds(myArr);
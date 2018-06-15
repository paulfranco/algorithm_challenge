// Chapter 1 - Fundamentals
// Algorithm Challenge - Scale the Array
//Page 60
// Given an array and a number, multiply each value in the array by the number, and return the changed array
// Video: https://youtu.be/tVJuWJ9ciBU

function scaleTheArray(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    return arr;
}

var myArr = [2,3,1,7];

scaleTheArray(myArr, 2);

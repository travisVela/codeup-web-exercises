 "use strict";



//  Bonuses=========================
//      1.  create an array of shapes

 var shapes = ['square', 'circle', 'triangle', 'rectangle', 'oval', 'star'];

// – prompt the user to search for a specific shape
//
//  var userShape = prompt('Enter a shape.');

// – using a for loop, iterate through the array to log the shapes until the matching shape is found
 //– once the shape is found, log a message (“Shape is found”) and use a break statement to exit loop.

 // for (var i = 0; i < shapes.length; i++) {
 //     if (userShape != shapes[i]) {
 //         continue;
 //     } else if (userShape === shapes[i]) {
 //         alert('Shape is found!');
 //         break;
 //     }
 // }

 console.log('\n');
 console.log('random Day');
 console.log('=======');
 console.log('\n');

 //  2.  Create a function that returns a random day of the week
 function randomDay() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var random = days[Math.floor(Math.random() * days.length)];
    return 'Random day of the week is ' + random;
 }
 console.log(randomDay());


 console.log('\n');
 console.log('alphabet/number');
 console.log('=======');
 console.log('\n');

 //  3.  Create a function that takes a single letter and returns what number the letter is in the alphabet. Ignore case.

 function numberLetter(input) {
     var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

     alphabet.forEach(function(letter, index) {
        if (input === letter) {
            console.log('The index of ' + input + ' is ' + (index + 1));
            return index + 1;
        }
     });
 }
numberLetter('a');
numberLetter('m');
numberLetter('z');
numberLetter('s');

 //  – someFunction("a") // returns 1
 //  – someFunction("z") // returns 26

console.log('\n');
console.log('longest string');
console.log('=======');
console.log('\n');

 //  4.  Create a function that returns the longest string in a given array of string elements.

 function longestString() {
    var strings = ['this is a string', 'this is another string', 'this is a string that will most likely be the longest string in this array', 'this is yet another string'];
    var longest = strings.sort(function(a, b) {
        return b.length - a.length;
    })[0];

    return longest;
 }
 console.log(longestString());


 //  5.   Create a function that takes in two arrays of elements, including numbers. If all numbers added together in the first array is equal to all the number inputs added in the second array, return true, otherwise, false. Only add together numeric elements but either array may contain non-numeric elements.

 console.log('\n');
 console.log('compare arrays');
 console.log('=======');
 console.log('\n');

 function twoArrays(a, b) {
     // var array1 = [4, 34, 2, 55, 12];
     // var array2 = [11, 33, 44, 1, 5];

     var sum1 = a.reduce(function(a, b) {
         return a + b;
     });
     var sum2 = b.reduce(function(a, b) {
         return a + b;
     });

     return 'array 1 = array 2? ' +(sum1 === sum2);
 }
console.log(twoArrays([3,5,'a',true,66,123], ['tt',true, 55, 32,1,44,]));
console.log(twoArrays([2,4,5,6], [2,4,5,6]));
console.log(twoArrays([3,5,'a',true,77,34,5,3], ['tt', 'd',333,3,4,5,123]));
 // – var arr1 = ['bob', 1, true, 1, 2];
 // – var arr2 = [2, null, undefined, 0, 2, "apple"]
 // – exampleFunction(arr1, arr2) // returns true


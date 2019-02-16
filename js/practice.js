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

 // 6.	Write a function that returns the sum of an array of numbers
console.log('\n');
console.log('add arrays');
console.log('=======');
console.log('\n');

 function addArray(input) {
     var sum = input.reduce(function(a, b){
         return a + b;
     });
    return 'The sum of all numbers in the array is ' + sum;
 }
 console.log(addArray([1,2,3,4,5]));
 console.log(addArray([3,4,5,355,5,4,3,66]));

 // 7.	Create a student roster management app. Using the user dialogue functions (alert, confirm, prompt), create an application that will prompt the user to choose from a menu with the following actions:
 //     1) add a student
 // 2) delete a student
 // 3) view all students in alphabetical order
 // 4) view all students in reverse alphabetical

console.log('\n');
console.log('student roster');
console.log('=======');
console.log('\n');

// var students = [];
// var studentsString = students.join(', ');
// console.log(students);
// function addStudent() {
//     students.push(prompt('Enter student name you want to add.'));
//     return students;
// }
//
// function removeStudent() {
//     // var drop = prompt('Enter student name you want to remove.');
//     // var remove = students.indexOf(drop);
//     // if (remove !== -1) students = students.slice(remove, 1);
//     // return students;
//     var remove = students.indexOf(prompt('Enter name of student you want to remove.'));
//     if (remove !== 1) students.splice(remove, 1)
//     return students;
// }
//
// function alphabeticalStudents() {
//     alert('All students: '+  students.sort().join(', '));
// }
// function reverseAlphaStudents() {
//     alert('All students in reverse: ' + students.sort().reverse().join(', '));
// }
//
// function roster() {
//     var input = prompt('If you would you like to add a student, enter ' + '"add"' + '\n' + 'if you would to remove a student, enter ' + '"remove"' + '\n' + 'Want to view the roster is alphabetical order, enter ' + '"view"' +  '\n' + 'Want to view the roster in reverse alphabetical order, enter ' + '"view reverse"');
//     if (input === 'add') {
//         addStudent();
//         roster();
//     } else if (input === 'remove') {
//         removeStudent();
//         roster();
//     } else if (input === 'view') {
//         alphabeticalStudents();
//         roster();
//     } else if (input === 'view reverse') {
//         reverseAlphaStudents();
//         roster();
//     }
//     // roster();
// }
//
// roster();
//
//
// console.log('\n');
// console.log('objects');
// console.log('=======');
// console.log('\n');

// Create a few beverage objects and assign values to each object for the following properties:
//
//     - brandName
//     - type
//     - volumeInLiters
//     - priceInCents
//     - expirationDate
//     - dateTimesOfLastSips
//     - isOpen
//
// Define your objects using both literal syntax to create all properties and values at once and also try defining empty objects and assign property values in separate statements.

var beverage1 = {};
beverage1.name = 'Dr. Pepper';
beverage1.type = 'soda';
beverage1.volumeInLiters = .6;
beverage1.priceInCents = 150;
beverage1.expirationDate = 2020;
beverage1.dateTimesOfLastSip = 2/14/2019;
beverage1.isOpen = false;

var beverage2 = {
    name: 'Coffee',
    type: 'Coffee',
    volumeInLiters: .24,
    priceInCents: 10,
    expirationDate: '5 mins',
    dateTimesOfLastSip: '5 mins ago',
    isOpen: true
};

console.log(beverage1);
console.log(beverage2);
console.log(beverage2.priceInCents);
console.log(beverage1.priceInCents - beverage2.priceInCents);


console.log('\n');
console.log('objects');
console.log('=======');
console.log('\n');

// Mini Exercise 2
//
var users = [
    {
        name: "Sam",
        age: 21
    },
    {
        name: "Cathy",
        age: 34
    },
    {
        name: "Karen",
        age: 43
    }
];
//
// 1. Log the names of all users in a single console log seperated by spaces.
var userMessage = '';
users.forEach(function(user){
   userMessage += user.name + ' ';
});
console.log(userMessage);

// 2. Change the names of all users to "John Doe"

// users.forEach(function(user) {
//      user.name = user.name = 'John Doe';
//  });
// console.log(users);

// 3. Increase the current age of all users by 1

users.forEach(function(user){
   user.age = user.age + 1;
   console.log('New age of ' + user.name + ' is ' + user.age);
});
// console.log(users.keys(name));

// Can you accomplish each step using iteration?


console.log('\n');
console.log('mini 3');
console.log('=======');
console.log('\n');
// Mini Exercise 3
// PAIR UP!
//     Create a dog object...
//     The dog object should have properties for:
// breed (string),
//     weightInPounds (number),
//     age (number),
//     color (string),
//     sterilized (boolean),
//     shotRecords (array of objects with properties for date and typeOfShot)
// The dog object should have methods to:
//     bark() - will console.log "Woof!"
// getOlder() - will increase age by 1
// fix() - will set sterile to true if dog sterilized property is false
// vaccinate() - takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array

var dog = {
    breed: "wire haired terrior",
    weightInPounds: 11,
    age: 2,
    color: 'blonde',
    sterilized: true,
    shotRecords: [
        {date: '7/12/2018', typeOfShot: 'Rabies'},
        {date: '8/12/2018', typeOfShot: 'Other dog shot'}
        ],
    bark: function() {
        console.log('woof! grr even');
    },
    getOlder: function() {
        this.age += 1;
    },
    fix: function() {
        return this.sterilized;
    },
    vaccinate: function(shot) {
        var today = new Date();
        var newShot = {date: today, typeOfShot: shot};
        this.shotRecords.push(newShot);
    }
};




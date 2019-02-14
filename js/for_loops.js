"use strict";

console.log('\n');
console.log('=====' + '\n' + 'for loops');
console.log('\n');

function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        console.log( num + ' x ' + i  + ' = ' + (num * i));
    }
}
showMultiplicationTable(7);
showMultiplicationTable(12);

console.log('\n');


for (var i = 1; i <= 10; i++) {
    var random = Math.floor(Math.random() * 180) + 20;
    if (random % 2 === 0) {
       console.log(i + '. ' + random + ' is even.');
   } else if (random % 2 === 1) {
       console.log(i + '. ' + random + ' is odd.');
   }
}
console.log('\n')

for (var x = 1; x <= 9; x++) {
    var print = '';
    for (var y = 1; y <= x; y++){
        print += x;
    }
    console.log(print);
}
console.log('\n');

for (var num = 100; num >= 5; num = num -5) {
    console.log(num);
}



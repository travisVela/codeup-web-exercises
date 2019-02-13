"use strict";

function showMultiplicationTable() {
    for (var num = 1; num <= 10; num++) {
        console.log('7 x ' + num + ' = ' + (num * 7));
    }
}
showMultiplicationTable();


for (var i = 1; i <= 10; i++) {
    var random = Math.floor(Math.random() * 200) + 20;
    if (random % 2 === 0) {
       console.log(random + ' is even.');
   } else if (random % 2 === 1) {
       console.log(random + ' is odd.');
   }
}

for (var x = 1; x <= 9; x++) {
    for (var y = 1; y <= x; y++){
        console.log(x);
    }
}

for (var num = 100; num >= 5; num = num -5) {
    console.log(num);
}



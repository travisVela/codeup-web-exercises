"use strict";

var num = 2;

while (num < 65536) {
    num = num * 2;
    console.log(num);
}

var allCones = Math.floor(Math.random() * 50) + 50;
console.log('all cones ' + allCones);
do {
    var conesPerCustomer = Math.floor(Math.random() * 5) + 1;
    // var conesSold = 0;
    console.log('cones per customer ' + conesPerCustomer);
    if (allCones - conesPerCustomer >= 0) {
        console.log(conesPerCustomer + ' cones sold.' + '\n' + allCones + ' cones left.');
        allCones = allCones - conesPerCustomer;
    } else if ((allCones - conesPerCustomer) < 0) {
        allCones = conesPerCustomer - allCones;
        console.log('Cannot sell you ' + conesPerCustomer + ' only have ' + allCones);
        console.log(allCones + ' cones sold.');
    }

} while (allCones > 0);
console.log('Yay! I sold them all!');





"use strict";

var num = 2;

while (num < 65536) {
    num = num * 2;
    console.log(num);
}

console.log('\n');
console.log('=====' + '\n' + 'cones exercise');
console.log('\n');

var allCones = Math.floor(Math.random() * 50) + 50;
console.log('all cones ' + allCones);
console.log('-----');
do {
    var conesPerCustomer = Math.floor(Math.random() * 5) + 1;
    console.log('cones per customer ' + conesPerCustomer);
    if (allCones - conesPerCustomer >= 0) {
        allCones = allCones - conesPerCustomer;
        console.log(conesPerCustomer + ' cones sold.' + '\n' + allCones + ' cones left.');
        console.log('\n');
    } else if ((allCones - conesPerCustomer) < 0) {
        console.log('Cannot sell you ' + conesPerCustomer + ' only have ' + allCones);
        console.log('I can sell you ' + allCones);
        allCones -= allCones;
    }

} while (allCones > 0);
console.log('Yay! I sold them all!');





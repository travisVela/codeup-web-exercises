"use strict";

console.log('\n');
console.log('=======')
console.log('oddNumber exercise')
console.log('\n')


do  {
    var oddNumber = prompt('Enter an odd number between 1 and 50.');

} while (oddNumber % 2 === 0 || isNaN(oddNumber));

for (i = 1; i <= 50; i++) {
    if (i == oddNumber) {
       continue;
    } else if (i % 2 === 1) {
        console.log('Here is an odd number: ' + i);
    }
}

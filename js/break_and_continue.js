"use strict";

console.log('\n');
console.log('=======')
console.log('oddNumber exercise')
console.log('\n')


// do  {
//     var oddNumber = prompt('Enter an odd number between 1 and 50.');
//
// } while (oddNumber % 2 === 0 || isNaN(oddNumber) || oddNumber > 50);
//
// for (i = 1; i <= 50; i++) {
//     if (i == oddNumber) {
//        continue;
//     } else if (i % 2 === 1) {
//         console.log('Here is an odd number: ' + i);
//     }
// }


var input;

while(true) {
    input = prompt('Enter an odd number between 1 and 50.');
    if (isNaN(input)) {
        alert('That is not a number. Please try again.')
    } else if (input > 50) {
        alert('Number is too big. Please try again.')
    } else if (input % 2 === 0) {
        alert('That is an even number. Try again please.')
    } else {
        break;
    }
}

for (i = 1; i <= 50; i++) {
    if (i == input) {
       console.log('Yikes! Skipping this number');
    } else if (i % 2 === 1) {
        console.log('Here is an odd number: ' + i);
    }
}
"use strict";


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// var enterNumber = confirm('Do you want to enter a number?');
// var number;
// function promptMessage() {
//     if (enterNumber) {
//         number = prompt('Enter a number');
//         number = parseInt(number);
//         return true;
//     } else {
//         alert('All good.')
//         return false;
//     }
// }
//
// function isNumber () {
//     if (isNaN(number)) {
//         alert('Invalid Input.');
//         mainFunction();
//         return false;
//     } else {
//         if (number % 2 === 0) {
//             alert('The number is even')
//         } else {
//             alert('The number is odd.')
//         }
//         return true;
//     }
// }
//
// function plusOnehundred() {
//     alert(number + ' plus 100 is ' + (number + 100));
// }
//
// function isPositive() {
//     if (number > 0) {
//         alert(number + ' is positive');
//     } else {
//         alert(number + ' is negative');
//     }
// }
//
// function mainFunction() {
//     if (promptMessage()) {
//         if (isNumber()) {
//             plusOnehundred();
//             isPositive();
//         }
//     }
// }
// mainFunction();

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
var color;
function analyzeColor(color) {
    if (color === 'red') {
        return 'Red is the color of fire';
    } else if (color === 'orange') {
        return 'Orange is both a color and a fruit.';
    } else if (color === 'yellow') {
        return 'Yellow is the color of the sun.';
    } else if (color === 'green') {
        return 'Green is the color fo grass.';
    } else if (color === 'blue') {
        return 'Blue is the color of the sky.';
    } else if (color === 'indigo') {
        return 'Indigo girls is a band';
    } else if (color === 'violet') {
        return 'Violet is a color and a flower.';
    } else {
        return 'This color is not defined.';
    }
}

console.log(analyzeColor('red'));
console.log(analyzeColor('orange'));
console.log(analyzeColor('yellow'));
console.log(analyzeColor('green'));
console.log(analyzeColor('blue'));
console.log(analyzeColor('indigo'));
console.log(analyzeColor('violet'));
console.log(analyzeColor('purple'));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
analyzeColor(randomColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColor() {
    switch (color) {
        case 'red':
            console.log('Red is the color of fire.');
            break;
        case 'orange':
            console.log('Orange is both a color and a fruit.');
            break;
        case 'yellow':
            console.log('Yellow is the color of the sun.');
            break;
        case 'green':
            console.log('Green is the color of grass.');
            break;
        case 'blue':
            console.log('Blue is the color of the sky.');
            break;
        case 'indigo':
            console.log('Indigo is a color between blue and violet.');
            break;
        case 'violet':
            console.log('Violet is a color and a flower.');
            break;
        default:
            console.log('The color is not defined.');
    }
}


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var enterColor = prompt('Enter a color.');
alert(analyzeColor(enterColor));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, totalAmount) {
    if (luckyNumber === 0) {
        return totalAmount;
    } else if (luckyNumber === 1) {
        return (totalAmount - (totalAmount * .10)).toFixed(2);
    } else if (luckyNumber === 2) {
        return (totalAmount - (totalAmount * .25)).toFixed(2);
    } else if  (luckyNumber === 3) {
        return (totalAmount - (totalAmount * .35)).toFixed(2);
    } else if (luckyNumber === 4) {
        return (totalAmount - (totalAmount * .50)).toFixed(2);
    } else if (luckyNumber === 5) {
        return 0;
    }
}

console.log(calculateTotal(0, 100)); // returns 100
console.log(calculateTotal(4, 100)); // returns 50
console.log(calculateTotal(5, 100)); // returns 0
console.log(calculateTotal(1, 100)); // returns 90
console.log(calculateTotal(2, 100)); // returns 75
console.log(calculateTotal(3, 100)); // returns 65


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalAmount = prompt('What is your bill total?');
totalAmount = Number(totalAmount).toFixed(2);

alert('Your lucky number is ' + luckyNumber);
alert('The total before discount was $' + totalAmount);
alert('The discounted price is $' + calculateTotal(luckyNumber, totalAmount));
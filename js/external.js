console.log('Hello from external JavaScript');

// alert('Welcome to my website!');
//
// var favColor = prompt('What is your favorite color?');
// alert(favColor + ' is my favorite color too!');

console.log('\n');
console.log('- - - - - - - -');
console.log('\n');

// var mermaid = prompt('How many days do you want to rent Little Mermaid?');
// var bear = prompt('How many days do you want to rent Brother Bear?');
// var herc = prompt('How many days do you want to rent Hercules?');
//
// var total = (mermaid * 3) + (bear * 3) + (herc * 3);
// alert('Total amount of rental fees is $' + total + '.');
//
// console.log('\n');
// console.log('- - - - - - - -');
// console.log('\n');
//
// var google = 400;
// var amazon = 380;
// var facebook = 350;
//
// var googlePay = prompt('How many hours worked for Google this week?');
// var amazonPay = prompt('How many hours worked for Amazon this week?');
// var facebookPay = prompt('How many hours worked for Facebook this week?');
// var totalPay = alert('Your total pay is $' + ((google * googlePay) + (amazon * amazonPay) + (facebook *facebookPay)) + ' this week.');

console.log('\n');
console.log('- - - - - - - -');
console.log('\n');

var isClassFull = false;
var doesScheduleConflict = prompt('Does this conflict with your current schedule? True or False.');
var noConflict = doesScheduleConflict.toLowerCase() === 'true';
var canEnroll = !isClassFull && !noConflict;
alert('Enrolled: ' + canEnroll);

console.log('\n');
console.log('- - - - - - - -');
console.log('\n');

var member = prompt('Are you a member? True of False.');
var isMember = member === 'true';
var items = prompt('How many items are you purchasing?');
var expired = prompt('Is the offer expired? True or False.');
var isExpired = expired === 'true';

var offer = ((items > 2) || isMember) && !isExpired;

alert('Offer good? ' + offer);
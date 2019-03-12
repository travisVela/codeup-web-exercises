'use strict';

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// #1
const threeLangs = users.filter(user => user.languages.length >= 3);

console.log(threeLangs);

// #2
const emails = users.map(email => email.email);

console.log(emails);

// #3
const exp = users.reduce((total, user) => total + user.yearsOfExperience, 0);
console.log(`Total years of exp: ${exp}`);
const avg = exp / users.length;
console.log(`Average exp: ${avg}`);

// #4
const longestEmail = users.reduce((total, email) => {
    return total.email.length > email.email.length ? total.email : email;

});
console.log(longestEmail);

// #5

const userNames = users.reduce((prev, current) => {
    return `${prev} ${current.name}`;
}, 'The instructors are:');

console.log(userNames);

// bonus

const langs = users.reduce((totalLangs, currUserLangs) => {
    currUserLangs.languages.forEach(lang => {
      if (totalLangs.indexOf(lang) === -1) {
        totalLangs.push(lang);
      }
    });
    return totalLangs;
}, []);

console.log(langs);

const nums = [1,2,3,4,5];

const add = nums.map((n, i) => n + i);
console.log(add);

const onesZeros = [1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1];

const isOne = onesZeros.filter(n => n == true);
const isZero = onesZeros.filter(n => n == false);

console.log(isOne);
console.log(isZero);
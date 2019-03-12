'use strict';

//require
const added = require('./say-hello.js');

console.log(added.hello());
console.log(added.add(2,4));


//import/export v1
// import {message} from './say-hello.js';
//
// console.log(message());

//import/export v2 w/default
// import message from './say-hello.js'
//
// console.log(message.message());
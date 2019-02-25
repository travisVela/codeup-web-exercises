'use strict';

// get operator buttons
var btnPlus = document.getElementById('btnPlus');
var btnMinus = document.getElementById('btnMinus');
var btnMult = document.getElementById('btnMult');
var btnDivide = document.getElementById('btnDivide');
var btnEquals = document.getElementById('btnEquals');
var btnClear = document.getElementById('btnClear');

// get input fields
var a = document.getElementById('left-operand');
var operator = document.getElementById('operator');
var b = document.getElementById('right-operand');

// print items into input fields

var nums = document.getElementsByClassName('btn');
var x = [];

var assignNumber = function(e) {
    for (var i = 0; i < nums.length; i++) {
        nums[i].addEventListener('click', print, false);
    }
};

function print(event) {
    x = event.target;
    a.value += x.innerHTML;
    console.log(x);
}



// button assignments
var plus = function (event) {
    operator.value = '+';
    return a + b;
};
var minus = function (event) {
    operator.value = '-';
    return a - b;
};
var mult = function (event) {
    operator.value = '*';
    return a * b;
};
var divide = function (event) {
    operator.value = '/';
    return a / b;
};

// equals operator
var equals = function(event) {

};

var clear = function() {
    window.location.reload();
};

btnPlus.addEventListener('click', plus, false);
btnMinus.addEventListener('click', minus, false);
btnMult.addEventListener('click', mult, false);
btnDivide.addEventListener('click', divide, false);
btnClear.addEventListener('click', clear, false);
assignNumber();


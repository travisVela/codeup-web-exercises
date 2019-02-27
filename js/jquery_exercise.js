"use strict";

$(document).ready(function() {
    $('h1').css('cursor', 'pointer');
    $('h1').click(function() {
        $(this).css('background-color', '#eee');
    });

    $('p').css('cursor', 'pointer');
    $('p').dblclick(function() {
        $(this).css('font-size', '18px');
    });

    $('li').css('cursor', 'hover');
    $('li').hover(
        function() {
        $(this).css('color', '#f00');
        },
        function() {
            $(this).css('color', 'black');
        })
});


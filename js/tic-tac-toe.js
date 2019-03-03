'use strict';

$(document).ready(function() {

   setInterval(function () {
       $('#start').toggleClass('invisible')
   }, 750);



    var first = '';
    var second = '';
    var turn = 0;

    //determine player 1 and show game board
    $('body').on('keyup', function() {

        $('#landing').remove();
        var goesFirst = Math.floor(Math.random() * 2) + 1;
        if (goesFirst === 1) {
            first = 'X';
            second = 'O';
            $('#players').html('X will go first');
        } else if (goesFirst === 2) {
            $('#players').html('O will go first');
            first = 'O';
            second = 'X';
        }

        $('#game').show();
    });

    //alternate turns
    $('body').on('click', function(e) {
        var target = $(e.target);
        if (target.is('.play') && (turn % 2 === 0)) {
            target.html(first);
            turn++;
        } else if (target.is('.play') && (turn % 2 === 1)) {
            target.html(second);
            turn++;
        }
    })

});
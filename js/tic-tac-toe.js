'use strict';

$(document).ready(function() {

   setInterval(function () {
       $('#start').toggleClass('invisible')
   }, 750);

    var first = '';
    var second = '';
    var turn = 0;
    var goesFirst = Math.floor(Math.random() * 2) + 1;
    var game = $('#game');
    var firstWins = 0;
    var secondWins= 0;

    //determine player 1 and show game board
    $('body').on('keyup', function() {

        $('#landing').remove();

        if (goesFirst === 1) {
            $('#players').html('X will go first');
            first = 'X';
            second = 'O';
        } else if (goesFirst === 2) {
            $('#players').html('O will go first');
            first = 'O';
            second = 'X';
        }

        setTimeout(function(){
            $('#players').toggleClass('invisible');
        }, 5000);

        $('#game').show();

    });

    //invert highlight if O starts
    if (turn === 0 && goesFirst === 2) {
        $('.x, .o').toggleClass('highlight');
    }

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

        if ((turn % 2 === 0 && goesFirst === 1) || (turn % 2 === 0 && goesFirst === 2)) {
            $('.x, .o').toggleClass('highlight');
        } else if ((turn % 2 === 1 && goesFirst === 1) || turn % 2 === 1 && goesFirst === 2) {
            $('.x, .o').toggleClass('highlight');
        }

        //winning combos for first
        if ($('#1').html() == first && $('#2').html() == first && $('#3').html() == first ||
        $('#4').html() == first && $('#5').html() == first && $('#6').html() == first  ||
        $('#7').html() == first && $('#8').html() == first && $('#9').html() == first ||
        $('#1').html() == first && $('#4').html() == first && $('#7').html() == first ||
        $('#2').html() == first && $('#5').html() == first && $('#8').html() == first ||
        $('#3').html() == first && $('#6').html() == first && $('#9').html() == first ||
        $('#1').html() == first && $('#5').html() == first && $('#9').html() == first ||
        $('#3').html() == first && $('#5').html() == first && $('#7').html() == first
        ) {
            $(document).on('click', function() {
                $('#winner').modal('show');
                $('.modal-body').html(first + ' wins');
                firstWins++;
                $('.x').append(' ' + firstWins);
            })
        }

        //winning combos for second
        if ($('#1').html() == second && $('#2').html() == second && $('#3').html() == second ||
        $('#4').html() == second && $('#5').html() == second && $('#6').html() == second ||
        $('#7').html() == second && $('#8').html() == second && $('#9').html() == second ||
        $('#1').html() == second && $('#4').html() == second && $('#7').html() == second ||
        $('#2').html() == second && $('#5').html() == second && $('#8').html() == second ||
        $('#3').html() == second && $('#6').html() == second && $('#9').html() == second ||
        $('#1').html() == second && $('#5').html() == second && $('#9').html() == second ||
        $('#3').html() == second && $('#5').html() == second && $('#7').html() == second
        ) {
            $(document).on('click', function() {
                $('#winner').modal('show');
                $('.modal-body').html( second + ' wins!');
                secondWins++;
                $('.o').append(' ' + secondWins);
                $('#restart').on('click', function() {
                    $(game).show();
                })
            })
        }

        if (turn > 8) {
            alert('Draw');
        }
    })
});
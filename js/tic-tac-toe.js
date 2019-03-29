'use strict';

$(document).ready(function() {

   setInterval(function () {
       $('#start').toggleClass('invisible')
   }, 750);
    var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    var first = '';
    var second = '';
    var turn = 0;
    var goesFirst = Math.floor(Math.random() * 2) + 1;
    var firstWins = 0;
    var secondWins = 0;
    var winner = '';

    //assign divs ids
    $('.space').each(function(i) {
        $(this).attr("id", ids[i])
    });

    //initialize game
    function gameInit() {
        order();
        highlight();
        play();
        setTimeout(function(){
            $('#players').toggleClass('invisible');
        }, 5000);
    }
    gameInit();



    //determine player 1 and show game board
    function order() {
        $('body').on('keyup', function () {

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
            $('#game').show();
        });
    }

    //invert highlight if O starts
    function highlight() {
        if (turn === 0 && goesFirst === 2) {
            $('.x, .o').toggleClass('highlight');
        }
    }

    //alternate Xs and Os
    function play() {
        $('#board').on("click", function(e) {
            let target = $(e.target);
            if (target.is(':empty') && (target.is('.play')) && (turn % 2 === 0)) {
                target.html(first);
                $('.x, .o').toggleClass('highlight');
                turn++;
            } else if (target.is(':empty') && (target.is('.play')) && (turn % 2 === 1)) {
                target.html(second);
                $('.x, .o').toggleClass('highlight');
                turn++;
            }
        })
    }

    //determine winner
    $('#board').on('click', function() {

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
                if (first =='X') {
                    $('#xWins').html(' ' + firstWins);
                } else {
                    $('#oWins').html(' ' + firstWins)
                }
                $(document).off();
            });
            winner = first;
            firstWins++;
            goesFirst = 1;


        } else if ($('#1').html() == second && $('#2').html() == second && $('#3').html() == second ||
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
                if (first == 'X') {
                    $('#oWins').html(' ' + secondWins);
                } else {
                    $('#xWins').html('' + secondWins);
                }
                $(document).off();
            });
            winner = second;
            secondWins++;
            goesFirst = 2;
        } else if (turn == 9) {
            $(document).on('click keyup', function() {
                $('#winner').modal('show');
                $('.modal-body').html('Dang! it\'s a draw.');
                $(document).off();
            });
        }
    });

    $('#restart').off().on('click', function() {
        turn = 0;
        $('.play').html('');
    })

});
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var bingo = function bingo() {
    var $button = document.querySelector('[data-pick-num]'),
        $board = document.querySelector('[data-show-board]'),
        $pickedNums = document.querySelector('[data-show-picked-num]'),
        letters = ['b', 'i', 'n', 'g', 'o'],
        numsByLetter = 15;

    var board = [],
        pickedNums = [];

    if ($button) {
        var createBoard = function createBoard() {
            for (var i = 0; i < letters.length; i++) {
                var letter = letters[i];

                for (var n = 1; n <= numsByLetter; n++) {
                    //Contruct the name before adding it to the board
                    //If i >= 1, we add to n
                    board = [].concat(_toConsumableArray(board), [letter + (i >= 1 ? n + numsByLetter * i : n)]);
                }
            }
        };

        var show = function show($html, arr) {
            $html.innerHTML = '';

            arr.forEach(function (el) {
                $html.innerHTML += li(el);
            });
        };

        var li = function li(val) {
            return "<li>" + val + "</li>";
        };

        var pickNum = function pickNum() {
            var rand = Math.floor(Math.random() * board.length);
            var pickedNum = board[rand];
            board.splice(rand, 1);
            pickedNums = [].concat(_toConsumableArray(pickedNums), [pickedNum]);
            show($board, board);
            show($pickedNums, pickedNums);
        };

        $button.addEventListener("click", function () {
            pickNum();
        });

        createBoard();
        show($board, board);
    }
};

bingo();
var $elements = [].slice.call(document.querySelectorAll("[data-colour]"));

if ($elements) {
    $elements.forEach(function ($element) {
        var title = $element.childNodes[1];
        title.addEventListener("click", function () {
            var colorToApply = $element.getAttribute("data-colour");
            $element.getElementsByTagName("P")[0].style.color = colorToApply;
        });
    });
}

var init = function init() {
    if (document.querySelector('.question-7-heading')) {
        var formatText = function formatText() {
            var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ipsum';

            var $text = $('.' + text);
            return text + ': ' + $text.data('hello');
        };

        var result = function result(attr) {
            attr = attr || 'dolor';
            var test = '123456';
            var val = $('[data-' + attr + ']').data(attr);
            return '<p>Result [ ' + test + ' ]: ' + test * val + ' </p>';
        };

        var div = function div() {
            var myDiv = $('#mine');
            myDiv.html(result());
            myDiv.css("background-color", "cyan");
            return myDiv;
        };

        div().on('click', function () {
            $(undefined).find('p').css('color', 'red');
        });

        formatText('welcome');
    }
};
init();

var textA = document.querySelector('[data-text-a]').textContent;
var textB = document.querySelector('[data-text-b]');

if (textA) {
    var textSwitcher = function textSwitcher(text) {
        return [].concat(_toConsumableArray(text)).reverse().join('');
    };
    textB.innerHTML = textSwitcher(textA);
}
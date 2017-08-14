/**
 * Created by Annika on 14.07.2017.
 * source: https://codepen.io/cathydutton/pen/ldazc
 */
window.onload = function () {
    function shuffle(array) {
        //source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }




    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var gestures;
    var word ;              // Selected word
    var guess ;             // Geuss
    var geusses = [ ];      // Stored geusses
    var lives ;             // Lives
    var counter ;           // Count correct geusses
    var space;              // Number of spaces in word '-'
    var showButton;         // Create Play again button there

    // Get elements
    var showLives = document.getElementById("mylives");

    alphabet = shuffle(alphabet);

    // create alphabet ul
    var buttons = function () {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i].toUpperCase();
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    };

    // Create geusses ul
    result = function () {
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }

            geusses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    };

    // Show lives
    comments = function () {
        showLives.innerHTML = "Du hast " + lives + " Leben";
        showButton = document.getElementById('reset');
        var againButton = document.createElement('button');
        if (lives < 1) {
            showLives.innerHTML = "Spiel beendet";
            ALTabletBinding.raiseEvent("loose");

            againButton.innerHTML = "Nochmal spielen";
            showButton.appendChild( againButton);
        }
        for (var i = 0; i < geusses.length; i++) {
            if (counter + space === geusses.length) {
                showLives.innerHTML = "Du hast gewonnen!";
                ALTabletBinding.raiseEvent("win");


                againButton.innerHTML = "Nochmal spielen";
                showButton.appendChild( againButton);

            }
        }
    };

    // OnClick Function
    check = function () {
        list.mouseover = function () {
            var geuss = (this.innerHTML).toLowerCase();
            this.setAttribute("class", "active");
            this.mouseover = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === geuss) {
                    geusses[i].innerHTML = geuss;
                    counter += 1;
                }
            }
            var j = (word.indexOf(geuss));
            if (j === -1) {
                lives -= 1;
                comments();
            } else {
                comments();
            }
        }
    };


    // Play
    play = function () {
        word = "fotografieren";
        console.log(word);
        buttons();

        geusses = [ ];
        lives = 5;
        counter = 0;
        space = 0;
        result();
        comments();
    };

    play();


    // More tips --> send Event
    document.getElementById('hint').mouseover = function() {
        ALTabletBinding.raiseEvent("fotografieren");
    };
    // Reset --> send Event
    document.getElementById('reset').mouseover = function() {
        ALTabletBinding.raiseEvent("reset");
    };
    // Stop --> send Event
    document.getElementById('stop').mouseover = function() {
        ALTabletBinding.raiseEvent("stop");
    };
};



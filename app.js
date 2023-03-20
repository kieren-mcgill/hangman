// DOM variables

// Game variables
const wordBank = ['apple', 'orange', 'banana'];
const wordInPlay = wordBank[Math.floor(Math.random()*wordBank.length)];
const wordArray = [...wordInPlay]
let displayArray = Array(wordInPlay.length).fill('_');
let displayWord = displayArray.join('');

function gameTurn(letter) {
    wordArray.forEach((el, i) => {
        if (el === letter) {
              displayArray[i] = letter;
            displayWord = displayArray.join('');
        }
    })
}


gameTurn('p');
gameTurn("l");



console.log(wordInPlay)
console.log(displayWord)
console.log(wordArray)
console.log(displayArray)
console.log(displayWord)
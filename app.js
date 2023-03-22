// Game variables
let wordInPlay = "";
let wordArray = [];
let displayArray = [];
let displayWord = "";
let currentLetter = "";
let chosenLetters = [];
let setLettersTried = [];
let lives = 6;

// DOM variables
// Buttons
const newGameBtn = document.getElementById('new-game');
const guessLetterBtn = document.getElementById('guess-letter');

//Displays
const wordDisplayEl = document.getElementById('word-display');
const livesEl = document.getElementById('lives');
const lettersTriedEl = document.getElementById('letters-tried');
const statusEl = document.getElementById('status');

//Text entries
const enterLetter = document.getElementById('enter-letter');


// Interactions 
newGameBtn.onclick = newGame;
guessLetterBtn.onclick = gameTurn;

//On page load
newGame()

//Function called when "New game" button is pressed
function newGame() {
    //Set starting state
    wordInPlay = wordBank[Math.floor(Math.random() * wordBank.length)];
    wordArray = [...wordInPlay];
    displayArray = Array(wordInPlay.length).fill('_');
    displayWord = displayArray.join(' ');
    chosenLetters = [];
    lives = 6;

    //Set starting display
    wordDisplayEl.textContent = displayWord;
    livesEl.textContent = `Lives left: ${lives}`;
    lettersTriedEl.textContent = 'Tried so far:';
    document.querySelectorAll('.gallows, .win-lose').forEach((el) => el.style.display = 'none');
    enterLetter.value = "";
}

//Function called when "Guess letter" button is pressed
function gameTurn() {
    currentLetter = enterLetter.value;
    //Check that the entered letter hasn't already been tried
    if (chosenLetters.includes(currentLetter) === false) {
        //Check if letter is in the "word in play"
        if (wordArray.includes(currentLetter)) {
            goodGuess();
        } else {
            badGuess();
        }
    }
    enterLetter.value = "";
}

//Function that is called by "gameTurn" if the letter is a correct guess
function goodGuess() {
    wordArray.forEach((el, i) => {
        if (el === currentLetter) {
            displayArray[i] = currentLetter;
            displayWord = displayArray.join(' ');
            chosenLetters.push(currentLetter);
            //Change displays
            wordDisplayEl.textContent = displayWord;
            setLettersTried = [...new Set(chosenLetters)];
            lettersTriedEl.textContent = `Tried so far: ${setLettersTried}`;
        }
    })
    //Check if game has been won
    winOrLose();
}

//Function that is called by "gameTurn" if the letter is a wrong guess
function badGuess() {
    lives--;
    chosenLetters.push(currentLetter);
    //Change displays
    setLettersTried = [...new Set(chosenLetters)];
    lettersTriedEl.textContent = `Tried so far: ${setLettersTried}`;
    livesEl.textContent = `Lives left ${lives}`;
    document.getElementById(`gallows-part-${lives}`).style.display = 'block';
    //Check if game has been lost
    winOrLose();
}

//Function that says if player has won of lost
function winOrLose() {
    //Check if game has been won
    if (wordInPlay === displayWord.replace(/\s/g, '')) {
        document.getElementById('win').style.display = 'block';
    }
    //Check if game has been lost
    if (lives === 0) {
        document.getElementById('lose').style.display = 'block';
    }
}





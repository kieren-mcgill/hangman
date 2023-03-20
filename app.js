
const wordBank = ['apple', 'orange', 'banana'];
const wordInPlay = wordBank[Math.floor(Math.random()*wordBank.length)];
let displayWord = Array(wordInPlay.length).fill('_').join('');






console.log(wordInPlay)
console.log(displayWord)
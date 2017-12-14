// //set up guessing game
// //word is set but would want to add random word selector
// //split it into 2 player with a successful guess leading to solve opportunity
// //unsucessful guess is tallied to see who gets hangman first out of 2 players
// //if both players get hangman reveal Word

var gameWords = ['test', 'winner', 'dog'] //words
var randomWords = gameWords[Math.floor(Math.random() * gameWords.length)] //code to randomly select which word in array is selected

var d
var count = 0
var answerArray = [] //store answers



function blanks(){ //getting blanks in array from word
  for (i = 0; i < randomWords.length; i++){
    answerArray[i] = '__'
}

d = answerArray.join(' ')
document.getElementById('text').innerHTML = d

function Letter(){
  var letter = document.getElementById('text').value

  if (letter.length > 0) {
    
  }
}





























//
// var word = ['T', 'E', 'S', 'T']
// var letters = []
//
// document.getElementById('submit').addEventListener('click', function(){
//   event.preventDefault()
//   alert("Welcome to HangMan. Submit a guess in box!");
// })
//

//
// document.getElementById('submitGuess').addEventListener('click', function(){
//   event.preventDefault()
//   var guess = document.getElementById('text').value
//   console.log(guess) //used typeof to see its coming back as a string
//   // for (i=0; i<7; i++){
//   // if(word.indexOf(guess) >= 0){
//   //   console.log('match')
//   // }
//   // }
// })










// // alert("Welcome to HangMan. Submit a guess in box!");
//
// function hangmanGuess(){
// var word = ['T', 'E', 'S', 'T']
// var hangman = ['H', 'A', 'N', 'G', 'M', 'A', 'N']
// var guessAgain = alert("Enter another letter")
// var guess = document.getElementById('text')
// var letter = guess
// for (i=0; i<8; i++){
//   if( letter == word) {
//     event.preventDefault()
//     console.log(letter)
//     console.log(word)
//     // alert("That was a correct letter")
//     // alert(word[] + " is a corret guess!")
//   } else {
//     console.log(letter)
//     // alert(guessAgain)
//     // alert(letter + " is an incorrect guess!")
//   }
//   }
// })



//guessing game element to cycle through HANGMAN


// document.getElementById('submit').addEventListener('click', function (event) {
//   event.preventDefault()
//   var guess = document.getElementById('text').value.split('')
//   console.log(guess)
//   document.getElementById('word').innerHTML = guess
// })

// retrieve data from botton then display it
// once displayed figure out how to split it up then show blank spaces
// work on guessing functionality

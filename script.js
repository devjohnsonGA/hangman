// //set up guessing game
// //word is set but would want to add random word selector
// //split it into 2 player with a successful guess leading to solve opportunity
// //unsucessful guess is tallied to see who gets hangman first out of 2 players
// //if both players get hangman reveal Word

var randomWordArr = ["test", "winner", "dog"] //words
var randomWords = randomWordArr[Math.floor(Math.random() * randomWordArr.length)] //code to randomly select which word in array is selected

var d
var count = 0
var answerArray = [] //store answers


document.getElementById("startGame").addEventListener("click", startUp)
function startUp(){ //getting blanks in array from word
  for (i = 0; i < randomWords.length; i++){
    answerArray[i] = "_"
}

d = answerArray.join(" ")
document.getElementById("answer").innerHTML = d

document.getElementById("letterSubmit").addEventListener("click", Letter)
function Letter(){
  var letter = document.getElementById("letter").value
  console.log(letter)

  if (letter.length > 0) {

    for (var i = 0; i < randomWords.length; i++){

      if (randomWords[i] === letter){ //check if letter is in chosen word
        answerArray[i] = letter //plug it in
      }
    }
    //attempt tracker
    count++
    document.getElementById("counter").innerHTML = "HANGMAN count: " + count

  }
}
}

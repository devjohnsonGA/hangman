// define words to search
const wordArray = ["test", "cat", "window"]
// how to get random word
const randomWord = wordArray[Math.floor(Math.random() * wordArray.length)]

let d
let count = 0
// score count
let answerArray = []

function startUp(){
  for (var i = 0; i < randomWord.length; i++){
    answerArray[i] = "_"
  }
  // put in string
  d = answerArray.join(" ")
  document.getElmentById("answer").innerHTML = d
}
// letter check and placement
function Letter () {
  var letter = document.getElementById("letter").value
  if (letter.length > 0){
    for (var i = 0; i < randomWord.length; i++){
      if (randomWord[i] === letter){
        answerArray[i] = letter
      }
    }
    count++
    document.getElementById("counter").innerHTML = "Number of guesses: " + count // score keeper
    document.getElementById("answer").innerHTML = answerArray.join(" ") //answer display
  }
  if(count > 5){
    document.getElementById("stat").innerHTML = "GAME OVER" // loser message
  }
}

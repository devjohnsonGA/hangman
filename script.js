alert("Welcome to HangMan ...");
var word = ['T', 'E', 'S', 'T']
var hangman = ['H', 'A', 'N', 'G', 'M', 'A', 'N']
var guess = prompt("Enter another letter")
for (i=0; i<8; i++){
  if( word[] == word[]) {
    alert("That was a correct letter")
  } else {
    alert(hangman[i])
  }
}
//guessing game element to cycle through HANGMAN


document.getElementById('submit').addEventListener('click', function (event) {
  event.preventDefault()
  var guess = document.getElementById('text').value.split('')
  console.log(guess)
  document.getElementById('word').innerHTML = guess
})

// retrieve data from botton then display it
// once displayed figure out how to split it up then show blank spaces
// work on guessing functionality

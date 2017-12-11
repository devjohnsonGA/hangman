// alert("Welcome to HangMan ...");

document.getElementById('submit').addEventListener('click', function (event) {
  event.preventDefault()
  var guess = document.getElementById('text').value
  console.log(guess)
  document.getElementById('word').innerHTML = guess
})

// retrieve data from botton then display it
// once displayed figure out how to split it up then show blank spaces
// work on guessing functionality

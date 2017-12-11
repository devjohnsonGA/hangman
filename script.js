// alert("Welcome to HangMan ...");

document.getElementById('submit').addEventListener('click', function () {
  var guess = document.getElementById('text').value
  console.log(guess)
  document.getElementById('word').innerHTML = $('word').data(guess)
})

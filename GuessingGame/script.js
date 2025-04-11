let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
  attempts--;

  while(attempts > 0) {
    let inputElement = document.getElementById('guess');
    let feedbackElement = document.getElementById('feedback');

    let guess = inputElement.value;
    if(guess === randomNumber) {
      feedbackElement.innerHTML = "Success!";
      feedbackElement.style.color = "green";
      attempts = 0;
      break;
    } else if(guess < randomNumber) {
      feedbackElement.innerHTML = "Too low! Try again. Guesses left: " + attempts;
      feedbackElement.style.color = "red";
      break;
    } else {
      feedbackElement.innerHTML = "Too high! Try again. Guesses left: " + attempts;
      feedbackElement.style.color = "red";
      break;
    }
  }

  if(attempts == 0 && guess !== randomNumber) {
    feedbackElement.innerHTML = "Game over";
  }
}


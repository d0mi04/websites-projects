let question = "What planet is known as the 'Red Planet'?";
let choices = ["Earth", "Mars", "Jupiter", "Saturn"];
const correctAnswer = "Mars";

function checkAnswer(button) {
  if(button.value === correctAnswer) {
    document.getElementById("result").innerHTML = "Correct!";
  } else {
    document.getElementById("result").innerHTML = "Wrong!";
  }
  for(let i = 0; i < 4; i++) {
    document.getElementById(`choice${i + 1}`).disabled = true;
  }
}

function displayQuestion () {
  document.getElementById("question").innerHTML = question;
  for(let i = 0; i < 4; i++) {
    const btn = document.getElementById(`choice${i+1}`);
    btn.innerHTML = choices[i];
    btn.value = choices[i];
  }
}

displayQuestion();
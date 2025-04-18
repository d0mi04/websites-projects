let score = 0;
let questions = [
  "What planet is known as the 'Red Planet'?",
  "What is the biggest planet in Solar System?"
];
let currentQuestionIndex = 0;

let choicesArray = [
  ["Earth", "Mars", "Jupiter", "Saturn"],
  ["Mercury", "Venus", "Jupiter", "Neptun"]
];
let correctAnswers = ["Mars", "Jupiter"];

function checkAnswer(button) {
  if(button.value === correctAnswers[currentQuestionIndex]) {
    score++;
  }
  currentQuestionIndex++;
  displayQuestion();
}

function displayQuestion () {
  if(currentQuestionIndex < questions.length) {
    document.getElementById("question").innerHTML = questions[currentQuestionIndex];
  for(let i = 0; i < choicesArray[currentQuestionIndex].length; i++) {
    const btn = document.getElementById(`choice${i+1}`);
    btn.innerHTML = choicesArray[currentQuestionIndex][i];
    btn.value = choicesArray[currentQuestionIndex][i];
  }
  } else {
    let buttons = document.querySelectorAll("#choices button");
    buttons.forEach(button => button.disabled = true);
    let result = document.getElementById("result");
    let scoreElement = document.createElement("p");
    result.appendChild(scoreElement).innerHTML = `You scored ${score} out of ${questions.length}!`;

    document.getElementById("question").innerHTML = "";
    document.getElementById("choices").innerHTML = "";
  }
}

displayQuestion();
const Question = require("./Question");

const questionsData = [
  {
    id: 1,
    question: "What is the capital of Poland?",
    options: ["Krakow", "Poznan", "Warszawa", "Gdansk"],
    correctAnswer: "Warszawa",
  },
  {
    id: 2,
    question: "What is the longest river in Poland?",
    options: ["Wisla", "Odra", "San", "Warta"],
    correctAnswer: "Wisla",
  }
];

class Quiz {
  constructor() {
    this.questions = questionsData.map(q =>
      new Question(q.id, q.question, q.options, q.correctAnswer)
    );
  }

  getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * this.questions.length);
    return this.questions[randomIndex];
  }
}

module.exports = Quiz;
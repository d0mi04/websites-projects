const Question = require("./Question");
const db = require("./database");

// commented code won't be used - I will use created database in database.js file
// const questionsData = [
//   {
//     id: 1,
//     question: "What is the capital of Poland?",
//     options: ["Krakow", "Poznan", "Warszawa", "Gdansk"],
//     correctAnswer: "Warszawa",
//   },
//   {
//     id: 2,
//     question: "What is the longest river in Poland?",
//     options: ["Wisla", "Odra", "San", "Warta"],
//     correctAnswer: "Wisla",
//   }
// ];

class Quiz {
    getRandomQuestion() {
    const question = db.prepare("SELECT * FROM questions ORDER BY RANDOM() LIMIT 1").get();

    if (question) {
      return new Question(
        question.id,
        question.question,
        question.options,
        question.correctAnswer
      );
    }
    return null;
  }

    checkAnswer(questionId, answer) {
    const result = db.prepare(`
      SELECT correctAnswer
      FROM questions
      WHERE id = ?
    `).get(questionId);

    if(result) {
      return result.correctAnswer === answer;
    }
    return null;
  }
    // this constructor is not needed now - I will be using database from database.js file
//   constructor() {
//     this.questions = questionsData.map(q =>
//       new Question(q.id, q.question, q.options, q.correctAnswer)
//     );
//   }

//   getRandomQuestion() {
//     const randomIndex = Math.floor(Math.random() * this.questions.length);
//     return this.questions[randomIndex];
//   }
}

module.exports = Quiz;
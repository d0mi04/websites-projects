class Question {
    constructor(id, question, options, correctAnswer) {
        this.id = id;
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }

    isCorrectAnswer(answer) {
        return answer === this.correctAnswer;
    }
}

module.exports = Question;
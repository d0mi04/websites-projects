const express = require("express");
const Quiz = require("./Quiz");

const router = express.Router();
const quiz = new Quiz();

router.get("/question", (res, req) => {
    const question = quiz.getRandomQuestion();
    res.json({
        id: question.id,
        question: question.question,
        options: question.options,
    });
});

module.exports = router;
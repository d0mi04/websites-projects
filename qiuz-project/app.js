const express = require("express");
const quizRoutes = require("./QuizRoutes");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

app.use("question", quizRoutes);
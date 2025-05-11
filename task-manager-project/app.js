const db = require('./database');
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json); // using build-in midleware

app.get("/tasks", (req, res) => {
    const tasks = db.prepare('SELECT * FROM tasks').all();
    res.status(200).json({
        tasks: tasks
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
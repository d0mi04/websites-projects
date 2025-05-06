const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is working on port ${port}`);
});

app.get("/coinflip", (req, res) => {
    const result = Math.floor(Math.random() * 2);
    res.json({ result: result === 0 ? "Heads" : "Tails" });
});

app.get("/diceRoll", (req, res) => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    res.json({ result: diceRoll });
});

app.get("/randomNumber", (req, res) => {
    const result = Math.floor(Math.random() * 100) + 1;
    res.json({ result: result });
});


const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is working on port ${port}`);
});

app.get("/coinflip", (req, res) => {
    let times = parseInt(req.query.times) || 1;
    let results = [];
    for (let i = 0; i < times; i++) {
      const result = Math.floor(Math.random() * 2);
      results.push(result === 0 ? "Heads" : "Tails");
    }
  
    res.status(200).json({
      result: results,
    });
  });

app.get("/diceRoll", (req, res) => {
    let times = parseInt(req.query.times) || 1;
    let results = [];
    for (let i = 0; i < times; i++) {
      const result = Math.floor(Math.random() * 6) + 1;
      results.push(result);
    }
  
    res.status(200).json({
      result: results,
    });
  });

app.get("/randomNumber", (req, res) => {
  let min = parseInt(req.query.min) || 1;
  let max = parseInt(req.query.max) || 100;

  if (min >= max) {
    return res.status(400).json({
      error: "Min should be less than max.",
    });
  }
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  res.status(200).json({
    result: result,
  });
});

const express = require("express");
const db = require("./database");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

app.use(express.json());
app.use(cors());

app.get("/grid", (req, res) => {
  try {
    const grid = db.prepare(`
      SELECT * FROM grid
    `).all();
    return res.status(200).json({
      grid: grid,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal error",
    });
  }
});
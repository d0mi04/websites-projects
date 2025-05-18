const Database = require("better-sqlite3");
const db = new Database("/tmp/quiz.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT NOT NULL,
    options TEXT NOT NULL,
    correctAnswer TEXT NOT NULL
  )
`);

db.exec(`
  INSERT INTO questions (question, options, correctAnswer)
  VALUES
    ('How many neighbours has Poland?', '5, 7, no neighbours, 10', '7'),
    ('Does Poland have a king?', 'yes, no', 'no');
`);

module.exports = db;
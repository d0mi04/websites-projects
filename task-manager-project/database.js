const Database = require("better-sqlite3");
const db = new Database("/tmp/tasks.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending', 'completed'))
    )
`);

db.exec(`
  INSERT INTO tasks (title, description, status)
  VALUES 
    ('Shopping', 'Bread, Butter, Avocado', 'pending'),
    ('Lundry', 'Black color clothes', 'pending'),
    ('Workout', '30 min run', 'completed');
`);

module.exports = db;
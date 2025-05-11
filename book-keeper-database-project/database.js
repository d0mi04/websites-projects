const Database = require('better-sqlite3');
const db = new Database('/tmp/books.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    year INTEGER
  )
`);

db.exec(`
  INSERT INTO books (title, author, year)
  VALUES
    ('The Witcher', 'Andrzej Sapkowski', 1986),
    ('The Hobbit', 'J. R. R. Tolkien', 1937),
    ('Metro 2033', 'Dymitrij Glukhovsky', 2002);
`);

module.exports = db;
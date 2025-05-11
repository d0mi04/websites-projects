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

db.exec(`
  CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    book_id INTEGER NOT NULL,
    content TEXT NOT NULL,
    FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE

  )`
);

db.exec(`
  INSERT INTO notes (book_id, content) 
  VALUES
    (1, 'fantasy book'),
    (2, 'amazing landscape desription, love this!'),
    (2, 'XIV chapter finished!'),
    (3, 'post-apocalyptic word, would recommend');
`);

module.exports = db;
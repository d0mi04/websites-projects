const db = require("./database");
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.use(express.json());

app.get("/books", (req, res) => {
  const books = db.prepare(
    "SELECT * FROM books"
  ).all();
  res.status(200).json({
    books: books
  });
});

app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  const select = db.prepare(
    "SELECT * FROM books WHERE id = ?"
  );
  const result = select.get(id); // using single item - use .get(), not run()
  res.status(200).json({
    book: result
  });
});

app.post("/books", (req, res) => {
  const { title, author, year } = req.body;
  const insert = db.prepare(
    "INSERT INTO books (title, author, year) VALUES (?, ?, ?)"
  );
  const result = insert.run(title, author, year);
  res.status(201).json({
    mesage: "Book added successfully",
    bookId: result.lastInsertRowid,
  });
});
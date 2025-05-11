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
  const selectBook = db.prepare(
    "SELECT * FROM books WHERE id = ?"
  );
  const book = selectBook.get(id); // using single item - use .get(), not run()

  const selectNotes = db.prepare (
    "SELECT * FROM notes WHERE book_id = ?"
  );
  const notes = selectNotes.all(id);
  res.status(200).json({
    book: book,
    notes: notes,
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

app.post("/books/:id/notes", (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  if (!content || content.trim() === "") {
    return res.status(400).json({
      error: "Invalid request.",
    });
  }
  const addNote = db.prepare(
    "INSERT INTO notes (book_id, content) VALUES (?, ?)",
  );
  const note = addNote.run(id, content);
  res.status(201).json({
    message: "Note added successfully",
    noteId: note.lastInsertRowid,
    note: note,
  });
});

app.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  const deleteBook = db.prepare(
    "DELETE FROM books WHERE id = ?"
  );
  const result = deleteBook.run(id);

  if(result.changes === 0) {
    return res.status(404).json({
      error: "Book not found",
    });
  }
  res.status(200).json({
    message: "Book deleted successfully",
    deletedBokId: id,
  });
});
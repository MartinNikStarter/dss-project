import React from 'react';

function ListSection({ books, selectedBook, onBookSelect, onDeleteBook }) {
  return (
    <div className="content-list">
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <p className="id">{book.id}</p>
            <p className="field1">{book.title}</p>
            <p className="field2">{book.author}</p>
            {/* Repeat for other fields */}
            <button className="deleteButton" onClick={() => onDeleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListSection;

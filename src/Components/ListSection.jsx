import React from 'react';

function ListSection({ books, selectedBook, onBookSelect, onDeleteBook }) {
  return (
    <div className="content-list">
      <ul>
        {books.map(book => (
          <li key={book.id} onClick={() => onBookSelect(book)}>
            <p className="id">{book.id}</p>
            <p className="field1">{book.title}</p>
            <p className="field2">{book.author}</p>
            <p className="field3">{book.isbn}</p>
            <p className="field4">{book.price}</p>
            <p className="field5">{book.publicationDate}</p>
            <button className="deleteButton" onClick={(e) => {e.stopPropagation(); onDeleteBook(book.id)}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListSection;

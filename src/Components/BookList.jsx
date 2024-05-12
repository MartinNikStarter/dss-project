import React from "react"

const BookList = ({ books, onDelete }) => {
    return (
      <ul className="content-list">
        {books.map(book => (
          <li key={book.id}>
            <p className="id">ID: {book.id}</p>
            <p className="field1">Title: {book.title}</p>
            <p className="field2">Author: {book.author}</p>
            <p className="field3">ISBN: {book.isbn}</p>
            <p className="field4">Price: {book.price}</p>
            <p className="field5">Publication Date: {book.publicationDate}</p>
            <button className="deleteButton" onClick={() => onDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default BookList;
  
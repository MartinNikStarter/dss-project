import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import ListSection from './Components/ListSection';
import DetailsSection from './Components/DetailsSection';
import Footer from './Components/Footer';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    price: '',
    publicationDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} to ${value}`);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author || !formData.isbn || !formData.price || !formData.publicationDate) {
      alert('All fields are mandatory');
      return;
    }
    if (selectedBook) {
      const updatedBooks = books.map((book) =>
        book.id === selectedBook.id ? { ...formData, id: selectedBook.id } : book
      );
      setBooks(updatedBooks);
    } else {
      const newBook = { ...formData, id: books.length + 1 };
      setBooks([...books, newBook]);
    }
    setFormData({
      title: '',
      author: '',
      isbn: '',
      price: '',
      publicationDate: ''
    });
    setSelectedBook(null);
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book);
    setFormData({
      title: book.title,
      author: book.author,
      isbn: book.isbn,
      price: book.price,
      publicationDate: book.publicationDate
    });
  };

  const handleDeleteBook = (id) => {
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
    setSelectedBook(null);
  };

  return (
    <div className="App">
      <Navbar />
      <ListSection
        books={books}
        selectedBook={selectedBook}
        onBookSelect={handleBookSelect}
        onDeleteBook={handleDeleteBook}
      />
     <DetailsSection
      formData={formData}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
      setFormData={setFormData}
      />
      <Footer />
    </div>
  );
}


export default App;
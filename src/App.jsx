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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author || !formData.isbn || !formData.price || !formData.publicationDate) {
      alert('All fields are mandatory');
      return;
    }
    const newBook = { ...formData, id: books.length + 1 };
    setBooks([...books, newBook]);
    setFormData({
      title: '',
      author: '',
      isbn: '',
      price: '',
      publicationDate: ''
    });
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book);
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
      />
      <Footer />
    </div>
  );
}


export default App;

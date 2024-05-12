
function App() {
	const [books, setBooks] = useState([]);
	const [selectedBook, setSelectedBook] = useState(null);
  
	function handleSave(formData) {
	  if (selectedBook) {
		const updatedBooks = books.map(book => {
		  if (book.id === selectedBook.id) {
			return { ...book, ...formData };
		  }
		  return book;
		});
		setBooks(updatedBooks);
	  } else {
		setBooks([...books, { id: books.length + 1, ...formData }]);
	  }
	  setSelectedBook(null);
	}
  
	function handleDelete(id) {
	  const updatedBooks = books.filter(book => book.id !== id);
	  setBooks(updatedBooks);
	  setSelectedBook(null);
	}
  
	function clearForm() {
	  setSelectedBook(null);
	}
  
	return (
	  <div className="App">
		<Navbar />
		<section>
		  <h2>List Section</h2>
		  <BookList books={books} onDelete={handleDelete} />
		</section>
		<section>
		  <h2>Details Section</h2>
		  <BookForm onSave={handleSave} clearForm={clearForm} selectedBook={selectedBook} />
		</section>
		<Footer />
	  </div>
	);
  }
  
  export default App;
  
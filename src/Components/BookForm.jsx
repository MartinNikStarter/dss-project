import React from "react"

function BookForm({ onSave, clearForm, selectedBook }) {
    const [formData, setFormData] = useState(selectedBook || {});
  
    function handleChange(e) {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      onSave(formData);
      clearForm();
    }
  
    return (
      <div className="content-details">
        <form onSubmit={handleSubmit}>
          <input type="text" id="field1" name="title" placeholder="Title" value={formData.title || ''} onChange={handleChange} />
          <input type="text" id="field2" name="author" placeholder="Author" value={formData.author || ''} onChange={handleChange} />
          <input type="text" id="field3" name="isbn" placeholder="ISBN" value={formData.isbn || ''} onChange={handleChange} />
          <input type="text" id="field4" name="price" placeholder="Price" value={formData.price || ''} onChange={handleChange} />
          <input type="text" id="field5" name="publicationDate" placeholder="Publication Date" value={formData.publicationDate || ''} onChange={handleChange} />
          <button type="submit" id="saveButton" className="btn saveButton">Save</button>
          <button type="button" id="clearButton" onClick={clearForm} className="btn clearButton">Clear</button>
        </form>
      </div>
    );
  }
  
  export default BookForm;
  
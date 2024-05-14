import React from 'react';

function DetailsSection({ formData, onInputChange, onSubmit, setFormData }) {
  return (
    <div className="content-details">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          id="field1"
          value={formData.title}
          onChange={onInputChange}
          placeholder="Title"
          required
        />
        <input
          type="text"
          name="author"
          id="field2"
          value={formData.author}
          onChange={onInputChange}
          placeholder="Author"
          required
        />
        <input
          type="text"
          name="isbn"
          id="field3"
          value={formData.isbn}
          onChange={onInputChange}
          placeholder="ISBN"
          required
        />
        <input
          type="number"
          name="price"
          id="field4"
          value={formData.price}
          onChange={onInputChange}
          placeholder="Price"
          required
        />
        <input
          type="date"
          name="publicationDate"
          id="field5"
          value={formData.publicationDate}
          onChange={onInputChange}
          placeholder="Publication Date"
          required
        />
        <button type="submit" id="saveButton">Save</button>
        <button type="button" id="clearButton" onClick={() => setFormData({
          title: '',
          author: '',
          isbn: '',
          price: '',
          publicationDate: ''
        })}>Clear</button>
      </form>
    </div>
  );
}

export default DetailsSection;

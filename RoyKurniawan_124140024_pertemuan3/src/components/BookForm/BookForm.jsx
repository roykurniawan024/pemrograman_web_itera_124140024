import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './BookForm.css';

function BookForm({ onAddBook, editingBook, onUpdateBook, onCancelEdit }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('milik');
  const [error, setError] = useState('');

  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
      setStatus(editingBook.status);
      setError('');
    } else {
      setTitle('');
      setAuthor('');
      setStatus('milik');
      setError('');
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !author.trim()) {
      setError('Judul buku dan nama penulis wajib diisi!');
      return;
    }

    if (editingBook) {
      onUpdateBook({
        ...editingBook,
        title: title.trim(),
        author: author.trim(),
        status,
      });
    } else {
      const newBook = {
        id: Date.now(),
        title: title.trim(),
        author: author.trim(),
        status,
      };
      onAddBook(newBook);
    }

    setTitle('');
    setAuthor('');
    setStatus('milik');
    setError('');
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <h3 className="form-title">
        {editingBook ? 'Edit Buku' : 'Tambah Buku'}
      </h3>

      {error && <p className="error-message">{error}</p>}

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="title">Judul Buku</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Penulis</label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="form-group status-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="milik">Milik</option>
            <option value="baca">Sedang Dibaca</option>
            <option value="beli">Ingin Dibeli</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            {editingBook ? 'Simpan' : 'Tambah Buku'}
          </button>
          {editingBook && (
            <button type="button" className="cancel-btn" onClick={onCancelEdit}>
              Batal
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

BookForm.propTypes = {
  onAddBook: PropTypes.func.isRequired,
  editingBook: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    status: PropTypes.string,
  }),
  onUpdateBook: PropTypes.func,
  onCancelEdit: PropTypes.func,
};

export default BookForm;
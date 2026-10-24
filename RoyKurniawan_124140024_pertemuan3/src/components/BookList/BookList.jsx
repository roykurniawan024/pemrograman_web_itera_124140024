import React from 'react';
import PropTypes from 'prop-types';
import './BookList.css';

function BookList({ books, onEdit, onDelete }) {
  if (books.length === 0) {
    return (
      <div className="empty-message">
        Belum ada buku di daftar ini.
      </div>
    );
  }

  const getStatusLabel = (status) => {
    if (status === 'milik') return 'Milik';
    if (status === 'baca') return 'Sedang Dibaca';
    if (status === 'beli') return 'Ingin Dibeli';
    return status;
  };

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <div className="book-info">
            <span className="book-title">{book.title}</span>
            <span className="book-author">Penulis: {book.author}</span>
          </div>

          <div className="book-actions">
            <span className={`status-tag status-${book.status}`}>
              {getStatusLabel(book.status)}
            </span>
            <button className="edit-btn" onClick={() => onEdit(book)}>
              Edit
            </button>
            <button className="delete-btn" onClick={() => onDelete(book.id)}>
              Hapus
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
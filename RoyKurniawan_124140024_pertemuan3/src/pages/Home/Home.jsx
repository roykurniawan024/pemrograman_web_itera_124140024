import React, { useState } from 'react';
import BookForm from '../../components/BookForm/BookForm';
import BookFilter from '../../components/BookFilter/BookFilter';
import BookList from '../../components/BookList/BookList';
import { useBooks } from '../../context/BookContext';
import './Home.css';

function Home() {
  const { books, addBook, updateBook, deleteBook, stats } = useBooks();
  const [editingBook, setEditingBook] = useState(null);
  const [filterStatus, setFilterStatus] = useState('semua');
  const [searchTerm, setSearchTerm] = useState('');

  const handleUpdateBook = (updated) => {
    updateBook(updated);
    setEditingBook(null);
  };

  const filteredBooks = books.filter((book) => {
    const matchStatus = filterStatus === 'semua' || book.status === filterStatus;
    const matchSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <main className="container home-page">
      <div className="stats-row">
        <div className="stat-box">
          <span className="stat-title">Total Buku</span>
          <strong className="stat-val">{stats.total}</strong>
        </div>
        <div className="stat-box">
          <span className="stat-title">Milik</span>
          <strong className="stat-val">{stats.milik}</strong>
        </div>
        <div className="stat-box">
          <span className="stat-title">Sedang Dibaca</span>
          <strong className="stat-val">{stats.baca}</strong>
        </div>
        <div className="stat-box">
          <span className="stat-title">Ingin Dibeli</span>
          <strong className="stat-val">{stats.beli}</strong>
        </div>
      </div>

      <BookForm
        onAddBook={addBook}
        editingBook={editingBook}
        onUpdateBook={handleUpdateBook}
        onCancelEdit={() => setEditingBook(null)}
      />

      <BookFilter
        filterStatus={filterStatus}
        onFilterChange={setFilterStatus}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <BookList
        books={filteredBooks}
        onEdit={(book) => setEditingBook(book)}
        onDelete={deleteBook}
      />
    </main>
  );
}

export default Home;
import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '../hooks/useLocalStorage';
import useBookStats from '../hooks/useBookStats';

const BookContext = createContext();

export function useBooks() {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBooks harus digunakan di dalam BookProvider');
  }
  return context;
}

export function BookProvider({ children }) {
  const [books, setBooks] = useLocalStorage('books_data', []);

  const addBook = (newBook) => setBooks([...books, newBook]);

  const updateBook = (updatedBook) =>
    setBooks(books.map(b => (b.id === updatedBook.id ? updatedBook : b)));

  const deleteBook = (bookId) =>
    setBooks(books.filter(b => b.id !== bookId));

  const stats = useBookStats(books);

  const value = {
    books,
    addBook,
    updateBook,
    deleteBook,
    stats,
  };

  return (
    <BookContext.Provider value={value}>
      {children}
    </BookContext.Provider>
  );
}

BookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

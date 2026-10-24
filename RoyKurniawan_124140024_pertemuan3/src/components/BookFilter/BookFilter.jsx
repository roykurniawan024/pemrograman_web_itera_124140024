import React from 'react';
import PropTypes from 'prop-types';
import './BookFilter.css';

function BookFilter({ filterStatus, onFilterChange, searchTerm, onSearchChange }) {
  return (
    <div className="book-filter">
      <input
        type="text"
        placeholder="Cari judul atau penulis..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select
        value={filterStatus}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="semua">Semua Status</option>
        <option value="milik">Sudah Dimiliki</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
    </div>
  );
}

BookFilter.propTypes = {
  filterStatus: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default BookFilter;
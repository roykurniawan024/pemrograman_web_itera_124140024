import React from 'react';
import { useBooks } from '../../context/BookContext';
import './Stats.css';

function Stats() {
  const { stats, books } = useBooks();

  return (
    <main className="container stats-page">
      <div className="page-header">
        <div>
          <h1>Statistik Koleksi Buku</h1>
          <p>Ringkasan jumlah buku berdasarkan status penyimpanan</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Total Koleksi</span>
          <strong className="stat-number">{stats.total}</strong>
          <span className="stat-desc">Seluruh buku tercatat</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Sudah Dimiliki</span>
          <strong className="stat-number">{stats.milik}</strong>
          <span className="stat-desc">Tersimpan di koleksi pribadi</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Sedang Dibaca</span>
          <strong className="stat-number">{stats.baca}</strong>
          <span className="stat-desc">Dalam proses pembacaan</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Ingin Dibeli</span>
          <strong className="stat-number">{stats.beli}</strong>
          <span className="stat-desc">Daftar rencana pembelian</span>
        </div>
      </div>

      <div className="stats-table-card">
        <h2>Tabel Rekapitulasi Buku</h2>
        {books.length === 0 ? (
          <p className="empty-table-text">
            Belum ada buku yang tersimpan di dalam sistem.
          </p>
        ) : (
          <table className="stats-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Judul Buku</th>
                <th>Penulis</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book.id}>
                  <td>{index + 1}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>
                    {book.status === 'milik' && 'Sudah Dimiliki'}
                    {book.status === 'baca' && 'Sedang Dibaca'}
                    {book.status === 'beli' && 'Ingin Dibeli'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}

export default Stats;
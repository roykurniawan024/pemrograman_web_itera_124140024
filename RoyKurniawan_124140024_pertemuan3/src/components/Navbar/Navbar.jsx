import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <Link to="/">Manajemen Buku</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
            >
              Koleksi Buku
            </Link>
          </li>
          <li>
            <Link
              to="/stats"
              className={location.pathname === '/stats' ? 'active' : ''}
            >
              Statistik
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
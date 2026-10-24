import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookList from './BookList';
import BookForm from '../BookForm/BookForm';
import BookFilter from '../BookFilter/BookFilter';

const mockFn = typeof vi !== 'undefined' ? vi.fn : jest.fn;
const clearMocks = typeof vi !== 'undefined' ? vi.clearAllMocks : jest.clearAllMocks;

describe('Komponen Manajemen Buku', () => {
  const dummyBooks = [
    {
      id: 1,
      title: 'Belajar React Dasar',
      author: 'Roy Kurniawan',
      status: 'Sedang Dibaca',
    },
  ];

  const mockEdit = mockFn();
  const mockDelete = mockFn();
  const mockAdd = mockFn();

  beforeEach(() => {
    clearMocks();
  });

  test('merender judul dan penulis buku dengan benar', () => {
    render(<BookList books={dummyBooks} onEdit={mockEdit} onDelete={mockDelete} />);
    expect(screen.getByText('Belajar React Dasar')).toBeInTheDocument();
    expect(screen.getByText('Penulis: Roy Kurniawan')).toBeInTheDocument();
  });

  test('memanggil fungsi onDelete saat tombol hapus diklik', () => {
    render(<BookList books={dummyBooks} onEdit={mockEdit} onDelete={mockDelete} />);
    const deleteBtn = screen.getByText('Hapus');
    fireEvent.click(deleteBtn);
    expect(mockDelete).toHaveBeenCalledWith(1);
  });

  test('memanggil fungsi onEdit saat tombol edit diklik', () => {
    render(<BookList books={dummyBooks} onEdit={mockEdit} onDelete={mockDelete} />);
    const editBtn = screen.getByText('Edit');
    fireEvent.click(editBtn);
    expect(mockEdit).toHaveBeenCalledWith(dummyBooks[0]);
  });

  test('menampilkan pesan error saat form disubmit kosong', () => {
    render(<BookForm onAddBook={mockAdd} />);
    const submitBtn = screen.getByRole('button', { name: /Tambah/i });
    fireEvent.click(submitBtn);
    expect(screen.getByText('Judul buku dan nama penulis wajib diisi!')).toBeInTheDocument();
  });

  test('memanggil onSearchChange saat input pencarian diketik', () => {
    const mockFilterChange = mockFn();
    const mockSearchChange = mockFn();

    render(
      <BookFilter
        filterStatus="semua"
        onFilterChange={mockFilterChange}
        searchTerm=""
        onSearchChange={mockSearchChange}
      />
    );

    const searchInput = screen.getByPlaceholderText('Cari judul atau penulis...');
    fireEvent.change(searchInput, { target: { value: 'React' } });
    expect(mockSearchChange).toHaveBeenCalledWith('React');
  });
});
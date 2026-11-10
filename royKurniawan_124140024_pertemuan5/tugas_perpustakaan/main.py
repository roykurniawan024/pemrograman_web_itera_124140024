from library_item import Book, Magazine
from member import Member
from library import Library


# Program utama untuk menguji fungsionalitas sistem perpustakaan
if __name__ == "__main__":
    perpus = Library("Perpustakaan ITERA")

    # 1. Membuat objek Book dan Magazine
    buku1 = Book("B001", "Pemrograman Web Python", 2024, "Ahmad Fadhil", 320)
    buku2 = Book("B002", "Struktur Data dan Algoritma", 2023, "Budi Santoso", 410)
    majalah1 = Magazine("M001", "InfoKomputer Edisi AI", 2025, 12, "Gramedia Majalah")
    majalah2 = Magazine("M002", "National Geographic Sains", 2024, 8, "NatGeo Indonesia")

    # 2. Menambahkan item ke perpustakaan
    print("--- Menambahkan Koleksi Item ---")
    perpus.tambah_item(buku1)
    perpus.tambah_item(buku2)
    perpus.tambah_item(majalah1)
    perpus.tambah_item(majalah2)

    # 3. Menampilkan daftar item yang tersedia
    perpus.tampilkan_item_tersedia()

    # 4. Mencari item berdasarkan judul atau ID
    perpus.cari_item("Python")
    perpus.cari_item("M001")
    perpus.cari_item("Fisika")

    # 5. Demonstrasi peminjaman dan perubahan status ketersediaan item
    print("\n--- Simulasi Peminjaman & Pengembalian ---")
    mhs = Member("124140024", "Roy Kurniawan")
    print(mhs)

    mhs.pinjam_item(buku1)
    mhs.pinjam_item(majalah1)

    # Cek katalog yang tersedia setelah 2 item dipinjam
    perpus.tampilkan_item_tersedia()

    # Mengembalikan item dan menghitung denda keterlambatan (Polymorphism)
    print("\n--- Proses Pengembalian ---")
    mhs.kembalikan_item(buku1, hari_terlambat=3)
    mhs.kembalikan_item(majalah1, hari_terlambat=0)

    # Cek katalog kembali setelah item dikembalikan
    perpus.tampilkan_item_tersedia()
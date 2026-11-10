from abc import ABC, abstractmethod


# Abstract class dasar untuk semua item di perpustakaan
class LibraryItem(ABC):
    def __init__(self, id_item: str, judul: str, tahun: int):
        self._id_item = id_item
        self._judul = judul
        self._tahun = tahun
        self.__is_dipinjam = False

    # Property getter untuk membaca status peminjaman item
    @property
    def is_dipinjam(self) -> bool:
        return self.__is_dipinjam

    # Property setter untuk mengubah status peminjaman dengan validasi
    @is_dipinjam.setter
    def is_dipinjam(self, status: bool):
        if not isinstance(status, bool):
            raise TypeError("Status peminjaman harus berupa boolean!")
        self.__is_dipinjam = status

    # Abstract method untuk menampilkan detail informasi item
    @abstractmethod
    def get_detail(self) -> str:
        pass

    # Abstract method untuk menghitung denda keterlambatan
    @abstractmethod
    def hitung_denda(self, hari_terlambat: int) -> float:
        pass

    def __str__(self) -> str:
        status = "Dipinjam" if self.__is_dipinjam else "Tersedia"
        return f"[{self._id_item}] {self._judul} ({self._tahun}) - {status}"


# Subclass untuk item bertipe Buku
class Book(LibraryItem):
    def __init__(self, id_item: str, judul: str, tahun: int, penulis: str, jumlah_halaman: int):
        super().__init__(id_item, judul, tahun)
        self.penulis = penulis
        self.jumlah_halaman = jumlah_halaman

    # Implementasi method abstract get_detail khusus Buku
    def get_detail(self) -> str:
        status = "Dipinjam" if self.is_dipinjam else "Tersedia"
        return f"[Buku] ID: {self._id_item} | Judul: {self._judul} ({self._tahun}) | Penulis: {self.penulis} | Hal: {self.jumlah_halaman} | Status: {status}"

    # Implementasi perhitungan denda Buku (Rp 2.000 per hari)
    def hitung_denda(self, hari_terlambat: int) -> float:
        if hari_terlambat > 0:
            return hari_terlambat * 2000.0
        return 0.0


# Subclass untuk item bertipe Majalah
class Magazine(LibraryItem):
    def __init__(self, id_item: str, judul: str, tahun: int, edisi: int, penerbit: str):
        super().__init__(id_item, judul, tahun)
        self.edisi = edisi
        self.penerbit = penerbit

    # Implementasi method abstract get_detail khusus Majalah
    def get_detail(self) -> str:
        status = "Dipinjam" if self.is_dipinjam else "Tersedia"
        return f"[Majalah] ID: {self._id_item} | Judul: {self._judul} ({self._tahun}) | Edisi: {self.edisi} | Penerbit: {self.penerbit} | Status: {status}"

    # Implementasi perhitungan denda Majalah (Rp 1.000 per hari)
    def hitung_denda(self, hari_terlambat: int) -> float:
        if hari_terlambat > 0:
            return hari_terlambat * 1000.0
        return 0.0
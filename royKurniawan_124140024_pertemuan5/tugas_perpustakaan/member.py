from library_item import LibraryItem

# Class untuk merepresentasikan anggota perpustakaan
class Member:
    def __init__(self, id_member: str, nama: str):
        self.id_member = id_member
        self.nama = nama
        self.__daftar_pinjaman = []

    # Property getter untuk melihat daftar item yang sedang dipinjam
    @property
    def daftar_pinjaman(self) -> list:
        return self.__daftar_pinjaman

    # Method untuk mencatat peminjaman item oleh anggota
    def pinjam_item(self, item: LibraryItem):
        if not item.is_dipinjam:
            item.is_dipinjam = True
            self.__daftar_pinjaman.append(item)
            print(f"[{self.nama}] Berhasil meminjam: {item._judul}")
        else:
            print(f"Gagal: '{item._judul}' sedang dipinjam!")

    # Method untuk mengembalikan item yang dipinjam anggota
    def kembalikan_item(self, item: LibraryItem, hari_terlambat: int = 0):
        if item in self.__daftar_pinjaman:
            item.is_dipinjam = False
            self.__daftar_pinjaman.remove(item)
            denda = item.hitung_denda(hari_terlambat)
            print(f"[{self.nama}] Mengembalikan: {item._judul} | Denda: Rp {denda:,.2f}")
        else:
            print(f"Gagal: '{item._judul}' tidak ada dalam daftar pinjaman {self.nama}!")

    def __str__(self) -> str:
        return f"Member: {self.nama} (ID: {self.id_member}) | Dipinjam: {len(self.__daftar_pinjaman)} item"
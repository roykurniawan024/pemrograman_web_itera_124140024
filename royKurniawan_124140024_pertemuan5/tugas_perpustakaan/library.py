from library_item import LibraryItem

# Class untuk menyimpan dan mengelola koleksi item perpustakaan
class Library:
    def __init__(self, nama_perpustakaan: str):
        self.nama_perpustakaan = nama_perpustakaan
        self.__koleksi = []

    # Method untuk menambahkan item ke koleksi perpustakaan
    def tambah_item(self, item: LibraryItem):
        if isinstance(item, LibraryItem):
            self.__koleksi.append(item)
            print(f"[Perpustakaan] Berhasil menambahkan: {item._judul} (ID: {item._id_item})")
        else:
            print("Gagal: Objek bukan merupakan item perpustakaan yang valid!")

    # Method untuk menampilkan daftar item yang tersedia di perpustakaan
    def tampilkan_item_tersedia(self):
        print(f"\n=== Daftar Item Tersedia di {self.nama_perpustakaan} ===")
        ada_item = False
        for item in self.__koleksi:
            if not item.is_dipinjam:
                print(item.get_detail())
                ada_item = True

        if not ada_item:
            print("Tidak ada item yang tersedia saat ini.")

    # Method untuk mencari item berdasarkan judul atau ID
    def cari_item(self, kata_kunci: str):
        print(f"\n--- Hasil Pencarian: '{kata_kunci}' ---")
        ditemukan = False
        for item in self.__koleksi:
            if kata_kunci.lower() in item._judul.lower() or kata_kunci.lower() == item._id_item.lower():
                print(item.get_detail())
                ditemukan = True

        if not ditemukan:
            print(f"Item dengan kata kunci '{kata_kunci}' tidak ditemukan.")
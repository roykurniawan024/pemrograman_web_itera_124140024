kontak = {
    "Roy": "081277889900",
    "Dimas": "085211334455",
    "Nabila": "089655443322"
}

# tambah kontak baru
kontak["Rizky"] = "081366778899"

# cari kontak
print("Nomor Dimas:", kontak.get("Dimas", "Tidak ditemukan"))
print("Nomor Fajar:", kontak.get("Fajar", "Tidak ditemukan"))

# tampilkan semua kontak
print("Daftar Kontak:")
for nama, nomor in kontak.items():
    print(f"- {nama}: {nomor}")
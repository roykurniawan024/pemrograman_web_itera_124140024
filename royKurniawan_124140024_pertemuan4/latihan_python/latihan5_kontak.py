kontak = {
    "Roy": "08127891011",
    "Dimas": "085212345678",
    "Nabila": "089654321234"
}

# tambah kontak baru
kontak["Rizky"] = "081367891012"

# cari kontak
print("Nomor Dimas:", kontak.get("Dimas", "Tidak ditemukan"))
print("Nomor Fajar:", kontak.get("Fajar", "Tidak ditemukan"))

# tampilkan semua kontak
print("Daftar Kontak:")
for nama, nomor in kontak.items():
    print(f"- {nama}: {nomor}")
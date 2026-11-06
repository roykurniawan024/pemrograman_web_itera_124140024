# Dictionary awal daftar kontak
daftar_kontak = {
    "Roy": "081234567890",
    "Budi": "082198765432",
    "Siti": "085311223344",
}

# 1. Menambahkan kontak baru
daftar_kontak["Andi"] = "081355667788"
print("Kontak Andi berhasil ditambahkan.")

# 2. Mencari nomor telepon menggunakan .get()
print("\n--- PENCARIAN KONTAK ---")
print("Nomor Budi :", daftar_kontak.get("Budi", "Kontak tidak ditemukan"))
print("Nomor Dewi :", daftar_kontak.get("Dewi", "Kontak tidak ditemukan"))

# 3. Menampilkan seluruh kontak yang tersimpan
print("\n--- DAFTAR SELURUH KONTAK ---")
for nama, nomor in daftar_kontak.items():
  print(f"- {nama}: {nomor}")
# Class untuk merepresentasikan data buku dan perhitungan diskon
class Buku:
    def __init__(self, judul: str, penulis: str, harga_asli: float, jumlah_halaman: int):
        self.judul = judul
        self.penulis = penulis
        self.harga_asli = harga_asli
        self.jumlah_halaman = jumlah_halaman

    # Method untuk menghitung harga buku setelah potongan diskon
    def hitung_harga_diskon(self, persen: float) -> float:
        if 0.0 <= persen <= 100.0:
            potongan = self.harga_asli * (persen / 100.0)
            return self.harga_asli - potongan
        print("Persentase diskon tidak valid!")
        return self.harga_asli

    # Dunder method untuk mencetak informasi kartu buku
    def __str__(self) -> str:
        return f"Buku: {self.judul} | Penulis: {self.penulis} | Harga: Rp {self.harga_asli:,.2f} | Halaman: {self.jumlah_halaman}"

    # Dunder method untuk mengembalikan jumlah halaman saat len(buku) dipanggil
    def __len__(self) -> int:
        return self.jumlah_halaman

if __name__ == "__main__":
    buku1 = Buku("Pengembangan Aplikasi Web", "Roy Kurniawan", 120000, 320)

    print(buku1)
    print(f"Harga setelah diskon 20%: Rp {buku1.hitung_harga_diskon(20):,.2f}")
    print("Jumlah halaman buku     :", len(buku1))
# Class untuk merepresentasikan data produk di toko
class Produk:
    def __init__(self, nama_produk: str, harga: float, stok: int):
        self.nama_produk = nama_produk
        self.harga = harga
        self.stok = stok

    def tampilkan_info(self):
        print(f"Produk: {self.nama_produk} | Harga: Rp {self.harga:,.2f} | Stok: {self.stok}")

    # Method untuk mengurangi stok saat produk dimasukkan ke keranjang
    def kurangi_stok(self, jumlah: int) -> bool:
        if 0 < jumlah <= self.stok:
            self.stok -= jumlah
            return True
        print(f"Stok {self.nama_produk} tidak mencukupi!")
        return False

# Class untuk menyimpan daftar produk yang akan dibeli
class Keranjang:
    def __init__(self, pemilik: str):
        self.pemilik = pemilik
        self.daftar_produk = []
        self.total_harga = 0.0

    # Method untuk menambahkan produk ke dalam keranjang
    def tambah_produk(self, produk: Produk, jumlah: int):
        if produk.kurangi_stok(jumlah):
            self.daftar_produk.append(produk.nama_produk)
            self.total_harga += produk.harga * jumlah
            print(f"[{self.pemilik}] Menambahkan {jumlah}x {produk.nama_produk} ke keranjang.")

    def hitung_total(self) -> float:
        return self.total_harga

# Class untuk merepresentasikan pengguna dan pembayaran
class Pengguna:
    def __init__(self, username: str, email: str, saldo: float):
        self.username = username
        self.email = email
        self.saldo = saldo

    def isi_saldo(self, nominal: float):
        if nominal > 0:
            self.saldo += nominal
            print(f"[{self.username}] Isi saldo Rp {nominal:,.2f} berhasil. Total saldo: Rp {self.saldo:,.2f}")

    # Method untuk memproses pembayaran keranjang belanja
    def bayar_pesanan(self, keranjang: Keranjang):
        tagihan = keranjang.hitung_total()
        if self.saldo >= tagihan:
            self.saldo -= tagihan
            print(f"[{self.username}] Pembayaran Rp {tagihan:,.2f} berhasil! Sisa saldo: Rp {self.saldo:,.2f}")
        else:
            print(f"[{self.username}] Gagal: Saldo tidak cukup untuk membayar Rp {tagihan:,.2f}!")

if __name__ == "__main__":
    p1 = Produk("Mouse Wireless", 150000, 10)
    p2 = Produk("Keyboard Mekanik", 350000, 5)
    p1.tampilkan_info()
    p2.tampilkan_info()

    user = Pengguna("roy_kurniawan", "roy.124140024@student.itera.ac.id", 400000)
    keranjang = Keranjang(user.username)

    keranjang.tambah_produk(p1, 1)
    keranjang.tambah_produk(p2, 1)

    user.bayar_pesanan(keranjang)
    user.isi_saldo(200000)
    user.bayar_pesanan(keranjang)
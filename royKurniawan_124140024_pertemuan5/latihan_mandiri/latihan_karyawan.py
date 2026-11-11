# Class untuk mengelola data karyawan dan penggajian dengan enkapsulasi
class Karyawan:
    def __init__(self, nama: str, jabatan: str, gaji_pokok: float):
        self.nama = nama
        self.jabatan = jabatan
        self.__gaji_pokok = max(3200000.0, float(gaji_pokok))

    # Property getter untuk membaca nilai gaji pokok
    @property
    def gaji_pokok(self) -> float:
        return self.__gaji_pokok

    # Property setter dengan validasi batas minimal UMR (Rp 3.200.000)
    @gaji_pokok.setter
    def gaji_pokok(self, gaji_baru: float):
        if gaji_baru < 3200000:
            raise ValueError("Gaji pokok tidak boleh di bawah UMR (Rp 3.200.000)!")
        self.__gaji_pokok = float(gaji_baru)
        print(f"Gaji pokok {self.nama} berhasil diperbarui menjadi: Rp {self.__gaji_pokok:,.2f}")

    # Method untuk menghitung gaji bersih setelah dipotong pajak
    def hitung_gaji_bersih(self, pajak_persen: float) -> float:
        potongan_pajak = self.__gaji_pokok * (pajak_persen / 100.0)
        return self.__gaji_pokok - potongan_pajak

if __name__ == "__main__":
    k1 = Karyawan("Roy Kurniawan", "FullStack Developer", 5500000)

    print(f"Nama Karyawan : {k1.nama} ({k1.jabatan})")
    print(f"Gaji Pokok    : Rp {k1.gaji_pokok:,.2f}")
    print(f"Gaji Bersih (Pajak 5%): Rp {k1.hitung_gaji_bersih(5):,.2f}")

    # Uji pembaruan gaji pokok yang valid
    k1.gaji_pokok = 6000000

    # Uji validasi setter ketika gaji di bawah UMR
    try:
        k1.gaji_pokok = 2500000
    except ValueError as err:
        print(f"Validasi Tertangkap: {err}")
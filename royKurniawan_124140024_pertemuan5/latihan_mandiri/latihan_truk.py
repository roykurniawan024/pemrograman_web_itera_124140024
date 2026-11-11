# Superclass dasar Kendaraan
class Kendaraan:
    def __init__(self, merek: str, model: str, tahun: int):
        self.merek = merek
        self.model = model
        self.tahun = tahun
        self.odometer = 0

    def deskripsi(self) -> str:
        return f"{self.merek} {self.model} ({self.tahun})"

# Subclass Truk yang mewarisi class Kendaraan
class Truk(Kendaraan):
    def __init__(self, merek: str, model: str, tahun: int, kapasitas_maksimal_ton: float):
        super().__init__(merek, model, tahun)
        self.kapasitas_maksimal_ton = kapasitas_maksimal_ton
        self.muatan_saat_ini = 0.0

    # Method untuk menambah muatan dengan validasi kapasitas maksimal
    def muat_barang(self, berat_ton: float):
        if berat_ton <= 0:
            print("Berat muatan harus lebih dari 0 ton!")
        elif self.muatan_saat_ini + berat_ton <= self.kapasitas_maksimal_ton:
            self.muatan_saat_ini += berat_ton
            print(f"[{self.merek} {self.model}] Berhasil memuat +{berat_ton} ton. Muatan saat ini: {self.muatan_saat_ini} ton")
        else:
            print(f"[{self.merek} {self.model}] Gagal: Muatan +{berat_ton} ton melebihi kapasitas maksimal ({self.kapasitas_maksimal_ton} ton)!")

    # Method overriding untuk menampilkan deskripsi beserta beban muatan saat ini
    def deskripsi(self) -> str:
        deskripsi_dasar = super().deskripsi()
        return f"{deskripsi_dasar} [Kapasitas: {self.muatan_saat_ini}/{self.kapasitas_maksimal_ton} Ton]"

if __name__ == "__main__":
    truk1 = Truk("Hino", "Ranger 500", 2023, kapasitas_maksimal_ton=15.0)

    print(truk1.deskripsi())
    truk1.muat_barang(8.5)
    truk1.muat_barang(5.0)
    print(truk1.deskripsi())

    # Uji coba muatan melebihi kapasitas
    truk1.muat_barang(4.0)
# Class untuk pengiriman notifikasi melalui Email
class NotifikasiEmail:
    def kirim(self, pesan: str, penerima: str):
        print(f"[Email] Mengirim ke {penerima}: '{pesan}'")

# Class untuk pengiriman notifikasi melalui SMS
class NotifikasiSMS:
    def kirim(self, pesan: str, penerima: str):
        print(f"[SMS] Mengirim ke {penerima}: '{pesan}'")

# Class untuk pengiriman notifikasi melalui WhatsApp
class NotifikasiWhatsApp:
    def kirim(self, pesan: str, penerima: str):
        print(f"[WhatsApp] Mengirim ke {penerima}: '{pesan}'")

# Fungsi polimorfik untuk menyiarkan pesan ke seluruh kanal notifikasi sekaligus
def broadcast_pengumuman(daftar_channel: list, pesan: str, penerima: str = "Seluruh Mahasiswa"):
    print("=== Mengirim Siaran Pengumuman ===")
    for channel in daftar_channel:
        channel.kirim(pesan, penerima)

if __name__ == "__main__":
    email = NotifikasiEmail()
    sms = NotifikasiSMS()
    wa = NotifikasiWhatsApp()

    semua_kanal = [email, sms, wa]
    broadcast_pengumuman(semua_kanal, "Pemberitahuan aksi demo evaluasi program MBG di depan gedung DPRD pukul 09.00 WIB.")
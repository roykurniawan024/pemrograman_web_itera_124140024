import random
import string

def buat_password_acak(panjang: int = 8) -> str:
  """Menghasilkan password acak dari kombinasi huruf dan angka."""
  kumpulan_karakter = string.ascii_letters + string.digits
  password = ""

  for _ in range(panjang):
    password += random.choice(kumpulan_karakter)

  return password

if __name__ == "__main__":
  print("[TEST MODUL] Contoh password:", buat_password_acak())
def validasi_password(password: str) -> bool:
  """Mengembalikan True jika panjang password minimal 8 karakter

  dan mengandung setidaknya satu angka.
  """
  if len(password) < 8:
    return False

  ada_angka = False
  for karakter in password:
    if karakter.isdigit():
      ada_angka = True
      break

  return ada_angka


# Menguji fungsi dengan beberapa contoh password
print("--- UJI VALIDASI PASSWORD ---")
print("1. 'itera123'    :", validasi_password("itera123"))  # True (8 karakter & ada angka)
print("2. 'rahasia'     :", validasi_password("rahasia"))  # False (kurang dari 8 & tanpa angka)
print("3. 'informatika' :", validasi_password("informatika"))  # False (8+ karakter, tapi tanpa angka)
print("4. 'admin1'      :", validasi_password("admin1"))  # False (ada angka, tapi kurang dari 8)
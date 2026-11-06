angka_rahasia = 7

print("--- GAME TEBAK ANGKA RAHASIA ---")

while True:
  tebakan = int(input("Masukkan tebakan angka: "))

  if tebakan < angka_rahasia:
    print("Terlalu kecil!")
  elif tebakan > angka_rahasia:
    print("Terlalu besar!")
  else:
    print("Selamat, tebakan benar!")
    break
# 1. Variabel konstanta matematika
PI = 3.14159

# 2. Menghitung luas dan keliling Persegi
def luas_persegi(sisi: float) -> float:
  """Mengembalikan luas persegi (sisi * sisi)"""
  return sisi * sisi

def keliling_persegi(sisi: float) -> float:
  """Mengembalikan keliling persegi (4 * sisi)"""
  return 4 * sisi

# 3. Menghitung luas dan keliling Persegi Panjang
def luas_persegi_panjang(panjang: float, lebar: float) -> float:
  """Mengembalikan luas persegi panjang (panjang * lebar)"""
  return panjang * lebar

def keliling_persegi_panjang(panjang: float, lebar: float) -> float:
  """Mengembalikan keliling persegi panjang (2 * (panjang + lebar))"""
  return 2 * (panjang + lebar)

# 4. Menghitung luas dan keliling Lingkaran
def luas_lingkaran(jari_jari: float) -> float:
  """Mengembalikan luas lingkaran (PI * r^2)"""
  return PI * (jari_jari**2)

def keliling_lingkaran(jari_jari: float) -> float:
  """Mengembalikan keliling lingkaran (2 * PI * r)"""
  return 2 * PI * jari_jari

# 5. Konversi temperatur suhu
def celsius_ke_fahrenheit(celsius: float) -> float:
  """Mengonversi suhu dari Celsius ke Fahrenheit"""
  return (celsius * 9 / 5) + 32

def celsius_ke_kelvin(celsius: float) -> float:
  """Mengonversi suhu dari Celsius ke Kelvin"""
  return celsius + 273.15

# Blok testing mandiri modul
if __name__ == "__main__":
  print("[TEST MODUL] Menjalankan uji coba internal math_operations:")
  print("Test Luas Persegi (s=4) =", luas_persegi(4))
  print("Test 100 C ke Fahrenheit =", celsius_ke_fahrenheit(100))
# 1. Menghitung nilai BMI dan menentukan kategori
def hitung_bmi(berat: float, tinggi: float) -> float:
  """Menghitung nilai BMI berdasarkan berat badan (kg) dan tinggi badan (m)."""
  bmi = berat / (tinggi * tinggi)
  return bmi

def tentukan_kategori(bmi: float) -> str:
  """Menentukan kategori status berat badan menggunakan if-elif-else."""
  if bmi < 18.5:
    kategori = "Berat badan kurang"
  elif bmi >= 18.5 and bmi < 25:
    kategori = "Berat badan normal"
  elif bmi >= 25 and bmi < 30:
    kategori = "Berat badan berlebih"
  else:
    kategori = "Obesitas"
  return kategori

# 2. Menerima input berat dan tinggi badan
print("--- KALKULATOR BODY MASS INDEX (BMI) ---")
berat_str = input("Masukkan berat badan (kg) : ")
tinggi_str = input("Masukkan tinggi badan (m) : ")

berat_badan = float(berat_str)
tinggi_badan = float(tinggi_str)

# 3. Menghitung BMI dan mencari kategori
nilai_bmi = hitung_bmi(berat_badan, tinggi_badan)
status_bmi = tentukan_kategori(nilai_bmi)

# 4. Menampilkan hasil perhitungan
print("\n--- HASIL PERHITUNGAN BMI ---")
print(f"Berat Badan     : {berat_badan} kg")
print(f"Tinggi Badan    : {tinggi_badan} m")
print(f"Nilai BMI       : {nilai_bmi:.2f}")
print(f"Kategori Status : {status_bmi}")
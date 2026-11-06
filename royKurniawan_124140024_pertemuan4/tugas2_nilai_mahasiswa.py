# 1. Menghitung nilai akhir dan menentukan grade
def hitung_nilai_akhir(uts: float, uas: float, tugas: float) -> float:
  """Menghitung nilai akhir berdasarkan bobot 30% UTS, 40% UAS, dan 30% Tugas."""
  nilai_akhir = (0.30 * uts) + (0.40 * uas) + (0.30 * tugas)
  return nilai_akhir

def tentukan_grade(nilai_akhir: float) -> str:
  """Menentukan grade nilai mahasiswa dari A sampai E."""
  if nilai_akhir >= 80:
    return "A"
  elif nilai_akhir >= 70:
    return "B"
  elif nilai_akhir >= 60:
    return "C"
  elif nilai_akhir >= 50:
    return "D"
  else:
    return "E"

# 2. Membuat list yang memuat 5 dictionary data mahasiswa
data_mahasiswa = [
    {
        "nama": "Roy Kurniawan",
        "nim": "124140024",
        "nilai_uts": 85,
        "nilai_uas": 90,
        "nilai_tugas": 88,
    },
    {
        "nama": "Ahmad Fahmi Faizi",
        "nim": "124140001",
        "nilai_uts": 75,
        "nilai_uas": 78,
        "nilai_tugas": 80,
    },
    {
        "nama": "Jepri Triyanto",
        "nim": "124140002",
        "nilai_uts": 65,
        "nilai_uas": 60,
        "nilai_tugas": 70,
    },
    {
        "nama": "Feri Sugiyanto",
        "nim": "124140003",
        "nilai_uts": 55,
        "nilai_uas": 50,
        "nilai_tugas": 60,
    },
    {
        "nama": "Latifatul Karomah",
        "nim": "124140004",
        "nilai_uts": 40,
        "nilai_uas": 45,
        "nilai_tugas": 50,
    },
]

# 3. Menghitung nilai akhir dan grade mahasiswa
for mhs in data_mahasiswa:
  akhir = hitung_nilai_akhir(
      mhs["nilai_uts"], mhs["nilai_uas"], mhs["nilai_tugas"]
  )
  mhs["nilai_akhir"] = akhir
  mhs["grade"] = tentukan_grade(akhir)

# 4. Menampilkan seluruh data mahasiswa
print("\n--- DAFTAR NILAI MAHASISWA ---")
print("-" * 68)
print(
    f"| {'No':<2} | {'Nama Mahasiswa':<18} | {'NIM':<10} | {'Nilai Akhir':<11}"
    f" | {'Grade':<5} |"
)
print("-" * 68)

for nomor, mhs in enumerate(data_mahasiswa, start=1):
  print(
      f"| {nomor:<2} | {mhs['nama']:<18} | {mhs['nim']:<10} |"
      f" {mhs['nilai_akhir']:<11.2f} | {mhs['grade']:<5} |"
  )

print("-" * 68)

# 5. Mencari mahasiswa dengan nilai akhir tertinggi dan terendah
mhs_tertinggi = max(data_mahasiswa, key=lambda m: m["nilai_akhir"])
mhs_terendah = min(data_mahasiswa, key=lambda m: m["nilai_akhir"])

print("\n--- INFORMASI NILAI TERTINGGI & TERENDAH ---")
print(
    f"Nilai Tertinggi : {mhs_tertinggi['nama']} ({mhs_tertinggi['nim']}) -"
    f" {mhs_tertinggi['nilai_akhir']:.2f} (Grade {mhs_tertinggi['grade']})"
)
print(
    f"Nilai Terendah  : {mhs_terendah['nama']} ({mhs_terendah['nim']}) -"
    f" {mhs_terendah['nilai_akhir']:.2f} (Grade {mhs_terendah['grade']})"
)
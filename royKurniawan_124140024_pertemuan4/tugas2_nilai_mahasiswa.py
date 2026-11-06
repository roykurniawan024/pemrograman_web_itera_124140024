def hitung_nilai_akhir(uts, uas, tugas):
    """Menghitung nilai akhir mahasiswa"""
    return (0.30 * uts) + (0.40 * uas) + (0.30 * tugas)

def tentukan_grade(nilai):
    """Menentukan grade nilai A sampai E"""
    if nilai >= 80:
        return "A"
    elif nilai >= 70:
        return "B"
    elif nilai >= 60:
        return "C"
    elif nilai >= 50:
        return "D"
    else:
        return "E"

mahasiswa = [
    {"nama": "Roy Kurniawan", "nim": "124140024", "nilai_uts": 84, "nilai_uas": 88, "nilai_tugas": 90},
    {"nama": "Latifatul Karomah", "nim": "124140015", "nilai_uts": 76, "nilai_uas": 72, "nilai_tugas": 80},
    {"nama": "Dimas Saputra", "nim": "124140031", "nilai_uts": 62, "nilai_uas": 68, "nilai_tugas": 65},
    {"nama": "Nabila Putri", "nim": "124140042", "nilai_uts": 54, "nilai_uas": 58, "nilai_tugas": 55},
    {"nama": "Rizky Ramadhan", "nim": "124140058", "nilai_uts": 45, "nilai_uas": 40, "nilai_tugas": 50}
]

# hitung nilai akhir dan grade
for mhs in mahasiswa:
    na = hitung_nilai_akhir(mhs["nilai_uts"], mhs["nilai_uas"], mhs["nilai_tugas"])
    mhs["nilai_akhir"] = na
    mhs["grade"] = tentukan_grade(na)

# tampilkan tabel
print("-" * 60)
print(f"| {'Nama':<18} | {'NIM':<10} | {'Nilai Akhir':<11} | {'Grade':<5} |")
print("-" * 60)
for mhs in mahasiswa:
    print(f"| {mhs['nama']:<18} | {mhs['nim']:<10} | {mhs['nilai_akhir']:<11.2f} | {mhs['grade']:<5} |")
print("-" * 60)

# cari nilai tertinggi dan terendah
tertinggi = max(mahasiswa, key=lambda x: x["nilai_akhir"])
terendah = min(mahasiswa, key=lambda x: x["nilai_akhir"])

print(f"Nilai tertinggi: {tertinggi['nama']} ({tertinggi['nim']}) - {tertinggi['nilai_akhir']:.2f} ({tertinggi['grade']})")
print(f"Nilai terendah: {terendah['nama']} ({terendah['nim']}) - {terendah['nilai_akhir']:.2f} ({terendah['grade']})")
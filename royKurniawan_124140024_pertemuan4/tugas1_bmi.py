def hitung_bmi(berat, tinggi):
    """Menghitung nilai BMI dari berat dan tinggi"""
    return berat / (tinggi * tinggi)

def cek_kategori(bmi):
    """Menentukan kategori status berat badan"""
    if bmi < 18.5:
        return "Berat badan kurang"
    elif bmi >= 18.5 and bmi < 25:
        return "Berat badan normal"
    elif bmi >= 25 and bmi < 30:
        return "Berat badan berlebih"
    else:
        return "Obesitas"

berat = float(input("Masukkan berat badan (kg): "))
tinggi = float(input("Masukkan tinggi badan (m): "))

bmi = hitung_bmi(berat, tinggi)
kategori = cek_kategori(bmi)

print(f"Nilai BMI: {bmi:.2f}")
print(f"Kategori: {kategori}")
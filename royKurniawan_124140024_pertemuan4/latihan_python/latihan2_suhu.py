print("--- KALKULATOR KONVERSI SUHU ---")

# Menerima input suhu Celcius dan mengubahnya ke float
celcius = float(input("Masukkan suhu dalam derajat Celcius: "))

# Menghitung konversi ke Fahrenheit dan Kelvin
fahrenheit = (celcius * 9 / 5) + 32
kelvin = celcius + 273.15

# Menampilkan hasil konversi dengan 2 angka di belakang koma
print("\n--- HASIL KONVERSI ---")
print(f"Celcius    : {celcius:.2f} C")
print(f"Fahrenheit : {fahrenheit:.2f} F")
print(f"Kelvin     : {kelvin:.2f} K")
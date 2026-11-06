# 1. Cara impor pertama: Mengimpor modul dengan alias
import math_operations as mo

# 2. Cara impor kedua: Mengimpor fungsi dan konstanta spesifik langsung
from math_operations import PI, celsius_ke_fahrenheit, celsius_ke_kelvin

print("--- 1. PERHITUNGAN GEOMETRI ---")
print(f"Nilai Konstanta PI : {PI}")

# Uji Persegi
sisi = 5
print(f"\nPersegi (sisi = {sisi}):")
print(f"- Luas Persegi     : {mo.luas_persegi(sisi)}")
print(f"- Keliling Persegi : {mo.keliling_persegi(sisi)}")

# Uji Persegi Panjang
panjang = 10
lebar = 4
print(f"\nPersegi Panjang (panjang = {panjang}, lebar = {lebar}):")
print(f"- Luas Persegi Panjang     : {mo.luas_persegi_panjang(panjang, lebar)}")
print(
    f"- Keliling Persegi Panjang : {mo.keliling_persegi_panjang(panjang, lebar)}"
)

# Uji Lingkaran
r = 7
print(f"\nLingkaran (jari-jari = {r}):")
print(f"- Luas Lingkaran     : {mo.luas_lingkaran(r):.2f}")
print(f"- Keliling Lingkaran : {mo.keliling_lingkaran(r):.2f}")

print("\n--- 2. KONVERSI TEMPERATUR SUHU ---")
suhu_c1 = 25
suhu_c2 = 100

print(f"Suhu {suhu_c1} C -> Fahrenheit : {celsius_ke_fahrenheit(suhu_c1):.2f} F")
print(f"Suhu {suhu_c1} C -> Kelvin     : {celsius_ke_kelvin(suhu_c1):.2f} K")
print(f"Suhu {suhu_c2} C -> Fahrenheit : {celsius_ke_fahrenheit(suhu_c2):.2f} F")
print(f"Suhu {suhu_c2} C -> Kelvin     : {celsius_ke_kelvin(suhu_c2):.2f} K")
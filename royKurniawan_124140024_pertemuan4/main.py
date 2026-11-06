import math_operations as mo
from math_operations import PI, celsius_ke_fahrenheit, celsius_ke_kelvin

print("Nilai PI:", PI)

# persegi
sisi = 8
print(f"Luas persegi (s={sisi}): {mo.luas_persegi(sisi)}")
print(f"Keliling persegi (s={sisi}): {mo.keliling_persegi(sisi)}")

# persegi panjang
p = 14
l = 6
print(f"Luas persegi panjang ({p}x{l}): {mo.luas_persegi_panjang(p, l)}")
print(f"Keliling persegi panjang ({p}x{l}): {mo.keliling_persegi_panjang(p, l)}")

# lingkaran
r = 10
print(f"Luas lingkaran (r={r}): {mo.luas_lingkaran(r):.2f}")
print(f"Keliling lingkaran (r={r}): {mo.keliling_lingkaran(r):.2f}")

# konversi suhu
suhu1 = 32
suhu2 = 75
print(f"{suhu1} C ke Fahrenheit: {celsius_ke_fahrenheit(suhu1):.2f} F")
print(f"{suhu1} C ke Kelvin: {celsius_ke_kelvin(suhu1):.2f} K")
print(f"{suhu2} C ke Fahrenheit: {celsius_ke_fahrenheit(suhu2):.2f} F")
print(f"{suhu2} C ke Kelvin: {celsius_ke_kelvin(suhu2):.2f} K")
PI = 3.14159

def luas_persegi(sisi):
    """Menghitung luas persegi"""
    return sisi * sisi

def keliling_persegi(sisi):
    """Menghitung keliling persegi"""
    return 4 * sisi

def luas_persegi_panjang(p, l):
    """Menghitung luas persegi panjang"""
    return p * l

def keliling_persegi_panjang(p, l):
    """Menghitung keliling persegi panjang"""
    return 2 * (p + l)

def luas_lingkaran(r):
    """Menghitung luas lingkaran"""
    return PI * (r ** 2)

def keliling_lingkaran(r):
    """Menghitung keliling lingkaran"""
    return 2 * PI * r

def celsius_ke_fahrenheit(c):
    """Konversi suhu Celsius ke Fahrenheit"""
    return (c * 9 / 5) + 32

def celsius_ke_kelvin(c):
    """Konversi suhu Celsius ke Kelvin"""
    return c + 273.15
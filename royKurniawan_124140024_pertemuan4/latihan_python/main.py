import password_gen as pg

print("--- GENERATOR PASSWORD ACAK ---")
print("Password default (8 karakter) :", pg.buat_password_acak())
print("Password 12 karakter          :", pg.buat_password_acak(12))
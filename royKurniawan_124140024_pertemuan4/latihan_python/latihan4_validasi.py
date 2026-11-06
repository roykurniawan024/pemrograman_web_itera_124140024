def validasi_password(password):
    if len(password) < 8:
        return False
    for huruf in password:
        if huruf.isdigit():
            return True
    return False

print("roykurniawan24:", validasi_password("roykurniawan24"))
print("lampung:", validasi_password("lampung"))
print("informatika:", validasi_password("informatika"))
print("paw123:", validasi_password("paw123"))
from abc import ABC, abstractmethod

# Abstract class kontrak untuk layanan penyimpanan berkas
class FileStorage(ABC):
    @abstractmethod
    def upload_file(self, nama_file: str, data_bytes: bytes) -> bool:
        pass

    @abstractmethod
    def download_file(self, nama_file: str) -> bytes:
        pass

# Subclass implementasi penyimpanan di folder disk lokal
class LocalDiskStorage(FileStorage):
    def __init__(self, folder_lokal: str):
        self.folder_lokal = folder_lokal

    # Implementasi method upload ke penyimpanan lokal
    def upload_file(self, nama_file: str, data_bytes: bytes) -> bool:
        print(f"[Local Disk] Menyimpan '{nama_file}' ({len(data_bytes)} bytes) ke folder {self.folder_lokal}")
        return True

    # Implementasi method download dari penyimpanan lokal
    def download_file(self, nama_file: str) -> bytes:
        print(f"[Local Disk] Membaca '{nama_file}' dari folder {self.folder_lokal}")
        return b"Data file dari disk lokal"

# Subclass implementasi penyimpanan di server cloud
class CloudStorage(FileStorage):
    def __init__(self, nama_server: str):
        self.nama_server = nama_server

    # Implementasi method upload ke server cloud
    def upload_file(self, nama_file: str, data_bytes: bytes) -> bool:
        print(f"[Cloud Server] Mengunggah '{nama_file}' ({len(data_bytes)} bytes) ke server {self.nama_server}")
        return True

    # Implementasi method download dari server cloud
    def download_file(self, nama_file: str) -> bytes:
        print(f"[Cloud Server] Mengunduh '{nama_file}' dari server {self.nama_server}")
        return b"Data file dari cloud server"

if __name__ == "__main__":
    lokal = LocalDiskStorage("D:/data_lokal")
    cloud = CloudStorage("AWS-S3-ITERA")

    lokal.upload_file("laporan_praktikum.pdf", b"isi_dokumen_pdf")
    print("Hasil unduh:", lokal.download_file("laporan_praktikum.pdf"))

    print()
    cloud.upload_file("backup_database.sql", b"isi_backup_sql_data")
    print("Hasil unduh:", cloud.download_file("backup_database.sql"))
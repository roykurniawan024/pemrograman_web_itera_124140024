// 1 & 2. Class Product dengan Getter, Setter, dan Inheritance
class Product {
  constructor(name, price) {
    this.name = name;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    if (newPrice < 0) {
      console.log("   [Error Setter] Harga tidak boleh bernilai negatif!");
      return;
    }
    this._price = newPrice;
  }

  getInfo() {
    return `${this.name} - Rp${this.price.toLocaleString("id-ID")}`;
  }
}

class DigitalProduct extends Product {
  constructor(name, price, downloadUrl, fileSizeMb) {
    super(name, price); 
    this.downloadUrl = downloadUrl;
    this.fileSizeMb = fileSizeMb;
  }

  getInfo() {
    return `${super.getInfo()} [Digital: ${this.fileSizeMb} MB, Link: ${this.downloadUrl}]`;
  }
}

class PhysicalProduct extends Product {
  constructor(name, price, weightKg) {
    super(name, price);
    this.weightKg = weightKg;
  }

  getInfo() {
    return `${super.getInfo()} [Fisik: Berat ${this.weightKg} kg]`;
  }
}

console.log("1 & 2. Hasil Class Inheritance, Getter & Setter:");
const ebook = new DigitalProduct("E-Book Modul PAW ITERA", 50000, "https://itera.ac.id/modul-paw.pdf", 12);
const keyboard = new PhysicalProduct("Mechanical Keyboard RGB", 450000, 1.2);

console.log("   Digital  :", ebook.getInfo());
console.log("   Physical :", keyboard.getInfo());

keyboard.price = 425000; 
console.log("   Harga keyboard setelah diupdate via setter:", `Rp${keyboard.price.toLocaleString("id-ID")}`);
keyboard.price = -10000; 
console.log("");

// 3. Computed Property Names untuk Membuat Object dengan Dynamic Keys
const kategori = "itera";
const idBarang = 101;
const waktuSekarang = "dibuat_pada";

const produkDinamis = {
  [`item_${idBarang}`]: "Buku Catatan Pemrograman Web",
  [`kategori_${kategori}`]: "Perlengkapan Kuliah",
  [waktuSekarang]: new Date().toLocaleDateString("id-ID")
};

console.log("3. Object dengan Computed Property Names (Dynamic Keys):");
console.log(produkDinamis);
console.log("");

// 4. Combine Default Parameters dengan Destructuring dalam Function Parameter
const tampilkanProfilMhs = ({
  nama = "Mahasiswa ITERA",
  nim = "124000000",
  prodi = "Teknik Informatika",
  aktif = true
} = {}) => {
  return `${nama} (${nim}) | Prodi: ${prodi} | Status: ${aktif ? "Aktif" : "Cuti"}`;
};

console.log("4. Kombinasi Default Parameters + Destructuring:");
// Pemanggilan dengan data kustom
console.log("   Data Kustom  :", tampilkanProfilMhs({ nama: "Roy Kurniawan", nim: "124140024" }));
// Pemanggilan menggunakan seluruh nilai default parameter
console.log("   Data Default :", tampilkanProfilMhs());
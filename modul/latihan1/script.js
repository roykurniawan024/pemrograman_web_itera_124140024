// =========================================================================
// 1. Variabel Data Diri 
// =========================================================================
const nama = "Roy Kurniawan";
let umur = 21;
const kotaAsal = "Lampung";

console.log("=== 1. Data Diri ===");
console.log(`Nama: ${nama}, Umur: ${umur} tahun, Kota Asal: ${kotaAsal}`);

// =========================================================================
// 2. Program Pengecekan Kelulusan
// =========================================================================
const nilaiMataKuliah = 70;
let statusKelulusan = "";

if (nilaiMataKuliah >= 70) {
    statusKelulusan = "Lulus";
} else {
    statusKelulusan = "Tidak Lulus";
}

console.log("\n=== 2. Pengecekan Kelulusan ===");
console.log(`Nilai akhir: ${nilaiMataKuliah} -> Status: ${statusKelulusan}`);

// =========================================================================
// 3. Program Kategori Umur
// =========================================================================
let kategoriUmur = "";

if (umur < 12) {
    kategoriUmur = "Anak-anak";
} else if (umur >= 12 && umur <= 17) {
    kategoriUmur = "Remaja";
} else if (umur >= 18 && umur <= 59) {
    kategoriUmur = "Dewasa";
} else {
    kategoriUmur = "Lansia";
}

console.log("\n=== 3. Kategori Umur ===");
console.log(`Di umur ${umur} tahun, Anda termasuk kategori: ${kategoriUmur}`);

// =========================================================================
// 4. Switch-Case Konversi Angka Hari ke Bahasa Inggris
// =========================================================================
const angkaHari = 6; 
let namaHariInggris = "";

switch (angkaHari) {
    case 1: namaHariInggris = "Monday"; break;
    case 2: namaHariInggris = "Tuesday"; break;
    case 3: namaHariInggris = "Wednesday"; break;
    case 4: namaHariInggris = "Thursday"; break;
    case 5: namaHariInggris = "Friday"; break;
    case 6: namaHariInggris = "Saturday"; break;
    case 7: namaHariInggris = "Sunday"; break;
    default: namaHariInggris = "Invalid Day";
}

console.log("\n=== 4. Konversi Hari ===");
console.log(`Angka ${angkaHari} dalam bahasa Inggris adalah hari: ${namaHariInggris}`);

// =========================================================================
// 5. Kalkulator Sederhana Grade Nilai dengan Ternary Operator
// =========================================================================
const skorUjian = 78;
const grade = skorUjian >= 75 ? "A" :
              skorUjian >= 65 ? "B" :
              skorUjian >= 55 ? "C" :
              skorUjian <= 50 ? "D" : "E";

console.log("\n=== 5. Grade Nilai (Ternary) ===");
console.log(`Skor ujian ${skorUjian} dikonversi menjadi grade: ${grade}`);
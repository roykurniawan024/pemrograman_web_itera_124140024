// 1. Implementasi fungsi groupBy menggunakan reduce()
const groupBy = (array, key) => {
  return array.reduce((acc, item) => {
    const groupKey = item[key];
    acc[groupKey] = acc[groupKey] || [];
    acc[groupKey].push(item);
    return acc;
  }, {});
};

const mahasiswaITERA = [
  { nama: "Roy Kurniawan", prodi: "Teknik Informatika", angkatan: 2024 },
  { nama: "Paulus", prodi: "Teknik Elektro", angkatan: 2023 },
  { nama: "Fansa", prodi: "Teknik Informatika", angkatan: 2024 },
  { nama: "Rahmat", prodi: "Teknik Mesin", angkatan: 2023 }
];

console.log("1. Implementasi groupBy() dengan reduce():");
console.log(groupBy(mahasiswaITERA, "prodi"));
console.log("");

// 2. Buat fungsi untuk menghitung rata-rata dari array of objects
const hitungRataRataNilai = (items, key) => {
  if (items.length === 0) return 0;
  const total = items.reduce((sum, item) => sum + item[key], 0);
  return Number((total / items.length).toFixed(2));
};

const nilaiTugasPAW = [
  { tugas: "Tugas 1: Dasar JS", skor: 85 },
  { tugas: "Tugas 2: Next Gen ES6", skor: 95 },
  { tugas: "Tugas 3: React Basics", skor: 88 },
  { tugas: "Tugas 4: Python Backend", skor: 92 }
];

console.log("2. Menghitung Rata-rata dari Array of Objects:");
console.log("   Daftar Nilai :", nilaiTugasPAW.map(t => `${t.tugas}: ${t.skor}`).join(", "));
console.log("   Rata-rata    :", hitungRataRataNilai(nilaiTugasPAW, "skor"));
console.log("");

// 3. Transform struktur array bersarang menjadi struktur flat
const nestedArray = [1, [2, 3], [4, [5, 6]], [7, 8]];

// Cara bawaan modern ES6 (.flat)
const flatBuiltIn = nestedArray.flat(Infinity);

// Cara fungsional dengan reduce + rekursi
const flattenManual = arr =>
  arr.reduce((acc, item) => acc.concat(Array.isArray(item) ? flattenManual(item) : item), []);

console.log("3. Transform Array Bersarang Menjadi Flat:");
console.log("   Array Asli  :", JSON.stringify(nestedArray));
console.log("   Hasil .flat :", flatBuiltIn);
console.log("");

// 4. Gabungkan filter, map, dan reduce untuk analisis data kompleks
const transaksiKantin = [
  { id: "T1", menu: "Ayam Geprek", kategori: "makanan", harga: 15000, terjual: 40 },
  { id: "T2", menu: "Es Teh", kategori: "minuman", harga: 5000, terjual: 80 },
  { id: "T3", menu: "Mie Goreng", kategori: "makanan", harga: 13000, terjual: 25 },
  { id: "T4", menu: "Kopi Susu", kategori: "minuman", harga: 12000, terjual: 35 },
  { id: "T5", menu: "Air Mineral", kategori: "minuman", harga: 4000, terjual: 60 }
];

// Hitung total omzet hanya untuk kategori 'minuman' yang terjual lebih dari 30 porsi
const totalOmzetMinumanLaris = transaksiKantin
  .filter(item => item.kategori === "minuman" && item.terjual > 30) 
  .map(item => item.harga * item.terjual)                           
  .reduce((total, subtotal) => total + subtotal, 0);                 

console.log("4. Analisis Data Kompleks (Method Chaining: filter -> map -> reduce):");
console.log("   Filter Kriteria : Kategori 'minuman' & Terjual > 30 porsi");
console.log("   Total Omzet     :", `Rp${totalOmzetMinumanLaris.toLocaleString("id-ID")}`);
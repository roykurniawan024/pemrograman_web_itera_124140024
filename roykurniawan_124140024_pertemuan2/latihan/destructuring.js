// 1. Destructure object dengan nested properties minimal 3 level
const mahasiswa = {
  nama: "Roy Kurniawan",
  nim: "124140024",
  akademik: {
    prodi: "Teknik Informatika",
    jurusan: {
      fakultas: "Fakultas Teknologi Industri",
      lokasi: {
        kampus: "ITERA",
        gedung: "Gedung Kuliah Umum 2"
      }
    }
  }
};

const {
  nama,
  akademik: {
    prodi,
    jurusan: {
      fakultas,
      lokasi: { kampus, gedung }
    }
  }
} = mahasiswa;

console.log("1. Destructuring Object 3 Level:");
console.log(`   Mahasiswa : ${nama} (${prodi})`);
console.log(`   Fakultas  : ${fakultas}`);
console.log(`   Lokasi    : ${gedung}, ${kampus}`);
console.log("");

// 2. Function yang menerima rest parameters dan mengembalikan statistik (min, max, average)
const hitungStatistik = (...nilai) => {
  if (nilai.length === 0) return { min: 0, max: 0, average: 0 };

  const min = Math.min(...nilai);
  const max = Math.max(...nilai);
  const total = nilai.reduce((acc, curr) => acc + curr, 0);
  const average = Number((total / nilai.length).toFixed(2));

  return { min, max, average };
};

console.log("2. Fungsi Rest Parameter & Statistik:");
console.log("   Input nilai: 85, 92, 78, 90, 88");
console.log("   Hasil      :", hitungStatistik(85, 92, 78, 90, 88));
console.log("");

// 3. Merge 3 objects dengan spread operator dan override beberapa properties
const dataPribadi = { nama: "Roy Kurniawan", status: "Mahasiswa Reguler", angkatan: 2024 };
const dataKontak = { email: "roy.124140024@student.itera.ac.id", telp: "08123456789" };
const dataPeran = { peran: "Praktikan", status: "Ketua Tim Dashboard" }; 

const dataLengkap = {
  ...dataPribadi,
  ...dataKontak,
  ...dataPeran,
  aktif: true 
};

console.log("3. Merge 3 Objects dengan Override:");
console.log(dataLengkap);
console.log("");

// 4. Gunakan destructuring dalam loop for...of
const daftarTugas = [
  { id: 1, matkul: "PAW", tugas: "Personal Dashboard ES6+", deadline: "Senin" },
  { id: 2, matkul: "Basis Data", tugas: "Normalisasi 3NF & DDL", deadline: "Rabu" },
  { id: 3, matkul: "Jaringan Komputer", tugas: "Simulasi Packet Tracer", deadline: "Jumat" }
];

console.log("4. Destructuring dalam Loop for...of:");
for (const { matkul, tugas, deadline } of daftarTugas) {
  console.log(`   - [${matkul}] ${tugas} | Deadline: ${deadline}`);
}
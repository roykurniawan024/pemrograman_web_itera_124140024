// 1. Coba ubah nilai const dan lihat error yang muncul
const bootcamp = "PAW";
// bootcamp = "Web"; // TypeError: Assignment to constant variable.

try {
  const nim = "124140024";
  nim = "999999999";
} catch (err) {
  console.log("1. Error const berhasil ditangkap:", err.message);
}

// 2. Bandingkan behavior var di dalam dan luar block
var namaVar = "Luar";
{
  var namaVar = "Dalam";
}
console.log("2. Hasil var:", namaVar); // Output: "Dalam"

let namaLet = "Luar";
{
  let namaLet = "Dalam";
}
console.log("   Hasil let:", namaLet); // Output: "Luar"

// 3. Buat arrow function dengan berbagai sintaks
const sapa = () => "Halo!"; // Tanpa parameter
const kuadrat = x => x * x; // Satu parameter 
const tambah = (a, b) => a + b; // Dua parameter
const buatMhs = (nama, nim) => ({ nama, nim }); // Return object literal

console.log("3. Arrow function (tambah 5 + 3):", tambah(5, 3));
console.log("   Arrow function (kuadrat 4)  :", kuadrat(4));

// 4. Gunakan template literals untuk membuat HTML string
const htmlString = `
  <div class="card">
    <h1>${sapa()} Selamat Datang di Praktikum PAW</h1>
    <p>Mahasiswa: Roy Kurniawan (124140024)</p>
    <p>Hasil 4 kuadrat adalah: ${kuadrat(4)}</p>
    <p>Total nilai: ${tambah(40, 55)}</p>
  </div>
`;

console.log("4. Template Literals HTML String:\n" + htmlString.trim());
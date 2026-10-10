// =========================================================================
// 1. Loop Tabel Perkalian 
// =========================================================================
console.log("=== 1. Tabel Perkalian ===");
const angkaPerkalian = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${angkaPerkalian} x ${i} = ${angkaPerkalian * i}`);
}

// =========================================================================
// 2. Faktorial 
// =========================================================================
console.log("\n=== 2. Hitung Faktorial ===");
function hitungFaktorial(n) {
    if (n === 0 || n === 1) return 1;
    let hasil = 1;
    for (let i = 2; i <= n; i++) {
        hasil *= i;
    }
    return hasil;
}
const angkaFaktorial = 5;
console.log(`Faktorial dari ${angkaFaktorial} adalah ${hitungFaktorial(angkaFaktorial)}`);

// =========================================================================
// 3. Bilangan Prima 
// =========================================================================
console.log("\n=== 3. Cek Bilangan Prima ===");
function cekPrima(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
const angkaPrima1 = 17;
const angkaPrima2 = 10;
console.log(`Angka ${angkaPrima1} adalah ${cekPrima(angkaPrima1) ? "Bilangan Prima" : "Bukan Bilangan Prima"}`);
console.log(`Angka ${angkaPrima2} adalah ${cekPrima(angkaPrima2) ? "Bilangan Prima" : "Bukan Bilangan Prima"}`);

// =========================================================================
// 5. Program FizzBuzz 
// =========================================================================
console.log("\n=== 5. Program FizzBuzz (1-100) ===");
let hasilFizzBuzz = [];
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        hasilFizzBuzz.push("FizzBuzz");
    } else if (i % 3 === 0) {
        hasilFizzBuzz.push("Fizz");
    } else if (i % 5 === 0) {
        hasilFizzBuzz.push("Buzz");
    } else {
        hasilFizzBuzz.push(i);
    }
}
console.log(hasilFizzBuzz.join(", "));


// =========================================================================
// 4. Kalkulator BMI dengan Event Handler 
// =========================================================================
document.getElementById("btn-bmi").addEventListener("click", function() {
    const inputBerat = document.getElementById("berat").value;
    const inputTinggi = document.getElementById("tinggi").value;
    
    const berat = parseFloat(inputBerat);
    const tinggiCm = parseFloat(inputTinggi);
    const tempatHasil = document.getElementById("hasil-bmi");

    if (isNaN(berat) || isNaN(tinggiCm) || berat <= 0 || tinggiCm <= 0) {
        tempatHasil.innerHTML = "<span style='color:red;'>Masukkan angka yang valid!</span>";
        return;
    }

    // Kalkulasi
    const tinggiM = tinggiCm / 100;
    const bmi = berat / (tinggiM * tinggiM);
    let kategori = "";

    if (bmi < 18.5) {
        kategori = "Kurus";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        kategori = "Normal (Ideal)";
    } else if (bmi >= 25 && bmi <= 29.9) {
        kategori = "Gemuk";
    } else {
        kategori = "Obesitas";
    }

    tempatHasil.innerHTML = `
        Skor BMI: <span style='color: #2563eb;'>${bmi.toFixed(1)}</span> <br> 
        Kategori: <span style='color: #2563eb;'>${kategori}</span>
    `;
});
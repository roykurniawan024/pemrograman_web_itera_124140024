// 1. Memodelkan fungsi asinkron dengan Promise (Simulasi Fetch API Kampus)
const ambilDataServer = (sukses = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sukses) {
        resolve({
          status: 200,
          data: { matkul: "Pengembangan Aplikasi Web", kampus: "ITERA" },
          message: "Data tugas berhasil diunduh dari server!"
        });
      } else {
        reject(new Error("Gagal mengambil data: Koneksi ke server terputus."));
      }
    }, 1000); // Simulasi delay jaringan 1 detik
  });
};

// 2. Mengonsumsi Promise menggunakan pola modern Async/Await
const jalankanAplikasi = async () => {
  console.log("Sedang mengambil data tugas mahasiswa...");

  try {
    const hasil = await ambilDataServer(true);
    console.log("Status   :", hasil.status);
    console.log("Berhasil :", hasil.message);
    console.log("Payload  :", hasil.data);
  } catch (error) {
    console.error("Gagal    :", error.message);
  } finally {
    console.log("Selesai  : Proses asinkron selesai (Cleanup loading state).");
  }
};

jalankanAplikasi();
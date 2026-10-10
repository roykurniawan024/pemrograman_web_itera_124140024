// =========================================================================
// 1. Inisialisasi Array of Objects Mahasiswa 
// =========================================================================
let dataMahasiswa = [
    { id: 1, nama: "Roy Kurniawan", nim: "124140024", jurusan: "Teknik Informatika", nilai: 85 },
    { id: 2, nama: "Imam Santoso", nim: "121140001", jurusan: "Teknik Informatika", nilai: 78 },
    { id: 3, nama: "Siti Amanah", nim: "122150002", jurusan: "Farmasi", nilai: 92 },
    { id: 4, nama: "Ahmad Fauzi", nim: "123160003", jurusan: "Teknik Mesin", nilai: 65 },
    { id: 5, nama: "Dwi Sofianti", nim: "124170035", jurusan: "Sains Aktuaria", nilai: 88 }
];

const tbody = document.getElementById("tabel-body");
const form = document.getElementById("form-mahasiswa");
const btnSubmit = document.getElementById("btn-submit");
const btnCancel = document.getElementById("btn-cancel");
const pesanInfo = document.getElementById("pesan-info");

// =========================================================================
// Menampilkan Data ke Tabel HTML (READ)
// =========================================================================
function renderTabel(data) {
    tbody.innerHTML = ""; 
    
    if (data.length === 0) {
        tbody.innerHTML = "<tr><td colspan='6' style='text-align:center;'>Tidak ada data.</td></tr>";
        return;
    }

    data.forEach((mhs, index) => {
        const warnaNilai = mhs.nilai >= 70 ? "green" : "red";
        
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td><strong>${mhs.nama}</strong></td>
                <td>${mhs.nim}</td>
                <td>${mhs.jurusan}</td>
                <td style="color: ${warnaNilai}; font-weight: bold;">${mhs.nilai}</td>
                <td>
                    <button onclick="editMahasiswa(${mhs.id})" class="btn-warning" style="padding: 4px 8px; font-size: 12px;">Edit</button>
                    <button onclick="hapusMahasiswa(${mhs.id})" class="btn-danger" style="padding: 4px 8px; font-size: 12px;">Hapus</button>
                </td>
            </tr>
        `;
    });
}

renderTabel(dataMahasiswa);

// =========================================================================
// FITUR CREATE & UPDATE
// =========================================================================
form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const idInput = document.getElementById("mhs-id").value;
    const nama = document.getElementById("mhs-nama").value;
    const nim = document.getElementById("mhs-nim").value;
    const jurusan = document.getElementById("mhs-jurusan").value;
    const nilai = parseInt(document.getElementById("mhs-nilai").value);

    if (idInput === "") {
        const newId = dataMahasiswa.length > 0 ? Math.max(...dataMahasiswa.map(m => m.id)) + 1 : 1;
        dataMahasiswa.push({ id: newId, nama, nim, jurusan, nilai });
        tampilkanPesan("Data berhasil ditambahkan!", "#10b981");
    } else {
        const index = dataMahasiswa.findIndex(m => m.id == idInput);
        if (index !== -1) {
            dataMahasiswa[index] = { id: parseInt(idInput), nama, nim, jurusan, nilai };
            tampilkanPesan("Data berhasil diperbarui!", "#3b82f6");
            resetForm();
        }
    }
    
    renderTabel(dataMahasiswa);
    form.reset();
});

function editMahasiswa(id) {
    const mhs = dataMahasiswa.find(m => m.id === id);
    if (mhs) {
        document.getElementById("mhs-id").value = mhs.id;
        document.getElementById("mhs-nama").value = mhs.nama;
        document.getElementById("mhs-nim").value = mhs.nim;
        document.getElementById("mhs-jurusan").value = mhs.jurusan;
        document.getElementById("mhs-nilai").value = mhs.nilai;
        
        btnSubmit.innerText = "Simpan Perubahan";
        btnSubmit.classList.replace("btn-success", "btn-warning");
        btnCancel.style.display = "inline-block";
    }
}

btnCancel.addEventListener("click", function() {
    resetForm();
});

function resetForm() {
    form.reset();
    document.getElementById("mhs-id").value = "";
    btnSubmit.innerText = "Tambah Data";
    btnSubmit.classList.replace("btn-warning", "btn-success");
    btnCancel.style.display = "none";
}

// =========================================================================
// Menghapus Data (DELETE)
// =========================================================================
function hapusMahasiswa(id) {
    if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
        dataMahasiswa = dataMahasiswa.filter(m => m.id !== id);
        renderTabel(dataMahasiswa);
        tampilkanPesan("Data berhasil dihapus!", "#ef4444");
    }
}

// =========================================================================
// 2. Mencari Mahasiswa Nilai Tertinggi
// =========================================================================
document.getElementById("btn-max").addEventListener("click", function() {
    if (dataMahasiswa.length === 0) return;
    
    const tertinggi = dataMahasiswa.reduce((prev, current) => {
        return (prev.nilai > current.nilai) ? prev : current;
    });
    
    renderTabel([tertinggi]);
    tampilkanPesan(`Nilai tertinggi diraih oleh ${tertinggi.nama}`, "#3b82f6");
});

// =========================================================================
// 3. Mahasiswa Nilai Di Atas Rata-rata
// =========================================================================
document.getElementById("btn-above-avg").addEventListener("click", function() {
    if (dataMahasiswa.length === 0) return;

    const totalNilai = dataMahasiswa.reduce((sum, mhs) => sum + mhs.nilai, 0);
    const rataRata = totalNilai / dataMahasiswa.length;
    
    const dataDiatasRata = dataMahasiswa.filter(mhs => mhs.nilai > rataRata);
    
    renderTabel(dataDiatasRata);
    tampilkanPesan(`Nilai rata-rata: ${rataRata.toFixed(1)}`, "#3b82f6");
});

// =========================================================================
// 4. Mengurutkan Mahasiswa
// =========================================================================
document.getElementById("btn-sort-asc").addEventListener("click", function() {
    dataMahasiswa.sort((a, b) => a.nama.localeCompare(b.nama));
    renderTabel(dataMahasiswa);
    tampilkanPesan("Tabel diurutkan berdasarkan nama (A - Z)", "#3b82f6");
});

document.getElementById("btn-sort-desc").addEventListener("click", function() {
    dataMahasiswa.sort((a, b) => b.nama.localeCompare(a.nama));
    renderTabel(dataMahasiswa);
    tampilkanPesan("Tabel diurutkan berdasarkan nama (Z - A)", "#3b82f6");
});

// =========================================================================
// Tombol Reset dan Notifikasi
// =========================================================================
document.getElementById("btn-reset").addEventListener("click", function() {
    dataMahasiswa.sort((a, b) => a.id - b.id);
    renderTabel(dataMahasiswa);
    pesanInfo.style.display = "none";
});

function tampilkanPesan(pesan, warna) {
    pesanInfo.innerText = pesan;
    pesanInfo.style.backgroundColor = warna + "20";
    pesanInfo.style.color = warna;
    pesanInfo.style.border = `1px solid ${warna}`;
    pesanInfo.style.display = "block";
}
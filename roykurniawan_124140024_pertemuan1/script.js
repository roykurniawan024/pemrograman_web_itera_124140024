// DOM Elements
const form = document.getElementById('form-barang');
const tbody = document.getElementById('cart-body');
const inputUangBayar = document.getElementById('uang-bayar');
const txtKembalian = document.getElementById('kembalian');

// State
let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
let totalAkhirGlobal = 0;

// Clock
setInterval(() => {
    document.getElementById('clock').innerText = new Date().toLocaleTimeString('en-US', { hour12: false });
}, 1000);

// Format Function
const formatRupiah = (angka) => new Intl.NumberFormat('id-ID').format(angka);

// Set Error Helper
const setErr = (id, msg) => document.getElementById(id).innerText = msg;

// Main Render Logic
function renderKeranjang() {
    tbody.innerHTML = '';
    let totalBelanja = 0;

    document.getElementById('item-count').innerText = keranjang.length;

    if (keranjang.length === 0) {
        tbody.innerHTML = `<tr class="empty-cart-row"><td colspan="6">[ KERANJANG KOSONG ]</td></tr>`;
    } else {
        keranjang.forEach((item, index) => {
            const subtotal = item.harga * item.qty;
            totalBelanja += subtotal;

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>0${index + 1}</td>
                <td>${item.nama}</td>
                <td>${formatRupiah(item.harga)}</td>
                <td>${item.qty}</td>
                <td>${formatRupiah(subtotal)}</td>
                <td><button type="button" class="btn-sm-red" onclick="hapusBarang(${index})">[HAPUS]</button></td>
            `;
            tbody.appendChild(tr);
        });
    }

    // Kalkulasi Diskon (10% jika total belanja >= 50000)
    const diskon = totalBelanja >= 50000 ? totalBelanja * 0.1 : 0;
    totalAkhirGlobal = totalBelanja - diskon;

    // Update Tampilan
    document.getElementById('total-belanja').innerText = formatRupiah(totalBelanja);
    document.getElementById('diskon').innerText = formatRupiah(diskon);
    document.getElementById('total-akhir').innerText = formatRupiah(totalAkhirGlobal);

    // Simpan persisten
    localStorage.setItem('keranjang', JSON.stringify(keranjang));
    hitungKembalian(); 
}

// Delete Item
window.hapusBarang = function(index) {
    keranjang.splice(index, 1);
    renderKeranjang();
};

// Add Item Logic
form.addEventListener('submit', function(e) {
    e.preventDefault();
    setErr('err-nama', '');
    setErr('err-harga', '');
    setErr('err-qty', '');

    const nama = document.getElementById('nama').value.trim();
    const harga = parseInt(document.getElementById('harga').value);
    const qty = parseInt(document.getElementById('qty').value);

    // Early return untuk validasi
    let hasError = false;

    if (nama.length < 3) {
        setErr('err-nama', '* Nama Barang minimal 3 karakter');
        hasError = true;
    }
    
    if (isNaN(harga) || harga < 500) {
        setErr('err-harga', '* Harga minimal Rp 500');
        hasError = true;
    }
    
    if (isNaN(qty) || qty < 1) {
        setErr('err-qty', '* Jumlah minimal 1');
        hasError = true;
    }

    if (hasError) return;

    keranjang.push({ nama, harga, qty });
    renderKeranjang();
    form.reset();
    document.getElementById('nama').focus();
});

// Payment Logic
function hitungKembalian() {
    const uangBayar = parseInt(inputUangBayar.value);
    
    if (isNaN(uangBayar) || inputUangBayar.value === '') {
        txtKembalian.innerText = '-';
        txtKembalian.style.color = 'var(--text-primary)';
        return;
    }

    if (uangBayar < totalAkhirGlobal) {
        txtKembalian.innerText = 'UANG BELUM MENCUKUPI!';
        txtKembalian.style.color = 'var(--accent-red)';
    } else {
        txtKembalian.innerText = 'Rp ' + formatRupiah(uangBayar - totalAkhirGlobal);
        txtKembalian.style.color = 'var(--accent-green)';
    }
}

inputUangBayar.addEventListener('input', hitungKembalian);

// Reset Logic
document.getElementById('btn-reset').addEventListener('click', function() {
    if(keranjang.length === 0) return;
    
    if(confirm('SYSTEM:\nSelesaikan transaksi dan kosongkan keranjang?')) {
        keranjang = [];
        localStorage.removeItem('keranjang');
        inputUangBayar.value = '';
        renderKeranjang();
    }
});

// Inisialisasi awal
renderKeranjang();
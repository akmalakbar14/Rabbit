const tombolSimpan = document.getElementById('btnSimpan');

tombolSimpan.onclick = function() {
    const nama = document.getElementById('namaIndukan').value;
    const tanggal = document.getElementById('tanggalKawin').value;
    const ket = document.getElementById('keterangan').value;

    if (nama && tanggal) {
        // 1. Ambil data yang sudah ada (biar gak ketimpa/reset)
        let daftarKelinci = JSON.parse(localStorage.getItem('daftarKelinci')) || [];

        // 2. Tambahkan data baru ke daftar
        const dataBaru = {
            id: Date.now(),
            nama: nama,
            tanggal: tanggal,
            keterangan: ket
        };
        daftarKelinci.push(dataBaru);

        // 3. Simpan kembali ke loker bernama 'daftarKelinci'
        localStorage.setItem('daftarKelinci', JSON.stringify(daftarKelinci));

        // 4. Pindah ke halaman Output
        window.location.href = "Output.html";
    } else {
        alert("Nama dan Tanggal jangan kosong ya!");
    }
};
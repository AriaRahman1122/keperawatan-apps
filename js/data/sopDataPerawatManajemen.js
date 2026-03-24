/*

    Data SOP Perawat Manajemen
    Author: Aria Rahman, Siddiq Ahmad Anshori
    Title: sopDataPerawatManajemen
    Description: Data SOP Perawat Manajemen untuk Aplikasi Manajemen Keperawatan
    Note: Data SOP Perawat Manajemen, Range ID: 601-999

**/

const sopDataPerawatManajemen = [
    { 
        id: 601, 
        title: 'Pemasangan Infus', 
        category: 'manajemen', 
        description: 'Standar pemasangan infus perifer yang aman.', 
        icon: 'fa-tint', 
        tags: ['Infus', 'Aseptik', 'Venipuncture'],
        noDokumen: 'SOP/KEP/007/2025',
        tanggalTerbit: '1 Januari 2025',
        pengertian: 'Pemasangan infus adalah tindakan memasukkan kateter ke dalam vena perifer untuk pemberian cairan atau obat.',
        tujuan: 'Mendapatkan akses vena untuk terapi intravena dengan aman dan nyaman.',
        kebijakan: 'Standar Keselamatan Pasien dalam Pemasangan Infus.',
        prosedur: [
            { step: 'Cuci Tangan', desc: 'Cuci tangan', detail: 'Gunakan sabun antiseptik atau handrub' },
            { step: 'Siapkan Alat', desc: 'Siapkan alat: abocath, infus set, cairan, torniket, desinfektan', detail: 'Pilih ukuran abocath sesuai kondisi vena' },
            { step: 'Pilih Vena', desc: 'Pilih vena yang sesuai', detail: 'Vena mediana cubiti atau sefalika' },
            { step: 'Pasang Torniket', desc: 'Pasang torniket', detail: '3-4 jari di atas area tusukan' },
            { step: 'Desinfeksi', desc: 'Desinfeksi area tusukan', detail: 'Dengan alkohol 70% atau klorheksidin' },
            { step: 'Tusuk', desc: 'Tusuk dengan sudut 15-30 derajat', detail: 'Jika gagal, maksimal 2 kali tusukan' },
            { step: 'Cek Aliran', desc: 'Cek aliran balik darah', detail: 'Pastikan posisi kateter benar' },
            { step: 'Fiksasi', desc: 'Fiksasi dengan plester', detail: 'Tulis tanggal pemasangan pada plester' },
            { step: 'Atur Tetesan', desc: 'Atur tetesan sesuai instruksi', detail: 'Sesuaikan dengan kebutuhan cairan' },
            { step: 'Monitoring', desc: 'Catat tanggal pemasangan', detail: 'Cek tanda infiltrasi setiap shift' }
        ],
        dokumenTerkait: ['Lembar Monitoring Infus', 'Checklist Pemasangan Infus', 'Formulir Laporan Insiden'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Gawat Darurat', 'Instalasi Rawat Jalan']
    },
    { 
        id: 602, 
        title: 'Perawatan Luka', 
        category: 'manajemen', 
        description: 'Teknik perawatan luka akut dan kronis.', 
        icon: 'fa-hand-holding-medical', 
        tags: ['Luka', 'Balutan', 'Steril'],
        noDokumen: 'SOP/KEP/008/2025',
        tanggalTerbit: '1 Januari 2025',
        pengertian: 'Perawatan luka adalah tindakan membersihkan dan merawat luka untuk mempercepat penyembuhan.',
        tujuan: 'Mencegah infeksi dan mempercepat proses penyembuhan luka.',
        kebijakan: 'Standar Perawatan Luka Berbasis Evidence.',
        prosedur: [
            { step: 'Kaji Luka', desc: 'Kaji luka: ukur panjang, lebar, kedalaman', detail: 'Gunakan skala Bates-Jensen untuk luka tekan' },
            { step: 'Nilai Eksudat', desc: 'Nilai eksudat dan jaringan sekitar', detail: 'Catat warna, bau, dan konsistensi' },
            { step: 'Bersihkan Luka', desc: 'Bersihkan luka dengan NaCl', detail: 'Gunakan teknik bersih jika luka terinfeksi' },
            { step: 'Debridemen', desc: 'Bersihkan jaringan nekrotik jika perlu', detail: 'Dengan gunting steril atau kuret' },
            { step: 'Pilih Balutan', desc: 'Pilih balutan sesuai kondisi luka', detail: 'Hydrogel, foam, atau kasa' },
            { step: 'Pasang Balutan', desc: 'Pasang balutan dengan teknik steril', detail: 'Hindari kontaminasi' },
            { step: 'Dokumentasi', desc: 'Dokumentasi kondisi luka', detail: 'Foto jika perlu' },
            { step: 'Edukasi', desc: 'Edukasi pasien tentang perawatan', detail: 'Tanda infeksi dan cara perawatan' }
        ],
        dokumenTerkait: ['Lembar Monitoring Luka', 'Formulir Skala Luka', 'Checklist Perawatan Luka'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Bedah', 'Klinik Perawatan Luka']
    },
    { 
        id: 603, 
        title: 'Pemberian Obat', 
        category: 'manajemen', 
        description: 'Prinsip pemberian obat yang aman.', 
        icon: 'fa-pills', 
        tags: ['Obat', '6 Benar', 'Efek Samping'],
        noDokumen: 'SOP/KEP/009/2025',
        tanggalTerbit: '1 Januari 2025',
        pengertian: 'Pemberian obat adalah proses memberikan obat kepada pasien sesuai indikasi medis.',
        tujuan: 'Memastikan pasien menerima obat yang tepat dengan cara yang aman.',
        kebijakan: 'Prinsip 6 Benar dalam Pemberian Obat.',
        prosedur: [
            { step: 'Cek Rekam Medis', desc: 'Cek catatan medis pasien', detail: 'Pastikan obat sesuai indikasi' },
            { step: 'Tanya Alergi', desc: 'Tanya riwayat alergi', detail: 'Tanyakan alergi obat sebelumnya' },
            { step: 'Verifikasi 6 Benar', desc: 'Verifikasi 6 benar: pasien, obat, dosis, rute, waktu, dokumentasi', detail: 'Double-check dengan perawat lain' },
            { step: 'Beri Obat', desc: 'Beri obat sesuai jadwal', detail: 'Obat yang perlu diminum sebelum makan diberi 30 menit sebelumnya' },
            { step: 'Observasi', desc: 'Observasi efek samping', detail: 'Cek 15-30 menit setelah pemberian' },
            { step: 'Dokumentasi', desc: 'Dokumentasi pemberian', detail: 'Catat waktu, dosis, dan respons' },
            { step: 'Alasan', desc: 'Jika obat tidak diberikan, tulis alasan', detail: 'Pasien menolak, mual, atau kontraindikasi' }
        ],
        dokumenTerkait: ['Formulir Pemberian Obat', 'Lembar Monitoring Efek Samping', 'Checklist Verifikasi Obat'],
        instalasiTerkait: ['Instalasi Farmasi', 'Instalasi Rawat Inap', 'Instalasi Rawat Jalan']
    },
    { 
        id: 604, 
        title: 'Kateter Urine', 
        category: 'manajemen', 
        description: 'Pemasangan kateter urine.', 
        icon: 'fa-toilet', 
        tags: ['Kateter', 'Urine', 'Aseptik'],
        noDokumen: 'SOP/KEP/010/2025',
        tanggalTerbit: '1 Januari 2025',
        pengertian: 'Pemasangan kateter urine adalah tindakan memasukkan selang melalui uretra ke kandung kemih.',
        tujuan: 'Mengeluarkan urine secara terus menerus atau intermiten.',
        kebijakan: 'Standar Pencegahan Infeksi Saluran Kemih.',
        prosedur: [
            { step: 'Jelaskan Prosedur', desc: 'Jelaskan prosedur ke pasien', detail: 'Berikan penjelasan dan informed consent' },
            { step: 'Siapkan Alat', desc: 'Siapkan alat: kateter, lubrikasi, desinfektan', detail: 'Pilih ukuran kateter sesuai kondisi' },
            { step: 'Pilih Ukuran', desc: 'Pilih ukuran kateter sesuai kondisi', detail: 'Dewasa: 14-18 Fr, anak: 8-12 Fr' },
            { step: 'Bersihkan Area', desc: 'Bersihkan area genital dengan antiseptik', detail: 'Pasien wanita: buka labia' },
            { step: 'Lubrikasi', desc: 'Lubrikasi kateter', detail: 'Gunakan jelly anestesi' },
            { step: 'Insersi', desc: 'Masukkan kateter hingga urine keluar', detail: '15-20 cm pada wanita, 20-25 cm pada pria' },
            { step: 'Kembangkan Balon', desc: 'Kembangkan balon dengan NaCl', detail: '10-15 cc' },
            { step: 'Fiksasi', desc: 'Fiksasi kateter', detail: 'Tempel di paha' },
            { step: 'Sambungkan', desc: 'Sambungkan ke urine bag', detail: 'Pastikan posisi di bawah kandung kemih' }
        ],
        dokumenTerkait: ['Lembar Monitoring Kateter', 'Checklist Pemasangan Kateter', 'Formulir Laporan Infeksi'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Bedah', 'Instalasi Gawat Darurat']
    },
    { 
        id: 605, 
        title: 'Suction Jalan Napas', 
        category: 'manajemen', 
        description: 'Teknik suction untuk pasien dengan jalan napas tidak efektif.', 
        icon: 'fa-lungs', 
        tags: ['Suction', 'Napas', 'Oksigen'],
        noDokumen: 'SOP/KEP/011/2025',
        tanggalTerbit: '1 Januari 2025',
        pengertian: 'Suction adalah tindakan mengeluarkan sekret dari jalan napas menggunakan tekanan negatif.',
        tujuan: 'Membersihkan jalan napas dari sekret untuk mempertahankan oksigenasi.',
        kebijakan: 'Standar Manajemen Jalan Napas.',
        prosedur: [
            { step: 'Auskultasi', desc: 'Auskultasi suara napas', detail: 'Indikasi: ronki, saturasi turun' },
            { step: 'Nilai Kebutuhan', desc: 'Nilai kebutuhan suction', detail: 'Ronki, dispnea, atau saturasi <90%' },
            { step: 'Pre-oksigenasi', desc: 'Beri oksigen 100% sebelum suction', detail: '3-5 menit' },
            { step: 'Atur Tekanan', desc: 'Atur tekanan suction 80-120 mmHg', detail: 'Sesuaikan dengan usia pasien' },
            { step: 'Masukkan Kateter', desc: 'Masukkan kateter tanpa suction', detail: 'Sampai pertemuan bronkus' },
            { step: 'Suction', desc: 'Suction saat menarik kateter', detail: 'Maksimal 15 detik per suction' },
            { step: 'Oksigenasi', desc: 'Beri oksigen kembali', detail: '3-5 menit' },
            { step: 'Evaluasi', desc: 'Evaluasi efektivitas', detail: 'Suara napas bersih, saturasi naik' }
        ],
        dokumenTerkait: ['Lembar Monitoring Suction', 'Checklist Prosedur Suction', 'Formulir Laporan Komplikasi'],
        instalasiTerkait: ['Instalasi ICU', 'Instalasi Gawat Darurat', 'Instalasi Rawat Inap']
    },
    { 
        id: 606, 
        title: 'Perawatan Ostomi', 
        category: 'manajemen', 
        description: 'Perawatan pasien dengan stoma.', 
        icon: 'fa-hand-holding-heart', 
        tags: ['Ostomi', 'Stoma', 'Kantong'],
        noDokumen: 'SOP/KEP/012/2025',
        tanggalTerbit: '1 Januari 2025',
        pengertian: 'Perawatan ostomi adalah tindakan merawat stoma dan kulit sekitarnya pada pasien dengan ostomi.',
        tujuan: 'Menjaga kebersihan dan integritas kulit sekitar stoma.',
        kebijakan: 'Standar Perawatan Ostomi Berbasis Evidence.',
        prosedur: [
            { step: 'Inspeksi', desc: 'Inspeksi warna stoma', detail: 'Stoma sehat: merah muda, lembab' },
            { step: 'Periksa Kulit', desc: 'Periksa kulit sekitar', detail: 'Cari iritasi, kemerahan, atau infeksi' },
            { step: 'Bersihkan', desc: 'Bersihkan dengan air hangat', detail: 'Hindari sabun beralkohol' },
            { step: 'Keringkan', desc: 'Keringkan dengan lembut', detail: 'Tepuk-tepuk dengan kasa' },
            { step: 'Potong Kantong', desc: 'Potong kantong sesuai ukuran stoma', detail: 'Lebih besar 2-3 mm dari stoma' },
            { step: 'Pasang Kantong', desc: 'Pasang kantong dengan rapat', detail: 'Pastikan tidak bocor' },
            { step: 'Ganti Kantong', desc: 'Ganti kantong jika 1/3 penuh', detail: 'Atau setiap 3-5 hari' },
            { step: 'Edukasi', desc: 'Edukasi pasien tentang perawatan', detail: 'Cara membersihkan dan mengganti kantong' }
        ],
        dokumenTerkait: ['Lembar Monitoring Ostomi', 'Checklist Perawatan Stoma', 'Formulir Edukasi Pasien'],
        instalasiTerkait: ['Instalasi Bedah', 'Instalasi Rawat Inap', 'Klinik Ostomi']
    }
];
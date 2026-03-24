/*

    Data Sop Pasien
    Author: Aria Rahman, Siddiq Ahmad Anshori
    Title: sopDataPasien
    Description: Data SOP Pasien untuk Aplikasi Manajemen Keperawatan
    Note: Data SOP Pasien, Range ID: 201-399

**/

const sopDataPasien = [
    { 
        id: 201, 
        title: 'Persiapan Kemoterapi', 
        category: 'pasien', 
        description: 'Panduan untuk pasien sebelum kemoterapi.', 
        icon: 'fa-user-md', 
        tags: ['Pasien', 'Kemoterapi', 'Edukasi'],
        noDokumen: 'PK/ONK/001/2025',
        tanggalTerbit: '1 Januari 2025',
        pengertian: 'Panduan persiapan pasien sebelum menjalani kemoterapi.',
        tujuan: 'Pasien siap secara fisik dan mental menjalani kemoterapi.',
        kebijakan: 'Standar Edukasi Pasien Onkologi.',
        prosedur: [
            { step: 'Puasa', desc: 'Puasa 4 jam sebelum kemoterapi', detail: 'Kecuali air putih' },
            { step: 'Minum', desc: 'Minum air putih cukup', detail: '6-8 gelas sehari' },
            { step: 'Bawa Hasil Lab', desc: 'Bawa hasil laboratorium terbaru', detail: 'Darah lengkap, fungsi hati, ginjal' },
            { step: 'Pakaian', desc: 'Gunakan pakaian nyaman', detail: 'Longgar dan mudah dibuka' },
            { step: 'Hiburan', desc: 'Bawa buku atau hiburan selama infus', detail: 'Headphone, buku, atau tablet' },
            { step: 'Kelola Mual', desc: 'Kelola mual dengan obat antiemetik', detail: 'Minum 30 menit sebelum kemoterapi' },
            { step: 'Hindari Kontak', desc: 'Hindari kontak dengan orang sakit', detail: 'Karena imunitas turun' },
            { step: 'Hubungi Dokter', desc: 'Hubungi dokter jika demam >38°C', detail: 'Segera ke IGD' }
        ],
        dokumenTerkait: ['Buku Saku Pasien Kemoterapi', 'Jadwal Kontrol', 'Kartu Kewaspadaan'],
        instalasiTerkait: ['Instalasi Onkologi', 'Instalasi Farmasi', 'Instalasi Laboratorium']
    },
    { 
        id: 202, 
        title: 'Rawat Jalan', 
        category: 'pasien', 
        description: 'Alur pendaftaran dan pelayanan rawat jalan.', 
        icon: 'fa-walk', 
        tags: ['Registrasi', 'Poli', 'Antrian'],
        noDokumen: 'PK/RJ/002/2025',
        tanggalTerbit: '1 Januari 2025',
        pengertian: 'Panduan bagi pasien yang akan berobat jalan.',
        tujuan: 'Memudahkan pasien dalam mengakses layanan rawat jalan.',
        kebijakan: 'Standar Pelayanan Rawat Jalan.',
        prosedur: [
            { step: 'Registrasi', desc: 'Registrasi online atau datang langsung', detail: 'Melalui aplikasi atau loket' },
            { step: 'Ambil Antrian', desc: 'Ambil nomor antrean', detail: 'Di mesin antrian atau loket' },
            { step: 'Datang Tepat Waktu', desc: 'Datang 30 menit sebelum jadwal', detail: 'Hindari keterlambatan' },
            { step: 'Konsultasi', desc: 'Temu dokter, sampaikan keluhan', detail: 'Siapkan daftar pertanyaan' },
            { step: 'Ambil Resep', desc: 'Ambil resep di apotek', detail: 'Tebus resep sesuai petunjuk' },
            { step: 'Cek Obat', desc: 'Cek kembali obat yang diberikan', detail: 'Pastikan nama, dosis, dan aturan pakai' },
            { step: 'Pembayaran', desc: 'Lakukan pembayaran', detail: 'Di kasir atau transfer' },
            { step: 'Jadwal Kontrol', desc: 'Ambil jadwal kontrol', detail: 'Catat tanggal kontrol berikutnya' }
        ],
        dokumenTerkait: ['Kartu Berobat', 'Formulir Pendaftaran', 'Resep Obat'],
        instalasiTerkait: ['Instalasi Rawat Jalan', 'Instalasi Farmasi', 'Instalasi Rekam Medis']
    },
    { 
        id: 203, 
        title: 'Rawat Inap', 
        category: 'pasien', 
        description: 'Prosedur masuk dan selama rawat inap.', 
        icon: 'fa-bed', 
        tags: ['Inap', 'Admisi', 'Pulang'],
        noDokumen: 'PK/RI/003/2025',
        tanggalTerbit: '1 Januari 2025',
        pengertian: 'Panduan bagi pasien yang akan menjalani rawat inap.',
        tujuan: 'Pasien memahami hak dan kewajiban selama rawat inap.',
        kebijakan: 'Standar Pelayanan Rawat Inap.',
        prosedur: [
            { step: 'Admisi', desc: 'Registrasi di admisi', detail: 'Serahkan berkas yang diperlukan' },
            { step: 'Gelang Identitas', desc: 'Dapatkan gelang identitas', detail: 'Pastikan gelang tidak dilepas' },
            { step: 'Perkenalan', desc: 'Perkenalan dengan perawat', detail: 'Tanyakan nama perawat penanggung jawab' },
            { step: 'Orientasi', desc: 'Orientasi ruangan', detail: 'Tempat tidur, bel, kamar mandi' },
            { step: 'Gunakan Bel', desc: 'Gunakan bel jika butuh bantuan', detail: 'Jangan sungkan memanggil perawat' },
            { step: 'Ringkasan Medis', desc: 'Dapatkan ringkasan medis saat pulang', detail: 'Untuk kontrol atau rujukan' },
            { step: 'Resep Pulang', desc: 'Ambil resep dan jadwal kontrol', detail: 'Tanyakan hal yang belum jelas' }
        ],
        dokumenTerkait: ['Gelang Identitas Pasien', 'Ringkasan Medis', 'Resep Pulang'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Farmasi', 'Instalasi Rekam Medis']
    },
    { 
        id: 204, 
        title: 'Persiapan Operasi', 
        category: 'pasien', 
        description: 'Panduan sebelum menjalani operasi.', 
        icon: 'fa-scalpel', 
        tags: ['Operasi', 'Puasa', 'Persiapan'],
        noDokumen: 'PK/OP/004/2025',
        tanggalTerbit: '1 Januari 2025',
        pengertian: 'Panduan persiapan pasien sebelum operasi.',
        tujuan: 'Pasien siap menjalani operasi dengan aman.',
        kebijakan: 'Standar Keselamatan Pasien Bedah.',
        prosedur: [
            { step: 'Puasa', desc: 'Puasa 6-8 jam sebelum operasi', detail: 'Tidak makan/minum kecuali obat' },
            { step: 'Mandi', desc: 'Mandi dengan sabun antiseptik', detail: 'Malam sebelum dan pagi operasi' },
            { step: 'Lepas Perhiasan', desc: 'Lepas perhiasan dan make-up', detail: 'Serahkan ke keluarga' },
            { step: 'Informed Consent', desc: 'Tanda tangan informed consent', detail: 'Baca dan pahami risiko operasi' },
            { step: 'Barang Berharga', desc: 'Serahkan barang berharga ke keluarga', detail: 'Uang, HP, perhiasan' },
            { step: 'Datang Tepat Waktu', desc: 'Datang tepat waktu', detail: '2 jam sebelum operasi' },
            { step: 'Ikuti Instruksi', desc: 'Ikuti instruksi tim medis', detail: 'Kerjasama dengan petugas' }
        ],
        dokumenTerkait: ['Informed Consent', 'Hasil Laboratorium', 'Konsultasi Anestesi'],
        instalasiTerkait: ['Instalasi Bedah', 'Instalasi Anestesi', 'Instalasi Laboratorium']
    },
    { 
        id: 205, 
        title: 'Perawatan Luka di Rumah', 
        category: 'pasien', 
        description: 'Cara merawat luka pasca operasi di rumah.', 
        icon: 'fa-hand-holding-medical', 
        tags: ['Luka', 'Perawatan', 'Infeksi'],
        noDokumen: 'PK/LUKA/005/2025',
        tanggalTerbit: '1 Januari 2025',
        pengertian: 'Panduan perawatan luka mandiri di rumah.',
        tujuan: 'Mencegah infeksi dan mempercepat penyembuhan luka.',
        kebijakan: 'Standar Edukasi Pasien Pasca Operasi.',
        prosedur: [
            { step: 'Cuci Tangan', desc: 'Cuci tangan sebelum dan sesudah menyentuh luka', detail: 'Gunakan sabun antiseptik' },
            { step: 'Amati Luka', desc: 'Amati tanda infeksi: merah, bengkak, panas, nanah', detail: 'Jika demam, segera ke dokter' },
            { step: 'Ganti Balutan', desc: 'Ganti balutan jika basah atau kotor', detail: 'Jaga luka tetap kering saat mandi' },
            { step: 'Nutrisi', desc: 'Konsumsi makanan bergizi', detail: 'Tinggi protein untuk penyembuhan' },
            { step: 'Istirahat', desc: 'Istirahat cukup', detail: 'Hindari aktivitas berat' }
        ],
        dokumenTerkait: ['Buku Panduan Perawatan Luka', 'Kartu Kontrol', 'Nomor Darurat'],
        instalasiTerkait: ['Instalasi Bedah', 'Instalasi Rawat Jalan', 'Instalasi Gawat Darurat']
    },
    { 
        id: 206, 
        title: 'Nutrisi Pasien', 
        category: 'pasien', 
        description: 'Panduan nutrisi untuk pasien dengan kondisi tertentu.', 
        icon: 'fa-apple-alt', 
        tags: ['Nutrisi', 'Diet', 'Makanan'],
        noDokumen: 'PK/NUT/006/2025',
        tanggalTerbit: '1 Januari 2025',
        pengertian: 'Panduan nutrisi untuk mendukung penyembuhan pasien.',
        tujuan: 'Memenuhi kebutuhan nutrisi sesuai kondisi penyakit.',
        kebijakan: 'Standar Terapi Gizi Klinis.',
        prosedur: [
            { step: 'Konsultasi', desc: 'Konsultasi dengan ahli gizi', detail: 'Untuk menentukan kebutuhan kalori' },
            { step: 'Protein', desc: 'Penuhi kebutuhan protein', detail: 'Sumber: ikan, telur, daging tanpa lemak' },
            { step: 'Cairan', desc: 'Minum 6-8 gelas sehari', detail: 'Kurangi garam jika hipertensi' },
            { step: 'Batasi Gula', desc: 'Batasi gula jika diabetes', detail: 'Gunakan pemanis buatan' },
            { step: 'Porsi Kecil', desc: 'Makan dalam porsi kecil tapi sering', detail: '5-6 kali sehari' }
        ],
        dokumenTerkait: ['Leaflet Diet', 'Konsultasi Gizi', 'Rencana Makan'],
        instalasiTerkait: ['Instalasi Gizi', 'Instalasi Rawat Inap', 'Instalasi Rawat Jalan']
    }
];
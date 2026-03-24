/*

    Data SOP Perawat Umum
    Author: Aria Rahman, Siddiq Ahmad Anshori
    Title: sopDataPerawatUmum
    Description: Data SOP Perawat Umum untuk Aplikasi Manajemen Keperawatan
    Note: Data SOP Perawat Umum, Range ID: 401-599

**/

const sopDataPerawatUmum = [
    { 
        id: 401, 
        title: 'Keselamatan Pasien', 
        category: 'umum', 
        description: 'Prinsip keselamatan pasien di rumah sakit.', 
        icon: 'fa-shield-alt', 
        tags: ['Patient Safety', 'Keselamatan', 'Sasaran'],
        noDokumen: 'SOP/UMUM/001/2025',
        tanggalTerbit: '1 Januari 2025',
        pengertian: 'Keselamatan pasien adalah sistem yang membuat asuhan pasien lebih aman.',
        tujuan: 'Mencegah terjadinya cedera yang disebabkan oleh kesalahan akibat melaksanakan suatu tindakan.',
        kebijakan: 'Permenkes No. 11 Tahun 2017 tentang Keselamatan Pasien.',
        prosedur: [
            { step: 'Identifikasi', desc: 'Identifikasi pasien dengan benar', detail: 'Gunakan minimal 2 identifikasi' },
            { step: 'Komunikasi', desc: 'Komunikasi efektif antar petugas', detail: 'SBAR dalam handover' },
            { step: 'Obat', desc: 'Keamanan obat yang perlu diwaspadai', detail: 'High-alert medication' },
            { step: 'Prosedur', desc: 'Pastikan prosedur tepat, lokasi tepat, pasien tepat', detail: 'Time out sebelum prosedur' },
            { step: 'Infeksi', desc: 'Pencegahan infeksi', detail: 'Cuci tangan 5 momen' },
            { step: 'Risiko Jatuh', desc: 'Kurangi risiko jatuh', detail: 'Asesmen risiko jatuh' }
        ],
        dokumenTerkait: ['Formulir Asesmen Risiko', 'Checklist Keselamatan Pasien', 'Laporan Insiden'],
        instalasiTerkait: ['Semua Instalasi']
    },
    { 
        id: 402, 
        title: 'Komunikasi Terapeutik', 
        category: 'umum', 
        description: 'Teknik komunikasi efektif dengan pasien.', 
        icon: 'fa-comments', 
        tags: ['Komunikasi', 'Terapeutik', 'Edukasi'],
        noDokumen: 'SOP/UMUM/002/2025',
        tanggalTerbit: '1 Januari 2025',
        pengertian: 'Komunikasi terapeutik adalah komunikasi yang direncanakan untuk menyembuhkan pasien.',
        tujuan: 'Membangun hubungan saling percaya antara perawat dan pasien.',
        kebijakan: 'Standar Praktik Keperawatan Profesional.',
        prosedur: [
            { step: 'Sapa', desc: 'Sapa pasien dengan ramah', detail: 'Sebut nama pasien' },
            { step: 'Perkenalan', desc: 'Perkenalkan diri', detail: 'Nama dan peran' },
            { step: 'Empati', desc: 'Tunjukkan empati', detail: 'Dengarkan keluhan pasien' },
            { step: 'Edukasi', desc: 'Berikan edukasi yang jelas', detail: 'Gunakan bahasa sederhana' },
            { step: 'Validasi', desc: 'Validasi pemahaman pasien', detail: 'Tanyakan kembali' }
        ],
        dokumenTerkait: ['Lembar Edukasi Pasien', 'Formulir Informed Consent'],
        instalasiTerkait: ['Semua Instalasi']
    },
    { 
        id: 403, 
        title: 'Pencegahan Infeksi', 
        category: 'umum', 
        description: 'Standar pencegahan dan pengendalian infeksi.', 
        icon: 'fa-hand-holding-heart', 
        tags: ['Infeksi', 'PPI', 'Hand Hygiene'],
        noDokumen: 'SOP/UMUM/003/2025',
        tanggalTerbit: '1 Januari 2025',
        pengertian: 'Pencegahan infeksi adalah upaya untuk mencegah terjadinya infeksi di lingkungan pelayanan kesehatan.',
        tujuan: 'Menurunkan angka infeksi nosokomial.',
        kebijakan: 'Standar Pencegahan Infeksi Nasional.',
        prosedur: [
            { step: 'Hand Hygiene', desc: 'Cuci tangan 5 momen', detail: 'Pakai sabun atau handrub' },
            { step: 'APD', desc: 'Gunakan APD sesuai prosedur', detail: 'Masker, sarung tangan, apron' },
            { step: 'Sterilisasi', desc: 'Sterilisasi alat medis', detail: 'Autoklaf atau kimia' },
            { step: 'Limbah', desc: 'Pengelolaan limbah medis', detail: 'Pisahkan sesuai jenis' },
            { step: 'Ruang Isolasi', desc: 'Pengelolaan pasien infeksi', detail: 'Ruang isolasi khusus' }
        ],
        dokumenTerkait: ['Checklist PPI', 'Lembar Monitoring Infeksi', 'Formulir Surveilans'],
        instalasiTerkait: ['Semua Instalasi']
    }
];
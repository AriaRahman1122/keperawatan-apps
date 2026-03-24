/*

    Data SOP Perawat Tindakan
    Author: Aria Rahman, Siddiq Ahmad Anshori
    Title: sopDataPerawatTindakan
    Description: Data SOP Perawat Tindakan untuk Aplikasi Manajemen Keperawatan
    Note: Data SOP Perawat Tindakan, Range ID: 1001-1399

**/

const sopDataPerawatTindakan = [
    // Tindakan Onkologi
    { 
        id: 1001, 
        title: 'Persiapan Kemoterapi (Perawat)', 
        category: 'tindakan', 
        subCategory: 'onkologi',
        description: 'Persiapan dan pelaksanaan kemoterapi oleh perawat.', 
        icon: 'fa-capsules', 
        tags: ['Onkologi', 'Kemoterapi', 'Sitostatika'],
        noDokumen: 'SOP/TINDAK/ONK/001/2025',
        tanggalTerbit: '1 Januari 2025',
        pengertian: 'Persiapan kemoterapi oleh perawat adalah tindakan persiapan dan monitoring pasien yang menjalani kemoterapi.',
        tujuan: 'Memastikan keamanan dan kenyamanan pasien selama kemoterapi.',
        kebijakan: 'Standar Pelayanan Keperawatan Onkologi.',
        prosedur: [
            { step: 'Verifikasi', desc: 'Verifikasi identitas pasien dan order kemoterapi', detail: 'Double-check dengan apoteker' },
            { step: 'Persiapan Alat', desc: 'Siapkan alat dan obat yang diperlukan', detail: 'Protective device untuk petugas' },
            { step: 'Akses Vena', desc: 'Pastikan akses vena baik', detail: 'PIV atau CVC' },
            { step: 'Premedikasi', desc: 'Beri premedikasi sesuai protokol', detail: 'Antiemetik 30 menit sebelum' },
            { step: 'Administrasi', desc: 'Berikan kemoterapi sesuai protokol', detail: 'Observasi reaksi alergi' },
            { step: 'Monitoring', desc: 'Monitor tanda vital dan efek samping', detail: 'Setiap 15-30 menit' },
            { step: 'Edukasi', desc: 'Edukasi pasien tentang efek samping', detail: 'Mual, rambut rontok, dll' }
        ],
        dokumenTerkait: ['Lembar Monitoring Kemoterapi', 'Checklist Pemberian Kemoterapi'],
        instalasiTerkait: ['Instalasi Onkologi', 'Instalasi Farmasi']
    },
    // Tindakan Bedah
    { 
        id: 1002, 
        title: 'Perawatan Pasca Operasi', 
        category: 'tindakan', 
        subCategory: 'bedah',
        description: 'Perawatan pasien pasca operasi.', 
        icon: 'fa-scalpel', 
        tags: ['Bedah', 'Pasca Operasi', 'Monitoring'],
        noDokumen: 'SOP/TINDAK/BED/002/2025',
        tanggalTerbit: '1 Januari 2025',
        pengertian: 'Perawatan pasca operasi adalah tindakan monitoring dan perawatan pasien setelah prosedur bedah.',
        tujuan: 'Mencegah komplikasi dan mempercepat pemulihan.',
        kebijakan: 'Standar Perawatan Pasca Bedah.',
        prosedur: [
            { step: 'Monitoring', desc: 'Monitor tanda vital dan kesadaran', detail: 'Setiap 15 menit sampai stabil' },
            { step: 'Luka Operasi', desc: 'Periksa luka operasi', detail: 'Cek perdarahan, drainase' },
            { step: 'Nyeri', desc: 'Kelola nyeri pasca operasi', detail: 'Skala nyeri 0-10' },
            { step: 'Mobilisasi', desc: 'Bantu mobilisasi bertahap', detail: 'Duduk, berdiri, berjalan' },
            { step: 'Nutrisi', desc: 'Atur pemberian nutrisi', detail: 'Puasa sampai bising usus (+)', },
            { step: 'Edukasi', desc: 'Edukasi tentang perawatan luka', detail: 'Tanda infeksi, kontrol' }
        ],
        dokumenTerkait: ['Lembar Monitoring Pasca Bedah', 'Checklist Mobilisasi'],
        instalasiTerkait: ['Instalasi Bedah', 'Instalasi Rawat Inap']
    },
    // Tindakan Gawat Darurat
    { 
        id: 1003, 
        title: 'Triage Gawat Darurat', 
        category: 'tindakan', 
        subCategory: 'darurat',
        description: 'Prosedur triage di Instalasi Gawat Darurat.', 
        icon: 'fa-heartbeat', 
        tags: ['IGD', 'Triage', 'Gawat Darurat'],
        noDokumen: 'SOP/TINDAK/IGD/003/2025',
        tanggalTerbit: '1 Januari 2025',
        pengertian: 'Triage adalah proses penentuan prioritas pelayanan pasien gawat darurat.',
        tujuan: 'Menentukan urutan pelayanan berdasarkan tingkat kegawatan.',
        kebijakan: 'Standar Pelayanan Gawat Darurat.',
        prosedur: [
            { step: 'Penilaian Awal', desc: 'Lakukan penilaian awal pasien', detail: 'ABCDE survey' },
            { step: 'Kategori', desc: 'Tentukan kategori triage', detail: 'Merah (kritis), Kuning (urgent), Hijau (non-urgent), Hitam (meninggal)' },
            { step: 'Prioritas', desc: 'Tentukan prioritas penanganan', detail: 'Merah > Kuning > Hijau' },
            { step: 'Dokumentasi', desc: 'Dokumentasi hasil triage', detail: 'Waktu, kategori, tanda vital' },
            { step: 'Rujuk', desc: 'Rujuk ke ruang yang sesuai', detail: 'ICU, HCU, atau ruang biasa' }
        ],
        dokumenTerkait: ['Formulir Triage', 'Checklist ABCDE'],
        instalasiTerkait: ['Instalasi Gawat Darurat']
    },
    // Tindakan Pediatri
    { 
        id: 1004, 
        title: 'Perawatan Anak Demam', 
        category: 'tindakan', 
        subCategory: 'anak',
        description: 'Perawatan anak dengan demam.', 
        icon: 'fa-child', 
        tags: ['Pediatri', 'Demam', 'Anak'],
        noDokumen: 'SOP/TINDAK/PED/004/2025',
        tanggalTerbit: '1 Januari 2025',
        pengertian: 'Perawatan anak demam adalah tindakan monitoring dan manajemen demam pada anak.',
        tujuan: 'Menurunkan suhu tubuh dan mencegah kejang demam.',
        kebijakan: 'Standar Perawatan Pediatri.',
        prosedur: [
            { step: 'Ukur Suhu', desc: 'Ukur suhu tubuh anak', detail: 'Aksila atau tympani' },
            { step: 'Kompres', desc: 'Lakukan kompres hangat', detail: 'Di dahi dan lipatan tubuh' },
            { step: 'Obat', desc: 'Beri antipiretik sesuai dosis', detail: 'Parasetamol 10-15 mg/kgBB' },
            { step: 'Cairan', desc: 'Penuhi kebutuhan cairan', detail: 'ASI atau oralit' },
            { step: 'Monitoring', desc: 'Monitor suhu setiap jam', detail: 'Cek tanda kejang' },
            { step: 'Edukasi', desc: 'Edukasi orang tua', detail: 'Tanda bahaya, kontrol' }
        ],
        dokumenTerkait: ['Lembar Monitoring Demam', 'Formulir Edukasi Orang Tua'],
        instalasiTerkait: ['Instalasi Pediatri', 'Instalasi Rawat Inap']
    },
    // Tindakan ICU
    { 
        id: 1005, 
        title: 'Perawatan Ventilator', 
        category: 'tindakan', 
        subCategory: 'icu',
        description: 'Perawatan pasien dengan ventilator mekanik.', 
        icon: 'fa-lungs', 
        tags: ['ICU', 'Ventilator', 'Critical Care'],
        noDokumen: 'SOP/TINDAK/ICU/005/2025',
        tanggalTerbit: '1 Januari 2025',
        pengertian: 'Perawatan ventilator adalah tindakan monitoring dan perawatan pasien yang menggunakan ventilator mekanik.',
        tujuan: 'Mempertahankan ventilasi dan oksigenasi yang adekuat.',
        kebijakan: 'Standar Perawatan ICU.',
        prosedur: [
            { step: 'Cek Setting', desc: 'Cek setting ventilator', detail: 'Mode, TV, RR, FiO2, PEEP' },
            { step: 'Suction', desc: 'Lakukan suction jika perlu', detail: 'Indikasi: ronki, saturasi turun' },
            { step: 'Monitoring', desc: 'Monitor saturasi dan AGD', detail: 'SpO2 target >92%' },
            { step: 'Oral Care', desc: 'Lakukan oral care', detail: 'Dengan chlorhexidine' },
            { step: 'Perubahan Posisi', desc: 'Ubah posisi pasien', detail: 'Setiap 2 jam' },
            { step: 'Dokumentasi', desc: 'Dokumentasi parameter', detail: 'Setting, AGD, komplikasi' }
        ],
        dokumenTerkait: ['Lembar Monitoring Ventilator', 'Checklist Suction'],
        instalasiTerkait: ['Instalasi ICU']
    }
];
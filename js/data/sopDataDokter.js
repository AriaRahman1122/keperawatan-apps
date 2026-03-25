/*

    Data SOP Dokter
    Author: Aria Rahman, Siddiq Ahmad Anshori
    Title: sopDataDokter
    Description: Data SOP Dokter untuk Aplikasi Manajemen Keperawatan
    Note: Data SOP Dokter, Range ID: 101-199

**/

const sopDataDokter = [
    // { 
    //     id: 101, 
    //     title: 'Kemoterapi', 
    //     category: 'dokter', 
    //     description: 'Protokol lengkap pemberian kemoterapi untuk pasien onkologi.', 
    //     icon: 'fa-capsules', 
    //     tags: ['Onkologi', 'Sitostatika', 'Infus'],
    //     tanggalTerbit: '1 Januari 2025',
    //     pengertian: 'Kemoterapi adalah pemberian obat sitostatika untuk membunuh sel kanker atau menghambat pertumbuhannya.',
    //     tujuan: 'Mencapai kesembuhan, kontrol pertumbuhan tumor, atau paliatif untuk meningkatkan kualitas hidup pasien.',
    //     kebijakan: 'Berdasarkan Permenkes No. 34 Tahun 2022 tentang Pelayanan Onkologi Terpadu.',
    //     prosedur: [
    //         { step: 'Pra-kemoterapi', desc: 'Konfirmasi diagnosis dan staging kanker', detail: 'Lakukan pemeriksaan fisik dan penunjang' },
    //         { step: 'Perhitungan Dosis', desc: 'Hitung dosis berdasarkan BSA (Body Surface Area)', detail: 'Gunakan rumus DuBois atau Mosteller' },
    //         { step: 'Pemeriksaan Laboratorium', desc: 'Cek fungsi hati, ginjal, dan darah lengkap H-1', detail: 'Pastikan hasil dalam batas aman' },
    //         { step: 'Persiapan Infus', desc: 'Pasang infus dengan akses vena baik', detail: 'Gunakan abocath ukuran 20-22G' },
    //         { step: 'Verifikasi Obat', desc: 'Double-check obat dengan apoteker', detail: 'Cek nama obat, dosis, dan expired date' },
    //         { step: 'Premedikasi', desc: 'Beri premedikasi antiemetik 30 menit sebelum', detail: 'Sesuai protokol antiemetik' },
    //         { step: 'Administrasi', desc: 'Infus sitostatika dengan protective device', detail: 'Observasi reaksi alergi setiap 15 menit' },
    //         { step: 'Dokumentasi', desc: 'Dokumentasi dalam rekam medis', detail: 'Catat waktu mulai, dosis, dan respons' }
    //     ],
    //     dokumenTerkait: ['Formulir Informed Consent', 'Lembar Monitoring Kemoterapi', 'Algoritma Dosis Sitostatika'],
    //     instalasiTerkait: ['Instalasi Onkologi', 'Instalasi Farmasi', 'Instalasi Laboratorium']
    // },
    // { 
    //     id: 102, 
    //     title: 'Radiologi', 
    //     category: 'dokter', 
    //     description: 'Prosedur pemeriksaan radiologi kontras dan non-kontras.', 
    //     icon: 'fa-x-ray', 
    //     tags: ['Rontgen', 'CT Scan', 'MRI'],
    //     noDokumen: 'SOP/RAD/002/2025',
    //     tanggalTerbit: '1 Januari 2025',
    //     pengertian: 'Pemeriksaan radiologi adalah prosedur diagnostik menggunakan radiasi atau gelombang magnetik untuk visualisasi struktur tubuh.',
    //     tujuan: 'Mendapatkan gambaran diagnostik yang akurat dengan dosis radiasi minimal.',
    //     kebijakan: 'Sesuai standar Kementerian Kesehatan tentang Keselamatan Radiasi.',
    //     prosedur: [
    //         { step: 'Konfirmasi Indikasi', desc: 'Konfirmasi indikasi pemeriksaan', detail: 'Pastikan sesuai dengan pedoman klinis' },
    //         { step: 'Cek Alergi', desc: 'Cek riwayat alergi kontras', detail: 'Tanyakan riwayat alergi yodium' },
    //         { step: 'Persiapan Pasien', desc: 'Puasa 4-6 jam jika perlu kontras', detail: 'Berikan premedikasi jika perlu' },
    //         { step: 'Lepas Logam', desc: 'Lepaskan benda logam', detail: 'Perhiasan, gigi palsu, atau alat kontrasepsi' },
    //         { step: 'Setting Alat', desc: 'Atur parameter scanning sesuai protokol', detail: 'Sesuaikan dengan berat badan dan indikasi' },
    //         { step: 'Posisi Pasien', desc: 'Posisikan pasien dengan benar', detail: 'Gunakan immobilizer jika perlu' },
    //         { step: 'Scanning', desc: 'Lakukan scanning', detail: 'Instruksikan pasien untuk menahan napas' },
    //         { step: 'Evaluasi', desc: 'Evaluasi kualitas gambar', detail: 'Ulangi jika perlu' },
    //         { step: 'Laporan', desc: 'Buat laporan hasil', detail: 'Deskripsikan temuan secara sistematis' }
    //     ],
    //     dokumenTerkait: ['Formulir Permintaan Radiologi', 'Checklist Keselamatan Radiasi', 'Format Laporan Radiologi'],
    //     instalasiTerkait: ['Instalasi Radiologi', 'Instalasi Gawat Darurat', 'Instalasi Rawat Inap']
    // },
    // { 
    //     id: 103, 
    //     title: 'Bedah Minor', 
    //     category: 'dokter', 
    //     description: 'Prosedur tindakan bedah kecil di ruang perawatan.', 
    //     icon: 'fa-scalpel', 
    //     tags: ['Bedah', 'Minor', 'Aseptik'],
    //     noDokumen: 'SOP/BED/003/2025',
    //     tanggalTerbit: '1 Januari 2025',
    //     pengertian: 'Bedah minor adalah tindakan invasif minimal yang dapat dilakukan di ruang perawatan atau poliklinik.',
    //     tujuan: 'Melakukan tindakan bedah kecil dengan aman dan efektif.',
    //     kebijakan: 'Standar Prosedur Operasional Rumah Sakit tentang Tindakan Bedah.',
    //     prosedur: [
    //         { step: 'Informed Consent', desc: 'Jelaskan prosedur, risiko, dan alternatif', detail: 'Dapatkan persetujuan tertulis' },
    //         { step: 'Persiapan Alat', desc: 'Siapkan instrumen steril', detail: 'Set bedah minor, benang, jarum, kasa' },
    //         { step: 'Desinfeksi', desc: 'Lakukan desinfeksi area operasi', detail: 'Dengan larutan antiseptik' },
    //         { step: 'Draping', desc: 'Pasang draping steril', detail: 'Batasi area operasi' },
    //         { step: 'Anestesi', desc: 'Beri anestesi lokal', detail: 'Lidokain 1-2%, jangan melebihi dosis' },
    //         { step: 'Tindakan', desc: 'Lakukan tindakan sesuai indikasi', detail: 'Eksisi, jahit, atau insisi' },
    //         { step: 'Kontrol Perdarahan', desc: 'Kontrol perdarahan', detail: 'Tekan, jahit, atau kauter' },
    //         { step: 'Penjahitan', desc: 'Jahit jika perlu', detail: 'Sesuai teknik yang tepat' },
    //         { step: 'Instruksi', desc: 'Beri instruksi pasca tindakan', detail: 'Perawatan luka dan tanda bahaya' }
    //     ],
    //     dokumenTerkait: ['Formulir Informed Consent Bedah', 'Checklist Keselamatan Pasien Bedah', 'Lembar Monitoring Pasca Bedah'],
    //     instalasiTerkait: ['Instalasi Bedah', 'Instalasi Rawat Jalan', 'Instalasi Farmasi']
    // },
    // { 
    //     id: 104, 
    //     title: 'ICU Protocol', 
    //     category: 'dokter', 
    //     description: 'Protokol penanganan pasien kritis di ICU.', 
    //     icon: 'fa-heartbeat', 
    //     tags: ['ICU', 'Kritis', 'Ventilator'],
    //     noDokumen: 'SOP/ICU/004/2025',
    //     tanggalTerbit: '1 Januari 2025',
    //     pengertian: 'Protokol ICU adalah panduan komprehensif untuk manajemen pasien kritis di Intensive Care Unit.',
    //     tujuan: 'Menstabilkan kondisi pasien kritis dan mencegah komplikasi.',
    //     kebijakan: 'Standar Pelayanan Intensive Care Unit Nasional.',
    //     prosedur: [
    //         { step: 'Evaluasi Awal', desc: 'Evaluasi awal pasien', detail: 'ABCDE survey' },
    //         { step: 'Monitoring', desc: 'Pasang monitor hemodinamik', detail: 'EKG, NIBP, SpO2' },
    //         { step: 'Ventilasi', desc: 'Atur mode ventilator sesuai kebutuhan', detail: 'Sesuaikan dengan kondisi pasien' },
    //         { step: 'Parameter', desc: 'Sesuaikan parameter ventilator', detail: 'TV, RR, FiO2, PEEP' },
    //         { step: 'Sedasi', desc: 'Beri sedasi dan analgetik', detail: 'Sesuai protokol sedasi' },
    //         { step: 'Monitoring Vital', desc: 'Monitor tanda vital tiap jam', detail: 'Tekanan darah, nadi, suhu, respirasi' },
    //         { step: 'AGD', desc: 'Cek AGD setiap 4 jam', detail: 'Evaluasi ventilasi dan oksigenasi' },
    //         { step: 'Weaning', desc: 'Lakukan weaning sedasi harian', detail: 'Kurangi sedasi bertahap' },
    //         { step: 'Koordinasi', desc: 'Koordinasi dengan tim multidisiplin', detail: 'Ronde bersama' }
    //     ],
    //     dokumenTerkait: ['Lembar Monitoring ICU', 'Checklist Ventilator', 'Formulir Skoring Keparahan'],
    //     instalasiTerkait: ['Instalasi ICU', 'Instalasi Gawat Darurat', 'Instalasi Laboratorium']
    // },
    // { 
    //     id: 105, 
    //     title: 'Transfusi Darah', 
    //     category: 'dokter', 
    //     description: 'Prosedur transfusi darah dan produk darah.', 
    //     icon: 'fa-droplet', 
    //     tags: ['Transfusi', 'Bank Darah', 'Reaksi'],
    //     noDokumen: 'SOP/TRF/005/2025',
    //     tanggalTerbit: '1 Januari 2025',
    //     pengertian: 'Transfusi darah adalah pemberian darah atau komponen darah kepada pasien yang membutuhkan.',
    //     tujuan: 'Meningkatkan kapasitas oksigen darah, koreksi koagulopati, atau mengganti komponen darah yang kurang.',
    //     kebijakan: 'Permenkes No. 91 Tahun 2015 tentang Pelayanan Transfusi Darah.',
    //     prosedur: [
    //         { step: 'Indikasi', desc: 'Cek indikasi transfusi', detail: 'HB <7, perdarahan aktif, atau koagulopati' },
    //         { step: 'Cross-match', desc: 'Lakukan cross-match', detail: 'Sesuai golongan darah' },
    //         { step: 'Identifikasi', desc: 'Cocokkan identitas pasien dengan kantong darah', detail: 'Nama, tanggal lahir, no RM' },
    //         { step: 'Double-check', desc: 'Double-check oleh dua petugas', detail: 'Perawat dan dokter' },
    //         { step: 'Transfusi', desc: 'Mulai transfusi perlahan', detail: '20 tetes/menit untuk 15 menit pertama' },
    //         { step: 'Observasi', desc: 'Observasi 15 menit pertama', detail: 'Cek reaksi alergi' },
    //         { step: 'Monitoring', desc: 'Monitor tanda vital', detail: 'Setiap 30 menit' },
    //         { step: 'Dokumentasi', desc: 'Dokumentasi dalam rekam medis', detail: 'Catat respons dan reaksi' }
    //     ],
    //     dokumenTerkait: ['Formulir Permintaan Darah', 'Lembar Monitoring Transfusi', 'Checklist Identifikasi Pasien'],
    //     instalasiTerkait: ['Instalasi Bank Darah', 'Instalasi Rawat Inap', 'Instalasi Gawat Darurat']
    // },
    // { 
    //     id: 106, 
    //     title: 'Endoskopi', 
    //     category: 'dokter', 
    //     description: 'Prosedur endoskopi saluran cerna.', 
    //     icon: 'fa-camera', 
    //     tags: ['Endoskopi', 'Saluran Cerna', 'Sedasi'],
    //     noDokumen: 'SOP/END/006/2025',
    //     tanggalTerbit: '1 Januari 2025',
    //     pengertian: 'Endoskopi adalah prosedur untuk melihat saluran cerna menggunakan kamera fleksibel.',
    //     tujuan: 'Diagnosis dan terapi kelainan saluran cerna.',
    //     kebijakan: 'Standar Pelayanan Endoskopi Nasional.',
    //     prosedur: [
    //         { step: 'Indikasi', desc: 'Konfirmasi indikasi endoskopi', detail: 'Dyspepsia, perdarahan, atau screening' },
    //         { step: 'Puasa', desc: 'Pastikan puasa 8 jam', detail: 'Pasien diabetes perlu pengaturan insulin' },
    //         { step: 'Jadwal', desc: 'Atur jadwal dengan tim endoskopi', detail: 'Koordinasi dengan perawat endoskopi' },
    //         { step: 'Monitoring', desc: 'Pasang monitoring', detail: 'EKG, NIBP, SpO2' },
    //         { step: 'Sedasi', desc: 'Beri sedasi', detail: 'Midazolam atau propofol' },
    //         { step: 'Inspeksi', desc: 'Lakukan inspeksi', detail: 'Perhatikan lesi atau kelainan' },
    //         { step: 'Biopsi', desc: 'Ambil biopsi jika perlu', detail: 'Masukkan dalam formalin' },
    //         { step: 'Dokumentasi', desc: 'Dokumentasi temuan', detail: 'Foto dan deskripsi' },
    //         { step: 'Observasi', desc: 'Observasi pasca tindakan', detail: 'Cek kesadaran dan tanda vital' }
    //     ],
    //     dokumenTerkait: ['Formulir Informed Consent Endoskopi', 'Lembar Hasil Endoskopi', 'Checklist Sedasi'],
    //     instalasiTerkait: ['Instalasi Endoskopi', 'Instalasi Bedah', 'Instalasi Farmasi']
    // }
];
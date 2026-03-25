/*

    Data SOP Perawat Tindakan
    Author: Aria Rahman, Siddiq Ahmad Anshori
    Title: sopDataPerawatTindakan
    Description: Data SOP Perawat Tindakan untuk Aplikasi Manajemen Keperawatan
    Note: Data SOP Perawat Tindakan, Range ID: 1001-...

**/

const sopDataPerawatTindakan = [

/*
 ===================================================================================
 Category FARMASI, ID: 1001 - 1099
 ===================================================================================
*/
    {
        id: 1001,
        title: 'Pemberian Koreksi Albumin',
        category: 'tindakan',
        subCategory: 'medikalBedah',
        description: 'Upaya memperbaiki jumlah albumin tubuh yang kurang dari kebutuhan melalui pemberian cairan albumin intravena.',
        icon: 'fa-tint',
        tags: ['Albumin', 'Infus', 'Koreksi', 'IV'],
        noDokumen: '445/SPO. 5810 /Bidper',
        tanggalTerbit: '22 April 2019',
        pengertian: 'Suatu upaya memperbaiki jumlah albumin tubuh yang kurang dari kebutuhan. Albumin sendiri adalah cairan intravenous yang terbuat dari pooled human venous plasma yang menggunakan proses Cohn-cold Etanol Fractionation Process.',
        tujuan: 'Sebagai acuan penerapan langkah langkah tindakan keperawatan dalam melakukan koreksi albumin.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Alat', desc: 'Siapkan cairan albumin, infusomat/infuset, infusion pump, discovic threeway, perlak dan alas', detail: 'Pastikan semua alat dalam kondisi steril dan siap pakai.' },
            { step: 'Persiapan Pasien', desc: 'Informasikan pada klien (bila sadar) atau keluarga tentang rencana pemberian obat albumin', detail: 'Berikan penjelasan tentang tujuan dan prosedur.' },
            { step: 'Perhitungan Dosis', desc: 'Hitung kebutuhan albumin', detail: 'Gunakan rumus: (C2 – C1) x (40 x BB) / 100 x 2 = gram, atau (C2 – C1) x 4 x BB = ml. C2: albumin yang diharapkan, C1: albumin saat ini.' },
            { step: 'Pelaksanaan', desc: 'Pasang perlak dan alas, sambungkan infusomat dengan IV catheter', detail: 'Pastikan tidak ada udara dalam selang infuset/infusomat.' },
            { step: 'Pengaturan Infus', desc: 'Pasang infusomat ke infusion pump dan atur tetesan sesuai kebutuhan', detail: 'Sesuaikan dengan instruksi dokter.' },
            { step: 'Observasi', desc: 'Observasi tanda-tanda vital dan reaksi pasien selama dan setelah pemberian', detail: 'Catat setiap perubahan yang terjadi.' },
            { step: 'Pembersihan', desc: 'Rapikan alat dan simpan ke tempat semula, cuci tangan', detail: 'Lakukan setelah tindakan selesai.' }
        ],
        dokumenTerkait: ['Catatan Asuhan Keperawatan', 'Format Observasi'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Terapi Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1002,
        title: 'Pemberian Obat Arixtra',
        category: 'tindakan',
        subCategory: 'farmasi',
        description: 'Pemberian obat Arixtra secara subcutan yang bekerja pada sistem pembekuan darah.',
        icon: 'fa-syringe',
        tags: ['Arixtra', 'SC', 'Antikoagulan', 'Subkutan'],
        noDokumen: '445/SPO.5811/Bidper',
        tanggalTerbit: '22 April 2019',
        pengertian: 'Suatu tindakan pemberian obat Arixtra secara subcutan yang merupakan suatu obat yang bekerja secara tidak langsung pada berbagai bagian sistem pembekuan darah.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah tindakan keperawatan dalam memberikan obat Arixtra.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Alat', desc: 'Siapkan obat Arixtra, bak spuit, kapas alkohol, perlak, alas, dan bengkok', detail: 'Pastikan dosis sesuai instruksi dokter.' },
            { step: 'Persiapan Pasien', desc: 'Berikan penjelasan tentang tujuan dan indikasi pemberian obat', detail: 'Ciptakan lingkungan yang aman dan nyaman.' },
            { step: 'Penentuan Area', desc: 'Tentukan area penyuntikan di dinding abdomen kiri/kanan, anterolateral, atau posterolateral', detail: 'Ukur 3 jari dari umbilicus.' },
            { step: 'Desinfeksi', desc: 'Lakukan desinfeksi dengan kapas alkohol pada area yang akan disuntik', detail: 'Tunggu hingga kering.' },
            { step: 'Penyuntikan', desc: 'Letakkan jari telunjuk dan tengah di area penyuntikan, masukkan jarum secara SC', detail: 'Masukkan obat dengan mendorong plunger sampai habis, angkat jarum dengan cepat.' },
            { step: 'Observasi', desc: 'Observasi tanda-tanda vital dan reaksi pasien', detail: 'Laporkan segera jika ada reaksi/efek samping.' },
            { step: 'Pembersihan', desc: 'Rapikan alat, cuci tangan', detail: 'Baca hamdallah setelah selesai.' }
        ],
        dokumenTerkait: ['Catatan Asuhan Keperawatan', 'Format Observasi'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Terapi Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1003,
        title: 'Pemberian Koreksi Bicnat',
        category: 'tindakan',
        subCategory: 'medikalBedah',
        description: 'Pemberian cairan intravena yang mengandung Sodium Bicarbonat 8,4% untuk koreksi asidosis.',
        icon: 'fa-flask',
        tags: ['Bicnat', 'Sodium Bicarbonat', 'Koreksi', 'Infus'],
        noDokumen: '445/SPO. 5812/Bidper',
        tanggalTerbit: '22 April 2019',
        pengertian: 'Suatu cara pemberian cairan intra venous yang mengandung Sodium Bicarbonat 8,4%.',
        tujuan: 'Sebagai acuan penerapan langkah langkah tindakan keperawatan dalam memberikan terapi Bicnat.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Alat', desc: 'Siapkan cairan sodium bicarbonat 8,4%, infusomat, infusion pump, discovic threeway, perlak dan alas', detail: 'Pastikan semua alat steril.' },
            { step: 'Persiapan Pasien', desc: 'Informasikan pada klien (bila sadar) atau keluarga tentang pemberian obat', detail: 'Berikan penjelasan prosedur.' },
            { step: 'Perhitungan Dosis', desc: 'Hitung kebutuhan bicnat', detail: 'Rumus: BE x BB / 3. Untuk pemberian ½ drip ½ bolus: (HCO3 normal - HCO3 hasil) x 0.4 x BB.' },
            { step: 'Pelaksanaan', desc: 'Pasang perlak dan alas, sambungkan infusomat dengan IV catheter', detail: 'Pastikan tidak ada udara dalam selang.' },
            { step: 'Pengaturan Infus', desc: 'Pasang infusomat ke infusion pump dan atur tetesan sesuai kebutuhan', detail: 'Sesuaikan dengan instruksi dokter.' },
            { step: 'Observasi', desc: 'Observasi tanda-tanda vital dan reaksi pasien', detail: 'Catat setiap perubahan.' },
            { step: 'Pembersihan', desc: 'Rapikan alat, cuci tangan', detail: 'Baca hamdallah setelah selesai.' }
        ],
        dokumenTerkait: ['Catatan Asuhan Keperawatan', 'Format Observasi'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Terapi Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1004,
        title: 'Pemberian Obat Dobutamin',
        category: 'tindakan',
        subCategory: 'farmasi',
        description: 'Pemberian obat Dobutamin intravena sebagai inotropik positif untuk memperbaiki otot jantung.',
        icon: 'fa-heart',
        tags: ['Dobutamin', 'Inotropik', 'IV', 'Jantung'],
        noDokumen: '445/SPO. 5813/Bidper',
        tanggalTerbit: '22 April 2019',
        pengertian: 'Suatu tindakan pemberian obat Dobutamin melalui intravenous yang merupakan senyawa sympathomimetic amine yang merupakan senyawa inotropik positif, Untuk memperbaiki otot jantung pada penanganan acute, congestive heart failure atau cardiogenic shock.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah tindakan keperawatan dalam memberikan obat Dobutamin.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Alat', desc: 'Siapkan obat Dobutamin, spuit, cairan pelarut, infusomat, infusion pump, discovic threeway, kapas alkohol, perlak, alas, plester', detail: 'Ketahui berat badan pasien.' },
            { step: 'Persiapan Pasien', desc: 'Berikan penjelasan tentang tujuan dan indikasi pemberian obat', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Pengenceran Obat', desc: 'Masukkan Dobutamin ke spuit, larutkan ke cairan pelarut', detail: 'Beri label nama obat, jumlah, dan tetesan.' },
            { step: 'Perhitungan Dosis', desc: 'Hitung tetesan dengan rumus: (Dosis µg x BB x 60) / cc pelarut', detail: 'Sesuaikan dengan instruksi dokter.' },
            { step: 'Pelaksanaan', desc: 'Keluarkan udara, pasang perlak, sambungkan infusomat dengan IV catheter', detail: 'Pasang ke infusion pump.' },
            { step: 'Pengaturan Infus', desc: 'Atur jumlah cairan dalam cc/jam, tekan "on" pada infusion pump', detail: 'Lakukan fiksasi dengan plester.' },
            { step: 'Observasi', desc: 'Observasi TTV dan reaksi pasien', detail: 'Laporkan jika ada efek samping.' },
            { step: 'Pembersihan', desc: 'Rapikan alat, cuci tangan', detail: 'Baca hamdallah setelah selesai.' }
        ],
        dokumenTerkait: ['Catatan Asuhan Keperawatan', 'Format Observasi'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Terapi Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1005,
        title: 'Pemberian Obat Dopamin',
        category: 'tindakan',
        subCategory: 'farmasi',
        description: 'Pemberian obat Dopamin intravena sebagai katekolamin inotropik positif dengan spektrum kerja tergantung dosis.',
        icon: 'fa-heartbeat',
        tags: ['Dopamin', 'Inotropik', 'IV', 'Kardiovaskular'],
        noDokumen: '445/SPO.5814/Bidper',
        tanggalTerbit: '22 April 2019',
        pengertian: 'Suatu tindakan pemberian obat Dopamin melalui intravenous yang merupakan merupakan senyawa katekolamin yang bersifat inotropik positif. Spektrum kerja dopamin tergantung pada dosis. Pada dosis rendah dapat mendilatasi pembuluh darah ginjal dan mesentrik.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah tindakan keperawatan dalam memberikan obat Dopamin.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Alat', desc: 'Siapkan obat Dopamin, spuit, cairan pelarut (glukosa 5%, NaCl 0,9%, RL), infusomat, infusion pump, discovic threeway, kapas alkohol, perlak, alas, plester', detail: 'Ketahui berat badan pasien.' },
            { step: 'Persiapan Pasien', desc: 'Berikan penjelasan tentang tujuan dan indikasi pemberian obat', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Pengenceran Obat', desc: 'Masukkan Dopamin ke spuit, larutkan ke cairan pelarut', detail: 'Beri label nama obat, jumlah, dan tetesan.' },
            { step: 'Perhitungan Dosis', desc: 'Hitung tetesan dengan rumus: (Dosis µg x BB x 60) / cc pelarut', detail: 'Sesuaikan dengan instruksi dokter.' },
            { step: 'Pelaksanaan', desc: 'Keluarkan udara, pasang perlak, sambungkan infusomat dengan IV catheter', detail: 'Pasang ke infusion pump.' },
            { step: 'Pengaturan Infus', desc: 'Atur jumlah cairan dalam cc/jam, tekan "on" pada infusion pump', detail: 'Lakukan fiksasi dengan plester.' },
            { step: 'Observasi', desc: 'Observasi TTV dan reaksi pasien', detail: 'Laporkan jika ada efek samping.' },
            { step: 'Pembersihan', desc: 'Rapikan alat, cuci tangan', detail: 'Baca hamdallah setelah selesai.' }
        ],
        dokumenTerkait: ['Catatan Asuhan Keperawatan', 'Format Observasi'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Terapi Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1006,
        title: 'Pemberian Obat Heparin',
        category: 'tindakan',
        subCategory: 'farmasi',
        description: 'Pemberian obat Heparin intravena yang bekerja pada sistem pembekuan darah intrinsik dan ekstrinsik.',
        icon: 'fa-tint',
        tags: ['Heparin', 'Antikoagulan', 'IV', 'Drip'],
        noDokumen: '445/SPO. 5815 /Bidper',
        tanggalTerbit: '22 April 2019',
        pengertian: 'Suatu tindakan pemberian obat Heparin melalui intravenous yang merupakan suatu obat yang bekerja secara tidak langsung pada berbagai bagian sistem pembekuan darah intrinsik dan ekstrinsik.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah tindakan keperawatan dalam memberikan obat Heparin.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Alat', desc: 'Siapkan obat Heparin, spuit 5 cc, cairan pelarut (glukosa 5%, martos, NaCl 0,9%), infuset, infusion pump, discovic threeway, kapas alkohol, perlak, alas, plester', detail: 'Persiapan lingkungan yang aman dan nyaman.' },
            { step: 'Persiapan Pasien', desc: 'Berikan penjelasan tentang tindakan yang akan dilakukan', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Pengenceran Obat', desc: 'Masukkan Heparin ke spuit, larutkan ke cairan pelarut', detail: 'Beri label nama obat, jumlah, dan tetesan.' },
            { step: 'Perhitungan Dosis', desc: 'Bolus 60 UI/kgBB (max 4000 IU), dilanjutkan drip 12 UI/kgBB (max 1000 IU/jam) selama 24-48 jam', detail: 'Rumus: dosis x 1 x BB / cc pelarut = cc/jam.' },
            { step: 'Pelaksanaan', desc: 'Keluarkan udara, pasang perlak, sambungkan infusomat dengan IV catheter', detail: 'Pasang ke infusion pump.' },
            { step: 'Pengaturan Infus', desc: 'Atur jumlah cairan sesuai perhitungan, tekan "on"', detail: 'Lakukan fiksasi dengan plester.' },
            { step: 'Observasi', desc: 'Observasi TTV dan reaksi pasien', detail: 'Target aPTT 50-70 detik. Periksa aPTT pada jam ke 3,6,12,24.' },
            { step: 'Pembersihan', desc: 'Rapikan alat, cuci tangan', detail: 'Baca hamdallah setelah selesai.' }
        ],
        dokumenTerkait: ['Catatan Asuhan Keperawatan', 'Format Observasi'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Terapi Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1007,
        title: 'Pemberian Obat Herbesser',
        category: 'tindakan',
        subCategory: 'farmasi',
        description: 'Pemberian obat Herbesser (Diltiazem) intravena untuk hipertensi, aritmia, dan angina pektoris.',
        icon: 'fa-heart',
        tags: ['Herbesser', 'Diltiazem', 'IV', 'Antiarrhytmia'],
        noDokumen: '445/SPO. 5816/Bidper',
        tanggalTerbit: '22 April 2019',
        pengertian: 'Suatu tindakan pemberian obat Herbesser melalui intravenous yang merupakan golongan ditiazem Hidroklorida yang mempunyai khasiat untuk pengobatan pada hipertensi, aritmia dan angina pektoris berhubungan dengan kemampuannya untuk melebarkan pembuluh-pembuluh darah dan untuk memanjangkan waktu konduksi titik atrioventrikular.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah tindakan keperawatan dalam memberikan therapi herbesser drip.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Alat', desc: 'Siapkan Herbesser amp, cairan pelarut D5% atau NaCl 0,9%, spuit 10 cc, infuset, infusion pump, discovic threeway, kapas alkohol, perlak, alas, plester', detail: 'Ketahui berat badan pasien.' },
            { step: 'Persiapan Pasien', desc: 'Berikan penjelasan tentang tindakan yang akan dilakukan', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Pengenceran Obat', desc: 'Masukkan Herbesser ke spuit, larutkan ke cairan pelarut', detail: 'Beri label nama obat, jumlah, dan tetesan.' },
            { step: 'Perhitungan Dosis', desc: 'Rumus: (Dosis µg x BB x 60) / cc pelarut', detail: 'cc pelarut = (isi dosis mg x 1000) / jumlah cairan pelarut.' },
            { step: 'Pelaksanaan', desc: 'Keluarkan udara, pasang perlak, sambungkan infuset dengan IV catheter', detail: 'Pasang ke infusion pump.' },
            { step: 'Pengaturan Infus', desc: 'Atur jumlah cairan sesuai perhitungan, tekan "on"', detail: 'Lakukan fiksasi dengan plester.' },
            { step: 'Observasi', desc: 'Observasi TTV dan reaksi pasien', detail: 'Laporkan jika ada efek samping.' },
            { step: 'Pembersihan', desc: 'Rapikan alat, cuci tangan', detail: 'Baca hamdallah setelah selesai.' }
        ],
        dokumenTerkait: ['Catatan Asuhan Keperawatan', 'Format Observasi'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Terapi Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1008,
        title: 'Pemberian Obat Humulin',
        category: 'tindakan',
        subCategory: 'farmasi',
        description: 'Pemberian obat Humulin (Insulin) intravena untuk mengoreksi kebutuhan nutrisi tubuh terutama gula.',
        icon: 'fa-syringe',
        tags: ['Humulin', 'Insulin', 'IV', 'Diabetes'],
        noDokumen: '445/SPO. 5817/Bidper',
        tanggalTerbit: '22 April 2019',
        pengertian: 'Suatu tindakan pemberian obat humulin melalui intravenous yang merupakan suatu hormon yang diproduksi oleh pankreas. Hormon ini berfungsi penting untuk mengoreksi kebutuhan nutrisi dalam tubuh terutama gula.',
        tujuan: 'Sebagai acuan langkah-langkah tindakan keperawatan dalam memberikan terapi Humulin.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Alat', desc: 'Siapkan Humulin 40 IU/100 IU, spuit insulin, cairan pelarut, infuset, infusion pump, discovic threeway, kapas alkohol, perlak, alas, plester', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Persiapan Pasien', desc: 'Berikan penjelasan tentang tindakan yang akan dilakukan', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Pengenceran Obat', desc: 'Masukkan Insulin ke spuit, larutkan ke cairan pelarut', detail: 'Beri label nama obat, jumlah, dan tetesan.' },
            { step: 'Perhitungan Dosis', desc: 'Rumus: (Dosis IU x cc pelarut) / Humulin tersedia IU = cc/jam', detail: 'Contoh: (2 IU x 500) / 40 IU = 25 cc/jam.' },
            { step: 'Pelaksanaan', desc: 'Keluarkan udara, pasang perlak, sambungkan infuset dengan IV catheter', detail: 'Pasang ke infusion pump.' },
            { step: 'Pengaturan Infus', desc: 'Atur jumlah cairan sesuai perhitungan, tekan "on"', detail: 'Lakukan fiksasi dengan plester.' },
            { step: 'Observasi', desc: 'Observasi TTV dan reaksi pasien', detail: 'Laporkan jika ada efek samping.' },
            { step: 'Pembersihan', desc: 'Rapikan alat, cuci tangan', detail: 'Baca hamdallah setelah selesai.' }
        ],
        dokumenTerkait: ['Catatan Asuhan Keperawatan', 'Format Observasi'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Terapi Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1009,
        title: 'Pemberian Obat Isoket 0,1%',
        category: 'tindakan',
        subCategory: 'farmasi',
        description: 'Pemberian obat Isoket (Isosorbide dinitrate) intravena untuk angina pectoris, acute myocard infark, dan acute gagal ventrikel kiri.',
        icon: 'fa-heartbeat',
        tags: ['Isoket', 'Isosorbide Dinitrate', 'IV', 'Vasodilator'],
        noDokumen: '445/SPO. 5818 /Bidper',
        tanggalTerbit: '22 April 2019',
        pengertian: 'Suatu tindakan pemberian obat Isoket 0,1 % melalui intravenous yang merupakan cairan konsentrat yang mengandung isosorbide dinitrate 1 mg/1 ml (0,1 %). Diberikan untuk pasien yang sudah ditegakkan diagnosa Angina Pectoris (Angina stabil dan angina tidak stabil), Acut Myocard Infark dan acut gagal Ventrikel kiri.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah tindakan keperawatan dalam memberikan obat isoket.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Alat', desc: 'Siapkan Isoket (1 amp/10 ml = 10 mg), spuit 10 cc, cairan pelarut Dextrose 5%, infusomat, infusion pump, discovic threeway, kapas alkohol, perlak, alas, plester', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Persiapan Pasien', desc: 'Berikan penjelasan tentang tindakan yang akan dilakukan', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Pengenceran Obat', desc: 'Untuk infusion pump: 5 amp dalam 500 mg. Untuk syring pump: 1 amp dalam 40 cc D5% spuit 50 cc', detail: 'Beri label nama obat, jumlah, dan tetesan.' },
            { step: 'Perhitungan Dosis', desc: 'Infusion pump: (Dosis mg/jam x cc pelarut) / sediaan isoket = cc/jam. Syring pump: dosis mulai 0,25 mg/jam', detail: 'Naikkan 0,25 mg/jam sesuai klinis.' },
            { step: 'Pelaksanaan', desc: 'Keluarkan udara, pasang perlak, sambungkan infuset dengan IV catheter', detail: 'Pasang ke infusion pump/syring pump.' },
            { step: 'Pengaturan Infus', desc: 'Atur jumlah cairan sesuai perhitungan, tekan "on"', detail: 'Lakukan fiksasi dengan plester.' },
            { step: 'Observasi', desc: 'Observasi TTV dan reaksi pasien', detail: 'Laporkan jika ada efek samping.' },
            { step: 'Pembersihan', desc: 'Rapikan alat, cuci tangan', detail: 'Baca hamdallah setelah selesai.' }
        ],
        dokumenTerkait: ['Catatan Asuhan Keperawatan', 'Format Observasi'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Terapi Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1010,
        title: 'Pemberian Dosis Kalium',
        category: 'tindakan',
        subCategory: 'medikalBedah',
        description: 'Pemberian cairan intravena yang mengandung Potassium Chlorida 7,46% untuk koreksi hipokalemia.',
        icon: 'fa-flask',
        tags: ['Kalium', 'Potassium', 'Koreksi', 'IV'],
        noDokumen: '445/SPO. 5819 /Bidper',
        tanggalTerbit: '22 April 2019',
        pengertian: 'Suatu kegiatan pemberian cairan intra venous yang mengandung potasium clorida 7,46%.',
        tujuan: 'Sebagai acuan penerapan langkah langkah tindakan keperawatan dalam memberikan terapi Kalium.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Alat', desc: 'Siapkan cairan kalium 7,46%, infusomat, infusion pump, discovic threeway, perlak dan alas', detail: 'Ciptakan lingkungan yang aman.' },
            { step: 'Persiapan Pasien', desc: 'Informasikan pada klien (bila sadar) atau keluarga tentang pemberian obat', detail: 'Berikan penjelasan prosedur.' },
            { step: 'Perhitungan Dosis', desc: 'Rumus: (Nilai normal kalium - hasil kalium) x BB / 3', detail: 'Contoh: (3.6 - 1.5) x 50 = 3.5 mEq.' },
            { step: 'Pelaksanaan', desc: 'Keluarkan udara dari selang infusomat, pasang perlak dan alas, sambungkan infusomat dengan IV catheter', detail: 'Pastikan tidak ada udara dalam selang.' },
            { step: 'Pengaturan Infus', desc: 'Pasang infusomat ke infusion pump, atur tetesan sesuai kebutuhan', detail: 'Sesuaikan dengan instruksi dokter.' },
            { step: 'Observasi', desc: 'Observasi tanda-tanda vital dan reaksi pasien', detail: 'Catat setiap perubahan.' },
            { step: 'Pembersihan', desc: 'Rapikan alat, cuci tangan', detail: 'Lakukan setelah tindakan selesai.' }
        ],
        dokumenTerkait: ['Lembar Observasi ICU', 'Catatan Asuhan Keperawatan'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Terapi Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1011,
        title: 'Pemberian Obat Natrium 3%',
        category: 'tindakan',
        subCategory: 'medikalBedah',
        description: 'Pemberian cairan intravena yang mengandung Sodium Chloride 3% untuk koreksi hiponatremia.',
        icon: 'fa-tint',
        tags: ['Natrium', 'NaCl 3%', 'Koreksi', 'IV'],
        noDokumen: '445/SPO. 5820/Bidper',
        tanggalTerbit: '22 April 2019',
        pengertian: 'Suatu tindakan pemberian cairan melalui intravenous yang mengandung sodium chloride 3%.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah tindakan keperawatan dalam memberikan therapi Nacl 3%.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Alat', desc: 'Siapkan cairan NaCl 3%, infusomat, infusion pump, discofix threeway, kapas alkohol, perlak, alas, plester', detail: 'Ketahui berat badan pasien.' },
            { step: 'Persiapan Pasien', desc: 'Berikan penjelasan tentang tindakan yang akan dilakukan', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Perhitungan Dosis', desc: 'Rumus: (Nilai normal Na - hasil Na) x BB / 3', detail: 'Hasil x 1000 / 541 = cc/24 jam.' },
            { step: 'Pelaksanaan', desc: 'Keluarkan udara, pasang perlak, sambungkan infusomat dengan IV catheter', detail: 'Pasang ke infusion pump.' },
            { step: 'Pengaturan Infus', desc: 'Atur jumlah cairan sesuai perhitungan, tekan "on"', detail: 'Lakukan fiksasi dengan plester.' },
            { step: 'Observasi', desc: 'Observasi TTV dan reaksi pasien', detail: 'Laporkan jika ada efek samping.' },
            { step: 'Pembersihan', desc: 'Rapikan alat, cuci tangan', detail: 'Baca hamdallah setelah selesai.' }
        ],
        dokumenTerkait: ['Catatan Asuhan Keperawatan', 'Format Observasi'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Terapi Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1012,
        title: 'Pemberian Obat Norepinephrine',
        category: 'tindakan',
        subCategory: 'farmasi',
        description: 'Pemberian obat Norepinephrine (Levosol) intravena sebagai vasopressor untuk meningkatkan tekanan darah.',
        icon: 'fa-heartbeat',
        tags: ['Norepinephrine', 'Levosol', 'Vasopressor', 'IV'],
        noDokumen: '445/SPO.5821/Bidper',
        tanggalTerbit: '22 April 2019',
        pengertian: 'Suatu tindakan pemberian obat Levosol injeksi melalui intravenous yang merupakan suatu obat yang kental dan kuat, harus diencerkan terlebih dahulu dalam larutan yang mengandung dextrose 5%, tidak dianjurkan dengan Nacl 0,9%.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah tindakan keperawatan dalam memberikan obat norepinephrine (levosol).',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Alat', desc: 'Siapkan Levosol injeksi (2 mg/2 ml atau 8 mg/8 ml), spuit 5 cc dan 50 cc, cairan pelarut Dextrose 5%, perpusor syring, syring pump, discovic threeway, kapas alkohol, perlak, alas, plester', detail: 'Ketahui berat badan pasien.' },
            { step: 'Persiapan Pasien', desc: 'Berikan penjelasan tentang tujuan dan indikasi pemberian obat', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Pengenceran Obat', desc: 'Masukkan levosol 2 mg/2 ml sebanyak 2 amp ke spuit 5 cc, larutkan dalam cairan pelarut', detail: '2 amp = 4 mg = 4000 mcg. Dalam 50 ml = 80 mcg/cc.' },
            { step: 'Perhitungan Dosis', desc: 'Dosis awal 0,05 mcg/kgBB/menit. Rumus: (Dosis x BB x 60) / cc cairan pelarut', detail: 'Sesuaikan dengan instruksi dokter.' },
            { step: 'Pelaksanaan', desc: 'Keluarkan udara, pasang perlak, sambungkan perpusor dengan IV catheter', detail: 'Pasang ke syring pump.' },
            { step: 'Pengaturan Infus', desc: 'Atur jumlah cairan sesuai perhitungan, tekan "on"', detail: 'Lakukan fiksasi dengan plester.' },
            { step: 'Observasi', desc: 'Observasi TTV dan reaksi pasien (hipertensi, pusing, bradikardi)', detail: 'Laporkan jika ada efek samping.' },
            { step: 'Pembersihan', desc: 'Rapikan alat, cuci tangan', detail: 'Baca hamdallah setelah selesai.' }
        ],
        dokumenTerkait: ['Catatan Asuhan Keperawatan', 'Format Observasi'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Terapi Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1013,
        title: 'Pemberian Obat Perdipine',
        category: 'tindakan',
        subCategory: 'farmasi',
        description: 'Pemberian obat Perdipine (Nicardipine) intravena untuk penanganan krisis hipertensi.',
        icon: 'fa-heart',
        tags: ['Perdipine', 'Nicardipine', 'IV', 'Antihipertensi'],
        noDokumen: '445/SPO. 5822/Bidper',
        tanggalTerbit: '22 April 2019',
        pengertian: 'Suatu tindakan pemberian obat Perdipine melalui intravenous yang merupakan golongan Nicardipine hidrochlorida untuk penanganan krisis hipertensi yaitu menurunkan tekanan darah secara bertahap sampai nilai tekanan darah yang diinginkan tercapai dan mempunyai efek vasodilatory pada pembuluh darah jantung serta meningkatkan volume urine.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah tindakan keperawatan dalam memberikan therapi perdipine injeksi.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Alat', desc: 'Siapkan Perdipine, cairan pelarut D5% atau NaCl 0,9%, spuit 10 cc, infuset, infusion pump, discovic threeway, kapas alkohol, perlak, alas, plester', detail: 'Ketahui berat badan pasien.' },
            { step: 'Persiapan Pasien', desc: 'Berikan penjelasan tentang tindakan yang akan dilakukan', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Pengenceran Obat', desc: 'Masukkan Perdipine ke spuit, larutkan ke cairan pelarut', detail: 'Beri label nama obat, jumlah, dan tetesan.' },
            { step: 'Perhitungan Dosis', desc: 'Rumus: (mcg x BB x 60) / cc pelarut', detail: 'cc pelarut = (kandungan mg obat x 1000) / jumlah cairan pelarut.' },
            { step: 'Pelaksanaan', desc: 'Keluarkan udara, pasang perlak, sambungkan infuset dengan IV catheter', detail: 'Pasang ke infusion pump.' },
            { step: 'Pengaturan Infus', desc: 'Atur jumlah cairan sesuai perhitungan, tekan "on"', detail: 'Lakukan fiksasi dengan plester.' },
            { step: 'Observasi', desc: 'Observasi TTV dan reaksi pasien', detail: 'Laporkan jika ada efek samping.' },
            { step: 'Pembersihan', desc: 'Rapikan alat, cuci tangan', detail: 'Baca hamdallah setelah selesai.' }
        ],
        dokumenTerkait: ['Catatan Asuhan Keperawatan', 'Format Observasi'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Terapi Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1014,
        title: 'Pemberian Obat Streptase',
        category: 'tindakan',
        subCategory: 'farmasi',
        description: 'Pemberian obat Streptase (Streptokinase) intravena sebagai trombolitik untuk melisiskan bekuan darah.',
        icon: 'fa-syringe',
        tags: ['Streptase', 'Streptokinase', 'Trombolitik', 'IV'],
        noDokumen: '445/SPO.5823/Bidper',
        tanggalTerbit: '22 April 2019',
        pengertian: 'Suatu tindakan pemberian obat Streptase melalui intravenous yang merupakan suatu derivat dari culture Filtrat beta haemolitik streptococci (Streptokinase 1.500.000 ui).',
        tujuan: 'Sebagai acuan penerapan langkah-langkah tindakan keperawatan dalam memberikan obat streptase.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Alat', desc: 'Siapkan streptase 1.500.000 UI, spuit 5 cc, cairan pelarut (RI, D5%, NaCl 0,9%), infuset, infusion pump, discovic threeway, kapas alkohol, perlak, alas, plester', detail: 'Kolaborasi dengan lab untuk pemeriksaan PT, PTT.' },
            { step: 'Persiapan Pasien', desc: 'Berikan penjelasan tentang tindakan yang akan dilakukan', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Premedikasi', desc: 'Berikan ranitidine 1 amp dan deladril 1/2 amp bolus sebelum pemberian streptase', detail: 'Lakukan kolaborasi dengan dokter.' },
            { step: 'Pengenceran Obat', desc: 'Masukkan streptase ke spuit, larutkan ke cairan pelarut', detail: 'Beri label nama obat, jumlah, dan tetesan.' },
            { step: 'Pemberian', desc: 'Setting waktu pemberian streptase 15 s.d 1 jam sesuai KU pasien', detail: 'Pasang ke infusion pump.' },
            { step: 'Observasi', desc: 'Observasi TTV dan KU pasien', detail: 'Jika terjadi penurunan (shock), tetesan diturunkan sampai habis, berikan NaCl 0,9% tetesan cepat.' },
            { step: 'Pembersihan', desc: 'Rapikan alat, cuci tangan', detail: 'Baca hamdallah setelah selesai.' }
        ],
        dokumenTerkait: ['Catatan Asuhan Keperawatan', 'Format Observasi'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Terapi Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1015,
        title: 'Pemberian Obat Xylocaine',
        category: 'tindakan',
        subCategory: 'farmasi',
        description: 'Pemberian obat Xylocaine (Lidocaine) intravena sebagai antiaritmia dan anestesi lokal.',
        icon: 'fa-heart',
        tags: ['Xylocaine', 'Lidocaine', 'IV', 'Antiarrhytmia'],
        noDokumen: '445/SPO. 5824/Bidper',
        tanggalTerbit: '22 April 2019',
        pengertian: 'Suatu tindakan pemberian obat Xylocaine melalui intravenous yang merupakan suatu Kelompok agen membran stabil dan local anestesi tipe amide yang mempunyai efek terhadap excitable membran otot dan otot jantung.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah tindakan keperawatan dalam memberikan obat Xylocaine.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Alat', desc: 'Siapkan xylocaine 2% 10 ml (200 mg), spuit 10 cc, cairan pelarut (glukosa 5%, NaCl 0,9%), infusomat, infusion pump, discovic threeway, kapas alkohol, perlak, alas, plester', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Persiapan Pasien', desc: 'Berikan penjelasan tentang tujuan dan indikasi pemberian obat', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Pengenceran Obat', desc: 'Masukkan xylocaine ke spuit, larutkan ke cairan pelarut', detail: 'Beri label nama obat, jumlah, dan tetesan.' },
            { step: 'Perhitungan Dosis', desc: 'Rumus: (Dosis x 60) / (mg dalam cc) atau (cairan pelarut x dosis x 60) / sediaan obat', detail: 'Contoh: (1 mg x 60) / 0.8 = 75 cc/jam.' },
            { step: 'Pelaksanaan', desc: 'Keluarkan udara, pasang perlak, sambungkan infusomat dengan IV catheter', detail: 'Pasang ke infusion pump.' },
            { step: 'Pengaturan Infus', desc: 'Atur jumlah cairan sesuai perhitungan, tekan "on"', detail: 'Lakukan fiksasi dengan plester.' },
            { step: 'Observasi', desc: 'Observasi TTV dan reaksi pasien', detail: 'Laporkan jika ada efek samping.' },
            { step: 'Pembersihan', desc: 'Rapikan alat, cuci tangan', detail: 'Baca hamdallah setelah selesai.' }
        ],
        dokumenTerkait: ['Catatan Asuhan Keperawatan', 'Format Observasi'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Terapi Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1016,
        title: 'Pemberian Obat Diuretik',
        category: 'tindakan',
        subCategory: 'farmasi',
        description: 'Pemberian obat diuretik (Lasix) intravena untuk mengatasi retensi cairan dan edema.',
        icon: 'fa-tint',
        tags: ['Diuretik', 'Lasix', 'IV', 'Edema'],
        noDokumen: '445/SPO. 5825/Bidper',
        tanggalTerbit: '22 April 2019',
        pengertian: 'Suatu tindakan pemberian obat lasik melalui intravenous yang merupakan suatu Kelompok obat golongan diuretic untuk membantu mengobati retensi cairan (oedema) dan pembengkakan yang disebabkan oleh kegagalan jantung kongestif, penyakit hati, penyakit ginjal/untuk meningkatkan aliran urine.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah tindakan keperawatan dalam memberikan obat Diuretik.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Alat', desc: 'Siapkan lasix 1 amp (2 ml = 20 mg), spuit 10 cc, cairan pelarut (glukosa 5%, NaCl 0,9%), infusomat, infusion pump, discovic threeway, kapas alkohol, perlak, alas, plester', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Persiapan Pasien', desc: 'Berikan penjelasan tentang tujuan dan indikasi pemberian obat', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Pengenceran Obat', desc: 'Masukkan lasix ke spuit, larutkan ke cairan pelarut', detail: 'Beri label nama obat, jumlah, dan tetesan.' },
            { step: 'Perhitungan Dosis', desc: 'Rumus: (Dosis yang dibutuhkan / Sediaan Obat) x Cairan Pelarut', detail: 'Contoh: (5 mg / 100 mg) x 100 cc = 5 cc/jam.' },
            { step: 'Pelaksanaan', desc: 'Keluarkan udara, pasang perlak, sambungkan infusomat dengan IV catheter', detail: 'Pasang ke infusion pump.' },
            { step: 'Pengaturan Infus', desc: 'Atur jumlah cairan sesuai perhitungan, tekan "on"', detail: 'Lakukan fiksasi dengan plester.' },
            { step: 'Observasi', desc: 'Observasi TTV dan reaksi pasien', detail: 'Laporkan jika ada efek samping.' },
            { step: 'Pembersihan', desc: 'Rapikan alat, cuci tangan', detail: 'Baca hamdallah setelah selesai.' }
        ],
        dokumenTerkait: ['Catatan Asuhan Keperawatan', 'Format Observasi'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Terapi Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1017,
        title: 'Pemberian Obat Amiodaron',
        category: 'tindakan',
        subCategory: 'farmasi',
        description: 'Pemberian obat Amiodaron (Cordarone) intravena sebagai antiaritmia untuk memperbaiki irama jantung.',
        icon: 'fa-heart',
        tags: ['Amiodaron', 'Cordarone', 'IV', 'Antiarrhytmia'],
        noDokumen: '445/SPO. 5826/Bidper',
        tanggalTerbit: '22 April 2019',
        pengertian: 'Suatu tindakan pemberian obat cordarone melalui intravenous yang mengandung senyawa aktif amiodarone yang bekerja dengan mekanisme menghambat repolarisasi, memperbaiki aksi potensial jantung, memperlambat system konduksi jantung, dan memperbaiki pacemaker.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah tindakan keperawatan dalam memberikan obat cordaron.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Alat', desc: 'Siapkan cordarone (1 amp 150 mg/3 ml), spuit 10 cc/50 cc, cairan pelarut glukosa 5%, perfusor syringe, syring pump, discovic threeway, kapas alkohol, perlak, alas, plester', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Persiapan Pasien', desc: 'Berikan penjelasan tentang tujuan dan indikasi pemberian obat', detail: 'Lakukan pemeriksaan lab SGOT dan SGPT terlebih dahulu.' },
            { step: 'Pengenceran Obat', desc: 'Masukkan cordarone ke spuit, larutkan ke cairan pelarut', detail: 'Beri label nama obat, jumlah, dan tetesan.' },
            { step: 'Pemberian Dosis', desc: 'Bolus 150 mg dalam D5% 100 cc selama 10 menit. Dilanjutkan 360 mg (1 mg/mnt) selama 6 jam, maintenance 540 mg (0,5 mg/mnt) selama 18 jam', detail: 'Dosis maksimal 2 gr/24 jam.' },
            { step: 'Pelaksanaan', desc: 'Keluarkan udara, pasang perlak, sambungkan perfusor dengan IV catheter', detail: 'Pasang ke syring pump.' },
            { step: 'Pengaturan Infus', desc: 'Atur jumlah cairan sesuai perhitungan, tekan "on"', detail: 'Lakukan fiksasi dengan plester.' },
            { step: 'Observasi', desc: 'Observasi TTV dan reaksi pasien', detail: 'Laporkan jika ada efek samping.' },
            { step: 'Pembersihan', desc: 'Rapikan alat, cuci tangan', detail: 'Baca hamdallah setelah selesai.' }
        ],
        dokumenTerkait: ['Catatan Asuhan Keperawatan', 'Format Observasi'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Terapi Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1018,
        title: 'Pemberian Obat Alteplase',
        category: 'tindakan',
        subCategory: 'farmasi',
        description: 'Pemberian obat Alteplase (t-PA) intravena sebagai trombolitik untuk stroke iskemik dan infark miokard.',
        icon: 'fa-syringe',
        tags: ['Alteplase', 't-PA', 'Trombolitik', 'Stroke'],
        noDokumen: '445/SPO.5827/Bidper',
        tanggalTerbit: '22 April 2019',
        pengertian: 'Suatu tindakan pemberian obat Altheplase melalui intravenous yang merupakan suatu derivat dari culture Filtrat beta haemolitik streptococci.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah tindakan keperawatan dalam memberikan obat alteplase.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Alat', desc: 'Siapkan alteplase, spuit 10 cc, cairan pelarut (D5%, NaCl 0,9%), infuset, infusion pump, discovic threeway, kapas alkohol, perlak, alas, plester', detail: 'Kolaborasi lab untuk PT, PTT.' },
            { step: 'Persiapan Pasien', desc: 'Berikan penjelasan tentang tindakan yang akan dilakukan', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Premedikasi', desc: 'Berikan ranitidine 1 amp dan deladril 1/2 amp bolus sebelum pemberian', detail: 'Lakukan kolaborasi dengan dokter.' },
            { step: 'Perhitungan Dosis Stroke', desc: 'Dosis 0,9 mg/kgBB maksimal 90 mg. 10% bolus IV, 90% drip selama 60 menit', detail: 'Harus dimulai dalam 4,5 jam setelah serangan.' },
            { step: 'Perhitungan Dosis MI', desc: 'Bolus 15 mg, dilanjutkan 0,75 mg/kgBB selama 30 menit (max 50 mg), lalu 0,5 mg/kgBB selama 60 menit (max 35 mg)', detail: 'Untuk onset gejala ≤ 6 jam.' },
            { step: 'Pemberian', desc: 'Setting infuse pump sesuai perhitungan', detail: 'Observasi TTV dan KU pasien.' },
            { step: 'Pembersihan', desc: 'Rapikan alat, cuci tangan', detail: 'Baca hamdallah setelah selesai.' }
        ],
        dokumenTerkait: ['Catatan Asuhan Keperawatan', 'Format Observasi'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Terapi Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1019,
        title: 'Pemberian Obat Adenosin',
        category: 'tindakan',
        subCategory: 'farmasi',
        description: 'Pemberian obat Adenosin intravena sebagai antiaritmia untuk memperlambat konduksi elektrik jantung.',
        icon: 'fa-heart',
        tags: ['Adenosin', 'Antiarrhytmia', 'IV', 'Bolus'],
        noDokumen: '445/SPO.5828/Bidper',
        tanggalTerbit: '22 April 2019',
        pengertian: 'Suatu tindakan pemberian obat melalui intra venus yang merupakan suatu obat yang bekerja anti aritmia dengan cara memperlambat konduksi elektrik dalam jantung, memperlambat detak jantung dan menormalkan irama jantung.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah tindakan keperawatan dalam memberikan therapi Adenosin injeksi.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Alat', desc: 'Siapkan Adenosin, cairan pelarut NaCl 0,9%, spuit 3 cc dan 20 cc, discovic threeway, bak spuit, kapas alkohol, perlak, alas, bengkok', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Persiapan Pasien', desc: 'Berikan penjelasan tentang tindakan yang akan dilakukan', detail: 'Atur posisi pasien trendelenburg.' },
            { step: 'Pelaksanaan', desc: 'Larutkan 6 mg dalam 10 cc NaCl 0,9%', detail: 'Bolus secepat mungkin 1-3 detik, diikuti flush NaCl 10-20 cc.' },
            { step: 'Dosis Lanjutan', desc: 'Jika tidak respon, dosis ke-2: 12 mg diikuti flush. Jika tidak respon, dosis ke-3: 12 mg diikuti flush', detail: 'Jarak antar dosis 1-2 menit.' },
            { step: 'Evaluasi', desc: 'Observasi gambaran EKG', detail: 'Jika tidak berhasil, pertimbangkan kardioversi.' },
            { step: 'Dokumentasi', desc: 'Dokumentasikan kegiatan', detail: 'Catat dalam catatan asuhan keperawatan.' }
        ],
        dokumenTerkait: ['Catatan Asuhan Keperawatan', 'Format Observasi'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Terapi Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1020,
        title: 'Pemberian Obat Nitrogliserin (NTG)',
        category: 'tindakan',
        subCategory: 'farmasi',
        description: 'Pemberian obat Nitrogliserin intravena sebagai vasodilator untuk angina dan hipertensi.',
        icon: 'fa-heartbeat',
        tags: ['NTG', 'Nitrogliserin', 'Vasodilator', 'IV'],
        noDokumen: '445/SPO. 5829 /Bidper',
        tanggalTerbit: '22 April 2019',
        pengertian: 'Suatu tindakan pemberian obat nitrogliserin melalui intra venus yang merupakan suatu obat yang bekerja sebagai vasodilator.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah tindakan keperawatan dalam memberikan obat nitrogliserin.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Alat', desc: 'Siapkan NTG (1 amp = 10 mg), spuit 10 cc dan 50 cc, cairan pelarut Dextrose 5%, perpusor syring, syring pump, discovic threeway, kapas alkohol, perlak, alas, plester', detail: 'Ketahui berat badan pasien.' },
            { step: 'Persiapan Pasien', desc: 'Berikan penjelasan tentang tujuan dan indikasi pemberian obat', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Pengenceran Obat', desc: 'Masukkan NTG 10 mg ke spuit, larutkan dalam cairan pelarut', detail: '1 amp = 10 mg = 1000 mcg. Dalam 50 ml = 200 mcg/cc.' },
            { step: 'Perhitungan Dosis', desc: 'Dosis awal 25 mcg/menit. Rumus: (Dosis x 60) / cc cairan pelarut', detail: 'Contoh: (25 x 60) / 200 = 7,5 cc/jam.' },
            { step: 'Pelaksanaan', desc: 'Keluarkan udara, pasang perlak, sambungkan perpusor dengan IV catheter', detail: 'Pasang ke syring pump.' },
            { step: 'Observasi', desc: 'Observasi TTV, bila hipotensi segera hentikan', detail: 'Sesuaikan dosis dengan indikasi (pembedahan, angina, gagal jantung).' },
            { step: 'Pembersihan', desc: 'Rapikan alat, cuci tangan', detail: 'Baca hamdallah setelah selesai.' }
        ],
        dokumenTerkait: ['Catatan Asuhan Keperawatan', 'Format Observasi'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Terapi Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1021,
        title: 'Pemberian Obat Ca Glukonas',
        category: 'tindakan',
        subCategory: 'farmasi',
        description: 'Pemberian obat Calcium Gluconate intravena untuk koreksi hiperkalemia dan hipokalsemia.',
        icon: 'fa-flask',
        tags: ['Ca Glukonas', 'Kalsium', 'Koreksi', 'IV'],
        noDokumen: '445/SPO. 5830 /Bidper',
        tanggalTerbit: '22 April 2019',
        pengertian: 'Suatu tindakan pemberian obat melalui intra venus yang merupakan suatu obat yang bekerja untuk mengoreksi pasien pasien yang mengalami hypercalemi dan hipocalsemi.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah tindakan keperawatan dalam memberikan therapi injeksi Ca Gluconas.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Alat', desc: 'Siapkan Ca Glukonas, cairan pelarut NaCl 0,9% atau D5%, spuit 10 cc, infuset, discovic threeway, bak spuit, kapas alkohol, perlak, alas, bengkok', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Persiapan Pasien', desc: 'Berikan penjelasan tentang tindakan yang akan dilakukan', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Pengenceran Obat', desc: 'Larutkan Ca glukonas 4 amp dalam 100 cc NaCl 0,9% atau D5%', detail: 'Beri label nama obat, jumlah, dan tetesan.' },
            { step: 'Perhitungan Dosis', desc: 'Dosis yang dibutuhkan 60-100 mcg/kgBB', detail: 'Dapat diulang sesuai indikasi.' },
            { step: 'Pelaksanaan', desc: 'Keluarkan udara, pasang perlak, sambungkan infuset dengan IV catheter', detail: 'Atur tetesan untuk cairan habis dalam 30 menit sampai 1 jam.' },
            { step: 'Evaluasi', desc: 'Observasi gambaran EKG, cek elektrolit post koreksi', detail: 'Catat dalam catatan asuhan keperawatan.' }
        ],
        dokumenTerkait: ['Catatan Asuhan Keperawatan', 'Format Observasi'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Terapi Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1022,
        title: 'Pemberian Obat Digoxin',
        category: 'tindakan',
        subCategory: 'farmasi',
        description: 'Pemberian obat Digoxin intravena untuk meningkatkan kekuatan kontraksi otot jantung.',
        icon: 'fa-heart',
        tags: ['Digoxin', 'Inotropik', 'IV', 'Jantung'],
        noDokumen: '445/SPO. 5831 /Bidper',
        tanggalTerbit: '22 April 2019',
        pengertian: 'Suatu tindakan pemberian obat melalui intra venus yang merupakan suatu obat yang bekerja untuk meningkatkan kekuatan kontraksi otot jantung.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah tindakan keperawatan dalam memberikan therapi injeksi digoxin.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Alat', desc: 'Siapkan digoxin, cairan pelarut NaCl 0,9% atau D5% 100 cc, spuit 5 cc, infuset, discovic threeway, bak spuit, kapas alkohol, perlak, alas, bengkok', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Persiapan Pasien', desc: 'Berikan penjelasan tentang tindakan yang akan dilakukan', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Pengenceran Obat', desc: 'Larutkan digoxin ½ sampai 1 amp dalam 10 cc NaCl 0,9% atau D5%', detail: 'Beri label nama obat, jumlah, dan tetesan.' },
            { step: 'Pemberian', desc: 'Bolus pelan selama 15 menit, atau drip dalam 100 cc pelarut selama ½ - 1 jam', detail: 'Dosis yang dibutuhkan 10-15, dapat diulang setelah 4 jam.' },
            { step: 'Pelaksanaan', desc: 'Keluarkan udara, pasang perlak, sambungkan infuset dengan IV catheter', detail: 'Pasang ke infusion pump.' },
            { step: 'Evaluasi', desc: 'Observasi gambaran EKG', detail: 'Catat dalam catatan asuhan keperawatan.' }
        ],
        dokumenTerkait: ['Catatan Asuhan Keperawatan', 'Format Observasi'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Terapi Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1023,
        title: 'Pemberian Obat MgSO4',
        category: 'tindakan',
        subCategory: 'farmasi',
        description: 'Pemberian obat Magnesium Sulfat intravena untuk berbagai indikasi termasuk pre-eklampsia dan aritmia.',
        icon: 'fa-syringe',
        tags: ['MgSO4', 'Magnesium Sulfat', 'IV', 'Elektrolit'],
        noDokumen: '445/SPO. 3832 /Bidper',
        tanggalTerbit: '22 April 2019',
        pengertian: 'Suatu tindakan pemberian obat melalui intra venus yang merupakan suatu obat yang bekerja untuk meningkatkan kekuatan kontraksi otot jantung.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah tindakan keperawatan dalam memberikan therapi injeksi digoxin.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Alat', desc: 'Siapkan MgSO4, cairan pelarut NaCl 0,9% atau D5% 100 cc, spuit 5 cc, infuset, discovic threeway, bak spuit, kapas alkohol, perlak, alas, bengkok', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Persiapan Pasien', desc: 'Berikan penjelasan tentang tindakan yang akan dilakukan', detail: 'Ciptakan lingkungan aman dan nyaman.' },
            { step: 'Pengenceran Obat', desc: 'Larutkan MgSO4 sampai 1 amp dalam 10 cc NaCl 0,9% atau D5%', detail: 'Beri label nama obat, jumlah, dan tetesan.' },
            { step: 'Pemberian', desc: 'Bolus pelan selama 15 menit, atau drip dalam 100 cc pelarut selama ½ - 1 jam', detail: 'Dosis yang dibutuhkan 10-15, dapat diulang setelah 4 jam.' },
            { step: 'Pelaksanaan', desc: 'Keluarkan udara, pasang perlak, sambungkan infuset dengan IV catheter', detail: 'Pasang ke infusion pump.' },
            { step: 'Evaluasi', desc: 'Observasi gambaran EKG', detail: 'Catat dalam catatan asuhan keperawatan.' }
        ],
        dokumenTerkait: ['Catatan Asuhan Keperawatan', 'Format Observasi'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Terapi Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },


/*
 ===================================================================================
 Category ONKOLOGI, ID: 1101 - 1199
 ===================================================================================
*/
    {
        id: 1101,
        title: 'Alur Pelayanan Pasien Kemoterapi',
        category: 'tindakan',
        subCategory: 'onkologi',
        description: 'Arah atau petunjuk bagi pasien kanker untuk mendapatkan layanan kemoterapi sesuai status administrasi.',
        icon: 'fa-route',
        tags: ['Kemoterapi', 'Alur Pelayanan', 'Onkologi', 'BPJS', 'Kanker'],
        noDokumen: '445/SPO 8260 IPKT',
        tanggalTerbit: '25 November 2021',
        pengertian: 'Arah atau petunjuk bagi pasien kanker baik dengan status administrasi umum/kontraktor atau BPJS untuk mendapatkan layanan kemoterapi.',
        tujuan: '1. Mempermudah pasien kanker dengan status administrasi umum/kontraktor atau BPJS untuk segera mendapatkan pelayanan kemoterapi. 2. Memberikan petunjuk bagi pasien yang akan mendapatkan pelayanan kemoterapi bagian layanan mana yang harus dituju baik untuk mendapatkan layanan administrasi, konseling kanker, obat, dan pemberian kemoterapi.',
        kebijakan: 'Untuk pasien kanker baik dengan status administrasi umum/kontraktor atau BPJS yang akan mendapatkan kemoterapi.',
        prosedur: [
            {
                step: 'ALUR KEMOTERAPI TAHAP I',
                items: [
                    {
                        desc: 'ALUR I - Pasien Umum/Kontraktor',
                        detail: 'a. Pasien kanker dengan administrasi umum/kontraktor\nb. Melakukan Pendaftaran\nc. Ke Ruang Tindakan Kemoterapi\nd. Melakukan Pemeriksaan Laboratorium\ne. Apabila Hasil Laboratorium Dan TTV Normal\nf. Melaporkan Ke Farmasi Untuk Melakukan Tindakan Mixing\ng. Melakukan Kemoterapi\nh. Saat di Lakukan Kemoterapi Pasien Stabil\ni. Pasien PULANG\nj. Saat Di Lakukan Kemoterapi Pasien Tidak Stabil dan Kondisi Menurun\nk. Pergi ke IGD\nl. Jika pasien tidak stabil dan kondisi menurun pada saat jam kerja maka pasien bisa langsung daftar ke ruang intensif langsung melalui pendaftaran rawat Inap.\nm. Apabila Hasil Laboratorium dan TTV tidak Normal\nn. Melakukan administrasi untuk pembuatan buku rawat inap\no. Rawat Inap'
                    },
                    {
                        desc: 'ALUR II - Pasien BPJS',
                        detail: 'a. Pasien kanker dengan administrasi BPJS PBI dan NON PBI\nb. Melakukan Pendaftaran Pembuatan SEP\nc. Ke Ruang Tindakan Kemoterapi\nd. Melakukan Pemeriksaan Laboratorium\ne. Apabila Hasil Laboratorium Dan TTV Normal\nf. Melaporkan Ke Farmasi Untuk Melakukan Tindakan Mixing\ng. Melakukan Kemoterapi\nh. Saat di Lakukan Kemoterapi Pasien Stabil\ni. Pasien PULANG\nj. Saat Di Lakukan Kemoterapi Pasien Tidak Stabil dan Kondisi Menurun\nk. Pergi ke IGD\nl. Jika pasien tidak stabil dan kondisi menurun pada saat jam kerja maka pasien bisa langsung daftar ke ruang intensif langsung melalui pendaftaran rawat inap.\nm. Apabila Hasil Laboratorium dan TTV tidak Normal\nn. Melakukan administrasi untuk pembuatan buku rawat inap'
                    }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Kelengkapan administrasi, kelengkapan obat kemoterapi, hasil laboratorium'
            }
        ],
        dokumenTerkait: ['Panduan Pelayanan Kemoterapi'],
        instalasiTerkait: ['Instalasi Farmasi', 'Instalasi Rawat Inap', 'Instalasi Rawat Jalan', 'Instalasi Gawat Darurat', 'Instalasi Anestesi dan Terapi Intensif', 'Bagian Keuangan']
    },
    {
        id: 1102,
        title: 'Protokol Kemoterapi',
        category: 'tindakan',
        subCategory: 'onkologi',
        description: 'Aturan dan standar pemberian kemoterapi yang mengatur dosis, pelarut, waktu, dan metode pemberian obat.',
        icon: 'fa-table',
        tags: ['Kemoterapi', 'Protokol', 'Onkologi', 'Obat Sitostatika'],
        noDokumen: '445/SPO 8267 IPKT',
        tanggalTerbit: '25 November 2021',
        pengertian: 'Adalah aturan atau standar yang mengatur atau mengijinkan dilaksanakannya tindakan pemberian kemoterapi.',
        tujuan: 'Sebagai acuan atau panduan seorang tenaga medis atau paramedis yang sudah terlatih dalam pemberian kemoterapi. Mencegah terjadinya kesalahan dalam pemberian kemoterapi (dosis, jenis pelarut, banyaknya pelarut, waktu pemberian, urutan pemberian obat kemoterapi).',
        kebijakan: 'Petugas baik medis atau paramedis yang sudah terlatih dalam pemberian obat kemoterapi.',
        prosedur: [
            {
                step: 'Penatalaksanaan Terapi obat Kemoterapi',
                items: [
                    { desc: 'Carboplatin - Pelarut: SWFI, D5, NS | Stabilita: 8 jam suhu kamar, 24 jam lemari pendingin | Penyimpanan: Suhu kamar, lemari pendingin, terlindung dari cahaya | Metode: Infus 60 menit' },
                    { desc: 'Cisplatin - Pelarut: SWFI | Stabilita: 24 jam suhu 4-25°C | Penyimpanan: Suhu kamar, lemari pendingin, terlindung dari cahaya | Metode: IV pendek 15 menit setelah manitol 20% 62,5 ml, IV panjang 1-8 jam. Hanya diberikan secara IV.' },
                    { desc: 'Cyclophosphamid/cyclofid/endokan - Pelarut: SWFI | Stabilita: 24 jam suhu kamar, 6 hari lemari pendingin | Penyimpanan: Suhu kamar, lemari pendingin, terlindung dari cahaya | Metode: IV kontinyu 1-24 jam, dosis >500mg maksimal 2gr diberikan >30 menit' },
                    { desc: 'Decotaxel/Brexel - Pelarut: NS | Stabilita: 8 jam suhu kamar, 2-25°C terlindung cahaya | Penyimpanan: Suhu kamar 2-25°C, suhu dingin, jangan dikocok, hindari cahaya langsung | Metode: Infus IV 60 menit/250ml' },
                    { desc: 'Doxorubicin - Pelarut: NS, D5 | Stabilita: 48 jam suhu kamar 25°C terlindung cahaya | Penyimpanan: Suhu kamar 2-25°C, suhu dingin, jangan dikocok, hindari cahaya langsung | Metode: Infus IV 60 menit' },
                    { desc: 'Epirubicin - Pelarut: D5 | Stabilita: 24 jam suhu kamar 2-8°C terlindung cahaya | Penyimpanan: Suhu 2-8°C terlindung cahaya langsung | Metode: Infus IV 30 menit' },
                    { desc: 'Fluorourasil/Curacil - Pelarut: NS, D5 | Stabilita: 75 jam suhu kamar 25°C terlindung cahaya | Penyimpanan: Suhu kamar 25°C terlindung cahaya langsung | Metode: IV 5-15 menit, dosis >1000mg/m2 IV 22 jam' },
                    { desc: 'Folinic Acid/Leucoforin - Pelarut: NS, D5 | Stabilita: 24 jam suhu kamar 25°C terlindung cahaya | Penyimpanan: Suhu kamar 25°C terlindung cahaya langsung | Metode: IV 120 menit' },
                    { desc: 'Gemcitabine/Cytogem/Foncogem - Pelarut: NS | Stabilita: 24 jam suhu kamar 25°C terlindung cahaya | Penyimpanan: Suhu kamar 25°C terlindung cahaya langsung | Metode: Infus IV 60 menit' },
                    { desc: 'Iphosfamida/Holoxan - Pelarut: SWFI, NS | Stabilita: 7 hari suhu kamar, 21 hari lemari pendingin | Penyimpanan: Suhu kamar 2-25°C, suhu dingin, hindari cahaya langsung | Metode: Infus IV 8 jam' },
                    { desc: 'Uromitexan - Pelarut: NS | Stabilita: 7 hari suhu kamar, 21 hari lemari pendingin | Penyimpanan: Suhu kamar 15-30°C, hindari cahaya langsung | Metode: Infus IV 4-8 jam' },
                    { desc: 'Metrotexate - Pelarut: SWFI, NS, D5 | Stabilita: 24 jam lemari pendingin, 4-8 jam suhu ruangan terlindung cahaya | Penyimpanan: Suhu 2-8°C, terlindung cahaya, bungkus aluminium foil | Metode: IM, IT, IV pelan-pelan, infus IV kontinyu 24 jam' },
                    { desc: 'Mitomycin-C - Pelarut: SWFI, NS, D5 | Stabilita: NS-12 jam, D5-3 jam, SWFI 7 hari suhu ruangan, 14 hari lemari pendingin | Penyimpanan: Suhu ruangan dan lemari pendingin 2-25°C | Metode: IV 5-10 menit, infus IV 30-60 menit' },
                    { desc: 'Paclitaxel/foncopac - Pelarut: NS | Stabilita: 27 jam suhu ruangan | Penyimpanan: Suhu ruangan, simpan botol khusus terlindung cahaya | Metode: Infus IV 3 jam' },
                    { desc: 'Vincristine - Pelarut: NS, D5 | Stabilita: 2 hari suhu ruangan, 7 hari lemari pendingin | Penyimpanan: Suhu ruangan atau lemari pendingin | Metode: IV 10-15 menit, infus kontinyu 24 jam' },
                    { desc: 'Herceptin - Pelarut: NS 250 | Stabilita: 24 jam setelah pencampuran | Penyimpanan: Suhu ruangan dingin 2-8°C, jangan di frezer | Metode: IV 2 jam' },
                    { desc: 'Leucogen - Penyimpanan: Suhu 2-8°C, terlindung cahaya langsung | Metode: SC' },
                    { desc: 'Navelbine - Pelarut: D5/NS 50 ml | Stabilita: 8 hari lemari pendingin 2-5°C, 24 jam suhu ruangan | Penyimpanan: Suhu 2-8°C, terlindung cahaya | Metode: IV 10 menit, dilanjut NaCl 250 cc' },
                    { desc: 'Oxaliplatin/Rexta - Pelarut: D5 | Stabilita: 24 jam lemari pendingin | Penyimpanan: Suhu dingin, hindari cahaya, pelarut tidak mengandung NaCl 0,9% | Metode: IV dalam D5 2-6 jam' },
                    { desc: 'Zoladex - Penyimpanan: Jangan disimpan pada suhu diatas 25°C | Metode: Injeksi subcutan langsung' },
                    { desc: 'Zometa - Pelarut: NS 100, D5 100 | Stabilita: 24 jam suhu 2-8°C setelah pencampuran | Penyimpanan: Jangan disimpan pada suhu 30°C | Metode: IV 15 menit' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Evaluasi kembali urutan pemberian obat kemoterapi, masa kadaluarsa obat dan lama pemberian obat. Evaluasi Respon pasien'
            }
        ],
        dokumenTerkait: ['Status pasien'],
        instalasiTerkait: ['Instalasi Farmasi', 'Instalasi Rawat Inap', 'Instalasi Rawat Jalan', 'IPSRS', 'PPI']
    },
    {
        id: 1103,
        title: 'Persiapan Pemberian Protokol Kemoterapi',
        category: 'tindakan',
        subCategory: 'onkologi',
        description: 'Aturan persiapan pemberian kemoterapi oleh petugas drug mixing dan pemberi kemoterapi.',
        icon: 'fa-syringe',
        tags: ['Kemoterapi', 'Persiapan', 'Drug Mixing', 'Onkologi'],
        noDokumen: '445/SPO 8261 IPKT',
        tanggalTerbit: '25 November 2021',
        pengertian: 'Adalah aturan atau standar yang mengatur atau mengizinkan dilaksanakannya tindakan pemberian kemoterapi.',
        tujuan: 'Sebagai acuan atau panduan seorang tenaga medis atau paramedis yang sudah terlatih dalam pemberian kemoterapi. Mencegah terjadinya kesalahan dalam pemberian kemoterapi (dosis, jenis pelarut, banyaknya pelarut, waktu pemberian, urutan pemberian obat kemoterapi).',
        kebijakan: 'Petugas baik medis atau paramedis yang sudah terlatih dalam pemberian obat kemoterapi.',
        prosedur: [
            {
                step: 'Persiapan',
                items: [
                    { desc: 'Obat kemoterapi' },
                    { desc: 'Petugas drug mixing' },
                    { desc: 'Petugas pemberian obat kemoterapi' },
                    { desc: 'Lembar protokol terapi' },
                    { desc: 'Status pasien kemoterapi' }
                ]
            },
            {
                step: 'Pelaksanaan',
                items: [
                    { desc: 'Petugas drug mixing menerima obat kemoterapi dan lembar protokol terapi' },
                    { desc: 'Petugas drug mixing melakukan drug mixing sesuai prosedur' },
                    { desc: 'Petugas pemberian obat kemoterapi menerima obat kemoterapi yang sudah dicampur oleh petugas drug mixing dan protokol kemoterapi' },
                    { desc: 'Petugas membaca kembali protokol kemoterapi' },
                    { desc: 'Petugas memberikan obat kemoterapi sesuai protokol terapi' },
                    { desc: 'Petugas mencatat urutan pemberian kemoterapi beserta respon pasien di status pasien' }
                ]
            },
            {
                step: 'Evaluasi',
                items: [
                    { desc: 'Evaluasi kembali urutan pemberian obat kemoterapi, masa kadaluarsa obat dan lama pemberian obat' },
                    { desc: 'Evaluasi respon pasien' }
                ]
            }
        ],
        dokumenTerkait: ['Panduan Pelayanan Kemoterapi', 'Status pasien'],
        instalasiTerkait: ['Instalasi Farmasi', 'Instalasi Rawat Inap', 'Instalasi Rawat Jalan']
    },
    {
        id: 1104,
        title: 'Pemberian Obat Kemoterapi melalui Intra Vena',
        category: 'tindakan',
        subCategory: 'onkologi',
        description: 'Prosedur pemberian obat kemoterapi melalui intravena (bolus/continue) dengan protokol keselamatan.',
        icon: 'fa-tint',
        tags: ['Kemoterapi', 'IV', 'Intravena', 'Onkologi', 'Bolus'],
        noDokumen: '445/SPO 8263 IPKT',
        tanggalTerbit: '25 November 2021',
        pengertian: 'Suatu kegiatan memberikan atau memasukan obat kemoterapi melalui intravena (bolus, continue).',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam penatalaksanaan cara pemberian obat kemoterapi melalui intravena (bolus, continue).',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2701- RS. Ihsan/2016',
        prosedur: [
            {
                step: 'Persiapan Alat',
                items: [
                    { desc: 'Obat kemoterapi yang sudah dilarutkan sesuai dengan protap dokter' },
                    { desc: 'Standar infus' },
                    { desc: 'Set infus (sesuai standar pemasangan infus)' },
                    { desc: 'Baki beralas atau meja' },
                    { desc: 'Kapas alkohol' },
                    { desc: 'Kantong sampah khusus sitostatika' },
                    { desc: 'Infus pump/syringe pump' },
                    { desc: 'Masker' },
                    { desc: 'Kap kepala' },
                    { desc: 'Sarung tangan bersih' },
                    { desc: 'Baju pelindung' },
                    { desc: 'Kaca mata goggle' }
                ]
            },
            {
                step: 'Persiapan Pre Medikasi',
                items: [
                    { desc: 'Cairan infus RL dan Nacl 0,9%' },
                    { desc: 'Obat (kortikosteroid, anti emetik)' }
                ]
            },
            {
                step: 'Persiapan Pasien',
                items: [
                    { desc: 'Lakukan identifikasi pasien' },
                    { desc: 'Lakukan cek obat, jenis, jumlah cairan, lama pemberian, rute pemberian' },
                    { desc: 'Berikan penjelasan kepada pasien dan keluarga tentang tindakan yang akan dilakukan' },
                    { desc: 'Jelaskan prosedur yang akan dilakukan pada pasien dan keluarga pasien' },
                    { desc: 'Persiapkan pasien apakah persetujuan kemotherapi telah di tanda tangani (untuk pasien yang mendapatkan dosis pertama atau perubahan regimen therapi)' },
                    { desc: 'Cek ulang regimen pasien' },
                    { desc: 'Cek hasil laboratorium darah rutin dan difcount bila kemo pertama' },
                    { desc: 'Cek ulang protokol regimen' },
                    { desc: 'Lakukan pemeriksaan tanda-tanda vital pasien' },
                    { desc: 'Cek ulang intruksi dokter' }
                ]
            },
            {
                step: 'Persiapan Provider',
                items: [
                    { desc: 'Pakai gaun khusus atau schort' },
                    { desc: 'Pakai masker yang disposible' },
                    { desc: 'Pakai handscoon bersih' },
                    { desc: 'Pakai kap kepala' },
                    { desc: 'Pakai kacamata goggle' }
                ]
            },
            {
                step: 'Pelaksanaan',
                items: [
                    { desc: 'Ucapkan salam' },
                    { desc: 'Dekatkan alat yang dibutuhkan' },
                    { desc: 'Perkenalkan diri kepada pasien dan keluarga pasien' },
                    { desc: 'Cuci tangan, pakai masker, kap kepala, baju pelindung dan sarung tangan bersih' },
                    { desc: 'Ucapkan Basmallah' },
                    { desc: 'Pasang infus sesuai standar prosedur operasional pemasangan infus dan menggunakan infuse pump (sesuai kebutuhan)' },
                    { desc: 'Berikan cairan infuse RL 500cc' },
                    { desc: 'Berikan pre medikasi (sesuai protokol dokter) obat corticosteroid dan obat anti emetik dengan jarak pemberian 15 menit' },
                    { desc: 'Berikan cairan infus Nacl 0,9% 100cc sebelum obat kemoterapi diberikan sesuai protokol dokter' },
                    { desc: 'Masukkan obat kemoterapi sesuai protokol terapi yang sudah di siapkan sebelumnya' },
                    { desc: 'Monitor kelancaran infus dan perhatikan respon pasien terhadap pemberian obat kemoterapi (evaluasi adanya extravasasi/iritasi sepanjang vena dan sekitarnya, observasi kesadaran pasien dan tanda-tanda vital, alergi). segera lapor dokter yang bersangkutan' },
                    { desc: 'Berikan cairan infus Nacl 0,9% sesuai protokol dokter' },
                    { desc: 'Setelah tindakan selesai infus dilepas (Lihat SPO melepas infus)' },
                    { desc: 'Bereskan alat-alat atau botol bekas obat sitostatika dimasukkan dalam kantong plastik dan ikat serta di masukkan dalam sampah medis khusus' },
                    { desc: 'Ucapkan Hamdalah' },
                    { desc: 'Lepas APD' },
                    { desc: 'Masukkan ke tempat linen kotor' },
                    { desc: 'Cuci tangan' },
                    { desc: 'Dokumentasikan tindakan yang telah dilakukan pada catatan keperawatan' },
                    { desc: 'Cek ulang tanda-tanda vital pasien' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Pantau respon pasien selama dilakukan tindakan pemberian obat kemoterapi melalui intravena'
            }
        ],
        dokumenTerkait: ['Status pasien'],
        instalasiTerkait: ['Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Farmasi', 'Instalasi Rekam Medik', 'Instalasi Laboratorium']
    },
    {
        id: 1105,
        title: 'Drug Mixing Kemoterapi',
        category: 'tindakan',
        subCategory: 'onkologi',
        description: 'Pelarutan/pencampuran obat kemoterapi yang dilakukan oleh petugas farmasi terlatih di ruang khusus.',
        icon: 'fa-flask',
        tags: ['Kemoterapi', 'Drug Mixing', 'Sitostatika', 'Farmasi', 'LAF'],
        noDokumen: '445/SPO 8262 IPKT',
        tanggalTerbit: '-',
        pengertian: 'Adalah suatu upaya kegiatan pelarutan/pencampuran obat kemoterapi yang dilakukan oleh petugas farmasi yang terlatih dan dilakukan di ruang khusus.',
        tujuan: '1. Obat kemoterapi diberikan berdasarkan dosis yang sudah ditentukan. 2. Obat kemoterapi yang diberikan dengan keadaan baik, tepat pelarut dan tidak kadaluarsa. 3. Pengelolaan obat kemoterapi sesuai dengan prosedur dan stabilitas.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2701- RS. Ihsan/2016',
        prosedur: [
            {
                step: 'Persiapan Obat',
                items: [
                    { desc: 'Dosis: bila tidak ada ketentuan spesifik, dosis ditentukan dengan menggunakan luas permukaan tubuh (Body Surface Area-BSA) yang diketahui dengan mengukur TB dan BB ke dalam rumus yang telah ditentukan' },
                    { desc: 'Storage and stability; baca petunjuk mengenai storage dan stability masing-masing obat sehingga obat dalam keadaan baik. Obat yang tidak mengandung preservasi setelah dibuka/dilarutkan (pengoplosan) harus segera dibuang dalam waktu 8-24jam' },
                    { desc: 'Preparasi pelarutan' }
                ]
            },
            {
                step: 'Persiapan Provider',
                items: [
                    { desc: 'Gunakan gaun/pakaian khusus/schort' },
                    { desc: 'Gunakan masker yang disposible' },
                    { desc: 'Gunakan handscoon karet' },
                    { desc: 'Gunakan topi pelindung' },
                    { desc: 'Gunakan kaca mata pelindung/google' },
                    { desc: 'Gunakan sepatu khusus' }
                ]
            },
            {
                step: 'Persiapan Peralatan dan Cairan',
                items: [
                    { desc: 'LAF (Laminar Air Flow)' },
                    { desc: 'Larutan NaCl 0.9% 100cc, NaCl 0,9% 500cc' },
                    { desc: 'Syringe disposible 10cc' },
                    { desc: 'Kassa dan alkohol' },
                    { desc: 'Tempat limbah obat kemoterapi' },
                    { desc: 'Kantong plastik untuk pembungkus limbah obat kemoterapi' },
                    { desc: 'Kantong limbah tertutup (safety box)' },
                    { desc: 'Spidol permanen' }
                ]
            },
            {
                step: 'Persiapan Pencampuran',
                items: [
                    { desc: 'Petugas tidak menggunakan perhiasan' },
                    { desc: 'Cuci tangan dengan aseptic kemudian membersihkan kuku dengan sikat diruang cuci tangan' },
                    { desc: 'Gunakan kelengkapan untuk pencampuran sitostatik di ruang transisi (baju, topi, masker, google, sepatu, sarung tangan)' },
                    { desc: 'Petugas masuk kedalam clean room' },
                    { desc: 'Siapkan Laminar Air Flow (LAF) membersihkan semua permukaan LAF dengan alkohol 70%' },
                    { desc: 'Tunggu 5 menit untuk menghilangkan residu' },
                    { desc: 'Berikan alas sitostatika pada meja kerja' },
                    { desc: 'Letakkan kantong limbah disamping meja kerja (LAF)' }
                ]
            },
            {
                step: 'Pelaksanaan Pencampuran',
                items: [
                    { desc: 'Berikan obat dan alkes dengan alkohol' },
                    { desc: 'Letakkan seluruh obat dan perlengkapan percampuran diatas alas sitostatika' },
                    { desc: 'Sesudah dioplos, bersihkan syringe dan bag infuse dengan alkohol kemudian beri etiket' },
                    { desc: 'Buang sisa bungkus, syringe jarum, bekas vial ke kantong limbah tertutup (safety box)' },
                    { desc: 'Masukkan obat yang terlindungi dari cahaya dalam kantong plastik' },
                    { desc: 'Berikan paraf setelah selesai' },
                    { desc: 'Periksa kembali obat yang siap dikirim ke ruangan sesuai dengan yang diinginkan' },
                    { desc: 'Dekontaminasi dan desinfeksi ruang kerja' },
                    { desc: 'Lepas perlengkapan pelindung' },
                    { desc: 'Cuci tangan dengan aseptik dan alkohol' },
                    { desc: 'Dokumentasikan percampuran' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Observasi hasil drug mixing yang telah dilakukan'
            }
        ],
        dokumenTerkait: ['Panduan Pelayanan Kemoterapi'],
        instalasiTerkait: ['Instalasi Farmasi', 'Instalasi Rawat Inap', 'Instalasi Rawat Jalan']
    },
    {
        id: 1106,
        title: 'Pencegahan Ekstravasasi',
        category: 'tindakan',
        subCategory: 'onkologi',
        description: 'Prosedur pencegahan terjadinya infiltrasi obat kemoterapi dari vena ke jaringan sekitarnya.',
        icon: 'fa-shield-alt',
        tags: ['Ekstravasasi', 'Kemoterapi', 'Pencegahan', 'Onkologi', 'Keselamatan Pasien'],
        noDokumen: '445/SPO 8264 IPKT',
        tanggalTerbit: '25 November 2021',
        pengertian: 'Terjadinya infiltrasi obat kemoterapi yang vesikan (kerusakan jaringan) atau iritan (rasa sakit pada lokasi penusukan sepanjang vena dengan atau tanpa inflamasi) dari vena ke jaringan sekitarnya. Tanda terjadinya ekstravasasi: Gejala ekstravasasi segera: mengeluh rasa terbakar, perubahan warna kulit menjadi merah. Gejala ekstravasasi setelah beberapa minggu: perubahan warna kulit makin nyata, terjadi pengerasan, rasa panas meningkat. Gejala ekstravasasi setelah beberapa minggu berikutnya: luka nekrotik kadang sampai perlu pembedahan, ulkus yang melebar. Kerusakan permanen: komplikasi jangka panjang akibat penebalan jaringan nekrotik merusak struktur persarafan dan pembuluh darah.',
        tujuan: 'Sebagai acuan penerapan langkah - langkah dalam pencegahan ekstravasasi.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Keperawatan Rumah Sakit Umum Daerah Al - Ihsan No: 445/Kep.2701-RS.ihsan/2016',
        prosedur: [
            {
                step: 'Persiapan Pasien',
                items: [
                    { desc: 'Pasien diberi penjelasan tentang tindakan yang dilakukan' },
                    { desc: 'Atur posisi pasien' }
                ]
            },
            {
                step: 'Pencegahan',
                items: [
                    { desc: 'Oplos obat dengan jumlah pelarut yang sesuai' },
                    { desc: 'Gunakan vena yang tepat (lurus, lembut, tidak pada daerah pergelangan)' },
                    { desc: 'Hindari penusukan kanul berulang pada tempat yang sama' },
                    { desc: 'Gunakan penutup area penusukan kanul yang mudah terlihat' },
                    { desc: 'Cek kepatenan vena dengan cairan fisiologis sebelum pemberian obat' },
                    { desc: 'Observasi daerah yang di infus selama pemberian obat' },
                    { desc: 'Komunikasi selama pemberian terutama via bolus' },
                    { desc: 'Lakukan pembilasan setiap pemberian obat' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Observasi secara teratur terhadap rasa nyeri, bengkak, kemerahan, keras atau nekrosis'
            }
        ],
        dokumenTerkait: ['Status Pasien'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Farmasi', 'Instalasi Rekam Medik']
    },
    {
        id: 1107,
        title: 'Penanganan Tumpahan Obat Sitostatik',
        category: 'tindakan',
        subCategory: 'onkologi',
        description: 'Prosedur pembersihan area drug mixing dan area pemberian obat sitostatik dari tumpahan obat.',
        icon: 'fa-biohazard',
        tags: ['Sitostatika', 'Tumpahan Obat', 'Keselamatan Kerja', 'APD', 'Onkologi'],
        noDokumen: '445/SPO 8266 IPKT',
        tanggalTerbit: '25 November 2021',
        pengertian: 'Adalah cara petugas dalam membersihkan area drug mixing dan area pemberian obat sitostatik dari tumpahan obat.',
        tujuan: 'Sebagai acuan atau panduan seorang tenaga medis atau paramedis yang sudah terlatih dalam mencegah paparan petugas terhadap obat sitostatika.',
        kebijakan: 'Pencampuran obat kemoterapi dilakukan oleh petugas farmasi yang terlatih dan dilakukan di ruang khusus.',
        prosedur: [
            {
                step: 'Persiapan',
                items: [
                    { desc: 'APD' },
                    { desc: 'Spill kit' },
                    { desc: 'Skop' }
                ]
            },
            {
                step: 'Prosedur Penanganan diluar BSC',
                items: [
                    { desc: 'Meminta pertolongan jangan tinggalkan area sebelum diizinkan' },
                    { desc: 'Beri tanda peringatan di sekitar area' },
                    { desc: 'Petugas penolong mengenakan APD' },
                    { desc: 'Bersihkan partikel kaca dan pecahan-pecahan menggunakan skop dan tempatkan dalam kantong buangan' },
                    { desc: 'Serap tumpahan dengan kasa penyerap dan buang dalam kantong' },
                    { desc: 'Cuci seluruh area yang terkontaminasi dengan larutan detergen' },
                    { desc: 'Bilas dengan aquadest' },
                    { desc: 'Ulangi pencucian dengan pembilasan sampai seluruh obat terangkat' },
                    { desc: 'Tanggalkan glove luar, dan penutup kaki tempatkan pada kantong pertama' },
                    { desc: 'Tutup kantong dan tempatkan pada kantong kedua' },
                    { desc: 'Tanggalkan pakaian pelindung lainnya dan sarung tangan dalam, tempatkan dalam kantong kedua' },
                    { desc: 'Ikat kantong secara aman dan masukkan dalam tempat penampungan khusus untuk dimusnahkan dengan incinerator' },
                    { desc: 'Cuci tangan dengan bersih menggunakan sabun' }
                ]
            },
            {
                step: 'Prosedur Penanganan di dalam BSC',
                items: [
                    { desc: 'Serap tumpahan dengan kasa untuk tumpahan cair atau handuk basah untuk tumpah serbuk' },
                    { desc: 'Tanggalkan sarung tangan dan buang, lalu pakai 2 pasang sarung tangan baru' },
                    { desc: 'Angkat hati-hati pecahan tajam dan serpihan kaca sekaligus dengan alas kerja/meja/penyerap dan tempatkan dalam wadah buangan' },
                    { desc: 'Cuci permukaan dinding bagian dalam BSC dengan detergent, bilas dengan aquadest menggunakan kassa, buang kasa dalam wadah buangan' },
                    { desc: 'Ulangi pencucian sampai 3 kali' },
                    { desc: 'Keringkan dengan kassa baru, buang dalam wadah buangan' },
                    { desc: 'Tutup wadah dan buang dalam wadah buangan akhir' },
                    { desc: 'Tanggalkan APD, buang sarung tangan, masker, dalam wadah buangan akhir untuk dimusnahkan dengan incinerator' },
                    { desc: 'Cuci tangan dengan menggunakan sabun' }
                ]
            },
            {
                step: 'Evaluasi',
                items: [
                    { desc: 'Evaluasi kembali area tumpahan untuk menjamin kebersihan' },
                    { desc: 'Evaluasi kembali APD yang digunakan harus sesuai dengan standar' }
                ]
            }
        ],
        dokumenTerkait: ['Panduan Pelayanan Pasien'],
        instalasiTerkait: ['Instalasi Farmasi', 'Instalasi Rawat Inap', 'Instalasi Rawat Jalan', 'IPSRS']
    },
    {
        id: 1108,
        title: 'Penanganan Kecelakaan Kerja dalam Pemberian Obat Sitostatik',
        category: 'tindakan',
        subCategory: 'onkologi',
        description: 'Prosedur penanganan kecelakaan kerja seperti tumpahan obat di kulit, kontak dengan mata, dan tertusuk jarum.',
        icon: 'fa-ambulance',
        tags: ['Kecelakaan Kerja', 'Sitostatika', 'Keselamatan Kerja', 'APD', 'Onkologi'],
        noDokumen: '45/SPO 8265 IPKT',
        tanggalTerbit: '25 November 2021',
        pengertian: 'Adalah cara petugas dalam membersihkan area drug mixing dan area pemberian obat sitostika dari tumpahan obat.',
        tujuan: 'Sebagai acuan atau panduan seorang tenaga medis atau paramedis yang sudah terlatih dalam mencegah paparan petugas terhadap obat sitostatika.',
        kebijakan: 'Petugas medis atau paramedis yang sudah terlatih dalam pemberian kemoterapi.',
        prosedur: [
            {
                step: 'Persiapan',
                items: [
                    { desc: 'Kemoterapi spill kit' },
                    { desc: 'Emergency kit' },
                    { desc: 'Baju pelindung' },
                    { desc: 'Sarung tangan' },
                    { desc: 'Tutup kepala' },
                    { desc: 'Masker' },
                    { desc: '30 ml larutan pencuci mata steril' },
                    { desc: '120 ml air sabun' },
                    { desc: 'Larutan klorin 5% 500 ml' },
                    { desc: 'Larutan NaCl 0,9% 500 ml' }
                ]
            },
            {
                step: 'Penanganan Tumpahan di Kulit',
                items: [
                    { desc: 'Tanggalkan sarung tangan' },
                    { desc: 'Bilas kulit dengan air hangat' },
                    { desc: 'Cuci dengan sabun, bilas dengan air hangat' },
                    { desc: 'Jika kulit tidak sobek, seka area dengan kassa yang dibasahi larutan chlorine 5% dan bilas dengan air hangat' },
                    { desc: 'Jika kulit sobek gunakan H2O2 3%' },
                    { desc: 'Catat jenis obatnya dan siapkan antidote khusus' },
                    { desc: 'Tanggalkan seluruh pakaian alat pelindung diri' },
                    { desc: 'Laporkan ke supervisor' },
                    { desc: 'Lengkapi format kecelakaan' }
                ]
            },
            {
                step: 'Kontak Dengan Mata',
                items: [
                    { desc: 'Meminta pertolongan' },
                    { desc: 'Tanggalkan sarung tangan' },
                    { desc: 'Bilas mata dengan air mengalir dan rendam dengan air hangat selama 5 menit' },
                    { desc: 'Letakkan tangan disekitar mata dan cuci mata terbuka dengan larutan NaCl 0,9%' },
                    { desc: 'Aliri mata dengan larutan pencuci mata' },
                    { desc: 'Tanggalkan seluruh pakaian pelindung' },
                    { desc: 'Catat jenis obat yang tumpah' },
                    { desc: 'Laporkan ke supervisor' },
                    { desc: 'Lengkapi format kecelakaan kerja' }
                ]
            },
            {
                step: 'Tertusuk Jarum',
                items: [
                    { desc: 'Jangan segera mengangkat jarum, tarik kembali plinger untuk menghisap obat yang mungkin terinjeksi' },
                    { desc: 'Angkat jarum dari kulit dan tutup jarum kemudian buang' },
                    { desc: 'Jika perlu gunakan spuit baru dan jarum yang bersih untuk mengambil obat dalam jaringan yang tertusuk' },
                    { desc: 'Tanggalkan sarung tangan, bilas bagian yang tertusuk dengan air hangat' },
                    { desc: 'Cuci bersih dengan sabun, bilas dengan air hangat' },
                    { desc: 'Tanggalkan semua APD' },
                    { desc: 'Catat jenis obat dan perkirakan berapa banyak yang terinjeksi' },
                    { desc: 'Laporkan ke supervisor' },
                    { desc: 'Lengkapi format kecelakaan kerja' },
                    { desc: 'Segera konsultasikan ke dokter' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Evaluasi kembali daerah yang terkena obat sitostatik apakah terjadi peradangan, rasa berbeda, dll.'
            }
        ],
        dokumenTerkait: ['Panduan Pelayanan Kemoterapi'],
        instalasiTerkait: ['Instalasi Farmasi', 'IPSRS', 'Instalasi Rawat Inap', 'Instalasi Rawat Jalan']
    },


/*
 ===================================================================================
 Category Maternitas, ID: 1201 - 1300
 ===================================================================================
*/

    {
        id: 1201,
        title: 'PERAWATAN PAYUDARA ( BREAST CARE )',
        category: 'tindakan',
        subCategory: 'maternitas',
        description: 'Memberi tindakan  pada organ payudara dengan cara di-massage.',
        icon: 'fa-hands',
        tags: ['Breast Care', 'Perawatan Payudara'],
        noDokumen: '445/SPO. 3541/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Memberi tindakan  pada organ payudara dengan cara di-massage.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah perawatan payudara untuk:\nMencegah pembendungan ASI.\nMeningkatkan hygiene payudara.\nMeningkatkan produksi ASI.\nMelenturkan dan menguatkan puting.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional  Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019.',
        prosedur: [
            {
                step: 'Persiapan',
                items: [
                    {
                        desc: 'Persiapan Alat',
                        detail: '1) Handuk besar 2 buah' + '\n' +
                                '2) Waskom ukuran sedang 2 buah (berisi air panas/hangat, air dingin)' + '\n' +
                                '3) Waslap 3 pasang' + '\n' +
                                '4) Kapas untuk kompres dalam wadahnya tertutup (kombulat bertutup)' + '\n' +
                                '5) Kombulat tertutup (untuk wadah penampung ASI)' + '\n' +
                                '6) Baby Oil' + '\n' +
                                '7) Celemek / Barakschort + topi dan masker' + '\n' +
                                '8) Handuk kecil (untuk lap kerja)' + '\n' +
                                '9) Wadah tempat kain kotor' + '\n' +
                                '10) Nierbeken / Bengkok 2 buah' + '\n' +
                                '11) Tempat sampah (2 jenis)'
                    },
                    {
                        desc: 'Persiapan Pasien',
                        detail: '1) Berikan penjelasan kepada pasien dan keluarga tentang tindakan yang akan dilakukan'
                    },
                    {
                        desc: 'Persiapan Lingkungan',
                        detail: '1) Skherm ditutup (bila perlu) agar privasi pasien terjaga, bedplang tempat tidur pasien dibuka atau ditutup sesuai dengan kebutuhan'
                    }
                ]
            },
            {
                step: 'Pelaksanaan',
                items: [
                    { desc: 'A. Perawat cuci tangan' },
                    { desc: 'B. Cocokkan nama pasien dengan gelang identitas' },
                    { desc: 'C. Dekatkan alat-alat di samping pasien' },
                    { desc: 'D. Membaca basmallah' },
                    { desc: 'E. Memakai celemek, topi, dan masker' },
                    { desc: 'F. Bantu ibu duduk dan mengatur posisi yang nyaman dengan cara posisi duduk bersandar' },
                    { desc: 'G. Pasang scherm / pembatas ruangan untuk menjaga privasi ibu sebelum membuka pakaian dan melakukan tindakan' },
                    { desc: 'H. Perawat / Bidan berdiri di belakang ibu dan bantu ibu membuka pakaian bagian atas' },
                    { desc: 'I. Letakkan 1 buah handuk besar di punggung ibu sampai menutupi payudara ibu dan 1 handuk lagi di bawah payudara ibu' },
                    { desc: 'J. Basahi kapas kering 2 buah dengan baby oil atau minyak kelapa khusus, lalu buka sedikit penutup payudara dan tempelkan kapas tersebut pada puting susu' },
                    { desc: 'K. Biarkan kapas tersebut selama 2–3 menit, setelah itu lepaskan kapas dari puting susu dan buang ke dalam bengkok / nierbeken' },
                    { desc: 'L. Tuangkan baby oil atau minyak kelapa pada telapak tangan secukupnya, lalu ratakan dengan kedua telapak tangan ke seluruh permukaan tangan untuk dioleskan ke seluruh bagian payudara' },
                    { desc: 'M. Letakkan nierbeken tepat di bawah payudara agar ketika payudara ditekan ASI yang keluar tidak membasahi handuk atau pakaian ibu' },
                    { desc: 'N. Letakkan kedua telapak tangan yang telah dibasahi dengan baby oil tersebut di kedua payudara (kanan dan kiri), kemudian lakukan gerakan memutar dari arah dalam ke arah luar dengan hitungan sebanyak 30 kali' },
                    { desc: 'O. Sokonglah payudara sebelah kanan dengan tangan kiri, lalu kepalkan tangan kanan dan lakukan gerakan menekan payudara dengan kepalan tangan tersebut dari atas ke arah puting susu sampai merata ke seluruh sisi payudara (sebanyak 30 kali gerakan)' },
                    { desc: 'P. Sokonglah payudara sebelah kiri dengan tangan kanan, lalu kepalkan tangan kiri dan lakukan gerakan menekan payudara dengan kepalan tangan tersebut dari atas ke arah puting susu sampai merata ke seluruh sisi payudara (sebanyak 30 kali gerakan)' },
                    { desc: 'Q. Mulai dari payudara sebelah kanan, peganglah payudara dengan posisi ibu jari kedua tangan saling berhadapan dan bertemu ujungnya, dan jari-jari lainnya berada di bawah, kemudian lakukan masase dengan sedikit tekanan dari seluruh jari-jari dari bagian atas ke puting susu (seperti gerakan memeras susu) sebanyak 30 kali gerakan' },
                    { desc: 'R. Lanjutkan dengan payudara sebelah kiri, peganglah payudara dengan posisi ibu jari kedua tangan saling berhadapan dan bertemu ujungnya, dan jari-jari lainnya berada di bawah, kemudian lakukan masase dengan sedikit tekanan dari seluruh jari-jari dari bagian atas ke puting susu (seperti gerakan memeras susu) sebanyak 30 kali gerakan' },
                    { desc: 'S. Dengan menggunakan 2 buah waslap, kompres kedua payudara dengan air hangat selama 3–5 menit (kondisi air hangat tetap dijaga kehangatannya, jika kurang hangat ditambahkan lagi dengan air hangat sesuai kebutuhan)' },
                    { desc: 'T. Dengan menggunakan 2 buah waslap, kompres kedua payudara dengan air dingin selama 3–5 menit' },
                    { desc: 'U. Kompres kembali kedua payudara dengan menggunakan 2 buah waslap dan air hangat selama 3–5 menit (kondisi air hangat tetap dijaga kehangatannya, jika kurang hangat ditambahkan lagi dengan air hangat sesuai kebutuhan)' },
                    { desc: 'V. Kemudian keringkan kedua payudara dengan menggunakan handuk yang diletakkan di bawah payudara tersebut' },
                    { desc: 'W. Pakailah kembali pakaian ibu bagian atas (tanyakan pada ibu ingin diganti dengan yang bersih atau pakaian yang telah dipakai tadi), sambil amati kondisi ibu dan atur kembali posisi ibu yang nyaman' },
                    { desc: 'X. Ucapkan hamdallah' },
                    { desc: 'Y. Bereskan kembali semua peralatan yang telah digunakan untuk dibersihkan dan dikeringkan' },
                    { desc: 'Z. Cucilah tangan setelah menyelesaikan pekerjaan' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Pantau respon pasien selama dan setelah tindakan dilakukan'
            },
            {
                step: 'Dokumentasi',
                desc: 'Dokumentasikan tindakan yang telah dilakukan dalam rekam medik pasien'
            }
        ],
        dokumenTerkait: ['Status pasien'],
        instalasiTerkait: ['Instalasi Rawat Inap']
    },
    {
        id: 1202,
        title: 'Vulva Hygiene',
        category: 'tindakan',
        subCategory: 'maternitas',
        description: 'Memberikan tindakan  pada vulva untuk menjaga kebersihan.',
        icon: 'fa-pump-soap',
        tags: ['Vulva Hygiene', 'Hygiene', 'Sanitasi Klinis', 'Postpartum'],
        noDokumen: '445/SPO.3542/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Memberikan tindakan  pada vulva untuk menjaga kebersihan.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah perawatan payudara untuk:\nMencegah terjadinya infeksi di daerah vulva, perineum maupun uterus.\nUntuk penyembuhan luka perineum/ jahitan pada perineum.\nUntuk kebersihan perineum dan vulva.\nMemberikan rasa nyaman pasien.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional  Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019.',
        prosedur: [
                {
                    step: 'Persiapan',
                    items: [
                        {
                            desc: 'Persiapan Alat',
                            detail: '1) Perlak dan pengalas' + '\n' +
                                    '2) Selimut mandi' + '\n' +
                                    '3) Hands scoon 1 pasang' + '\n' +
                                    '4) Bengkok 2 buah, salah satu berisi lisol 2%' + '\n' +
                                    '5) Tas plastik 2 buah' + '\n' +
                                    '6) Kom berisi kapas basah (air dan kapas direbus bersama)' + '\n' +
                                    '7) Celana dalam (bila diperlukan persiapkan pembalut)' + '\n' +
                                    '8) Pispot' + '\n' +
                                    '9) Botol cebok berisi air matang'
                        },
                        {
                            desc: 'Persiapan Pasien',
                            detail: '1) Memberikan penjelasan tentang tujuan dan prosedur yang akan dilakukan' + '\n' +
                                    '2) Mengatur posisi pasien dan menanyakan persetujuan serta kesiapan klien'
                        },
                        {
                            desc: 'Persiapan Lingkungan',
                            detail: '1) Skherm ditutup (bila perlu) agar privasi pasien terjaga' + '\n' +
                                    '2) Bedplang tempat tidur pasien dibuka atau ditutup sesuai dengan kebutuhan'
                        }
                    ]
                },
                {
                    step: 'Pelaksanaan',
                    items: [
                        { desc: 'A. Mencuci tangan' },
                        { desc: 'B. Cocokkan nama pasien dengan gelang identitas' },
                        { desc: 'C. Memberikan salam dan menyapa nama pasien' },
                        { desc: 'D. Memasang sampiran / menjaga privasi' },
                        { desc: 'E. Memasang selimut mandi' },
                        { desc: 'F. Mengatur posisi pasien dorsal recumbent' },
                        { desc: 'G. Memasang alat dan perlak di bawah pantat' },
                        { desc: 'H. Melepas celana dan pembalut kemudian segera pasang pispot sambil memperhatikan lochea. Celana dan pembalut dimasukkan dalam tas plastik yang berbeda' },
                        { desc: 'I. Mempersilahkan bila ingin BAB / BAK' },
                        { desc: 'J. Memakai sarung tangan kiri' },
                        { desc: 'K. Mengguyur vulva dengan air matang' },
                        { desc: 'L. Mengambil pispot' },
                        { desc: 'M. Meletakkan bengkok di dekat vulva' },
                        { desc: 'N. Membersihkan vulva mulai dari labia mayora kiri, labia mayora kanan, labia minora kiri, labia minora kanan, vestibulum, dan perineum. Arah dari atas ke bawah dengan kapas basah (1 kapas 1 kali usap)' },
                        { desc: 'O. Memasang celana dalam' },
                        { desc: 'P. Mengambil alas perlak dan bengkok' },
                        { desc: 'Q. Merapikan pasien, mengambil selimut mandi' },
                        { desc: 'R. Membereskan dan mengembalikan alat ke tempat semula' },
                        { desc: 'S. Mencuci tangan' }
                    ]
                },
                {
                    step: 'Evaluasi',
                    desc: 'Pantau respon pasien selama dan setelah dilakukan tindakan'
                },
                {
                    step: 'Dokumentasi',
                    desc: 'Mencatat kegiatan dalam lembar catatan keperawatan'
                }
        ],
        dokumenTerkait: ['Status pasien'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Rawat Jalan']
    },
    {
        id: 1203,
        title: 'Merawat Luka Perineum',
        category: 'tindakan',
        subCategory: 'maternitas',
        description: 'Memberi tindakan  pada area perineum untuk menjaga kebersihan.',
        icon: 'fa-band-aid',
        tags: ['Perawatan Luka', 'Perineum', 'Wound Care', 'Postpartum'],
        noDokumen: '445/SPO.3543/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Memberi tindakan  pada area perineum untuk menjaga kebersihan.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah perawatan luka perineum untuk:\nMencegah terjadinya infeksi di daerah  vulva, perineum maupun uterus.\nUntuk penyembuhan luka perineum/ jahitan pada perineum.\nUntuk kebersihan perineum dan vulva.\nMemberikan rasa nyaman pasien.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional  Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019.',
        prosedur: [
                {
                    step: 'Persiapan',
                    items: [
                        {
                            desc: 'Persiapan Alat',
                            detail: '1) Bak instrumen steril berisi kapas dan pinset anatomis' + '\n' +
                                    '2) Perlak dan pengalas' + '\n' +
                                    '3) Selimut mandi' + '\n' +
                                    '4) Hands scoon 1 pasang' + '\n' +
                                    '5) Bengkok 2 buah, 1 buah berisi larutan desinfektan' + '\n' +
                                    '6) Tas plastik 2 buah' + '\n' +
                                    '7) Kom berisi kapas basah' + '\n' +
                                    '8) Celana dalam dan pembalut wanita' + '\n' +
                                    '9) Pispot' + '\n' +
                                    '10) Botol cebok berisi air matang' + '\n' +
                                    '11) Obat luka perineum'
                        },
                        {
                            desc: 'Persiapan Pasien',
                            detail: '1) Menjelaskan tujuan dan prosedur tindakan pada keluarga / klien' + '\n' +
                                    '2) Menanyakan persetujuan dan kesiapan klien'
                        },
                        {
                            desc: 'Persiapan Lingkungan',
                            detail: '1) Skherm ditutup (bila perlu) agar privasi pasien terjaga' + '\n' +
                                    '2) Bedplang tempat tidur pasien dibuka atau ditutup sesuai dengan kebutuhan'
                        }
                    ]
                },
                {
                    step: 'Pelaksanaan',
                    items: [
                        { desc: 'A. Perawat cuci tangan' },
                        { desc: 'B. Cocokkan nama pasien dengan gelang identitas' },
                        { desc: 'C. Membawa alat di dekat pasien dengan benar' },
                        { desc: 'D. Memberikan salam dan menyapa nama pasien' },
                        { desc: 'E. Memasang sampiran / menjaga privasi' },
                        { desc: 'F. Memasang selimut mandi' },
                        { desc: 'G. Mengatur posisi pasien dorsal recumbent' },
                        { desc: 'H. Memasang alat dan perlak di bawah pantat' },
                        { desc: 'I. Melepas celana dan pembalut kemudian segera pasang pispot sambil memperhatikan lochea. Celana dan pembalut dimasukkan dalam tas plastik yang berbeda' },
                        { desc: 'J. Mempersilahkan bila ingin BAB / BAK' },
                        { desc: 'K. Memakai sarung tangan kiri' },
                        { desc: 'L. Mengguyur vulva dengan air matang' },
                        { desc: 'M. Mengambil pispot' },
                        { desc: 'N. Meletakkan bengkok di dekat vulva' },
                        { desc: 'O. Mengambil kapas basah' },
                        { desc: 'P. Membuka vulva dengan ibu jari dan jari telunjuk kiri' },
                        { desc: 'Q. Membersihkan vulva mulai dari labia mayora kiri, labia mayora kanan, labia minora kiri, labia minora kanan, vestibulum, dan perineum. Arah dari atas ke bawah dengan kapas basah (1 kapas 1 kali usap)' },
                        { desc: 'R. Mengobati luka dan menutup luka dengan kasa steril' },
                        { desc: 'S. Memasang celana dalam dan pembalut wanita' },
                        { desc: 'T. Mengambil alas perlak dan bengkok' },
                        { desc: 'U. Merapikan pasien, mengambil selimut mandi' },
                        { desc: 'V. Membereskan alat-alat' },
                        { desc: 'W. Mencuci tangan' }
                    ]
                },
                {
                    step: 'Evaluasi',
                    desc: 'Pantau respon pasien selama dan setelah tindakan dilakukan'
                },
                {
                    step: 'Dokumentasi',
                    desc: 'Mencatat kegiatan dalam lembar catatan keperawatan'
                }
        ],
        dokumenTerkait: ['Status pasien'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Rawat Jalan']
    },
    {
        id: 1204,
        title: 'Menyiapkan Pasien Untuk Pemasangan Laminaria',
        category: 'tindakan',
        subCategory: 'maternitas',
        description: 'Kegiatan menyiapkan pasien untuk dilakukan  pemasangan laminaria.',
        icon: 'fa-procedures',
        tags: ['Persiapan Pasien', 'Laminaria', 'Obstetri', 'Dilatasi Serviks'],
        noDokumen: '445/SPO.3544/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Suatu kegiatan menyiapkan pasien untuk dilakukan  pemasangan laminaria.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam menyiapkan pasien untuk dilakukan  pemasangan laminaria.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional  Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019.',
        prosedur: [
                {
                    step: 'Persiapan',
                    items: [
                        {
                            desc: 'Persiapan Alat',
                            detail: [
                                {
                                    text: '1) Bak instrumen steril sedang berisi:',
                                    subDetail: [
                                        '- Kom kecil berisi bethadine',
                                        '- Kassa steril 3–5 buah',
                                        '- Speculum cocor bebek',
                                        '- Tena kulum / kogel tang',
                                        '- Tampon tang',
                                        '- Penser klem',
                                        '- Gunting',
                                        '- Roll tampon'
                                    ]
                                },
                                { text: '2) Sarung tangan 1 pasang' },
                                {
                                    text: '3) Alat pelindung diri:',
                                    subDetail: [
                                        '- Sepatu bot, kacamata google, topi (sesuai indikasi)',
                                        '- Barak schort',
                                        '- Masker'
                                    ]
                                }
                            ]
                        },
                        {
                            desc: 'Persiapan Pasien',
                            detail: '1) Berikan penjelasan kepada ibu tentang tindakan yang akan dilakukan' + '\n' +
                                    '2) Pasien dan keluarga menandatangani formulir informed consent dan surat izin tindakan pemasangan laminaria' + '\n' +
                                    '3) Pasien disuruh untuk BAK terlebih dahulu' + '\n' +
                                    '4) Posisi pasien diatur lithotomi'
                        },
                        {
                            desc: 'Persiapan Lingkungan',
                            detail: '1) Skherm ditutup (bila perlu) agar privasi pasien terjaga' + '\n' +
                                    '2) Bedplang tempat tidur pasien dibuka atau ditutup sesuai dengan kebutuhan'
                        }
                    ]
                },
                {
                    step: 'Pelaksanaan',
                    items: [
                        { desc: 'A. Perawat cuci tangan' },
                        { desc: 'B. Cocokkan nama pasien dengan gelang identitas' },
                        { desc: 'C. Alat-alat disiapkan, letakkan secara ergonomis' },
                        { desc: 'D. Pakai APD' },
                        { desc: 'E. Membantu pasien untuk membuka pakaian dalamnya' },
                        { desc: 'F. Pasien ditidurkan pada tempat tidur tindakan dengan posisi lithotomi' },
                        { desc: 'G. Berdoa bersama sebelum tindakan pemasangan laminaria' },
                        { desc: 'H. Membantu dokter saat memasang laminaria' },
                        { desc: 'I. Merapikan pasien setelah selesai tindakan pemasangan laminaria' },
                        { desc: 'J. Alat-alat dibereskan dan dicuci' },
                        { desc: 'K. Mengucapkan hamdallah' },
                        { desc: 'L. Cuci tangan' }
                    ]
                },
                {
                    step: 'Evaluasi',
                    desc: 'Observasi respon pasien selama dan setelah dilakukan tindakan'
                },
                {
                    step: 'Dokumentasi',
                    desc: 'Dokumentasikan tindakan yang telah dilakukan dalam rekam medik pasien meliputi waktu pemasangan dan ukuran laminaria'
                }
        ],
        dokumenTerkait: ['Status pasien'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Rawat Jalan']
    },
    {
        id: 1205,
        title: 'Menyiapkan Pasien Untuk Tindakan Kuretage',
        category: 'tindakan',
        subCategory: 'maternitas',
        description: 'Kegiatan mempersiapkan alat dan pasien untuk melakukan tindakan kuretage pada kasus obstetrik dan ginekologi serta diagnostik.',
        icon: 'fa-procedures',
        tags: ['Kuretase', 'Curettage', 'Ginekologi', 'Persiapan Operasi', 'Tindakan Medis'],
        noDokumen: '445/SPO.3545/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Adalah kegiatan mempersiapkan alat dan pasien untuk melakukan tindakan kuretage pada kasus obstetrik dan ginekologi serta diagnostik.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam menyiapkan pasien yang  akan dilakukan tindakan kuretage pada kasus obstetrik dan ginekologi.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional  Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019.',
        prosedur: [
                {
                    step: 'Persiapan',
                    items: [
                        {
                            desc: 'Persiapan Alat',
                            detail: [
                                {
                                    text: '1) Bak instrumen steril sedang berisi:',
                                    subDetail: [
                                        '- Kom kecil berisi bethadine',
                                        '- Kassa steril 3–5 buah',
                                        '- Speculum sim 2 buah',
                                        '- Tena kulum / kogel tang',
                                        '- Tampon tang',
                                        '- Sonde uterus',
                                        '- Cunam abortus',
                                        '- Sendok kuret sesuai kebutuhan',
                                        '- Sarung tangan 2 pasang',
                                        '- Bougi bila diperlukan'
                                    ]
                                },
                                {
                                    text: '4) Alat pelindung diri:',
                                    subDetail: [
                                        '- Sepatu bot',
                                        '- Kacamata google',
                                        '- Topi',
                                        '- Barak schort',
                                        '- Masker'
                                    ]
                                },
                                {
                                    text: '5) Alat kesehatan dan obat-obatan:',
                                    subDetail: [
                                        '- Wing needle no. 23, 1 buah (pasien harus diinfus)',
                                        '- Aquadest',
                                        '- Disposable 5 cc, 1 buah',
                                        '- Disposable 3 cc, 1 buah',
                                        '- Disposable 10 cc, 1 buah',
                                        '- Set infus (IV catheter, infusion set, dan cairan infus)',
                                        '- Uterotonica',
                                        '- Analgetik',
                                        '- Sedativa',
                                        '- Obat anestesi',
                                        '- Obat dan alat kesehatan untuk mengatasi syok'
                                    ]
                                }
                            ]
                        },
                        {
                            desc: 'Persiapan Pasien',
                            detail: '1) Memberikan penjelasan (informed consent) kepada pasien dan keluarga tentang tujuan dan prosedur tindakan yang akan dilakukan' + '\n' +
                                    '2) Pasien dan keluarga menandatangani formulir informed consent dan surat izin tindakan kuretage' + '\n' +
                                    '3) Pasien disuruh untuk BAK terlebih dahulu' + '\n' +
                                    '4) Posisi pasien diatur lithotomi' + '\n' +
                                    '5) Pasien dipuasakan selama 6–8 jam sebelum tindakan kuret'
                        },
                        {
                            desc: 'Persiapan Lingkungan',
                            detail: '1) Skherm ditutup (bila perlu) agar privasi pasien terjaga' + '\n' +
                                    '2) Bedplang tempat tidur pasien dibuka atau ditutup sesuai dengan kebutuhan'
                        }
                    ]
                    },
                    {
                        step: 'Pelaksanaan',
                        items: [
                            { desc: 'A. Perawat cuci tangan' },
                            { desc: 'B. Cocokkan nama pasien dengan gelang identitas' },
                            { desc: 'C. Mengukur tekanan darah, nadi sebelum dan sesudah tindakan, suhu, dan pernapasan' },
                            { desc: 'D. Memindahkan pasien ke meja ginekologi kemudian mengatur posisi lithotomi' },
                            { desc: 'E. Membantu dokter untuk tindakan kuret' },
                            { desc: 'F. Membersihkan dan merapikan pasien sesudah dilakukan tindakan kuret' },
                            { desc: 'G. Memasang pembalut wanita' },
                            { desc: 'H. Memindahkan pasien ke kereta dorong' },
                            { desc: 'I. Menyiapkan bahan untuk pemeriksaan PA (sesuai kebutuhan, jika diperlukan)' },
                            { desc: 'J. Formulir diisi lengkap oleh dokter' },
                            { desc: 'K. Pasang label pada tempat pemeriksaan PA: nama pasien, nomor rekam medik, diagnosa pasien, tanggal pengembalian / pengiriman, nama ruangan' },
                            { desc: 'L. Bahan pemeriksaan PA dikirim ke bagian laboratorium' }
                        ]
                    },
                    {
                        step: 'Evaluasi',
                        desc: 'Observasi dan hitung jumlah darah yang keluar. Observasi gejala-gejala syok hypovolemik (tekanan darah menurun, nadi melemah dan cepat, kulit dingin, dan pasien gelisah)'
                    },
                    {
                        step: 'Dokumentasi',
                        desc: 'Dokumentasikan tindakan yang dilakukan dalam status pasien'
                    }
        ],
        dokumenTerkait: ['Status pasien'],
        instalasiTerkait: ['Instalasi Bedah Sentral', 'Instalasi Rawat Inap ( Ruang Kebidanan  dan VK)', 'Status pasien']
    },


/*
 ===================================================================================
 Category Medikal Bedah , ID: 1301 - 1400
 ===================================================================================
*/
    {
        id: 1301,
        title: 'Merawat & Mengganti Balutan Luka Nekrotik Lembab (Warna Dasar Luka Hitam atau Kuning)',
        category: 'tindakan',
        subCategory: 'medikalBedah',
        description: 'Luka kronis yang mengalami kegagalan atau hambatan dalam proses penyembuhan akibat faktor endogen dan/atau eksogen dengan warna dasar luka hitam atau kuning.',
        icon: 'fa-band-aid',
        tags: ['Perawatan Luka', 'Luka Nekrotik', 'Debridemen', 'Medikal Bedah'],
        noDokumen: '445/SPO.3309/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Luka kronis adalah luka yang mengalami kegagalan atau hambatan dalam proses penyembuhan akibat faktor endogen dan / atau eksogen.\nWarna dasar luka kuning adalah permukaan dasar luka berwarna kuning, kuning kecoklatan, kuning kehijauan atau kuning pucat yang merupakan tanda adanya jaringan fibrous /slough (avaskuler), lembab (jaringan nekrotik lembab).\nWarna dasar luka hitam adalah permukaan dasar luka berwarna hitam, hitam kecoklatan atau hitam kehijauan yang merupakan tanda adanya nekrosis jaringan (avaskuler), lembab atau kering.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah perawatan luka nekrotik untuk:\nMembuang jaringan nekrotik.\nMengurangi atau menghilangkan bau.\nMemberikan kenyamanan fisik dan psikologis kepada pasien.\nMemberikan lingkungan lembab yang memfasilitasi autolytic debridement.',
        kebijakan: 'Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            {
                step: 'Persiapan',
                items: [
                    {
                        desc: 'Persiapan Alat',
                        detail: [
                            {
                                text: '1) Instrumen GV Set steril berisi:',
                                subDetail: [
                                    '- Gunting jaringan tajam 1 buah',
                                    '- Pinset anatomis 2 buah',
                                    '- Pinset chirurgis 1 buah',
                                    '- Kom 2 buah'
                                ]
                            },
                            { text: '2) Nierbeken/bengkok berisi larutan enzymatik yang sudah diencerkan: 1 buah' },
                            { text: '3) Handscoon/Sarung tangan sesuai ukuran: 3 pasang Non-Steril' },
                            { text: '4) Larutan NaCl 0,9% 500 ml dalam botol' },
                            {
                                text: '5) Topikal terapi sesuai kondisi luka, misalnya:',
                                subDetail: [
                                    '- Hydrogel Paste atau Zink',
                                    '- Gigazym',
                                    '- Cream antibiotika topikal (misal: mupirocin, augmentin, Metcopain)',
                                    '- Foam penyerap exudate (absorbent dressing) sesuai dengan kondisi luka (misalnya: Foam, Hydrocoloid, Alginat, transparan film)'
                                ]
                            },
                            { text: '6) Kassa segi empat (ukuran sesuai kebutuhan)' },
                            { text: '7) Aplikator kapas (cotton bud)' },
                            { text: '8) Alkohol swab/ Convacare remover wipe' },
                            { text: '9) Gown/apron plastik' },
                            { text: '10) Underpad/Perlak' },
                            { text: '11) Transofix 1 buah' },
                            { text: '12) Plester' },
                            { text: '13) Gunting verband: 1 buah' },
                            { text: '14) Nierbeken/bengkok, kantung sampah infeksius' },
                            { text: '15) Penggaris pengukur luka disposible' },
                            { text: '16) Sabun cair antiseptik' },
                            { text: '17) Cairan PHMB (Polyhexamethylene biguanidine)' }
                        ]
                    },
                    {
                        desc: 'Persiapan Pasien',
                        detail: 'Beritahu pasien dan/ keluarga tentang tujuan dan prosedur perawatan luka yang akan dilakukan'
                    },
                    {
                        desc: 'Persiapan Lingkungan',
                        detail: 'Siapkan lingkungan sekitar pasien dengan memasang skerm atau menutup tirai jendela / pintu kamar pasien agar privasi pasien terjaga'
                    }
                ]
            },
            {
                step: 'Pelaksanaan',
                items: [
                    { desc: 'A. Ucapkan Basmallah' },
                    { desc: 'B. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                    { desc: 'C. Lakukan verifikasi identitas pasien dengan cara mencocokan nama pada rekam medik pasien dengan nama yang tertera pada gelang identitas pasien' },
                    { desc: 'D. Periksa program perawatan luka / penggantian balutan yang direkomendasikan' },
                    { desc: 'E. Bawa peralatan ke dekat pasien' },
                    { desc: 'F. Atur posisi pasien sesuai lokasi luka agar memudahkan prosedur tindakan' },
                    { desc: 'G. Pakai gown/apron plastik dan sarung tangan (Lihat SPO pemakaian sarung tangan umum)' },
                    { desc: 'H. Tempatkan kantung sampah di dekat area kerja' },
                    { desc: 'I. Letakkan underpad dibawah area luka' },
                    { desc: 'J. Usapkan alkohol swab/adhesive remover pada plester balutan yang menempel di kulit pasien' },
                    { desc: 'K. Lepaskan/angkat perekat balutan secara hati-hati' },
                    { desc: 'L. Basahi kassa (balutan primer) dengan NaCl 0,9 % bila kassa lengket di dasar luka' },
                    { desc: 'M. Buang kasa pembalut luka ke dalam kantung sampah' },
                    { desc: 'N. Lepaskan sarung tangan (Lihat SPO melepas sarung tangan PPI)' },
                    { desc: 'O. Kenakan sarung tangan baru (Lihat SPO pemakaian sarung tangan umum PPI)' },
                    { desc: 'P. Luka dibersihkan dengan NaCl 0,9% dan gosok jaringan nekrosis secara lembut dengan ujung jari dengan diberi sabun, awal yang dibersihkan bagian luar dulu setelah itu bagian lukanya kemudian luka dibilas kembali dengan NaCl 0,9%' },
                    { desc: 'Q. Keringkan luka dengan cara di tekan ringan dan lembut (bukan digosok) dengan kassa' },
                    { desc: 'R. Lepaskan sarung tangan (Lihat SPO Melepas sarung tangan PPI)' },
                    { desc: 'S. Buka Instrumen GV Set steril' },
                    { desc: 'T. Kenakan sarung tangan steril (Lihar SPO Pemakaian sarung tangan steril PPI)' },
                    { desc: 'U. Kaji luka tentang jumlah, jenis, viskositas dan bau exudate; warna dasar luka; ukuran luka (panjang, lebar, kedalaman dalam centimeter); jaringan granulasi/ fibrorik, dan tanda infeksi' },
                    { desc: 'V. Lakukan nekrotomi untuk melepas dan membuang jaringan nekrotik (jika jaringan nekrotik telah lepas dari dasar luka) dengan gunting tajam dan pinset' },
                    { desc: 'W. Bilas dengan NaCl 0,9% dan keringkan dengan kassa' },
                    { desc: 'X. Kompres dengan cairan PHMB (Polyhexamethylene biguanidin) ± 10 – 15 menit' },
                    { desc: 'Y. Aplikasikan antibiotika topikal dan autolitic Gel di permukaan luka secara merata. Jika luka berwarna hitam menggunakan hydrogel, jika berwarna putih, kuning atau hijau menggunakan hydrogel antimikribial' },
                    { desc: 'Z. Kemudian tutup dengan balutan penyerap exudate menggunakan foam sebagai primary dressing' },
                    { desc: 'AA. Tutup balutan dengan dressing atau Transparent film dressing (tepi pembalut melingkupi 3 - 4 cm dari tepi luka)' },
                    { desc: 'BB. Tutup dengan beberapa lapis kasa dan tutup seluruh permukaan kasa dengan plester non-woven' },
                    { desc: 'CC. Letakkan instrumen yang telah terpakai dan kotor di dalam bengkok berisi larutan enzymatik yang sudah diencerkan, rendam instrumen dalam larutan enzymatik selama 10-15 menit (Lihat SPO Dekontaminasi PPI)' },
                    { desc: 'DD. Angkat underpad dan rapihkan pasien' },
                    { desc: 'EE. Ucapkan Hamdalah' },
                    { desc: 'FF. Cuci peralatan kotor dan merapikan kembali di tempatnya semula' },
                    { desc: 'GG. Lepaskan sarung tangan (Lihat SPO Melepas sarung tangan PPI)' },
                    { desc: 'HH. Lepaskan gown/ apron plastik' },
                    { desc: 'II. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Pantau respon pasien selama dan setelah tindakan perawatan luka'
            },
            {
                step: 'Dokumentasi',
                desc: 'Dokumentasikan tindakan yang telah dilakukan dalam rekam medik pasien : tentang waktu penggantian balutan luka, penampilan/ukuran luka dan exudate.'
            }
        ],
        dokumenTerkait: ['Status Pasien'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Pelayanan Intensif', 'Instalasi Bedah Sentral']
    },
    {
        id: 1302,
        title: 'Merawat & Mengganti Balutan Luka Granulasi (Warna Dasar Luka Merah)',
        category: 'tindakan',
        subCategory: 'medikalBedah',
        description: 'Perawatan luka dengan warna dasar merah yang merupakan tanda pertumbuhan jaringan granulasi dengan vaskularisasi baik.',
        icon: 'fa-hand-holding-heart',
        tags: ['Perawatan Luka', 'Luka Granulasi', 'Medikal Bedah'],
        noDokumen: '445/SPO.3310/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Warna Dasar Luka Merah adalah permukaan dasar luka berwarna merah terang dan lembab yang merupakan tanda bahwa luka dalam proses pertumbuhan jaringan granulasi dengan vaskularisasi baik dan mudah berdarah.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah perawatan luka granulasi untuk :\nMemberikan lingkungan lembab yang memfasilitasi pertumbuhan jaringan granulasi dan proses epithelisasi.\nMelindungi dari trauma.\nMencegah kontaminasi mikroorganisme\nMemberikan kenyamanan fisik dan psikologis kepada pasien.',
        kebijakan: 'Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            {
                step: 'Persiapan',
                items: [
                    {
                        desc: 'Persiapan Alat',
                        detail: [
                            {
                                text: '1) Instrumen GV Set steril berisi:',
                                subDetail: [
                                    '- Gunting jaringan tajam 1 buah',
                                    '- Pinset anatomis 2 buah',
                                    '- Pinset chirurgis 1 buah',
                                    '- Kom 2 buah'
                                ]
                            },
                            { text: '2) Nierbeken/bengkok berisi larutan enzymatik yang sudah diencerkan : 1 buah' },
                            { text: '3) Handscoon/Sarung tangan sesuai ukuran: 2 pasang (1 pasang Non-Steril, 1 pasang Steril)' },
                            { text: '4) Larutan NaCl 0,9% 500 ml dalam botol, Transofix 1 buah' },
                            {
                                text: '5) Topikal terapi sesuai kondisi luka ( Hydrogel Paste, zink, Gygazym )'
                            },
                            { text: '6) Balutan penyerap exudate (absorbent dressing) sesuai dengan kondisi luka' },
                            { text: '7) Kassa segi empat (ukuran sesuai kebutuhan), Aplikator kapas' },
                            { text: '8) Aplikator kapas (cotton bud)' },
                            { text: '9) alkohol swab/ Convacare remover wipe' },
                            { text: '10) Gown/apron plastik' },
                            { text: '11) Underpad/perlak' },
                            { text: '12) Plester' },
                            { text: '13) Gunting verband: 1 buah' },
                            { text: '14) Nierbeken/bengkok, kantung sampah infeksius' },
                            { text: '15) Penggaris pengukur luka disposible' }
                        ]
                    },
                    {
                        desc: 'Persiapan Pasien',
                        detail: 'Beritahu pasien dan/ keluarga tentang tujuan dan prosedur perawatan luka yang akan dilakukan'
                    },
                    {
                        desc: 'Persiapan Lingkungan',
                        detail: 'Siapkan lingkungan sekitar pasien dengan memasang skerm atau menutup tirai jendela / pintu kamar pasien agar privasi pasien terjaga'
                    }
                ]
            },
            {
                step: 'Pelaksanaan',
                items: [
                    { desc: 'A. Ucapkan Basmallah' },
                    { desc: 'B. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                    { desc: 'C. Lakukan verifikasi identitas pasien dengan cara mencocokan nama pada rekam medik pasien dengan nama yang tertera pada gelang identitas pasien' },
                    { desc: 'D. Periksa program perawatan luka/penggantian balutan yang direkomendasikan' },
                    { desc: 'E. Bawa peralatan ke dekat pasien' },
                    { desc: 'F. Atur posisi pasien sesuai lokasi luka dan memudahkan prosedur tindakan' },
                    { desc: 'G. Pakai gown/apron plastik dan sarung tangan (Lihat SPO pemakaian sarung tangan umum PPI)' },
                    { desc: 'H. Tempatkan kantung sampah medis di dekat area kerja' },
                    { desc: 'I. Letakkan underpad dibawah area luka' },
                    { desc: 'J. Usapkan alkohol swab pada perekat balutan yang menempel di kulit pasien' },
                    { desc: 'K. Lepaskan/angkat perekat balutan secara hati-hati' },
                    { desc: 'L. Basahi kassa dengan NaCl 0,9 % bila kasa lengket di dasar luka' },
                    { desc: 'M. Buang kasa pembalut luka ke dalam kantung sampah' },
                    { desc: 'N. Lepaskan sarung tangan (Lihat SPO melepas sarung tangan PPI)' },
                    { desc: 'O. Buka Instrumen GV set steril' },
                    { desc: 'P. Kenakan sarung tangan steril (Lihar SPO Pemakaian sarung tangan steril PPI)' },
                    { desc: 'Q. Bilas luka dengan NaCl 0,9% dan gosok permukaan luka secara lembut dengan ujung jari sampai bersih' },
                    { desc: 'R. Keringkan luka dengan cara di tekan ringan dan lembut (bukan digosok) dengan kassa' },
                    { desc: 'S. Kaji jumlah, jenis, konsistensi dan bau exudate; warna dasar luka; ukuran luka; jaringan granulasi atau fibrous, dan tanda-tanda infeksi' },
                    { desc: 'T. Aplikasikan antibiotika topikal dan autolitic Gel di permukaan luka secara merata. Jika luka berwarna hitam menggunakan hydrogel, jika berwarna putih, kuning atau hijau menggunakan hydrogel antimikribial ke seluruh luka secara merata. Jika ada yang berongga bisa diisi dengan kassa atau foam' },
                    { desc: 'U. Tutup gel dengan balutan penyerap exudate menggunakan foam sebagai primary dressing' },
                    { desc: 'V. Tutup balutan dengan dressing Transparent film dressing (tepi pembalut melingkupi 3 - 4 cm dari tepi luka)' },
                    { desc: 'W. Tutup seluruh permukaan kasa dengan plester Non-woven' },
                    { desc: 'X. Letakkan instrumen yang telah terpakai dan kotor di dalam bengkok berisi larutan enzymatik yang sudah diencerkan, rendam instrumen dalam larutan enzymatik selama 10-15 menit (Lihat SPO Dekontaminasi PPI)' },
                    { desc: 'Y. Angkat underpad dan rapihkan pasien' },
                    { desc: 'Z. Ucapkan Hamdallah' },
                    { desc: 'AA. Cuci peralatan kotor dan rapihkan peralatan' },
                    { desc: 'BB. Lepaskan sarung tangan (Lihat SPO Melepas sarung tangan PPI)' },
                    { desc: 'CC. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Pantau respon pasien selama dan setelah tindakan perawatan luka'
            },
            {
                step: 'Dokumentasi',
                desc: 'Dokumentasikan tindakan yang telah dilakukan dalam rekam medik pasien : tentang penggantian balutan luka, penampilan/ukuran luka dan exudate.'
            }
        ],
        dokumenTerkait: ['Status Pasien'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Pelayanan Intensif', 'Instalasi Bedah Sentral']
    },
    {
        id: 1303,
        title: 'Merawat & Mengganti Balutan Drain',
        category: 'tindakan',
        subCategory: 'medikalBedah',
        description: 'Perawatan balutan penutup stoma insersi pipa/tube drain untuk mencegah kontaminasi bakteri.',
        icon: 'fa-brands fa-scribd',
        tags: ['Perawatan Drain', 'Drain', 'Medikal Bedah'],
        noDokumen: '445/SPO.3311/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Drain adalah pipa/tube yang diinsersikan oleh dokter bedah di dekat area insisi bedah untuk mengalirkan exudates dari area dead space luka dan menampungnya dalam suatu reservoir.\nBalutan drain adalah balutan penutup stoma insersi pipa/tube drain untuk mencegah kontaminasi bakteri.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah perawatan drain untuk :\nMemberikan kenyamanan kepada pasien\nMencegah kontaminasi bakteri pada stab wound drain',
        kebijakan: 'Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            {
                step: 'Persiapan',
                items: [
                    {
                        desc: 'Persiapan Alat',
                        detail: [
                            {
                                text: '1) Instrumen GV Set steril berisi:',
                                subDetail: [
                                    '- Gunting jaringan tajam 1 buah',
                                    '- Pinset anatomis 2 buah',
                                    '- Pinset chirurgis 1 buah',
                                    '- Kom 2 buah'
                                ]
                            },
                            { text: '2) Sarung tangan 2 pasang (1 pasang steril, 1 pasang non steril)' },
                            { text: '3) Nierbeken/bengkok berisi larutan enzymatik yang sudah diencerkan 1 buah' },
                            { text: '4) Kassa (ukuran sesuai kebutuhan)' },
                            { text: '5) Cotton bud/lidi kapas secukupnya' },
                            { text: '6) Foam penyerap exudates ( Jika perlu )' },
                            { text: '7) NaCl 0.9% 500 ml dan Transofix 1 buah' },
                            { text: '8) Alcohol swab/ Convacare remover wipe' },
                            { text: '9) Plester' },
                            { text: '10) Gown / apron plastik 1 buah' },
                            { text: '11) Underpad 1 buah' },
                            { text: '12) Gunting verband 1 buah' },
                            { text: '13) Nierbeken/bengkok, kantung sampah infeksius' }
                        ]
                    },
                    {
                        desc: 'Persiapan Pasien',
                        detail: 'Beritahu pasien dan/ keluarga tentang tujuan dan prosedur perawatan luka yang akan dilakukan'
                    },
                    {
                        desc: 'Persiapan Lingkungan',
                        detail: 'Siapkan lingkungan sekitar pasien dengan memasang skerm atau menutup tirai jendela / pintu kamar pasien agar privasi pasien terjaga'
                    }
                ]
            },
            {
                step: 'Pelaksanaan',
                items: [
                    { desc: 'A. Ucapkan Basmallah' },
                    { desc: 'B. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                    { desc: 'C. Lakukan verifikasi identitas pasien dengan cara mencocokan nama pada rekam medik pasien dengan nama yang tertera pada gelang yang terpasang pada pasien' },
                    { desc: 'D. Periksa program perawatan dan penggantian balutan drain' },
                    { desc: 'E. Bawa peralatan ke dekat pasien' },
                    { desc: 'F. Atur posisi pasien sesuai lokasi luka dan memudahkan prosedur perawatan drain' },
                    { desc: 'G. Pakai gown/apron, dan sarung tangan (Lihat SPO pemakaian sarung tangan umum PPI)' },
                    { desc: 'H. Tempatkan bengkok/kantung sampah di dekat area kerja' },
                    { desc: 'I. Letakkan underpad/perlak dibawah area luka' },
                    { desc: 'J. Usapkan alkohol swab/ convacare remover wipe pada plester yang melekat di kulit' },
                    { desc: 'K. Lepaskan plester dan pembalut kotor secara hati-hati, jangan menimbulkan tarikan pada pipa drain' },
                    { desc: 'L. Buang kasa pembalut luka ke kantung sampah' },
                    { desc: 'M. Lepaskan sarung tangan (Lihat SPO melepas sarung tangan PPI)' },
                    { desc: 'N. Buka Instrumen GV Set steril' },
                    { desc: 'O. Kenakan sarung tangan steril (Lihar SPO Pemakaian sarung tangan steril PPI)' },
                    { desc: 'P. Bersihkan area insersi drain dengan kassa lembab NaCl 0,9%, gerakan usapan melingkar dari tengah ke arah luar dengan radius 5 cm sekeliling drain.Buang kassa lembab kotor ke kantung sampah' },
                    { desc: 'Q. Kaji patensi drain, warna stab wound, tanda inflamasi/infeksi, exudate dalam reservoir drain (jumlah, warna, konsistensi).' },
                    { desc: 'R. Aplikasikan Pembalut penyerap exudates ( misalnya : Foam, Hydrocoloid, Alginat) belah di bagian tengahnya kemudian lilitkan di sekeliling area insersi drain' },
                    { desc: 'S. Tutup pembalut penyerap eksudat yang telah dipakai dengan kassa/ dressing yang telah dibelah di bagian tengah, Pastikan balutan menutup rapat.' },
                    { desc: 'T. Rekatkan dengan plester' },
                    { desc: 'U. Letakkan instrumen yang telah terpakai dan kotor di dalam bengkok berisi larutan enzymatik yang sudah diencerkan, rendam instrumen dalam larutan enzymatik selama 10-15 menit (Lihat SPO Dekontaminasi PPI)' },
                    { desc: 'V. Angkat perlak/underpad dan rapihkan pasien' },
                    { desc: 'W. Cuci peralatan dan rapihkan kembali pada tempatnya' },
                    { desc: 'X. Lepaskan sarung tangan (Lihat SPO Melepas sarung tangan PPI)' },
                    { desc: 'Y. Lepaskan gown/ apron plastik' },
                    { desc: 'Z. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Pantau respon pasien selama dan setelah perawatan luka'
            },
            {
                step: 'Dokumentasi',
                desc: 'Dokumentasikan tindakan yang telah dilakukan dalam rekam medik pasien : tentang penggantian balutan luka, penampilan/ukuran luka, jumlah patensi drain, jumlah dan warna exudate di dalam reservoir drain.'
            }
        ],
        dokumenTerkait: ['Status Pasien'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Pelayanan Intensif', 'Instalasi Bedah Sentral']
    },
    {
        id: 1304,
        title: 'Mengangkat Jahitan Luka (Suture)',
        category: 'tindakan',
        subCategory: 'medikalBedah',
        description: 'Prosedur melepaskan ikatan jahitan suture dari luka insisi sesuai dengan waktu yang telah ditetapkan dan kondisi penyembuhan luka.',
        icon: 'fa-cut',
        tags: ['Angkat Jahitan', 'Suture', 'Medikal Bedah'],
        noDokumen: '445/SPO.3312/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Jahitan Luka (suture) adalah suatu bahan berbentuk seperti benang berbahan silk (sutera) dan polimer (prolene) yang digunakan untuk merapatkan luka robek / insisi sehingga tepi luka saling merapat satu dengan yang lain dan mengalami penyembuhan.\nMengangkat jahitan suture adalah melepaskan ikatan jahitan suture dari luka insisi sesuai dengan waktu yang telah ditetapkan dan kondisi penyembuhan luka.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah mengangkat jahitan luka untuk :\nMemberikan kenyamanan kepada pasien.\nMencegah infeksi pada luka insisi akibat corpus aleinum suture',
        kebijakan: 'Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            {
                step: 'Persiapan',
                items: [
                    {
                        desc: 'Persiapan Alat',
                        detail: [
                            {
                                text: '1) Instrumen GV Up Hecting Set steril berisi:',
                                subDetail: [
                                    '- Gunting angkat jahitan 1 buah',
                                    '- Pinset anatomis 2 buah',
                                    '- Pinset chirurgis 1 buah',
                                    '- Kom 2 buah'
                                ]
                            },
                            { text: '2) Sarung tangan 2 pasang (1 pasang steril, 1 pasang non steril)' },
                            { text: '3) Nierbeken/ bengkok berisi larutan enzymatik yang sudah diencerkan : 1 buah' },
                            { text: '4) NaCl 0.9% 500 ml dan Transofix 1 buah' },
                            { text: '5) Alkohol swab/Convacare remover wipe' },
                            { text: '6) Cotton bud/lidi kapas secukupnya' },
                            { text: '7) Pembalut penyerap eksudat (jika diperlukan)' },
                            { text: '8) Kassa secukupnya (sesuai kebutuhan)' },
                            { text: '9) Gown/apron plastik' },
                            { text: '10) Gunting verband 1 buah' },
                            { text: '11) Nierbeken/bengkok, kantung sampah infeksius' }
                        ]
                    },
                    {
                        desc: 'Persiapan Pasien',
                        detail: 'Beritahu pasien dan/keluarga tentang tujuan dan prosedur angkat jahitan'
                    },
                    {
                        desc: 'Persiapan Lingkungan',
                        detail: 'Siapkan lingkungan pasien dengan memasang skrem atau menutup tirai jendela / pintu ruangan pasien agar privasi pasien terjaga'
                    }
                ]
            },
            {
                step: 'Pelaksanaan',
                items: [
                    { desc: 'A. Ucapkan Basmallah' },
                    { desc: 'B. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                    { desc: 'C. Lakukan verifikasi identitas pasien dengan cara mencocokan nama pada rekam medik pasien dengan nama yang tertera pada gelang identitas pasien' },
                    { desc: 'D. Periksa program angkat jahitan yang direkomendasikan' },
                    { desc: 'E. Bawa peralatan ke dekat pasien' },
                    { desc: 'F. Atur posisi pasien sesuai lokasi luka dan memudahkan prosedur angkat jahitan' },
                    { desc: 'G. Pakai gown/apron plastik dan sarung tangan (Lihat SPO pemakaian sarung tangan umum)' },
                    { desc: 'H. Tempatkan kantung sampah di dekat area kerja' },
                    { desc: 'I. Usapkan alkohol swab/ Convacare remover pada plester yang menempel di kulit' },
                    { desc: 'J. Lepaskan plester dan pembalut kotor secara hati-hati dari area yang bersih ke area yang kotor' },
                    { desc: 'K. Buang kasa pembalut luka ke kantung sampah' },
                    { desc: 'L. Lepaskan sarung tangan (Lihat SPO melepas sarung tangan PPI)' },
                    { desc: 'M. Buka Instrumen GV Set steril' },
                    { desc: 'N. Kenakan sarung tangan steril (Lihar SPO Pemakaian sarung tangan steril PPI)' },
                    { desc: 'O. Kaji kerapatan tepi luka, healing ridge, jenis jahitan/letak simpul jahitan dan jumlah jahitan' },
                    { desc: 'P. Usapkan kassa yang dibasahi NaCl 0.9% secara lembut di atas luka jahitan (di sela-sela jahitan luka) sampai bersih. Keringkan dengan kassa secara lembut' },
                    { desc: 'Q. Bersihkan kulit di sekitar jahitan dengan kassa lembab NaCl 0,9% secara lembut dan searah (radius 4 – 5 cm dari tepi luka)' },
                    { desc: 'R. Tempatkan sebuah kassa steril di dekat luka' },
                    { desc: 'S. Ambil pinset chirurgis dan gunting angkat jahitan, dan angkat jahitan suture (silk /prolene):\n- Jepit simpul jahitan dengan pinset chirurgis, angkat sedikit sambil meminta pasien menarik napas panjang\n- Gunting suture di bagian bawah simpul jahitan dengan gunting angkat jahitan dan angkat suture satu per satu\n- Letakkan suture yang telah dilepas di atas kassa yang disediakan' },
                    { desc: 'T. Periksa jumlah suture yang diangkat (jumlahnya harus sama dengan jumlah jahitan) lalu buang ke kantung sampah' },
                    { desc: 'U. Aplikasikan pembalut penyerap eksudat (jika diperlukan)' },
                    { desc: 'V. Letakkan instrumen yang telah terpakai dan kotor di dalam bengkok berisi larutan enzymatik yang sudah diencerkan, rendam instrumen dalam larutan enzymatik selama 10-15 menit (Lihat SPO Dekontaminasi PPI)' },
                    { desc: 'W. Tutup luka dengan dressing atau Transparent film dressing (tepi pembalut melingkupi 3 - 4 cm dari tepi luka)' },
                    { desc: 'X. Rapihkan pasien' },
                    { desc: 'Y. Cuci peralatan dan rapihkan kembali di tempat semula' },
                    { desc: 'Z. Lepaskan sarung tangan (Lihat SPO Melepas sarung tangan PPI)' },
                    { desc: 'AA. Lepaskan gown/ apron plastik' },
                    { desc: 'BB. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Pantau respon pasien selama dan setelah perawatan luka'
            },
            {
                step: 'Dokumentasi',
                desc: 'Dokumentasikan tindakan yang telah dilakukan dalam rekam medik pasien : tentang penggantian balutan luka, jumlah suture yang telah/belum diangkat, penampilan/ukuran luka dan exudate'
            }
        ],
        dokumenTerkait: ['Status Pasien'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Pelayanan Intensif', 'Instalasi Bedah Sentral']
    },
    {
        id: 1305,
        title: 'Mengangkat Jahitan Luka (Staples)',
        category: 'tindakan',
        subCategory: 'medikalBedah',
        description: 'Prosedur melepaskan staples yang tertanam di kulit pasien di sekitar luka insisi sesuai dengan waktu yang telah ditetapkan.',
        icon: 'fa-barcode',
        tags: ['Angkat Jahitan', 'Staples', 'Medikal Bedah'],
        noDokumen: '445/SPO.3313/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Staples/Aggrave adalah suatu bahan stainles steel berbentuk staples yang digunakan untuk merapatkan luka robek / insisi sehingga tepi luka saling merapat satu dengan yang lain dan mengalami penyembuhan.\nMengangkat jahitan staples adalah melepaskan staples yang tertanam di kulit pasien di sekitar luka insisi sesuai dengan waktu yang telah ditetapkan dan kondisi penyembuhan luka.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah mengangkat jahitan luka untuk :\nMemberikan kenyamanan kepada pasien.\nMencegah infeksi pada luka insisi akibat corpus aleinum suture',
        kebijakan: 'Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            {
                step: 'Persiapan',
                items: [
                    {
                        desc: 'Persiapan Alat',
                        detail: [
                            {
                                text: '1) Instrumen Steril : Bak instrument berisi: agraf tang dan 1 buah Pincet chirurgis'
                            },
                            { text: '2) Sarung tangan steril 2 pasang' },
                            { text: '3) Nierbeken/bengkok berisi larutan enzymatik yang sudah diencerkan : 1 buah' },
                            { text: '4) NaCl 0.9% 500 ml dan transofix 1 buah' },
                            { text: '5) Alkohol swab / Convacare remover wipe' },
                            { text: '6) Cotton bud/lidi kapas secukupnya' },
                            { text: '7) Pembalut penyerap eksudat (jika diperlukan)' },
                            { text: '8) Kassa secukupnya' },
                            { text: '9) Gown/apron plastik 1 buah' },
                            { text: '10) Sarung tangan bersih 1 pasang' },
                            { text: '11) Gunting verband 1 buah' },
                            { text: '12) Nierbeken/bengkok, kantung sampah 1 buah' }
                        ]
                    },
                    {
                        desc: 'Persiapan Pasien',
                        detail: 'Beritahu pasien dan/ keluarga tentang tujuan dan prosedur pengangkatan staples yang akan dilakukan'
                    },
                    {
                        desc: 'Persiapan Lingkungan',
                        detail: 'Siapkan lingkungan sekitar pasien dengan memasang skerm atau menutup tirai jendela / pintu kamar pasien agar privasi pasien terjaga'
                    }
                ]
            },
            {
                step: 'Pelaksanaan',
                items: [
                    { desc: 'A. Ucapkan Basmallah' },
                    { desc: 'B. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                    { desc: 'C. Lakukan verifikasi identitas pasien dengan cara mencocokan nama pada rekam medik pasien dengan nama yang tertera pada gelang identitas pasien' },
                    { desc: 'D. Periksa program angkat jahitan yang direkomendasikan' },
                    { desc: 'E. Bawa peralatan ke dekat pasien' },
                    { desc: 'F. Atur posisi pasien sesuai lokasi luka dan memudahkan prosedur angkat jahitan' },
                    { desc: 'G. Pakai gown/apron plastik dan sarung tangan (Lihat SPO pemakaian sarung tangan umum PPI)' },
                    { desc: 'H. Tempatkan kantung sampah di dekat area kerja' },
                    { desc: 'I. Usapkan alkohol swab / Convacare remover pada plester yang menempel di kulit' },
                    { desc: 'J. Lepaskan plester dan pembalut kotor secara hati-hati dari area yang bersih ke area yang kotor' },
                    { desc: 'K. Buang kassa pembalut luka ke kantung sampah' },
                    { desc: 'L. Lepaskan sarung tangan (Lihat SPO melepas sarung tangan PPI)' },
                    { desc: 'M. Kenakan sarung tangan steril (Lihat SPO pemakaian sarung tangan steril PPI)' },
                    { desc: 'N. Kaji kerapatan tepi luka, healing ridge, jenis jahitan/letak staples dan jumlah staples' },
                    { desc: 'O. Usapkan kassa yang dibasahi NaCl 0.9% secara lembut di atas luka jahitan staples (di sela-sela jahitan luka) sampai bersih. Keringkan dengan kassa secara lembut' },
                    { desc: 'P. Bersihkan kulit di sekitar jahitan dengan kassa NaCl 0,9% secara lembut dan searah (radius 4 – 5 cm dari tepi luka)' },
                    { desc: 'Q. Tempatkan sebuah kassa steril di dekat luka' },
                    { desc: 'R. Gunakan agrave tang, jepit staples dengan kuat sehingga ujungnya terlepas dari kulit dan angkat staples satu persatu' },
                    { desc: 'S. Bersihkan lubang luka bekas staples dengan NaCl 0,9% sampai bersih' },
                    { desc: 'T. Periksa jumlah aggrave/staples yang diangkat (jumlahnya harus sama dengan jumlah jahitan) lalu membuangnya ke kantung sampah' },
                    { desc: 'U. Aplikasikan pembalut penyerap eksudat ( jika diperlukan)' },
                    { desc: 'V. Letakkan instrumen yang telah terpakai dan kotor di dalam bengkok berisi larutan enzymatik yang sudah diencerkan, rendam instrumen dalam larutan enzymatik selama 10-15 menit (Lihat SPO Dekontaminasi PPI)' },
                    { desc: 'W. Tutup luka dengan balutan dressing atau Transparent film dressing (tepi pembalut melingkupi 3 - 4 cm dari tepi luka)' },
                    { desc: 'X. Rapihkan pasien' },
                    { desc: 'Y. Cuci peralatan dan rapihkan kembali di tempat semula' },
                    { desc: 'Z. Lepaskan sarung tangan (Lihat SPO Melepas sarung tangan PPI)' },
                    { desc: 'AA. Lepaskan gown/ apron plastik' },
                    { desc: 'BB. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Pantau respon pasien selama dan setelah perawatan luka'
            },
            {
                step: 'Dokumentasi',
                desc: 'Dokumentasikan tindakan yang telah dilakukan dalam rekam medik pasien : tentang tentang pengangkatan staples, jumlah staples yang telah/belum diangkat, penampilan luka/ukuran luka dan exudate'
            }
        ],
        dokumenTerkait: ['Status Pasien'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Pelayanan Intensif', 'Instalasi Bedah Sentral']
    },


   
/*
 ===================================================================================
 Category Keperawatan Dasar , ID: 1401 - 1500
 ===================================================================================
*/
    {
        id: 1401,
        title: 'Mengukur Tekanan Darah',
        category: 'tindakan',
        subCategory: 'keperawatanDasar',
        description: 'Kegiatan mengukur tekanan darah melalui dinding arteri pasien menggunakan sphygmomanometer dan stetoskop.',
        icon: 'fa-heartbeat',
        tags: ['Tekanan Darah', 'Tanda Vital', 'Sphygmomanometer', 'Auskultasi'],
        noDokumen: '445/SPO.3408/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Suatu kegiatan mengukur tekanan darah melalui dinding arteri pasien dengan kriteria normal :\nUsia neonatus : 80/45 mmHg\nUsia 6-12 bulan : 90/60 mmHg\nUsia 1-5 tahun : 95/65 mmHg\nUsia 5-10 tahun : 100/60 mmHg\nUsia 10-15 tahun : 115/60 mmHg\nUsia > 15 tahun : Sistole 100 – 130 mmHg, Diastole 60 – 90 mmHg',
        tujuan: 'Sebagai acuan penerapan langkah – langkah untuk tindakan keperawatan mengukur tekanan darah.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            {
                step: 'Persiapan',
                items: [
                    {
                        desc: 'Persiapan Alat',
                        detail: [
                            { text: 'Stetoskop' },
                            { text: 'Sphygmomanometer dengan manometer air raksa/aneroid atau Tensimeter digital' },
                            { text: 'Manset sesuai dengan besarnya lengan' },
                            { text: 'Catatan keperawatan' }
                        ]
                    },
                    {
                        desc: 'Persiapan Pasien',
                        detail: 'Beritahu pasien dan keluarga tentang prosedur yang akan dilakukan.\nAtur posisi pasien, untuk memudahkan tindakan.\nPilih lokasi pengukuran dan manset yang tepat.'
                    },
                    {
                        desc: 'Persiapan Lingkungan',
                        detail: 'Siapkan lingkungan sekitar agar menjaga privasi pasien dan mempermudah tindakan.'
                    }
                ]
            },
            {
                step: 'Pelaksanaan',
                items: [
                    { desc: 'A. Perawat / Bidan cuci tangan' },
                    { desc: 'B. Ucapkan basmallah' },
                    { desc: 'C. Cocokan nama pada gelang identitas pasien' },
                    { desc: 'D. Atur posisi lengan pasien sejajar jantungnya' },
                    { desc: 'E. Buka pakaian dari lengan pasien' },
                    { desc: 'F. Pasang manset tekanan darah' },
                    {
                        desc: 'Metode Auskultasi',
                        detail: [
                            { text: '- Pasang manset di lengan atas, posisi manometer setinggi mata pemeriksa' },
                            { text: '- Raba arteri brakhialis, pompa manset sampai 30 mmHg diatas posisi denyutan menghilang' },
                            { text: '- Kempiskan manset, tunggu selama 30 detik' },
                            { text: '- Pompa manset sampai 30 mmHg diatas sistolik' },
                            { text: '- Gunakan stetoskop untuk mendengar suara denyut sistole dan diastole di atas arteri brakhialis' },
                            { text: '- Kempiskan manset dengan kecepatan 2-3 mmHg/detik, kemudian ukur saat terdengar sistole dan diastole' }
                        ]
                    },
                    {
                        desc: 'Metode Palpasi',
                        detail: [
                            { text: '- Raba arteri brakialis/radialis, pompa manset sampai 30 mmHg diatas titik denyut nadi menghilang' },
                            { text: '- Kempiskan manset dengan kecepatan 2-3 mmHg/detik' },
                            { text: '- Raba arteri untuk mengukur denyut sistole' }
                        ]
                    },
                    {
                        desc: 'Metode Digital',
                        detail: [
                            { text: '- Tekan tombol "ON" atau pompa manset sampai 30 mmHg diatas titik denyut nadi menghilang' },
                            { text: '- Lihat hasil pengukuran di layar mesin' }
                        ]
                    },
                    { desc: 'G. Lepaskan manset dari lengan pasien' },
                    { desc: 'H. Ucapkan hamdallah' },
                    { desc: 'I. Bereskan alat-alat' },
                    { desc: 'J. Cuci tangan' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Kaji respon pasien setelah dilakukan tindakan, bandingkan hasil pemeriksaan saat ini dengan hasil pemeriksaan yang lalu.'
            },
            {
                step: 'Dokumentasi',
                desc: 'Dokumentasikan tindakan dan hasil pengukuran dalam catatan keperawatan.'
            }
        ],
        dokumenTerkait: ['Status Pasien'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1402,
        title: 'Menghitung Denyut Nadi dan Pernafasan',
        category: 'tindakan',
        subCategory: 'keperawatanDasar',
        description: 'Kegiatan menghitung denyut nadi dan pernafasan pasien untuk menilai fungsi jantung dan sistem pernafasan.',
        icon: 'fa-lungs',
        tags: ['Nadi', 'Pernafasan', 'Tanda Vital', 'Respiration'],
        noDokumen: '445/SPO.3409/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Suatu kegiatan yang dilakukan untuk menghitung denyut nadi dan pernafasan pasien.\nKriteria normal denyut nadi:\n- Bayi 0 – 1 tahun: 130 – 160 x/menit\n- Anak 1 – 14 tahun: 90 – 120 x/menit\n- Dewasa: 60 – 80 x/menit\nKriteria normal pernafasan:\n- Bayi 0 – 1 tahun: 40 x/menit\n- Anak 1 – 14 tahun: 28 x/menit',
        tujuan: 'Sebagai acuan penerapan langkah – langkah untuk melaksanakan tindakan menghitung denyut nadi dan pernafasan pasien.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            {
                step: 'Persiapan',
                items: [
                    {
                        desc: 'Persiapan Alat dan Bahan',
                        detail: [
                            { text: 'Jam tangan dengan detik atau polsteller' },
                            { text: 'Stetoskop' },
                            { text: 'Catatan keperawatan' }
                        ]
                    },
                    {
                        desc: 'Persiapan Pasien dan Keluarga',
                        detail: 'Informasikan kepada pasien/keluarga tentang tujuan dan prosedur yang akan dilakukan.'
                    },
                    {
                        desc: 'Persiapan Lingkungan',
                        detail: 'Siapkan lingkungan sekitar agar menjaga privasi pasien dan mempermudah tindakan.'
                    }
                ]
            },
            {
                step: 'Pelaksanaan',
                items: [
                    { desc: 'A. Perawat / Bidan cuci tangan' },
                    { desc: 'B. Cocokan nama pasien dengan gelang identitas' },
                    { desc: 'C. Ucapkan basmallah sebelum melakukan tindakan' },
                    { desc: 'D. Hitung denyut nadi selama 1 menit' },
                    { desc: 'E. Hitung pernafasan selama 1 menit' },
                    { desc: 'F. Rapihkan kembali pasien' },
                    { desc: 'G. Ucapkan hamdallah' },
                    { desc: 'H. Bereskan alat' },
                    { desc: 'I. Cuci tangan sesudah tindakan' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Respon pasien selama dilakukan tindakan, bandingkan jumlah nadi dan pernafasan sebelumnya, adanya demam, palpitasi atau aritmia, pemberian obat-obatan, riwayat aritmia.'
            },
            {
                step: 'Dokumentasi',
                desc: 'Catat tindakan dalam rekam medik pasien meliputi waktu dan hasil pemeriksaan.'
            }
        ],
        dokumenTerkait: ['Status Pasien'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1403,
        title: 'Mengukur Suhu Tubuh',
        category: 'tindakan',
        subCategory: 'keperawatanDasar',
        description: 'Kegiatan mengukur suhu tubuh pasien menggunakan termometer untuk menilai kondisi demam atau hipotermia.',
        icon: 'fa-thermometer-half',
        tags: ['Suhu Tubuh', 'Termometer', 'Tanda Vital', 'Temperature'],
        noDokumen: '445/SPO.3410/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Suatu kegiatan mengukur suhu tubuh pasien dengan menggunakan thermometer.\nSuhu normal anak: 36,5 - 37,5 derajat Celcius\nSuhu normal bayi: 36,5 - 37,5 derajat Celcius\nSuhu normal dewasa: 36,5 – 37,5 derajat Celcius',
        tujuan: 'Sebagai acuan penerapan langkah – langkah untuk melaksanakan tindakan keperawatan mengukur suhu badan pasien.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            {
                step: 'Persiapan',
                items: [
                    {
                        desc: 'Persiapan Alat dan Bahan',
                        detail: [
                            { text: 'Thermometer axilla (elektrik)' },
                            { text: 'Bengkok' },
                            { text: 'Tissue 2 lembar' },
                            { text: 'Kapas alkohol' },
                            { text: 'Catatan suhu nadi' }
                        ]
                    },
                    {
                        desc: 'Persiapan Pasien dan Keluarga',
                        detail: 'Informasikan kepada pasien atau keluarga tentang tujuan dan prosedur yang akan dilakukan.\nAtur posisi pasien.'
                    },
                    {
                        desc: 'Persiapan Lingkungan',
                        detail: 'Siapkan lingkungan sekitar agar menjaga privasi pasien dan mempermudah tindakan.'
                    }
                ]
            },
            {
                step: 'Pelaksanaan',
                items: [
                    { desc: 'A. Perawat / Bidan cuci tangan sebelum tindakan' },
                    { desc: 'B. Ucapkan basmallah' },
                    { desc: 'C. Cocokan nama pasien dengan gelang identitas' },
                    { desc: 'D. Keringkan ketiak dengan tissue' },
                    { desc: 'E. Siapkan thermometer' },
                    { desc: 'F. Pastikan thermometer elektrik dapat berfungsi' },
                    { desc: 'G. Tekan tombol "ON" pada thermometer menunjukan angka tanda "LO°C"' },
                    { desc: 'H. Pasangkan reservoir thermometer, jepitkan di tengah ketiak, lengan dilipat sampai tanda alarm berbunyi' },
                    { desc: 'I. Cabut thermometer, baca dan mencatat hasilnya' },
                    { desc: 'J. Tekan "ON/OFF" untuk mematikan thermometer' },
                    { desc: 'K. Bersihkan termometer dengan tissue' },
                    { desc: 'L. Ucapkan hamdallah' },
                    { desc: 'M. Pasien dirapihkan kembali' },
                    { desc: 'N. Bereskan alat – alat dan bersihkan thermometer dengan kapas alkohol' },
                    { desc: 'O. Cuci tangan setelah tindakan' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Kaji respon pasien selama dan setelah dilakukan tindakan dari adanya demam, akral dingin, sianosis atau pemberian obat-obatan yang mempengaruhi perubahan suhu tubuh.'
            },
            {
                step: 'Dokumentasi',
                desc: 'Dokumentasikan hasil pengukuran pada rekam medik pasien meliputi jam pemeriksaan, hasil pemeriksaan dan respon pasien saat dilakukan tindakan.\nBuat grafik gambaran suhu di lembar grafik suhu nadi.'
            }
        ],
        dokumenTerkait: ['Status Pasien'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1404,
        title: 'Mengukur Tinggi Badan',
        category: 'tindakan',
        subCategory: 'keperawatanDasar',
        description: 'Kegiatan mengukur tinggi badan pasien dari puncak kepala sampai ujung kaki.',
        icon: 'fa-ruler',
        tags: ['Tinggi Badan', 'Antropometri', 'Pengukuran'],
        noDokumen: '445/SPO.3411/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Suatu kegiatan untuk mengukur tinggi badan pasien dari puncak kepala sampai dengan ujung kaki.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah melaksanakan tindakan pengukuran tinggi badan untuk:\nMenentukan dosis obat.\nMengidentifikasi status nutrisi.\nMengetahui proses tumbuh kembang dan struktur rangka tubuh.\nMengidentifikasi kekuatan dan kelemahan pasien.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            {
                step: 'Persiapan',
                items: [
                    {
                        desc: 'Persiapan Alat',
                        detail: [
                            { text: 'Alat pengukur tinggi badan (bersatu dengan timbangan berat badan / alat pengukur yang ditempel di dinding)' },
                            { text: 'Alat tulis' }
                        ]
                    },
                    {
                        desc: 'Persiapan Pasien',
                        detail: 'Jelaskan kepada pasien/keluarga tentang tujuan dan prosedur tindakan yang akan dilakukan.'
                    }
                ]
            },
            {
                step: 'Pelaksanaan',
                items: [
                    { desc: 'A. Perawat / Bidan cuci tangan sebelum tindakan' },
                    { desc: 'B. Cocokan nama pasien dengan gelang identitas' },
                    { desc: 'C. Ucapkan basmallah' },
                    { desc: 'D. Pasien diminta membuka alas kaki dan berdiri dengan posisi kepala menghadap ke depan' },
                    { desc: 'E. Pastikan posisi alat ukur pada posisi nol' },
                    { desc: 'F. Ukur tinggi badan pasien' },
                    { desc: 'G. Catat tinggi badan pasien' },
                    { desc: 'H. Bereskan alat-alat' },
                    { desc: 'I. Ucapkan hamdallah' },
                    { desc: 'J. Cuci tangan setelah tindakan' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Yakinkan alat ukur berada pada posisi yang benar.'
            },
            {
                step: 'Dokumentasi',
                desc: 'Dokumentasikan hasil pengukuran tinggi badan dalam rekam medik pasien.'
            }
        ],
        dokumenTerkait: ['Status Pasien'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1405,
        title: 'Mengukur Berat Badan',
        category: 'tindakan',
        subCategory: 'keperawatanDasar',
        description: 'Kegiatan mengukur berat badan pasien dalam satuan kilogram menggunakan timbangan.',
        icon: 'fa-weight-scale',
        tags: ['Berat Badan', 'Antropometri', 'Timbangan'],
        noDokumen: '445/SPO.3412/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Suatu kegiatan mengukur berat badan pasien dalam satuan kilogram.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah melaksanakan tindakan mengukur berat badan pasien, dalam rangka:\nUntuk menentukan dosis obat\nUntuk mengidentifikasi kelebihan atau kekurangan keseimbangan cairan\nUntuk mengidentifikasi status nutrisi pasien\nUntuk mengidentifikasi proses tumbuh kembang pasien\nUntuk mengidentifikasi kekuatan dan kelemahan pasien',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            {
                step: 'Persiapan',
                items: [
                    {
                        desc: 'Persiapan Alat',
                        detail: [
                            { text: 'Timbangan berat badan berdiri' },
                            { text: 'Alat tulis' }
                        ]
                    },
                    {
                        desc: 'Persiapan Pasien & Lingkungan',
                        detail: 'Jelaskan kepada pasien/keluarga tentang tujuan dan prosedur tindakan yang akan dilakukan.\nAtur posisi lingkungan yang aman dan nyaman.'
                    }
                ]
            },
            {
                step: 'Pelaksanaan',
                items: [
                    { desc: 'A. Cuci tangan sebelum tindakan' },
                    { desc: 'B. Cocokan nama pasien dengan gelang identitas' },
                    { desc: 'C. Atur timbangan agar jarum menunjukan angka nol dan seimbang' },
                    { desc: 'D. Ucapkan basmallah' },
                    { desc: 'E. Pasien diminta membuka alas kaki dan pakaian yang tebal (jaket/tas/popok bayi)' },
                    { desc: 'F. Ukur berat badan pasien' },
                    { desc: 'G. Catat berat badan pasien' },
                    { desc: 'H. Ucapkan hamdallah' },
                    { desc: 'I. Bereskan alat-alat' },
                    { desc: 'J. Cuci tangan setelah tindakan' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Bandingkan hasil pengukuran saat ini dengan hasil pengukuran sebelumnya.'
            },
            {
                step: 'Dokumentasi',
                desc: 'Dokumentasikan hasil pengukuran berat badan dalam rekam medis pasien.'
            }
        ],
        dokumenTerkait: ['Status Pasien'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Haemodialisa', 'Instalasi Bedah Sentral']
    },
    {
        id: 1406,
        title: 'Memberi Makan Melalui Selang NGT',
        category: 'tindakan',
        subCategory: 'keperawatanDasar',
        description: 'Kegiatan memberikan nutrisi berupa makanan cair kepada pasien melalui selang penduga lambung (NGT).',
        icon: 'fa-utensils',
        tags: ['NGT', 'Nutrisi', 'Selang Lambung', 'Enteral'],
        noDokumen: '445/SPO.3413/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Adalah suatu kegiatan memberikan nutrisi berupa makanan cair kepada pasien melalui selang penduga lambung/NGT untuk memenuhi kebutuhan nutrisi pasien.',
        tujuan: 'Sebagai acuan penerapan langkah – langkah dalam melaksanakan tindakan keperawatan memberikan nutrisi berupa makanan cair kepada pasien melalui NGT.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            {
                step: 'Persiapan',
                items: [
                    {
                        desc: 'Persiapan Alat',
                        detail: [
                            { text: 'Makanan cair sesuai diet dalam gelas tertutup' },
                            { text: 'Air minum pada tempatnya' },
                            { text: 'Spuit 50 cc dengan lubang di tengah' },
                            { text: 'Serbet makan/tissue' },
                            { text: 'Bengkok' },
                            { text: 'Meja makan pasien' }
                        ]
                    },
                    {
                        desc: 'Persiapan Pasien',
                        detail: 'Pasien dan keluarga diberi penjelasan tentang tindakan yang akan dilakukan.\nPasien diposisikan dengan kepala lebih tinggi dari badan / setengah duduk.'
                    },
                    {
                        desc: 'Persiapan Lingkungan',
                        detail: 'Skherm ditutup (bila perlu), bedplang tempat tidur pasien dibuka agar memudahkan perawat bekerja maksimal.'
                    }
                ]
            },
            {
                step: 'Pelaksanaan',
                items: [
                    { desc: 'A. Perawat cuci tangan' },
                    { desc: 'B. Cocokan nama pasien dengan gelang identitas' },
                    { desc: 'C. Dekatkan alat – alat di samping pasien' },
                    { desc: 'D. Ucapkan Bismillahirrohmanirrohiim, lalu bimbing pasien melafalkan doa sebelum makan' },
                    { desc: 'E. Pasangkan serbet / tissue di bawah dagu pasien' },
                    { desc: 'F. Lakukan retensi cairan lambung dengan menarik cairan lambung dari selang NGT sebanyak 5cc menggunakan spuit 50cc. Apabila jumlah retensi kurang dari 5cc dibuang tetapi bila banyak lebih dari 5 – 10cc jadwal makan ditunda sampai retensi kurang dari 5 cc' },
                    { desc: 'G. Masukan makanan melalui selang NGT dengan cara: ujung atas selang NGT ditekuk / diklem, tabung spuit 50cc disambungkan dengan selang NGT kemudian isi dengan makanan cair sebanyak 50cc atau sesuai kebutuhan tegakkan posisi tabung spuit lalu buka klem selang NGT biarkan makanan mengalir ke dalam lambung menggunakan gaya gravitasi tidak boleh didorong' },
                    { desc: 'H. Berikan diet pasien sesuai langkah di atas sampai dengan jumlah cairan yang masuk sesuai dengan program' },
                    { desc: 'I. Bilas selang NGT dengan air hangat kemudian ujung selang NGT diklem kembali' },
                    { desc: 'J. Ucapkan Alhamdulillah, doa setelah makan' },
                    { desc: 'K. Alat-alat dibersihkan dan dikembalikan ke tempat semula' },
                    { desc: 'L. Cuci tangan setelah tindakan' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Apabila saat diretensi cairan lambung yang keluar berubah warna menjadi kuning pekat, kecoklatan, kehitaman atau merah segar, pasien harus dipuasakan jangan diberi makan.\nApabila pasien muntah dan atau retensi cairan lambung berubah warna lakukan bilas lambung.\nSegera konsultasi / kolaborasi dengan dokter penanggung jawab untuk mendapat terapi apabila terjadi stress ulcer.'
            },
            {
                step: 'Dokumentasi',
                desc: 'Dokumentasikan tindakan dalam catatan asuhan keperawatan meliputi: waktu tindakan, jumlah makanan dan minum yang masuk serta jenis obat bila ada, reaksi setelah dan selama makan.'
            }
        ],
        dokumenTerkait: ['Status Pasien'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif']
    },
    {
        id: 1407,
        title: 'Oral Hygiene',
        category: 'tindakan',
        subCategory: 'keperawatanDasar',
        description: 'Kegiatan membersihkan mulut, gigi dan lidah pasien dari berbagai kotoran yang mengganggu kebersihan dan kesehatan mulut.',
        icon: 'fa-tooth',
        tags: ['Oral Hygiene', 'Perawatan Mulut', 'Kebersihan'],
        noDokumen: '445/SPO.3414/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Adalah suatu kegiatan membersihkan mulut, gigi dan lidah pasien dari berbagai kotoran yang mengganggu kebersihan dan kesehatan mulut.',
        tujuan: 'Sebagai acuan penerapan langkah–langkah tindakan keperawatan oral hygiene agar mulut pasien bersih, pasien merasa nyaman dan segar.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            {
                step: 'Persiapan',
                items: [
                    {
                        desc: 'Persiapan Alat',
                        detail: [
                            { text: 'Handuk / kain pengalas' },
                            { text: 'Gelas berisi air bersih' },
                            { text: 'Sikat dan pasta gigi' },
                            { text: 'Bak spuit kecil diberi alas kassa bersih' },
                            { text: 'Tonge spatel 2 buah yang telah dibungkus kassa bersih' },
                            { text: 'Kassa bersih 5 lembar / sesuai kebutuhan' },
                            { text: 'Pinset / Kapas lidi' },
                            { text: 'Bengkok' },
                            { text: 'Handschoon / sarung tangan bersih' },
                            { text: 'Borak gliserin (jika diperlukan)' },
                            { text: 'Benang untuk flossing (jika diperlukan)' },
                            { text: 'Baki / tempat membawa semua peralatan yang telah disiapkan' }
                        ]
                    },
                    {
                        desc: 'Persiapan Pasien',
                        detail: 'Pasien dan atau keluarga diberi penjelasan tentang tindakan yang akan dilakukan.'
                    },
                    {
                        desc: 'Persiapan Lingkungan',
                        detail: 'Skherm disekitar pasien ditutup, bedplang tempat tidur pasien dibuka agar memudahkan perawat bekerja maksimal.'
                    }
                ]
            },
            {
                step: 'Pelaksanaan',
                items: [
                    { desc: 'A. Perawat / Bidan cuci tangan sebelum tindakan' },
                    { desc: 'B. Ucapkan basmallah' },
                    { desc: 'C. Cocokan nama pasien dengan gelang identitas' },
                    { desc: 'D. Atur posisi pasien kalau bisa semi fowler atau duduk' },
                    { desc: 'E. Pakai sarung tangan' },
                    { desc: 'F. Letakkan handuk / kain pengalas di bawah dagu dan pipi pasien' },
                    { desc: 'G. Untuk pasien sadar, tapi belum mampu melakukan sendiri bantu untuk menggosok gigi seperti menggosok gigi biasa' },
                    { desc: 'H. Untuk pasien yang tidak sadar, ujung pinset / tonge spatel yang dibungkus kassa dibasahi dengan air bersih' },
                    { desc: 'I. Buka mulut pasien dengan tonge spatel' },
                    { desc: 'J. Bersihkan dengan pinset berbungkus kassa/kapas lidi sampai bersih area rongga mulut, gigi, gusi dan lidah, ganti kassa dengan yang baru bila sudah kotor' },
                    { desc: 'K. Buang kotoran / sampah ke bengkok' },
                    { desc: 'L. Keringkan mulut dengan handuk' },
                    { desc: 'M. Olesi bibir dengan borak glyserin bila kering dan pecah – pecah' },
                    { desc: 'N. Rapihkan pasien dan bereskan alat – alat' },
                    { desc: 'O. Ucapkan hamdallah' },
                    { desc: 'P. Mencuci tangan setelah tindakan' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Observasi respon pasien setelah tindakan.\nCatat adanya kelainan pada gigi dan mulut pasien.'
            },
            {
                step: 'Dokumentasi',
                desc: 'Dokumentasikan kegiatan dalam catatan asuhan keperawatan meliputi: jenis tindakan, waktu pelaksanaan, kondisi mulut, adanya luka, jamur atau caries gigi.'
            }
        ],
        dokumenTerkait: ['Status Pasien'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif']
    },



/*
 ===================================================================================
 Category Pediatric , ID: 1501 - 1600
 ===================================================================================
*/
    {
        id: 1501,
        title: 'Menghitung Denyut Nadi dan Pernafasan pada Bayi dan Anak',
        category: 'tindakan',
        subCategory: 'pediatric',
        description: 'Kegiatan menghitung denyut nadi dan pernafasan pada bayi dan anak selama 1 menit.',
        icon: 'fa-baby-carriage',
        tags: ['Nadi', 'Pernafasan', 'Bayi', 'Anak', 'Pediatrik'],
        noDokumen: '445/SPO.4749/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Suatu kegiatan yang dilakukan untuk menghitung denyut nadi dan pernafasan selama 1 menit.\nTempat perabaan denyut nadi:\n- Arteri radialis pada pergelangan tangan\n- Arteri brachialis pada siku bagian dalam\n- Arteri karotis pada leher\n- Arteri temporalis pada pelipis\n- Arteri femoralis pada lipatan paha\n- Arteri dorsalis pedis pada kaki\n- Arteri frontalis pada ubun-ubun\nKriteria normal denyut nadi:\n- Bayi 0 – 1 tahun: 130 – 160 x/menit\n- Anak 1 – 14 tahun: 90 – 120 x/menit\nKriteria normal pernafasan:\n- Bayi 0 – 1 tahun: 40 x/menit\n- Anak 1 – 14 tahun: 28 x/menit',
        tujuan: 'Sebagai acuan penerapan langkah – langkah untuk melaksanakan tindakan menghitung denyut nadi dan pernafasan pada bayi dan anak.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019.',
        prosedur: [
            {
                step: 'Persiapan',
                items: [
                    {
                        desc: 'Persiapan Alat',
                        detail: [
                            { text: 'Jam tangan dengan detik atau polsteller' },
                            { text: 'Stetoskop' },
                            { text: 'Catatan keperawatan' }
                        ]
                    },
                    {
                        desc: 'Persiapan Pasien dan Keluarga',
                        detail: 'Menginformasikan kepada keluarga atau anak tentang tujuan dan prosedur yang akan dilakukan.\nMengatur posisi anak (tidur/duduk/digendong ibu).\nMelibatkan keluarga dalam restrain.'
                    }
                ]
            },
            {
                step: 'Pelaksanaan',
                items: [
                    { desc: 'A. Perawat mencuci tangan' },
                    { desc: 'B. Mengucapkan basmallah sebelum melakukan tindakan' },
                    { desc: 'C. Mencocokkan nama pada gelang identitas pasien' },
                    { desc: 'D. Mengukur nadi pada saat anak tidur/diam' },
                    {
                        desc: 'Apikal (pada anak < 1 tahun)',
                        detail: [
                            { text: '- Memakai stetoskop diletakan diatas sela iga ke-4 / 5' },
                            { text: '- Menghitung denyut nadi selama 1 menit' }
                        ]
                    },
                    { desc: 'E. Menghitung pernafasan dalam 1 menit' },
                    { desc: 'F. Merapihkan pasien kembali' },
                    { desc: 'G. Memberikan pujian kepada anak atas kerjasamanya' },
                    { desc: 'H. Mengucapkan hamdallah' },
                    { desc: 'I. Membereskan alat' },
                    { desc: 'J. Perawat mencuci tangan' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Respon klien\nHasil pengukuran'
            },
            {
                step: 'Dokumentasi',
                desc: 'Mendokumentasikan tindakan keperawatan dalam rekam medik pasien.\nPerlu diperhatikan:\n- Identifikasi jumlah nadi dan pernafasan sebelumnya\n- Identifikasi adanya demam, pemberian obat-obatan\n- Identifikasi adanya riwayat aritmia\n- Identifikasi pernah atau sedang palpitasi atau aritmia\n- Menghitung nadi dan pernafasan saat bayi / anak dalam keadaan tenang/tidur\n- Waktu pelaksanaan\n- Respon klien\n- Hasil pengukuran'
            }
        ],
        dokumenTerkait: ['Status Pasien'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Bedah Sentral']
    },
    {
        id: 1502,
        title: 'Mengukur Suhu Tubuh pada Bayi dan Anak',
        category: 'tindakan',
        subCategory: 'pediatric',
        description: 'Kegiatan mengukur suhu tubuh bayi dan anak melalui daerah axilla, mulut, rektal, dan telinga.',
        icon: 'fa-thermometer-half',
        tags: ['Suhu Tubuh', 'Termometer', 'Bayi', 'Anak', 'Pediatrik'],
        noDokumen: '445/SPO.4750/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Suatu kegiatan mengukur suhu tubuh pasien dengan menggunakan thermometer pada daerah axilla, mulut, rektal dan telinga.',
        tujuan: 'Sebagai acuan penerapan langkah – langkah untuk melaksanakan tindakan keperawatan mengukur suhu badan pasien pada daerah axilla, mulut, rektal dan telinga.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019.',
        prosedur: [
            {
                step: 'Persiapan',
                items: [
                    {
                        desc: 'Persiapan Alat',
                        detail: [
                            { text: 'Thermometer' },
                            { text: 'Tissue (2 lembar) / waslap' },
                            { text: 'Bengkok' },
                            { text: 'Jam tangan dengan detik' },
                            { text: 'Lembar catatan keperawatan' }
                        ]
                    },
                    {
                        desc: 'Persiapan Pasien dan Keluarga',
                        detail: 'Memberi tahu keluarga dan anak tentang prosedur yang akan dilakukan.\nMengatur posisi anak (tidur/duduk/digendong ibu).'
                    }
                ]
            },
            {
                step: 'Pelaksanaan',
                items: [
                    { desc: 'A. Perawat mencuci tangan' },
                    { desc: 'B. Mengucapkan basmallah' },
                    { desc: 'C. Mencocokkan nama pada gelang identitas pasien' },
                    { desc: 'D. Menyiapkan thermometer dan memperhatikan kesiapannya' },
                    {
                        desc: 'E. Mengukur suhu tubuh melalui axilla',
                        detail: [
                            { text: '- Mengeringkan ketiak dengan tissue atau waslap' },
                            { text: '- Memastikan suhu thermometer dibawah 35,6°C untuk thermometer air raksa, sedangkan untuk thermometer elektrik pastikan dapat berfungsi dengan baik' },
                            { text: '- Ketiak dikeringkan dengan tissue / lap kering' },
                            { text: '- Memasangkan reservoir thermometer, jepitkan di tengah ketiak, lengan dilipat, sikut anak dipegang (3 - 4 menit)' },
                            { text: '- Mengangkat thermometer, membaca dan mencatat hasilnya' }
                        ]
                    },
                    {
                        desc: 'F. Mengukur suhu melalui mulut',
                        detail: [
                            { text: '- Memastikan suhu thermometer dibawah 35,6°C' },
                            { text: '- Tempatkan thermometer dibawah mulut jauh dibelakang dibawah lidah, beritahu anak untuk tetap menutup mulutnya, tidak berbicara dan tidak bernafas melalui mulut selama 2 – 3 menit' },
                            { text: '- Pastikan anak untuk tidak menggigit termometer' },
                            { text: '- Mengangkat thermometer, membaca dan mencatat hasilnya' }
                        ]
                    },
                    {
                        desc: 'G. Mengukur suhu melalui rectal',
                        detail: [
                            { text: '- Memastikan suhu thermometer dibawah 35,6°C' },
                            { text: '- Ukur 2,5 cm pada thermometer atau 1/6 dari panjang thermometer' },
                            { text: '- Tempatkan anak pada posisi telungkup atau telentang dengan kedua kaki diangkat' },
                            { text: '- Popok bayi dibuka, bersihkan daerah anus dengan kapas cebok' },
                            { text: '- Celupkan ujung perak thermometer pada pelumas (jelly petrolium / vaselin)' },
                            { text: '- Masukan ujung thermometer ke dalam anus, jangan memasukan lebih dari 2,5 cm selama 2 – 3 menit, pegang anak agar tidak memutar tubuhnya' },
                            { text: '- Mengangkat thermometer, membaca dan mencatat hasilnya' }
                        ]
                    },
                    {
                        desc: 'H. Mengukur suhu melalui telinga (timpani)',
                        detail: [
                            { text: '- Pasang cuff pada thermometer' },
                            { text: '- Tekan tombol "ON" sampai terlihat simbol "◄ ◄ ◄" dalam 10 detik, termometer siap digunakan' },
                            { text: '- Masukan ujung cuff ke dalam telinga, kemudian tekan "MEASURE"' },
                            { text: '- Dalam beberapa detik hasil pengukuran akan langsung tampak pada layar termometer' },
                            { text: '- Mengangkat thermometer, membaca dan mencatat hasilnya' }
                        ]
                    },
                    { desc: 'I. Memuji anak atas kerjasamanya' },
                    { desc: 'J. Mengucapkan hamdallah' },
                    { desc: 'K. Merapihkan pasien kembali' },
                    { desc: 'L. Membereskan dan membersihkan alat – alat: Untuk thermometer elektrik cukup dibersihkan dengan kassa alkohol' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Respon klien\nHasil pengukuran'
            },
            {
                step: 'Dokumentasi',
                desc: 'Mendokumentasikan tindakan keperawatan dalam rekam medik pasien:\n- Waktu pelaksanaan\n- Respon klien\n- Hasil pengukuran'
            }
        ],
        dokumenTerkait: ['Status Pasien'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Bedah Sentral']
    },
    {
        id: 1503,
        title: 'Mengukur Tekanan Darah pada Bayi dan Anak',
        category: 'tindakan',
        subCategory: 'pediatric',
        description: 'Kegiatan mengukur tekanan darah melalui dinding arteri pada bayi dan anak.',
        icon: 'fa-heartbeat',
        tags: ['Tekanan Darah', 'Bayi', 'Anak', 'Pediatrik', 'Sphygmomanometer'],
        noDokumen: '445/SPO.4751/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Suatu kegiatan mengukur tekanan darah melalui dinding arteri pasien dengan kriteria normal:\n- 6 - 12 bulan: 90/60 mmHg\n- 1 - 5 tahun: 95/65 mmHg\n- 5 - 10 tahun: 100/60 mmHg\n- 10 - 15 tahun: 115/60 mmHg',
        tujuan: 'Sebagai acuan penerapan langkah – langkah untuk tindakan keperawatan mengukur tekanan darah untuk memperlancar tindakan dan pelayanan keperawatan.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019.',
        prosedur: [
            {
                step: 'Persiapan',
                items: [
                    {
                        desc: 'Persiapan Alat',
                        detail: [
                            { text: 'Stetoskop pediatrik/neonatus' },
                            { text: 'Sphygmomanometer dengan manometer air raksa/aneroid' },
                            { text: 'Manset sesuai dengan besarnya lengan' },
                            { text: 'Perban elastis (teknik flush)' }
                        ]
                    },
                    {
                        desc: 'Persiapan Pasien',
                        detail: 'Memberitahukan keluarga dan anak tentang prosedur yang akan dilakukan.\nMengatur posisi anak, disesuaikan dengan tempat pengukuran.\nMelibatkan keluarga dalam restrain.\nMemilih tempat dan manset yang tepat.'
                    }
                ]
            },
            {
                step: 'Pelaksanaan',
                items: [
                    { desc: 'A. Perawat mencuci tangan' },
                    { desc: 'B. Mengucapkan basmallah' },
                    { desc: 'C. Mencocokkan nama pada gelang identitas pasien' },
                    {
                        desc: 'D. Metode Auskultasi',
                        detail: [
                            { text: '- Memposisikan lengan sejajar jantung' },
                            { text: '- Membuka pakaian dari lengan' },
                            { text: '- Memasang manset diatas lengan, posisi manometer setinggi mata' },
                            { text: '- Meraba arteri brakialis, memompa manset sampai 30 mmHg diatas dimana denyutan menghilang' },
                            { text: '- Mengempiskan manset, tunggu selama 30 detik' },
                            { text: '- Memakai earpieces dan meletakkan diafragma stetoskop di atas arteri' },
                            { text: '- Memompa manset sampai 30 mmHg diatas sistolik' },
                            { text: '- Mengempiskan manset dengan kecepatan 2-3 mmHg/detik' },
                            { text: '- Mengempiskan manset dengan cepat setelah mendapatkan pengukuran' }
                        ]
                    },
                    {
                        desc: 'E. Metode Palpasi',
                        detail: [
                            { text: '- Memasang manset' },
                            { text: '- Meraba arteri brakialis/radialis, memompa manset sampai 30 mmHg diatas titik denyut nadi menghilang' },
                            { text: '- Mengempiskan manset dengan kecepatan 2-3 mmHg/detik' },
                            { text: '- Mengempiskan manset dengan cepat setelah mendapatkan hasil pengukuran' }
                        ]
                    },
                    {
                        desc: 'F. Metode Flush',
                        detail: [
                            { text: '- Memasang manset di lengan' },
                            { text: '- Tinggikan lengan, lilitkan elastik perban dari ujung jari kearah antekubiti' },
                            { text: '- Memompa manset diatas tekanan sistolik yang diharapkan' },
                            { text: '- Melepaskan elastik perban, meletakkan tangan anak disamping tubuhnya' },
                            { text: '- Mengempiskan manset secara perlahan sampai telapak tangan terlihat kemerahan (pembacaan dilakukan ketika tangan terlihat kemerahan)' }
                        ]
                    },
                    { desc: 'G. Berikan pujian kepada anak atas kerjasamanya' },
                    { desc: 'H. Mengucapkan hamdallah' },
                    { desc: 'I. Membereskan alat-alat' },
                    { desc: 'J. Mencuci tangan' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Kaji respon pasien selama dan setelah dilakukan tindakan.'
            },
            {
                step: 'Dokumentasi',
                desc: 'Dokumentasikan tindakan dan hasil pengukuran dalam catatan keperawatan.'
            }
        ],
        dokumenTerkait: ['Status Pasien'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Bedah Sentral']
    },
    {
        id: 1504,
        title: 'Mengukur Panjang / Tinggi Badan pada Bayi dan Anak',
        category: 'tindakan',
        subCategory: 'pediatric',
        description: 'Kegiatan mengukur panjang badan pada bayi dan tinggi badan pada anak menggunakan alat ukur.',
        icon: 'fa-ruler',
        tags: ['Tinggi Badan', 'Panjang Badan', 'Bayi', 'Anak', 'Antropometri'],
        noDokumen: '445/SPO.4752/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Suatu kegiatan mengukur panjang badan/tinggi badan pada bayi / anak dengan menggunakan alat ukur.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam melaksanakan tindakan pengukuran panjang/tinggi badan pada bayi dan anak.\nMengetahui pertumbuhan dan perkembangan anak sesuai tingkat usia.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019.',
        prosedur: [
            {
                step: 'Persiapan',
                items: [
                    {
                        desc: 'Persiapan Alat',
                        detail: [
                            { text: 'Ukuran panjang (meteran) yang terbuat dari kayu atau metal' },
                            { text: 'Catatan perawat' }
                        ]
                    },
                    {
                        desc: 'Persiapan Pasien',
                        detail: 'Memberitahu keluarga dan / anak tentang tujuan dan prosedur yang akan dilakukan.\nMembersihkan bayi dari BAB/BAK.\nMenyelimuti bayi.'
                    }
                ]
            },
            {
                step: 'Pelaksanaan - Bayi 1 bulan s/d usia 20 bulan',
                items: [
                    { desc: 'A. Mencuci tangan' },
                    { desc: 'B. Membaringkan bayi (meminta orangtua untuk memegang kepala bayi)' },
                    { desc: 'C. Mencocokkan nama pada gelang identitas pasien' },
                    { desc: 'D. Pastikan kepala bayi menempel tepat pada papan meteran' },
                    { desc: 'E. Mengekstensikan kaki bayi (kiri/kanan), lutut bayi ditahan, telapak kaki menghadap ke depan' },
                    { desc: 'F. Menarik papan ukur bagian kaki kearah telapak kaki sampai menempel' },
                    { desc: 'G. Melihat dan mencatat hasil ukuran' },
                    { desc: 'H. Memuji anak atas kerjasamanya' },
                    { desc: 'I. Merapihkan anak kembali' },
                    { desc: 'J. Membereskan alat-alat' },
                    { desc: 'K. Mencuci tangan' }
                ]
            },
            {
                step: 'Pelaksanaan - Lebih dari 20 bulan',
                items: [
                    { desc: 'A. Membantu anak untuk membuka sepatu dan kaus kaki' },
                    { desc: 'B. Membantu anak untuk berdiri tegak lurus pada alat ukur/meteran standar' },
                    { desc: 'C. Turunkan alat ukur sampai menempel pada kepala' },
                    { desc: 'D. Melihat dan mencatat hasil ukuran' },
                    { desc: 'E. Memuji anak atas kerjasamanya' },
                    { desc: 'F. Merapihkan anak kembali' },
                    { desc: 'G. Membereskan alat-alat' },
                    { desc: 'H. Mencuci tangan' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Respon klien\nHasil pengukuran'
            },
            {
                step: 'Dokumentasi',
                desc: 'Dokumentasikan pada catatan keperawatan: waktu pelaksanaan, respon/kondisi klien, hasil pengukuran.'
            }
        ],
        dokumenTerkait: ['Status Pasien'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Bedah Sentral']
    },
    {
        id: 1505,
        title: 'Mengukur Berat Badan pada Bayi dan Anak',
        category: 'tindakan',
        subCategory: 'pediatric',
        description: 'Kegiatan mengukur berat badan pada bayi dan anak menggunakan timbangan badan.',
        icon: 'fa-weight-scale',
        tags: ['Berat Badan', 'Bayi', 'Anak', 'Antropometri', 'Timbangan'],
        noDokumen: '445/SPO.4753/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Suatu kegiatan mengukur berat badan pada bayi / anak dengan menggunakan timbangan badan.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam melaksanakan tindakan pengukuran berat badan pada bayi dan anak.\nMengetahui pertumbuhan dan perkembangan anak sesuai tingkat usia.\nMembantu menentukan program pengobatan/diet.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019.',
        prosedur: [
            {
                step: 'Persiapan',
                items: [
                    {
                        desc: 'Persiapan Alat - Untuk Bayi',
                        detail: [
                            { text: 'Selimut' },
                            { text: 'Timbangan khusus bayi' },
                            { text: 'Pengalas timbangan bayi' },
                            { text: 'Catatan perawat' }
                        ]
                    },
                    {
                        desc: 'Persiapan Alat - Untuk Anak',
                        detail: [
                            { text: 'Timbangan berdiri' },
                            { text: 'Catatan perawat' }
                        ]
                    },
                    {
                        desc: 'Persiapan Pasien',
                        detail: 'Memberitahu keluarga dan/ anak tentang tujuan dan prosedur yang akan dilakukan.\nMembersihkan bayi dari BAB/BAK (dalam keadaan bersih) membungkus dengan selimut.\nMembuka pakaian bayi (pada bayi), membuka jaket/sepatu/sandal pada anak.'
                    }
                ]
            },
            {
                step: 'Pelaksanaan',
                items: [
                    { desc: 'A. Menutup pintu dan jendela' },
                    { desc: 'B. Mencuci tangan' },
                    { desc: 'C. Mencocokkan nama pada gelang identitas pasien' },
                    {
                        desc: 'D. Pada Bayi',
                        detail: [
                            { text: '- Memasang alas timbangan dan memastikan petunjuk timbangan berada pada angka nol' },
                            { text: '- Selimut dibuka dan bayi dibaringkan diatas timbangan bayi' },
                            { text: '- Berat badan bayi di ukur' },
                            { text: '- Bayi segera dibungkus dengan selimut setelah pengukuran' }
                        ]
                    },
                    {
                        desc: 'E. Pada Anak',
                        detail: [
                            { text: '- Memastikan timbangan berada pada angka nol' },
                            { text: '- Jaket, sepatu/sandal dibuka, anak disuruh untuk berdiri di atas timbangan' },
                            { text: '- Pada anak yang gelisah atau lemah, anak dapat digendong oleh orangtuanya, kemudian anak ditimbang bersama dengan orangtua yang menggendongnya, hasil pengukuran anak dan orangtua dikurangi berat badan orangtua yang menggendong' },
                            { text: '- Berat badan anak diukur' }
                        ]
                    },
                    { desc: 'F. Memuji anak atas kerjasamanya' },
                    { desc: 'G. Merapihkan anak kembali' },
                    { desc: 'H. Membereskan alat-alat' },
                    { desc: 'I. Mencuci tangan' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Respon klien: kemungkinan hipotermi\nHasil pengukuran'
            },
            {
                step: 'Dokumentasi',
                desc: 'Dokumentasikan pada catatan keperawatan: waktu pelaksanaan, respon/kondisi klien, hasil pengukuran.'
            }
        ],
        dokumenTerkait: ['Status Pasien'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Bedah Sentral']
    },
    {
        id: 1506,
        title: 'Mengukur Lingkar Kepala pada Bayi dan Anak',
        category: 'tindakan',
        subCategory: 'pediatric',
        description: 'Kegiatan mengukur lingkar kepala pada bayi dan anak menggunakan pita pengukur.',
        icon: 'fa-sharp fa-solid fa-baby',
        tags: ['Lingkar Kepala', 'Bayi', 'Anak', 'Antropometri'],
        noDokumen: '445/SPO.4754/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Suatu kegiatan mengukur lingkar kepala pada bayi / anak dengan menggunakan alat pita pengukur.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam melaksanakan tindakan pengukuran lingkar kepala pada bayi dan anak.\nMengetahui pertumbuhan dan perkembangan anak sesuai tingkat usia, adanya kelainan.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019.',
        prosedur: [
            {
                step: 'Persiapan',
                items: [
                    {
                        desc: 'Persiapan Alat',
                        detail: [
                            { text: 'Pita pengukur atau meteran kertas' },
                            { text: 'Catatan perawat' }
                        ]
                    },
                    {
                        desc: 'Persiapan Pasien',
                        detail: 'Memberitahu keluarga dan/ anak tentang tujuan dan prosedur yang akan dilakukan.\nMenjaga keamanan dan kenyamanan lingkungan.'
                    }
                ]
            },
            {
                step: 'Pelaksanaan',
                items: [
                    { desc: 'A. Mencuci tangan' },
                    { desc: 'B. Mengatur posisi anak (tidur / duduk) dan dalam keadaan tenang' },
                    { desc: 'C. Mencocokkan nama pada gelang identitas pasien' },
                    { desc: 'D. Melibatkan orang tua dalam restrain' },
                    { desc: 'E. Meletakan meteran melingkari kepala anak tepat diatas alis dan pinna, melingkari oksipital yang menonjol' },
                    { desc: 'F. Memastikan pertemuan kedua ujung meteran tepat pada dahi anak' },
                    { desc: 'G. Melihat dan mencatat hasil ukuran' },
                    { desc: 'H. Memuji anak atas kerjasamanya' },
                    { desc: 'I. Merapihkan anak kembali' },
                    { desc: 'J. Membereskan alat-alat' },
                    { desc: 'K. Mencuci tangan' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Respon klien\nHasil pengukuran'
            },
            {
                step: 'Dokumentasi',
                desc: 'Dokumentasikan pada catatan keperawatan: waktu pelaksanaan, respon/kondisi klien, hasil pengukuran.'
            }
        ],
        dokumenTerkait: ['Status Pasien'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Bedah Sentral']
    },
    {
        id: 1507,
        title: 'Mengukur Lingkar Dada pada Bayi',
        category: 'tindakan',
        subCategory: 'pediatric',
        description: 'Kegiatan mengukur lingkar dada pada bayi menggunakan pita pengukur.',
        icon: 'fa-ribbon',
        tags: ['Lingkar Dada', 'Bayi', 'Antropometri'],
        noDokumen: '445/SPO.4755/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Suatu kegiatan mengukur lingkar dada pada bayi dengan menggunakan alat pita pengukur.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam melaksanakan tindakan pengukuran lingkar dada pada bayi.\nMengetahui pertumbuhan dan perkembangan bayi sesuai tingkat usia.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019.',
        prosedur: [
            {
                step: 'Persiapan',
                items: [
                    {
                        desc: 'Persiapan Alat',
                        detail: [
                            { text: 'Pita pengukur atau meteran kertas' },
                            { text: 'Catatan perawat' }
                        ]
                    },
                    {
                        desc: 'Persiapan Pasien',
                        detail: 'Memberitahu keluarga dan/ anak tentang tujuan dan prosedur yang akan dilakukan.\nMenjaga lingkungan yang aman dan nyaman.'
                    }
                ]
            },
            {
                step: 'Pelaksanaan',
                items: [
                    { desc: 'A. Mencuci tangan' },
                    { desc: 'B. Mengatur posisi anak (tidur / duduk) dan dalam keadaan tenang' },
                    { desc: 'C. Mencocokkan nama pada gelang identitas pasien' },
                    { desc: 'D. Melibatkan orang tua dalam restrain' },
                    { desc: 'E. Meletakan meteran dilingkarkan tepat diatas putting susu, usahakan bayi tidak bergerak' },
                    { desc: 'F. Memastikan pertemuan kedua ujung meteran tepat pada dada anak' },
                    { desc: 'G. Melihat dan mencatat hasil ukuran' },
                    { desc: 'H. Memuji anak atas kerjasamanya' },
                    { desc: 'I. Merapihkan anak kembali' },
                    { desc: 'J. Membereskan alat-alat' },
                    { desc: 'K. Mencuci tangan' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Respon klien\nHasil pengukuran'
            },
            {
                step: 'Dokumentasi',
                desc: 'Dokumentasikan pada catatan keperawatan: waktu pelaksanaan, respon/kondisi klien, hasil pengukuran.'
            }
        ],
        dokumenTerkait: ['Status Pasien'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Bedah Sentral']
    },
    {
        id: 1508,
        title: 'Mengukur Lingkar Lengan pada Bayi dan Anak',
        category: 'tindakan',
        subCategory: 'pediatric',
        description: 'Kegiatan mengukur lingkar lengan pada bayi dan anak menggunakan pita pengukur.',
        icon: 'fa-hand-peace',
        tags: ['Lingkar Lengan', 'LILA', 'Bayi', 'Anak', 'Antropometri'],
        noDokumen: '445/SPO.4756/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Suatu kegiatan mengukur lingkar lengan pada bayi dengan menggunakan alat pita pengukur.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam melaksanakan tindakan pengukuran lingkar lengan pada bayi dan anak.\nMengetahui pertumbuhan dan perkembangan bayi dan anak sesuai tingkat usia.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019.',
        prosedur: [
            {
                step: 'Persiapan',
                items: [
                    {
                        desc: 'Persiapan Alat',
                        detail: [
                            { text: 'Pita pengukur lingkar lengan atau meteran kertas' },
                            { text: 'Catatan perawat' }
                        ]
                    },
                    {
                        desc: 'Persiapan Pasien dan Lingkungan',
                        detail: 'Memberitahu keluarga dan/ anak tentang tujuan dan prosedur yang akan dilakukan.\nSiapkan lingkungan yang aman dan nyaman.'
                    }
                ]
            },
            {
                step: 'Pelaksanaan',
                items: [
                    { desc: 'A. Mencuci tangan' },
                    { desc: 'B. Mengatur posisi anak (berdiri / duduk) dan dalam keadaan tenang' },
                    { desc: 'C. Mencocokkan nama pada gelang identitas pasien' },
                    { desc: 'D. Melibatkan orang tua dalam restrain' },
                    { desc: 'E. Menetapkan posisi sikut dan bahu pada lengan kiri' },
                    { desc: 'F. Meletakan pita atau meteran pada titik tengah lengan kiri, tidak longgar dan tidak ketat' },
                    { desc: 'G. Memastikan pertemuan kedua ujung meteran menghadap perawat' },
                    { desc: 'H. Melihat dan mencatat hasil ukuran' },
                    { desc: 'I. Memuji anak atas kerjasamanya' },
                    { desc: 'J. Merapihkan anak kembali' },
                    { desc: 'K. Membereskan alat-alat' },
                    { desc: 'L. Mencuci tangan' }
                ]
            },
            {
                step: 'Evaluasi',
                desc: 'Respon klien\nHasil pengukuran'
            },
            {
                step: 'Dokumentasi',
                desc: 'Dokumentasikan pada catatan keperawatan: waktu pelaksanaan, respon/kondisi klien, hasil pengukuran.'
            }
        ],
        dokumenTerkait: ['Status Pasien'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Bedah Sentral', 'Instalasi Anestesi dan Perawatan Intensif']
    }
   
];
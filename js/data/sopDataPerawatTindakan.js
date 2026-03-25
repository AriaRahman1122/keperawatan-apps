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
    }
   
];
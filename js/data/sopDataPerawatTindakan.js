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
        tujuan: '1. Mempermudah pasien kanker dengan status administrasi umum/kontraktor atau BPJS untuk segera mendapatkan pelayanan kemoterapi.\n2. Memberikan petunjuk bagi pasien yang akan mendapatkan pelayanan kemoterapi bagian layanan mana yang harus dituju baik untuk mendapatkan layanan administrasi, konseling kanker, obat, dan pemberian kemoterapi.',
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
        tujuan: '1. Obat kemoterapi diberikan berdasarkan dosis yang sudah ditentukan.\n2. Obat kemoterapi yang diberikan dengan keadaan baik, tepat pelarut dan tidak kadaluarsa.\n3. Pengelolaan obat kemoterapi sesuai dengan prosedur dan stabilitas.',
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
                                    text: '2) Alat pelindung diri:',
                                    subDetail: [
                                        '- Sepatu bot',
                                        '- Kacamata google',
                                        '- Topi',
                                        '- Barak schort',
                                        '- Masker'
                                    ]
                                },
                                {
                                    text: '3) Alat kesehatan dan obat-obatan:',
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
                        items: [
                            { desc: 'A. Observasi dan hitung jumlah darah yang keluar.' },
                            { desc: 'B. Observai gejala-gejala syok hypovolemik (tekanan darah menurun, nadi melemah dan cepat, kulit dingin dan paien gelisah).' }
                        ]
                    },
                    {
                        step: 'Dokumentasi',
                        desc: 'Dokumentasikan tindakan yang dilakukan dalam status pasien'
                    }
        ],
        dokumenTerkait: ['Status pasien'],
        instalasiTerkait: ['Instalasi Bedah Sentral', 'Instalasi Rawat Inap ( Ruang Kebidanan  dan VK)', 'Status pasien']
    },
    {
    id: 1206,
    title: 'Menyiapkan Pasien Untuk Tindakan Seksio Cesaria',
    category: 'tindakan',
    subCategory: 'maternitas',
    description: 'Kegiatan membantu menyiapkan pasien untuk tindakan operasi seksio cesaria.',
    icon: 'fa-procedures',
    tags: ['Seksio Cesaria', 'SC', 'Operasi', 'Persiapan Operasi', 'Obstetri'],
    noDokumen: '445/SPO.3546/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Suatu kegiatan membantu menyiapkan pasien untuk tindakan operasi seksio cesaria.',
    tujuan: 'Sebagai acuan penerapan langkah-langkah untuk menyiapkan pasien yang akan dilakukan tindakan seksio cesaria.',
    kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019.',
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan Alat',
                    detail: [
                        { text: '1) Status pasien' },
                        { text: '2) Hasil pemeriksaan penunjang' },
                        { text: '3) Darah 1–2 labu sesuai kebutuhan pasien' },
                        { text: '4) Brancard dan selimut' },
                        { text: '5) Oksigen kecil lengkap (jika diperlukan)' }
                    ]
                },
                {
                    desc: 'Persiapan Pasien',
                    detail:
                        '1) Pasien dan keluarga diberikan penjelasan tentang tindakan yang akan dilakukan\n' +
                        '2) Pasien dan keluarga menandatangani informed consent dan surat izin tindakan seksio cesaria\n' +
                        '3) Pasien dipuasakan selama 8 jam sebelum tindakan (jika elektif)\n' +
                        '4) Bila diperlukan transfusi darah intra atau post operasi, darah disiapkan sesuai kebutuhan\n' +
                        '5) Keluarga menyelesaikan administrasi biaya operasi sesuai ketentuan dan menandatangani surat perjanjian biaya operasi (bila diperlukan)'
                },
                {
                    desc: 'Persiapan Lingkungan',
                    detail: [
                        { text: '1) Skherm ditutup (bila perlu) untuk menjaga privasi pasien' },
                        { text: '2) Bedplang tempat tidur disesuaikan sesuai kebutuhan' }
                    ]
                }
            ]
        },
        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'Petugas ruangan memberitahu petugas kamar bedah untuk jadwal operasi' },
                { desc: 'Petugas kebidanan menghubungi dokter anak yang akan menolong persalinan' },
                { desc: 'Perawat mencuci tangan' },
                { desc: 'Mencocokkan nama pasien dengan gelang identitas' },
                { desc: 'Memberikan terapi sesuai instruksi dokter termasuk premedikasi (jika ada)' },
                { desc: 'Pasien dibawa ke ruang operasi 1–2 jam sebelum tindakan' },
                { desc: 'Pasien dipindahkan ke tempat tidur tindakan di ruang pre operasi' },
                {
                    desc: 'Serah terima pasien dengan petugas kamar bedah',
                    detail: [
                        { text: 'Status pasien dan hasil pemeriksaan penunjang' },
                        { text: 'Darah untuk transfusi sesuai kebutuhan' },
                        { text: 'Jam terakhir puasa' },
                        { text: 'Obat premedikasi yang telah diberikan' }
                    ]
                },
                { desc: 'Setelah operasi selesai, petugas kamar bedah menghubungi petugas ruangan' },
                { desc: 'Petugas ruangan menjemput pasien ke kamar bedah' },
                {
                    desc: 'Serah terima kembali pasien dari kamar bedah',
                    detail: [
                        { text: 'Status pasien dan berkas pemeriksaan penunjang' },
                        { text: 'Labu darah sesuai dengan kebutuhan (jika belum digunakan)' },
                        { text: 'Laporan operasi, intruksi post operasi' }
                    ]
                },
                { desc: 'Membawa pasien kembali ke ruang nifas' },
                { desc: 'Mengukur tanda-tanda vital' },
                { desc: 'Membereskan pasien' }
            ]
        },
        {
            step: 'Evaluasi',
            desc: 'Observasi TTV, tingkat kesadaran, adanya sesak nafas, perdarahan'
        },
        {
            step: 'Dokumentasi',
            desc: 'Dokumentasikan tindakan yang dilakukan pada lembar catatan   perawatan'
        }
    ],
    dokumenTerkait: ['Status pasien'],
    instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anesthesi dan Perawatan Intensif', 'Instalasi Gawat Darurat', 'Instalasi Bedah Sentral']
    },
    {
    id: 1207,
    title: 'Menyiapkan Pasien dan Alat Untuk Tindakan Manual Placenta',
    category: 'tindakan',
    subCategory: 'maternitas',
    description: 'Kegiatan membantu menyiapkan pasien dan alat untuk tindakan manual placenta.',
    icon: 'fa-procedures',
    tags: ['Manual Placenta', 'Obstetri', 'Persalinan', 'Tindakan Medis'],
    noDokumen: '445/SPO.3547/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Suatu kegiatan membantu menyiapkan pasien dan alat untuk tindakan manual placenta.',
    tujuan: 'Sebagai acuan penerapan langkah-langkah untuk menyiapkan  pasien dan alat yang akan dilakukan tindakan manual placenta.',
    kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional  Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019.',
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan Alat',
                    detail: [
                        { text: '1) Kassa steril' },
                        { text: '2) Kom kecil berisi bethadine' },
                        { text: '3) Sarung tangan ginek steril sesuai ukuran' },
                        { text: '4) Barakscort / apron' },
                        { text: '5) Set infus (jika diperlukan)' }
                    ]
                },
                {
                    desc: 'Persiapan Pasien',
                    detail:
                        '1) Pasien dan keluarga diberikan penjelasan tentang tujuan dan prosedur tindakan yang akan dilakukan\n' +
                        '2) Pasien dan keluarga menandatangani formulir informed consent dan surat izin tindakan'
                },
                {
                    desc: 'Persiapan Lingkungan',
                    detail: [
                        { text: '1) Skherm ditutup (bila perlu) untuk menjaga privasi pasien' },
                        { text: '2) Bedplang tempat tidur disesuaikan sesuai kebutuhan' }
                    ]
                }
            ]
        },
        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'Perawat mencuci tangan' },
                { desc: 'Mencocokkan nama pasien dengan gelang identitas' },
                { desc: 'Alat-alat disiapkan dan diletakkan secara ergonomis' },
                { desc: 'Menggunakan alat pelindung diri (APD)' },
                { desc: 'Pasien ditidurkan pada tempat tidur tindakan dengan posisi lithotomi' },
                { desc: 'Berdoa bersama' },
                { desc: 'Dokter melakukan tindakan manual placenta' },
                { desc: 'Perawat melakukan asistensi selama tindakan berlangsung' },
                { desc: 'Merapikan pasien setelah tindakan selesai' },
                { desc: 'Alat-alat dibereskan dan dicuci' },
                { desc: 'Perawat mencuci tangan kembali' }
            ]
        },
        {
            step: 'Evaluasi',
            desc: 'Observasi TTV, tingkat kesadaran, adanya sesak nafas, perdarahan'
        },
        {
            step: 'Dokumentasi',
            desc: 'Mendokumentasikan tindakan yang dilakukan pada lembar catatan perawatan'
        }
    ],
    dokumenTerkait: ['Status pasien'],
    instalasiTerkait: ['Instalasi Rawat Inap (Ruang Kebidanan)', 'Instalasi Bedah Sentral']
     },
     {
    id: 1208,
    title: 'Menyiapkan Pasien Untuk Tindakan Hecting Perineum',
    category: 'tindakan',
    subCategory: 'maternitas',
    description: 'Kegiatan membantu menyiapkan pasien untuk tindakan hecting perineum.',
    icon: 'fa-procedures',
    tags: ['Hecting Perineum', 'Perineum', 'Obstetri', 'Tindakan Medis'],
    noDokumen: '445/SPO.3548/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Suatu kegiatan membantu menyiapkan pasien untuk tindakan hecting perineum.',
    tujuan: 'Sebagai acuan penerapan langkah-langkah untuk menyiapkan pasien yang akan dilakukan tindakan hekting perineum.',
    kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional  Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan alat',
                    detail: [
                        {
                            text: '1) Bak instrument steril sedang berisi :',
                            subDetail: [
                                '- Kom kecil berisi bethadine',
                                { text: '- Kassa steril 7 - 10 buah atau sesuai kebutuhan', formula: false },
                                '- Nach foelder',
                                '- Pinset anatomis',
                                '- Gunting benang',
                                '- Benang chromic',
                                '- Doek bolong',
                                '- Sarung tangan 1 pasang'
                            ]
                        },
                        {
                            text: '2) Alat pelindung diri :',
                            subDetail: [
                                '- Sepatu bot',
                                '- Kacamata google',
                                '- Topi',
                                '- Barak schort',
                                '- Masker'
                            ]
                        }
                    ]
                },
                {
                    desc: 'Persiapan pasien',
                    detail: 'Pasien diberikan penjelasan tentang tindakan yang akan dilakukan'
                },
                {
                    desc: 'Persiapan Lingkungan',
                    detail: [
                        { text: '1) Skherm ditutup (bila perlu) untuk menjaga privasi pasien' },
                        { text: '2) Bedplang tempat tidur disesuaikan sesuai kebutuhan' }
                    ]
                }
            ]
        },
        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'Perawat cuci tangan' },
                { desc: 'Cocokan nama pasien dengan gelang identitas' },
                { desc: 'Alat-alat disiapkan, letakkan secara ergonomis' },
                { desc: 'Pakai APD' },
                { desc: 'Pasien ditidurkan pada tempat tidur tindakan dengan posisi lithotomic' },
                { desc: 'Berdo’a bersama' },
                { desc: 'Dokter melakukan tindakan hecting perineum' },
                { desc: 'Membersihkan dan mengompres daerah perineum dengan kassa bethadine setelah selesai di hecting' },
                { desc: 'Merapikan pasien setelah selesai tindakan' },
                { desc: 'Alat-alat dibereskan dan dicuci' },
                { desc: 'Mencuci tangan' }
            ]
        },
        {
            step: 'Evaluasi',
            desc: 'Observasi adanya perdarahan'
        },
        {
            step: 'Dokumentasi',
            desc: 'Dokumentasikan tindakan yang dilakukan pada lembar catatan   perawatan'
        }
    ],
    dokumenTerkait: ['Status pasien'],
    instalasiTerkait: ['Instalasi Rawat Inap ( Ruang Kebidanan )', 'Instalasi Gawat Darurat']
    },
    {
    id: 1209,
    title: 'Menyiapkan Pasien Untuk Tindakan Vaccum Extraksi',
    category: 'tindakan',
    subCategory: 'maternitas',
    description: 'Kegiatan membantu menyiapkan pasien untuk tindakan vaccum extraksi.',
    icon: 'fa-procedures',
    tags: ['Vacuum Extraksi', 'Persalinan', 'Obstetri', 'Tindakan Medis'],
    noDokumen: '445/SPO.3549/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Suatu kegiatan membantu menyiapkan pasien untuk tindakan vaccum extraksi.',
    tujuan: 'Sebagai acuan penerapan langkah-langkah untuk menyiapkan pasien yang akan dilakukan tindakan vacuum extraksi.',
    kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional  Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan alat',
                    detail: [
                        { text: '1) Set vacuum lengkap' },
                        {
                            text: '2) Bak instrument steril berisi :',
                            subDetail: [
                                '- Kom kecil berisi bethadine',
                                { text: '- Kassa steril 7 - 10 buah atau sesuai kebutuhan', formula: false },
                                '- Nach foelder',
                                '- Pinset anatomis',
                                '- Gunting benang',
                                '- Benang chromic',
                                '- Doek bolong',
                                '- Sarung tangan 1 pasang'
                            ]
                        },
                        {
                            text: '3) Alat pelindung diri ( sesuai kebutuhan ) :',
                            subDetail: [
                                '- Sepatu boot',
                                '- Kacamata google',
                                '- Topi',
                                '- Barak schort',
                                '- Masker'
                            ]
                        }
                    ]
                },
                {
                    desc: 'Persiapan pasien',
                    detail: [
                        { text: '1) Pasien dan keluarga diberikan penjelasan tentang tindakan yang dilakukan' },
                        { text: '2) Pasien / keluarga menandatangani surat persetujuan tindakan' }
                    ]
                },
                {
                    desc: 'Persiapan Lingkungan',
                    detail: [
                        { text: '1) Skherm ditutup (bila perlu) untuk menjaga privasi pasien' },
                        { text: '2) Bedplang tempat tidur disesuaikan sesuai kebutuhan' }
                    ]
                }
            ]
        },
        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'Perawat cuci tangan' },
                { desc: 'Cocokan nama pasien dengan gelang identitas' },
                { desc: 'Alat-alat disiapkan, letakkan secara ergonomis' },
                { desc: 'Pakai APD' },
                { desc: 'Pasien ditidurkan pada tempat tidur tindakan dengan posisi lithotomi' },
                { desc: 'Berdo’a bersama' },
                { desc: 'Dokter melakukan tindakan vacuum extraksi' },
                { desc: 'Merapikan pasien setelah selesai tindakan' },
                { desc: 'Alat-alat dibereskan dan dicuci' },
                { desc: 'Perawat cuci tangan' }
            ]
        },
        {
            step: 'Evaluasi',
            desc: 'Observasi respon pasien selama dan sesudah dilakukan tindakan'
        },
        {
            step: 'Dokumentasi',
            desc: 'Dokumentasikan tindakan yang dilakukan pada lembar catatan perawatan'
        }
    ],
    dokumenTerkait: ['Status pasien'],
    instalasiTerkait: ['Instalasi Rawat Inap ( Ruang Kebidanan )', 'Instalasi Gawat Darurat', 'Instalasi Bedah Sentral']
    },
    {
    id: 1210,
    title: 'Menyiapkan Pasien Untuk Tindakan Hidrotubasi Tanpa Kontras',
    category: 'tindakan',
    subCategory: 'maternitas',
    description: 'Kegiatan membantu menyiapkan pasien untuk tindakan hidrotubasi tanpa kontras.',
    icon: 'fa-procedures',
    tags: ['Hidrotubasi', 'Ginekologi', 'Obstetri', 'Tindakan Medis'],
    noDokumen: '445/SPO.3550/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Suatu kegiatan membantu menyiapkan pasien untuk tindakan hidrotubasi tanpa kontras.',
    tujuan: 'Sebagai acuan penerapan langkah-langkah untuk menyiapkan pasien yang akan dilakukan tindakan hidrotubasi tanpa kontras.',
    kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional  Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan alat',
                    detail: [
                        {
                            text: '1) Obat-obatan',
                            subDetail: [
                                '- Antibiotik ( Ex: Gentamycin  2 amp )',
                                '- Cairan NaCl 0,9 % sesuai kebutuhan',
                                '- Obat Kortikosteroid 1 Amp'
                            ]
                        },
                        {
                            text: '2) Bak instrument steril sedang berisi :',
                            subDetail: [
                                '- Kom kecil berisi bethadine, 1 buah',
                                '- Kassa steril sesuai kebutuhan',
                                '- Kom untuk cairan NaCl 0,9 %, 1 buah',
                                '- Spekulum cocor bebek',
                                '- Tampon tang',
                                '- Disposible 10 cc, 1 buah',
                                '- Disposible  5 cc, 1 buah',
                                '- Catheter no. 10, 1 buah',
                                '- Sarung tangan 1 pasang'
                            ]
                        },
                        {
                            text: '3) Alat pelindung diri :',
                            subDetail: [
                                '- Sepatu bot',
                                '- Kacamata google',
                                '- Topi',
                                '- Barak schort',
                                '- Masker'
                            ]
                        }
                    ]
                },
                {
                    desc: 'Persiapan pasien',
                    detail: [
                        { text: '1) Informed consent, pasien dan keluarga diberitahu dan    dijelaskan tentang tujuan tindakan dan prosedur tindakan yang  akan dilakukan' },
                        { text: '2) Pasien dan keluarga menandatangani formulir informed consent dan surat izin tindakan' },
                        { text: '3) Posisi pasien diatur lithotomic' },
                        { text: '4) Pasien disuruh untuk BAK terlebih dahulu' }
                    ]
                },
                {
                    desc: 'Persiapan Lingkungan',
                    detail: [
                        { text: '1) Skherm ditutup (bila perlu) untuk menjaga privasi pasien' },
                        { text: '2) Bedplang tempat tidur disesuaikan sesuai kebutuhan' }
                    ]
                }
            ]
        },
        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'Perawat cuci tangan' },
                { desc: 'Cocokkan nama pasien dengan gelang identitas' },
                { desc: 'Alat-alat disiapkan, letakkan secara ergonomis' },
                { desc: 'Pakai APD' },
                { desc: 'Membantu pasien untuk membuka pakaian dalamnya' },
                { desc: 'Pasien ditidurkan pada tempat tidur tindakan dengan posisi lithotomi' },
                { desc: 'Berdo’a bersama sebelum tindakan hidrotubasi tanpa kontras' },
                { desc: 'Dokter melakukan tindakan hidrotubasi tanpa kontras.' },
                { desc: 'Merapikan pasien setelah selesai tindakan tindakan hidrotubasi tanpa kontras' },
                { desc: 'Alat-alat dibereskan dan dicuci' },
                { desc: 'Perawat cuci tangan' }
            ]
        },
        {
            step: 'Evaluasi',
            desc: 'Observasi tanda-tanda vital, adanya mual muntah'
        },
        {
            step: 'Dokumentasi',
            desc: 'Dokumentasikan tindakan yang telah dilakukan dalam rekam medik keperawatan'
        }
    ],
    dokumenTerkait: ['Status pasien'],
    instalasiTerkait: ['Instalasi Rawat Inap ( ruang Kebidanan )', 'Instalasi Bedah Sentral']
    },
    {
    id: 1211,
    title: 'Pemberian Mg SO4',
    category: 'tindakan',
    subCategory: 'maternitas',
    description: 'Merupakan tindakan pemberian Mg SO4 yang diberikan pada pasien-pasien yang membutuhkan.',
    icon: 'fa-procedures',
    tags: ['MgSO4', 'Eklamsia', 'Obstetri', 'Tindakan Medis'],
    noDokumen: '445/SPO.3551/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Merupakan tindakan pemberian Mg SO4 yang diberikan pada pasien-pasien yang membutuhkan',
    tujuan: 'Sebagai acuan penerapan langkah-langkah pemberian Mg S04 untuk mengurangi dampak lebih buruk pada ibu dan bayi dari serangan kejang eklamsia.',
    kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional  Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan Alat',
                    detail: [
                        { text: '1) Obat MgSO4 40% dan 20%' },
                        { text: '2) Set infus : infus set, IV cateter, cairan infus D5W' },
                        { text: '3) DC set : folley cateter, urine bag, jelly, aquabides, disp 10cc,handscoon steril' },
                        { text: '4) Spuit 10 cc + niddle 23' },
                        { text: '5) Oksigen set' },
                        { text: '6) Suctioning set' },
                        { text: '7) Mayo' },
                        { text: '8) Obat-obatan : diazepam' },
                        { text: '9) Restrain ( bila diperlukan )' }
                    ]
                }
            ]
        },
        {
            step: 'Penatalaksanaan',
            items: [
                { desc: 'Perawat cuci tangan' },
                { desc: 'Cocokan nama pasien dengan gelang identitas' },
                { desc: 'Tentukan dengan pasti bahwa pasien akan mendapatkan MgSO4 sesuai dengan indikasi' },
                { desc: 'Membeerikan MgSO4 40% atau MgSO4 20 %sesuai dengan Standar Prosedur Operasional' },
                { desc: 'Bila terjadi kejang berulang segera lapor dokter untuk terapi lanjutan / pemberian obat tambahan anti kejang ( misalnya : diazepam )' },
                { desc: 'Kolaborasi dengan tim medis untuk penangan selanjutnya bila terjadi tanda-tanda keracunan seperti paralysis total, depresi pernafasan dan atau hipotensi berikan anti dotum: Ca gluconas 10% sebanyak 10cc IV selama 3 menit' },
                {
                    desc: 'Hal-hal yang perlu diperhatikan',
                    detail: [
                        { text: '1) Selama pemberian MgSO4 set O2 harus tersedia.' },
                        { text: '2) Di dalam pemberian MgSO4 produksi urine harus cukup (± 5cc/menit)' },
                        { text: '3) Awasi tanda-tanda vital dan kesadaran' }
                    ]
                }
            ]
        },
        {
            step: 'Evaluasi',
            items: [
                { desc: 'A. Observasi dan hitung jumlah darah yang keluar.' },
                { desc: 'B. Observai gejala-gejala syok hypovolemik (tekanan darah menurun, nadi melemah dan cepat, kulit dingin dan paien gelisah).' }
            ]
        },
        {
            step: 'Dokumentasi',
            desc: 'Dokumentasikan tindakan yang dilakukan dalam Status pasien'
        }
    ],
    dokumenTerkait: ['Status pasien'],
    instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Gawat Darurat', 'Instalasi Pelayanan Intensif', 'Instalasi Bedah Sentral']
    },
    {
    id: 1212,
    title: 'Menghitung Denyut Jantung Janin (DJJ)',
    category: 'tindakan',
    subCategory: 'maternitas',
    description: 'Suatu kegiatan memeriksa dan menghitung denyut jantung bayi dengan menggunakan alat doppler.',
    icon: 'fa-heartbeat',
    tags: ['DJJ', 'Denyut Jantung Janin', 'Obstetri', 'Monitoring Janin'],
    noDokumen: '445/SPO.3552/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Suatu kegiatan memeriksa dan menghitung denyut jantung bayi dengan menggunakan alat doppler',
    tujuan: 'Menentukan frekuensi denyut jantung janin',
    kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional  Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan alat',
                    detail: [
                        { text: '1) Tensimetem' },
                        { text: '2) Stetoscope' },
                        { text: '3) Jam tangan / jam dinding' },
                        { text: '4) Format observasi' }
                    ]
                }
            ]
        },
        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'Perawat cuci tangan' },
                { desc: 'Cocokan nama pasien dengan gelang identitas' },
                { desc: 'Membaca basmallah' },
                { desc: 'Pakaian bawah diturunkan' },
                { desc: 'Tentukan titik tertentu pada dinding abdomen dimana DJJ terdengar paling kuat. Jika DJJ sulit ditemukan palpasi abdomen dan tentukan dataran punggung bayi' },
                { desc: 'Berikan jelly pada ujung doppler, letakan doppler padatitik yang telah ditentukan, pastikan bahwa bunyi yang terdengar adalah bunyi jantung janin.' },
                { desc: 'Hitung denyut jantung janin selama 60 detik ( 1 menit )' },
                {
                    desc: 'Untuk pasien inpartu :',
                    detail: [
                        { text: '1) Nilai DJJ selama dan segera setelah kontraksi uterus' },
                        { text: '2) Mulailah penilaian sebelum / setelah puncak kontraksi' },
                        { text: '3) Lakukan penilaian DJJ pada lebih dari 1 kontraksi' }
                    ]
                },
                { desc: 'Bersihkan sisa jelly dengan menggunakan tissue' },
                { desc: 'Mengucapkan hamdallah' },
                { desc: 'Pasien dirapihkan, alat dibersihkan dan dikembalikan ke tempat semula' },
                { desc: 'Mencuci tangan' }
            ]
        },
        {
            step: 'Evaluasi',
            items: [
                { desc: 'A. Pantau respon pasien selama dan setelah tindakan dilakukan.' },
                { desc: 'B. Jika DJJ kurang dari 120 atau lebih dari 160 pertimbangkan adanya gangguan sirkulasi, segera lapor dokter.' },
                { desc: 'C. Jika DJJ<100 x/menit atau >180 x/menit baringkan ibu ke sisi kiri dan anjurkan untuk santai, lakukan penilaian ulang DJJ 5 menit kemudian.' }

            ]
        },
        {
            step: 'Dokumentasi',
            desc: 'Dokumentasikan tindakan yang telah dilakukan dalam Status pasien'
        }
    ],
    dokumenTerkait: ['Status pasien'],
    instalasiTerkait: ['Instalasi Rawat Inap ( Ruang Kebidanan )', 'Instalasi GAwat Darurat', 'Instalasi Pelayanan Intensif']
    },
    {
    id: 1213,
    title: 'Monitoring Perdarahan Masa Nifas',
    category: 'tindakan',
    subCategory: 'maternitas',
    description: 'Suatu kegiatan memantau / monitoring perdarahan pasien pada masa nifas.',
    icon: 'fa-procedures',
    tags: ['Nifas', 'Perdarahan', 'Monitoring', 'Obstetri'],
    noDokumen: '445/SPO.3553/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Suatu kegiatan memantau / monitoring perdarahan pasien pada masa nifas',
    tujuan: 'Sebagai acuan penerapan langkah-langkah dalam monitoring perdarahan pasien pada masa nifas',
    kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional  Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan alat',
                    detail: [
                        { text: '1) Tensimeter' },
                        { text: '2) Stetoscope' },
                        { text: '3) Jam tangan / jam dinding dengan penunjuk detik' },
                        { text: '4) Alat pencatat' }
                    ]
                },
                {
                    desc: 'Persiapan pasien',
                    detail: [
                        { text: '1) Berikan penjelasan kepada pasien tentang tujuan dan prosedur tindakan yang akan dilakukan' }
                    ]
                },
                {
                    desc: 'Persiapan Lingkungan',
                    detail: [
                        { text: '1) Skherm ditutup (bila perlu) untuk menjaga privasi pasien' },
                        { text: '2) Bedplang tempat tidur disesuaikan sesuai kebutuhan' }
                    ]
                }
            ]
        },
        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'Perawat cuci tangan' },
                { desc: 'Cocokan nama pasien dengan gelang identitas' },
                { desc: 'Ukur tanda-tanda vital secara teratur ( minimal tiap 5 – 7 jam)' },
                { desc: 'Lihat dan catat perdarahan pervagina ( banyaknya, bau )' },
                { desc: 'Ukur tinggi fundus uteri' },
                {
                    desc: 'Monitoring tanda-tanda perdarahan :',
                    detail: [
                        { text: '1) Warna conjungtiva' },
                        { text: '2) Periksa kadar Hb, jika diperlukan' },
                        { text: '3) Tanyakan adanya keluhan pusing dan lemah badan' }
                    ]
                },
                { desc: 'Mengucapkan hamdallah' },
                { desc: 'Pasien dirapihkan, alat dibersihkan dan dikembalikan ke tempat semula' },
                { desc: 'Mencuci tangan' }
            ]
        },
        {
            step: 'Evaluasi',
            desc: 'Pantau respon pasien secara teratur : laporkan segera bila perdarahan banyak dan aktif'
        },
        {
            step: 'Dokumentasi',
            desc: 'Dokumentasikan tindakan yang telah dilakukan dalam Status pasien'
        }
    ],
    dokumenTerkait: ['Status pasien'],
    instalasiTerkait: ['Instalasi Rawat Inap ( Ruang Kebidanan )', 'Instalasi Gawat Darurat']
    },
    {
    id: 1214,
    title: 'Membantu Ibu Menyusui Bayi',
    category: 'tindakan',
    subCategory: 'maternitas',
    description: 'Adalah kegiatan antara ibu dan bayi dalam pemenuhan kebutuhan nutrisi bayinya dimana kegiatan tersebut dapat meningkatkan kualitas hubungan antara bayi dan ibu.',
    icon: 'fa-baby',
    tags: ['ASI', 'Menyusui', 'Neonatal', 'Obstetri'],
    noDokumen: '445/SPO.3554/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Adalah kegiatan antara ibu dan bayi dalam pemenuhan kebutuhan nutrisi bayinya  dimana kegiatan tersebut dapat meningkatkan kualitas hubungan antara bayi dan ibu',
    tujuan: 'Sebagai acuan penerapan langkah-langkah dalam membantu ibu menyusui bayinya, untuk:\nMemenuhi kebutuhan nutrisi yang siap saji\nMeningkatkan bounding attachment antara ibu dan bayi',
    kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional  Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan alat',
                    detail: [
                        { text: '1) Popok bersih ( jika diperlukan )' },
                        { text: '2) Waslap (jika diperlukan )' },
                        { text: '3) Buku catatan minum' }
                    ]
                },
                {
                    desc: 'Persiapan klien',
                    detail: [
                        { text: '1) Mengidentifikasi bayi yang yang akan diberi minum' },
                        { text: '2) Lingkungan jaga privasi' },
                        { text: '3) Ibu bayi diminta untuk mencuci tangan sebelum dan sesudah menyusui' },
                        { text: '4) Kebersihan payu dara ibu' }
                    ]
                },
                {
                    desc: 'Persiapan Lingkungan',
                    detail: [
                        { text: '1) Skherm ditutup (bila perlu) untuk menjaga privasi pasien' },
                        { text: '2) Bedplang tempat tidur disesuaikan sesuai kebutuhan' }
                    ]
                }
            ]
        },
        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'Perawat mencuci tangan' },
                { desc: 'Cocokan nama pasien dengan gelang identitas' },
                { desc: 'Mengucapakan basmallah' },
                { desc: 'Alat alat didekatkan pada pasien' },
                { desc: 'Mengidentifikasi bayi yang akan disusukan pada klien' },
                { desc: 'Mengidentifikasi popok bayi bila BAK / BAB' },
                { desc: 'Menggendong bayi dan membawa bayi ke ibu' },
                { desc: 'Memperhatikan nomor bayi dan klien' },
                { desc: 'Memanggil nama yang tertera pada gelang bayi' },
                { desc: 'Menganjurkan ibu untuk mencuci tangannya' },
                { desc: 'Membantu ibu untuk membersihkan area payudara dan area putting susu' },
                { desc: 'Mengamati apakah putting susu lecet' },
                { desc: 'Menganjurkan ibu untuk mengoleskan ASI pada putting susu ibu' },
                { desc: 'Membantu ibu duduk dengan posisi yang nyaman, letakkan bantal di pangkuan ibu untuk menopang bayi.' },
                { desc: 'Membantu ibu memeluk/ memegang bayi, leher bayi bersandar di lekuk siku ibu, lengan ibu menopang punggung bayi dan tangan ibu memegang pantat bayi.' },
                { desc: 'Memastikan perut bayi menghadap perut ibu' },
                { desc: 'Memastikan ibu memeluk bayi, sehingga tubuh bayi seperti membungkus perut ibu, kepala dan leher bayi lurus dengan tubuh bayi dan payudara ibu tepat berada di depan mulut bayi' },
                { desc: 'Mengajari ibu untuk memegang payudara dengan ibu jari di atas dan jari yang lain menopang di bawah serta jangan menekan puting susu dan aerolanya.' },
                { desc: 'Membantu ibu menyentuhkan puting sususnya ke mulut bayi, dan ketika bayi membuka mulutnya, bantu ibu memasukkan puting susu ke dalam mulut bayi agar sebagian besar dari aerola payudara ibu berada dalam mulut bayi' },
                { desc: 'Memastikan bahwa bayi sudah melekat dengan baik ke payudara ibu dan telah mulai menghisap dan menelan ASI.' },
                { desc: 'Menyusui 15-20 menit' },
                { desc: 'Membuat bayi bersendawa dengan cara : bayi diangkat, letakan posisi kepala bayi di pundak ibu kemudian ditepuk-tepuk hingga bersendawa.' },
                { desc: 'Mengatur posisi bayi dalam box untuk miring kanan' },
                { desc: 'Pasien dan alat-alat dibersihkan' },
                { desc: 'Perawat mencuci tangan' }
            ]
        },
        {
            step: 'Evaluasi',
            items: [
                { desc: 'A. Kaji keadaan umum bayi  setelah minum tampak tidur dengan tenang' },
                { desc: 'B. Jumlah ASI yang diminum' },
                { desc: 'C. Devekasi dan miksi' }
            ]
        },
        {
            step: 'Dokumentasi',
            desc: 'Dokumentasikan tindakan dalam catatan asuhan keperawatan : Catat kondisi dan respon bayi'
        }
    ],
    dokumenTerkait: ['Status pasien'],
    instalasiTerkait: ['Instalai Rawat Inap', 'Instalasi Rawat Jalan', 'Instalasi Gawat darurat']
    },
    {
    id: 1215,
    title: 'Melaksanakan Rawat Gabung ( Rooming In )',
    category: 'tindakan',
    subCategory: 'maternitas',
    description: 'Kegiatan melaksanakan perawatan ibu dan bayi baru lahir dalam satu ruangan yang sama.',
    icon: 'fa-procedures',
    tags: ['Rooming In', 'Rawat Gabung', 'Bayi Baru Lahir', 'Perawatan Ibu dan Bayi'],
    noDokumen: '445/SPO.3555/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Suatu kegiatan melaksanakan perawatan ibu dan bayi baru lahir dalam satu ruangan yang sama',
    tujuan: 'Sebagai acuan penerapan langkah-langkah dalam melaksanakan perawatan ibu dan bayi baru lahir dalam satu ruangan yang sama ( rooming in )',
    kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional  Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan alat',
                    detail: [
                        { text: 'Popok bersih ( jika diperlukan )' },
                        { text: 'Waslap (jika diperlukan )' },
                        { text: 'Buku catatan minum' }
                    ]
                },
                {
                    desc: 'Persiapan klien',
                    detail: 'Berikan penjelasan kepada ibu dan keluarga tentang tujuan dan prosedur tindakan yang akan dilakukan'
                },
                {
                    desc: 'Persiapan Lingkungan',
                    detail: [
                        { text: '1) Skherm ditutup (bila perlu) untuk menjaga privasi pasien' },
                        { text: '2) Bedplang tempat tidur disesuaikan sesuai kebutuhan' }
                    ]
                }
            ]
        },
        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'Perawat cuci tangan' },
                { desc: 'Cocokan nama pasien dengan gelang identitas' },
                { desc: 'Pastikan bahwa bayi dan ibu telah siap untuk dilakukan rooming in' },
                { desc: 'Petugas perinatologi mengantarkan bayi ke ruangan ibu' },
                { desc: 'Memberikan bimbingan dan pendidikan kepada ibu / keluarga tentang perawatan bayi yang dapat dilakukan' },
                { desc: 'Menyampaikan kepada ibu/keluarga bila memerlukan bantuan dapat menghubungi perawat/bidan melalui bel.' }
            ]
        },
        {
            step: 'Evaluasi',
            desc: 'Pantau kemampuan ibu/keluarga dalam perawatan bayi secara tertatur'
        },
        {
            step: 'Dokumentasi',
            desc: 'Dokumentasiskan tindakan yang dilakukan dalam Status pasien'
        }
    ],
    dokumenTerkait: ['Status pasien'],
    instalasiTerkait: ['Instalasi Rawat Inap']
    },
    {
    id: 1216,
    title: 'Senam Nifas',
    category: 'tindakan',
    subCategory: 'maternitas',
    description: 'Kegiatan senam yang dilakukan ibu setelah melahirkan untuk pemulihan kondisi tubuh.',
    icon: 'fa-procedures',
    tags: ['Senam Nifas', 'Postpartum', 'Pemulihan Ibu', 'Latihan Fisik'],
    noDokumen: '445/SPO.3556/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Senam nifas adalah senam yang dilakukan ibu-ibu setelah melahirkan setelah keadaan tubuhnya pulih kembali',
    tujuan: 'Sebagai acuan penerapan langkah-langkah senam nifas untuk:\nMempercepat penyembuhan\nMencegah timbulnya komplikasi\nMemulihkan dan menguatkan otot-otot punggung, otot dasar panggul dan otot perut.',
    kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan Alat',
                    detail: [
                        { text: 'Matras' },
                        { text: 'Pakaian Senam Nifas ( jika ada )' },
                        { text: 'Alat Pengukur Vital Sign (Tensi Meter, Termometer, dan Jam tangan)' },
                        { text: 'Tissue dalam wadahnya' },
                        { text: 'Alkohol pada wadahnya' },
                        { text: 'Nierbeken / Bengkok' },
                        { text: 'Air Minum (sesuai dengan kebutuhan)' },
                        { text: 'Wastafel (untuk cuci tangan dan kumur-kumur) + handsoap' },
                        { text: 'Handuk Kecil ( untuk Lap Tangan)' },
                        {
                            text: 'Bila diperlukan pada hari pertama postpartum siapkan Alat-alat untuk pemeriksaan genitalia (vulva hygiene + check lochea):',
                            subDetail: [
                                '- Handscoen bersih 1 pasang',
                                '- Masker',
                                '- Celemek',
                                '- Kapas cebok dalam kom tertutup',
                                '- Air DTT dalam kom tertutup',
                                '- Nierbeken',
                                '- Softex (pembalut)',
                                '- Waskom berisi larutan chlorin 0,5%',
                                '- Tempat sampah 2 jenis'
                            ]
                        }
                    ]
                },
                {
                    desc: 'Persiapan pasien',
                    detail: [
                        { text: 'Lakukan Komunikasi, Informasi dan Edukasi (KIE) tentang Senam Nifas dan masalah-masalah yang berhubungan dengan perubahan fisik postpartum' }
                    ]
                },
                {
                    desc: 'Persiapan lingkungan',
                    detail: [
                        { text: 'Skherm ditutup (bila perlu) agar privasi pasien terjaga, bedplang tempat tidur pasien dibuka atau ditutup sesuai dengan kebutuhan' }
                    ]
                }
            ]
        },
        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'Perawat cuci tangan' },
                { desc: 'Cocokkan nama pasien dengan gelang identitas' },
                { desc: 'Ukur terlebih dahulu vital sign (tekanan darah, Respirasi, denyut nadi dan temperature) ibu, kemudian lakukan pemeriksaan fisik ibu post partum dan periksa genetalia eksterna (check luka dan Kebersihan vulva serta pengeluaran lochea)' },
                { desc: 'Mulailah dengan membaca Bismillahirrahmanirahim.' },
                { desc: 'Lakukan Persiapan pasien (pakaian) dan mengatur posisi berbaring yang nyaman di atas matras' },
                { desc: 'Tahapan Pelaksanaan Senam Nifas Hari Pertama:',
                    detail: [
                        { text: 'Sikap tubuh terlentang dan rileks, kemudian lakukan pernafasan perut, diawali dengan mengambil nafas melalui hidung dan tahan hingga hitungan ke 5 kemudian buang melalui mulut, lakukan hingga 5 kali', marker: false }
                    ]
                },
                { desc: 'Hari Kedua:',
                    detail: [
                        { text: 'Sikap tubuh terlentang tapi kedua tangan dibuka lebar hingga sejajar dengan bahu kemudian pertemukan kedua tangan tersebut tetap di atas muka, lakukan hingga berkali-kali', marker: false }
                    ]
                },
                { desc: 'Hari Ketiga:',
                    detail: [
                        { text: 'Sikap tubuh terlentang tetapi kedua kaki agak dibengkokkan sehingga kedua telapak kaki menyentuh lantai, lalu angkat bokong ibu dan tahan hingga hitungan ke 5 (1, 2, 3, 4, 5) lalu turunkan bokong ke posisi semula. Lakukan gerakan ini berulang sebanyak 5 kali', marker: false }
                    ]
                },
                { desc: 'Hari Keempat:',
                    detail: [
                        { text: 'Sikap tubuh dengan bagian atas terlentang dan kaki ditekuk 45 derajat, lalu salah satu tangan memegang perut setelah itu angkat kepala sehingga tubuh ibu membentuk posisi dengan sudut 45 derajat dan tahan hingga hitungan ke 5 (1, 2, 3, 4, 5) lakukan gerakan ini berulang sebanyak 5 kali', marker: false }
                    ]
                },
                { desc: 'Hari Kelima:',
                    detail: [
                        { text: 'Sikap tubuh masih terlentang kemudian salah satu kaki ditekuk membentuk sudut 45 derajat lalu angkat tubuh dan tangan dari bagian kaki yang tidak ditekuk ke arah yang berseberangan (berlawanan) dengan kaki yang ditekuk. Upayakan agar tangan menyentuh lutut. Lakukan gerakan ini secara bergantian dengan posisi kaki dan tangan yang lain. Lakukan gerakan ini sebanyak 5 kali.', marker: false }
                    ]
                },
                { desc: 'Hari Keenam:',
                    detail: [
                        { text: 'Sikap tubuh terlentang kemudian tarik kaki sehingga paha membentuk sudut 90 derajat. Lakukan gerakan ini dengan kaki yang lain secara bergantian sebanyak 5 kali.', marker: false }
                    ]
                },
                { desc: 'Hari Ketujuh:',
                    detail: [
                        { text: 'Sikap tubuh terlentang dan gerakan kaki secara bergantian dengan mengangkat kaki 20 – 30 cm dari permukaan lantai, lakukan gerakan ini sebanyak 5 kali.', marker: false }
                    ]
                },
                { desc: 'Hari Kedelapan:',
                    detail: [
                        { text: 'Sikap tubuh seperti bayi merangkak kemudian gerakan perut ke atas dan ke bawah sebanyak 5 kali', marker: false }
                    ]
                },
                { desc: 'Hari Kesembilan:',
                    detail: [
                        { text: 'Sikap tubuh terlentang kemudian angkat kedua kaki lurus ke atas sehingga membentuk sudut 90 derajat, lakukan gerakan ini sebanyak 5 kali.', marker: false }
                    ]
                },
                { desc: 'Hari Kesepuluh:',
                    detail: [
                        { text: 'Sikap tubuh tidur terlentang kemudian lakukan gerakan sit-up;', marker: false }
                    ]
                },
                { desc: 'yaitu mengangkat tubuh hingga posisi seperti orang duduk, posisi kedua tangan berada di bawah kepala, lakukan hingga 5 kali gerakan' },
                { desc: 'Setelah selesai tanyakan pada ibu tentang apa yang dirasakan dari hasil gerakan yang telah dilakukan' },
                { desc: 'Catat hasil pemeriksaan dan evaluasi keadaan ibu setelah melakukan senam nifas' },
                { desc: 'Bereskan kembali semua peralatan yang telah digunakan untuk dibersihkan dan dikeringkan' },
                { desc: 'Cucilah tangan setelah menyelesaikan pekerjaan' }
            ]
        },
        {
            step: 'Evaluasi',
            desc: 'Pantau respon pasien selama dan setelah tindakan dilakukan'
        },
        {
            step: 'Dokumentasi',
            desc: 'Dokumentasikan tindakan yang dilakukan dalam Status pasien'
        }
    ],
    dokumenTerkait: ['Status pasien'],
    instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Rawat Jalan']
    },
    {
    id: 1217,
    title: 'Senam Hamil',
    category: 'tindakan',
    subCategory: 'maternitas',
    description: 'Terapi latihan gerak untuk mempersiapkan fisik dan mental ibu hamil.',
    icon: 'fa-procedures',
    tags: ['Senam Hamil', 'Kehamilan', 'Persalinan', 'Latihan Fisik'],
    noDokumen: '445/SPO.3557/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Senam hamil adalah terapi latihan gerak untuk mempersiapkan fisik dan mental ibu hamil untuk mempersiapkan masa kehamilan dan proses persalinan sehingga berjalan normal, lancar, dan aman',
    tujuan: 'Menjaga kesehatan ibu dan bayi selama hamil\nMempersiapkan fisik dan mental menghadapi persalinan\nMemberikan rasa nyaman',
    kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan alat',
                    detail: [
                        { text: 'Matras' },
                        { text: 'Bantal 2 buah' },
                        { text: 'Pakaian Senam Hamil' },
                        { text: 'Alat Pengukur Vital Sign (Tensi Meter, Termometer, dan Jam tangan)' },
                        { text: 'Dopler / Monoaural' },
                        { text: 'Tissue dalam wadahnya' },
                        { text: 'Alkohol Pad' },
                        { text: 'Nierbeken' },
                        { text: 'Air Minum' },
                        { text: 'Handuk kecil (untuk lap tangan/keringat)' },
                        { text: 'Wastafel (untuk cuci tangan dan kumur-kumur)' }
                    ]
                },
                {
                    desc: 'Persiapan pasien',
                    detail: [
                        { text: 'Lakukan Komunikasi, Informasi dan Edukasi (KIE) tentang Senam hamil dan masalah-masalah yang berhubungan dengan proses kehamilan, proses persalinan dan kesehatan ibu hamil sesuai dengan umur kehamilan ibu saat ini.' },
                        { text: 'Jelaskan tujuan dan prosedur yang akan dilakukan' }
                    ]
                },
                {
                    desc: 'Persiapan Lingkungan',
                    detail: [
                        { text: '1) Skherm ditutup (bila perlu) untuk menjaga privasi pasien' },
                        { text: '2) Bedplang tempat tidur disesuaikan sesuai kebutuhan' }
                    ]
                }
            ]
        },
        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'A. Perawat cuci tangan' },
                { desc: 'B. Cocokan nama pasien dengan gelang identitas' },
                { desc: 'C. Berdoa sebelum melakukan tindakan' },
                { desc: 'D. Sikap Tubuh yang benar (berdiri tegak lurus)' },
                { desc: 'E. Berikan senyum, ucapkan salam dan sapa ibu dengan ramah' },
                { desc: 'F. Palpasi Leopold I s/d IV dan check denyut jantung janin, sebelum melakukan senam hamil.' },
                { desc: 'G. Ukur terlebih dahulu vital sign (Tekanan darah, Respirasi, Denyut nadi, dan Temperatur) ibu, kemudian lakukan pemeriksaan' },
                { desc: 'H. Latihan senam hamil dilakukan selama 30 menit dengan tahapan sebagai berikut latihan pendahuluan, latihan inti dan latihan pendinginan/penenangan' },

                { desc: 'I. Gerakan untuk latihan pendahuluan warming up',
                    detail: [
                        { text: '1) Duduk tegak bersandar pada kedua lengan, kedua tungkai kaki diluruskan dan dibuka sedikit, seluruh tubuh lemas' },
                        { text: '2) Telapak kaki kiri dan kanan digerakkan ke depan dan ke belakang secara bergantian. Dimulai dengan telapak kaki kiri ke depan dan kaki kanan ke belakang. Hitungan 1 s/d 8' },
                        { text: '3) Kedua telapak kaki digerakkan ke depan dan ke belakang secara bersamaan dengan 8 kali hitungan. Dimulai dengan gerakan ke depan... ke belakang... dan seterusnya' },
                        { text: '4) Gerakan kaki kiri dan kanan bersama-sama ke kiri dan ke kanan 8 kali hitungan. Dimulai dengan gerakan kiri, ... kanan... dst.' },
                        { text: '5) Gerakan kaki kiri dan kanan bersama-sama ke dalam (endorotasi) sampai jari menyentuh lantai, lalu gerakan kedua kaki tersebar keluar (exorotasi) dengan 8 kali hitungan. Dimulai dengan gerakan arah ke dalam, .. keluar... dan seterusnya.' },
                        { text: '6) Putarkan kedua kaki bersama-sama (Circumduction) ke kiri 4 kali dan ke kanan 4 kali. Mulai putar ke arah kiri sebanyak 4 kali dan putar ke arah kanan 4 kali.' },
                        { text: '7) Angkat kedua lutut tanpa menggeser kedua tumit dan pantat, lalu tekankan kedua tungkai ke lantai sambil mengerutkan dubur (Spincter ani externus) dan tarik otot-otot perut ke dalam (kempiskan perut) kemudian relaks kembali.' },
                        { text: '8) Sikap duduk tetap tegak, kedua tangan di samping. Letakkan tungkai kanan di atas tungkai kiri, lalu tekan tungkai kiri dengan seluruh kekuatan tungkai kanan sambil mengempiskan dinding perut dan mengerutkan liang dubur.' },
                        { text: '9) Angkat tungkai kiri ke atas, lalu letakkan kembali. Bergantian dengan tungkai kanan, hitungan 8 kali.' },
                        { text: '10) Peregangan paha. Kedua telapak kaki dipertemukan (berhadapan), hitungan 8 kali aba-aba. Tutup, ... buka...' },
                        { text: '11) Duduk bersila, badan tetap tegak, kedua tangan ke atas, lalu tarik tangan kiri lebih tinggi dari tangan kanan, lalu kendurkan. Gerakan bergantian dengan tangan kanan. Mulai kiri... kanan... dst. sampai hitungan 8 kali.' },
                        { text: '12) Sikap duduk tetap bersila, kedua tangan di atas bahu dan kedua lengan di samping payudara. Kemudian putarkan kedua lengan ke depan, ke atas (tangan di samping telinga), ke belakang dan kembali ke sikap semula. Diulang sampai hitungan 8 kali; tekan... angkat... putar... tekan... angkat... putar' },
                        { text: '13) Sikap duduk tetap bersila dengan posisi tegak lurus, kedua tangan ke atas, lalu gerakkan ke kiri dan ke kanan serta ke atas masing-masing 2 kali. Mulai ke kiri... ke kanan... ke atas... dan seterusnya.' },
                        { text: '14) Tangan tetap di atas, mulai dari kiri diputar ke belakang sejauh mungkin, lalu gerakkan kebalikannya. Mulai... putar... dibalik... putar ... sampai 4 kali' }
                    ]
                },

                { desc: 'J. Latihan Inti (untuk usia kehamilan 26 – 30 minggu) Latihan Dasar Panggul',
                    detail: [
                        { text: '1) Ibu tidur terlentang, kedua lutut ditekuk, kedua lengan di samping badan dan relaks. Angkat panggul sampai badan bertumpu pada punggung, tahan sebentar kemudian turun lagi seperti semula. Angkat.. Tahan.. Turun. 4 kali cukup' },
                        { text: '2) Angkat pinggang ke atas, tekan bokong ke lantai sambil kerutkan dubur (anus). Kempiskan perut, lemaskan/relaks. Angkat... Tekan... kerutkan... kempiskan ... Lemaskan... Sebanyak 4 kali.' },
                        { text: '3) Sikap tubuh berbaring terlentang, posisi kaki lurus, kedua lengan di samping badan, kedua tungkai lurus dan relaks. Panjangkan tungkai kanan dengan menarik tungkai kiri mendekati bahu kiri dan kembali ke posisi semula., hitungan 4 kali. Mulai kaki kanan angkat... turun... kaki kiri... angkat... turun sampai 4 kali' },
                        { text: '4) Sikap merangkak, jarak antara kedua tangan sama dengan jarak antara kedua bahu. Tundukkan kepala lihat ke arah vulva dan pinggang diangkat (cembung) sambil mengempiskan perut dan mengerutkan lubang dubur. Kemudian datarkan pinggang, pandangan lurus ke depan, dengan mengangkat kepala ke arah atas cekungkan pinggang sambil melemaskan otot-otot perut dan otot dasar panggul, dihitung 8 kali.' },
                        { text: '5) Lakukan gerakan cembung... datar... cekung... cembung... datar ... cekung sampai 8 kali' }
                    ]
                },

                { desc: 'K. Latihan pernafasan perut', 
                    detail: [
                    { text: '1) Berbaring terlentang, kedua lutut ditekuk, letakkan tangan kiri di atas perut.' },
                    { text: '2) Lakukan pernafasan perut, tarik nafas melalui hidung, lalu tiupkan melalui celah-celah bibir sambil kempiskan perut lakukan sebanyak 8 kali.' },
                    { text: '3) Tarik... tahan... Tiup... dst. 8 kali. Ini digunakan untuk mengatasi setiap kontraksi dan nyeri his di kala I.' },
                    { text: '4) Sikap tubuh masih tetap terlentang, kedua lutut ditekuk, kedua lengan di samping badan dan relaks.' },
                    { text: '5) Dalam keadaan relaksasi seluruh tubuh. Kepalkan kedua tangan dan tegangkan selama beberapa detik kemudian lemaskan kembali dan lakukan sebanyak 8 kali. Tegang... Lemas.. Tegang... Lemas ... dst' }
                ]},

                { desc: 'L. Pendinginan (untuk usia kehamilan 26 – 30 minggu)',
                    detail: 'Tidur miring ke kiri, arah disesuaikan dengan letak punggung bayi. Letak kaki sesuai arah miring, kaki bawah diluruskan, kaki sebelah atas diganjal bantal sambil ditekuk. Tangan yang di bawah diletakkan di belakang, tangan sebelah atas ke depan dilipat ganjal bantal. Mata dipejamkan, lakukan relaksasi, lemaskan seluruh tubuh. Berusaha mengatasi suara dari luar, waktunya 5 menit' },

                { desc: 'M. Latihan Untuk Usia Kehamilan 31 – 36 Minggu',
                    detail: [
                        { text: '1) Dimulai dengan pembentukan sikap tubuh, hal ini dimaksudkan untuk memperoleh sikap tubuh yang baik menyebabkan letak panggul naik, istilahnya Pelvic Tilting' },
                        { text: '2) Kegiatan: Warming Up, latihan kontraksi dan relaksasi, latihan pernafasan, pendinginan.' },
                        { text: '3) Gerakan dimulai ... Naik... Turun... Naik... Turun... dst' },
                        { text: '4) Berdiri tegak, kedua kaki agak dibuka, telapak tangan bertumpu ke tembok/dinding, kemudian tumit diangkat lalu diturunkan badan perlahan-lahan sampai jongkok. Usahakan badan tetap tegak, lalu berdiri lagi sambil tumit diangkat kembali, kemudian perlahan-lahan tumit diturunkan sambil berdiri tegak kembali.' },
                        { text: '5) Sikap awal: berbaring terlentang, kedua lutut ditekuk, kedua lengan di samping badan dan relaks.' },
                        { text: '6) Kegiatan pernafasan diafragma: tarik napas melalui hidung dan keluarkan di antara celah-celah bibir, dilakukan selama 1,5 menit. Pada saat menarik nafas yang ketiga kalinya, kembangkan dinding perut setinggi mungkin, lalu tahan nafas beberapa detik, lalu tiup perlahan. Aba-aba; tarik... Tiuup... dst...' },
                        { text: '7) Pernafasan badan: tangan diletakkan di dada sampai mencapai pernafasan maksimal 26 – 28 kali per menit' }
                    ]
                },

                { desc: 'N. Latihan Pernafasan Dada dan Pernafasan Perut',
                    detail: [
                        { text: '1) Tangan diletakkan di atas perut, untuk pernafasan perut, kemudian kombinasikan antara pernafasan dada dan pernafasan perut. Tarik... Tahan... Hitung... 1... 2... 3...... tiuup.' },
                        { text: '2) Untuk latihan diafragma atau latihan pernafasan dada hanya untuk pemula, tetapi untuk latihan pernafasan dada dan perut harus dilakukan dengan benar-benar' }
                    ]
                },

                { desc: 'O. Latihan Kontraksi dan Relaksasi',
                    detail: [
                        { text: '1) Tidur terlentang, kedua tungkai lurus dan terbuka sedikit, tangan dikepalkan.' },
                        { text: '2) Gerakan kaki ditekankan, tangan dikepal, kempiskan perut, kerutkan dubur dan tahan nafas, begitu aba-aba kerutkan,... tahan lemaskan, tangan dibuka. Aba-aba Tegang... Lemas... lakukan sebanyak 8 kali.' },
                        { text: '3) Sikap tubuh berbaring terlentang, kedua lutut ditekuk, kedua lengan di samping badan dan relaks.' },
                        { text: '4) Angkat badan dengan mengangkat bahu, letakkan dagu di atas dada dan lihat ke arah perut.' },
                        { text: '5) Tahan beberapa saat, kemudian kembali ke sikap awal dan relaks kembali, lakukan sampai hitungan 8 kali.' }
                    ]
                },

                { desc: 'P. Pendinginan: Usia Kehamilan 31 – 36 Minggu',
                    detail: [
                        { text: '1) Tidur miring ke kiri, arah disesuaikan dengan letak punggung bayi (puka/puki) kaki sesuai arah miring di belakang bawah diluruskan, kaki sebelah atas diganjal bantal sambil ditekuk.' },
                        { text: '2) Tangan yang bawah diletakkan di belakang, tangan sebelah atas ke depan dilipat, diganjal bantal, mata dipejamkan lakukan relaksasi.' },
                        { text: '3) Lemaskan seluruh tubuh, pejamkan mata dan berusaha mengatasi suara dari luar.' },
                        { text: '4) Latihan ini dilakukan selama 5 menit' }
                    ]
                },

                { desc: 'Q. Latihan Untuk Kehamilan Usia 37 – 40 Minggu',
                    detail: [
                        { text: '1) Kegiatan: Warming Up, Teknik Pernafasan dan Peregangan Paha diperjelas.' },
                        { text: '2) Latihan Kontraksi dan Relaksasi; Posisi Lithotomi latihan dalam pernafasan.' },
                        { text: '3) Aba-aba; tarik... tahan... (disimpan dalam rongga dada) tutup mulut rapat-rapat' },
                        { text: '4) Latihan pernafasan untuk mengejan',
                            subDetail: [
                                '- Posisi lithotomy',
                                '- Buka mulut secukupnya, tarik nafas dalam semaksimal mungkin, kemudian tutup mulut sambil angkat badan dan dagu diletakkan di dada, lalu mengejan seperti gerakan BAB, gerakannya ke bawah badan dan ke depan, setelah lelah, lalu ke posisi semula, lakukan 3 – 4 kali dengan interval 2 menit.',
                                '- Hitung kembali seluruh vital sign ibu di akhir gerakan'
                            ]
                        }
                    ]
                },

                { desc: 'R. Akhiri setiap tindakan dengan mengucapkan hamdallah' },
                { desc: 'S. Ucapkan terima kasih dan perhatikan kondisi fisik klien' },
                { desc: 'T. Persilahkan Ibu untuk minum air putih' },
                { desc: 'U. Bereskan kembali peralatan yang telah dipergunakan.' },
                { desc: 'V. Cucilah tangan setelah menyelesaikan pekerjaan' }
            ]
        },
        {
            step: 'Evaluasi',
            desc: 'Pantau respon pasien selama dan setelah tindakan dilakukan'
        },
        {
            step: 'Dokumentasi',
            desc: 'Dokumentasikan tindakan yang dilakukan dalam Status pasien'
        }
    ],
    dokumenTerkait: ['Status pasien'],
    instalasiTerkait: ['Instalasi Rawat Jalan', 'Instalasi Rawat Inap ( Ruang Kebidanan )']
    },
    {
    id: 1218,
    title: 'Penanganan Perdarahan Post Partum Primer',
    category: 'tindakan',
    subCategory: 'maternitas',
    description: 'Penanganan perdarahan setelah melahirkan lebih dari 500 cc atau disertai tanda syok.',
    icon: 'fa-procedures',
    tags: ['Perdarahan Post Partum', 'Obstetri', 'Kegawatdaruratan', 'Maternitas'],
    noDokumen: '445/SPO.4826/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Memberikan pertolongan pada perdarahan per vaginam setelah melahirkan lebih dari 500 cc atau perdarahan disertai dengan gejala dan tanda-tanda syok.',
    tujuan: 'Sebagai acuan penerapan langkah-langkah dalam menangani pasien perdarahan post partum, untuk menstabilisasi kondisi pasien untuk segera dirujuk ke Rumah Sakit',
    kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019.',
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan alat',
                    detail: [
                        { text: 'Alat Pelindung Diri (Masker, Kacamata Safety, handscoon, barakschort, sepatu boat)' },
                        { text: 'Obat-obatan anti perdarahan dan urotonica, obat anestesi' },
                        { text: 'Set infuse: infuse set/blood set, IV cateter 16/18, cairan infuse, plester' },
                        { text: 'Tampon, kassa steril' },
                        { text: 'DC Set: Folley cateter, urine bag, disp 10 cc, aquabidest, handscoen steril' },
                        { text: 'Lampu sorot' },
                        { text: 'Hecting set, speculum' },
                        { text: 'O2 set sesuai kebutuhan pasien' }
                    ]
                },
                {
                    desc: 'Persiapan pasien',
                    detail: [
                        { text: 'Pasien diberi penjelasan tentang tujuan dan prosedur tindakan yang akan dilakukan.' },
                        { text: 'Keluarga/penanggung jawab pasien menandatangani surat izin tindakan' }
                    ]
                },
                {
                    desc: 'Persiapan lingkungan',
                    detail: [
                        { text: 'Skherm ditutup (bila perlu) agar privasi pasien terjaga, bedplang tempat tidur pasien dibuka atau ditutup sesuai dengan kebutuhan' }
                    ]
                }
            ]
        },
        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'A. Segera setelah plasenta dan selaput ketuban dilahirkan, lakukan massage uterus supaya berkontraksi (selama maksimal 15 detik) untuk mengeluarkan gumpalan darah. Sambil melakukan masase fundus uteri, periksa plasenta dan selaput ketuban untuk memastikan plasenta utuh dan lengkap.' },
                { desc: 'B. Jika perdarahan terus terjadi dan uterus teraba berkontraksi baik, berikan 10 unit oksitosin IM' },
                { desc: 'C. Jika kandung kemih ibu bisa dipalpasi, pasang kateter ke dalam kantung kemih.' },
                { desc: 'D. Periksa laserasi pada perineum, vagina dan serviks dengan seksama menggunakan lampu yang terang. Jika sumber perdarahan sudah diidentifikasi, klem dengan forcep arteri dan jahit laserasi Dengan menggunakan anestesi lokal (lidokain 1%)' },
                { desc: 'E. Jika uterus mengalami atoni, atau perdarahan terus terjadi, berikan masase uterus untuk mengeluarkan gumpalan darah.' },
                { desc: 'F. Periksa lagi apakah plasenta utuh, usap vagina dan ostium serviks untuk menghilangkan jaringan plasenta atau selaput ketuban yang tertinggal.' },
                { desc: 'G. Jika kandung kemih ibu bisa dipalpasi, pasang kateter ke dalam kandung kemih' },
                { desc: 'H. Lakukan kompresi bimanual internal maksimal lima menit atau hingga perdarahan bisa dikendalikan dan uterus berkontraksi dengan baik.' },
                { desc: 'I. Anjurkan keluarga untuk memulai mempersiapkan kemungkinan rujukan', },
                { desc: 'J. Jika perdarahan dapat dikendalikan dan uterus berkontraksi dengan baik:',
                    detail: [
                        { text: '1) Teruskan kompresi bimanual selama 1 – 2 menit atau lebih' },
                        { text: '2) Keluarkan tangan dari vagina dengan hati-hati' },
                        { text: '3) Pantau kala empat persalinan dengan seksama, termasuk sering melakukan masase uterus untuk memeriksa atoni, mengamati perdarahan dari vagina, tekanan darah dan nadi' }
                    ]
                 },
                { desc: 'K. Jika perdarahan tidak terkendali dan uterus tidak berkontraksi dalam waktu lima menit setelah dimulainya kompresi bimanual pada uterus maka, keluarkan tangan dari vagina dengan hati-hati. Jika tidak ada tanda hipertensi pada ibu, berikan metergin 0,2 mg IM' },
                { desc: 'L. Mulai IV Ringer Laktat 500 cc + 20 Unit Oksitosin menggunakan jarum berlubang besar (16 atau 18 G) dengan teknik aseptik. Berikan 500 cc pertama secepat mungkin, dan teruskan dengan IV Ringer Laktat + 20 Unit Oksitosin yang kedua.' },
                { desc: 'M. Jika uterus tetap atoni dan/atau perdarahan terus berlangsung, ulangi kompresi bimanual internal',
                    detail: [
                        { text: '1) Jika uterus berkontraksi, lepaskan tangan anda perlahan-lahan dan pantau kala empat persalinan dengan cermat' },
                        { text: '2) Jika uterus tidak berkontraksi, rujuk segera ke tempat dimana operasi bias dilakukan' }
                    ]

                 },
                { desc: 'N. Bila perdarahan tetap berlangsung dan kontraksi uterus tetap tidak ada, maka kemungkinan terjadi rupture uteri (syok cepat terjadi tidak sebanding dengan darah yang nampak keluar, abdomen teraba keras dan fundus mulai naik), lakukan kolaborasi dengan Obgyn' },
                { desc: 'O. Bila kompresi bimanual pada uterus tidak berhasil, cobalah kompresi aorta. Cara ini dilakukan pada keadaan darurat, sementara penyebab perdarahan sedang dicari.' },
                { desc: 'P. Perkirakan jumlah darah yang keluar dan cek dengan teratur denyut nadi, pernafasan dan tekanan darah.' },
                { desc: 'Q. Siapkan darah untuk transfusi bila Hb < 8 gr%, sebelum darah tersedia berikan cairan pengganti darah (hemacel, fimahes)' },
                { desc: 'R. Buat catatan yang seksama tentang semua penilaian tindakan yang dilakukan dan pengobatan yang dilakukan' }
            ]
        },
        {
            step: 'Evaluasi',
            items: [
                { desc: 'A. Observasi dan hitung jumlah darah yang keluar.' },
                { desc: 'B. Observasi gejala-gejala syok hypovolemik (tekanan darah menurun, nadi melemah dan cepat, kulit dingin dan pasien gelisah).' }
            ]
        },
        {
            step: 'Dokumentasi',
            desc: 'Dokumentasikan tindakan yang dilakukan dalam status pasien'
        }
    ],
    dokumenTerkait: ['Status pasien'],
    instalasiTerkait: [
        'Instalasi Gawat Darurat (Kebidanan)',
        'Instalasi Rawat Inap (Kebidanan)',
        'Instalasi Anestesi dan Perawatan Intensif',
        'Instalasi Bedah Sentral'
    ]
    },
    {
    id: 1219,
    title: 'Penanganan Perdarahan Post Partum Sekunder',
    category: 'tindakan',
    subCategory: 'maternitas',
    description: 'Penanganan perdarahan pervaginam atau lochea berlebihan pada 24 jam hingga 42 hari setelah persalinan.',
    icon: 'fa-procedures',
    tags: ['Perdarahan Post Partum', 'Obstetri', 'Kegawatdaruratan', 'Maternitas'],
    noDokumen: '445/SPO.4827/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Memberikan pertolongan pada korban dengan perdarahan pervaginum atau lochea berlebihan pada 24 jam – 42 hari setelah persalinan.',
    tujuan: 'Sebagai acuan penerapan langkah-langkah dalam menangani pasien dengan perdarahan post partum sekunder, untuk menstabilisasi kondisi pasien untuk segera mendapat penanganan',
    kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan alat',
                    detail: [
                        { text: 'Alat pelindung diri (Masker, Handscoon, Barak schort)' },
                        { text: 'Obat emergensi' },
                        { text: 'Obat anti perdarahan' },
                        { text: 'Set infuse: infuse set/blood set, IV cateter 16/18, cairan infus' },
                        { text: 'Tampon, kassa steril, speculum' },
                        { text: 'Hecting set' }
                    ]
                },
                {
                    desc: 'Persiapan pasien',
                    detail: [
                        { text: 'Pasien diberi penjelasan tentang tujuan dan prosedur tindakan yang akan dilakukan.' },
                        { text: 'Keluarga/penanggungjawab pasien menandatangani surat ijin tindakan' }
                    ]
                },
                {
                    desc: 'Persiapan lingkungan',
                    detail: [
                        { text: 'Skherm ditutup (bila perlu) agar privasi pasien terjaga, bedplang tempat tidur pasien dibuka atau ditutup sesuai dengan kebutuhan' }
                    ]
                }
            ]
        },
        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'A. Segera setelah plasenta dan selaput ketuban dilahirkan, lakukan massage uterus supaya berkontraksi (selama maksimal 15 detik) untuk mengeluarkan gumpalan darah. Sambil melakukan masase fundus uteri, periksa plasenta dan selaput ketuban untuk memastikan plasenta utuh dan lengkap.' },
                { desc: 'B. Jika perdarahan terus terjadi dan uterus teraba berkontraksi baik, berikan 10 unit oksitosin IM' },
                { desc: 'C. Jika kandung kemih ibu bisa dipalpasi, pasang kateter ke dalam kantung kemih.' },
                { desc: 'D. Periksa laserasi pada perineum, vagina dan serviks dengan seksama menggunakan lampu yang terang. Jika sumber perdarahan sudah diidentifikasi, klem dengan forcep arteri dan jahit laserasi dengan menggunakan anestesi lokal (lidokain 1 %).' },
                { desc: 'E. Jika uterus mengalami atoni, atau perdarahan terus terjadi, berikan masase uterus untuk mengeluarkan gumpalan darah.' },
                { desc: 'F. Periksa lagi apakah plasenta utuh, usap vagina dan ostium serviks untuk menghilangkan jaringan plasenta atau selaput ketuban yang tertinggal.' },
                { desc: 'G. Jika kandung kemih ibu bisa dipalpasi, pasang kateter ke dalam kandung kemih' },
                { desc: 'H. Lakukan kompresi bimanual internal maksimal lima menit atau hingga perdarahan bisa dikendalikan dan uterus berkontraksi dengan baik.' },
                { desc: 'I. Anjurkan keluarga untuk memulai mempersiapkan kemungkinan rujukan' },
                { desc: 'J. Jika perdarahan dapat dikendalikan dan uterus berkontraksi dengan baik:',
                    detail: [
                        { text: '1) Teruskan kompresi bimanual selama 1 – 2 menit atau lebih' },
                        { text: '2) Keluarkan tangan dari vagina dengan hati-hati' },
                        { text: '3) Pantau kala empat persalinan dengan seksama, termasuk sering melakukan masase uterus untuk memeriksa atoni, mengamati perdarahan dari vagina, tekanan darah dan nadi' }
                    ]
                },
                { desc: 'K. Jika perdarahan tidak terkendali dan uterus tidak berkontraksi dalam waktu lima menit setelah dimulainya kompresi bimanual pada uterus maka, keluarkan tangan dari vagina dengan hati-hati. Jika tidak ada tanda hipertensi pada ibu, berikan metergin 0,2 mg IM' },
                { desc: 'L. Mulai IV Ringer Laktat 500 cc + 20 Unit Oksitosin menggunakan jarum berlubang besar (16 atau 18 G) dengan teknik aseptik. Berikan 500 cc pertama secepat mungkin, dan teruskan dengan IV Ringer Laktat + 20 Unit Oksitosin yang kedua.' },
                { desc: 'M. Jika uterus tetap atoni dan/atau perdarahan terus berlangsung, ulangi kompresi bimanual internal',
                    detail: [
                        { text: '1) Jika uterus berkontraksi, lepaskan tangan anda perlahan-lahan dan pantau kala empat persalinan dengan cermat' },
                        { text: '2) Jika uterus tidak berkontraksi, rujuk segera ke tempat dimana operasi bisa dilakukan' }
                    ]
                },
                { desc: 'N. Bila perdarahan tetap berlangsung dan kontraksi uterus tetap tidak ada, maka kemungkinan terjadi rupture uteri (syok cepat terjadi tidak sebanding dengan darah yang nampak keluar, abdomen teraba keras dan fundus mulai naik), lakukan kolaborasi dengan Obgyn' },
                { desc: 'O. Bila kompresi bimanual pada uterus tidak berhasil, cobalah kompresi aorta. Cara ini dilakukan pada keadaan darurat, sementara penyebab perdarahan sedang dicari.' },
                { desc: 'P. Perkirakan jumlah darah yang keluar dan cek dengan teratur denyut nadi, pernafasan dan tekanan darah.' },
                { desc: 'Q. Siapkan darah untuk transfusi bila Hb < 8 gr%, sebelum darah tersedia berikan cairan pengganti darah (hemacel, fimahes)' },
                { desc: 'R. Buat catatan yang seksama tentang semua penilaian tindakan yang dilakukan dan pengobatan yang dilakukan' }
            ]
        },
        {
            step: 'Evaluasi',
            items: [
                { desc: 'A. Observasi dan hitung jumlah darah yang keluar.' },
                { desc: 'B. Observasi gejala-gejala syok hypovolemik (tekanan darah menurun, nadi melemah dan cepat, kulit dingin dan pasien gelisah).' }
            ]
        },
        {
            step: 'Dokumentasi',
            desc: 'Dokumentasikan tindakan yang dilakukan dalam status pasien'
        }
    ],
    dokumenTerkait: ['Status pasien'],
    instalasiTerkait: [
        'Instalasi Gawat Darurat (Kebidanan)',
        'Instalasi Rawat Inap (Kebidanan)',
        'Instalasi Anestesi dan Perawatan Intensif',
        'Instalasi Bedah Sentral'
    ]
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
        icon: 'fa-bandage',
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
    {
    id: 1306,
    title: 'Mengambil Specimen Exudate Secara Swab',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur pengambilan sampel exudate luka menggunakan swab untuk pemeriksaan kultur mikroorganisme.',
    icon: 'fa-vial',
    tags: ['Specimen Exudate', 'Swab Luka', 'Medikal Bedah'],
    noDokumen: '445/SPO.3314/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Mengambil specimen exudate luka secara swab adalah suatu tahapan tindakan mengambil sampel specimen exudate dari seluruh permukaan luka dengan aplikator kapas steril dan media kultur (mengusap permukaan luka) untuk periksaan kultur guna mengetahui microorganisme penyebab infeksi luka dan jenis antibiotika yang sensitif terhadap microorganisme yang dimaksud',
    tujuan: 'Sebagai acuan penerapan langkah-langkah pengambilan specimen exudate secara swab, untuk mengetahui jenis mikroorganisme penyebab infeksi luka dan jenis antibiotika yang dibutuhkan untuk menurunkan beban bakteri di atas permukaan luka.',
    kebijakan: 'Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan alat',
                    detail: [
                        { text: 'Bahan-bahan steril' },
                        { text: 'Tabung kultur steril (dg swab individual) 1 set' },
                        { text: 'Instrumen GV set steril berisi:' },
                        { text: 'Gunting jaringan tajam 1 buah' },
                        { text: 'Pinset anatomis 2 buah' },
                        { text: 'Pinset chirurgis 1 buah' },
                        { text: 'Kom 2 buah' },
                        { text: 'Sarung tangan steril 1 pasang' },
                        { text: 'NaCl 0,9% 500 cc dan transofix 1 buah' },
                        { text: 'Kasa steril secukupnya' },
                        { text: 'Bahan-bahan non steril' },
                        { text: 'Sarung tangan bersih 1 pasang' },
                        { text: 'Alkohol swab / Convacare remover wipe' },
                        { text: 'Underpad/perlak 1 buah' },
                        { text: 'Label untuk tabung culture' },
                        { text: 'Wash bensin (jika diperlukan)' },
                        { text: 'Surat permintaan periksaan kulture specimen luka yg ditandatangani dokter' },
                        { text: 'Gown/apron plastik 1 buah' },
                        { text: 'Nierbeken/bengkok berisi larutan enzymatik yang sudah diencerkan: 1 buah' },
                        { text: 'Nierbeken/bengkok, kantung sampah 1 buah' },
                        { text: 'Plester' }
                    ]
                },
                {
                    desc: 'Persiapan pasien',
                    detail: 'Beritahu pasien dan/ keluarga tentang tujuan dan prosedur pengambilan specimen exudate secara swab'
                },
                {
                    desc: 'Persiapan lingkungan',
                    detail: 'Siapkan lingkungan sekitar pasien dengan memasang skherm atau menutup tirai jendela/pintu kamar pasien agar privasi pasien terjaga'
                }
            ]
        },
        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'A. Ucapkan Basmallah' },
                { desc: 'B. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                { desc: 'C. Lakukan verifikasi identitas pasien dengan cara mencocokan nama pada rekam medik pasien dengan nama yang tertera pada gelang identitas pasien' },
                { desc: 'D. Periksa program pengambilan specimen exudate dan permintaan dokter untuk kultur exudate.' },
                { desc: 'E. Bawa peralatan ke dekat pasien.' },
                { desc: 'F. Atur posisi pasien senyaman mungkin yang memudahkan pengambilan kultur exudate' },
                { desc: 'G. Pakai gown/apron plastik dan sarung tangan (Lihat SPO pemakaian sarung tangan umum PPI)' },
                { desc: 'H. Tempatkan kantung sampah di dekat area kerja.' },
                { desc: 'I. Letakkan underpad di bawah area luka.' },
                { desc: 'J. Usapkan alkohol swab / Convacare remover pada plester yang menempel di kulit pasien.' },
                { desc: 'K. Lepaskan balutan secara hati-hati. Bila kasa lengket pada luka, basahi kasa dengan Normal Saline sampai dapat dilepas dengan mudah. Buang kassa yang kotor ke dalam kantung sampah.' },
                { desc: 'L. Lepaskan sarung tangan (Lihat SPO melepas sarung tangan PPI)' },
                { desc: 'M. Kenakan sarung tangan steril (Lihat SPO pemakaian sarung tangan steril PPI)' },
                { desc: 'N. Kaji jumlah, jenis dan bau cairan luka.' },
                { desc: 'O. Putar penutup tabung swab kultur dan lepaskan swab dari tabung kultur, pertahankan agar bagian dalam tidak terkontaminasi' },
                { desc: 'P. Usapkan ujung aplikator swab di permukaan luka secara hati-hati dengan cara memilin batangnya dan lakukan 10 kali usapan yang meliputi seluruh permukaan luka. Gunakan aplikator swab lain bila diperlukan untuk mengambil specimen dari bagian/sisi luka yang lain (dengan prosedur yang sama).' },
                { desc: 'Q. Masukkan ujung aplikator swab ke dalam tabung kultur secara hati-hati agar tidak menyentuh bagian luar tabung. Celupkan ujung aplikator swab sampai terendam media. Putar kembali penutupnya rapat-rapat.' },
                { desc: 'R. Letakkan tabung kultur tetap dalam posisi tegak.' },
                { desc: 'S. Rawat luka sesuai dengan prosedur perawatan luka yang berlaku.' },
                { desc: 'T. Letakkan instrumen yang telah terpakai dan kotor di dalam bengkok berisi larutan enzymatik yang sudah diencerkan, rendam instrumen dalam larutan enzymatik selama 10-15 menit (Lihat SPO Dekontaminasi PPI)' },
                { desc: 'U. Bersihkan peralatan dan rapihkan kembali pada tempatnya.' },
                { desc: 'V. Lepaskan sarung tangan (Lihat SPO melepas sarung tangan PPI)' },
                { desc: 'W. Lepaskan gown/apron plastik' },
                { desc: 'X. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                { desc: 'Y. Berikan label pada tabung kulture yang meliputi: nama klien, nomor register, ruang perawatan, tanggal, jam, dan sifat/jenis specimen.' },
                { desc: 'Z. Kirim specimen exudate ke laboratorium sedikitnya dalam 20 menit dan lampirkan surat permintaan periksaan laboratorium yang sudah ditandatangani dokter.' }
            ]
        },
        {
            step: 'Evaluasi',
            desc: 'Pantau respon pasien selama dan setelah perawatan luka'
        },
        {
            step: 'Dokumentasi',
            desc: 'Dokumentasikan tindakan yang telah dilakukan dalam rekam medik pasien: tentang pengambilan specimen, penampilan luka dan diskripsi cairan luka'
        }
    ],
    dokumenTerkait: ['Status pasien'],
    instalasiTerkait: [
        'Instalasi Gawat Darurat',
        'Instalasi Rawat Jalan',
        'Instalasi Rawat Inap',
        'Instalasi Pelayanan Intensif',
        'Instalasi Bedah Sentral'
    ]
    },
    {
    id: 1307,
    title: 'Mengambil Specimen Exudate Melalui Aspirasi Blister',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur pengambilan specimen exudate dari blister (lepuhan) menggunakan syringe steril untuk pemeriksaan kultur.',
    icon: 'fa-syringe',
    tags: ['Specimen Exudate', 'Aspirasi Blister', 'Perawatan Luka', 'Medikal Bedah'],
    noDokumen: '445/SPO.3315/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Mengambil specimen exudates luka melalui aspirasi blister adalah urutan langkah mengambil sampel specimen exudate dari blister (lepuhan) dengan syringe steril untuk periksaan kultur guna mengetahui microorganisme penyebab infeksi luka dan jenis antibiotika yang sensitif terhadap microorganisme yang dimaksud',
    tujuan: 'Sebagai acuan penerapan langkah-langkah pengambilan specimen exudate melalui aspirasi blister untuk mengetahui jenis mikroorganisme penyebab infeksi luka dan jenis antibiotika yang dibutuhkan untuk membunuh mikroorganisme dalam luka',
    kebijakan: 'Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan alat',
                    detail: [
                        { text: 'Instrumen GV Set steril berisi:',
                            subDetail: [
                                '- Gunting jaringan tajam 1 buah',
                                '- Pinset anatomis 2 buah',
                                '- Pinset chirurgis 1 buah',
                                '- Kom 2 buah'
                            ]

                         },
                        { text: 'Nierbeken/bengkok berisi larutan enzymatik yang sudah diencerkan: 1 buah' },
                        { text: 'Handscoon/Sarung tangan sesuai ukuran: 2 pasang (1 pasang Non-Steril, 1 pasang Steril)' },
                        { text: 'Kassa steril secukupnya' },
                        { text: 'Syringe 3 ml + needle 23G atau vacutainer set' },
                        { text: 'Alcohol swab / Convacare remover wipe' },
                        { text: 'Nierbeken/bengkok, kantung sampah infeksius' },
                        { text: 'Underpad/perlak 1 buah' },
                        { text: 'Label untuk tabung culture & pulpen' },
                        { text: 'Surat permintaan pemeriksaan kultur exudate yang ditandatangani dokter' }
                    ]
                },
                {
                    desc: 'Persiapan pasien',
                    detail: [
                        { text: 'Beritahu pasien dan/ keluarga tentang tujuan dan prosedur pengambilan specimen exudates melalui blister.' }
                    ]
                },
                {
                    desc: 'Persiapan lingkungan',
                    detail: [
                        { text: 'Siapkan lingkungan sekitar pasien dengan memasang skerm atau menutup tirai jendela / pintu kamar pasien agar privasi pasien terjaga' }
                    ]
                }
            ]
        },
        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'A. Ucapkan Basmallah' },
                { desc: 'B. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                { desc: 'C. Lakukan verifikasi identitas pasien dengan cara mencocokan nama pada rekam medik pasien dengan nama yang tertera pada gelang identitas pasien' },
                { desc: 'D. Periksa permintaan pemeriksaan specimen exudate atau kultur exudate' },
                { desc: 'E. Bawa peralatan ke dekat pasien' },
                { desc: 'F. Atur posisi klien senyaman mungkin yang memudahkan pengambilan exudate' },
                { desc: 'G. Pakai gown/apron plastik dan sarung tangan (Lihat SPO pemakaian sarung tangan umum PPI)' },
                { desc: 'H. Tempatkan kantung sampah di dekat area kerja' },
                { desc: 'I. Letakkan underpad di bawah area luka dan blister' },
                { desc: 'J. Usapkan alkohol swab/adhesive remover pada plester balutan yang menempel di kulit pasien' },
                { desc: 'K. Lepaskan balutan kotor dan buang ke dalam kantung sampah' },
                { desc: 'L. Lepaskan sarung tangan (Lihat SPO melepas sarung tangan PPI)' },
                { desc: 'M. Buka instrumen GV Set steril, masukkan syringe 3 ml + needle 23G atau vacutainer set' },
                { desc: 'N. Kenakan sarung tangan steril (Lihat SPO pemakaian sarung tangan steril PPI)' },
                { desc: 'O. Kaji blister (ukuran, lokasi, warna, tanda inflamasi) dan luka (ukuran, warna dasar)' },
                { desc: 'P. Usapkan alkohol swab pada blister dan sekitarnya lalu biarkan alkohol menguap' },
                { desc: 'Q. Ambil syringe + needle dan pastikan tidak ada udara dalam syringe atau vacutainer set' },
                { desc: 'R. Aspirasi blister dengan posisi needle sejajar kulit klien. Aspirasi exudate secukupnya' },
                { desc: 'S. Berikan label pada syringe atau vacutainer yang berisi exudate meliputi: nama klien, nomor register, ruang perawatan, tanggal, jam, dan sifat/jenis specimen' },
                { desc: 'T. Rawat luka sesuai dengan prosedur perawatan luka yang berlaku' },
                { desc: 'U. Segera kirim specimen ke laboratorium sedikitnya dalam 20 menit dan lampirkan surat permintaan pemeriksaan kultur exudate' },
                { desc: 'V. Cuci peralatan kotor dan merapikan kembali di tempatnya semula' },
                { desc: 'W. Lepaskan sarung tangan (Lihat SPO Melepas sarung tangan PPI)' },
                { desc: 'X. Lepaskan gown/apron plastik' },
                { desc: 'Y. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' }
            ]
        },
        {
            step: 'Evaluasi',
            desc: 'Pantau respon pasien selama dan setelah perawatan luka'
        },
        {
            step: 'Dokumentasi',
            desc: 'Dokumentasikan tindakan yang telah dilakukan dalam rekam medik pasien: tentang aspirasi exudate melalui blister, penampilan luka & deskripsi cairan luka'
        }
    ],
    dokumenTerkait: ['Status Pasien'],
    instalasiTerkait: [
        'Instalasi Gawat Darurat',
        'Instalasi Rawat Jalan',
        'Instalasi Rawat Inap',
        'Instalasi Pelayanan Intensif',
        'Instalasi Bedah Sentral'
    ]
    },
    {
    id: 1308,
    title: 'Irigasi Luka dan Packing Luka',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur membersihkan luka dan melakukan packing untuk mengurangi dead space serta mendukung penyembuhan luka.',
    icon: 'fa-hand-holding-medical',
    tags: ['Irigasi Luka', 'Packing Luka', 'Perawatan Luka', 'Medikal Bedah'],
    noDokumen: '445/SPO.3316/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertianFormat: 'paragraph',
    pengertian: 'Irigasi luka adalah rangkaian tindakan membersihkan dasar luka yang membentuk goa (undermining) atau terowongan (tunneling) dari benda asing/debris dan exudate supuratif menggunakan cairan fisiologis pada tekanan tertentu.\nPacking Luka adalah menempatkan balutan absorbent dressing di dasar luka yang dalam (sinus tract atau tunneling) guna mengurangi dead space dan menunjang fase proliferasi dari penyembuhan luka.',
    tujuan: 'Sebagai acuan penerapan langkah-langkah irigasi dan packing luka untuk:\nMembersihkan dasar luka dari benda asing atau exudate yang terakumulasi sehingga menstimulasi pertumbuhan jaringan granulasi.\nMengurangi dead space luka.\nMengurangi kontaminasi mikroorganisme\nMemberikan kenyamanan fisik dan psikologis kepada klien.',
    kebijakan: 'Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan Alat',
                    detail: [
                        {
                            text: 'Instrumen GV Set steril berisi:',
                            subDetail: [
                                '- Gunting jaringan tajam 1 buah',
                                '- Pinset anatomis 2 buah',
                                '- Pinset chirurgis 1 buah',
                                '- Kom 2 buah',
                                '- Knop sonde 1 buah',
                                { text: '- Feeding tube 5 - 8 Fr atau catheter 6 – 10 Ch 1 buah', formula: false },
                                '- Syringe 30 ml atau 50 ml 1 buah',
                                { text: '- Needle 19G 1-2 buah', formula: false }
                            ]
                        },
                        { text: 'Nierbeken/bengkok berisi larutan enzymatik yang sudah diencerkan: 1 buah' },
                        { text: 'Handscoon/Sarung tangan sesuai ukuran: 3 pasang (2 pasang Non-Steril, 1 pasang Steril)' },
                        { text: 'NaCl 0,9% 500 ml dan Transofix 1 buah' },
                        { text: 'Topikal terapi sesuai kondisi luka (jika perlu)' },
                        { text: 'Balutan (absorbent dressing) sesuai dengan kondisi luka (misalnya: Foam, Hydrocoloid, Alginat)' },
                        { text: 'Kassa segi empat (ukuran sesuai kebutuhan)' },
                        { text: 'Cotton bud' },
                        { text: 'Alkohol swab / Convacare remover wipe' },
                        { text: 'Gown/apron plastik 1 buah' },
                        { text: 'Underpad/perlak 1 buah' },
                        { text: 'Plester non-woven' },
                        { text: 'Gunting verband 1 buah' },
                        { text: 'Nierbeken/bengkok, kantung sampah' }
                    ]
                },
                {
                    desc: 'Persiapan Pasien',
                    detail: [
                        { text: 'Beritahu pasien dan/ keluarga tentang tujuan dan prosedur perawatan luka yang akan dilakukan' }
                    ]
                },
                {
                    desc: 'Persiapan Lingkungan',
                    detail: [
                        { text: 'Siapkan lingkungan sekitar pasien dengan memasang skerm atau menutup tirai jendela / pintu kamar pasien agar privasi pasien terjaga' }
                    ]
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
                { desc: 'G. Pakai gown/apron plastik dan sarung tangan (Lihat SPO pemakaian sarung tangan umum PPI)' },
                { desc: 'H. Tempatkan kantung sampah di dekat area kerja' },
                { desc: 'I. Letakkan underpad di bawah area luka' },
                { desc: 'J. Usapkan alkohol swab/adhesive remover pada plester balutan yang menempel di kulit pasien' },
                { desc: 'K. Lepaskan/angkat perekat balutan secara hati-hati' },
                { desc: 'L. Basahi kasa (balutan primer) dengan NaCl 0,9% bila kasa lengket di dasar luka' },
                { desc: 'M. Lepaskan kasa secara perlahan dan buang kasa ke dalam kantung sampah' },
                { desc: 'N. Lepaskan sarung tangan (Lihat SPO Melepas sarung tangan PPI)' },
                { desc: 'O. Buka instrumen GV Set steril' },
                { desc: 'P. Kenakan sarung tangan steril (Lihat SPO Pemakaian sarung tangan steril PPI)' },
                { desc: 'Q. Kaji luka tentang jumlah, jenis, viskositas dan bau exudate; warna dasar luka; ukuran luka (panjang, lebar, kedalaman dalam centimeter); jaringan granulasi/fibrorik, dan tanda infeksi' },
                { desc: 'R. Bilas luka dengan NaCl 0,9% dan gosok permukaan luka secara lembut dengan ujung jari sampai bersih' },
                { desc: 'S. Isi syringe dengan NaCl 0,9% dan hubungkan feeding tube/kateter di ujungnya' },
                { desc: 'T. Masukkan ujung feeding tube/kateter ke dasar sinus tract atau undermining lalu bilas dengan NaCl 0,9% (dorong piston syringe). Lakukan berulang-ulang sampai cairan bilasan luka jernih. Jika perlu bilas juga dengan metronidazole cair' },
                { desc: 'U. Keringkan luka dengan cara ditekan ringan dan lembut (bukan digosok) dengan kasa' },
                { desc: 'V. Kaji jumlah, jenis dan bau exudate; warna dasar luka; kedalaman undermining, sinus tract, ukuran luka; jaringan granulasi, dan tanda-tanda infeksi. Bersihkan kulit sekitar luka dengan alkohol swab sampai radius ± 5 cm dari tepi luka' },
                { desc: 'W. Aplikasikan topikal terapi sesuai kondisi luka di permukaan luka secara merata. Jika ada rongga dalam, isi rongga sampai ½ kedalamannya' },
                { desc: 'X. Aplikasikan balutan (absorbent dressing) sesuai dengan kondisi luka ke dalam sinus tract/undermining. Jangan terlalu padat. Sisakan ujungnya ± 2 cm di luar lubang sinus tract' },
                { desc: 'Y. Tutup permukaan luka dengan lembaran absorbent dressing yang digunakan' },
                { desc: 'Z. Tutup balutan dengan beberapa lapis kasa dan tutup seluruh permukaan kasa dengan plester non-woven' },
                { desc: 'AA. Letakkan instrumen yang telah terpakai dan kotor di dalam bengkok berisi larutan enzymatik yang sudah diencerkan, rendam instrumen selama 10-15 menit (Lihat SPO Dekontaminasi PPI)' },
                { desc: 'BB. Angkat underpad dan rapihkan pasien' },
                { desc: 'CC. Ucapkan Hamdalah' },
                { desc: 'DD. Cuci peralatan kotor dan merapikan kembali di tempatnya semula' },
                { desc: 'EE. Lepaskan sarung tangan (Lihat SPO Melepas sarung tangan PPI)' },
                { desc: 'FF. Lepaskan gown/apron plastik' },
                { desc: 'GG. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' }
            ]
        },
        {
            step: 'Evaluasi',
            desc: 'Pantau respon pasien selama dan setelah perawatan luka'
        },
        {
            step: 'Dokumentasi',
            desc: 'Dokumentasikan tindakan yang telah dilakukan dalam rekam medik pasien: tentang penampilan luka, exudate dan penggantian balutan luka.'
        }
    ],
    dokumenTerkait: ['Status Pasien'],
    instalasiTerkait: [
        'Instalasi Gawat Darurat',
        'Instalasi Rawat Jalan',
        'Instalasi Rawat Inap',
        'Instalasi Pelayanan Intensif',
        'Instalasi Bedah Sentral',
        'Instalasi Haemodialisa'
    ]
    },
    {
    id: 1309,
    title: 'Autolytic Debridement (Menggunakan Balutan Hydrocolloid)',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur debridement jaringan nekrotik secara alami menggunakan balutan hydrocolloid.',
    icon: 'fa-bandage',
    tags: ['Autolytic Debridement', 'Hydrocolloid', 'Perawatan Luka', 'Medikal Bedah'],
    noDokumen: '445/SPO.3317/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Autolytic Debridement adalah proses melunakkan dan merusak (degradasi) jaringan nekrotik di atas permukaan luka dengan menggunakan sel-sel darah putih dari tubuh sendiri dan enzim proteolitik, fibrinolitik dan kolagenolitik. Ini merupakan bentuk debridemen selektif yang menimbulkan degradasi alami dari jaringan mati.',
    tujuan: 'Sebagai acuan penerapan langkah-langkah autolytic debridement untuk:\nMembuang jaringan nekrotik dan mendorong proses granulasi jaringan luka.\nMemberikan kenyamanan fisik dan psikologis kepada pasien.',
    kebijakan: 'Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan alat',
                    detail: [
                        {
                            text: 'Instrumen GV Set steril berisi:',
                            subDetail: [
                                '- Gunting jaringan tajam 1 buah',
                                '- Pinset anatomis 2 buah',
                                '- Pinset chirurgis 1 buah',
                                '- Kom 2 buah'
                            ]
                        },
                        { text: 'Nierbeken/bengkok berisi larutan enzymatik yang sudah diencerkan: 1 buah' },
                        { text: 'Handscoon/Sarung tangan sesuai ukuran: 2 pasang (1 pasang Non-Steril, 1 pasang Steril)' },
                        { text: 'Larutan NaCl 0,9% 500 ml dalam botol dan transofix 1 buah' },
                        { text: 'Alcohol swab / Convacare remover wipe' },
                        { text: 'Gunting verband 1 buah' },
                        { text: 'Topikal terapi' },
                        { text: 'Pembalut/dressing luka sesuai dengan kondisi' },
                        { text: 'Kassa segi empat (ukuran sesuai kebutuhan)' },
                        { text: 'Gown/apron plastik 1 buah' },
                        { text: 'Underpad/perlak 1 buah' },
                        { text: 'Nierbeken/bengkok, kantung sampah medis' }
                    ]
                },
                {
                    desc: 'Persiapan pasien',
                    detail: [
                        { text: 'Beritahu pasien dan/ keluarga tentang tujuan dan prosedur perawatan luka yang akan dilakukan' }
                    ]
                },
                {
                    desc: 'Persiapan lingkungan',
                    detail: [
                        { text: 'Siapkan lingkungan sekitar pasien dengan memasang skerm atau menutup tirai jendela / pintu kamar pasien agar privasi pasien terjaga' }
                    ]
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
                { desc: 'G. Pakai gown/apron plastik dan sarung tangan (Lihat SPO pemakaian sarung tangan umum PPI)' },
                { desc: 'H. Tempatkan kantung sampah di dekat area kerja' },
                { desc: 'I. Letakkan underpad di bawah area luka' },
                { desc: 'J. Usapkan alkohol swab/adhesive remover pada plester balutan yang menempel di kulit pasien' },
                { desc: 'K. Lepaskan/angkat perekat balutan secara hati-hati' },
                { desc: 'L. Basahi kassa (balutan primer) dengan NaCl 0,9% bila kassa lengket di dasar luka' },
                { desc: 'M. Buang kasa pembalut luka ke dalam kantung sampah' },
                { desc: 'N. Lepaskan sarung tangan (Lihat SPO melepas sarung tangan PPI)' },
                { desc: 'O. Buka instrumen GV Set steril' },
                { desc: 'P. Kenakan sarung tangan steril (Lihat SPO pemakaian sarung tangan steril PPI)' },
                { desc: 'Q. Bilas luka dengan NaCl 0,9% dan gosok jaringan nekrosis secara lembut dengan ujung jari sampai bersih' },
                { desc: 'R. Keringkan luka secara lembut dengan kasa (bukan digosok)' },
                { desc: 'S. Bersihkan kulit sekitar luka sampai radius ± 5 cm dari tepi luka dengan alkohol swab' },
                { desc: 'T. Kaji luka: ukuran (panjang, lebar, kedalaman dalam centimeter), warna dasar, bau, exudate, debris dan tanda infeksi' },
                { desc: 'U. Aplikasikan Hydrogel Paste atau Zink' },
                { desc: 'V. Tutup luka dengan pembalut/dressing luka (tepi pembalut melingkupi 3 - 4 cm dari tepi luka)' },
                { desc: 'W. Rekatkan dengan plester' },
                { desc: 'X. Letakkan instrumen yang telah terpakai dan kotor di dalam bengkok berisi larutan enzymatik yang sudah diencerkan, rendam instrumen selama 10-15 menit (Lihat SPO Dekontaminasi PPI)' },
                { desc: 'Y. Angkat underpad dan rapihkan pasien' },
                { desc: 'Z. Ucapkan Hamdalah' },
                { desc: 'AA. Cuci peralatan kotor dan merapikan kembali di tempatnya semula' },
                { desc: 'BB. Lepaskan sarung tangan (Lihat SPO Melepas sarung tangan PPI)' },
                { desc: 'CC. Lepaskan gown/apron plastik' },
                { desc: 'DD. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' }
            ]
        },
        {
            step: 'Evaluasi',
            desc: 'Pantau respon pasien selama dan setelah perawatan luka'
        },
        {
            step: 'Dokumentasi',
            desc: 'Dokumentasikan tindakan yang telah dilakukan dalam rekam medik pasien: tentang penampilan luka, exudate dan penggantian balutan luka & rencana ganti balutan berikutnya.'
        }
    ],
    dokumenTerkait: ['Status Pasien'],
    instalasiTerkait: [
        'Instalasi Gawat Darurat',
        'Instalasi Rawat Jalan',
        'Instalasi Rawat Inap',
        'Instalasi Pelayanan Intensif',
        'Instalasi Bedah Sentral'
    ]
    },
    {
    id: 1310,
    title: 'Applikasi Parcel Dressing',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur aplikasi balutan parcel dressing menggunakan hydrocolloid untuk melindungi luka atau fistula dan mengelola exudate.',
    icon: 'fa-bandage',
    tags: ['Parcel Dressing', 'Perawatan Luka', 'Fistula', 'Medikal Bedah'],
    noDokumen: '445/SPO.3318/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Parcel dressing adalah balutan yang dibuat dari lembaran hydrocolloid yang ditempelkan di kulit sekitar luka atau perifistula dan lembaran plastik diaplikasikan di atas lembaran hydrocolloid sehingga balutan membentuk bungkus parcel.',
    tujuan: 'Sebagai acuan penerapan langkah-langkah menggunakan parcel dressing untuk:\nMelindungi kulit sekitar luka atau fistula.\nMengevakuasi exudate yang banyak atau haluaran fistula (effluent).\nMemberikan kenyamanan fisik dan psikologis\nMeningkatkan mobilitas pasien',
    kebijakan: 'Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan alat',
                    detail: [
                        { text: 'Stomahesive Wafer Barrier' },
                        { text: 'Stomahesive pasta' },
                        { text: 'Stomahesive powder' },
                        { text: 'Convacare Barrier wipe' },
                        { text: 'Convacare remover wipe' },
                        { text: 'Spidol permanent (OHP marker)' },
                        { text: 'Penggaris pengukur luka (disposable)' },
                        { text: 'Gunting' },
                        { text: 'Plester dengan perekat di kedua sisi' },
                        { text: 'Lembaran plastik (ukuran luas sesuai kebutuhan)' },
                        {
                            text: 'Instrumen GV Set steril berisi:',
                            subDetail: [
                                '- Gunting jaringan tajam 1 buah',
                                '- Pinset anatomis 2 buah',
                                '- Pinset chirurgis 1 buah',
                                '- Kom 2 buah'
                            ]
                        },
                        { text: 'Handscoon/sarung tangan sesuai ukuran: 2 pasang (1 pasang non-steril, 1 pasang steril)' },
                        { text: 'NaCl 0,9% 500 ml dan transofix 1 buah' },
                        { text: 'Kassa secukupnya dalam tromol' },
                        { text: 'Absorben dressing dan plester non-woven' },
                        { text: 'Underpad/perlak dan kertas tissue' },
                        { text: 'Bengkok, kantung sampah' },
                        { text: 'Nierbeken/bengkok berisi larutan enzimatik yang sudah diencerkan: 1 buah' },
                        { text: 'Kacamata goggle, gown/apron plastik' }
                    ]
                },
                {
                    desc: 'Persiapan pasien',
                    detail: [
                        { text: 'Memberitahukan tentang tujuan dan prosedur aplikasi parcel dressing.' },
                        { text: 'Mengatur posisi sesuai lokasi luka yang memudahkan tindakan.' }
                    ]
                },
                {
                    desc: 'Persiapan lingkungan',
                    detail: [
                        { text: 'Siapkan lingkungan sekitar pasien dengan memasang skerm atau menutup tirai jendela / pintu kamar pasien agar privasi pasien terjaga' }
                    ]
                }
            ]
        },
        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'A. Ucapkan Basmallah' },
                { desc: 'B. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                { desc: 'C. Lakukan verifikasi identitas pasien dengan cara mencocokan nama pada rekam medik pasien dengan nama yang tertera pada gelang identitas pasien' },
                { desc: 'D. Periksa rencana perawatan fistula atau draining wound' },
                { desc: 'E. Bawa peralatan ke dekat klien' },
                { desc: 'F. Siapkan peralatan dalam keadaan siap pakai untuk memudahkan pekerjaan' },
                { desc: 'G. Kenakan kacamata goggle' },
                { desc: 'H. Pakai gown/apron plastik dan sarung tangan (Lihat SPO pemakaian sarung tangan umum PPI)' },
                { desc: 'I. Letakkan underpad di bawah area fistula/draining wound' },
                { desc: 'J. Lepaskan balutan lama yang kotor dan buang ke kantung sampah' },
                { desc: 'K. Lepaskan sarung tangan (Lihat SPO Melepas sarung tangan PPI)' },
                { desc: 'L. Buka instrumen GV Set steril' },
                { desc: 'M. Kenakan sarung tangan steril (Lihat SPO pemakaian sarung tangan steril PPI)' },
                { desc: 'N. Cuci lubang fistula atau luka dan kulit sekitarnya dengan NaCl 0,9% sampai bersih' },
                { desc: 'O. Keringkan kulit sekitar fistula atau luka dengan kassa secara lembut (jangan digosok)' },
                { desc: 'P. Kaji fistula atau luka (kalau perlu ambil foto/gambar dengan kamera):' ,
                    detail: [
                        { text: '1) Lubang fistula: ukuran (panjang, lebar dan kedalaman dalam cm), warna dasar jaringan' },
                        { text: '2) Effluent: lokasi, jenis, viskositas, warna, bau, jumlah dan pH effluent' },
                        { text: '3) Kulit sekitar fistula: erythema, edema, pain, iritasi atau erosi' }
                    ]
                },
                { desc: 'Q. Tempatkan beberapa lapis kasa di atas lubang fistula untuk mengabsorpsi effluent agar kulit sekitar tidak basah oleh effluent. Ganti kasa setiap kali basah' },
                { desc: 'R. Jika kulit perifistula atau sekitar luka tampak iritasi atau erosi, taburkan Stomahesive powder secukupnya di atasnya dan buang sisanya dari permukaan kulit' },
                { desc: 'S. Usap kulit sekitar luka atau fistula pada radius 5 - 8 cm dari tepi luka dengan Convacare Barrier wipe, biarkan 10 detik agar kering dan teraba lengket' },
                { desc: 'T. Aplikasikan Stomahesive paste di sekeliling fistula atau luka' },
                { desc: 'U. Buat pola diameter lubang fistula atau luka dengan plastik dan spidol kemudian gunting sesuai pola' },
                { desc: 'V. Terakan guntingan pola diameter lubang fistula atau luka pada sisi belakang Wafer Stomahesive barrier. gunting wafer sesuai pola tersebut' },
                { desc: 'W. Tempelkan salah satu sisi plester double tape di sekeliling pola lubang pada lembaran plastik' },
                { desc: 'X. Lepaskan release paper pd plester double tape' },
                { desc: 'Y. Tempelkan sisi lain dari plester double tape di plastik pada Stomahesive wafer barrier' },
                { desc: 'Z. Lakukan penekanan merata di seluruh permukaan Stomahesive wafer guna memastikan tidak ada celah atau kebocoran' },
                { desc: 'AA. Aplikasikan sisi lain Stomahesive wafer di kulit sekitar fistula / luka' },
                { desc: 'BB. Angkat dan buang kasa penyerap sementara effluent dari atas luka' },
                { desc: 'CC. Aplikasikan balutan absorben dressing ( misalnya ; Kaltostat atau Aquacel Ag atau Aquacel di permukaan luka, tutup dengan beberapa lapis kasa' },
                { desc: 'DD. Lipat setiap sisi plastik sehingga absorben dressing yang dipakai  dan kasa terbungkus secara aman di dalamnya' },
                { desc: 'EE. Fiksasi lipatan plastik dengan plester' },
                { desc: 'FF. Letakkan instrumen yang telah terpakai dan kotor di dalam bengkok berisi larutan enzymatik yang sudah diencerkan, rendam instrumen dalam larutan enzymatik selama 10-15 menit (Lihat SPO Dekontaminasi PPI)' },
                { desc: 'GG. Angkat underpad dan rapihkan pasien' },
                { desc: 'HH. Ucapkan Hamdalah' },
                { desc: 'II. Cuci peralatan kotor dan merapikan kembali di tempatnya semula' },
                { desc: 'JJ. Lepaskan sarung tangan (Lihat SPO Melepas sarung tangan PPI)' },
                { desc: 'Lepaskan gown/ apron plastik' },
                { desc: 'LL. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)'}
            ]
        },
        {
            step: 'Evaluasi',
            desc: 'Pantau respon pasien selama dan setelah perawatan luka, evaluasi balutan parcel secara periodik, penggantian Stomahesive wafer jika terjadi kebocoran'
        },
        {
            step: 'Dokumentasi',
            items: [
                { desc: 'A. Dokumentasikan : Lubang fistula atau luka: ukuran (panjang, lebar & kedalaman), warna dasar jaringan.' },
                { desc: 'B. Effluent atau exudate: lokasi, jenis, jumlah, viskositas, warna, bau dan pH effluent.' },
                { desc: 'C. Kulit sekitar fistula atau luka: erythema, edema, nyeri, iritasi atau erosi.' },
                { desc: 'D. Frekuensi, waktu untuk mengganti absorben dressing di bagian dalam balutan tanpa melepas Stomahesive wafer barrier.'}
            ]
        }
    ],
    dokumenTerkait: ['Status Pasien'],
    instalasiTerkait: [
        'Instalasi Gawat Darurat',
        'Instalasi Rawat Jalan',
        'Instalasi Rawat Inap',
        'Instalasi Pelayanan Intensif',
        'Instalasi Bedah Sentral',
        'Instalasi Haemodialisa'
    ]
    },
    {
    id: 1311,
    title: 'Bladder Training',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur latihan pengosongan kandung kemih pada pasien dengan atau tanpa kateter untuk meningkatkan kontrol berkemih.',
    icon: 'fa-droplet',
    tags: ['Bladder Training', 'Kateter', 'Eliminasi Urine', 'Medikal Bedah'],
    noDokumen: '445/SPO.3319/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Bladder Training adalah suatu kegiatan melakukan latihan mengosongkan kandung kemih pada pasien-pasien yang terpasang Dower catheter atau pasien dengan kontrol BAK yang kurang baik',
    tujuan: 'Sebagai acuan penerapan langkah-langkah bladder training, untuk melatih pengosongan kandung kencing sebelum Dower catheter dilepas',
    kebijakan: 'Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan alat',
                    detail: [
                        { text: 'Handscoon steril 1 pasang, jelly, kassa steril dan bethadin' },
                        { text: 'Klem 1 buah' },
                        { text: 'Air minum 250-500 cc dalam tempatnya' },
                        { text: 'Tissue bila perlu' },
                        { text: 'Nelaton catheter' }
                    ]
                },
                {
                    desc: 'Persiapan pasien',
                    detail: [
                        { text: 'Berikan penjelasan kepada pasien/keluarga tujuan dan prosedur tindakan yang akan dilakukan' }
                    ]
                },
                {
                    desc: 'Persiapan lingkungan',
                    detail: [
                        { text: 'Siapkan lingkungan sekitar pasien dengan memasang skerm atau menutup tirai jendela/pintu kamar pasien agar privasi pasien terjaga' }
                    ]
                }
            ]
        },
        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'A. Ucapkan Basmallah' },
                { desc: 'B. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                { desc: 'C. Lakukan verifikasi identitas pasien dengan cara mencocokan nama pada rekam medik pasien dengan nama yang tertera pada gelang identitas pasien' },
                { desc: 'D. Pada pasien yang terpasang Dower catheter:',
                    detail: [
                        { text: '1) Pasang klem pada Dower catheter' },
                        { text: '2) Pada 1 jam pertama pasien diberi minum 1 gelas (200-250 cc)' },
                        { text: '3) Kemudian berikan lagi minum kedua sebanyak (200-250 cc)' },
                        { text: '4) Anjurkan pasien untuk memberitahukan perawat apabila ada rangsangan berkemih'},
                        { text: '5) Lakukan observasi setiap jam pada 2 jam pertama, amati tanda-tanda adanya distensi kandung kemih'},
                        { text: '6) Apabila terdapat distensi kandung kemih buka klem untuk mengeluarkan urine' },
                        { text: '7) Catat jumlah urine yg keluar dan urine yg tersisa' },
                        { text: '8) Ulangi prosedur tersebut sampai program berjalan lancar dan berhasil' }
                    ]
                },
                { desc: 'E. Pada pasien yang tidak terpasang Dower catheter:', 
                    detail: [
                        { text: '1. Pada 1 jam pertama klien diberi minum 1 gelas (200-250 cc) sekaligus' },
                        { text: '2. Kemudian berikan lagi minum kedua sebanyak 1 gelas (200-250 cc)' },
                        { text: '3. Anjurkan pasien untuk menahan keinginan BAK apabila terasa ingin berkemih' },
                        { text: '4. Observasi kandung kemih distensi atau tidak' },
                        { text: '5. Apabila pasien sudah tidak tahan ingin BAK, suruh pasien berkemih sampai merasa puas' },
                        { text: '6. Apabila pasien sudah tidak merasa ada keinginan BAK tapi kandung kemihnya penuh, pasang nelaton catheter dengan prinsip steril' },
                        { text: '7. Tampung urine dan ukur urine yang keluar dan yang masih tersisa di kandung kemih, kemudian catat pada lembar observasi' },
                        { text: '8. Ulangi latihan minimal 1 siklus selama latihan dilakukan (1 siklus = 2-3 kali latihan)' },
                        { text: '9. Rapihkan pasien dan alat-alat' },
                        { text: '10. Ucapkan Hamdalah' },
                        { text: '11. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' }
                ]}
            ]
        },
        {
            step: 'Evaluasi',
            desc: 'Observasi respon pasien selama dan setelah dilakukan bladder training'
        },
        {
            step: 'Dokumentasi',
            desc: 'Mendokumentasikan hasil tindakan dan respon pasien dalam rekam medik pasien'
        }
    ],
    dokumenTerkait: ['Status Pasien'],
    instalasiTerkait: [
        'Instalasi Gawat Darurat',
        'Instalasi Rawat Jalan',
        'Instalasi Rawat Inap',
        'Instalasi Pelayanan Intensif',
        'Instalasi Bedah Sentral'
    ]
    },
    {
    id: 1312,
    title: 'Lavage Lambung',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur membersihkan isi lambung dengan memasukkan dan mengeluarkan cairan melalui NGT pada kondisi tertentu seperti keracunan.',
    icon: 'fa-lungs',
    tags: ['Lavage Lambung', 'NGT', 'Keracunan', 'Medikal Bedah'],
    noDokumen: '445/SPO.3320/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Lavage lambung adalah suatu kegiatan membersihkan/membilas isi lambung dengan memasukan dan mengeluarkan cairan melalui NGT.',
    tujuan: 'Sebagai acuan penerapan langkah-langkah lavage lambung untuk:\nMembersihkan/membilas isi lambung pada keadaan darurat kasus keracunan atau overdosis obat\nMengontrol perdarahan saluran pencernaan bagian atas ketika intervensi lainnya tidak dapat segera dilakukan',
    kebijakan: 'Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan alat',
                    detail: [
                        { text: 'Sarung tangan bersih' },
                        { text: 'Larutan NaCl 0,9% 500 ml' },
                        { text: 'Spuit berujung kateter ukuran 60 cc' },
                        { text: 'Tissue' },
                        { text: 'Pengalas/handuk' },
                        { text: 'Klem 1 buah (jika perlu)' },
                        { text: 'Bengkok 1 buah' },
                        { text: 'Bag penampung cairan' },
                        { text: 'Apron plastik (jika perlu)' }
                    ]
                },
                {
                    desc: 'Persiapan pasien',
                    detail: [
                        { text: 'Menjelaskan tujuan dan prosedur tindakan yang akan dilakukan kepada pasien' }
                    ]
                },
                {
                    desc: 'Persiapan lingkungan',
                    detail: [
                        { text: 'Siapkan lingkungan sekitar pasien dengan memasang skerm atau menutup tirai jendela/pintu kamar pasien agar privasi pasien terjaga' }
                    ]
                }
            ]
        },
        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'A. Ucapkan Basmallah' },
                { desc: 'B. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                { desc: 'C. Lakukan verifikasi identitas pasien dengan cara mencocokan nama pada rekam medik pasien dengan nama yang tertera pada gelang identitas pasien' },
                { desc: 'D. Pakai sarung tangan (Lihat SPO pemakaian sarung tangan umum)' },
                { desc: 'E. Letakkan pengalas di atas dada pasien, kemudian siapkan 2–3 helai tissue di atas pengalas' },
                { desc: 'F. Letakkan bengkok di sisi pasien' },
                { desc: 'G. Bila pasien belum terpasang NGT lakukan pemasangan NGT (sesuai SPO pemasangan NGT)' },
                { desc: 'H. Dengan menggunakan spuit 60 cc masukkan NaCl 0,9% sebanyak 250–300 ml ke dalam lambung melalui NGT yang telah terpasang, lakukan secara bertahap' },
                { desc: 'I. Klem selang NGT selama ± 15 menit' },
                { desc: 'J. Buka klem, sambungkan dengan kantung penampung' },
                { desc: 'K. Amati warna dan jumlah cairan yang keluar' },
                { desc: 'L. Lakukan sesuai kebutuhan dan instruksi terapi' },
                { desc: 'M. Angkat pengalas dan rapihkan pasien serta alat-alat' },
                { desc: 'N. Ucapkan Hamdalah' },
                { desc: 'O. Lepaskan sarung tangan (Lihat SPO Melepas sarung tangan PPI)' },
                { desc: 'P. Lepaskan gown/apron plastik' },
                { desc: 'Q. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' }
            ]
        },
        {
            step: 'Evaluasi',
            desc: 'Observasi respon pasien selama dan setelah dilakukan lavage lambung'
        },
        {
            step: 'Dokumentasi',
            desc: 'Mendokumentasikan hasil tindakan dan respon pasien dalam rekam medik pasien meliputi: warna cairan lambung, intake output cairan lambung.'
        }
    ],
    dokumenTerkait: ['Status Pasien'],
    instalasiTerkait: [
        'Instalasi Gawat Darurat',
        'Instalasi Rawat Jalan',
        'Instalasi Rawat Inap',
        'Instalasi Pelayanan Intensif',
        'Instalasi Bedah Sentral',
        'Instalasi Haemodialisa'
    ]
    },
    {
    id: 1312,
    title: 'Merekam Elektro Cardio Gram (EKG)',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur perekaman aktivitas listrik jantung menggunakan mesin EKG untuk mendeteksi gangguan jantung.',
    icon: 'fa-heart-pulse',
    tags: ['EKG', 'Elektrokardiogram', 'Jantung', 'Monitoring', 'Medikal Bedah'],
    noDokumen: '445/SPO.3321/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Suatu kegiatan merekam gambaran jantung menggunakan mesin EKG untuk menunjukan gambaran aktifitas listrik atau variasi potensi listrik pada atrium dan ventrikel saat depolarisasi dan repolarisasi.',
    tujuan: 'Sebagai acuan penerapan langkah-langkah merekam EKG, untuk mengetahui gambaran perubahan aktivitas jantung yang merujuk pada gangguan fisiologis maupun patologis jantung',
    kebijakan: 'Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan alat',
                    detail: [
                        { text: 'Mesin EKG lengkap terdiri dari:',
                            subDetail: [
                                '- Sistem power listrik',
                                '- Sistem perekaman',
                                '- Sistem penghubung elektroda dengan mesin EKG',
                                '- Kabel untuk sumber listrik',
                                '- Kabel untuk bumi (ground)',
                                '- Kabel elektroda (ekstremitas dan dada)',
                                '- Kertas EKG',
                                '- Plat elektroda ekstremitas',
                                '- Balon penghisap elektroda dada',
                            ]
                         },
                        { text: 'Jelly / air' },
                        { text: 'Tissue / lap' },
                        { text: 'Kain kassa / alcohol swab' },
                        { text: 'Spidol atau pulpen' }
                    ]
                },
                {
                    desc: 'Persiapan klien',
                    detail: [
                        { text: 'Jelaskan tujuan dan prosedur tindakan yang akan dilakukan serta partisipasi yang diharapkan dari klien' }
                    ]
                },
                {
                    desc: 'Persiapan lingkungan',
                    detail: [
                        { text: 'Siapkan lingkungan sekitar pasien dengan memasang skerm atau menutup tirai jendela / pintu kamar pasien agar privasi pasien terjaga' }
                    ]
                }
            ]
        },
        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'A. Ucapkan Basmallah' },
                { desc: 'B. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                { desc: 'C. Lakukan verifikasi identitas pasien dengan cara mencocokan nama pada rekam medik pasien dengan nama yang tertera pada gelang identitas pasien' },
                { desc: 'D. Hubungkan kabel listrik EKG dengan sumber listrik' },
                { desc: 'E. Bantu klien untuk terlentang dengan tenang di tempat tidur (tangan dan kaki tidak saling bersentuhan)' },
                { desc: 'F. Tentukan dan periksa kulit daerah ekstremitas yang akan dipasang elektroda' },
                { desc: 'G. Sisihkan pakaian, jam tangan, gelang atau perhiasan yang mengganggu tempat pemasangan elektroda (dahulukan daerah ekstremitas dibanding daerah dada)' },
                { desc: 'H. Bersihkan kedua pergelangan tangan dan kaki dengan alcohol swab (kalau perlu cukur daerah pergelangan kaki)' },
                { desc: 'I. Berikan jelly / air pada plat electrode' },
                { desc: 'J. Pasang plat electrode pada pergelangan tangan dan kaki:',
                    detail: [
                        { text: '1) Pasang plat elektroda ekstremitas pada pergelangan tangan dan kaki dengan posisi yang benar' },
                        { text: '2) Kabel merah (R) pada pergelangan tangan kanan' },
                        { text: '3) Kabel kuning (L) pada pergelangan tangan kiri' },
                        { text: '4) Kabel hitam (N) pada pergelangan kaki kanan' },
                        { text: '5) Kabel hijau (F) pada pergelangan kaki kiri' },
                    ]
                 },
                { desc: 'K. Informasikan kepada klien bahwa pemasangan elektroda di dada akan dilakukan' },
                { desc: 'L. Buka pakaian bagian atas, bersihkan dada klien dengan menggunakan alcohol swab' },
                { desc: 'M. Tentukan lokasi pemasangan elektroda, beri jelly atau air',
                    detail: [
                            { text: '1) Kabel C1 untuk V1 di ICS 4 linea sternalis kanan' },
                            { text: '2) Kabel C2 untuk V2 di ICS 4 linea sternalis kiri' },
                            { text: '3) Kabel C3 untuk V3 di antara V2 dan V4' },
                            { text: '4) Kabel C4 untuk V4 di ICS 5 linea midclavicularis kiri' },
                            { text: '5) Kabel C5 untuk V5 sejajar V4 di linea axillaris anterior' },
                            { text: '6) Kabel C6 untuk V6 sejajar V4 di linea midaxillaris' },
                    ] },
                { desc: 'N. Hindari memasang elektroda di atas massa otot yang besar dan struktur tulang' },
                { desc: 'O. Hubungkan kabel ground ke waslap basah yang diletakan di bengkok' },
                { desc: 'P. Nyalakan sistem power listrik' },
                { desc: 'Q. Set kecepatan pada 25 mV' },
                { desc: 'R. Set ketinggian rekaman pada skala 1' },
                { desc: 'S. Lakukan rekaman 12 lead' },
                { desc: 'T. Setelah selesai, matikan power listrik, lepaskan kabel elektroda dari tubuh klien' },
                { desc: 'U. Bersihkan sisa jelly yang menempel' },
                { desc: 'V. Rapihkan klien' },
                { desc: 'W. Rapihkan peralatan' },
                { desc: 'X. Lengkapi hasil rekaman EKG dengan nama, usia, tanggal perekaman dan tanda lead I, II, III, AVR, AVL, AVF, V1-V6' },
                { desc: 'Y. Ucapkan Hamdalah' },
                { desc: 'Z. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' }
            ]
        },
        {
            step: 'Evaluasi',
            items: [
                { desc: 'A. Perhatikan respon klien selama dan setelah dilakukan perekaman EKG,' },
                { desc: 'B. Hitung HR dari hasil rekaman EKG, laporkan jika ada kelainan' }
            ]
        },
        {
            step: 'Dokumentasi',
            items: [
                 { desc: 'Dokumentasikan tindakan yang telah dilakukan dalam rekam medik pasien'},
                 { desc: 'Catat nama klien,nomor rekam medic, tanggal, jam dan tanda vital pada sampul EKG' }
            ]
        }
    ],
    dokumenTerkait: ['Status Pasien'],
    instalasiTerkait: [
        'Instalasi Gawat Darurat',
        'Instalasi Rawat Jalan',
        'Instalasi Rawat Inap',
        'Instalasi Pelayanan Intensif',
        'Instalasi Bedah Sentral',
        'Instalasi Haemodialisa'
    ]
    },
    {
    id: 1313,
    title: 'Perawatan Pasien yang Terpasang WSD',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur perawatan pasien dengan Water Seal Drainage (WSD) untuk mengeluarkan udara atau cairan dari rongga dada dan mempertahankan tekanan negatif paru.',
    icon: 'fa-lungs',
    tags: ['WSD', 'Drainase Thorax', 'Chest Tube', 'Perawatan Luka', 'Medikal Bedah'],
    noDokumen: '445/SPO.3322/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Adalah suatu kegiatan perawatan pasien yang terpasang WSD, dimana WSD merupakan sistem drainage yaitu dengan memasukan 1 atau lebih selang ke dalam rongga dada/thorax. Sistem WSD:\nSistem 1 botol berfungsi sebagai drainage dan sebagai water seal, digunakan terutama untuk mengembalikan tekanan negatif dalam rongga pleura.\nSistem 2 botol; water seal dan drainage terpisah, tidak biasa dihubungkan dengan suction, digunakan setelah bedah thoraxs atau bedah jantung.\nSistem 3 botol: digunakan setelah bedah thoraxs atau bedah jantung, botol ketiga dihubungkan dengan eksternal kedua suction, botol yang lain sama dengan sistem 2 botol.',
    tujuan: 'Sebagai acuan penerapan langkah-langkah perawatan WSD untuk:\nMengeluarkan udara/cairan/darah dari rongga dada/thorax.\nMempertahankan tekanan negatif paru-paru.',
    kebijakan: 'Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan alat',
                    detail: [
                        { text: 'Instrumen GV Set steril berisi:' },
                        { text: '- Gunting jaringan tajam 1 buah' },
                        { text: '- Pinset anatomis 2 buah' },
                        { text: '- Pinset chirurgis 1 buah' },
                        { text: '- Kom 2 buah' },
                        { text: 'Klem 2 buah (Rubber-tipped Kelly clamps)' },
                        { text: 'Kain kassa steril' },
                        { text: 'Nierbeken/bengkok berisi larutan enzymatik yang sudah diencerkan: 1 buah' },
                        { text: 'Handscoon/Sarung tangan sesuai ukuran: 3 pasang (2 pasang non-steril, 1 pasang steril)' },
                        { text: 'Larutan NaCl 0,9% 500 ml atau air destilasi steril dan transofix 1 buah' },
                        { text: 'Salep (petrolatum)' },
                        { text: 'Gunting' },
                        { text: 'Plester' },
                        { text: 'Bengkok' },
                        { text: 'Alkohol swab' },
                        { text: 'Kom sedang' },
                        { text: 'Lidi watten' },
                        { text: 'Perlak atau alas kerja' }
                    ]
                },
                {
                    desc: 'Persiapan pasien',
                    detail: [
                        { text: 'Beritahu pasien dan/keluarga tentang tujuan dan prosedur perawatan yang akan dilakukan', marker: false }
                    ]
                },
                {
                    desc: 'Persiapan lingkungan',
                    detail: [
                        { text: 'Siapkan lingkungan sekitar pasien dengan memasang skerm atau menutup tirai jendela/pintu kamar pasien agar privasi pasien terjaga', marker: false}
                    ]
                }
            ]
        },
        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'A. Ucapkan Basmallah' },
                { desc: 'B. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                { desc: 'C. Lakukan verifikasi identitas pasien dengan cara mencocokan nama pada rekam medik pasien dengan nama yang tertera pada gelang identitas pasien' },
                { desc: 'D. Memelihara kepatenan sistem drainage', 
                    detail: [
                        { text: '1) Periksa semua sambungan selang terpasang plester dan tidak masuk udara' },
                        { text: '2) Kosongkan selang WSD dengan memeras/mengurut dengan cara sebagai berikut',
                            subDetail: [
                                'Berikan selang lumbrikasi dengan jell, sabun atau lotion atau dengan kapas alcohol',
                                'Dengan satu tangan, stabilisasi dan jepit selang pada area dekat penusukan',
                                'Tangan yang lain menekan dan mengurut selang WSD kearah botol',
                                'Ulangi langkah diatas sampai selang bersih',
                                'Selang dada sebaiknya berada horizontal di tempat tidur dan kemudian turun vertikal ke botol WSD. Hindari selang melipat, menggulung atau tersumbat',
                                'Mengobservasi adanya bekuan darah pada selang dada, bila ada segera diatasi',
                                'Mengobservasi adanya fluktuasi/undulasi dalam water seal setiap kali klien bernafas normal undulasi 2 – 4 detik (5 – 10 cm)',
                                'Memastikan bahwa 2 klem selalu tersedia di samping tempat tidur'
                            ]
                         },
                         { text: '3) Penanganan bila WSD tercabut',
                            subDetail: [
                                'Pastikan alat sudah tersedia dekat dengan pasien berupa klem, salep, kassa dan plester',
                                'Apabila selang dada terlepas dari selang WSD lakukan hal berikut :',
                                'Minta pasien mengeluarkan nafas ( exhale) dengan kuat',
                                'Klem selang dada dekat ke tempat penusukan dengan 2 klem secara bersebrangan',
                                'Bersihkan ujung selang WSD yang terlepas dengan antiseptic, kemudian segera sambungkan kembali dengan selang dada dan di plester',
                                'Lepaskan ke 2 klem',
                                'Kaji adanya respirasi distress',
                                {
                                    text: 'Apabila selang dada terlepas dari tempat penusukan, lakukan hal berikut:',
                                    children: [
                                        'Lepaskan balutan pada area penusukan dan segera berikan tekanan dengan kassa steril salep (petrolatum)',
                                        'Tutup dengan kassa steril segiempat',
                                        'Plester balutan dengan air occlusive tape/hipafix',
                                        'Lapor segera ke dokter',
                                        'Kaji adanya respirasi distress',
                                        'Apabila botol WSD tumpah atau terbalik, segera kembalikan ke posisi semula/tegakkan',
                                        'Anjurkan pasien untuk beberapa kali menarik nafas dalam',
                                        'Lapor dokter',

                                    ]
                                },
                                'Kaji adanya respirasi distress'
                                ]
                            },
                    ]
            },
            { desc: 'E. Penanganan bila WSD tercabut', 
                detail: [
                    { text: '1) Ucapkan Basmallah' },
                    { text: '2) Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                    { text: '3) Lakukan verifikasi identitas pasien dengan cara  mencocokan nama pada rekam medik pasien  dengan nama yang tertera pada gelang identitas pasien' },
                    { text: '4) Periksa program perawatan luka / penggantian balutan yang direkomendasikan.' },
                    { text: '5) Bawa peralatan ke dekat pasien' },
                    { text: '6) Buka pakaian pasien bagian atas' },
                    { text: '7) Posisikan pasien untuk perawatan pemasangan WSD' },
                    { text: '8) Posisikan pasien terlentang dengan satu bantal dengan tangan dikeataskan pada bagian yang dipasang WSD' },
                    { text: '9) Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                    { text: '10) Pasang sarung tangan (Lihat SPO pemakaian sarung tangan umum)' },
                    { text: '11) Pasang alas kerja' },
                    { text: '12) Dengan menggunakan pincet, buka balutan dengan hati-hati' },
                    { text: '13) Bersihkan luka dengan menggunakan NaCl 0,9% yang bersih ke yang kotor ( minimal 3 kali )' },
                    { text: '14) Bersihkan selang sekitar luka dengan alcohol 70%' },
                    { text: '15) Jaga drain agar tidak tertarik' },
                    { text: '16) Observasi kulit sekitar drain' },
                    { text: '17) Tutup sekitar drain dengan kain kassa kering, kemudian diplester' },
                    { text: '18) Gunakan kembali pakaian klien' },
                    { text: '19) Letakkan instrumen yang telah terpakai dan kotor di dalam bengkok berisi larutan enzymatik yang sudah diencerkan, rendam instrumen dalam larutan enzymatik selama 10-15 menit (Lihat SPO Dekontaminasi PPI)' },
                    { text: '20) Angkat underpad dan rapihkan pasien.' },
                    { text: '21) Ucapkan Hamdalah' },
                    { text: '22) Cuci peralatan kotor dan merapikan kembali di tempatnya semula.' },
                    { text: '23) Lepaskan sarung tangan (Lihat SPO Melepas sarung tangan PPI)' },
                    { text: '24) Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' }
                ] 
            },
            { desc: 'F. Mengganti balutan luka WSD',
                detail: [
                    { text: '1) Menyiapkan botol sistem 1 botol' },
                    { text: '2) Isilah botol WSD dengan 100 ml air destilasi steril atau NaCl 0,9%' },
                    { text: '3) Masukan selang panjang pada penutup botol, pastikan bahwa selang dada masuk 2 cm dibawah permukaan air botol' },
                    { text: '4) Beri tanda pada level permukaan air botol dengan plester' },
                    { text: '5) Tempatkan botol pada rak botol pada lantai disamping tempat tidur pasien ( bila tersedia )' },
                    { text: '6) Selang WSD di klem dengan benar' },
                    { text: '7) Masukan ujung selang kedalam botol WSD yang telah disiapkan sampai terendam 2 cm dibawah permukaan air dalam botol' },
                    { text: '8) Setelah botol WSD diganti dan selang WSD terfiksasi dengan baik, klem dilepas' }            
                ]
             },
            { desc: 'G. Merawat pasien yang terpasang WSD', 
                detail: [
                    { text: 'Anjurkan nafas dalam dan melakukan latihan batuk efektif setiap 2 jam sekali. Pada saat latihan, pasien duduk tegak dan area penusukan ditahan dengan bantal atau tangan, Pada saat pasien menarik nafas dalam, palpasi ekspansi paru' },
                    { text: 'Atur posisi klien setiap 2 jam sekali' },
                    { text: 'Posisi semi fowler’s untuk mengeluarkan udara (pneumothoraks)' },
                    { text: 'Fosisi fowler’s untuk mengeluarkan cairan ( hemothoraks, effuse )' },
                    { text: 'Bantu pasien untuk melakukan ROM pada bahu yang terkena 3 kali sehari' },
                    { text: 'Pada saat memindahkan atau membawa pasien :',
                        subDetail: [

                            'Sediakan klem untuk kondisi emergency',
                            'Pertahankan posisi system drainage berada dibawah level dada dan tegak',
                            'Jika diperlukan memasang klem, segera mungkin untuk membuka klem kembali',
                            'Lepaskan system drainage dari suction sebelum berpindah dan yakinkan udara ventilasi terbuka',
                            { text: 'Catat warna dan jumlah cairan yang keluar, jumlah cairan normal : Pada dewasa kurang dari 50 – 200 ml/jam setelah operasi atau 500 ml/24 jam pertama',  formula: false}
                        ]
                     }
                ]
            },
        ]
        },
        {
            step: 'Evaluasi',
            desc: 'Observasi respon pasien setelah dilakukan tindakan'
        },
        {
            step: 'Dokumentasi',
            desc: 'Dokumentasikan tindakan yang telah dilakukan dalam rekam medik pasien meliputi tanggal, waktu pelaksanaan, respon pasien, jumlah, konsistensi, bau dan warna cairan WSD'
        }
    ],
    dokumenTerkait: ['Status Pasien'],
    instalasiTerkait: [
        'Instalasi Gawat Darurat',
        'Instalasi Rawat Jalan',
        'Instalasi Rawat Inap',
        'Instalasi Pelayanan Intensif',
        'Instalasi Bedah Sentral',
        'Instalasi Haemodialisa'
    ]
    },
    {
    id: 1314,
    title: 'Rendam Duduk (Sit Bath)',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur merendam area perianal dan genitalia dengan air hangat dan antiseptik untuk relaksasi, mengurangi nyeri, dan mencegah infeksi.',
    icon: 'fa-bath',
    tags: ['Sit Bath', 'Rendam Duduk', 'Perawatan Perianal', 'Relaksasi', 'Medikal Bedah'],
    noDokumen: '445/SPO.3323/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Adalah memberi rendaman air hangat dan cairan antiseptik pada area rectum dan genetalia.',
    tujuan: 'Sebagai acuan penerapan langkah-langkah sit bath untuk:\nMembuat relaksasi sphincter sehingga mengurangi nyeri.\nMencegah infeksi pada perianal.\nMemperbaiki sirkulasi darah dan mengurangi edema.',
    kebijakan: 'Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan alat',
                    detail: [
                        { text: 'Waskom' },
                        { text: 'Antiseptik (sesuai order dokter)' },
                        { text: 'Air hangat' },
                        { text: 'Pengalas baskom' }
                    ]
                },
                {
                    desc: 'Persiapan pasien',
                    detail: [
                        { text: 'Pasien diberi penjelasan tentang tindakan yang akan dilakukan' },
                        { text: 'Rendaman dilakukan 1–2 kali/hari sesudah mandi atau buang air besar' },
                        { text: 'Tindakan dilakukan di kamar mandi atau di ruangan pasien' }
                    ]
                }
            ]
        },
        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'A. Ucapkan Basmallah' },
                { desc: 'B. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                { desc: 'C. Lakukan verifikasi identitas pasien dengan cara mencocokan nama pada rekam medik pasien dengan nama yang tertera pada gelang identitas pasien' },
                { desc: 'D. Siapkan air hangat yang telah diberi antiseptik (sesuai order dokter) dengan perbandingan 5 cc antiseptik : 5 liter air hangat' },
                { desc: 'E. Pasang pengalas di bawah baskom' },
                { desc: 'F. Bantu pasien untuk berendam di dalam baskom' },
                { desc: 'G. Anjurkan pasien untuk berendam daerah bokong selama 30–45 menit' },
                { desc: 'H. Setelah selesai area bokong dikeringkan dengan handuk' },
                { desc: 'I. Bila diperlukan merawat luka daerah anus sesuai program terapi' },
                { desc: 'J. Bersihkan alat-alat' },
                { desc: 'K. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' }
            ]
        },
        {
            step: 'Evaluasi',
            items: [
                { desc: 'Respon pasien selama dan setelah rendam duduk' },
                { desc: 'keluhan nyeri' }
            ]
        },
        {
            step: 'Dokumentasi',
            desc: 'Dokumentasikan tindakan yang dilakukan dalam rekam medik pasien meliputi: tanggal dan jam tindakan, respon klien setelah rendam duduk'
        }
    ],
    dokumenTerkait: ['Status Pasien'],
    instalasiTerkait: [
        'Instalasi Gawat Darurat',
        'Instalasi Rawat Jalan',
        'Instalasi Rawat Inap',
        'Instalasi Pelayanan Intensif',
        'Instalasi Bedah Sentral',
        'Instalasi Haemodialisa'
    ]
    },
    {
    id: 1319,
    title: 'Menyiapkan Pasien yang Akan Dilakukan Biopsi Pleura / Paru',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur persiapan pasien untuk tindakan biopsi pleura atau paru sebagai tindakan diagnostik invasif.',
    icon: 'fa-lungs-virus',
    tags: ['Biopsi Paru', 'Biopsi Pleura', 'Diagnostik Invasif', 'Thorax', 'Medikal Bedah'],
    noDokumen: '445/SPO.3324/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Pleural biopsi merupakan tindakan insisi kecil pada dinding thorax atau sekaligus dilakukan pada thorakotomy thoracentesis dengan menggunakan jarum biopsy.\nBiopsi paru merupakan pembedahan pada paru (open lung biopsy) dengan atau tanpa endoscopy yang menggunakan jarum yang dapat menarik bagian jaringan paru.',
    tujuan: 'Sebagai acuan penerapan langkah-langkah dalam menyiapkan klien yang akan dilakukan biopsi pleura / paru untuk menegakkan diagnosis bila ditemukan adanya pleural effusion.',
    kebijakan: 'Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'A. Persiapan alat',
                    detail: [
                        { text: 'Jarum biopsi sesuai ukuran' },
                        { text: 'Sarung tangan steril' },
                        { text: 'Disposable syringe' },
                        { text: 'Desinfektan (alkohol, betadine)' },
                        { text: 'Bak steril berisi kasa steril, kom, pinset' },
                        { text: 'Plester' },
                        { text: 'Gunting verban' },
                        { text: 'Bengkok' }
                    ]
                },
                {
                    desc: 'B. Persiapan pasien',
                    detail: [
                        { text: 'Jelaskan kepada pasien / keluarga tentang tujuan dan prosedur yang akan dilakukan' },
                        { text: 'Lakukan terlebih dahulu : pemeriksaan TTV, auskultasi suara nafas, observasi adanya distress pernafasan, warna sputum' },
                    ]
                },
                {
                    desc: 'C. Persiapan lingkungan',
                    detail: [
                        { text: 'Siapkan lingkungan sekitar pasien dengan memasang skerm atau menutup tirai jendela / pintu kamar pasien agar privasi pasien terjaga', marker: false}
                    ]
                }
            ]
        },
        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'Ucapkan Basmallah' },
                { desc: 'Lakukan kebersihan tangan (SPO cuci tangan PPI)' },
                { desc: 'Verifikasi identitas pasien dengan mencocokkan nama rekam medis dan gelang identitas' },
                { desc: 'Posisikan pasien duduk dan pertahankan selama tindakan' },
                { desc: 'Lakukan desinfeksi area pungsi' },
                { desc: 'Pastikan pasien mengikuti instruksi dokter selama tindakan' },
                { desc: 'Lakukan pengambilan jaringan menggunakan jarum biopsi untuk pemeriksaan laboratorium' },
                { desc: 'Tutup luka pungsi secara steril setelah tindakan selesai' },
                { desc: 'Rapikan pasien dan peralatan' },
                { desc: 'Berikan etiket pada bahan pemeriksaan' },
                { desc: 'Ucapkan Hamdalah' },
                { desc: 'Lakukan kebersihan tangan (SPO cuci tangan PPI)' }
            ]
        },
        {
            step: 'Evaluasi',
            desc: 'Observasi respon pasien, kemungkinan perdarahan dari bekas tusukan, nyeri'
        },
        {
            step: 'Dokumentasi',
            desc: 'Dokumentasikan tindakan yang telah dilakukan dalam rekam medik pasien'
        }
    ],
    dokumenTerkait: ['Status Pasien'],
    instalasiTerkait: [
        'Instalasi Gawat Darurat',
        'Instalasi Rawat Jalan',
        'Instalasi Rawat Inap',
        'Instalasi Pelayanan Intensif',
        'Instalasi Bedah Sentral',
        'Instalasi Haemodialisa'
    ]
    },
    {
    id: 1320,
    title: 'Menyiapkan Pasien untuk Pemeriksaan Analisa Gas Darah (AGD)',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur pengambilan dan penyiapan pasien untuk pemeriksaan analisa gas darah (AGD).',
    icon: 'fa-syringe',
    tags: ['AGD', 'Analisa Gas Darah', 'Arteri', 'ABG', 'Medikal Bedah'],
    noDokumen: '445/SPO.3325/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: `Punksi arteri radialis, brachilais atau femoralis untuk bahan pemeriksaan analisa gas darah (AGD)`,

    tujuan: `Sebagai acuan penerapan langkah-langkah dalam menyiapkan klien yang akan dilakukan pemeriksaan AGD untuk:
            \nMenilai status oksigenasi pasien
            \nMenilai efektivitas therafy oksigen atau penggunaan ventilator
            \nMenilai stasus ventilasi pasien
            \nMenilai keseimbangan asam basa pasien`,

    kebijakan: `Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL  Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019`,

    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'A. Persiapan alat',
                    detail: [
                        { text: 'Formulir permintaan pemeriksaan yang telah diisi lengkap' },
                        { text: 'Handschoon sesuai ukuran' },
                        { text: 'Spuit 3cc / 5 cc sesuai kebutuhan' },
                        { text: 'Kassa steril' },
                        { text: 'Heparin 1 ; 1000 solution' },
                        { text: 'Karet kecil / gabus untuk penutup niddle' },
                        { text: 'Alkohol swab' },
                        { text: 'Perlak dan alas perlak' },
                        { text: 'Bengkok' },
                        { text: 'Plester' },
                        { text: 'Gunting verban' },
                        { text: 'Kantong plastik dengan es batu' }
                    ]
                },
                {
                    desc: 'B. Persiapan pasien',
                    detail: [
                        { text: 'Pasien diberikan penjelasan tentang tindakan yang akan dilakukan', marker: false} //diberi marker: false karena cuma 1
                    ]
                },
                {
                    desc: 'C. Persiapan lingkungan',
                    detail: [
                        { text: 'Siapkan lingkungan sekitar pasien dengan memasang skerm atau menutup tirai jendela / pintu kamar pasien agar privasi pasien terjaga', marker: false }
                    ]
                }
            ]
        },
        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'A. Ucapkan Basmallah' },
                { desc: 'B. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                { desc: 'C. Lakukan verifikasi identitas pasien dengan cara  mencocokan nama pada rekam medik pasien  dengan nama yang tertera pada gelang identitas pasien' },
                { desc: 'D. Siapkan spuit yang berisi heparin : aspirasi 0,5 ml heparin, 1000 unit/ml kedalam spuit dari vial atau ampul, dorong kembali penghisap dengan prinsip asepsis, masukan semua heparin yang dibutuhkan kedalam spuit' },
                { desc: 'E. Memasang perlak dan alas perlak' },
                { desc: 'F. Pasang sarung tangan (Lihat SPO pemakaian sarung tangan umum PPI)' },

                { desc: 'G. Raba area brachial atau  ulnaris dengan ujung jari' },
                { desc: 'H. Tekan arteri :',
                    detail: [
                        { text: '1) Untuk arteri radialis hiperekstensikan pergelangan tangan' },
                        { text: '2) Untuk arteri brachialis, hiperekstensikan siku dengan meletakan handuk gulung kecil dibawah lengan diatas siku' },
                    ]
                 },
                { desc: 'I. Bersihkan area sekitar penusukan dengan kapas alcohol dengan gerakan melingkar' },
                { desc: 'J. Tahan ujung jari pada arteri, tepat diatas tempat penusukan yang dipilih.' },
                { desc: 'K. Pegang kapas alcohol dengan jari yang sama digunakan untuk meraba arteri' },
                { desc: 'L. Tahan jarum dengan dimiringkan ke atas dengan dimasukan pada sudut 45 derajat kedalam arteri dengan kemiringan yang mendekati' },
                { desc: 'M. Hentikan penusukan bila darah telah terlihat didalam spuit' },,
                { desc: 'N. Jika menggunakan jarum terbuka perlakukan spuit secara aman' },
                { desc: 'O. Biarkan spuit terisi dengan darah arteri sebanyak 2 -3 ml' },
                { desc: 'P. Mencabut jarum dan segera menekan area penusukan dengan kapas alcohol sambil menutup ujung jarum dengan gabus atau penutup yang telah disediakan' },
                { desc: 'Q. Pertahankan tekanan diarea penusukan antara 5 – 10 menit' },
                { desc: 'R. Berikan label pada sampel yang telah diambil, cantumkan jam pengambilan, lokasi fungsi arteri, suhu terakhir, Hb terakhir dan penggunaan oksigen' },
                { desc: 'S. Tempatkan spuit yang telah diberi label dalam kantong plastic yang telah diberi es batu' },
                { desc: 'T. Ucapkan hamdallah' },
                { desc: 'U. Merapikan pasien dan membersihkan peralatan' },
                { desc: 'V. Mengirimkan bahan pemeriksaan ke laboratorium / diambil oleh petugas laboratorium' },
                { desc: 'W. Lepaskan sarung tangan (Lihat SPO Melepas sarung tangan PPI)' },
                { desc: 'X. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' }
            ]
        },
        {
            step: 'Evaluasi',
            items: [
                { desc: 'Respon pasien setelah dilakukan tindakan.' },
                { desc: 'Kemungkinan perdarahan dari bekas tusukan' },
            ]
        },
        {
            step: 'Dokumentasi',
            desc: 'Dokumentasikan tindakan yang telah dilaksanakan dalam catatan asuhan keperawatan'
        }
    ],

    dokumenTerkait: ['Status Pasien'],

    instalasiTerkait: [
        'Instalasi Gawat Darurat',
        'Instalasi Rawat Jalan',
        'Instalasi Rawat Inap',
        'Instalasi Pelayanan Intensif',
        'Instalasi Bedah Sentral',
        'Instalasi Haemodialisa'
    ]
    },
    {
    id: 1321,
    title: 'Menyiapkan Pasien yang akan Dilakukan Lumbal Punksi',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur penyiapan pasien untuk tindakan lumbal punksi (pengambilan cairan cerebrospinal).',
    icon: 'fa-brain',
    tags: ['Lumbal Punksi', 'CSF', 'Spinal', 'Neurologi', 'Medikal Bedah'],
    noDokumen: '445/SPO.3326/Bidper',
    tanggalTerbit: '04 Maret 2019',

    pengertian: `Lumbal punksi adalah memasukan spinal niddle pada sub aracknoid space diantara vertebrae lumbalis 3 - 4 atau lumbal 4 - 5 atau pada sisterna magna  (jarang dilakukan ) untuk mengambil cairan cerebrospinal Fluid ( CSF )`,

    tujuan: `Sebagai acuan penerapan langkah-langkah dalam menyiapkan klien yang akan dilakukan lumbal punksi untuk:
            \nMengukur tekanan pada ruang sub araknoid dengan menggunakan manometer
            \nMemperoleh CSF / LCS untuk pemeriksaan
            \nUntuk menentukan adanya darah dalam cairan serebro spinalis
            \nMemeriksa hambatan pada spinal yang disebabkan oleh lesi pada medulla spinalis
            \nMemasukan zat kontras atau udara guna pemeriksaan diagnostic
            \nMelakukan spinal anestesi
            \nMemasukan obat
            \nPada kondisi tertentu dapat sedikit menurunkan tekanan intra cranial`,

    kebijakan: `Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL  Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019`,

    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'A. Persiapan alat',
                    detail: [
                        { text: '1) Formulir permintaan pemeriksaan yang telah diisi lengkap' },
                        { text: '2) Set lumbal punksi :',
                            subDetail: [
                                'Kasa steril',
                                'Kapas lidi',
                                'Handshoon steril sesuai ukuran yang dibutuhkan',
                                'Glassmanometer dengan 3 way stopcock',
                                'Duk biasa / duk bolong',
                            ]
                         },
                        { text: '3) Cairan antiseptic ( alcohol 70%, bethadine 10% )' },
                        { text: '4) Obat untuk lokal anastesi' },
                        { text: '5) Tabung 2 buah yang berisi cairan none dan pandy' },
                        { text: '6) Spuit ssteril 3 atau 5 cc' },
                        { text: '7) Jarum spinal no 21G – 25G' },
                        { text: '8) Bengkok' },
                        { text: '9) Perlak dan alas perlak' },
                        { text: '10) Kapas alcohol' },
                        { text: '11) Pleter' },
                        { text: '12) Gunting' },
                        { text: '13) Verban / band aid' }
                    ]
                },
                {
                    desc: 'B. Persiapan pasien',
                    detail: [
                        { text: 'Beritahu pasien dan/ keluarga tentang tujuan dan prosedur perawatan luka yang akan dilakukan', marker: false }
                    ]
                },
                {
                    desc: 'C. Persiapan lingkungan',
                    detail: [
                        { text: 'Siapkan lingkungan sekitar pasien dengan memasang skerm atau menutup tirai jendela / pintu kamar pasien agar privasi pasien terjaga', marker: false }
                    ]
                }
            ]
        },

        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'A. Ucapkan Basmallah' },
                { desc: 'B. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                { desc: 'C. Lakukan verifikasi identitas pasien dengan cara  mencocokan nama pada rekam medik pasien  dengan nama yang tertera pada gelang identitas pasien Mengatur posisi klien' },
                { desc: 'D. Letakan perlak dan alas perlak' },
                { desc: 'E. Dekatkan bengkok' },
                { desc: 'F. Membuka set steril' },
                { desc: 'G. Gunakan sarung tangan steril' },
                { desc: 'H. Membantu desinfeksi dengan memberikan kapas lidi beserta betahadine dan alcohol' },
                { desc: 'I. Membantu untuk memberikan obat anestesi local',
                    detail: [
                        '1) Memberikan spuit 3 – 5 cc',
                        '2) Memberikan obat anestesi'
                    ]
                },
                { desc: 'J. Memberikan spinal niddle' },
                { desc: 'K. Menampung 1 – 2 tets LCS ke dalam tabung none dan pandi' },
                { desc: 'L. Membantu menegakan manometer' },
                { desc: 'M. Membantu melakukan queckenstendt test yaitu menekan vena jugularis internauntuk mengetahui adanya bendungan, jika naiknya cepat berarti tidak ada bendungan, jika lambat berarti obstruksi total, jika kembali perlahan berarti obstruksi parsial' },
                { desc: 'N. Menampung 2 – 3 tetes dalam 2 botol steril' },
                { desc: 'O. Menutup bekas fungsi dengan kassa yang telah diberi bethadine / band aid' },
                { desc: 'P. Segera mencuci tangan, terutama jika membantu menampung LCS' },
                { desc: 'Q. Ucapkan Hamdallah' },
                { desc: 'R. Anjurkan pasien istirahat ditempat tidur selam 3-12 jam setelah prosedur dilakukan' },
                { desc: 'S. Anjurkan banyak minum jika tidak ada indikasi' },
                { desc: 'T. Merapikan pasien dan peralatan' },
                { desc: 'U. Berikan bahan pemeriksaan dengan etiket yang benar dan lengkap' },
                { desc: 'V. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' }
            ]
        },

        {
            step: 'Evaluasi',
            items: [
                { desc: 'Kaji keluhan pasien' },
                { desc: 'Kaji cairan yang keluar dari bekas punksi' },
                { desc: 'Kaji perubahan kesadaran, TTV, status pernafasan dan pupil' }
            ]
        },

        {
            step: 'Dokumentasi',
            desc: 'Dokumentasikan tindakan yang telah dilaksanakan dalam catatan asuhan keperawatan'
        }
    ],

    dokumenTerkait: ['Status Pasien'],

    instalasiTerkait: [
        'Instalasi Gawat Darurat',
        'Instalasi Rawat Jalan',
        'Instalasi Rawat Inap',
        'Instalasi Pelayanan Intensif',
        'Instalasi Bedah Sentral',
        'Instalasi Haemodialisa'
    ]
    },
    {
    id: 1322,
    title: 'Menyiapkan Klien untuk Pemeriksaan EEG (Electro Encephalo Graphy)',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur penyiapan pasien untuk pemeriksaan EEG (electroencephalography).',
    icon: 'fa-brain',
    tags: ['EEG', 'Electroencephalography', 'Neurologi', 'Otak', 'Medikal Bedah'],
    noDokumen: '445/SPO.3327/Bidper',
    tanggalTerbit: '04 Maret 2019',

    pengertian: `EEG (electroencephalography) adalah Rekaman aktivitas listrik otak dari hemisfer-hemisfer serebral yang direkam oleh elektroda yang ditempatkan pada kulit kepala`,

    tujuan: `Sebagai acuan penerapan langkah-langkah dalam menyiapkan klien yang akan dilakukan pemeriksaan EEG untuk:
            \nMenentukan hemisfer-hemisfer otak
            \nMenentukan penyebab aktifitas kejang ( epilepsy )
            \nMenentukan fungsi otak dalam kondisi-kondisi patologis lainnya seperti : tumor, CVD, hematom dll
            \nMenentukan perbedaan antara gangguan organic dan histerik atau berpura-pura buta dan tuli
            \nMonitor aktivitas serebral selama surgical anestesi
            \nMenentukan penyebab gangguan tidur
            \nMenentukan kematian jaringan otak
            \nMenentukan retardasi mental atau over dosis obat`,

    kebijakan: `Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL  Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2701- RS. Ihsan/2016`,

    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'A. Persiapan alat',
                    detail: [
                        { text: 'Formulir permintaan pemeriksaan yang telah diisi lengkap', marker: false },
                    ]
                },
                {
                    desc: 'B. Persiapan pasien',
                    detail: [
                        { text: 'Pasien diberikan penjelasan tentang tujuan dan prosedur tindakan yang akan dilakukan' },
                        { text: 'Hindari pemberian teh, kopi, coklat, cola dan merokok 8 jam sebelum pemeriksaan' },
                        { text: 'Berikan makan dan minum sebelum pemeriksaan' },
                        { text: 'Periksa rambut klien, harus bersih, tidak menggunakan jepit, sprays atau minyak rambut' }
                    ]
                }
            ]
        },

        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'A. Ucapkan basmallah' },
                { desc: 'B. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                { desc: 'C. Lakukan verifikasi identitas pasien dengan cara  mencocokan nama pada rekam medik pasien  dengan nama yang tertera pada gelang identitas pasien' },
                { desc: 'D. Periksa kembali kelengkapan administrasi' },
                { desc: 'E. Pastikan pasien sudah terdaftar untuk tindakan EEG' },
                { desc: 'F. Mengantar pasien ke bagian EEG' },
                { desc: 'G. Dampingi pasien selama pemeriksaan' },
                { desc: 'H. Rapikan kembali pasien' },
                { desc: 'I. Sesudah pemeriksaan :', 
                    detail: [
                        { text: '1) Gunakan aseton untuk membersihkan kepala dari jelly atau salep' },
                        { text: '2) Cuci rambut, jika kondisi memungkinkan' },
                        { text: '3) Obat-obatan yang di stop sementara dapat dilanjutkan lagi' },
                        { text: '4) Beri kesempatan pasien untuk istirahat' }
                    ]
                }]
        },
        {
            step: 'Evaluasi',
            items: [
                { desc: 'Kaji tanda-tanda kejang', marker: false },
            ]
        },

        {
            step: 'Dokumentasi',
            items: [
                { desc: 'Waktu  dilakukan tindakan' },
                { desc: 'Respon pasien terhadap prosedur pemeriksaan' },
                { desc: 'Tindakan yang dilakukan' }
            ]
        }
    ],

    dokumenTerkait: ['Status Pasien'],

    instalasiTerkait: [
        'Instalasi Gawat Darurat',
        'Instalasi Rawat Jalan',
        'Instalasi Rawat Inap',
        'Instalasi Pelayanan Intensif',
        'Instalasi Bedah Sentral',
        'Instalasi Haemodialisa'
    ]
    },
    {
    id: 1323,
    title: 'Melakukan Irigasi Mata',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur tindakan irigasi mata untuk membersihkan sekret, benda asing, atau bahan kimia dari mata.',
    icon: 'fa-eye',
    tags: ['Irigasi Mata', 'Oftalmologi', 'Perawatan Mata', 'Medikal Bedah'],
    noDokumen: '445/SPO.3328/Bidper',
    tanggalTerbit: '04 Maret 2019',

    pengertian: `Irigasi mata adalah tindakan membersihkan/mengeluarkan cairan, secret, bahan kimia dan benda asing yang masuk kedalam mata/ada didalam mata. Irigasi dilakukan selama 15 menit secara continue`,

    tujuan: `Sebagai acuan penerapan langkah-langkah dalam melakukan irigasi mata untuk:
            \nMembersihkan/mengeluarkan secret dari selaput conjungtiva
            \nMengangkat benda asing / mengirigasi bahan kimia dari mata
            \nPemberian antiseptik
            \nMengurangi edema / rasa tidak nyaman dengan menggunakan cairan hangat / dingin
            \nMelembabkan permukaan mata pada pasien tidak sadar`,

    kebijakan: `Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL  Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019`,

    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'A. Persiapan alat',
                    detail: [
                        { text: 'Cairan irigasi sesuai dengan instruksi medik (NaCl 0,9%), suhu cairan 37°celcius' },
                        { text: 'Spuit steril 10cc tanpa jarum / pipet' },
                        { text: 'Bengkok' },
                        { text: 'Handuk' },
                        { text: 'Perlak dan alas perlak' },
                        { text: 'Set balutan' },
                        { text: 'Kom steril untuk cairan irigasi' },
                        { text: 'Handschoon steril' },
                        { text: 'Kapas bulat' }
                    ]
                },
                {
                    desc: 'B. Persiapan pasien',
                    detail: [
                        { text: 'Pasien diberikan penjelasan tentang tujuan dan prosedur tindakan yang akan dilakukan' },
                        { text: 'Atur posisi duduk atau miring kearah mata yang akan dilakukan irigasi' }
                    ]
                },
                {
                    desc: 'C. Persiapan lingkungan',
                    detail: [
                        { text: 'Siapkan lingkungan sekitar pasien dengan memasang skerm atau menutup tirai jendela / pintu kamar pasien agar privasi pasien terjaga', marker: false }
                    ]
                }
            ]
        },

        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'A. Ucapkan Basmallah' },
                { desc: 'B. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                { desc: 'C. Lakukan verifikasi identitas pasien dengan cara  mencocokan nama pada rekam medik pasien  dengan nama yang tertera pada gelang identitas pasien' },
                { desc: 'D. Letakan perlak dan handuk dibawah kepala dan bahu klien' },
                { desc: 'E. Pakai sarung tangan (Lihat SPO pemakaian sarung tangan umum PPI)' },
                { desc: 'F. Letakan bengkok disamping mata yang akan diirigasi untuk menampung cairan irigasi' },
                { desc: 'G. Tutup telinga dengan kapas bulat (sesuai dengan mata yang di irigasi)' },
                { desc: 'H. Dengan kapas bulat yang telah dibasahi NaCl 0,9%, bersihkan dengan lembut batas kelopak mata dan bulu mata dari kantus dalam ke kantus luar' },
                { desc: 'I. Isi spuit 10 cc dengan cairan irigasi' },
                { desc: 'J. Tangan yang tidak dominan menarik dengan lembut kelopak mata bawah untuk memaparkan kantung konjungtiva. Untuk mempertahankan agar kelopak mata tetap terbuka, berikan tekanan pada tulang orbital dan tulang prominens dibawah alis, jangan menekan mata. Tangan dominan mengalirkan cairan irigasi dengan tekanan rendah ke kantung konjungtiva bawah dari kantus dalam ke arah kantus luar.' },
                { desc: 'K. Tinggi irrigator 2,5 inci' },
                { desc: 'L. Hindari tersentuhnya struktur mata dengan alat irigasi' },
                { desc: 'M. Anjurkan pasien untuk melihat keatas' },
                { desc: 'N. Anjurkan pasien untuk menutup mata secara periodic' },
                { desc: 'O. Lakukan irigasi sampai bersih (jumlah cairan yang ditentukan habis / untuk irigasi zat kimia perlu 15 menit)' },
                { desc: 'P. Keringkan kelopak mata dan daerah wajah dengan kapas bulat' },
                { desc: 'Q. Rapikan pasien dan alat-alat' },
                { desc: 'R. Lepaskan sarung tangan (Lihat SPO Melepas sarung tangan PPI)' },
                { desc: 'S. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' }
            ]
        },

        {
            step: 'Evaluasi',
            items: [
                { desc: 'Kaji tingkat kenyamanan pasien setelah dilakukan irigasi' },
                { desc: 'Observasi apakah terjadi gangguan penglihatan selama irigasi' },
                { desc: 'Observasi reaksi pupil dan pergerakan ekstraokuler' }
            ]
        },

        {
            step: 'Dokumentasi',
            items: [
                { desc: 'Waktu dilakukan irigasi, jenis dan jumlah cairan yang digunakan' },
                { desc: 'Keluhan pasien selama irigasi dan setelah dilakukan irigasi' }
            ]
        }
    ],

    dokumenTerkait: ['Status Pasien'],

    instalasiTerkait: [
        'Instalasi Gawat Darurat',
        'Instalasi Rawat Jalan',
        'Instalasi Rawat Inap',
        'Instalasi Pelayanan Intensif',
        'Instalasi Bedah Sentral',
        'Instalasi Haemodialisa'
    ]
    },
    {
    id: 1324,
    title: 'Menyiapkan Pasien yang Akan Dilakukan BMP (Bone Marrow Punksi)',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur penyiapan pasien untuk tindakan Bone Marrow Punksi (BMP).',
    icon: 'fa-dna',
    tags: ['BMP', 'Bone Marrow', 'Sumsum Tulang', 'Hematologi', 'Medikal Bedah'],
    noDokumen: '445/SPO.3329/Bidper',
    tanggalTerbit: '04 Maret 2019',

    pengertian: `BMP ( bone marrow punksi ) adalah suatu prosedur  tindakan untuk mengambil sejumlah kecil cairan material organic didalam tulang untuk evaluasi hematopoesis.`,

    tujuan: `Sebagai acuan penerapan langkah-langkah dalam menyiapkan klien yang akan dilakukan BMP untuk:
            \nPemeriksaan laboratorium : RBCs, WBCs dan megakaryocytes.
            \nMengetahui gambaran transplant  fibrotic jaringan atau neoplasma.
            \nPengobatan dan transplant sumsum tulang.`,

    kebijakan: `Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL  Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019`,

    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'A. Persiapan alat',
                    detail: [
                        { text: 'Cairan antiseptic (betadin)' },
                        { text: 'Kasa' },
                        { text: 'Handuk' },
                        { text: 'Local anastesi : lidocain 1 %' },
                        { text: 'Spuit 3 cc, jarum 23 – 25 untuk anastesi, spuit 50 cc untuk aspirasi sumsum tulang' },
                        { text: 'Spinal needle no. 18' },
                        { text: 'Sarung tangan steril' },
                        { text: 'Plester' },
                        { text: 'Atau set BMP lengkap' },
                        { text: 'Perlak' },
                        { text: 'Tabung untuk pemeriksaan test diagnostic' },
                        { text: 'Formulir pemeriksaan laboratorium' }
                    ]
                },
                {
                    desc: 'B. Persiapan pasien',
                    detail: [
                        { text: 'Jelaskan prosedur kepada pasien dan keluarga' },
                        { text: 'Beri posisi pasien yang nyaman sesuai lokasi punksi.' },
                        { text: 'Anjurkan pasien untuk mencegah pergerakan selama tindakan dilakukan .' }
                    ]
                },
                {
                    desc: 'C. Persiapan lingkungan',
                    detail: [
                        { text: 'Siapkan lingkungan sekitar pasien dengan memasang skerm atau menutup tirai jendela / pintu kamar pasien agar privasi pasien terjaga', marker: false }
                    ]
                }
            ]
        },

        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'A. Ucapkan Basmallah' },
                { desc: 'B. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                { desc: 'C. Lakukan verifikasi identitas pasien dengan cara  mencocokan nama pada rekam medik pasien  dengan nama yang tertera pada gelang identitas pasien' },
                { desc: 'D. Mengatur posisi pasien sesuai area yang akan dilakukan punksi (posisi supine ; sternum atau spina iliac aposterior )' },
                { desc: 'E. Membuka area yang akan dilakukan punksi' },
                { desc: 'F. Melakukan perlak dan handuk' },
                { desc: 'G. Membuka set BMP' },
                { desc: 'H. Mengunjukan sarung tangan steril' },
                { desc: 'I. Mengunjukan kassa dan cairan antiseptik untuk desinfektan' },
                { desc: 'J. Mengunjukan spuit 3 cc dan cairan anastesi' },
                { desc: 'K. Mengunjukan spinal needle atau jarum punksi yang ada dalam set BMP' },
                { desc: 'L. Mengunjukan spuit 50 cc atau spuit yang ada didalam set BMP' },
                { desc: 'M. Mengunjukan kassa dan cairan antiseptic setelah punksi dan plester untuk fiksasi' },
                { desc: 'N. Rapihkan pasien dan bereskan alat – alat' },
                { desc: 'O. Menyiapkan sampel darah untuk pemeriksaan laboratorium' },
                { desc: 'P. Ucapkan Hamdalah' },
                { desc: 'Q. Lepaskan sarung tangan (Lihat SPO Melepas sarung tangan PPI)' },
                { desc: 'R. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' }
            ]
        },

        {
            step: 'Evaluasi',
            items: [
                { desc: 'Monitor TTV' },
                { desc: 'Observasi balutan setelah punksi dilakukan' }
            ]
        },

        {
            step: 'Dokumentasi',
            items: [
                { desc: 'Catat :Tanggal dan waktu tindakan dilakukan' },
                { desc: 'Lokasi punksi dilakukan' },
                { desc: 'Jumlah dan warna sumsum yang diaspirasi' },
                { desc: 'Lamanya prosedur' },
                { desc: 'Toleransi pasien terhadap prosedur : TTV, nyeri dan gambaran komplikasi selama dan setelah prosedur dilakukan.' },
                { desc: 'Pemeriksaan laboratorium yang dilakukan ( di kirim ke laboratorium).' },
                { desc: 'Keadaan balutan setelah punksi apakah ada cairan rembesan atau pendarahan.' }
            ]
        }
    ],

    dokumenTerkait: ['Status Pasien'],

    instalasiTerkait: [
        'Instalasi Gawat Darurat',
        'Instalasi Rawat Jalan',
        'Instalasi Rawat Inap',
        'Instalasi Pelayanan Intensif',
        'Instalasi Bedah Sentral',
        'Instalasi Haemodialisa'
    ]
    },
    {
    id: 1325,
    title: 'Persiapan Pasien Pre dan Post ERCP (Endoscopic Retrograde Cholangio Pancreatography)',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur persiapan pasien sebelum dan sesudah tindakan ERCP (Endoscopic Retrograde Cholangio Pancreatography).',
    icon: 'fa-x-ray',
    tags: [
        'ERCP',
        'Endoscopy',
        'Gastroenterologi',
        'Hepatobilier',
        'Pankreas',
        'Medikal Bedah'
    ],

    noDokumen: '445/SPO.3330/Bidper',
    tanggalTerbit: '04 Maret 2019',

    pengertian: `ERCP adalah pemeriksaan fluoroscopic terhadap duktus pancreas dan sistem hepatobiliary dengan menyuntikan media kontras ke dalam papilla duodenum. Pengambilan cairan atau jaringan untuk pemeriksaan histologi dapat dilakukan sebelum endoskop dilepaskan.`,

    tujuan: `Sebagai acuan penerapan langkah-langkah dalam menyiapkan pasien pre dan post ERCP untuk:
            \n- Mengidentifikasi penyebab obstruksi empedu (striktura, kista, batu, tumor)
            \n- Kadang – kadang dilakukan sphincterotomy untuk mengeluarkan batu`,

    kebijakan: `Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL Keperawatan RSUD Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019`,

    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'A. Persiapan alat',
                    detail: [
                        { text: 'Obat premedikasi sesuai program medic' },
                        { text: 'Spuit steril 2 cc (2 buah)' }
                    ]
                },
                {
                    desc: 'B. Persiapan pasien',
                    detail: [
                        { text: 'Jelaskan prosedur pemeriksaan kepada pasien' },
                        { text: 'Lama pemeriksaan 30 menit – 1 jam' },
                        { text: 'Klien akan diberikan premedikasai sedative dan atropine' },
                        { text: 'Anestesi local disemprotkan pada faring' },
                        { text: 'Bila bahan kontras dimasukan  akan terasa panas' },
                        { text: 'Kemungkinan ada rasa sakit di tenggorokan selama beberapa hari sesudah pemeriksaan' },
                        { text: 'Minta tanda tangan surat persetujuan pemeriksaan' }
                    ]
                },
                {
                    desc: 'C. Persiapan lingkungan',
                    detail: [
                        { text: 'Siapkan lingkungan sekitar pasien dengan memasang skerm atau menutup tirai jendela / pintu kamar pasien agar privasi pasien terjaga', marker: false }
                    ]
                }
            ]
        },

        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'A. Puasakan pasien 6–8 jam sebelum pemeriksaan' },
                { desc: 'B. Anjurkan berkemih sebelum ke ruang endoskopi' },
                { desc: 'C. Ucapkan Basmallah' },
                { desc: 'D. Lakukan kebersihan tangan (SPO PPI)' },
                { desc: 'E. Lakukan verifikasi identitas pasien dengan cara  mencocokan nama pada rekam medik pasien  dengan nama yang tertera pada gelang identitas pasien' },
                { desc: 'F. Ukur tanda-tanda vital' },
                { desc: 'G. Pasang infus sesuai program medis' },
                { desc: 'H. Memberikan premedikasi' },
                { desc: 'I. Antar kebagian endoscopy dengan membawa rekam medic dan hasil pemeriksaan diagnostic' },
                { desc: 'J. Selama pemeriksaan dokter akan melakukan',
                    detail: [
                        '1) Anestesi local disemprotkan pada faring',
                        '2) Sekretin IV',
                        '3) Bahan kontras disuntikan setelah endoscopy kateter papilla duodenum dan kateter berada dalam duktus pankreatik',
                        '4) Atropine i.m diberikan sesudah pemeriksaan endoscopy',
                    ]
                 },
                { desc: 'K. Sesudah pemeriksaan',
                    detail: [
                        '1) Pasien tetap puasa 1 – 2 jam sampai dengan reflek menelan positif',
                        '2) Anjurkan kumur – kumur dengan larutan salin hangat atau pemberian tablet hisap',
                        '3) Ucapkan Hamdallah',
                        '4) Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)'
                    ]
                 },
            ]
        },

        {
            step: 'Evaluasi',
            items: [
                { desc: 'Periksa tanda dan gejala retensi urine.' },
                { desc: 'Pantau  tanda – tanda vital , tanda – tanda pendarahan cholangitis atau pancreatitis.' },
                { desc: 'Pantau keluhan nyeri pada perut kuadran kanan atas.' },
                { desc: 'Tanda – tanda cholangitis :',
                    detail: [
                        { text: 'demam, menggigil dan hiperbilirubin pada keadaan lebih lanjut dapat ditemukan hipotensi dan gram negative septicemia.', marker: false}
                    ]
                },
                { desc: 'Tanda – tanda pancreatitis :',
                    detail: [
                        { text: 'nyeri perut kuadran kanan atas, serum amylase meningkat, transient hiperbilirubinemia', marker: false }
                    ]
                }
            ]
        },

        {
            step: 'Dokumentasi',
            items: [
                { desc: 'Catat waktu pemeriksaan' },
                { desc: 'Catat respon pasien setelah tindakan' }
            ]
        }
    ],

    dokumenTerkait: ['Status Pasien'],

    instalasiTerkait: [
        'Instalasi Gawat Darurat',
        'Instalasi Rawat Jalan',
        'Instalasi Rawat Inap',
        'Instalasi Pelayanan Intensif',
        'Instalasi Bedah Sentral',
        'Instalasi Haemodialisa'
    ]
    },
    {
    id: 1326,
    title: 'Menyiapkan dan Merawat Pasien yang Dilakukan Punksi Asites (Paracentesis)',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur penyiapan dan perawatan pasien sebelum dan sesudah tindakan punksi asites (paracentesis).',
    icon: 'fa-stethoscope',
    tags: [
        'Paracentesis',
        'Punksi Asites',
        'Asites',
        'Cairan Peritoneum',
        'Gastroenterologi',
        'Medikal Bedah'
    ],

    noDokumen: '445/SPO.3331/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: `Punksi asites ( paracentesis ) adalah mengeluarkan cairan dari rongga peritoneum.`,
    tujuan: `Sebagai acuan penerapan langkah-langkah dalam menyiapkan klien yang akan dilakukan punksi asites untuk:
            \nMengeluarkan cairan dari rongga peritoneum untuk mengurangi tekanan pada diafragma sehingga tidak mengganggu respiratori.
            \nMemperoleh bahan cairan peritoneal untuk pemeriksaan laboratorium.
            \nMemasukan obat.`,

    kebijakan: `Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL  Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019`,

    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'A. Persiapan alat',
                    detail: [
                        { text: 'Cairan antiseptic : betadin dan alcohol' },
                        { text: 'Obat local anastesi :lidocain 1 % ' },
                        { text: 'Kasa steril' },
                        { text: 'Set punksi asites yang berisi ( satu pasang sarung tangan steril, botol steril, kapas lidi dan kasa steril, kain berlubang steril)' },
                        { text: 'Abbocath No 19- 21atau bisturi' },
                        { text: 'Kanul steril dengan inner trocar kateter ( CAPD  = continuos abdominal dialysis).' },
                        { text: 'Kapas alcohol' },
                        { text: 'Plester' },
                        { text: 'Piala ginjal' },
                        { text: 'Perlak dan kain alas kecil' },
                        { text: 'Meteran' },
                        { text: 'Tensi meter' },
                        { text: 'Spuit steril ( 1 spuit 5 cc, 3 spuit 10 cc- 30 cc)' },
                        { text: 'Sarung tangan bersih 1 pasang' }
                    ]
                },
                {
                    desc: 'B. Persiapan pasien',
                    detail: [
                        { text: 'Jelaskan tentang prosedur yang akan dilakukan' },
                        { text: 'Minta tanda tangan surat persetujuan' },
                        { text: 'Tutup tabir di sekeliling klien' },
                        { text: 'Kaji kandung kencing / anjurkan klien buang air kecil' },
                        { text: 'Ukur lingkaran perut dan beri tanda pada tempat yang diukur' },
                        { text: 'Atur posisi tidur pasien semi fowler atau duduk di kursi.' },
                        { text: 'Jelaskan bahwa perawat akan mendampingi pasien selama pemeriksaan.' }
                    ]
                },
                {
                    desc: 'C. Persiapan lingkungan',
                    detail: [
                        { text: 'Siapkan lingkungan sekitar pasien dengan memasang skerm atau menutup tirai jendela / pintu kamar pasien agar privasi pasien terjaga', marker: false }
                    ]
                }
            ]
        },

        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'A. Ucapkan Basmallah' },
                { desc: 'B. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                { desc: 'C. Lakukan  verifikasi identitas pasien dengan cara mencocokan nama pada rekam medik pasien dengan nama yang tertera pada gelang identitas pasien' },
                { desc: 'D. Meletakan perlak kain alas dibawah bokong klien' },
                { desc: 'E. Membsuka set steril dan dekatkan agar mudah dijangkau dokter.' },
                { desc: 'F. Gunakan sarung tangan (Lihat SPO pemakaian sarung tangan umum PPI)' },
                { desc: 'G. Asisten desinfektan dengan mengunjukan betadin dan alcohol.' },
                { desc: 'H. Asisten dalam local anastesi :',
                    detail: [
                        { text: 'Mengunjukan spuit' },
                        { text: 'Mengunjukan obat anastesi' },
                        { text: 'Menyediakan botol steril' }
                    ]
                },
                { desc: 'I. Asisten dalam aspirasi cairan' },
                { desc: 'J. Setelah jarum punksi dilepaskan ditutup bekas punksi  dengan kasa steril .' },
                { desc: 'K. Mengukur  jumlah cairan yang keluar' },
                { desc: 'L. Ucapkan Hamdalah' },
                { desc: 'M. Cuci peralatan kotor dan merapikan kembali di tempatnya semula.' },
                { desc: 'N. Lepaskan sarung tangan (Lihat SPO Melepas sarung tangan PPI)' },
                { desc: 'O. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' }
            ]
        },

        {
            step: 'Evaluasi',
            items: [
                { desc: 'Kaji tanda – tanda vital tiap 15 menit.' },
                { desc: 'Kaji output urin' },
                { desc: 'Ukur lingkar perut' },
                { desc: 'Kaji tanda pendarahan atau keluar cairan pada kasa penutup bekas punksi.' },
                { desc: 'Kaji toleransi klien selama prosedur.' }
            ]
        },

        {
            step: 'Dokumentasi',
            items: [
                { desc: 'Catat type prosedur punksi asites yang dilakukan' },
                { desc: 'Toleransi klien terhadap prosedur perubahan tanda – tanda vital, keluhan nyeri abdomen.' },
                { desc: 'Catat adanya remebesan cairan pada kasa.' },
                { desc: 'Jumlah dan karakteristik cairan yang dikeluarkan.' },
                { desc: 'Lingkar perut sebelum dan sesudah punksi asites.' }
            ]
        }
    ],

    dokumenTerkait: ['Status Pasien'],

    instalasiTerkait: [
        'Instalasi Gawat Darurat',
        'Instalasi Rawat Jalan',
        'Instalasi Rawata Inap',
        'Instalasi Pelayanan Intensif',
        'Instalasi Bedah Sentral',
        'Instalasi Haemodialisa'
    ]
    },
    {
    id: 1327,
    title: 'Vena Sectie',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur tindakan vena sectie untuk pemasangan akses intravena pada pasien dengan kondisi vena sulit ditemukan atau kebutuhan khusus tertentu.',
    icon: 'fa-stethoscope',
    tags: [
        'Vena Sectie',
        'Infus',
        'Transfusi',
        'Akses Vena',
        'Keperawatan',
        'Tindakan Invasif'
    ],
    noDokumen: '445/SPO.3332/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: [
        { text: 'Vena sectie adalah suatu tindakan menyayat dan memasukkan jarum khusus ke dalam vena sehingga pemberian cairan infus / transfusi dapat dilaksanakan.', marker: false },
        { text: 'Dilakukan pada pasien:', marker: false },
        { text: '1. Yang mengalami kolaps vena, sehingga sulit diraba dan ditusuk.' },
        { text: '2. Anak-anak atau bayi, karena ukuran venanya terlalu kecil.' },
        { text: '3. Dengan kelainan jantung.' }
    ],
    tujuan: `Sebagai acuan penerapan langkah-langkah tindakan vena sectie.`,
    kebijakan: `Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019`,
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'A. Persiapan alat',
                    detail: [
                        { text: '1) Duk steril berisi seperangkat alat vena sectie steril yang terdiri dari:',
                            subDetail: [
                                'Bisturi',
                                'Gunting vena',
                                'Arteri klem',
                                'Pemegang jarum dan jarum jahit kulit',
                                'Pinset chirurgis dan anatomi',
                                'Duk klem',
                                'Duk bolong',
                                'Venocath',
                            ]
                         },
                        { text: '2) Spuit 2,5 cc dan jarum' },
                        { text: '3) Procam dalam tempatnya' },
                        { text: '4) Kain kasa dan kapas lidi steril' },
                        { text: '5) Benang catgut dan Zyde 2/0' },
                        { text: '6) Sarung tangan steril' },
                        { text: '7) Bethadine dan alkohol 70% dalam tempatnya' },
                        { text: '8) Meja atau baki instrumen yang berisi:',
                            subDetail: [
                                'Bengkok',
                                'Cairan infus dan infus set sesuai kebutuhan',
                                'Korentang dan tempatnya',
                                'Plester',
                                'Gunting verban dan verban',
                                'Spalk siap pakai',
                                'Standar infus'
                            ]
                         }
                    ]
                },
                {
                    desc: 'B. Persiapan pasien',
                    detail: [
                        { text: 'Pasien dan keluarganya diberi penjelasan tentang hal-hal yang akan dilakukan' },
                        { text: 'Posisikan pasien sesuai kebutuhan' }
                    ]
                },
                {
                    desc: 'C. Persiapan lingkungan',
                    detail: [
                        { text: 'Siapkan lingkungan sekitar pasien dengan memasang skerm atau menutup tirai jendela / pintu kamar pasien agar privasi pasien terjaga', marker: false }
                    ]
                }
            ]
        },

        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'A. Ucapkan Basmallah' },
                { desc: 'B. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                { desc: 'C. Lakukan verifikasi identitas pasien dengan cara mencocokkan nama pada rekam medik pasien dengan nama yang tertera pada gelang identitas pasien' },
                { desc: 'D. Siapkan peralatan infus (lihat cara memasang infus)' },
                { desc: 'E. Desinfeksi permukaan kulit yang akan disayat, pertama dengan bethadine selanjutnya dengan alkohol' },
                { desc: 'F. Pasang duk bolong di daerah yang akan disayat' },
                {
                    desc: 'G. Lakukan vena sectie yaitu:',
                    detail: [
                        { text: '1) Sayat kulit sampai didapat vena yang dibutuhkan' },
                        { text: '2) Vena disayat / langsung tusukkan venocath' },
                        { text: '3) Venocath difiksasi, dan jahit luka sayatan' },
                        { text: '4) Infus dipasang' },
                        { text: '5) H. Luka dikompres dengan bethadine dan ditutup dengan kain kasa steril' },
                        { text: '6) I. Kalau perlu pasang spalk' },
                        { text: '7) J. Pasien dan alat dirapikan kembali dan diletakkan pada tempatnya semula' },
                        { text: '8) Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' }
                    ]
                },
            ]
        },

        {
            step: 'Evaluasi',
            items: [
                { desc: 'A. Keadaan umum pasien' },
                { desc: 'B. Luka sayatan dan kelancaran tetesan infus' }
            ]
        },

        {
            step: 'Dokumentasi',
            items: [
                { desc: 'Mencatat hasil tindakan dan respon pasien pada dokumen perawatan tentang tanggal dan waktu pemasangan' }
            ]
        }
    ],

    dokumenTerkait: ['Status Pasien'],

    instalasiTerkait: [
        'Instalasi Gawat Darurat',
        'Instalasi Rawat Jalan',
        'Instalasi Rawat Inap',
        'Instalasi Pelayanan Intensif',
        'Instalasi Bedah Sentral',
        'Instalasi Haemodialisa'
    ]
    },
    {
    id: 1328,
    title: 'Menyiapkan Klien yang Akan Dilakukan Pemeriksaan OMD Foto',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur penyiapan klien sebelum dan sesudah pemeriksaan Oesophagus Maag Duodenum (OMD) foto menggunakan zat kontras.',
    icon: 'fa-x-ray',
    tags: [
        'OMD Foto',
        'Oesophagus Maag Duodenum',
        'Radiologi',
        'Barium',
        'Gastrografin',
        'Gastroenterologi'
    ],
    noDokumen: '445/SPO.3333/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: `Oesophagus Maag Duodenum (OMD) adalah serangkaian pemeriksaan dengan X-Ray yang menggunakan zat kontras oral seperti barium sulfat atau zat kontras yang dapat larut dalam air seperti meglumine diatrizoate (gastrografin) untuk melihat gambaran kondisi pada saluran pencernaan bagian atas seperti esofagus, lambung, dan duodenum atau sampai jejunum dengan menggunakan fluoroscopy. Barium diamati perjalanannya melewati saluran pencernaan dan dibuat filmnya.`,
    tujuan: `Sebagai acuan penerapan langkah-langkah dalam menyiapkan klien yang akan dilakukan OMD foto, untuk menentukan adanya inflamasi, ulserasi, striktura, polip, hiatal hernia, atau tumor pada esofagus, lambung, dan duodenum serta menilai adanya masalah motilitas pada organ tersebut.`,
    kebijakan: `Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019`,
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'A. Persiapan alat',
                    detail: [
                        { text: 'Pemeriksaan diagnostik sebelumnya, status, dan kartu opname klien', marker: false },
                    ]
                },
                {
                    desc: 'B. Persiapan klien',
                    detail: [
                        { text: 'Jelaskan tujuan persiapan dan tindakan yang akan dilakukan pada klien terhadap pemeriksaan OMD foto' },
                        { text: 'Mintakan surat persetujuan OMD foto pada klien' }
                    ]
                }
            ]
        },

        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'A. Ucapkan Basmallah' },
                { desc: 'B. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                { desc: 'C. Lakukan verifikasi identitas pasien dengan cara mencocokkan nama pada rekam medik pasien dengan nama yang tertera pada gelang identitas pasien' },
                { desc: 'D. Berikan klien diet rendah serat sehari sebelum pemeriksaan' },
                { desc: 'E. Puasakan klien 8–12 jam sebelum pemeriksaan dan anjurkan klien untuk tidak merokok' },
                { desc: 'F. Hentikan obat-obatan 8 jam sebelum pemeriksaan kecuali ada indikasi' },
                { desc: 'G. Hentikan obat-obatan seperti golongan narkotika dan antikolinergik 24 jam sebelum pemeriksaan' },
                { desc: 'H. Kalau perlu berikan laxantia sesuai dengan pesan medis pada malam hari sebelum pemeriksaan' },
                { desc: 'I. Siapkan foto-foto X-Ray terdahulu, status, dan kartu opname klien' },
                { desc: 'J. Antar klien ke ruang radiologi untuk pemeriksaan dan jelaskan pada klien lamanya pemeriksaan 1–2 jam' },
                { desc: 'K. Anjurkan klien untuk menelan zat kontras barium atau meglumine diatrizoate (gastrografin) sesuai dengan ketentuan. Jelaskan pada klien bahwa zat kontras tersebut kental dan mempunyai rasa seperti kapur' },
                { desc: 'L. Jelaskan pada klien bahwa pemeriksaan ini tidak menimbulkan nyeri atau rasa tidak nyaman' },
                { desc: 'M. Antar klien kembali ke ruangan' },
                { desc: 'N. Berikan laxantia sesuai dengan pesan medis setelah pemeriksaan. Jelaskan pada klien bahwa feses yang keluar akan berwarna lebih terang untuk beberapa hari dan jelaskan pula bahwa barium dapat menyebabkan impaksi feses. Anjurkan klien banyak minum air putih' }
            ]
        },

        {
            step: 'Evaluasi',
            items: [
                { desc: 'Observasi tanda-tanda vital dan keluhan klien' },
                { desc: 'Kaji respon klien selama dan sesudah prosedur pemeriksaan OMD foto' },
                { desc: 'Kaji kemampuan defekasi klien' }
            ]
        },

        {
            step: 'Dokumentasi',
            items: [
                { desc: 'Catat tanda-tanda vital klien' },
                { desc: 'Catat keluhan klien terhadap adanya rasa nyeri atau tidak nyaman, perdarahan, dan mual setelah pemeriksaan' },
                { desc: 'Catat keadaan feses, warna, konsistensi, dan jumlah setelah pemeriksaan' }
            ]
        }
    ],

    dokumenTerkait: ['Status Pasien'],

    instalasiTerkait: [
        'Instalasi Gawat Darurat',
        'Instalasi Rawat Jalan',
        'Instalasi Rawat Inap',
        'Instalasi Pelayanan Intensif',
        'Instalasi Bedah Sentral',
        'Instalasi Haemodialisa'
    ]
    },
    {
    id: 1329,
    title: 'Menyiapkan Klien yang Akan Dilakukan Pemeriksaan Colon Foto',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur penyiapan klien sebelum dan sesudah pemeriksaan colon foto (barium enema) menggunakan zat kontras untuk evaluasi usus besar.',
    icon: 'fa-syringe',
    tags: [
        'Colon Foto',
        'Barium Enema',
        'Radiologi',
        'Usus Besar',
        'Barium',
        'Gastroenterologi'
    ],

    noDokumen: '445/SPO.3334/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: `Colon foto adalah serangkaian pemeriksaan X-Ray dengan menggunakan zat kontras seperti barium sulfat untuk memvisualisasikan keadaan usus besar (colon). Pemeriksaan ini sering kali disebut barium enema.`,
    tujuan: `Sebagai acuan penerapan langkah-langkah dalam menyiapkan klien yang akan dilakukan pemeriksaan colon foto untuk:
            - Menilai adanya masalah pada klien dengan keluhan buang air besar berdarah, pus atau ada mucus serta menilai adanya perubahan pola eliminasi ( diare atau konstipasi )..
            - Mendeteksi adanya tumor, divertikula, stenosis, obstruksi, inflamasi, colitis ulserasi dan polip.
            - Menilai adanya malfungsi usus besar atau adanya kelainan anatomi khusus.`,
    kebijakan: `Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019`,
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'A. Persiapan alat',
                    detail: [
                        { text: 'Pemeriksaan diagnostik sebelumnya, status, dan kartu opname klien', marker: false }
                    ]
                },
                {
                    desc: 'B. Persiapan klien',
                    detail: [
                        { text: 'Jelaskan tujuan, persiapan, dan tindakan yang akan dilakukan pada klien untuk pemeriksaan colon foto' },
                        { text: 'Mintakan surat persetujuan tindakan colon foto pada klien' }
                    ]
                }
            ]
        },

        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'A. Ucapkan Basmallah' },
                { desc: 'B. Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                { desc: 'C. Lakukan verifikasi identitas pasien dengan cara mencocokkan nama pada rekam medik pasien dengan nama yang tertera pada gelang identitas pasien' },
                { desc: 'D. Berikan klien diet rendah serat sehari sebelum pemeriksaan' },
                { desc: 'E. Puasakan klien 8–12 jam sebelum pemeriksaan dan anjurkan klien untuk tidak merokok' },
                { desc: 'F. Berikan laxantia sehari sebelum pemeriksaan atau sesuai pesan medis' },
                { desc: 'G. Hentikan obat-obatan 8 jam sebelum pemeriksaan kecuali ada indikasi' },
                { desc: 'H. Hentikan obat-obatan seperti golongan narkotika dan antikolinergik 24 jam sebelum pemeriksaan' },
                { desc: 'I. Berikan enema pada pagi hari sebelum pemeriksaan atau sesuai program medis' },
                { desc: 'J. Jelaskan pada klien bahwa selama pemeriksaan akan dipasang irrigator melalui anus untuk memasukkan barium ke dalam colon dan jelaskan pada klien bahwa akan mengalami rasa tidak nyaman dan kadang-kadang kram pada abdomen' },
                { desc: 'K. Siapkan foto-foto X-Ray terdahulu, status, dan kartu opname klien' },
                { desc: 'L. Antar pasien ke ruang radiologi untuk pemeriksaan dan jelaskan pada pasien lamanya pemeriksaan 1–2 jam' },
                { desc: 'M. Anjurkan klien menarik napas dalam dan menahan sfingter anus selama pemeriksaan' },
                { desc: 'N. Ucapkan Hamdalah' },
                { desc: 'O. Berikan laxantia atau enema setelah pemeriksaan selesai' },
                { desc: 'P. Anjurkan klien minum air putih banyak kecuali bila ada kontraindikasi' },
                { desc: 'Q. Observasi tanda-tanda vital dan keluhan klien' }
            ]
        },

        {
            step: 'Evaluasi',
            items: [
                { desc: 'Kaji keluhan klien selama dan sesudah pemeriksaan colon foto' },
                { desc: 'Kaji kemampuan defekasi klien' }
            ]
        },

        {
            step: 'Dokumentasi',
            items: [
                { desc: 'Catat tanda-tanda vital klien' },
                { desc: 'Catat keluhan klien terhadap adanya rasa nyeri atau tidak nyaman dan kram abdomen' },
                { desc: 'Catat keadaan feses, warna, konsistensi, dan jumlah setelah pemeriksaan' }
            ]
        }
    ],

    dokumenTerkait: ['Status Pasien'],

    instalasiTerkait: [
        'Instalasi Gawat Darurat',
        'Instalasi Rawat Jalan',
        'Instalasi Rawat Inap',
        'Instalasi Pelayanan Intensif',
        'Instalasi Bedah Sentral',
        'Instalasi Haemodialisa'
    ]
    },
    {
    id: 1330,
    title: 'Perawatan Pasien dengan GIPS',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur perawatan pasien dengan GIPS.',
    icon: 'fa-bandage',
    tags: [
        'GIPS',
        'Perawatan GIPS',
        'Fraktur',
        'Ortopedi',
        'Imobilisasi',
        'Keperawatan'
    ],

    noDokumen: '445/SPO.3335/Bidper',
    tanggalTerbit: '4 Maret 2019',
    pengertian: `GIPS adalah suatu kerangka yang keras yang terbuat dari plester, fiberglass, atau materi plastic yang digunakan untuk mengimobilisasikan bagian tubuh yang mengalami fraktur.`,
    tujuan: `Sebagai acuan penerapan langkah-langkah perawatan pasien dengan GIPS untuk:
Mengimobilisasikan bagian tubuh dalam posisi tertentu.
Memberikan penekanan / kompresi jaringan lunak.
Mencegah dan memperbaiki deformitas
Menyokong dan menstabilkan sendi yang lemah.`,
    kebijakan: `Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL  Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019`,
    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan alat',
                    detail: [
                        { text: 'Plester' },
                        { text: 'Pena untuk menandai drainase.' }
                    ]
                },
                {
                    desc: 'Persiapan klien',
                    detail: [
                        { text: 'Jelaskan prosedur dan rencanakan untuk mengkaji ulang gips tiap jam dalam 24 jam pertama dan tiap 2 s/d 4 jam seterusnya.', marker: false }
                    ]
                }
            ]
        },

        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'Ucapkan Basmallah' },
                { desc: 'Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                { desc: 'Lakukan verifikasi identitas pasien dengan cara  mencocokan nama pada rekam medik pasien  dengan nama yang tertera pada gelang identitas pasien' },
                { desc: 'Lapisan setiap tepi gips   yang kasar dengan 1,5 s.d 2 buah plester.' },
                { desc: 'Beritahu dokter jika ada area gips yang terlalu kencang.' },
                { desc: 'Tinggikan ekstrimitas yang terpasang gips sehingga sama tinggi dengan jantung.' },
                { desc: 'Untuk klien yang terpasang gips yang luas, tempatkan posisi tempat tidur dalam posisi tredenburg untuk hari pertama atau kedua untuk mencegah bengkak kecuali ada kontraindikasi dengan kondisi klien.' },
                { desc: 'Ubah posisi klien pada waktu – waktu tertentu sehingga semua permukaan gips terpapar udara sehingga dapat kering.' },
                { desc: 'Jika gips masih basah ubah posisi klien tiap jam' },
                { desc: 'Jika gips sudah kering ubah posisi tiap 2 jam saja sudah cukup kecuali klien merasa tidak nyaman.' },
                { desc: 'Beri bantuan klien sehingga dapat mencegah injury.' },
                { desc: 'Minta klien untuk tidak menggunakan pisau, pulpen atau benda – benda keras lainnya untuk menggaruk kulit dibawah permukaan gips.' },
                { desc: 'Cium / membaui tepi gips yang terbuka untuk mengkaji adanya infeksi dibawah gips.' }
            ]
        },

        {
            step: 'Evaluasi',
            items: [
                { desc: 'Evaluasi gips dengan memeriksa apakah ada retak atau remuk dengan mengajukan pertanyaan - pertanyaan ini :',
                    detail: [
                        { text: 'apakah ada rasa tidak nyaman dibawah gips?' },
                        {text: 'apakah gips menggesek kulit?' },
                        {text: 'Apakah tepi gips lembut?' },
                        {text: 'Apakah gips lembut?' },
                        {text: 'apakah gips kering? berbau?' }
                    ]
                }
            ]
        },

        {
            step: 'Dokumentasi',
            desc: 'Catat temuan – temuan dari pengkajian dan intervensi dalam catatan perawat.'
        }
    ],

    dokumenTerkait: ['Status Pasien'],

    instalasiTerkait: [
        'Instalasi Gawat Darurat',
        'Instalasi Rawat Jalan',
        'Instalasi Rawata Inap',
        'Instalasi Pelayanan Intensif',
        'Instalasi Bedah Sentral',
        'Instalasi Haemodialisa'
    ]
    },
    {
    id: 1331,
    title: 'Perawatan Pasien dengan Traksi',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur perawatan pasien dengan traksi.',
    icon: 'fa-bed-pulse',
    tags: [
        'Traksi',
        'Perawatan Traksi',
        'Skin Traksi',
        'Skeletal Traksi',
        'Ortopedi',
        'Keperawatan'
    ],

    noDokumen: '445/SPO.3336/Bidper',
    tanggalTerbit: '4 Maret 2019',

    pengertian: `Traksi adalah aplikasi dengan menggunakan kekuatan pada bagian tubuh tertentu pada musculoskeletal dengan menggunakan tali beban dan katrol.`,

    tujuan: `Sebagai acuan penerapan langkah-langkah perawatan pasien dengan traksi untuk:
            \nMenurunkan derajat fraktur dan mengimobilisasikan fraktur.
            \nMengembalikan posisi normal ekstrimitas yang mengalami trauma / fraktur 
            \nMengurangi spasme otot dan nyeri.
            \nMencegah deformitas.`,

    kebijakan: `Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL  Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019`,

    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan alat pada traksi kulit ( skin traksi )',
                    detail: [
                        { text: 'Bantal keras ( bantal pasir)' },
                        { text: 'Bedak kulit' },
                        { text: 'Kom berisi air putih' },
                        { text: 'Handuk' },
                        { text: 'Sarung tangan bersih' }
                    ]
                },
                {
                    desc: 'Persiapan alat pada traksi skeletal',
                    detail: [
                        { text: 'Zat pembersih untuk perawatan pin.' },
                        { text: 'Set ganti balut' },
                        { text: 'Salep anti bakteri ( K/P)' },
                        { text: 'Kantung sampah infeksius' },
                        { text: 'Sarung tangan steril' },
                        { text: 'Lidi kapas' },
                        { text: 'Povidone iodine ( K/P)' },
                        { text: 'Kassa steril' },
                        { text: 'Piala ginjal' }
                    ]
                },
                {
                    desc: 'Persiapan pasien',
                    detail: [
                        { text: 'Jelaskan cara prosedur pada pasien' },
                        { text: 'Rencanakan waktu dan jadwal klien untuk melakukan pengkajian, pengobatan dan ADL.' }
                    ]
                }
            ]
        },

        {
            step: 'Pelaksanaan',
            items: [
                {
                    desc: 'Traksi kulit',
                    detail: [
                        { text: 'Ucapkan Basmallah' },
                        { text: 'Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                        { text: 'Lakukan verifikasi identitas pasien dengan cara  mencocokan nama pada rekam medik pasien  dengan nama yang tertera pada gelang identitas pasien' },
                        { text: 'Cuci keringkan dan berikan bedak kulit sebelum traksi dipasang kembali.' },
                        { text: 'Lepas sarung tangan' },
                        { text: 'Anjurkan pasien untuk menggerakan ekstrimitas distal yang terpasang traksi.' },
                        { text: 'Berikan bantalan dibawah ekstrimitas yang tertekan.' },
                        { text: 'Berikan penyokong kaku ( foot plates ) dan lepaskan setiap 2 jam lalu anjurkan klien latihan ektstrimitas bawah untuk fleksi, ekstensi dan rotasi' }
                    ]
                },
                {
                    desc: 'Traksi skeletal',
                    detail: [
                        { text: 'Ucapkan Basmallah' },
                        { text: 'Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                        { text: 'Lakukan verifikasi identitas pasien dengan cara  mencocokan nama pada rekam medik pasien  dengan nama yang tertera pada gelang identitas pasien' },
                        { text: 'Atur posisi klien dalam posisi lurus ditempat tidur untuk mempertahankan tarikan traksi yang optimal.' },
                        { text: 'Buka set ganti balut cairan pembersih dan gunakan sarung tangan steril.' },
                        { text: 'Bersihkan pin serta area kulit sekitar pin menggunakan lidi kapas dengan teknik menjauh dari pin ( dari dalam keluar).' },
                        { text: 'Beri salep anti bakteri jika diperlukan sesuai protocol RS.' },
                        { text: 'Tutup kassa dilokasi penusukan pin' },
                        { text: 'Ucapkan Hamdallah' },
                        { text: 'Cuci peralatan kotor dan rapihkan peralatan.' },
                        { text: 'Lepaskan sarung tangan (Lihat SPO Melepas sarung tangan PPI)' },
                        { text: 'Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' }
                    ]
                }
            ]
        },

        {
            step: 'Evaluasi',
            items: [
                { desc: 'Evaluasi respon pasien terhadap nyeri dan ketidaknyamanan.' },
                { desc: 'Evaluasi tanda – tanda vital' },
                { desc: 'Kaji adanya kerusakan kulit dibawah balutan traksi dan bagian yang tertekan.' },
                { desc: 'Evaluasi cairan yang keluar, bau kemerahan pada lokasi pin.' },
                { desc: 'Evaluasi gangguan sensorik motorik, capillary refill dan temperature ekstrimitas.' }
            ]
        },

        {
            step: 'Dokumentasi',
            items: [
                { desc: 'Catat tanggal dan waktu intervensi yang dilakukan.' },
                { desc: 'Catat respon klien terhadap pemasangan traksi' },
                { desc: 'Catat kondisi pin dan kulit sekitar traksi' }
            ]
        }
    ],

    dokumenTerkait: ['Status Pasien'],

    instalasiTerkait: [
        'Instalasi Gawat Darurat',
        'Instalasi Rawat Jalan',
        'Instalasi Rawata Inap',
        'Instalasi Pelayanan Intensif',
        'Instalasi Bedah Sentral',
        'Instalasi Haemodialisa'
    ]
    },
    {
    id: 1332,
    title: 'Melakukan Irigasi Kandung Kemih pada Pasien Post Operasi BPH ( TURP)',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur melakukan irigasi kandung kemih pada pasien post operasi BPH ( TURP).',
    icon: 'fa-syringe',
    tags: [
        'Irigasi Kandung Kemih',
        'BPH',
        'TURP',
        'Urologi',
        'Kateter',
        'Keperawatan'
    ],

    noDokumen: '445/SPO.3337/Bidper',
    tanggalTerbit: '4 Maret 2019',

    pengertian: `Irigasi kandung kemih adalah suatu tindakan mengirigasi kandung kemih dengan menggunakan kateter yang umumnya dilakukan pada pasien pasca operasi TURP ( transurethral retroperitoneal prostatectomy).`,

    tujuan: `Sebagai acuan penerapan langkah-langkah dalam melakukan irigasi kandung kemih pada pasien post operasi BPH untuk:
Membantu mencegah obstruksi pada saluran urynari dengan cara membilas adanya bekuan darah yang terbentuk setelah pembedahan prostat atau kandung kemih.
Mengobati iritasi, inflamasi atau infeksi kandung kemih.`,

    kebijakan: `Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL  Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019`,

    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan alat',
                    detail: [
                        { text: 'Sarung tangan bersih' },
                        { text: 'Cairan irigasi sesuai dengan pesan medic ( biasanya normal saline).' },
                        { text: 'Selang infuse.' },
                        { text: 'Cairan anriseptik : alcohol dan providone iodine.' },
                        { text: 'Klem kateter.' },
                        { text: 'Folley kateter dengan triple lumen dan urine bag.' }
                    ]
                },
                {
                    desc: 'Persiapan pasien',
                    detail: [
                        { text: 'Menjelaskan tujuan dan  prosedur pemeriksaan pada pasien dan keluarga.', marker: false }
                    ]
                }
            ]
        },

        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'Ucapkan Basmallah' },
                { desc: 'Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                { desc: 'Lakukan verifikasi identitas pasien dengan cara  mencocokan nama pada rekam medik pasien  dengan nama yang tertera pada gelang identitas pasien' },
                { desc: 'Jelaskan prosedur yang akan dilakukan dan alasanya.' },
                { desc: 'Tempatkan klien pada posisi yang nyaman.' },
                { desc: 'Lihat kembali standar prosedur sesuai protocol RS.' },
                { desc: 'Letakkan label cairan irigasi yang digunakan : tanggal, waktu dan tipe cairan.' },
                { desc: 'Siapkan cairan ( harus steril) isi selang infuse dengan cairan keluarkan udara dalam selang.' },
                { desc: 'Lumen kateter 3 cabang bagian irigasi didesinfeksi dengan cairan antispetik dan hubungkan dengan selang infuse.' },
                { desc: 'Ucapkan Hamdallah' },
                { desc: 'Lepaskan sarung tangan (Lihat SPO melepas sarung tangan PPI)' },
                { desc: 'Atur tetesan infuse sesuai instruksi dokter .' },
                { desc: 'Bila urine tampak merah / ada bekuan darah tingkatkan irigasi tetesan sampai dengan bersih.' },
                { desc: 'Ganti cairan irigasi bila diperlukan jangan biarkan botol cairan  irigasi kosong .' },
                { desc: 'Gunakan sarung tangan kosongkan urine bag bila dibutuhkan, Perhatikan prinsip steril' },
                { desc: 'Bandingkan urine output dengan cairan irigasi yang diberikan tiap 1- 2 jam.' },
                { desc: 'Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' }
            ]
        },

        {
            step: 'Evaluasi',
            items: [
                { desc: 'Observasi pasien terhadap adanya bekuan darah pada urine dan sedimen.' },
                { desc: 'Tanyakan pasien adanya keluhan nyeri dan adanya demam.' },
                { desc: 'Bandingkan urine output dengan cairan irigasi total.' },
                { desc: 'Kaji kelancaran tetesan infuse cairan irigasi, lapor medic bila terjadi obstruksi irigasi.' }
            ]
        },

        {
            step: 'Dokumentasi',
            items: [
                { desc: 'Catat prosedur yang dilakukan' },
                { desc: 'Catat repon pasien' },
                { desc: 'Catat jumlah cairan irigasi dan hitung intake dan out out cairan.' },
                { desc: 'Catat Karakteristik dan penampilan urine yang keluar.' },
                { desc: 'Catat Tanggal dan waktu pemeberian.' }
            ]
        }
    ],

    dokumenTerkait: ['Status Pasien'],

    instalasiTerkait: [
        'Instalasi Gawat Darurat',
        'Instalasi Rawat Jalan',
        'Instalasi Rawata Inap',
        'Instalasi Pelayanan Intensif',
        'Instalasi Bedah Sentral',
        'Instalasi Haemodialisa'
    ]
    },
    {
    id: 1333,
    title: 'Menyiapkan Klien untuk Pemeriksaan BNO - IVP',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur menyiapkan klien untuk pemeriksaan BNO - IVP.',
    icon: 'fa-x-ray',
    tags: [
        'BNO',
        'IVP',
        'KUB',
        'Urologi',
        'Radiologi',
        'Keperawatan'
    ],

    noDokumen: '445/SPO.3338/Bidper',
    tanggalTerbit: '4 Maret 2019',

    pengertian: `BNO – IVP ( blass nier oversicht- intravenous pylography) BNO sering disebut juga kidney ureter bladder ( KUB ). BNO – IVP merupakan suatu pemeriksaan diagnostic dengan menggunakan x ray dan diinjeksikan medium kontras secara intravena untuk memvisualisasikan seluruh saluran urinary mulai dari ginjal, ureter dan kandung kemih.`,

    tujuan: `Sebagai acuan penerapan langkah-langkah persiapan klien dalam pemeriksaan BNO-IVP untuk:
Melihat ukuran, struktur dan fungsi ginjal, ureter dan kandung kemih dan mengidentifikasi adanya kelainan pada bentuk, ukuran dan fungsi ginjal.
Melihat lokasi batu, tumor, kiste, hidroneprosis, pyelonephritis, renovaskuler hipertensi.`,

    kebijakan: `Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL  Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019`,

    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'Persiapan alat',
                    detail: [
                        { text: 'Kursi / brancard untuk membawa klien ke INSTALASI radiologi.' },
                        { text: 'Pemeriksaan diagnostic sebelumnya, status dan kartu opname klien.' }
                    ]
                },
                {
                    desc: 'Persiapan klien',
                    detail: [
                        { text: 'Jelaskan pada klien dan keluarga tentang tujuan dan prosedur pemeriksaan.' },
                        { text: 'Meminta klien dan keluarga untuk mengisi dan menandatangani surat persetujuan pemeriksaan .' },
                        { text: 'Buat perjanjian dengan INSTALASI radiologi.' },
                        { text: 'Puasakan klien 8 – 12 jam sebelum pemeriksaan.' },
                        { text: 'Beri pencahar pada malam hari sebelum pemeriksaaan dan enema pada pagi hari menjelang pemeriksaan.' },
                        { text: 'Koordinasi pada INSTALASI radiologi mengenai persiapan.' }
                    ]
                }
            ]
        },

        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'Ucapkan Basmallah' },
                { desc: 'Lakukan kebersihan tangan (Lihat SPO cuci tangan PPI)' },
                { desc: 'Lakukan verifikasi identitas pasien dengan cara  mencocokan nama pada rekam medik pasien  dengan nama yang tertera pada gelang identitas pasien' },
                { desc: 'Jelaskan pada klien tentang tujuan prosedur yang akan dilakukan yaitu untuk melihat organ ginjal, ureter dan kandung kemih.' },
                { desc: 'Jelaskan pada klien bahwa kemerahan atau rasa terbakar dan rasa asin atau logam akan terjadi selama atau setelah zat kontras disuntikan per IV.' },
                { desc: 'Anjurkan klien bertanya dan mengekspresikan perasaanya.' },
                { desc: 'Bawa klien ke INSTALASI radiology dan beri posisi supine.' },
                { desc: 'Anjurkan klien sebelum pemeriksaan harus mengosongkan kandung kemih.' },
                { desc: 'Klien baring terlentang dimeja sinar x dilakukan 3,5,10,15, dan 20 menit sesudah kontras disuntikan.' },
                { desc: 'Setelah diinjeksi kaji tanda – tanda vital dan gejala anaphylasis seperti kegagalan nafas, shock dan TD turun.  Obat – obatan dan alat emergency disiapkan.' },
                { desc: 'Setelah prosedur kaji adanya keluhan kelemahan. Anjurkan untuk bedrest dan ambulasi dibantu.' }
            ]
        },

        {
            step: 'Evaluasi',
            desc: 'Kaji tanda – tanda vital'
        },

        {
            step: 'Dokumentasi',
            desc: 'Catat prosedur pemeriksaan, tanggal waktu dan repon klien'
        }
    ],

    dokumenTerkait: ['Status Pasien'],

    instalasiTerkait: [
        'Instalasi Gawat Darurat',
        'Instalasi Rawat Jalan',
        'Instalasi Rawata Inap',
        'Instalasi Pelayanan Intensif',
        'Instalasi Bedah Sentral',
        'Instalasi Haemodialisa'
    ]
    },
    {
    id: 1334,
    title: 'Komunikasi Terapetik',
    category: 'tindakan',
    subCategory: 'medikalBedah',
    description: 'Prosedur komunikasi terapetik.',
    icon: 'fa-comments',
    tags: [
        'Komunikasi Terapetik',
        'Komunikasi',
        'Keperawatan',
        'Bidan',
        'Pasien',
        'Keluarga'
    ],

    noDokumen: '445/ SPO.3339/Bidper',
    tanggalTerbit: '4 Maret 2019',
    pengertian: `Komunikasi yang direncanakan oleh perawat/bidan secara sadar yang ditujukan kepada  klien dan keluarga,  baik secara verbal maupun non verbal yang tujuan dan kegiatannya difokuskan untuk kesembuhan klien`,
    tujuan: `Sebagai acuan penerapan langkah-langkah pelaksanaan komunikasi terapetik untuk:
            Menciptakan hubungan saling percaya antara petugas kesehatan dengan klien dan keluarga
            Meningkatkan fungsi dan kemampuan petugas kesehatan dalam melakukan  komunikasi dengan klien untuk mencapai tujuan yang realistik
            Memenuhi kebutuhan pasien akan komunikasi adekuat 
            Mencegah terjadinya kesalahfahaman akibat komunikasi yang tidak lancar`,
    ruangLingkup: `Pertahankan hubungan terapeutik dengan klien dan keluarga dengan cara :
                Cegah konflik dengan klien dan keluarga, bila terjadi konflik selesaikan dengan segera sesuai dengan jalur koordinasi yang telah ditentukan
                Komunikasi jangan tergesa-gesa, Jangan menggunakan istilah medis / teknis yang sulit dimengerti klien / keluarga
                Tanggap terhadap respon serta kritik dari klien / keluarga
                Jujur dalam memberi asuhan keperawatan kepada klien dan keluarga
                Hargai kebiasaan dan kepercayaan yang diyakini klien dan keluarga selama tidak bertentangan dengan prinsip kesehatan
                Jaga kerahasiaan klien dan keluarga`,
    kebijakan: `Surat Keputusan Pemberlakuan STANDAR PROSEDUR OPERASIONAL  Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019`,
    prosedur: [
        {
            step: 'Tahap Pra Interaksi / Persiapan',
            items: [
                {
                    desc: 'Persiapan perawat/Bidan:',
                    detail: [
                        { text: 'Pastikan penampilan rapih' },
                        { text: 'Validasi identitas dan riwayat psiko, sosial, spiritual pasien untuk menentukan tehnik komunikasi yang tepat' },
                        { text: 'Kumpulkan data tentang klien dan buat rencana pertemuan' },
                        { text: 'Yakinkan tujuan tindakan dan kuasai cara melakukan tindakan yang akan dilakukan (Lihat SPO tindakan)' }
                    ]
                },
                {
                    desc: 'Persiapan klien',
                    detail: [
                        { text: 'Pastikan pasien tidak sedang kesakitan, ngantuk / lapar.', marker: false}
                    ]
                },
                {
                    desc: 'Persiapan lingkungan :',
                    detail: [
                        { text: 'Ciptakan lingkungan yang kondusif' },
                        { text: 'Kalau perlu lakukan komunikasi di tempat  khusus, bila komunikasi bersifat rahasia' }
                    ]
                }
            ]
        },

        {
            step: 'Tahap Perkenalan – Orientasi',
            items: [
                { desc: 'Lakukan 4 S (Senyum, Salam, Sapa, Sopan Santun) sambil mengucapkan “Assalaamu”alaikum wr.wb”' },
                { desc: 'Perawat/ Bidan memperkenalkan diri dan verifikasi identitas pasien serta tanyakan ingin dipanggil dengan apa' },
                { desc: 'Tanyakan keadaan dan keluhan pasien' },
                { desc: 'Jelaskan prosedur, tujuan tindakan, perkiraan lama waktu pertemuan serta kontrak waku(topic, tempat dan kegiatan)' },
                { desc: 'Lakukan Informed Consent secara tertulis bila diperlikan' },
                { desc: 'Berikan kesempatan klien dan keluarga bertanya.' }
            ]
        },

        {
            step: 'Tahap Kerja',
            items: [
                {
                    desc: 'Bina hubungan saling percaya dengan cara :',
                    detail: [
                        { text: 'Tampilkan sikap ramah, sopan dan siap membantu' },
                        { text: 'Perkenalkan diri / nama perawat' },
                        { text: 'Sapa pasien dengan ramah kalau perlu panggil pasien dengannama yang disukai pasien' },
                        { text: 'Motivasi klien / keluarga untuk untuk mengungkapkan perasaan dan pandangannya secara bebas' },
                        { text: 'Dengarkan ungkapan klien / keluarga secara empati' },
                        { text: 'Menggunakan bahasa yang mudah dimengerti klien dengan bicara langsung menghadap klien dengan posisi tubuh terbuka, pertahankan kontak mata serta perhatikan intonasi suara, ekspresi wajah dan body language' },
                    ]
                },
                    { desc: 'Gunakan sarana komunikasi yang tersedia secara tepat dan benar sesuai kondisi klien' },
                    { desc: 'Berikan metoda alternatif komunikasi kepada klien yang tidak dapat berkomunikasi secara verbal dengan adekuat' },
                    { desc: 'Ajarkan teknik untuk memperbaiki bicara pada klien yang mengalami gangguan untuk berkomunikasi secara verbal (dapat dilakukan dengan berkolaborasi dengan petugas speech therapi)' },
                    { desc: 'Gunakan faktor-faktor yang dapat meningkatkan pendengaran pada pasien yang mengalami gangguan pendengaran' },
                    { desc: 'Libatkan keluarga untuk teknik komunikasi dan pendekatan terhadap klien untuk meningkatkan kemampuan komunikasi klien' },
                    { desc: 'Melaksanakan tindakan terapetik nursing intervention dan surveillance nursing intervention' },
                    { desc: 'Melaksanakan tindakan kolabratif' },
                    { desc: 'Melakukan penyuluhan kesehatan' },
                    { desc: 'Lakukan kegiatan sesuai rencana' },
                    { desc: 'Awali tindakan dengan mengucap Basmallah dan diakhiri dengan mengucap Hamdallah' }
            ]
        },

        {
            step: 'Tahap Terminasi',
            items: [
                { desc: 'Sampaikan terima kasih kepada klien atas kerjasamanya' },
                { desc: 'Evaluasi hasil seluruh tindakan dan eksplorasi perasaan klien setelah dilkukan tindakan/pertemuan' },
                { desc: 'Berikan feedback dan reinforcement positif kepada klie' },
                { desc: 'Lakukan kontrak untuk kegiatan selanjutnya' },
                { desc: 'Ucapkan salam “Assalaamu’alaikum wr.wb”' },
                { desc: 'Dokumentasikan hasil tindakan' }
            ]
        }
    ],

    dokumenTerkait: ['Status pasien'],

    instalasiTerkait: [
        'Seluruh Instalasi Perawatan'
    ]
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
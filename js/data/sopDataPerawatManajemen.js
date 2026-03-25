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
        title: 'Sistem Penugasan: MPKP dalam Pelayanan Keperawatan',
        category: 'manajemen',
        description: 'Model Praktek Keperawatan Profesional (MPKP) menggunakan sistem penugasan modifikasi Keperawatan Primer dan Tim.',
        icon: 'fa-users',
        tags: ['MPKP', 'Penugasan', 'Keperawatan Primer', 'Tim'],
        noDokumen: '445/SPO.3380/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Model Praktek Keperawatan Profesional (MPKP) diartikan sebagai suatu sistem (struktur, proses dan nilai-nilai profesional) yang memungkinkan perawat profesional mengatur pemberian asuhan keperawatan termasuk lingkungan, yang menopang pemberian asuhan tersebut (Hoffart & Woods, 1996). Sistem Penugasan yang digunakan adalah modifikasi dari Keperawatan Primer dan tim.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam melaksanakan pengelolaan asuhan keperawatan di ruang rawat.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Operan', desc: 'Kepala Ruangan memimpin operan', detail: 'Membagi alokasi pasien sesuai jumlah tim.' },
            { step: 'Pre-conference', desc: 'Ketua tim memimpin pre-conference', detail: 'Perencanaan sebelum pelaksanaan asuhan.' },
            { step: 'Rencana Kerja Harian', desc: 'Buat Rencana Kerja Harian', detail: 'Ketua tim/PP dan PA membuat rencana sesuai pasien tanggung jawabnya.' },
            { step: 'Pelaksanaan Asuhan', desc: 'Laksanakan asuhan keperawatan', detail: 'Selama satu shift kerja.' },
            { step: 'Post-conference', desc: 'Laksanakan post-conference', detail: '1 jam sebelum shift berakhir, buat laporan hasil asuhan.' },
            { step: 'Serah Terima', desc: 'Ikuti operan ke shift berikutnya', detail: 'Sampaikan laporan hasil kegiatan dan program untuk shift berikutnya.' },
            { step: 'Serah Terima Pasien', desc: 'Pimpin serah terima pasien', detail: 'Ke shift berikutnya oleh Ketua tim/PP.' }
        ],
        dokumenTerkait: ['Rekam Medik Pasien', 'Form Penilaian Kinerja Perawat', 'Rencana Kerja Harian'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anesthesi dan Perawatan Intensif', 'Instalasi Hemodialisa', 'Instalasi Gawat Darurat']
    },
    {
        id: 602,
        title: 'Conference dalam Konteks MPKP',
        category: 'manajemen',
        description: 'Pertemuan tim harian untuk membahas masalah klien dan merencanakan tindakan keperawatan.',
        icon: 'fa-comments',
        tags: ['Conference', 'Pre Conference', 'Post Conference', 'MPKP'],
        noDokumen: '445/SPO.3382/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Conference merupakan pertemuan tim yang dilakukan setiap hari, setelah melakukan operan dinas pagi, sore atau malam sesuai dengan jadwal dinas kepala tim / PP.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam melaksanakan conference pengelolaan asuhan keperawatan di ruang rawat dengan tujuan: Membahas masalah setiap klien berdasarkan renpra yang telah dibuat PP; Menetapkan klien yang menjadi tanggungjawab masing-masing PA; Membahas rencana tindakan keperawatan untuk setiap klien pada hari itu; Mengidentifikasi tugas PA untuk setiap klien yang menjadi tanggungjawabnya.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan', desc: 'Siapkan dokumen', detail: 'Rekam medik pasien dan buku komunikasi.' },
            { step: 'Pre-conference', desc: 'PP menyampaikan perkembangan pasien', detail: 'Meliputi keadaan umum, keluhan, TTV, hasil lab, masalah, rencana keperawatan, dan rencana medis.' },
            { step: 'Pre-conference', desc: 'PP mendiskusikan masalah dengan PA', detail: 'Mengarahkan tentang pelayanan, infus, I/O, pemberian obat, dokumentasi, dan standar prosedur.' },
            { step: 'Post-conference', desc: 'Diskusikan hasil evaluasi', detail: 'Membahas perkembangan pasien, kesulitan tindakan, memberikan arahan, dan rencana untuk shift berikutnya.' }
        ],
        dokumenTerkait: ['Rekam medik pasien', 'Rencana kerja harian', 'Catatan Perkembangan Pasien Terintegrasi'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Hemodialisa', 'Instalasi Gawat Darurat', 'Instalasi Bedah Sentral', 'Instalasi Rawat Jalan']
    },
    {
        id: 603,
        title: 'Supervisi',
        category: 'manajemen',
        description: 'Pengawasan dan pembinaan berkesinambungan untuk meningkatkan kemampuan perawat dan mutu pelayanan.',
        icon: 'fa-clipboard-list',
        tags: ['Supervisi', 'Pengawasan', 'Pembinaan'],
        noDokumen: '445/SPO.3383/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Supervisi merupakan upaya untuk membantu pembinaan dan peningkatan kemampuan pihak yang disupervisi agar mereka dapat melaksanakan tugas kegiatan yang telah ditetapkan secara efisien dan efektif (Sudjana D, 2004). Supervisi keperawatan adalah kegiatan pengawasan dan pembinaan yang dilakukan secara berkesinambungan oleh supervisor mencakup masalah pelayanan keperawatan, masalah ketenagaan, dan peralatan agar pasien mendapat pelayanan yang bermutu setiap saat (Depkes, 2000).',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam melaksanakan supervisi asuhan keperawatan di ruang rawat untuk Pemenuhan dan peningkatan pelayanan pada klien dan keluarga yang berfokus pada kebutuhan, keterampilan, dan kemampuan perawat dalam melaksanakan tugas.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan', desc: 'Mengadakan persiapan pengawasan', detail: 'Menentukan tujuan, metode, standar, dan kriteria pengukuran.' },
            { step: 'Pelaksanaan', desc: 'Menjalankan pengawasan', detail: 'Membuat rencana dan melaksanakan pengawasan.' },
            { step: 'Penilaian', desc: 'Penilaian dari pelaksanaan', detail: 'Memperbaiki penyimpangan dan mengumpulkan informasi.' },
            { step: 'Tindak Lanjut', desc: 'Mengidentifikasi dan menganalisis masalah', detail: 'Mencari alternatif dan melaksanakan upaya pemecahan masalah.' }
        ],
        dokumenTerkait: ['Rekam Medik Pasien', 'Format Penilaian Kinerja Perawat', 'Format Supervisi Kinerja Perawat'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Rawat Jalan', 'Instalasi Hemodialisa', 'Instalasi Gawat Darurat', 'Instalasi Bedah Sentral']
    },
    {
        id: 604,
        title: 'Kontrol Pasien dalam Konteks MPKP',
        category: 'keperawatan',
        description: 'Kegiatan interaksi dan observasi pasien di luar tindakan terencana untuk optimalisasi asuhan.',
        icon: 'fa-heartbeat',
        tags: ['Kontrol Pasien', 'Observasi', 'Interaksi'],
        noDokumen: '445/SPO.3386/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Kontrol pasien adalah suatu kegiatan melaksanakan interaksi dan mengobservasi pasien diluar kegiatan pelaksanaan tindakan keperawatan yang telah direncanakan.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam melaksanakan kontrol pada pasien diwilayah tanggungjawabnya untuk optimalisasi pengelolaan asuhan keperawatan di ruang rawat dan kepuasan pasien.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Penjadwalan', desc: 'Kepala Ruangan mengatur jadwal kontrol', detail: 'Masuk ke dalam rencana harian kerja.' },
            { step: 'Penugasan', desc: 'PP/Ketua Tim mengatur jadwal', detail: 'Membagi tugas kontrol kepada PA dalam wilayah kerjanya.' },
            { step: 'Pelaksanaan', desc: 'Lakukan kontrol', detail: 'Meliputi kondisi umum dengan komunikasi terapeutik, kelancaran tetesan infus, dan vital sign nadi.' },
            { step: 'Dokumentasi & Tindak Lanjut', desc: 'Catat hasil dan lapor', detail: 'Hasil dicatat dalam lembar observasi. Jika ada masalah penting, segera laporkan ke PP/Katim dan kepala ruangan.' }
        ],
        dokumenTerkait: ['Buku Hand Over Pasien', 'Rekam Medik Pasien', 'Rencana Kerja Harian'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Hemodialisa', 'Instalasi Gawat Darurat', 'Instalasi Bedah Sentral', 'Instalasi Rawat Jalan']
    },
    {
        id: 605,
        title: 'Menyiapkan Pasien Pulang Sembuh',
        category: 'administrasi',
        description: 'Kegiatan menyiapkan pasien yang akan pulang dalam kondisi sembuh.',
        icon: 'fa-home',
        tags: ['Pulang', 'Discharge Planning', 'Administrasi'],
        noDokumen: '445/ SPO.3389/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Adalah kegiatan menyiapkan pasien yang akan pulang dalam kondisi sembuh.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam menyiapkan pasien yang akan pulang.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Dokumen', desc: 'Siapkan dokumen pulang', detail: 'Surat kontrol, surat istirahat sakit (jika diperlukan), resep, sisa obat, format retur, dan berkas penunjang.' },
            { step: 'Verifikasi', desc: 'Pastikan pasien ditetapkan pulang oleh dokter', detail: 'Dokter yang merawat menetapkan pasien pulang.' },
            { step: 'Administrasi', desc: 'Proses administrasi dan retur', detail: 'Keluarga membereskan biaya, meretur obat/alkes ke farmasi dengan format yang sudah ditandatangani.' },
            { step: 'Penyerahan Dokumen', desc: 'Serahkan dokumen', detail: 'Surat kontrol, surat istirahat, resep, dan berkas penunjang diserahkan setelah pembayaran selesai.' },
            { step: 'Pengantaran', desc: 'Antar pasien', detail: 'Pasien diantar petugas hingga pintu keluar/kendaraan.' },
            { step: 'Dokumentasi & Pembersihan', desc: 'Catat dan bersihkan', detail: 'Catat dalam buku register dan sensus harian. Bersihkan kamar dan rekam medik.' }
        ],
        dokumenTerkait: ['Rekam medik pasien', 'Surat kontrol pasien'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif']
    },
    {
        id: 606,
        title: 'Menyiapkan Pasien Pulang Atas Keinginan Sendiri (Pulang Paksa)',
        category: 'administrasi',
        description: 'Kegiatan menyiapkan pasien yang akan pulang atas keinginan sendiri (pulang paksa).',
        icon: 'fa-sign-out-alt',
        tags: ['Pulang Paksa', 'Discharge Planning', 'Administrasi', 'AMS'],
        noDokumen: '445/ SPO.3390/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Adalah kegiatan menyiapkan pasien yang akan pulang atas keinginan sendiri (pulang paksa).',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam menyiapkan pasien yang akan pulang atas keinginan sendiri (pulang paksa).',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Pernyataan & Konfirmasi', desc: 'Terima pernyataan pasien/keluarga', detail: 'Hubungi dokter yang merawat tentang keinginan pasien.' },
            { step: 'Persiapan Dokumen', desc: 'Siapkan dokumen', detail: 'Sisa obat, format retur obat/alkes (ditandatangani Ka.Ruangan/PP), dan berkas penunjang.' },
            { step: 'Administrasi', desc: 'Proses administrasi dan retur', detail: 'Keluarga membereskan biaya dan meretur obat/alkes ke farmasi.' },
            { step: 'Legalitas', desc: 'Tanda tangani surat pernyataan', detail: 'Pasien/penanggungjawab menandatangani surat pernyataan pulang paksa pada rekam medik.' },
            { step: 'Pelaksanaan', desc: 'Lepas alat medis dan siapkan pasien', detail: 'Setelah pembayaran selesai, lepas semua alat medis, rapihkan pasien, serahkan hasil penunjang.' },
            { step: 'Pengantaran', desc: 'Antar pasien', detail: 'Antar hingga pintu keluar/kendaraan.' },
            { step: 'Dokumentasi & Pembersihan', desc: 'Catat dan bersihkan', detail: 'Catat dalam buku register dan sensus harian. Bersihkan kamar dan rekam medik.' }
        ],
        dokumenTerkait: ['Rekam Medik', 'Surat pernyataan pulang atas keinginan sendiri (pulang paksa)'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi Perawatan Intensif']
    },
    {
        id: 607,
        title: 'Menyiapkan Pasien yang Akan Dirujuk',
        category: 'administrasi',
        description: 'Kegiatan menyiapkan pasien yang akan dirujuk ke rumah sakit lain.',
        icon: 'fa-ambulance',
        tags: ['Rujukan', 'Transfer Pasien', 'Ambulance'],
        noDokumen: '445/ SPO.3391/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Adalah kegiatan menyiapkan pasien yang akan di rujuk ke rumah sakit lain.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam menyiapkan pasien yang dirujuk ke rumah sakit lain.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Dokumen & Alat', desc: 'Siapkan kelengkapan rujuk', detail: 'Surat pengantar rujuk, oksigen, obat dan set resusitasi, sisa obat/retur, format retur (ditandatangani Ka.Ruangan/PP), hasil penunjang.' },
            { step: 'Konfirmasi', desc: 'Konfirmasi ke RS tujuan', detail: 'Hubungi rumah sakit yang dituju untuk pemesanan tempat rawat.' },
            { step: 'Administrasi', desc: 'Proses administrasi', detail: 'Keluarga membereskan biaya dan meretur obat/alkes.' },
            { step: 'Pengantaran & Serah Terima', desc: 'Antar dan serah terima', detail: 'Hubungi unit ambulance, antar pasien, serah terima dengan petugas RS rujukan beserta dokumen.' },
            { step: 'Dokumentasi', desc: 'Catat dan bersihkan', detail: 'Catat dalam buku register dan sensus harian. Berpamitan dengan pasien, bereskan peralatan.' }
        ],
        dokumenTerkait: ['Rekam Medik', 'Surat pengantar rujuk'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Gawat Darurat']
    },
    {
        id: 608,
        title: 'Menyiapkan Pasien Pulang Karena Meninggal Dunia',
        category: 'administrasi',
        description: 'Kegiatan menyiapkan pasien pulang karena meninggal dunia.',
        icon: 'fa-cross',
        tags: ['Kematian', 'Jenazah', 'Administrasi'],
        noDokumen: '445/ SPO.3392/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Adalah kegiatan menyiapkan pasien pulang karena meninggal dunia.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam menyiapkan pasien pulang karena meninggal dunia.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Verifikasi Kematian', desc: 'Pasien dinyatakan meninggal', detail: 'Dokter menyatakan dan membuat surat keterangan kematian.' },
            { step: 'Persiapan Dokumen', desc: 'Siapkan dokumen', detail: 'Surat keterangan kematian, obat/alkes retur, format retur (ditandatangani Ka.Ruangan/PP), hasil penunjang.' },
            { step: 'Administrasi', desc: 'Proses administrasi', detail: 'Keluarga membereskan biaya dan meretur obat/alkes.' },
            { step: 'Perawatan Jenazah', desc: 'Lakukan perawatan jenazah', detail: 'Lepas alat, bersihkan, tutup mulut/mata/telinga, sedekapkan tangan, rapatkan lutut dan pergelangan kaki, bungkus dengan kain kafan.' },
            { step: 'Pemulasaraan', desc: 'Antar jenazah', detail: 'Untuk pulang: hubungi ambulance. Untuk di RS: antar ke ruang pemulasaraan, serahkan surat keterangan kematian dan berkas.' },
            { step: 'Dokumentasi & Pembersihan', desc: 'Bersihkan dan lengkapi dokumen', detail: 'Bersihkan tempat tidur, lengkapi rekam medis, kirim ke rekam medis.' }
        ],
        dokumenTerkait: ['Rekam medik pasien', 'Surat keterangan kematian'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Gawat Darurat']
    },
    {
        id: 609,
        title: 'Menyiapkan Pasien untuk Alih Rawat ke Rumah Sakit Lain',
        category: 'administrasi',
        description: 'Kegiatan menyiapkan pasien yang akan alih rawat ke rumah sakit lain karena permintaan pribadi pasien/keluarga.',
        icon: 'fa-exchange-alt',
        tags: ['Alih Rawat', 'Transfer Pasien', 'Administrasi'],
        noDokumen: '445/ SPO.3393/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Adalah kegiatan menyiapkan pasien yang akan alih rawat ke rumah sakit lain karena permintaan pribadi pasien / keluarga.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam menyiapkan pasien yang akan alih rawat ke rumah sakit lain karena permintaan pribadi pasien / keluarga.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Pernyataan & Konfirmasi', desc: 'Terima pernyataan pasien/keluarga', detail: 'Beritahu dokter yang merawat tentang keinginan alih rawat.' },
            { step: 'Persiapan Dokumen', desc: 'Siapkan dokumen', detail: 'Sisa obat (bila dibutuhkan), obat/alkes retur, format retur (ditandatangani Ka.Ruangan/PP), hasil penunjang, surat keterangan alih rawat dari dokter.' },
            { step: 'Administrasi & Legalitas', desc: 'Proses administrasi dan tanda tangan', detail: 'Keluarga membereskan biaya, retur obat/alkes. Pasien/penanggungjawab menandatangani surat pernyataan alih rawat.' },
            { step: 'Pelaksanaan', desc: 'Lepas alat medis dan siapkan pasien', detail: 'Setelah pembayaran selesai, lepas semua alat medis, rapihkan pasien, serahkan surat dan fotocopy hasil penunjang.' },
            { step: 'Dokumentasi', desc: 'Antar dan catat', detail: 'Antar pasien ke kendaraan. Catat dalam buku registrasi, bersihkan kamar dan rekam medik.' }
        ],
        dokumenTerkait: ['Rekam medik pasien', 'Surat pengantar alih rawat'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anesthesi dan Perawatan Intensif', 'Instalasi Gawat Darurat']
    },
    {
        id: 610,
        title: 'Menyiapkan Pasien Pindah Ruangan',
        category: 'administrasi',
        description: 'Kegiatan menyiapkan pasien yang akan pindah ruangan.',
        icon: 'fa-bed',
        tags: ['Pindah Ruangan', 'Transfer Internal', 'Serah Terima'],
        noDokumen: '445/ SPO.3394/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Adalah kegiatan menyiapkan pasien yang akan pindah ruangan.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam menyiapkan pasien yang akan pindah ruangan.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan', desc: 'Siapkan alat dan pasien', detail: 'Rekam medik, format serah terima, oksigen, berkas adm, brancard/kursi roda. Beri penjelasan ke pasien/keluarga.' },
            { step: 'Koordinasi', desc: 'Hubungi ruangan tujuan', detail: 'Pesan kamar sesuai kebutuhan (rawat inap, ICU, HCU).' },
            { step: 'Pengantaran & Serah Terima', desc: 'Antar dan serah terima pasien', detail: 'Lakukan serah terima kondisi pasien, rencana perawatan, berkas adm, dan hal lain yang perlu dioperkan.' },
            { step: 'Pembersihan', desc: 'Bersihkan kamar', detail: 'Petugas ruangan membereskan kamar perawatan.' }
        ],
        dokumenTerkait: ['Rekam medik pasien', 'Format serah terima pasien'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif']
    },
    {
        id: 611,
        title: 'Pengelolaan Pasien Jamkesmas / Gakinda / SKTM di Instalasi Rawat Inap',
        category: 'administrasi',
        description: 'Penatalaksanaan pada pasien tidak mampu (Jamkesmas/Gakinda/SKTM) yang dirawat inap.',
        icon: 'fa-id-card',
        tags: ['Jamkesmas', 'Gakinda', 'SKTM', 'Administrasi', 'Asuransi'],
        noDokumen: '445/ SPO.3396/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Pengelolaan Pasien Jamkesmas/Gakinda/SKTM di instalasi rawat inap adalah penatalaksanaan pada pasien Jamkesmas/Gakinda/SKTM yang datang ke RSUD Al Ihsan, baik yang berasal dari IRJ maupun IGD.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam mengelola pasien tidak mampu (pasien jamkesmas/gakinda/SKTM) yang masuk ke instalasi rawat inap RSUD Al Ihsan.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Penerimaan Pasien', desc: 'Pasien masuk melalui IGD/IRJ', detail: 'Dirawat di kelas III non umum.' },
            { step: 'Verifikasi Dokumen', desc: 'Periksa kelengkapan dokumen', detail: 'Jika tidak lengkap, diberi toleransi 1x24 jam. Jika masih tidak lengkap, dianggap pasien umum.' },
            { step: 'Pencatatan & Perawatan', desc: 'Lakukan pencatatan dan perawatan', detail: 'Petugas adm mencatat sesuai prosedur. Pasien dirawat oleh dokter spesialis. Jasa medis mengacu pada pola tarif khusus.' },
            { step: 'Pelayanan', desc: 'Berikan tindakan dan obat', detail: 'Tindakan dan pemeriksaan penunjang mengacu INA-DRG. Resep ditulis dalam format resep umum dicap Pasien Jamkesmas/Gakinda/SKTM.' },
            { step: 'Persiapan Pulang', desc: 'Siapkan format jawaban rujukan', detail: 'Untuk pasien pulang, perawat menyiapkan format jawaban rujukan yang diisi dokter.' }
        ],
        dokumenTerkait: ['Surat keterangan tidak mampu'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Bedah Sentral', 'Instalasi Rawat Jalan', 'Instalasi Laboratorium', 'Instalasi Radiologi']
    },
    {
        id: 612,
        title: 'Timbang Terima / Operan Antar Shift',
        category: 'manajemen',
        description: 'Proses komunikasi untuk kesinambungan pelayanan dan interaksi staf dengan pasien.',
        icon: 'fa-handshake',
        tags: ['Operan', 'Serah Terima', 'Timbang Terima', 'Komunikasi'],
        noDokumen: '445/ SPO.3400/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Proses komunikasi dalam manajemen antar staf keperawatan dalam rangka kesinambuingan pelayanan serta proses interaksi staf dengan pasien, keluarga dan petugas lain dalam melaksanakan tasuhan keperawatan.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam melaksanakan timbang terima/operan shift jaga di ruang rawat untuk kesinambungan pelayanan.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan', desc: 'Siapkan kelengkapan dan petugas', detail: 'Buku komunikasi, status pasien. Semua petugas siap di nurse station.' },
            { step: 'Operan di Nurse Station', desc: 'Pimpin operan', detail: 'Diawali membaca ayat suci atau kultum. PP shift sebelumnya melaporkan jumlah pasien, pasien perlu pengawasan, dan kondisi lain. Serah terima inventaris.' },
            { step: 'Timbang Terima di Sisi Pasien', desc: 'Lakukan timbang terima keliling', detail: 'Ucapkan salam, perkenalkan perawat pengganti, perawat baru menganalisa keadaan umum pasien, sampaikan terima kasih.' },
            { step: 'Post-Operan', desc: 'Kembali ke nurse station', detail: 'Kembali ke kelompok tim masing-masing setelah selesai keliling.' }
        ],
        dokumenTerkait: ['Buku komunikasi perawat', 'Rekam medik pasien'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Bedah Sentral', 'Instalasi Laboratorium', 'Instalasi Radiologi']
    },
    {
        id: 613,
        title: 'Ronde Keperawatan dalam Konteks MPKP',
        category: 'keperawatan',
        description: 'Kegiatan untuk mengatasi masalah keperawatan pasien dengan melibatkan pasien dan tim.',
        icon: 'fa-stethoscope',
        tags: ['Ronde Keperawatan', 'MPKP', 'Pemecahan Masalah'],
        noDokumen: '445/ SPO.3403/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Kegiatan yang bertujuan untuk mengatasi masalah keperawatan/kebidanan pasien yang dilaksanakan oleh perawat/bidan disamping melibatkan pasien untuk membahas dan melaksanakan asuhan keperawatan/kebidanan.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam melaksanakan ronde keperawatan di ruang rawat untuk: Menumbuhkan cara berpikir kritis; Meningkatkan validasi data; Meningkatkan kemampuan menentukan diagnosis; Menumbuhkan pemikiran tindakan berorientasi masalah; Meningkatkan kemampuan modifikasi rencana asuhan, justifikasi, dan penilaian hasil kerja.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Pra-ronde', desc: 'Tentukan kasus dan tim', detail: 'Cari literatur, buat proposal, informed consent, dan lakukan pengkajian.' },
            { step: 'Pelaksanaan Ronde', desc: 'Penjelasan pasien oleh PP', detail: 'Fokus pada masalah keperawatan, rencana tindakan, dan prioritas diskusi. Diskusi antar tim dan pemberian justifikasi.' },
            { step: 'Pasca-ronde', desc: 'Evaluasi, revisi, dan perbaikan', detail: 'Buat kesimpulan dan rekomendasi untuk diagnosis dan intervensi selanjutnya.' }
        ],
        dokumenTerkait: ['Laporan Ronde Keperawatan'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Bedah Sentral', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif']
    },
    {
        id: 614,
        title: 'Penulisan Rencana Harian Kerja dalam Konteks MPKP',
        category: 'manajemen',
        description: 'Proses penyusunan strategi dan rancangan tindakan harian untuk mencapai tujuan asuhan keperawatan.',
        icon: 'fa-calendar-alt',
        tags: ['Rencana Harian', 'MPKP', 'Perencanaan'],
        noDokumen: '445/ SPO.3404/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Merupakan proses pendefinisian tujuan organisasi dan kemudian menyusun strategi, taktik, dan rancangan tindakan yang diperlukan untuk mencapai tujuan.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam menyusun rencana kerja harian pengelolaan asuhan keperawatan di ruang rawat.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Penyusunan Rencana', desc: 'Setelah operan, saat pre-conference', detail: 'Kepala Ruangan, Perawat Primer, dan Perawat Assosiate menyusun Rencana Kerja Harian sesuai format.' },
            { step: 'Rencana Kerja Harian Kepala Ruangan', desc: 'Mencakup supervisi dan koordinasi', detail: 'Kegiatan rutin, supervisi asuhan, supervisi SDM, lingkungan, rapat koordinasi, dan pembuatan laporan.' },
            { step: 'Rencana Kerja Harian Perawat Primer', desc: 'Fokus pada asuhan dan supervisi tim', detail: 'Penyelenggaraan asuhan, supervisi PA, kolaborasi, alokasi pasien, diskusi dengan dokter, dan dokumentasi.' },
            { step: 'Rencana Kerja Harian Perawat Assosiate', desc: 'Fokus pada pelaksanaan asuhan', detail: 'Kegiatan rutin, pelaksanaan asuhan keperawatan, dan evaluasi formatif.' }
        ],
        dokumenTerkait: ['Rencana Kerja Harian', 'Rekam medik pasien'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Hemodialisa']
    },
    {
        id: 615,
        title: 'Permintaan Darah ke Bank Darah RSUD Al Ihsan',
        category: 'prosedur medis',
        description: 'Kegiatan menyiapkan permintaan darah ke bank darah internal dengan sampel dan formulir.',
        icon: 'fa-tint',
        tags: ['Transfusi', 'Darah', 'Bank Darah'],
        noDokumen: '445/ SPO.3406/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Suatu kegiatan menyiapkan permintaan darah ke bank darah RSUD Al Ihsan dengan melampirkan sampel darah dan formulir pada pasien dengan indikasi tranfusi.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam permintaan darah ke bank darah RSUD Al Ihsan untuk pasien yang memerlukan tranfusi.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan', desc: 'Siapkan alat dan pasien', detail: 'Format permintaan, sampel darah, label. Beri penjelasan ke pasien/keluarga.' },
            { step: 'Konfirmasi Ketersediaan', desc: 'Hubungi bank darah', detail: 'Tanyakan ketersediaan darah.' },
            { step: 'Pengisian Formulir & Pengambilan Sampel', desc: 'Isi formulir dan ambil darah', detail: 'Formulir diisi dan ditandatangani dokter. Ambil sampel darah ±3 cc, pasang label identitas.' },
            { step: 'Pengiriman', desc: 'Kirim sampel dan formulir', detail: 'Bawa sampel darah dan formulir ke bank darah.' },
            { step: 'Pengambilan Darah', desc: 'Ambil darah yang sudah siap', detail: 'Setelah crossmatch selesai, ambil darah menggunakan Ice Box.' }
        ],
        dokumenTerkait: ['Format permintaan darah ke bank darah'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Bedah Sentral', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif']
    },
    {
        id: 616,
        title: 'Permintaan Darah ke PMI',
        category: 'prosedur medis',
        description: 'Kegiatan menyiapkan permintaan darah ke Palang Merah Indonesia (PMI) dengan sampel dan formulir.',
        icon: 'fa-hand-holding-heart',
        tags: ['Transfusi', 'Darah', 'PMI'],
        noDokumen: '445/ SPO.3407/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Suatu kegiatan menyiapkan permintaan darah ke PMI dengan melampirkan sampel darah dan formulir pada pasien dengan indikasi tranfusi.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam permintaan darah ke PMI untuk pasien yang memerlukan tranfusi.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan', desc: 'Siapkan alat dan pasien', detail: 'Format permintaan PMI, sampel darah, label. Beri penjelasan ke pasien/keluarga.' },
            { step: 'Konfirmasi Ketersediaan', desc: 'Hubungi PMI', detail: 'Petugas ruangan/bank darah menghubungi PMI menanyakan ketersediaan.' },
            { step: 'Jika Darah Tersedia', desc: 'Isi formulir dan ambil sampel', detail: 'Formulir diisi dan ditandatangani dokter. Ambil sampel darah ±3 cc, pasang label identitas.' },
            { step: 'Pengambilan Darah', desc: 'Pengambilan berdasarkan kelas pasien', detail: 'Pasien umum: keluarga ambil ke PMI. Pasien kontraktor, VIP, kelas I, IIA: petugas ambulance ambil.' },
            { step: 'Jika Darah Tidak Tersedia', desc: 'Minta donor pengganti', detail: 'Keluarga diminta menyediakan pendonor yang segolongan.' },
            { step: 'Penerimaan & Administrasi', desc: 'Terima darah dan serahkan kwitansi', detail: 'Darah diterima perawat, kwitansi diserahkan ke administrasi dan bank darah.' }
        ],
        dokumenTerkait: ['Format permintaan darah ke PMI'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Bedah Sentral', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif']
    }
];
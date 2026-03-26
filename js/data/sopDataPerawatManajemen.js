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
        title: 'Sistem Penugasan MPKP dalam Pelayanan Keperawatan',
        category: 'manajemen',
        subCategory: 'keperawatanDasar',
        description: 'Model Praktek Keperawatan Profesional (MPKP) menggunakan sistem penugasan modifikasi Keperawatan Primer dan Tim.',
        icon: 'fa-users',
        tags: ['MPKP', 'Penugasan', 'Keperawatan Primer', 'Tim', 'Manajemen'],
        noDokumen: '445/SPO.3380/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Model Praktek Keperawatan Profesional (MPKP) diartikan sebagai suatu sistem (struktur, proses dan nilai-nilai profesional) yang memungkinkan perawat profesional mengatur pemberian asuhan keperawatan termasuk lingkungan, yang menopang pemberian asuhan tersebut (Hoffart & Woods, 1996). Sistem Penugasan yang digunakan adalah modifikasi dari Keperawatan Primer dan tim.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam melaksanakan pengelolaan asuhan keperawatan di ruang rawat.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Pelaksanaan', items: [
                { desc: 'Kepala Ruangan memimpin operan' },
                { desc: 'Kepala Ruangan membagi alokasi pasien sesuai dengan jumlah tim' },
                { desc: 'Ketua tim memimpin pre-conference' },
                { desc: 'Ketua tim/PP dan PA membuat Rencana Kerja Harian sesuai jumlah pasien yang menjadi lingkup tanggungjawabnya' },
                { desc: 'Ketua tim/PP dan PA melaksanakan asuhan keperawatan selama satu shift kerja' },
                { desc: 'Ketua tim/PP dan PA melaksanakan post conference 1 jam sebelum shift kerja berakhir dan membuat laporan hasil asuhan untuk disampaikan pada shift berikutnya' },
                { desc: 'Ketua tim/PP dan PA mengikuti operan ke shift kerja berikutnya' },
                { desc: 'Ketua tim/PP dan PA menyampaikan laporan hasil kegiatan pada shift sebelumnya dan menyampaikan program untuk shift berikutnya' },
                { desc: 'Ketua tim/PP memimpin serah terima pasien ke shift berikutnya' }
            ]}
        ],
        dokumenTerkait: ['Rekam Medik Pasien', 'Form Penilaian Kinerja Perawat', 'Rencana Kerja Harian'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anesthesi dan Perawatan Intensif', 'Instalasi Hemodialisa']
    },
    {
        id: 602,
        title: 'Conference dalam Konteks MPKP',
        category: 'manajemen',
        subCategory: 'keperawatanDasar',
        description: 'Pertemuan tim harian untuk membahas masalah klien, menetapkan tanggung jawab, dan merencanakan tindakan keperawatan.',
        icon: 'fa-comments',
        tags: ['Conference', 'Pre Conference', 'Post Conference', 'MPKP', 'Komunikasi'],
        noDokumen: '445/SPO.3382/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Conference merupakan pertemuan tim yang dilakukan setiap hari, setelah melakukan operan dinas pagi, sore atau malam sesuai dengan jadwal dinas kepala tim / PP.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam melaksanakan conference pengelolaan asuhan keperawatan di ruang rawat dengan tujuan: Membahas masalah setiap klien berdasarkan renpra yang telah dibuat PP; Menetapkan klien yang menjadi tanggungjawab masing-masing PA; Membahas rencana tindakan keperawatan untuk setiap klien pada hari itu; Mengidentifikasi tugas PA untuk setiap klien yang menjadi tanggungjawabnya.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan', items: [
                { desc: 'Rekam medik pasien' },
                { desc: 'Buku komunikasi' },
                { desc: 'Konferensi dilakukan setiap hari segera setelah dilakukan pergantian dinas pagi/sore sesuai dengan jadwal dinas PP' },
                { desc: 'Konferensi dihadiri oleh PP dan PA dalam timnya masing-masing' }
            ]},
            { step: 'Pelaksanaan: Pre Conference', items: [
                { desc: 'PP menyampaikan perkembangan dan masalah klien berdasarkan hasil evaluasi kemarin dan kondisi klien yang dilaporkan oleh dinas malam meliputi: Keadaan umum klien, Keluhan klien, Tanda-tanda vital dan kesadaran, Hasil pemeriksaan laboratorium/diagnostik terbaru, Masalah keperawatan, Rencana keperawatan hari ini, Perubahan terapi medis, Rencana medis' },
                { desc: 'PP mendiskusikan dan mengarahkan PA tentang masalah yang terkait dengan keperawatan klien meliputi: Keluhan klien terkait pelayanan, Ketepatan pemberian infus, Ketepatan pemantauan asupan dan haluaran cairan (I/O), Ketepatan pemberian obat oral atau injeksi, Ketepatan pelaksanaan tindakan lain, Ketepatan & benar dokumentasi' },
                { desc: 'Mengingatkan kembali standar prosedur yang ditetapkan' },
                { desc: 'Mengingatkan kembali tentang kedisiplinan, ketelitian, kejujuran, dan kemajuan masing-masing PA' },
                { desc: 'Membantu PA menyelesaikan masalah yang tidak dapat diselesaikannya' }
            ]},
            { step: 'Pelaksanaan: Post Conference', items: [
                { desc: 'Mendiskusikan hasil evaluasi tindakan yang telah dilakukan PA' },
                { desc: 'Perkembangan pasien kelolaannya' },
                { desc: 'Kesulitan saat tindakan/mengelola pasien' },
                { desc: 'Mengarahkan PA' },
                { desc: 'Memberikan reinforcement' },
                { desc: 'Rencana/tindak lanjut untuk shift berikutnya' },
                { desc: 'Persiapan operan dinas' },
                { desc: 'Hal-hal yang akan dioperkan' }
            ]}
        ],
        dokumenTerkait: ['Rekam medik pasien', 'Rencana kerja harian'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Hemodialisa']
    },
    {
        id: 603,
        title: 'Supervisi',
        category: 'manajemen',
        subCategory: 'keperawatanDasar',
        description: 'Kegiatan pengawasan dan pembinaan berkesinambungan untuk meningkatkan kemampuan perawat dan mutu pelayanan.',
        icon: 'fa-clipboard-list',
        tags: ['Supervisi', 'Pengawasan', 'Pembinaan', 'Manajemen'],
        noDokumen: '445/SPO.3383/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Supervisi merupakan upaya untuk membantu pembinaan dan peningkatan kemampuan pihak yang disupervisi agar mereka dapat melaksanakan tugas kegiatan yang telah ditetapkan secara efisien dan efektif (Sudjana D, 2004). Supervisi keperawatan adalah kegiatan pengawasan dan pembinaan yang dilakukan secara berkesinambungan oleh supervisor mencakup masalah pelayanan keperawatan, masalah ketenagaan, dan peralatan agar pasien mendapat pelayanan yang bermutu setiap saat (Depkes, 2000).',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam melaksanakan supervisi asuhan keperawatan di ruang rawat untuk Pemenuhan dan peningkatan pelayanan pada klien dan keluarga yang berfokus pada kebutuhan, keterampilan, dan kemampuan perawat dalam melaksanakan tugas.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Pengawasan', items: [
                { desc: 'Mengadakan persiapan pengawasan' },
                { desc: 'Menentukan tujuan' },
                { desc: 'Menentukan metode pengawasan' },
                { desc: 'Menentukan standar dan kriteria pengukuran' }
            ]},
            { step: 'Pelaksanaan Pengawasan', items: [
                { desc: 'Menjalankan pengawasan' },
                { desc: 'Membuat dan menentukan rencana pengawasan' },
                { desc: 'Pelaksanaan pengawasan' },
                { desc: 'Penilaian dari pelaksanaan pengawasan' }
            ]},
            { step: 'Tindak Lanjut', items: [
                { desc: 'Memperbaiki penyimpangan' },
                { desc: 'Mengumpulkan informasi' },
                { desc: 'Mengidentifikasi masalah' },
                { desc: 'Menganalisis masalah' },
                { desc: 'Mencari dan menetapkan alternatif pemecahan masalah' },
                { desc: 'Melaksanakan upaya pemecahan masalah' }
            ]}
        ],
        dokumenTerkait: ['Rekam Medik Pasien', 'Format Penilaian Kinerja Perawat'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Rawat Jalan', 'Instalasi Hemodialisa']
    },
    {
        id: 604,
        title: 'Kontrol Pasien dalam Konteks MPKP',
        category: 'manajemen',
        subCategory: 'keperawatanDasar',
        description: 'Kegiatan interaksi dan observasi pasien di luar tindakan terencana untuk optimalisasi asuhan keperawatan.',
        icon: 'fa-heartbeat',
        tags: ['Kontrol Pasien', 'Observasi', 'Interaksi', 'MPKP'],
        noDokumen: '445/SPO.3386/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Kontrol pasien adalah suatu kegiatan melaksanakan interaksi dan mengobservasi pasien diluar kegiatan pelaksanaan tindakan keperawatan yang telah direncanakan.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam melaksanakan kontrol pada pasien diwilayah tanggungjawabnya untuk optimalisasi pengelolaan asuhan keperawatan di ruang rawat dan kepuasan pasien.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Penjadwalan', items: [
                { desc: 'Kepala Ruangan mengatur jadwal kontrol kepada pasien dan masuk ke dalam rencana harian kerja' },
                { desc: 'Perawat Primer/Ketua Tim mengatur jadwal kontrol ke pasien dalam wilayah kerjanya dengan membagi tugas kepada PA' }
            ]},
            { step: 'Pelaksanaan Kontrol', items: [
                { desc: 'Kondisi umum pasien dengan melakukan komunikasi terapeutik' },
                { desc: 'Kelancaran tetesan infus' },
                { desc: 'Vital sign: nadi' }
            ]},
            { step: 'Dokumentasi dan Tindak Lanjut', items: [
                { desc: 'Hasil kontrol dicatat dalam lembar observasi pasien' },
                { desc: 'Apabila ada hal-hal yang penting atau ada masalah segera dilaporkan ke PP/Katim dan kepala ruangan untuk ditindaklanjuti' }
            ]}
        ],
        dokumenTerkait: ['Buku Hand Over Pasien', 'Rekam Medik Pasien'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Hemodialisa']
    },
    {
        id: 605,
        title: 'Menyiapkan Pasien Pulang Sembuh',
        category: 'umum',
        subCategory: 'keperawatanDasar',
        description: 'Kegiatan menyiapkan pasien yang akan pulang dalam kondisi sembuh.',
        icon: 'fa-home',
        tags: ['Pulang', 'Discharge Planning', 'Administrasi', 'Pasien'],
        noDokumen: '445/ SPO.3389/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Adalah kegiatan menyiapkan pasien yang akan pulang dalam kondisi sembuh.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam menyiapkan pasien yang akan pulang.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan', items: [
                { desc: 'Surat kontrol' },
                { desc: 'Surat istirahat sakit (jika diperlukan)' },
                { desc: 'Resep untuk dirumah' },
                { desc: 'Sisa obat-obatan yang bisa dilanjutkan dirumah' },
                { desc: 'Obat-obatan atau alkes yang dapat di retur ke bagian farmasi' },
                { desc: 'Format retur' },
                { desc: 'Berkas pemeriksaan penunjang' }
            ]},
            { step: 'Pelaksanaan', items: [
                { desc: 'Pasien sudah ditetapkan pulang oleh dokter yang merawat' },
                { desc: 'Perawat menyiapkan surat kontrol, surat istirahat sakit, resep untuk dirumah, sisa obat, format retur, dan berkas penunjang' },
                { desc: 'Jika ada obat/alkes yang harus diretur, dibuatkan format retur yang ditandatangani oleh kepala ruangan/PP' },
                { desc: 'Keluarga dipersilahkan untuk membereskan biaya perawatan (kecuali pasien kontraktor/pasien Askes yang tidak ada selisih biaya perawatan), serta meretur obat/alkes ke farmasi (jika ada)' },
                { desc: 'Bila pembayaran biaya perawatan telah selesai, perawat menyerahkan surat kontrol, surat istirahat sakit, resep, dan berkas pemeriksaan penunjang' },
                { desc: 'Pasien diantar oleh petugas ruangan sampai pintu keluar/kendaraan sesuai kebutuhan dan kemampuan pasien' },
                { desc: 'Pasien pulang dicatat dalam buku register dan sensus harian' },
                { desc: 'Petugas ruangan membereskan kamar perawatan dan rekam medik pasien' }
            ]}
        ],
        dokumenTerkait: ['Rekam medik pasien', 'Surat kontrol pasien'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif']
    },
    {
        id: 606,
        title: 'Menyiapkan Pasien Pulang Atas Keinginan Sendiri (Pulang Paksa)',
        category: 'umum',
        subCategory: 'keperawatanDasar',
        description: 'Kegiatan menyiapkan pasien yang akan pulang atas keinginan sendiri (pulang paksa).',
        icon: 'fa-sign-out-alt',
        tags: ['Pulang Paksa', 'Discharge Planning', 'Administrasi', 'AMS'],
        noDokumen: '445/ SPO.3390/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Adalah kegiatan menyiapkan pasien yang akan pulang atas keinginan sendiri (pulang paksa).',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam menyiapkan pasien yang akan pulang atas keinginan sendiri (pulang paksa).',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan', items: [
                { desc: 'Sisa obat-obatan yang bisa dilanjutkan dirumah' },
                { desc: 'Obat-obatan atau alkes yang dapat di retur ke bagian farmasi' },
                { desc: 'Format retur' },
                { desc: 'Berkas pemeriksaan penunjang' }
            ]},
            { step: 'Pelaksanaan', items: [
                { desc: 'Ada pernyataan dari pasien/keluarga bahwa pasien akan dibawa pulang' },
                { desc: 'Perawat menghubungi dokter yang merawat tentang keinginan pasien' },
                { desc: 'Perawat menyiapkan sisa obat, format retur obat/alkes, dan hasil pemeriksaan penunjang' },
                { desc: 'Jika ada obat/alkes yang harus diretur, dibuatkan format retur yang ditandatangani oleh kepala ruangan/PP' },
                { desc: 'Keluarga dipersilahkan untuk membereskan biaya perawatan (kecuali pasien kontraktor/pasien Askes), serta meretur obat/alkes ke farmasi' },
                { desc: 'Pasien atau penanggungjawab wajib menandatangani surat pernyataan pulang atas keinginan sendiri (pulang paksa) pada rekam medik pasien' },
                { desc: 'Bila pembayaran biaya perawatan telah selesai, perawat melepas semua alat-alat medis yang terpasang pada pasien' },
                { desc: 'Pasien disiapkan dan dirapihkan' },
                { desc: 'Perawat menyerahkan hasil-hasil pemeriksaan penunjang kepada pasien/keluarga jika diperlukan' },
                { desc: 'Pasien diantar oleh petugas ruangan sampai pintu keluar/kendaraan sesuai kebutuhan' },
                { desc: 'Pasien pulang dicatat dalam buku register dan sensus harian' },
                { desc: 'Petugas ruangan membereskan kamar perawatan dan rekam medik pasien' }
            ]}
        ],
        dokumenTerkait: ['Surat pernyataan pulang atas keinginan sendiri (pulang paksa)'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi Perawatan Intensif']
    },
    {
        id: 607,
        title: 'Menyiapkan Pasien yang Akan Dirujuk',
        category: 'umum',
        subCategory: 'keperawatanDasar',
        description: 'Kegiatan menyiapkan pasien yang akan dirujuk ke rumah sakit lain.',
        icon: 'fa-ambulance',
        tags: ['Rujukan', 'Transfer Pasien', 'Ambulance'],
        noDokumen: '445/ SPO.3391/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Adalah kegiatan menyiapkan pasien yang akan di rujuk ke rumah sakit lain.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam menyiapkan pasien yang dirujuk ke rumah sakit lain.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan', items: [
                { desc: 'Surat pengantar rujuk' },
                { desc: 'Oksigen lengkap' },
                { desc: 'Obat-obatan dan set resusitasi' },
                { desc: 'Sisa obat-obatan yang bisa dilanjutkan dirumah sakit rujukan atau obat-obatan yang harus di retur ke bagian farmasi' },
                { desc: 'Format retur (ditandatangani kepala ruangan/PP)' },
                { desc: 'Hasil pemeriksaan penunjang' }
            ]},
            { step: 'Pelaksanaan', items: [
                { desc: 'Pasien dinyatakan harus dirujuk oleh dokter yang merawat' },
                { desc: 'Perawat menyiapkan surat pengantar rujuk, oksigen, obat dan set resusitasi, sisa obat, format retur, dan hasil penunjang' },
                { desc: 'Perawat menghubungi rumah sakit yang akan dituju untuk pemesanan tempat rawat' },
                { desc: 'Keluarga dipersilahkan untuk membereskan biaya perawatan (kecuali pasien kontraktor/Askes), serta meretur obat/alkes ke farmasi' },
                { desc: 'Pasien disiapkan dan dirapihkan' },
                { desc: 'Perawat menghubungi unit ambulance' },
                { desc: 'Perawat mengantar pasien dengan ambulance ke RS yang dituju' },
                { desc: 'Perawat melakukan serah terima dengan petugas RS rujukan dengan menyerahkan surat rujukan dan fotocopy hasil pemeriksaan penunjang' },
                { desc: 'Berpamitan dengan pasien yang dirujuk' },
                { desc: 'Membereskan peralatan' },
                { desc: 'Pasien yang dirujuk dicatat dalam buku register dan sensus harian' }
            ]}
        ],
        dokumenTerkait: ['Surat pengantar rujuk'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Gawat Darurat']
    },
    {
        id: 608,
        title: 'Menyiapkan Pasien Pulang Karena Meninggal Dunia',
        category: 'umum',
        subCategory: 'keperawatanDasar',
        description: 'Kegiatan menyiapkan pasien pulang karena meninggal dunia.',
        icon: 'fa-flag',
        tags: ['Kematian', 'Jenazah', 'Administrasi', 'Pemulasaraan'],
        noDokumen: '445/ SPO.3392/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Adalah kegiatan menyiapkan pasien pulang karena meninggal dunia.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam menyiapkan pasien pulang karena meninggal dunia.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan', items: [
                { desc: 'Surat keterangan kematian' },
                { desc: 'Obat-obatan/alkes yang bisa diretur ke bagian farmasi' },
                { desc: 'Format retur (ditandatangani kepala ruangan/PP)' },
                { desc: 'Hasil pemeriksaan penunjang' }
            ]},
            { step: 'Pelaksanaan', items: [
                { desc: 'Pasien dinyatakan meninggal dunia oleh dokter' },
                { desc: 'Dokter membuat surat keterangan kematian dan mengisi laporan kematian' },
                { desc: 'Perawat menyiapkan surat keterangan kematian, format retur, dan hasil penunjang' },
                { desc: 'Keluarga dipersilahkan untuk membereskan biaya perawatan (kecuali pasien kontraktor/Askes), serta meretur obat/alkes ke farmasi' },
                { desc: 'Menghubungi unit ambulance untuk pengantaran jenazah' }
            ]},
            { step: 'Perawatan Jenazah - Dipulasara di Rumah', items: [
                { desc: 'Alat-alat yang terpasang dilepas dari tubuh jenazah kemudian jenazah dibersihkan' },
                { desc: 'Mulut jenazah dikatupkan dan diikat dengan kain kasa, mata dan telinga ditutup dengan kasa' },
                { desc: 'Tangan disedekapkan dengan posisi tangan kanan diatas tangan kiri dan diikat dengan kain kasa' },
                { desc: 'Lutut dan pergelangan kaki dirapatkan dan diikat dengan kain kasa' },
                { desc: 'Tubuh jenazah dibungkus dengan kain pembungkus jenazah' },
                { desc: 'Perawat ruangan menghubungi petugas ambulance bahwa jenazah telah siap dibawa pulang' },
                { desc: 'Jenazah dibawa oleh petugas ambulance ke tempat yang dituju' }
            ]},
            { step: 'Perawatan Jenazah - Dipulasara di Rumah Sakit', items: [
                { desc: 'Alat-alat yang terpasang dilepas dari tubuh jenazah, kemudian jenazah dibersihkan' },
                { desc: 'Mulut jenazah dikatupkan dan diikat dengan kain kasa, mata dan telinga ditutup dengan kasa' },
                { desc: 'Tangan disedekapkan dengan posisi tangan kanan diatas tangan kiri dan diikat dengan kain kasa' },
                { desc: 'Lutut dan pergelangan kaki dirapatkan dan diikat dengan kain kasa' },
                { desc: 'Tubuh jenazah dibungkus dengan kain pembungkus jenazah' },
                { desc: 'Jenazah diantar ke ruang pemulasaraan jenazah' },
                { desc: 'Perawat menyerahkan surat keterangan kematian, serta berkas pemeriksaan penunjang pasien' },
                { desc: 'Perawat memberitahu dokter yang merawat' },
                { desc: 'Tempat tidur dibereskan kembali' },
                { desc: 'Catatan rekam medis pasien dibereskan dan dilengkapi kemudian diantar ke rekam medis' }
            ]}
        ],
        dokumenTerkait: ['Rekam medik pasien', 'Surat keterangan kematian'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Gawat Darurat']
    },
    {
        id: 609,
        title: 'Menyiapkan Pasien untuk Alih Rawat ke Rumah Sakit Lain',
        category: 'umum',
        subCategory: 'keperawatanDasar',
        description: 'Kegiatan menyiapkan pasien yang akan alih rawat ke rumah sakit lain karena permintaan pribadi pasien/keluarga.',
        icon: 'fa-exchange-alt',
        tags: ['Alih Rawat', 'Transfer Pasien', 'Administrasi'],
        noDokumen: '445/ SPO.3393/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Adalah kegiatan menyiapkan pasien yang akan alih rawat ke rumah sakit lain karena permintaan pribadi pasien / keluarga.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam menyiapkan pasien yang akan alih rawat ke rumah sakit lain karena permintaan pribadi pasien / keluarga.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan', items: [
                { desc: 'Sisa obat-obatan (bila dibutuhkan)' },
                { desc: 'Obat-obatan/alkes yang bisa diretur ke bagian farmasi' },
                { desc: 'Format retur (ditandatangani kepala ruangan/PP)' },
                { desc: 'Hasil pemeriksaan penunjang' },
                { desc: 'Surat keterangan alih rawat' }
            ]},
            { step: 'Pelaksanaan', items: [
                { desc: 'Ada pernyataan dari pasien/keluarga bahwa pasien minta alih rawat' },
                { desc: 'Perawat memberitahu dokter yang merawat perihal keinginan pasien' },
                { desc: 'Dokter membuat surat keterangan alih rawat' },
                { desc: 'Perawat menyiapkan sisa obat, format retur, hasil penunjang, dan surat keterangan alih rawat' },
                { desc: 'Keluarga dipersilahkan untuk membereskan biaya perawatan (kecuali pasien kontraktor/Askes), serta meretur obat/alkes ke farmasi' },
                { desc: 'Pasien atau penanggungjawab wajib menandatangani surat pernyataan alih rawat pada lembar rekam medik' },
                { desc: 'Bila pembayaran biaya perawatan telah selesai, perawat melepas semua alat-alat medis yang terpasang pada pasien' },
                { desc: 'Pasien disiapkan dan dirapihkan' },
                { desc: 'Perawat menyerahkan surat pengantar alih rawat serta fotocopy hasil pemeriksaan penunjang kepada pasien/keluarga' },
                { desc: 'Mengantar pasien sampai ke kendaraan yang akan digunakan' },
                { desc: 'Pasien alih rawat dicatat dalam buku registrasi' },
                { desc: 'Petugas ruangan membereskan kamar perawatan dan rekam medik pasien' }
            ]}
        ],
        dokumenTerkait: ['Rekam medik pasien', 'Surat pengantar alih rawat'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anesthesi dan Perawatan Intensif', 'Instalasi Gawat Darurat']
    },
    {
        id: 610,
        title: 'Menyiapkan Pasien Pindah Ruangan',
        category: 'umum',
        subCategory: 'keperawatanDasar',
        description: 'Kegiatan menyiapkan pasien yang akan pindah ruangan.',
        icon: 'fa-bed',
        tags: ['Pindah Ruangan', 'Transfer Internal', 'Serah Terima'],
        noDokumen: '445/ SPO.3394/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Adalah kegiatan menyiapkan pasien yang akan pindah ruangan.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam menyiapkan pasien yang akan pindah ruangan.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan', items: [
                { desc: 'Rekam medik pasien' },
                { desc: 'Format serah terima pasien yang telah diisi lengkap' },
                { desc: 'Oksigen kecil lengkap (jika diperlukan)' },
                { desc: 'Berkas administrasi pasien' },
                { desc: 'Brancard atau kursi roda' },
                { desc: 'Pasien dan/keluarga diberikan penjelasan tentang tindakan yang akan dilakukan' }
            ]},
            { step: 'Ruang Rawat Inap ke Ruang Rawat Inap Lain', items: [
                { desc: 'Perawat ruangan menghubungi ruangan yang dituju untuk memesan kamar' },
                { desc: 'Pasien disiapkan dan dirapihkan' },
                { desc: 'Perawat ruangan mengantar pasien ke ruangan yang dituju' },
                { desc: 'Melakukan serah terima pasien: kondisi pasien, rencana perawatan, berkas administrasi serta hal-hal lain yang perlu dioperkan' },
                { desc: 'Petugas ruangan membereskan kamar perawatan' }
            ]},
            { step: 'Ruang Rawat Inap ke Ruang Perawatan Khusus (ICU/HCU)', items: [
                { desc: 'Perawat menyampaikan informed consent kepada keluarga tentang rencana pemindahan pasien ke ruangan khusus' },
                { desc: 'Perawat ruangan menghubungi ruangan khusus untuk memesan kamar' },
                { desc: 'Pasien disiapkan dan dirapihkan' },
                { desc: 'Perawat ruangan mengantar pasien ke ICU/HCU' },
                { desc: 'Melakukan serah terima pasien: kondisi pasien, rencana perawatan, berkas administrasi serta hal-hal lain yang perlu dioperkan' },
                { desc: 'Petugas ruangan membereskan kamar perawatan' }
            ]},
            { step: 'Ruang Perawatan Khusus ke Ruang Rawat Inap', items: [
                { desc: 'Perawat menyampaikan informed consent kepada keluarga bahwa pasien sudah dapat pindah ke ruang perawatan' },
                { desc: 'Perawat ICU/HCU menghubungi ruangan yang dituju untuk memesan kamar' },
                { desc: 'Pasien disiapkan dan dirapihkan' },
                { desc: 'Perawat ruangan menjemput pasien ke ICU/HCU' },
                { desc: 'Melakukan serah terima pasien: kondisi pasien, rencana perawatan, berkas administrasi serta hal-hal lain yang perlu dioperkan' },
                { desc: 'Petugas ruangan membawa pasien ke kamar perawatan yang telah disiapkan' }
            ]},
            { step: 'Ruang Perawatan Khusus ke Ruang Perawatan Khusus (ICU ke HCU)', items: [
                { desc: 'Perawat menyampaikan informed consent kepada keluarga bahwa pasien akan dipindahkan' },
                { desc: 'Perawat menghubungi ruangan yang dituju untuk memesan kamar' },
                { desc: 'Pasien disiapkan dan dirapihkan' },
                { desc: 'Perawat ruangan mengantar pasien ke ruangan yang dituju' },
                { desc: 'Melakukan serah terima pasien: kondisi pasien, rencana perawatan, berkas administrasi serta hal-hal lain yang perlu dioperkan' },
                { desc: 'Petugas ruangan membereskan kamar perawatan' }
            ]},
            { step: 'Ruang Rawat Inap melalui Kamar Bedah ke Ruang Rawat Inap Lain', items: [
                { desc: 'Perawat ruangan menghubungi ruangan yang dituju untuk memesan kamar paska operasi' },
                { desc: 'Perawat menyampaikan informed consent kepada keluarga bahwa post operasi pasien akan dipindahkan ke ruangan lain' },
                { desc: 'Pasien disiapkan dan dirapihkan' },
                { desc: 'Perawat mengantar pasien ke kamar bedah sesuai jadwal' },
                { desc: 'Melakukan serah terima pasien dengan perawat kamar bedah' },
                { desc: 'Bila operasi selesai, perawat kamar bedah menghubungi perawat ruangan asal dan ruangan tujuan' },
                { desc: 'Melakukan serah terima pasien di kamar bedah antara perawat ruangan sebelumnya, kamar bedah, dan ruangan tujuan' },
                { desc: 'Perawat ruangan tujuan membawa pasien ke ruangan' }
            ]},
            { step: 'IGD/IRJ melalui Kamar Bedah ke Ruang Rawat Inap', items: [
                { desc: 'Perawat IGD/IRJ menghubungi ruangan yang dituju untuk memesan kamar paska operasi' },
                { desc: 'Perawat IGD/IRJ menyampaikan informed consent kepada keluarga' },
                { desc: 'Pasien disiapkan dan dirapihkan' },
                { desc: 'Perawat IGD/IRJ mengantar pasien ke kamar bedah sesuai jadwal' },
                { desc: 'Melakukan serah terima pasien dengan perawat kamar bedah' },
                { desc: 'Bila operasi selesai, perawat kamar bedah menghubungi perawat ruangan tujuan' },
                { desc: 'Perawat kamar bedah melakukan serah terima pasien dengan perawat ruangan tujuan' }
            ]},
            { step: 'Ruang Rawat Inap melalui Kamar Bedah ke Ruang Perawatan Khusus', items: [
                { desc: 'Perawat ruangan menghubungi ruangan ICU/HCU untuk memesan kamar paska operasi' },
                { desc: 'Perawat ruangan menyampaikan informed consent kepada keluarga' },
                { desc: 'Pasien disiapkan dan dirapihkan' },
                { desc: 'Perawat ruangan mengantar pasien ke kamar bedah sesuai jadwal' },
                { desc: 'Melakukan serah terima pasien dengan perawat kamar bedah' },
                { desc: 'Bila operasi selesai, perawat kamar bedah menghubungi perawat ruangan' },
                { desc: 'Perawat kamar bedah melakukan serah terima pasien dengan perawat ruangan' },
                { desc: 'Perawat ruangan membawa pasien ke ruangan ICU/HCU' },
                { desc: 'Melakukan serah terima pasien dengan perawat ICU/HCU' }
            ]}
        ],
        dokumenTerkait: ['Rekam medik pasien', 'Format serah terima pasien'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif']
    },
    {
        id: 611,
        title: 'Pengelolaan Pasien Jamkesmas / Gakinda / SKTM di Instalasi Rawat Inap',
        category: 'umum',
        subCategory: 'keperawatanDasar',
        description: 'Penatalaksanaan pasien tidak mampu (Jamkesmas/Gakinda/SKTM) yang dirawat inap.',
        icon: 'fa-id-card',
        tags: ['Jamkesmas', 'Gakinda', 'SKTM', 'Administrasi', 'Asuransi'],
        noDokumen: '445/ SPO.3396/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Pengelolaan Pasien Jamkesmas/Gakinda/SKTM di instalasi rawat inap adalah penatalaksanaan pada pasien Jamkesmas/Gakinda/SKTM yang datang ke RSUD Al Ihsan, baik yang berasal dari IRJ maupun IGD. Pasien jamkesmas/gakinda/SKTM adalah pasien yang mendapat jaminan asuransi kesehatan dari pemerintah karena termasuk masyarakat miskin yang dinyatakan dengan kepemilikan kartu jamkesmas/gakinda atau Surat Keterangan Tidak Mampu (SKTM).',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam mengelola pasien tidak mampu (pasien jamkesmas/gakinda/SKTM) yang masuk ke instalasi rawat inap RSUD Al Ihsan.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Prosedur Pengelolaan', items: [
                { desc: 'Pasien Jamkesmas/gakinda/SKTM dapat masuk ke IRI melalui IGD maupun IRJ' },
                { desc: 'Pasien di rawat di kelas III non umum' },
                { desc: 'Jika pada saat masuk pasien tidak bisa menunjukkan kartu atau surat rujukan, diberi toleransi waktu hingga 1 x 24 jam. Jika lewat waktu tidak dapat menunjukkan kelengkapan, pasien dianggap sebagai pasien umum' },
                { desc: 'Petugas administrasi rawat inap melakukan pencatatan sesuai prosedur yang berlaku' },
                { desc: 'Pasien dirawat oleh dokter spesialis yang merawat dibantu oleh dokter umum unitnya sesuai SOP yang berlaku' },
                { desc: 'Administrasi jasa medis mengacu pada pola tarif khusus Pasien Jamkesmas/gakinda/SKTM yang berlaku' },
                { desc: 'Jenis tindakan, pemeriksaan penunjang dan peresepan obat harus sesuai dengan aturan yang berlaku (mengacu INA-DRG)' },
                { desc: 'Untuk pasien Jamkesmas/Gakinda/SKTM, resep obat ditulis dalam format resep umum yang dicap Pasien Jamkesmas/Gakinda/SKTM' },
                { desc: 'Untuk pasien yang sudah bisa pulang, perawat ruangan menyiapkan format jawaban rujukan untuk diisi oleh dokter dan diserahkan kepada pasien/keluarga' }
            ]}
        ],
        dokumenTerkait: ['Surat keterangan tidak mampu'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Bedah Sentral', 'Instalasi Rawat Jalan', 'Instalasi Laboratorium', 'Instalasi Radiologi']
    },
    {
        id: 612,
        title: 'Timbang Terima / Operan Antar Shift',
        category: 'manajemen',
        subCategory: 'keperawatanDasar',
        description: 'Proses komunikasi dalam manajemen antar staf keperawatan untuk kesinambungan pelayanan.',
        icon: 'fa-handshake',
        tags: ['Operan', 'Serah Terima', 'Timbang Terima', 'Komunikasi'],
        noDokumen: '445/ SPO.3400/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Proses komunikasi dalam manajemen antar staf keperawatan dalam rangka kesinambungan pelayanan serta proses interaksi staf dengan pasien, keluarga dan petugas lain dalam melaksanakan asuhan keperawatan.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam melaksanakan timbang terima/operan shift jaga di ruang rawat untuk kesinambungan pelayanan.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan', items: [
                { desc: 'Buku komunikasi' },
                { desc: 'Status Pasien' },
                { desc: 'Hal-hal lain yang diperlukan' },
                { desc: 'Semua petugas sudah siap di nurse station' }
            ]},
            { step: 'Pelaksanaan di Nurse Station', items: [
                { desc: 'Kepala Ruangan/PP/Penanggungjawab shift memimpin operan' },
                { desc: 'Sebelum kegiatan dimulai diawali membaca ayat suci Al-Quran atau kultum' },
                { desc: 'PP/Pgj shift sebelumnya menyampaikan laporan kegiatan shift sebelumnya: jumlah pasien, pasien yang perlu pengawasan/konsultasi/observasi ketat serta kondisi lain' },
                { desc: 'Serah terima inventaris ruangan: nama barang, jumlah, kondisi barang dan hal-hal lain yang perlu diketahui' },
                { desc: 'Perawat yang menerima laporan melakukan klarifikasi dan tanya jawab terhadap hal-hal yang kurang jelas' },
                { desc: 'Kepala Ruangan/PP/Pgj shift berikutnya menerima laporan dan menandatangani buku komunikasi' },
                { desc: 'Berdoa untuk kelancaran kegiatan dipimpin oleh seorang staf yang ditunjuk' }
            ]},
            { step: 'Timbang Terima di Sisi Pasien', items: [
                { desc: 'Kepala Ruangan/PP/Pgj Shift melakukan timbang terima pasien secara berkeliling sesuai timnya' },
                { desc: 'Mengucapkan salam "Assalamualaikum… selamat pagi/siang/sore…. (panggil nama pasien dengan sopan dan jelas)"' },
                { desc: 'Menyapa pasien "Maaf bapak/ibu kami mengganggu sebentar, karena akan serah terima dinas dengan shift berikutnya"' },
                { desc: 'Mengenalkan perawat pengganti shift berikutnya' },
                { desc: 'Perawat yang akan berdinas menyapa pasien dan menganalisa keadaan umum serta lingkungan pasien' },
                { desc: 'Sampaikan terima kasih dan ucapkan salam' },
                { desc: 'Khusus operan malam ke pagi, pada saat keliling ada perawat yang memimpin berdoa di depan pasien dan keluarga secara bergiliran' }
            ]},
            { step: 'Pasca Operan', items: [
                { desc: 'Setelah selesai operan keliling, semua perawat kembali ke nurse station' },
                { desc: 'Masuk ke kelompok timnya masing-masing' }
            ]}
        ],
        dokumenTerkait: ['Buku komunikasi perawat', 'Rekam medik pasien'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Bedah Sentral', 'Instalasi Laboratorium', 'Instalasi Radiologi']
    },
    {
        id: 613,
        title: 'Supervisi Asuhan Keperawatan dalam Konteks MPKP',
        category: 'manajemen',
        subCategory: 'keperawatanDasar',
        description: 'Kegiatan pengawasan dan pembinaan berkesinambungan oleh supervisor untuk mutu pelayanan.',
        icon: 'fa-clipboard-check',
        tags: ['Supervisi', 'Pengawasan', 'Pembinaan', 'MPKP'],
        noDokumen: '445/ SPO.3402/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Supervisi merupakan upaya untuk membantu pembinaan dan peningkatan kemampuan pihak yang disupervisi agar mereka dapat melaksanakan tugas kegiatan yang telah ditetapkan secara efisien dan efektif (Sudjana D, 2004). Supervisi keperawatan adalah kegiatan pengawasan dan pembinaan yang dilakukan secara berkesinambungan oleh supervisor mencakup masalah pelayanan keperawatan, masalah ketenagaan, dan peralatan agar pasien mendapat pelayanan yang bermutu setiap saat (Depkes, 2000).',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam melaksanakan supervisi asuhan keperawatan di ruang rawat untuk Pemenuhan dan peningkatan pelayanan pada klien dan keluarga yang berfokus pada kebutuhan, keterampilan, dan kemampuan perawat dalam melaksanakan tugas.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan Pengawasan', items: [
                { desc: 'Mengadakan persiapan pengawasan' },
                { desc: 'Menentukan tujuan' },
                { desc: 'Menentukan metode pengawasan' },
                { desc: 'Menentukan standar dan kriteria pengukuran' }
            ]},
            { step: 'Pelaksanaan Pengawasan', items: [
                { desc: 'Menjalankan pengawasan' },
                { desc: 'Membuat dan menentukan rencana pengawasan' },
                { desc: 'Pelaksanaan pengawasan' },
                { desc: 'Penilaian dari pelaksanaan pengawasan' }
            ]},
            { step: 'Tindak Lanjut', items: [
                { desc: 'Memperbaiki penyimpangan' },
                { desc: 'Mengumpulkan informasi' },
                { desc: 'Mengidentifikasi masalah' },
                { desc: 'Menganalisis masalah' },
                { desc: 'Mencari dan menetapkan alternatif pemecahan masalah' },
                { desc: 'Melaksanakan upaya pemecahan masalah' }
            ]}
        ],
        dokumenTerkait: ['Format Supervisi Kinerja Perawat'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Bedah Sentral', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif']
    },
    {
        id: 614,
        title: 'Ronde Keperawatan dalam Konteks MPKP',
        category: 'manajemen',
        subCategory: 'keperawatanDasar',
        description: 'Kegiatan untuk mengatasi masalah keperawatan pasien dengan melibatkan pasien dan tim.',
        icon: 'fa-stethoscope',
        tags: ['Ronde Keperawatan', 'MPKP', 'Pemecahan Masalah', 'Klinis'],
        noDokumen: '445/ SPO.3403/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Kegiatan yang bertujuan untuk mengatasi masalah keperawatan/kebidanan pasien yang dilaksanakan oleh perawat/bidan disamping melibatkan pasien untuk membahas dan melaksanakan asuhan keperawatan/kebidanan.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam melaksanakan ronde keperawatan di ruang rawat untuk: Menumbuhkan cara berpikir kritis dan sistematis; Meningkatkan kemampuan validasi data pasien; Meningkatkan kemampuan menentukan diagnosis keperawatan/kebidanan; Menumbuhkan pemikiran tentang tindakan keperawatan yang berorientasi pada masalah pasien; Meningkatkan kemampuan memodifikasi rencana asuhan; Meningkatkan kemampuan justifikasi; Meningkatkan kemampuan menilai hasil kerja.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Pra-ronde', items: [
                { desc: 'Menentukan kasus dan topik (masalah yang tidak teratasi dan masalah yang langka)' },
                { desc: 'Menentukan tim ronde' },
                { desc: 'Mencari sumber atau literatur' },
                { desc: 'Membuat proposal' },
                { desc: 'Mempersiapkan pasien: informed consent dan pengkajian' },
                { desc: 'Diskusi: Apa diagnosis keperawatan? Apa data yang mendukung? Bagaimana intervensi yang sudah dilakukan dan apa hambatannya?' }
            ]},
            { step: 'Pelaksanaan Ronde', items: [
                { desc: 'Penjelasan tentang pasien oleh perawat/bidan primer yang difokuskan pada masalah keperawatan dan rencana tindakan' },
                { desc: 'Diskusi antar anggota tim tentang kasus tersebut' },
                { desc: 'Pemberian justifikasi oleh perawat/bidan primer atau konselor atau kepala ruangan tentang masalah pasien serta rencana tindakan' }
            ]},
            { step: 'Pasca-ronde', items: [
                { desc: 'Evaluasi, revisi, dan perbaikan' },
                { desc: 'Kesimpulan dan rekomendasi penegakkan diagnosis; intervensi keperawatan selanjutnya' }
            ]},
            { step: 'Peran Perawat/Bidan Primer dan Associate', items: [
                { desc: 'Menjelaskan data pasien yang mendukung masalah pasien' },
                { desc: 'Menjelaskan diagnosis keperawatan/kebidanan' },
                { desc: 'Menjelaskan intervensi yang dilakukan' },
                { desc: 'Menjelaskan hasil yang didapat' },
                { desc: 'Menjelaskan rasional (alasan ilmiah) dari tindakan yang diambil' },
                { desc: 'Menggali masalah-masalah pasien yang belum terkaji' }
            ]},
            { step: 'Peran Perawat Konselor', items: [
                { desc: 'Memberikan justifikasi' },
                { desc: 'Memberikan reinforcement' },
                { desc: 'Memvalidasi kebenaran dari masalah dan intervensi keperawatan serta rasional tindakan' },
                { desc: 'Mengarahkan dan koreksi' },
                { desc: 'Mengintegrasikan konsep dan teori yang telah dipelajari' }
            ]},
            { step: 'Kriteria Evaluasi', items: [
                { desc: 'Struktur: Persyaratan administratif, tim ronde hadir, persiapan dilakukan sebelumnya' },
                { desc: 'Proses: Peserta mengikuti kegiatan dari awal hingga akhir, seluruh peserta berperan aktif' },
                { desc: 'Hasil: Pasien merasa puas, masalah pasien teratasi, perawat dapat berpikir kritis dan sistematis, meningkatkan kemampuan validitas data, diagnosis, modifikasi rencana, justifikasi, dan penilaian hasil kerja' }
            ]}
        ],
        dokumenTerkait: ['Laporan Ronde Keperawatan'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Bedah Sentral', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif']
    },
    {
        id: 615,
        title: 'Penulisan Rencana Harian Kerja dalam Konteks MPKP',
        category: 'manajemen',
        subCategory: 'keperawatanDasar',
        description: 'Proses penyusunan strategi dan rancangan tindakan harian untuk mencapai tujuan asuhan keperawatan.',
        icon: 'fa-calendar-alt',
        tags: ['Rencana Harian', 'MPKP', 'Perencanaan', 'Manajemen'],
        noDokumen: '445/ SPO.3404/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Merupakan proses pendefinisian tujuan organisasi dan kemudian menyusun strategi, taktik, dan rancangan tindakan yang diperlukan untuk mencapai tujuan.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam menyusun rencana kerja harian pengelolaan asuhan keperawatan di ruang rawat.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Penyusunan Rencana', items: [
                { desc: 'Setelah melaksanakan operan, pada saat pre conference, Kepala Ruangan, Perawat Primer dan Perawat Associate menyusun Rencana Kerja Harian sesuai format yang ditetapkan' }
            ]},
            { step: 'Rencana Kerja Harian Kepala Ruangan', items: [
                { desc: 'Berisi: Kegiatan Rutin, Supervisi Asuhan Keperawatan, Supervisi Ka. Tim dan Perawat Pelaksana, Supervisi SDM lain, Supervisi lingkungan, dll.' },
                { desc: 'Panduan pengisian: Nama Kepala Ruangan, Hari dan tanggal, Persiapan, Operan, Pre Conference, Cek SDM, Cek kebutuhan pasien, Interaksi dengan pasien, Supervisi Tim I, II, III, Rapat Koordinasi, Istirahat, Cek ulang pasien, Buat RTL harian, Buat laporan, Operan' }
            ]},
            { step: 'Rencana Kerja Harian Perawat Primer', items: [
                { desc: 'Berisi: Penyelenggaraan asuhan keperawatan pada pasien yang menjadi tanggung jawabnya, Supervisi anggota tim (Ronde PP pada PA), Kolaborasi dengan tim kesehatan, Alokasi pasien kepada anggotanya' },
                { desc: 'Panduan pengisian: Melihat jadwal dinas, Operan, Pre conference, Merapihkan tempat tidur, Mengidentifikasi pemeriksaan diagnostik, Melengkapi pengkajian klien baru, Mengatur konsul, Mengevaluasi/membuat renpra, Diskusi dengan dokter, Melaksanakan tindakan, Monitoring dan membimbing PA, Dokumentasi SOAP, Menyusun RTL, Isoma, Pendidikan kesehatan, Post conference, Operan, Mengarahkan PA Sore' }
            ]},
            { step: 'Rencana Kerja Harian Perawat Associate', items: [
                { desc: 'Berisi: Kegiatan Rutin, Pelaksanaan Asuhan Keperawatan, Evaluasi Formatif' },
                { desc: 'Panduan pengisian: Nama PA, Hari dan tanggal, Persiapan, Operan, Pre Conference, Interaksi dengan pasien dalam melaksanakan tindakan keperawatan, Evaluasi Formatif, Post Conference, Istirahat' }
            ]}
        ],
        dokumenTerkait: ['Rencana Kerja Harian', 'Rekam medik pasien'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Hemodialisa']
    },
    {
        id: 616,
        title: 'Kontrol Pasien dalam Konteks MPKP',
        category: 'manajemen',
        subCategory: 'keperawatanDasar',
        description: 'Kegiatan interaksi dan observasi pasien di luar tindakan terencana untuk optimalisasi asuhan keperawatan.',
        icon: 'fa-heartbeat',
        tags: ['Kontrol Pasien', 'Observasi', 'Interaksi', 'MPKP'],
        noDokumen: '445/ SPO.3405/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Kontrol pasien adalah suatu kegiatan melaksanakan interaksi dan mengobservasi pasien diluar kegiatan pelaksanaan tindakan keperawatan yang telah direncanakan.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam melaksanakan kontrol pada pasien diwilayah tanggungjawabnya untuk optimalisasi pengelolaan asuhan keperawatan di ruang rawat dan kepuasan pasien.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Penjadwalan', items: [
                { desc: 'Kepala Ruangan mengatur jadwal kontrol kepada pasien dan masuk ke dalam rencana harian kerja' },
                { desc: 'Perawat Primer/Ketua Tim mengatur jadwal kontrol ke pasien dalam wilayah kerjanya dengan membagi tugas kepada PA' }
            ]},
            { step: 'Pelaksanaan Kontrol', items: [
                { desc: 'Kondisi umum pasien dengan melakukan komunikasi terapeutik' },
                { desc: 'Kelancaran tetesan infus' },
                { desc: 'Vital sign: nadi' }
            ]},
            { step: 'Dokumentasi dan Tindak Lanjut', items: [
                { desc: 'Hasil kontrol dicatat dalam lembar observasi pasien' },
                { desc: 'Apabila ada hal-hal yang penting atau ada masalah segera dilaporkan ke PP/Katim dan kepala ruangan untuk ditindaklanjuti' }
            ]}
        ],
        dokumenTerkait: ['Rekam medik pasien', 'Rencana Kerja Harian'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Bedah Sentral', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif']
    },
    {
        id: 617,
        title: 'Permintaan Darah ke Bank Darah RSUD Al Ihsan',
        category: 'tindakan',
        subCategory: 'keperawatanDasar',
        description: 'Kegiatan menyiapkan permintaan darah ke bank darah internal dengan sampel dan formulir.',
        icon: 'fa-tint',
        tags: ['Transfusi', 'Darah', 'Bank Darah', 'Laboratorium'],
        noDokumen: '445/ SPO.3406/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Suatu kegiatan menyiapkan permintaan darah ke bank darah RSUD Al Ihsan dengan melampirkan sampel darah dan formulir pada pasien dengan indikasi transfusi.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam permintaan darah ke bank darah RSUD Al Ihsan untuk pasien yang memerlukan transfusi.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan', items: [
                { desc: 'Format permintaan darah ke bank darah' },
                { desc: 'Sample darah ± 3 cc' },
                { desc: 'Label' },
                { desc: 'Pasien/keluarga diberikan penjelasan bahwa pasien memerlukan darah' }
            ]},
            { step: 'Pelaksanaan', items: [
                { desc: 'Petugas ruangan menghubungi petugas bank darah untuk menanyakan ketersediaan darah' },
                { desc: 'Perawat mengisi formulir permintaan darah dan ditandatangani oleh dokter (Nama, No RM, umur, ruangan, pukul, tanggal, golongan darah, jumlah, komponen darah)' },
                { desc: 'Perawat mengambil contoh darah ± 3 cc dan pasang label identitas pasien pada spuit' },
                { desc: 'Perawat membawa sampel darah dan formulir ke bank darah' },
                { desc: 'Bila darah sudah selesai crossmatch, darah diambil oleh perawat menggunakan Ice Box' }
            ]},
            { step: 'Evaluasi', items: [
                { desc: 'Pastikan formulir permintaan darah sudah diisi lengkap dan ditandatangani oleh dokter' },
                { desc: 'Cek ulang identitas pasien pada formulir dengan identitas di label darah' }
            ]},
            { step: 'Dokumentasi', items: [
                { desc: 'Mencatat tindakan yang telah dilakukan pada catatan keperawatan' }
            ]}
        ],
        dokumenTerkait: ['Format permintaan darah ke bank darah'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Bedah Sentral', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif']
    },
    {
        id: 618,
        title: 'Permintaan Darah ke PMI',
        category: 'tindakan',
        subCategory: 'keperawatanDasar',
        description: 'Kegiatan menyiapkan permintaan darah ke Palang Merah Indonesia (PMI) dengan sampel dan formulir.',
        icon: 'fa-hand-holding-heart',
        tags: ['Transfusi', 'Darah', 'PMI', 'Laboratorium'],
        noDokumen: '445/ SPO.3407/Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Suatu kegiatan menyiapkan permintaan darah ke PMI dengan melampirkan sampel darah dan formulir pada pasien dengan indikasi transfusi.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam permintaan darah ke PMI untuk pasien yang memerlukan transfusi.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
        prosedur: [
            { step: 'Persiapan', items: [
                { desc: 'Format permintaan darah ke PMI' },
                { desc: 'Sample darah ± 3 cc' },
                { desc: 'Label' },
                { desc: 'Pasien/keluarga diberikan penjelasan tentang kebutuhan darah di PMI' }
            ]},
            { step: 'Pelaksanaan', items: [
                { desc: 'Petugas ruangan/bank darah menghubungi PMI menanyakan ketersediaan darah' },
                { desc: 'Jika darah tersedia: Perawat mengisi formulir permintaan darah PMI dan ditandatangani dokter (Nama RS, dokter, diagnosis, indikasi, Hb terakhir, data pasien, jenis dan jumlah komponen darah)' },
                { desc: 'Perawat mengambil contoh darah ± 3 cc dan pasang label identitas' },
                { desc: 'Untuk pasien umum: keluarga mengambil darah ke PMI dengan membawa format permohonan dan sampel darah' },
                { desc: 'Untuk pasien kontraktor, VIP, Kelas I dan IIA: petugas ambulance yang mengambil' },
                { desc: 'Jika darah tidak tersedia: Keluarga diminta menyediakan pendonor yang segolongan' },
                { desc: 'Darah dari PMI diterima oleh perawat ruangan, berkas kwitansi diserahkan ke bagian administrasi dan bank darah' }
            ]},
            { step: 'Evaluasi', items: [
                { desc: 'Pastikan formulir permintaan darah sudah diisi lengkap dan ditandatangani dokter' },
                { desc: 'Cek ulang identitas pasien pada formulir dengan identitas di label darah' }
            ]},
            { step: 'Dokumentasi', items: [
                { desc: 'Mencatat tindakan yang telah dilakukan pada catatan keperawatan' }
            ]}
        ],
        dokumenTerkait: ['Format permintaan darah ke PMI'],
        instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Bedah Sentral', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif']
    }
];
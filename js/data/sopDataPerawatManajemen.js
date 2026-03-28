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
    // {
    //     id: 612,
    //     title: 'Timbang Terima / Operan Antar Shift',
    //     category: 'manajemen',
    //     subCategory: 'keperawatanDasar',
    //     description: 'Proses komunikasi dalam manajemen antar staf keperawatan untuk kesinambungan pelayanan.',
    //     icon: 'fa-handshake',
    //     tags: ['Operan', 'Serah Terima', 'Timbang Terima', 'Komunikasi'],
    //     noDokumen: '445/ SPO.3400/ Bidper',
    //     tanggalTerbit: '04 Maret 2019',
    //     pengertian: 'Proses komunikasi dalam manajemen antar staf keperawatan dalam rangka kesinambungan pelayanan serta proses interaksi staf dengan pasien, keluarga dan petugas lain dalam melaksanakan asuhan keperawatan.',
    //     tujuan: 'Sebagai acuan penerapan langkah-langkah dalam melaksanakan timbang terima/operan shift jaga di ruang rawat untuk kesinambungan pelayanan.',
    //     kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    //     prosedur: [
    //         { step: 'Persiapan', items: [
    //             { desc: 'Buku komunikasi' },
    //             { desc: 'Status Pasien' },
    //             { desc: 'Hal-hal lain yang diperlukan' },
    //             { desc: 'Semua petugas sudah siap di nurse station' }
    //         ]},
    //         { step: 'Pelaksanaan di Nurse Station', items: [
    //             { desc: 'Kepala Ruangan/PP/Penanggungjawab shift memimpin operan' },
    //             { desc: 'Sebelum kegiatan dimulai diawali membaca ayat suci Al-Quran atau kultum' },
    //             { desc: 'PP/Pgj shift sebelumnya menyampaikan laporan kegiatan shift sebelumnya: jumlah pasien, pasien yang perlu pengawasan/konsultasi/observasi ketat serta kondisi lain' },
    //             { desc: 'Serah terima inventaris ruangan: nama barang, jumlah, kondisi barang dan hal-hal lain yang perlu diketahui' },
    //             { desc: 'Perawat yang menerima laporan melakukan klarifikasi dan tanya jawab terhadap hal-hal yang kurang jelas' },
    //             { desc: 'Kepala Ruangan/PP/Pgj shift berikutnya menerima laporan dan menandatangani buku komunikasi' },
    //             { desc: 'Berdoa untuk kelancaran kegiatan dipimpin oleh seorang staf yang ditunjuk' }
    //         ]},
    //         { step: 'Timbang Terima di Sisi Pasien', items: [
    //             { desc: 'Kepala Ruangan/PP/Pgj Shift melakukan timbang terima pasien secara berkeliling sesuai timnya' },
    //             { desc: 'Mengucapkan salam "Assalamualaikum… selamat pagi/siang/sore…. (panggil nama pasien dengan sopan dan jelas)"' },
    //             { desc: 'Menyapa pasien "Maaf bapak/ibu kami mengganggu sebentar, karena akan serah terima dinas dengan shift berikutnya"' },
    //             { desc: 'Mengenalkan perawat pengganti shift berikutnya' },
    //             { desc: 'Perawat yang akan berdinas menyapa pasien dan menganalisa keadaan umum serta lingkungan pasien' },
    //             { desc: 'Sampaikan terima kasih dan ucapkan salam' },
    //             { desc: 'Khusus operan malam ke pagi, pada saat keliling ada perawat yang memimpin berdoa di depan pasien dan keluarga secara bergiliran' }
    //         ]},
    //         { step: 'Pasca Operan', items: [
    //             { desc: 'Setelah selesai operan keliling, semua perawat kembali ke nurse station' },
    //             { desc: 'Masuk ke kelompok timnya masing-masing' }
    //         ]}
    //     ],
    //     dokumenTerkait: ['Buku komunikasi perawat', 'Rekam medik pasien'],
    //     instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Bedah Sentral', 'Instalasi Laboratorium', 'Instalasi Radiologi']
    // },
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
        category: 'manajemen',
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
        category: 'manajemen',
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
    },
    {
    id: 619,
    title: 'Menerima Pasien Baru',
    category: 'manajemen',
    subCategory: 'keperawatanDasar',
    description: 'Kegiatan menerima pasien baru yang akan dirawat di ruang perawatan.',
    icon: 'fa-user-plus',
    tags: ['Pasien Baru', 'Rawat Inap', 'Orientasi', 'Asesmen Awal'],
    noDokumen: '445/SPO.3378/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Suatu kegiatan menerima pasien baru yang akan dirawat di ruang perawatan.',
    tujuan: 'Sebagai acuan penerapan langkah-langkah dalam menerima pasien baru yang akan dirawat di ruang perawatan.',
    kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        { step: 'Persiapan', 
            items: [
                {
                    desc: 'Persiapan Alat',
                    detail: [
                        { text: '1) Bak instrumen steril sedang berisi:'} ,
                        { text: '2) Tempat tidur dalam keadaan siap pakai' },
                        { text: '3) Oksigen lengkap sesuai kebutuhan' },
                        { text: '4) Standar infus sesuai kebutuhan' },
                        { text: '5) Timbangan berat badan sesuai kebutuhan' },
                        { text: '6) Format orientasi pasien baru' },
                        { text: '7) Alat pemeriksaan tanda-tanda vital (tensimeter, stetoskop, termometer, jam dengan penunjuk detik)' }
                    ]
                }
]},
        { step: 'Pelaksanaan', items: [
            { desc: 'Perawat ruangan menyiapkan tempat tidur untuk pasien baru' },
            { desc: 'Pasien dan keluarga diterima dengan ramah' },
            { desc: 'Pasien diantar ke kamar perawatan' },
            { desc: 'Mengatur posisi pasien yang nyaman di tempat tidur dan memasang alat sesuai kebutuhan (oksigen, dll)' },
            { desc: 'Memperkenalkan diri' },
            { desc: 'Melakukan serah terima pasien dengan petugas IRJ / IGD' },
            { desc: 'Perawat ruangan melakukan orientasi untuk pasien baru sesuai SOP' },
            { desc: 'Bila memungkinkan ukur BB dan TB ( terutama pasien bayi dan anak )' },
            { desc: 'Melakukan anamnesa keperawatan dan pemeriksaan tanda-tanda vital ( tekanan darah, nadi respirasi dan suhu tubuh )' },
            { desc: 'Perawat ruangan melaporkan adanya pasien baru kepada kepala tim/kepala ruangan dan dokter ruangan' },
            { desc: 'Data pasien baru dicatat dalam buku register ruangan' }
        ]},
        { step: 'Evaluasi',
            desc: 'Memantau respon pasien selama proses penerimaan dan pemeriksaan'
        },
        { step: 'Dokumentasi',
            desc: 'Mendokumentasikan tindakan yang telah dilakukan dalam rekam medis pasien'
        }
    ],
    dokumenTerkait: ['Rekam Medik Pasien', 'Form Penerimaan Pasien Baru'],
    instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif']
    },
    {
    id: 620,
    title: 'Orientasi Pasien Baru',
    category: 'manajemen',
    subCategory: 'keperawatanDasar',
    description: 'Kegiatan melakukan orientasi kepada pasien baru dan keluarga yang di rawat di RSUD Al-Ihsan, agar pasien dan keluarga memahami dan mengetahui tata tertib serta peraturan yang berlaku di RSUDAl-Ihsan.',
    icon: 'fa-clipboard-list',
    tags: ['Pasien Baru', 'Orientasi', 'Edukasi Pasien', 'Rawat Inap'],
    noDokumen: '445/SPO.3379/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Suatu kegiatan melakukan orientasi kepada pasien baru dan keluarga yang di rawat di RSUD Al-Ihsan, agar pasien dan keluarga memahami dan mengetahui tata tertib serta peraturan yang berlaku di RSUDAl-Ihsan.',
    tujuan: '1. Sebagai acuan penerapan langkah-langkah dalam melakukan orientasi kepada pasien baru.\nPasien mendapatkan informasi yang dibutuhkan tentang pelayanan, sarana dan prasarana serta hak dan kewajiban pasien.\nTercapainya kepuasan pasien.',
    kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        { step: 'Persiapan', 
            items: [
                {
                    desc: 'Persiapan Alat',
                    detail: [
                        { text: '1) Daftar fasilitas yang ada' },
                        { text: '2) Peraturan atau tata tertib yang tertulis' }
                    ]
                },
                {
                    desc: 'Hal-hal yang harus diorientasikan',
                    detail: [
                        { text: '1) Fasilitas ruangan' },
                        { text: '2) Pelayanan dokter dan perawat' },
                        { text: '3) Pelayanan gizi' },
                        { text: '4) Pelayanan obat-obatan dan alat kesehatan' },
                        { text: '5) Perlengkapan sehari-hari' },
                        { text: '6) Administrasi dan keuangan' },
                        { text: '7) Peraturan dan tata tertib' },
                        { text: '8) Hak dan kewajiban pasien' }
                    ]
                }
        ]},
        { step: 'Pelaksanaan', 
            items: [
                {
                desc: 'A. Menyambut pasien baru di ruangan dengan ramah dan penuh perhatian',
                detail: [
                    { text: '1) Mengucapkan salam' },
                    { text: '2) Perawat memperkenalkan diri' },
                    { text: '3) Menanyakan nama pasien dan memanggil dengan nama kesukaannya' }
                ]
                },
                {
                desc: 'B. Melakukan orientasi pasien baru',
                detail: [
                    { 
                    text: '1) Menjelaskan fasilitas ruangan',
                    subDetail: [
                        '- Nama ruangan dan nomor kamar',
                        '- Tempat tidur dan cara menggunakannya',
                        '- Lemari pasien dan kursi',
                        '- Bel pasien dan cara menggunakannya',
                        '- Air panas',
                        '- Arah kiblat'
                    ]
                    },
                    { 
                    text: '2) Pelayanan dokter dan perawat',
                    subDetail: [
                        '- Tim keperawatan yang merawat / bertanggungjawab / kepala tim',
                        '- Perawat yang dapat dihubungi bila membutuhkan informasi',
                        '- Dokter yang menangani',
                        '- Waktu visite dan konsultasi dokter',
                        '- Pengganti dokter spesialis bila berhalangan visite'
                    ]
                    },
                    { 
                    text: '3) Pelayanan gizi',
                    subDetail: [
                        '- Waktu pemberian makan pagi, siang dan sore',
                        '- Waktu pemberian snack',
                        '- Tempat pengambilan air minum (jika memerlukan)'
                    ]
                    },
                    { 
                    text: '4) Tempat pelayanan obat-obatan dan alat kesehatan',
                    subDetail: [
                        '- Ketentuan obat-obatan dan alat kesehatan untuk pasien (askes, kontraktor, umum,  jamkesmas/gakinda)',
                        '- Pengambilan resep untuk pasien sesuai ketentuan',
                        '- Pengecekan ulang obat yang telah dibeli dari apotek disesuaikan dengan kuitansi'
                    ]
                    },
                    { 
                    text: '5) Perlengkapan sehari-hari',
                    subDetail: [
                        '- Kebutuhan pakaian, peralatan mandi dan peralatan makan yang diperlukan',
                        '- Paket yang disediakan dari rumah sakit (bila diperlukan/bila tersedia)',
                        '- Tempat penyimpanan barang'
                    ]
                    },
                    { 
                    text: '6) Administrasi dan keuangan',
                    subDetail: [
                        '- Pelayanan administrasi dan keuangan untuk pasien askes, kontraktor, umum,gakinda dan jamkesmas',
                        '- Deposit biaya perawatan (khusus untuk pasien umum)'
                    ]
                    },
                    { 
                    text: '7) Menjelaskan Tata tertib',
                    subDetail: [
                        '- Jam kunjungan / Bezuk: pagi (jam 10.30–12.30) dan sore (jam 15.30–17.30)',
                        '- Jumlah penunggu pasien'
                    ]
                    },
                    { 
                    text: '8) Hak dan kewajiban pasien',
                    }
                ]
                },
                { desc: 'Menanyakan kepada pasien / keluarga jika ada hal-hal yang belum jelas atau yang akan ditanyakan' },
                { desc: 'Isi lembar cek list orientasi pasien baru yang telah disampaikan, ditandatangani oleh pasien / keluarga dan perawat yang memberikan orientasi' },
                { desc: 'Berpamitan dan mengucapkan salam' }
        ]},
        { step: 'Evaluasi',
            desc: 'Tanyakan kembali kepada pasien atau keluarga mengenai kejelasan informasi yang telah disampaikan'
        },
        { step: 'Dokumentasi',
            desc: 'Mendokumentasikan kegiatan yang telah dilaksanakan di dalam status pasien'
        }
    ],
    dokumenTerkait: ['Rekam medik pasien', 'Form orientasi pasien baru'],
    instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anesthesi dan Perawatan Intensif']
    },
    {
    id: 621,
    title: 'Pre dan Post Conference',
    category: 'manajemen',
    subCategory: 'keperawatanDasar',
    description: 'Kegiatan pertemuan tim yang dilakukan setiap hari, setelah melakukan operan dinas pagi, sore atau malam sesuai dengan jadwal dinas kepala tim / PP.',
    icon: 'fa-users',
    tags: ['Conference', 'Pre Conference', 'Post Conference', 'Manajemen Keperawatan'],
    noDokumen: '445/SPO.3382/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Conference merupakan pertemuan tim yang dilakukan setiap hari, setelah melakukan operan dinas pagi, sore atau malam sesuai dengan jadwal dinas kepala tim / PP.',
    tujuan: 'Sebagai acuan penerapan langkah-langkah dalam melaksanakan conference pengelolaan asuhan keperawatan di ruang rawat dengan tujuan:\n1. Membahas masalah setiap klien berdasarkan renpra yang telah dibuat PP.\n2. Menetapkan klien yang menjadi tanggung jawab masing-masing PA.\n3. Membahas rencana tindakan keperawatan untuk setiap klien.\n4. Mengidentifikasi tugas PA untuk setiap klien yang menjadi tanggung jawabnya.',
    kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        { step: 'Persiapan', 
            items: [
                { desc: 'Rekam medik pasien' },
                { desc: 'Buku komunikasi' },
                { desc: 'Konferensi dilakukan setiap hari setelah pergantian dinas pagi/sore sesuai jadwal dinas PP' },
                { desc: 'Konferensi dihadiri oleh PP dan PA dalam tim masing-masing' }
        ]},
        { step: 'Pelaksanaan', 
            items: [
                {
                desc: 'A. Pre Conference',
                detail: [
                    { 
                    text: '1) PP menyampaikan perkembangan dan masalah klien',
                    subDetail: [
                        '- Keadaan umum klien',
                        '- Keluhan klien',
                        '- Tanda-tanda vital dan kesadaran',
                        '- Hasil pemeriksaan laboratorium/diagnostik terbaru',
                        '- Masalah keperawatan',
                        '- Rencana keperawatan hari ini',
                        '- Perubahan terapi medis',
                        '- Rencana medis'
                    ]
                    },
                    { 
                    text: '2) PP mendiskusikan dan mengarahkan PA',
                    subDetail: [
                        '- Keluhan klien terkait pelayanan (keterlambatan, kesalahan pemberian makan, kebisingan, ketidakhadiran dokter)',
                        '- Ketepatan pemberian infus',
                        '- Ketepatan pemantauan intake dan output cairan (I/O)',
                        '- Ketepatan pemberian obat oral atau injeksi',
                        '- Ketepatan pelaksanaan tindakan lain',
                        '- Ketepatan dan kebenaran dokumentasi'
                    ]
                    },
                    { text: '3) Mengingatkan kembali standar prosedur yang ditetapkan' },
                    { text: '4) Mengingatkan kedisiplinan, ketelitian, kejujuran, dan kemajuan masing-masing PA' },
                    { text: '5) Membantu PA menyelesaikan masalah yang tidak dapat diselesaikan' }
                ]
                },
                {
                desc: 'B. Post Conference',
                detail: [
                    { text: '1) Mendiskusikan hasil evaluasi tindakan yang telah dilakukan PA' },
                    { text: '2) Membahas perkembangan pasien kelolaan' },
                    { text: '3) Membahas kesulitan saat tindakan / mengelola pasien' },
                    { text: '4) Mengarahkan PA' },
                    { text: '5) Memberikan reinforcement' },
                    { text: '6) Menyusun rencana / tindak lanjut untuk shift berikutnya' },
                    { text: '7) Persiapan operan dinas' },
                    { text: '8) Menentukan hal-hal yang akan dioperkan' }
                ]
                }
        ]},
        { step: 'Evaluasi',
            desc: 'Menilai efektivitas pelaksanaan conference serta kejelasan pembagian tugas dan rencana tindak lanjut'
        },
        { step: 'Dokumentasi',
            desc: 'Mendokumentasikan hasil conference dalam buku komunikasi atau rekam medik sesuai ketentuan'
        }
    ],
    dokumenTerkait: ['Rekam medik pasien', 'Rencana kerja harian'],
    instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Hemodialisa']
    },
    {
    id: 622,
    title: 'Supervisi Keperawatan',
    category: 'manajemen',
    subCategory: 'keperawatanDasar',
    description: 'Kegiatan pengawasan dan pembinaan keperawatan untuk meningkatkan mutu pelayanan secara efektif dan berkesinambungan.',
    icon: 'fa-user-check',
    tags: ['Supervisi', 'Manajemen Keperawatan', 'Pengawasan', 'Mutu Pelayanan'],
    noDokumen: '445/SPO.3383/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertianFormat: 'paragraph',
    pengertian: 'Supervisi merupakan upaya untuk membantu pembinaan dan peningkatan kemampuan pihak yang disupervisi agar mereka dapat melaksanakan tugas kegiatan yang telah ditetapkan secara efisien dan efektif (Sudjana D, 2004).' + '\n' + 'Supervisi keperawatan adalah kegiatan pengawasan dan pembinaan yang dilakukan secara berkesinambungan oleh supervisor mencakup masalah pelayanan keperawatan, masalah ketenagaan, dan peralatan agar pasien mendapat pelayanan yang bermutu setiap saat (Depkes, 2000).',
    tujuan: 'Sebagai acuan penerapan langkah-langkah dalam melaksanakan supervisi asuhan keperawatan di ruang rawat guna pemenuhan dan peningkatan pelayanan pada klien dan keluarga yang berfokus pada kebutuhan, keterampilan, dan kemampuan perawat.',
    kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        { step: 'Mengadakan persiapan pengawasan', 
            items: [
                { desc: 'Menentukan tujuan' },
                { desc: 'Menentukan metode pengawasan' },
                { desc: 'Menentukan standar dan kriteria pengukuran' },
        ]},
        { step: 'Menjalankan pengawasan', 
            items: [
                { desc: 'Membuat dan menentukan rencana pengawasan' },
                { desc: 'Pelaksanaan pengawasan' },
                { desc: 'Penilaian dari pelaksanaan pengawasan' }, 
        ]},
         { step: 'Memperbaiki penyimpangan', 
            items: [
                { desc: 'Mengumpulkan informasi' },
                { desc: 'Mengidentifikasi masalah' },
                { desc: 'Menganalisis masalah' },
                { desc: 'Mencari dan menetapkan alternatif pemecahan masalah' },
                { desc: 'Melaksanakan upaya pemecahan masalah' }  
        ]},
    ],
    dokumenTerkait: ['Rekam Medik Pasien', 'Format Penilaian Kinerja Perawat'],
    instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Rawat Jalan', 'Instalasi Hemodialisa']
    },
    {
    id: 623,
    title: 'Menyiapkan Pasien Pulang',
    category: 'manajemen',
    subCategory: 'keperawatanDasar',
    description: 'Kegiatan mempersiapkan pasien pulang melalui edukasi, administrasi, dan kelengkapan medis agar pasien dapat melanjutkan perawatan di rumah.',
    icon: 'fa-hospital-user',
    tags: ['Pasien Pulang', 'Discharge Planning', 'Edukasi Pasien', 'Rawat Inap'],
    noDokumen: '445/SPO.3388/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Proses interaksi dengan pasien, keluarga dan petugas lain dalam kegiatan menjelaskan proses memulangkan pasien.',
    tujuan: '1. Terlaksananya kegiatan pelayanan di ruang rawat inap.\n2. Tersampaikannya hak dan kewajiban pasien selama proses pemulangan.\n3. Terciptanya keamanan dan kenyamanan pasien.\n4. Tercapainya kepuasan pasien.',
    kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        { step: 'Persiapan', 
            items: [
                {
                    desc: 'A. Persiapan Kelengkapan',
                    detail: [
                        { text: '1) Surat kontrol untuk ke poliklinik' },
                        { text: '2) Resep untuk di rumah' },
                        { text: '3) Keterangan istirahat sakit (bila diperlukan)' },
                        { text: '4) Hasil pemeriksaan penunjang yang boleh dibawa pulang' },
                        { text: '5) Obat-obatan yang masih dilanjutkan' },
                        { text: '6) Leaflet perawatan penyakit di rumah sesuai kasus' }
                    ]
                },
                {
                    desc: 'B. Persiapan Pasien',
                    detail: [
                        { text: '1) Pasien dan keluarga diberikan penjelasan bahwa pasien sudah bisa pulang' }
                    ]
                }
        ]},
        { step: 'Pelaksanaan', 
            items: [
                {
                desc: 'A. Pasien Pulang Sembuh',
                detail: [
                    { text: '1) Menyiapkan seluruh keperluan pasien (surat kontrol, resep, surat istirahat, hasil pemeriksaan, dll)' },
                    { text: '2) Menginformasikan keluarga untuk menyelesaikan administrasi sesuai ketentuan' },
                    { 
                    text: '3) Memberikan penyuluhan kepada pasien/keluarga',
                    subDetail: [
                        '- Keadaan kesehatan pasien saat pulang',
                        '- Perawatan yang harus dilakukan di rumah',
                        '- Obat-obatan yang masih diberikan dan cara pemakaian',
                        '- Pentingnya kontrol ulang sesuai kasus',
                        '- Diet pasien',
                        '- Aktivitas yang boleh dan tidak boleh dilakukan',
                        { text: '  Untuk bayi ditambah hal – hal yang lebih khusus antara lain:', marker: false },
                        '- Pentingnya pemeriksaan bayi secara teratur',
                        '- Perawatan tali pusat',
                        '- Cara memandikan bayi',
                        '- Imunisasi',
                        '- Cara pemberian obat – obatan kepada bayi',
                        '- Cara menjemur bayi'
                    ]
                    },
                    { text: '4) Pasien disiapkan untuk pulang dalam keadaan rapih' },
                    { text: '5) Bila bukti pembayaran administrasi telah diselesaikan, pasien dipersilahkan pulang     dan diberikan kesempatan kepada keluarga untuk berpamitan dengan sesama pasien atau petugas sesuai kebutuhan' },
                    { text: '6) Pasien dan keluarga diantar sampai pintu keluar' },
                    { text: '7) Pasien pulang dicatat dalam buku register pasien' },
                    { text: '8) Catatan rekam medik dilengkapi (catatan dokter/perawat atau unit  terkait lainnya)setelah lengkap status pasien diantar ke rekam medik' },
                    { text: '9) Tempat tidur dibereskan' },
                ]
                },
                {
                desc: 'B. Pasien Pulang Atas Permintaan Sendiri (Pulang Paksa)',
                detail: [
                    { text: '1) Pasien/keluarga diberikan penjelasan bahwa kondisi kesehatan pasien belum memungkinkan untuk pulang' },
                    { text: '2) Bila pasien/keluarga memaksa, maka pasien/keluarga harus menandatangani surat keterangan permintaan pulang atas kemauan sendiri/pulang paksa pada rekam medik pasien' },
                    { text: '3) Hal – hal lain sama dengan prosedur pasien pulang sembuh' }
                ]
                }
        ]},
    ],
    dokumenTerkait: ['Rekam medik pasien'],
    instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif']
    },
    {
    id: 624,
    title: 'Timbang Terima / Operan Antar Shift',
    category: 'manajemen',
    subCategory: 'keperawatanDasar',
    description: 'Kegiatan komunikasi antar staf keperawatan untuk memastikan kesinambungan pelayanan melalui operan antar shift.',
    icon: 'fa-exchange-alt',
    tags: ['Operan', 'Timbang Terima', 'Shift', 'Komunikasi Keperawatan'],
    noDokumen: '445/SPO.3400/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Proses komunikasi dalam manajemen antar staf keperawatan dalam rangka kesinambuingan pelayanan serta proses interaksi staf dengan pasien, keluarga dan petugas lain dalam melaksanakan tasuhan keperawatan.',
    tujuan: 'Sebagai acuan penerapan langkah-langkah dalam melaksanakan timbang terima/operan shift jaga di ruang rawat untuk menjamin kesinambungan pelayanan.',
    kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional  Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        { step: 'Persiapan', 
            items: [
                {
                    desc: 'A. Persiapan Kelengkapan Operan',
                    detail: [
                        { text: '1) Buku komunikasi' },
                        { text: '2) Status pasien' },
                        { text: '3) Hal-hal lain yang diperlukan' }
                    ]
                },
                {
                    desc: 'B. Persiapan Petugas',
                    detail: [
                        { text: '1) Semua petugas siap di nurse station' }
                    ]
                }
        ]},
        { step: 'Pelaksanaan', 
            items: [
                { desc: 'A. Kepala Ruangan/PP/Penanggungjawab shift memimpin operan' },
                { desc: 'B. Sebelum kegiatan dimulai diawali membaca ayat suci Al-Quran atau kultum' },
                { desc: 'C. PP/Pgj shift sebelumnya menyampaikan laporan kegiatan shift sebelumnya, meliputi : jumlah pasien, pasien yang perlu pengawasan/konsultasi/observasi ketat serta kondisi lain yang perlu disampaikan' },
                { desc: 'D. Serah terima inventaris ruangan meliputi : nama barang, jumlah, kondisi barang dan hal-hal lain yang perlu diketahui oleh petugas berikutnya (sesuai petugas yg ditunjuk)' },
                { desc: 'E. Perawat yang menerima laporan melakukan klarifikasi dan tanya jawab terhadap hal-hal yang kurang jelas' },
                { desc: 'F. Kepala Ruangan/PP/Pgj shift berikutnya menerima laporan dan menandatangani buku komunikasi' },
                { desc: 'G. Berdoa untuk kelancaran kegiatan hari ini dipimpin oleh seorang staf yang ditunjuk' },
                { desc: 'H. Kepala Ruangan/PP/Pgj Shift melakukan timbang terima pasien secara berkeliling sesuai dengan timnya masing-masing dengan cara', 
                    detail: [
                        { text: '1) Mengucapkan salam “Contoh : Assalamualaikum... selamat pagi/siang/sore... (panggil nama pasien dengan sopan dan jelas)' },
                        { text: '2) Menyapa pasien “Contoh : Maaf bapak/ibu kami mengganggu sebentar, karena akan serah terima dinas dengan shift berikutnya' },
                        { text: '3) Mengenalkan  perawat pengganti shift berikutnya “ Contoh : Bapak/Ibu, kenalkan ini Sr/Br ... yang akan merawat bapak/ibu di shift pagi/siang/sore ini. Jika bapak/ibu perlu bantuan/ membutuhkan sesuatu hubungi saja Sr/Br ...' },
                        { text: '4) Perawat yang akan berdinas menyapa pasien dan menganalisa keadaan umum serta lingkungan pasien  “Contoh : Bapak/Ibu ... (sebutkan nama) nanti saya yang akan merawat bapak/ibu dari pukul ... s.d. ...' },
                        { text: '5) Sampaikan terima kasih dan ucapkan salam “Contoh : Baiklah Bapak/ibu, terimakasih atas waktunya, sekarang kami permisi dulu. Wassalamualaikum' },
                        { text: '6) Khusus operan malam ke pagi, pada saat keliling ada perawat yang memimpin berdoa di depan pasien dan keluarga secara bergiliran' },
                        { text: '7) Jika telah selesai operan keliling, semua perawat kembali ke nurse station dan masuk ke kelompok timnya masing-masing' }
                    ]}
            ]
        }
    ],
    dokumenTerkait: ['Buku komunikasi perawat', 'Rekam medik pasien'],
    instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Bedah Sentral', 'Instalasi Laboratorium', 'Instalasi Radiologi']
    },
    {
    id: 625,
    title: 'Ronde Keperawatan',
    category: 'manajemen',
    subCategory: 'keperawatanDasar',
    description: 'Kegiatan diskusi kasus pasien untuk meningkatkan kemampuan klinis perawat dalam pengambilan keputusan asuhan keperawatan.',
    icon: 'fa-stethoscope',
    tags: ['Ronde', 'Diskusi Kasus', 'Asuhan Keperawatan', 'Clinical Reasoning'],
    noDokumen: '445/SPO.3403/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Kegiatan yang bertujuan untuk mengatasi masalah keperawatan/kebidanan pasien yang dilaksanakan oleh perawat/bidan disamping melibatkan pasien untuk membahas dan melaksanakan asuhan keperawatan/kebidanan.',
    tujuan: 'Sebagai acuan penerapan langkah-langkah dalam melaksanakan ronde keperawatan di ruang rawat untuk: \nMenumbuhkan cara berpikir kritis dan sistematis.\nMeningkatkan kemampuan validasi data pasien.\nMeningkatkan kemampuan menentukan diagnosis keperawatan/kebidanan.\nMenumbuhkan pemikiran tentang tindakan keperawatan/kebidanan yang berorientasi pada masalah pasien.\nMeningkatkan kemampuan memodifkasi rencana asuhan keperawatan/kebidanan.\nMeningkatkan kemampuan justifikasi. \nMeningkatkan kemampuan menilai hasil kerja',
    kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional  Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        { step: 'Pra-Ronde', 
            items: [
                { desc: 'A. Menentukan kasus dan topik (masalah yang tidak teratasi dan masalah yang langka)' },
                { desc: 'B. Menetukan tim ronde' },
                { desc: 'C. Mencari sumber atau literatur' },
                { desc: 'D. Membuat proposal' },
                { desc: 'E. Mempersiapkan pasien : informed consent dan pengkajian' },
                { desc: 'F. Diskusi :',
                    detail: [
                        { text: 'Apa diagnosis keperawatan/kebidanan? Apa data yg mendukung?' },
                        { text: 'Bagaimana intervensi yang sudah dilakukan dan apa hambatan yang ditemukan selama perawatan?' }
                    ]
                }
            ]
        },
        { step: 'Pelaksanaan Ronde', 
            items: [
                { desc: 'A. Penjelasan tentang pasien oleh perawat/bidan primer yang difokuskan pada masalah keperawatan/kebidanan dan rencana tindakan yang akan dilaksanakan dan atau telah dilaksanakan serta memilih prioritas yang perlu didiskusikan' },
                { desc: 'B. Diskusi antar anggota tim tentang kasus tersebut'},
                { desc: 'C. Pemberian justifikasi oleh perawat/bidan primer atau konselor atau kepala ruangan tentang rnasalah pasien serta rencana tindakan yang akan dilakukan' }
            ]
        },
        { step: 'Pasca-ronde', 
            items: [
                { desc: 'A. Evaluasi, revisi, dan perbaikan' },
                { desc: 'B. Kesimpulan dan rekomendasi penegakkan diagnosis; intervensi keperawatan/kebidanan selanjutnya'},
            ]
        },
        { step: 'Peran Perawat/Bidan Primer dan Perawat/bidan Associate', 
            items: [
                { desc: 'A. Menjelaskan data pasien yang mendukung masalah pasien.' },
                { desc: 'B. Menjelaskan diagnosis keperawatan/kebidanan.'},
                { desc: 'C. Menjelaskan intervensi yang dilakukan.' },
                { desc: 'D. Menjelaskan hasil yang didapat.' },
                { desc: 'E. Menjelaskan rasional (alasan ilmiah) dari tindakan yang diambil.' },
                { desc: 'F. Menggali masalah-masalah pasien yang belum terkaji.' }
            ]
        },
        { step: 'Peran Perawat Konselor', 
            items: [
                {desc: 'A. Memberikan justifikasi.'},
                {desc: 'B. Memberikan reinforcement.'},
                {desc: 'C. Memvalidasi kebenaran dari masalah dan intervensi keperawatan serta rasional tindakan.'},
                {desc: 'D. Mengarahkan dan koreksi.'},
                {desc: 'E. Mengintegrasikan konsep dan teori yang telah dipelajari.'}
            ]
        },
        { step: 'Kriteria Evaluasi', 
            items: [
                {desc: 'A. Struktur.', 
                    detail: [
                        { text: '1) Persyaratan administratif (Informed consent, alat, dan lainnya).' },
                        { text: '2) Tim ronde keperawatan hadir di tempat pelaksanaan ronde keperawatan.' },
                        { text: '3) Persiapan dilakukan sebelumnya.' }
                    ]
                },
                {desc: 'B. Proses.', 
                    detail: [
                        { text: '1) Peserta mengikuti kegiatan dari awal hingga akhir.' },
                        { text: '2) Seluruh peserta berperan aktif dalam kegiatan ronde sesuai peran yang telah ditentukan.' },
                    ]
                },                
                {desc: 'C. Hasil.', 
                    detail: [
                        { text: '1) Pasien merasa puas dengan hasil pelayanan.' },
                        { text: '2) Masalah pasien dapat teratasi.' },
                        { text: '3) Perawat dapat:',
                            subDetail: [
                                '- Menumbuhkan cara berpikir yang kritis',
                                '- Meningkatkan cara berpikir yang sistematis.',
                                '- Meningkatkan kemampuan validitas data pasien.',
                                '- Meningkatkan kemampuan menentukan diagnosis keperawatan.',
                                '- Menumbuhkan pemikiran tentang tindakan keperawatan yang berorientasi pada masalah pasien.',
                                '- Meningkatkan kemampuan memodifikasi rencana asuhan keperawatan.',
                                '- Meningkatkan kemampuan justifikasi.',
                                '- Meningkatkan kemampuan menilai hasil kerja.'
                            ]
                         }
                    ]
                }, 
            ]
        },
    ],
    dokumenTerkait: ['Laporan Ronde Keperawatan'],
    instalasiTerkait: ['Instalasi Gawat Darurat', 'Instalasi Bedah Sentral', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif']
    },
    {
    id: 626,
    title: 'Penulisan Rencana Harian Kerja',
    category: 'manajemen',
    subCategory: 'keperawatanDasar',
    description: 'Kegiatan penyusunan rencana kerja harian untuk pengelolaan asuhan keperawatan.',
    icon: 'fa-calendar-check',
    tags: ['RKH', 'Perencanaan', 'Manajemen Keperawatan'],
    noDokumen: '445/SPO.3404/Bidper',
    tanggalTerbit: '04 Maret 2019',
    pengertian: 'Merupakan proses pendefinisian tujuan organisasi dan kemudian menyusun strategi, taktik, dan rancangan tindakan yang diperlukan untuk mencapai tujuan.',
    tujuan: 'Sebagai acuan penerapan langkah-langkah dalam menyusun rencana kerja harian  pengelolaan asuhan keperawatan di ruang rawat.',
    kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional  Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019',
    prosedur: [
        { step: 'Setelah melaksanakan operan', 
            desc: 'Setelah melaksanakan operan, pada saat pre comference, Kepala Ruangan , Perawat Primer dan Perawat Assoasiate menyusun Rencana Kerja Harian sesuai dengan format yang telah ditetapkan' 
        },
        { step: 'Rencana Kerja Harian Kepala Ruangan',
            items: [
                { desc: 'A. Berisi tentang :',
                    detail: [
                    {text: '1) Kegiatan Rutin'},
                    {text: '2) Supervisi Asuhan Keperawatan'},
                    {text: '3) Supervisi Ka. Tim dan Perawat Pelaksana'},
                    {text: '4) Supervisi SDM lain'},
                    {text: '5) Supervisi lingkungan, dll.'}

            ]},
            {   desc: 'B. Panduan pengisian format sebagai berikut :',
                detail: [
                    { text: '1) Nama Kepala Ruangan' }, 
                    { text: '2) Hari dan tanggal' },
                    { text: '3) Persiapan' },
                    { text: '4) Operan' },
                    { text: '5) Pre Conference' },
                    { text: '6) Cek SDM' },
                    { text: '7) Cek kebutuhan pasien' },
                    { text: '8) Interaksi dgn pasien' },
                    { text: '9) Supervisi Tim I' },
                    { text: '10) Supervisi Tim II' },
                    { text: '11) Supervisi Tim Iii' },
                    { text: '12) Rapat Koordinasi dgn...' },
                    { text: '13) Istirahat' },
                    { text: '14) Cek ulang pasien' },
                    { text: '15) Buat RTL harian' },
                    { text: '16) Buat laporan' },
                    { text: '17) Operan' }

                ]
            }
        ]},
        { step: 'Rencana Kerja Harian Perawat Primer',
            items: [
                { desc: 'A. Berisi tentang :',
                    detail: [
                    {text: '1) Penyelenggaraan asuhan keperawatan pada pasien yang menjadi tanggung jawabnya.'},
                    {text: '2) Supervisi anggota tim (Ronde PP pada PA)'},
                    {text: '3) Kolaborasi dgn tim kesehatan'},
                    {text: '4) Alokasi pasien kepada anggotanya'}
            ]},
            {   desc: 'B. Panduan pengisian format sebagai berikut :',
                detail: [
                    { text: '1) Melihat jadwal dinas pagi, siapa PA dalam tim' },
                    { text: '2) Operan' },
                    { text: '3) Pre comference dengan PA' },
                    { text: '4) Merapihkan tempat tidur /perbeden' },
                    { text: '5) Mengidentifikasi pemeriksaandiagnostik/laboratorium/rontgen' },
                    { text: '6) Melengkapi pengkajian klien baru' },
                    { text: '7) Mengidentifikasi/mengatur konsul' },
                    { text: '8) Mengevaluasi /membuat renpra/ membaca status' },
                    { text: '9) Diskusi dengan dokter tentang perkembangan pasien' },
                    { text: '10) Melaksanakan tindakan mencatat hasil visite dokter' },
                    { text: '11) Monitoring pelaksanaan tindakan dan membimbing PA (Ronde/supervisi PP ke PA)' },
                    { text: '12) Membantu PA dalam tindakan yang bersifat Kritikal' },
                    { text: '13) Dokumentasi /Membuat laporan perkembangan klien (SOAP)' },
                    { text: '14) Menyusun RTL untuk sore dan malam' },
                    { text: '15) Isoma bergantian dengan PA' },
                    { text: '16) Pendidikan kesehatan bagi klien dan keluarga' },
                    { text: '17) Post comference' },
                    { text: '18) Operan dengan PA Sore' },
                    { text: '19) Mengarahkan PA Sore' }
                ]
            },
        ]},
        { step: 'Rencana Kerja Harian Perawat Assosiate',
            items: [
                { desc: 'A. Berisi tentang :',
                    detail: [
                    { text: '1) Kegiatan Rutin' },
                    { text: '2) Pelaksanaan Asuhan Keperawatan' },
                    { text: '3) Evaluasi Formatif' }
            ]},
            {   desc: 'B. Panduan pengisian format sebagai berikut :',
                detail: [
                    { text: '1) Nama PA' },
                    { text: '2) Hari dan tanggal' },
                    { text: '3) Persiapan' },
                    { text: '4) Operan' },
                    { text: '5) Pre Conference' },
                    { text: '6) Interaksi dgn pasien dalam melaksanakan tindakan keperawatan pasien 1,2,3,... Dst sesuai tanggungjawabnya.' },
                    { text: '7) Evaluasi Formatif' },
                    { text: '8) Post Comference' },
                    { text: '9) Istirahat' }
                ]
            },
        ]},
    ],
    dokumenTerkait: ['Rencana Kerja Harian', 'Rekam medik pasien'],
    instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Hemodialisa']
    },
    {
    id: 627,
    title: 'Serah Terima Pasien (Operasi Antar Shift) di Ruang Perawatan',
    category: 'manajemen',
    subCategory: 'keperawatanDasar',
    description: 'Proses interaksi dengan pasien, keluarga, dan petugas lain dalam melaksanakan kegiatan serah terima dinas (operan pasien) di ruang perawatan.',
    icon: 'fa-people-arrows',
    tags: [
        'Serah Terima Pasien',
        'Operan Pasien',
        'Antar Shift',
        'Ruang Perawatan',
        'Keperawatan',
        'Hand Over'
    ],

    noDokumen: '445/SPO.3387/ Bidper',
    tanggalTerbit: '04 Maret 2019',

    pengertian: `Proses interaksi dengan pasien, keluarga, dan petugas lain dalam melaksanakan kegiatan serah terima dinas (operan pasien) di ruang perawatan.`,

    tujuan: `Terlaksananya kegiatan serah terima dinas diruang rawat inap
            ⁠Terciptanya keamanan & kenyamanan pasien & ruang perawatan
            Tercapainya kepuasan pasien & keluarga`,

    kebijakan: `Surat Keputusan Pemberlakuan Standar Prosedur Operasional Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 - RS. Ihsan/2019`,

    prosedur: [
        {
            step: 'Persiapan',
            items: [
                {
                    desc: 'a. Persiapan Kelengkapan',
                    detail: [
                        { text: 'Buku komunikasi perawat' },
                        { text: 'Status pasien' },
                        { text: 'Hal - hal lain yang diperlukan' }
                    ]
                },
                {
                    desc: 'b . Persiapan Petugas',
                    detail: [
                        { text: 'Petugas berada diruang rawal' },
                        { text: "Membaca Al Qur'an dan do'a bersama dipimpin olet" }
                    ]
                }
            ]
        },
        {
            step: '2. Pelaksanaperwakilan',
            items: [
                {
                    desc: 'a. Serah terima dilaksanakan pada',
                    detail: [
                        { text: 'Dinas malam pukul 07.00 WIB' },
                        { text: 'Dinas pagi pukul 14.00 WIB' },
                        { text: 'Dinas Sore pukul 21.00 WIB' }
                    ]
                },
                { desc: 'b. Kepala ruangan, PP(Peraivat Primer) atau Penanggungiawab shif memimpin serah terima di ruangan' },
                {
                    desc: 'c. Serah terima pasien dilakukan secara keliling kepada setiappasien',
                    detail: [
                        { text: '1) Mengucapkan salam' },
                        { text: "Contoh: Assalamua'laikum ....selamat pagi, siang, sore malam. (Panggil nama pasien dengan sopan dan jelas)", marker: false },
                        { text: '2) Menyapa Pasien' },
                        { text: 'Contoh : " Maaf Bapak/ibu saya mengganggu sebentar karena akan serah terima dinas dengan shift berikutnya "Pak / Ibu (sebutkan nama pasien) kenalkan ini Zr/Br (sebutkan nama perawat yang akan berdinas) pagi/sore/malam ini zr/br tersebut yang akan merawat dan membantu Bapak / Ibu jika membutuhkan sesuatu".', marker: false },
                        { text: '3) Perawat yang akan berdinas menyapa pasien dan menganalisa keadaan umum serta lingkungan pasien' },
                        { text: 'Contoh: Pak /Ibu ( sebutkan nama pasien) nanti saya yang akan merawat Bapak /ibu dari pukul ......s/d….....', marker: false }
                    ]
                },
                {
                    desc: 'd. Sampaikan terima kasih dan ucapkan salam',
                    detail: [
                        { text: 'Contoh : " Baiklah Bapak/ibu terima kasih atas waktunya sekarang saya akan permisi dulu Assalamualaikum Wr. Wb."', marker: false }
                    ]
                }
            ]
        }
    ],

    dokumenTerkait: [
        'Status pasien',
        'Buku komunikasi perawat'
    ],

    instalasiTerkait: [
        'Instalasi Rawat Inap',
        'Instalasi Anestesi dan Perawatan Intensif',
        'Instalasi Hemodialisa',
        'Instalasi Gawat Darurat'
    ]
    },

    {
    id: 628,
    title: 'Hand Over / Serah Terima Pasien Antar Unit Kerja',
    category: 'manajemen',
    subCategory: 'keperawatanDasar',
    description: 'Operan pasien yang dilakukan oleh antar unit kerja untuk proses perawatan, pengobatan, tindakan diagnostik, operatif dan sebagainya untuk diketahui dan diperhatikan oleh penerima transfer.',
    icon: 'fa-right-left',
    tags: [
        'Hand Over',
        'Serah Terima Pasien',
        'Antar Unit Kerja',
        'Transfer Pasien',
        'Rujukan Intern',
        'Komunikasi Efektif'
    ],

    noDokumen: '445/SPO.5907/UHP',
    tanggalTerbit: '19 Februari 2019',

    pengertian: `Hand Over/Serah terima antar unit kerja adalah operan pasien yang dilakukan oleh antar unit kerja untuk proses perawatan, pengobatan, tindakan diagnostik, operatif dan sebagainya untuk diketahui dan diperhatikan oleh penerima transfer.
                Komunikasi pada saat transfer (Rujukan Intern) adalah cere berkomunikasi seraca efektif pada saat operan memindahkan pasien dari satu ruangan ke ruangan yang di tuju yang ada di dalam Rumah Sakit oleh perawat yang mengantar dan perawat yang menerima di ruangan yang dituju.`,

    tujuan: `Sebagai Acuan dalam penerapan langkah langkah melaksanakan komunikasi saat hand over/serah terima pasien antar unit kerja untuk :
            1. Mutu dan keselamatan pasien
            2. Kesinambungan pelayanan.`,

    kebijakan: [
        {text: '1. Surat Keputusan N o : 445 / Kep.4822.RS Ihsan / 2019 tentang kebijakan peningkatan mutu dan keselamatan pasien di lingkungan rumah sakit umum daerah Al Ihsan'},
        {text: '2. Surat Keputusan No : 445/ Kep.2492-RS Ihsan/2019 tentang Panduan Komunikasi efektif di rumah sakit umum daerah Al Ihsan'}
    ],

    prosedur: [
        {
            step: 'Persiapan',
            items: [
                { desc: 'A. Petugas yang akan mengantar sesuai level pasien' },
                { desc: 'B. Siapkan status pasien' },
                { desc: 'C. Form transfer sudah terisi lengkap' },
                { desc: 'D. Pasien disiapkan di alat transportasi (blankard/ kursi roda) dengan baik' },
                { desc: 'E. Lakukan Informed Consent kepada pasien/keluarga' },
                { desc: 'F. Perawat yang akan mengantar melakukan komunikasi terlebih dahulu dengan unit kerja yang akan dituju' },
                { desc: 'G. Siapkan data data yang di perlukan (Hasil Lab, Radiologi)' }
            ]
        },
        {
            step: '2. Pelaksanaan',
            items: [
                { desc: 'A. Pastikan form transfer terisi lengkap' },
                { desc: 'B. Petugas yang mengantar (Dokter/Perawat/Petugas terlatih sesuai tingkat kondisi pasien) mengucapkan salam, memperkenalkan diri kepada petugas yang ada di ruangan yang dituju.',
                    detail: [
                        {text: '"Assalamualaiku Wr. Wb, perkenankan saya ... mau mengantarkan pasien yang sudah kami pesankan sebelumnya”', marker: false}
                    ]
                },
                { desc: 'C. Petugas yang mengantar memastikan petugas yang akan menerima pasien',
                    detail: [
                        {text: '"Apakah Bapak/lbu/Sdr yang akan menerima handover pasien ini?"', marker: false}
                    ]
                },
                { desc: 'D. Petugas ang ngantai mei ab nglaa danfayan dan mengucapkan salam dan memperkenalkan diri pada pasien/keluarganya',
                    detail: [
                        {text: '"Waalaikumsalam, benar saya yang akan menerima, berkenalkan bapak/lbu ... (pasien) saya ...... petugas di ruangan ini, selamat datang di ruangan .....”', marker: false}
                    ]
                },
                { desc: 'E. Petugas yang mengantar menjelaskan maksud dan tujuan kepada pasien dan petugas yang akan menerma hand over',
                    detail: [
                        {text: '"Pasien ini kami antar ke ruangan ini untuk dirawat/ dilakukan tindakan/ alih rawat intensif/ untuk pemeriksaan/ untuk proses pembedahan*) pilih salah satu"', marker: false}
                    ]
                },
                { desc: 'F. Petugas yang menerima memastikan identitas pasien dengan mengecek gelang identitas.' },
                { desc: 'G. Petugas yang mengantar menjelaskan semua hal yang berkaitan dengan pasien sesuai dengan form transfer (RM 13)' },
                { desc: 'H. Petugas yang menerima melakukan pemeriksaan TTV dan kondisi pasien kemudian ditulis di form transfer (RM 13)' },
                { desc: 'I. Petugas yang menerima menandatangani form transfer (RM 13)', 
                    detail: [
                        { text: '“Baiklah kami tanda tangan form ini”', marker: false }
                    ] 
                },
                { desc: 'J. Petugas yang mengantar berpamitan kepada petugas penerima dan pasien/keluarganya', 
                    detail: [
                        { text: '"Terimakasih sudah menerima operan kami, Bapak/ibu .... (Pasien), kami ijin untuk kembali, semoga Bapak/ibu lekas sembuh. Wassalamualaikum, Wr. Wb."', marker: false }
                    ]
                }
            ]
        }
    ],

    dokumenTerkait: [
        'Status pasien',
        'Form transfer (RM 13)',
        'Hasil Lab',
        'Radiologi'
    ],

    instalasiTerkait: [
        'Bidang Pelayanan Medis',
        'Bidang Keperawatan',
        'Instalasi Rawat Jalan',
        'Instalasi Gawat darurat',
        'Instalasi Hemodialisa',
        'Instalasi Rawat Inap',
        'Instalasi Intensif dan Reanimasi',
        'Instalasi Rehabilitasi Medis',
        'Instalasi Radioterafi',
        'Instalasi Radiologi',
        'Instalasi Bedah Sentral',
        'Admission'
    ]
    },
    {
    id: 629,
    title: 'Hand Over Perawat Antar Shift Jaga',
    category: 'manajemen',
    subCategory: 'keperawatanDasar',
    description: 'Serah terima antar shift perawat atau dokter agar kondisi pasien saat ini diketahui oleh shif selanjutnya.',
    icon: 'fa-user-clock',
    tags: [
        'Hand Over',
        'Perawat',
        'Antar Shift',
        'Shift Jaga',
        'SBAR',
        'Operan Pasien'
    ],

    noDokumen: '445/SPO.5906/UHP',
    tanggalTerbit: '19 Februari 2019',

    pengertian: `Serah terima antar shift perawat atau dokter adalah operan shift pasien yang dilakukan oleh antar shift agar kondisi pasien saat ini diketahui oleh shif selanjutnya. Hand over berisi pemberian Informasi kondisi pasien antar staf klinis termasuk PPA berdasar atas proses yang sedang berjalan atau pada saat penting tertentu dalam proses asuhan yang ditulis dalam rekam medis.`,

    tujuan: `Sebagai Acuan Penekanan Langkah langkah melaksanakan hand over antar shift jaga.`,

    kebijakan: [
        { text: '1. Surat Keputusan No : 445 / Kep.4822.RS Ihsan / 2019 tentang kebijakan peningkatan mutu dan keselamatan pasien di lingkungan rumah sakit umum daerah Al Ihsan' },
        { text: '2. Surat Keputusan No : 445/ Kep.2492-RS Ihsan/2019 tentang Panduan Komunikasi efektif di rumah sakit umum daerah Al Ihsan' }
    ],

    prosedur: [
        {
            step: 'Persiapan',
            items: [
                { desc: 'A. Status Pasien' },
                { desc: 'B. Semua perawat duduk sudah siap melaksakana operan' }
            ]
        },
        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'A. Kedua kelompok/tim dalam keadaan siap untuk melakukan timbang terima sesuai jam kerja (Pagi pukul 07.00, siang pukul 14.00, malam pukul 20.00).' },
                { desc: 'B. Kelompok/tim yang akan bertugas menyiapkan buku catatan.' },
                { desc: 'C. Kepala ruangan (P/S) Ketua Tim/PP (M) memimpin untuk operan timbang terima yang akan dilakukan di nurse station diawali dengan membaca basmalah sebagai awal dimulainya acara timbang terima.',
                    detail: [
                        { text: 'Contoh : "Bismillahirahmanirrahim, Asalamualaikm Wr. Wb, Selamat Pagi/Siang, bagaimana semuanya sudah siap untuk melaksanakan operan?"', marker: false }
                    ]
                 },
                { desc: 'D. Kepala ruangan mempersilahkan kepada staf setiap tim untuk melaporkan : Jumlah pasien, Pasien dalam perhatian, Tindakan yang telah dilakukan, Rencana tindakan yang harus dilakukan Dan hal-hal penting lainnya kepada masing-masing petugas/PP dan PA dinas berikutnya.',
                    detail: [
                        { text: 'Contoh : "Silahkan Ketua Tim/PP/Shift sebelumnya untuk menyampaikan laporan kegiatan yang telah dilaksanakan.”', marker: false }
                    ]
                 },
                {
                    desc: 'E. Melaksanakan hand over sesuai timnya, dengan cara:',
                    detail: [
                        { text: '1) Sebelumnya perawat yang akan melakukan serah terima pasien membuat laporan dengan tehnik S-B-A.R' },
                        { text: '2) Ketua Tim/PP/ Pj Shift memastikan siapa yang akan menerima hand over' },
                        { text: '3) Ketua Tim/PP/ Pj Shift menjelaskan maksud dan tujuan kepada petugas yang akan menerima hand over' },
                        { text: '4) Ketua Tim/PP/ Pj Shift menjelaskan laporan tentang pasien kepada penerima hand over' }
                    ]
                },

                {
                    desc: 'F. Contoh komunikasi efektif SBAR antar shift terima :',
                    detail: [
                        { text: 'Situation (S) :',
                            subDetail: [
                                '- Nama : Tn.A',
                                '- Umur : 35 tahun',
                                '- Tanggal masuk : 8 Desember 2015, sudah 3 hari perawatan',
                                '- DPJP : d r H Apen A, SpPD',
                                '- Diagnosa medis : Gagal ginjal kronik'
                            ]
                        },
                        { text: 'Masalah keperawatan:', marker: false,
                            subDetail: [
                                { text: '• Gangguan keseimbangan cairan dan elektrolit lebih' },
                                { text: '• Perubahan kebutuhan nutrisi kurang' },
                            ]
                         },

                        { text: 'Background (B) :', 
                            subDetail: [
                                { text: '• Pasien bedrest total , urine 50 cc/24 jam, balance cairan 1000 cc/ 24 jam.', formula: false },
                                { text: '• Mual tetap ada selama dirawat, ureum 300 mg/dl.' },
                                { text: '• Pasien program HD 2x seminggu Senin dan Kamis.', formula: false },
                                { text: '• Terpasang infus NaCl 10 tetes/menit' },
                                { text: '• Dokter sudah menjelaskan penyakitnya tentang gagal ginjal kronik' },
                                { text: '• Diet : rendah protein 1 gram' },
                            ] 
                        },

                        { text: 'Assessment (A) :', 
                            subDetail: [
                                { text: '• Kesadaran composmentis, T D 150/80 mmHg, Nadi 100x/menit suhu 37 °C, RR 20x/menit, oedema pada ekstremitas bawah', formula: false },
                                { text: '• Hasil Laboratorium terbaru : Hb 9mg/dl, albumin 3, ureum 237 mg/dl' },
                                { text: '• Pasien masil mengeluh mual.' },
                            ] 
                        },

                        { text: 'Recommendation (R)',
                            subDetail: [
                                { text: '• Awasi balance caira' },
                                { text: '• Batasi asupan cairan' },
                                { text: '• Konsul ke dokter untuk pemasangan dower kateter' },
                                { text: '• Pertahankan pemberian diuretik injeksi furosemid 3 x 1 amp', formula: false },
                                { text: '• Bantu pasien memenuhi kebutuhan dasar pasien' },
                                { text: '• Jaga aseptic dan antiseptic setiap melakukan prosedur' }
                            ]
                         },
                    ]
                },

                { desc: 'f. Setelah selesai membacakan laporan, dilanjutkan dengan serah terima langsung ke pasien sambil menginformasikan penggantian petugas (Lama hand over untuk setiap klien tidak lebih dari 5 menit, kecuali pada kondisi khusus dan memerlukan penjelasan yang lengkap dan rinci)' },
                { desc: 'g. Setelah melihat pasien, Perawat/PPA yang mengantar dan menerima hand over mendiskusikan kembali apabila ada hal yang belum dimengerti' },
                { desc: 'h. Perawat yang menyerahkan dan menerima hand over menandatangani bukti dalam rekam medik' },
                { desc: 'i. Jika perlu pasien/keluarga dilibatkan dalam proses hand over ini pada saat keliling ruangan' },
                { desc: 'j. Di nurse station kepala ruangan mendiskusikan kembali timbang terima pasien kepada perawat untuk berdiskusi tentang apa saja yang masih belum dimerngerti dan dibicarakan kembali.' },
                { desc: 'k. Dilanjutkan dengan timbang terima alat dan obat emergency langsung melihat kondisi barang oleh penanggung jawab shif/dinas.' },
                { desc: 'l. Penanggung jawab shif yang menerima dan yang menyerahkan timbang terima menandatangani buku inventaris.' },
                { desc: 'm. Kepala ruangan mencatat permasalahan diruangan yang dituangkan dalam buku rencana kerja harian kepala ruangan.' },
                { desc: 'n. Kepala ruangan memimpin doa dan menutup kegiatan operan.' }
            ]
        }
    ],

    dokumenTerkait: [
        'Status Pasien',
        'Rekam medik',
        'Buku catatan',
        'Buku inventaris',
        'Buku rencana kerja harian kepala ruangan'
    ],

    instalasiTerkait: [
        'Bidang Pelayanan',
        'Bidang Keperawatan',
        'Instalasi Rawat Inap',
        'Instalasi Intensif'
    ]
    },
    {
    id: 630,
    title: 'Komunikasi Efektif Pada Pengisian Form Ringkasan Pasien Pulang (Resume Medis) dari Rawat Inap',
    category: 'manajemen',
    subCategory: 'komunikasi',
    description: 'Prosedur komunikasi efektif pada pengisian form ringkasan pasien pulang (resume medis) dari rawat inap.',
    icon: 'fa-file-medical',
    tags: [
        'Komunikasi Efektif',
        'Resume Medis',
        'Ringkasan Pasien Pulang',
        'Rawat Inap',
        'Rekam Medis',
        'DPJP'
    ],

    noDokumen: '445/SPO.5904/UHP',
    tanggalTerbit: '19 Februari 2019',

    pengertian: `CPPT adalah Catatan asuhan teritegrasi semua PPA dalam Rekam Medis pasien. Agar dapat terlaksana secara efektif, maka perlu kolaborasi yang intens diantara professional pemberi asuhan pasien. Diperlukan suatu kompetensi khusus yang disebut dengan kompetensi intra dan interprofesional kolaboratif.`,

    tujuan: `Sebagai Acuan Penekanan langkah langkah melakukan komunikasi tertulis di dalam CPPT`,

    kebijakan: [
        {text: 'Surat Keputusan No : 445 / Kep.4822.RS Ihsan / 2019 tentang kebijakan peningkatan mutu dan keselamatan pasien di lingkungan rumah sakit umum daerah Al Ihsan'},
        {text: 'Surat Keputusan No : 445/ Kep.2492-RS Ihsan/2019 tentang Panduan Komunikasi efektif di rumah sakit umum daerah Al Ihsan'}
    ],

    prosedur: [
        {
            step: 'Persiapan',
            items: [
                { desc: 'Status Pasien' },
                { desc: 'Pasien dan Keluarga disiapkan' }
            ]
        },

        {
            step: 'Pelaksanaan',
            items: [
                { desc: 'Resume medis harus d i isi dan ditandatangani oleh DPJP segera sesaat sebelum pasien pulang' },
                { desc: 'Perawat menyiapkan form resume medis diberkas rekam medis untuk diisi oleh DPJP. Isi dari resume :' ,
                    detail: [
                        { text: '1) Identitas pasien (nama pasien, tanggal lahir, umur, jenis kelamin, nomor medical record).' },
                        { text: '2) Tanggal masuk dan tanggal keluar/meninggal' },
                        { text: '3) Ruang perawatan terakhir' },
                        { text: '4) Penanggung pembayaran' },
                        { text: '5) Diagnosis/masalah waktu masuk,' },
                        { text: '6) Ringkasan riwayat penyakit selama perawatan' },
                        { text: '7) Pemeriksaan fisik yang mendukung diagnosis' },
                        { text: 'Pemeriksaan penunjang/diagnostik terpenting' },
                        { text: '9) Terapi/pengobatan selama di rumah sakit' },
                        { text: '10) Hasil konsultasi selama perawatan' },
                        { text: '11) Diagnosis utama/sekunder (ICD 10)' },
                        { text: '12) Tindakan sekunder (ICD 9 )' },
                        { text: '13) Catatan alergi (reaksi obat)' },
                        { text: '14) lasil laboratorium yang belum selesai (pending)' },
                        { text: '15) Diet' },
                        { text: '16) Instruksi/anjuran dan edukasi (follow up) selama lepas perawatan' },
                        { text: '17) Kondisi waktu keluar ( sembuh, pindah RS, pulang atas permintaan sendiri, meninggal)' },
                        { text: '18) Rencana tindak lanjut pengobatan (poliklinik, RS lain, puskesmas, dokter luar)' },
                        { text: '19) Terapi (obat) pulang' },
                        { text: '20) Tanda tangan dan nama lengkap DPJP.' }
                    ]
                },
                { desc: 'Isi form resume medis secara carbonise (Lembar NCR 3 warna)',
                    detail: [
                        { text: '1) Warna putih untuk arsip rekam medis' },
                        { text: '2 ) Biru untuk diserahkan kepada pasien' },
                        { text: '3) Kuning untuk penjamin pelayanan kesehatan (bila diperlukan)' },
                        { text: '4) Merah untuk faskes/FKTP' }
                    ]
                },
                { desc: 'Serahkan ringkasan pasien pulang kepada pasien yang warna biru dan jelaskan resume tersebut harus dibawa pada saat kontrol pasca rawat ke rumah sakit' }
            ]
        }
    ],

    dokumenTerkait: [
        'Status Pasien'
    ],

    instalasiTerkait: [
        'Pelayanan Medis',
        'Bidang Keperawatan',
        'Instalasi Rawat Inap',
        'Instalasi Intensif'
    ]
    },
    {
    id: 631,
    title: 'Komunikasi Efektif Pada Kegiatan Pre dan Post Conference',
    category: 'manajemen',
    subCategory: 'komunikasi',
    description: 'Prosedur komunikasi efektif pada kegiatan pre dan post conference dalam pelayanan keperawatan.',
    icon: 'fa-people-arrows',
    tags: [
        'Komunikasi Efektif',
        'Pre Conference',
        'Post Conference',
        'Operan',
        'Keperawatan',
        'Handover'
    ],

    noDokumen: '45/SPO .5902 /UHP',
    tanggalTerbit: '19 Februari 2019',

    pengertian: `Konferensi merupakan pertemuan tim yang dilakukan setiap hari. Konferensi dilakukan sebelum atau setelah melakukan operan dinas, sore atau malam sesuai dengan jadwal dinas perawatan pelaksanaan. konference sebaiknya dilakukan di tempat tersendiri sehingga dapat mengurangi gangguan dari luar. Konferensi terdiri dari pre conference dan post conference`,

    tujuan: `Sebagai Acuan Penekanan Langkah langkah melaksanakan komunikasi yang efektif saat Pre dan Post Conference untuk untuk menganalisa masalah-masalah secara kritis dan menjabarkan alternatif penyelesaian masalah, mendapatkan gambaran berbagai situasi lapangan yang dapat menjadi masukan untuk menyusun rencana antisipasi sehingga dapat meningkatkan kesiapan diri dalam pemberian asuhan keperawatan dan merupakan cara yang efektif untuk menghasilkan perubahan non kognitif, juga membantu koordinasi dalam rencana pemberian asuhan keperawatan sehingga tidak terjadi pengulangan asuhan, kebingungan dan frustasi bagi pemberi asuhan.`,

    kebijakan: [
        { text: '1. Surat Keputusan No : 445 / Kep.4822.RS Ihsan / 2019 tentang kebijakan peningkatan mutu dan keselamatan pasien di lingkungan rumah sakit umum daerah Al Ihsan' },
        { text: '2. Surat Keputusan NNo : 445 / Kep.2492-RS Ihsan / 2019 tentang Panduan Komunikasi efektif di rumah sakit umum daerah Al Ihsan' }
    ],

    prosedur: [
        {
            step: 'Persiapan',
            items: [
                { desc: 'Status Rekam Medik Pasien' },
                { desc: 'Semua perawat duduk bareng dan saling berhadapan antara shift malam/pagi dan shift pagi/siang' }
            ]
        },

        {
            step: 'Pelaksanaan Pre Conference',
            items: [
                { 
                    desc: 'Buka acara dengan Salam pembuka oleh Perawat Primer/ Ketua Tim',
                    detail: [
                        { text: '"Assalamualaikum Wr. Wb, Selamat Pagi/ Siang"', marker: false }
                    ]
                },
                { 
                    desc: 'Sampaikan jumlah dan kriteria pasien yang dirawat timnya dan memvalidasi pembagian pasien Perawat Primer/Ketua Tim.',
                    detail: [
                        { text: '“Hari ini kita merawat …. pasien, dengan tingkat ketergantungan minimal… orang, moderat … orang dan high care … orang, sudah dibagi sesuai dengan kewenangan masing-masing.' },
                        { text: 'Tanyakan rencana harian masing - masing perawat pelaksanan oleh Perawat Primer/ Ketua Tim "Bagaimana RKH masing-masing PA, apakah sudah disusun sesuai program hari ini, mari saya lihat?”' }
                    ]
                },
                { 
                    desc: 'Berikan masukan dan tindakan lanjut terkait dengan asuhan yang diberikan saat itu oleh Perawat Primer/ Ketua Tim',
                    detail: [
                        { text: '"Mohon jangan sampai ada program atau instruksi yang terlewat, dan senantiasa memperhatikan mutu serta keselamatan pasien"', marker: false }
                    ]
                },
                { 
                    desc: 'Berikan reinforcement oleh Perawat Primer/ Ketua Tim',
                    detail: [
                        { text: '“Terimakasih sudah membuat RKH dengan baik, selamat bekerja, kita berkumpul kembali ½ jam sebelum hand over.”', marker: false }
                    ]
                },
                { 
                    desc: 'Tutup acara Pre conference oleh Perawat Primer/ Ketua Tim',
                    detail: [
                        { text: '“Demikian pre conference ini, selamat bekerja. Wassalamualaikum Wr. Wb."', marker: false}
                    ]
                }
            ]
        },

        {
            step: 'Pelaksanaan Post Conference',
            items: [
                { 
                    desc: 'Buka acara oleh Perawat Primer/ Ketua Tim',
                    detail: [
                        { text: '"Assalamualaikum Wr. Wb, selamat pagi/ siang!"', marker: false }
                    ]
                },
                { 
                    desc: 'Tanyakan kendala dalam asuhan yang telah diberikan oleh Perawat Primer/ Ketua Tim',
                    detail: [
                        { text: '“Bagaimana proses asuhan hari ini, adakah kendala atau masalah yang perlu ditindaklanjuti?”', marker: false }
                    ]
                },
                { 
                    desc: 'Tanyakan tindakan lanjut asuhan klien yang harus dioperkan kepada perawat shift berikutnya oleh Perawat Primer/ Ketua Tim',
                    detail: [
                        { text: '"Bagaimana tindaklanjut yang sudah dilakukan, bagaimana respon pasien/keluarganya?”', marker: false }
                    ]
                },
                { 
                    desc: 'Buat laporan untuk persiapam operan dan menyampaikan kepada setiap PA membuat laporan handover oleh Perawat Primer/Ketua Tim',
                    detail: [
                        { text: '“Baiklah, kita simpulkan bahwa pasien kita terawat dengan baik..' },
                        { text: 'mohon untuk dicek ulang dan buat catatan SBAR dalam form hand over untuk disampaikan kepada tim berikutnya"' }
                    ]
                },
                { 
                    desc: 'Ketua tim atau PP menutup acara',
                    detail: [
                        { text: '"Terimakasih teman-teman, silahkan selesaikan rencana kerjanya dan buat laporan, jam ... segera kumpul kembali untuk operan shif jaga"', marker: false }
                    ]
                }
            ]
        },

        {
            step: 'Dokumentasi',
            desc: 'Dokumentasikan pre dan post conference di RKH Perawat PP maupun PA'
        }
    ],

    dokumenTerkait: [
        'Status Rekam Medik Pasien',
        'RKH Perawat PP maupun PA',
        'Form hand over'
    ],

    instalasiTerkait: [
        'Bidang Keperawatan',
        'Instalasi Rawat Inap',
        'Instalasi Intensif'
    ]
    },





    
];
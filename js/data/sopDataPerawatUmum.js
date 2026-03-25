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
        title: 'Penyediaan Obat dan Alat Kesehatan untuk Pasien Rawat Inap', 
        category: 'umum', 
        description: 'Kegiatan penyediaan obat-obatan dan  alat kesehatan untuk pasien rawat inap.', 
        icon: 'fa-briefcase-medical', 
        tags: ['Obat', 'Alat Kesehatan', 'Rawat Inap'],
        noDokumen: '445/ SPO.3395/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Adalah kegiatan penyediaan obat-obatan dan  alat kesehatan untuk pasien rawat inap.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam penyediaan obat-obatan dan alat kesehatan untuk pasien rawat inap.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional  Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019.',
        prosedur: [
            { step: 'Pasien VIP, kelas I, kelas IIA dan pasien kontraktor',
                items: [
                    {
                        desc: 'A. Resep dibuat oleh dokter yang merawat / dokter ruangan untuk 1 hari',
                        detail: '1) Resep harus dilengkapi dengan nama jelas pasien, no rekam medic, dan ruangan pasien' + '\n' +
                        '2) Resep kontraktor dicap dan dilengkapi dengan nama perusahaannya' + '\n' +
                        '3) Resep obat khusus untuk pasien Askes harus disertai dengan surat pernyataan obat khusus yang ditandatangani oleh dokter yang merawat.' + '\n'
                    },
                    {
                        desc: 'B. Resep diserahkan ke apotek oleh Pekarya Kesehatan Umum (PKU) ruangan'
                    },
                    {
                        desc: 'C. Petugas apotek menyediakan obat-obatan dan alat kesehatan sesuai resep'
                    },
                    {
                        desc: 'D. PKU ruangan mengambil obat-obatan dan alat kesehatan yang telah disiapkan oleh bagian apotek'
                    },
                    {
                        desc: 'E. PKU mengecek kesesuaian obat-obatan dan alat kesehatan dengan faktur pembelian'
                    },
                    {
                        desc: 'F. PKU membawa obat-obatan keruangan, menyerahkan faktur dan obat-obatan / alat kesehatan kepada perawat'
                    },
                    {
                        desc: 'G. Perawat mengecek jumlah dan jenis obat / alkes sesuai order, serta mengecek apakah ada bon obat/alkes yang dipinjam pasien dari ruangan. Faktur diserahkan  kepada petugas administrasi'
                    },
                    {
                        desc: 'H. Perawat menyerahkan obat-obatan / alat kesehatan kepada pasien/keluarga, dan menyimpannya pada tempat obat pasien'
                    },
                    {
                        desc: 'I. Perawat dinas malam mengecek jumlah obat yang tersedia pada kartu obat untuk dilaporkan kepada PP atau shif berikutnya'
                    },
                    {
                        desc: 'J. Perawat (Kepala tim / yang berkolaborasi dengan dokter) pada saat visite memberitahukan jumlah obat/alkes yang dibutuhkan oleh pasien pada hari itu.'
                    }
                ]},
            { step: 'Pasien kelas IIB, kelas III umum dan Askes atau pasien kontraktor tertentu',
                items: [
                    {
                        desc: 'A. Resep dibuat oleh dokter yang merawat / dokter ruangan',
                        detail: '1) Resep harus dilengkapi dengan nama jelas pasien, no rekam medic, dan ruangan pasien' + '\n' +
                                '2) Resep obat khusus untuk pasien Askes harus disertai dengan surat pernyataan obat khusus yang ditandatangani oleh dokter yang merawat' + '\n'
                    },
                    {
                        desc: 'B. Pekarya Kesehatan Umum (PKU) memberikan nomor pada resep sesuai dengan nomor pengambilan obat'
                    },
                    {
                        desc: 'C. PKU menyerahkan resep ke apotek'
                    },
                    {
                        desc: 'D. PKU menyerahkan nomor pengambilan obat kepada keluarga pasien'
                    },
                    {
                        desc: 'E. Petugas apotek menyediakan obat-obatan dan alat kesehatan sesuai resep'
                    },
                    {
                        desc: 'F. Keluarga pasien menyerahkan nomor, melakukan transaksi pembelian dan mengambil obat-obatan / alat kesehatan sesuai resep'
                    },
                    {
                        desc: 'G. Petugas apotek menyerahkan obat-obatan / alat kesehatan kepada keluarga pasien sesuai dengan faktur pembelian'
                    },
                    {
                        desc: 'H. Keluarga pasien membawa obat-obatan / alkes dan menyerahkannya kepada perawat ruangan'
                    },
                    {
                        desc: 'I. Perawat mengecek jumlah dan jenis obat / alkes sesuai order, serta mengecek apakah ada bon obat/alkes yang dipinjam pasien dari ruangan. Untuk faktur bon farmasi pasien ASKES dan pasien kontraktor tertentu diserahkan  kepada petugas administrasi'
                    },
                    {
                        desc: 'J. Perawat menyerahkan obat-obatan / alat kesehatan kepada pasien / keluarga, dan menyimpannya pada tempat obat pasien'
                    },
                    {
                        desc: 'K. Perawat dinas malam mengecek jumlah obat yang tersedia pada kartu obat untuk dilaporkan kepada PP atau shift berikutnya'
                    },
                    {
                        desc: 'L. Perawat (PP / yang berkolaborasi dengan dokter) pada saat visite memberitahukan jumlah obat / alkes yang dibutuhkan oleh pasien pada hari itu'
                    }
                ]
            }
        ],
        dokumenTerkait: ['Rekam Medik Pasien', 'Kartu Obat'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif']
    },
    { 
        id: 402, 
        title: 'Permintaan Diet Harian Ke Instalasi Gizi', 
        category: 'umum', 
        description: 'Kegiatan pelayanan permintaan diet ke bagian gizi.', 
        icon: 'fa-file-medical-alt', 
        tags: ['Diet', 'Gizi', 'Edukasi'],
        noDokumen: '445/ SPO.3397/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Suatu kegiatan pelayanan permintaan diet ke bagian gizi.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam pelaksanaan pelayanan permintaan diet ke bagian gizi untuk memenuhi kebutuhan nutrisi.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional  Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019.',
        prosedur: [
            { step: 'Persiapan', desc: 'Buku daftar permintaan makanan pasien ( DPMP )' },
            { step: 'Pelaksanaan', 
                items: [
                    { desc: 'A. Setiap ruangan perawatan membuat permintaan diet dalam buku DPMP berdasarkan nomor, tanggal, waktu makan, nama pasien, jenis diet, kelas perawatan dan nomor kamar, ditandatangani oleh perawat ruangan' },
                    { desc: 'B. Buku DPMP diambil oleh petugas gizi pada :', 
                        detail: '1) Pagi pukul 06.00 Wib dikembalikan ke ruangan jam 10.00 WIB ( untuk diet makan pagi )' + '\n' +
                        '2) Siang pukul 11.00 Wib dikembalikan ke ruangan jam 12.00 WIB ( untuk diet makan siang )' + '\n' +
                        '3) Sore pukul 12.00 Wib dikembalikan ke ruangan jam 12.30 WIB ( untuk diet makan sore )' },
                    { desc: 'C. Buku DPMP di cek ulang oleh petugas gizi dan ruangan' },
                    { desc: 'D. Makanan didistribusikan ke ruangan oleh petugas gizi' },
                    { desc: 'E. Makanan diserahkan oleh petugas gizi kepasien sesuai permintaan baik jumlah maupun dietnya' },
                    { desc: 'F. Peralatan makan ditarik kembali satu jam setelah makan oleh petugas gizi dan dibawa kembali ke instalasi gizi' }
                ]
            }
        ],
        dokumenTerkait: ['Buku daftar permintaan makanan pasien ( DPMP )'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Gawat Darurat']
    },
    { 
        id: 403, 
        title: 'Permintaan Diet Baru dan Penggantian Diet', 
        category: 'umum', 
        description: 'Kegiatan pelayanan perawatan, permintaan, diet untuk pasien baru dan penggantian diet ke bagian instalasi gizi.', 
        icon: 'fa-file-medical', 
        tags: ['Diet', 'Gizi', 'Edukasi'],
        noDokumen: '445/ SPO.3398/ Bidper',
        tanggalTerbit: '04 Maret 2019',
        pengertian: 'Suatu kegiatan pelayanan perawatan, permintaan, diet untuk pasien baru dan penggantian diet ke bagian instalasi gizi.',
        tujuan: 'Sebagai acuan penerapan langkah-langkah dalam pelaksanaan pelayanan permintaan diet baru dan penggantian diet  untuk memenuhi kebutuhan nutrisi.',
        kebijakan: 'Surat Keputusan Pemberlakuan Standar Prosedur Operasional  Tindakan Keperawatan Rumah Sakit Umum Daerah Al Ihsan No: 445/Kep.2934 – RS. Ihsan/2019.',
        prosedur: [
            { step: 'Perawat ruangan menginformasikan adanya pasien baru, atau adanya perubahan diet melalui telepone ke instalasi Gizi' },
            { step: 'Petugas instalasi Gizi mencatat dan menyiapkan diet sesuai permintaan' },
            { step: 'Petugas Instalasi Gizi mengirimkan makanan sesuai permintaan' },
            { step: 'Makan dibagikan oleh petugas gizi' },
            { step: 'Peralatan makan ditarik kembali satu jam setelah makan dan di kumpulkan di dapur gizi' }
        ],
        dokumenTerkait: ['Buku daftar permintaan makanan pasien ( DPMP )'],
        instalasiTerkait: ['Instalasi Rawat Inap', 'Instalasi Anestesi dan Perawatan Intensif', 'Instalasi Gawat Darurat']
    }
];
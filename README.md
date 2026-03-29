# Bimasakti Digital - Manajemen Keperawatan Digital RSUD Welas Asih

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-production-brightgreen)

**Bimasakti Digital** (Buku Informasi Medis dan Asuhan Keperawatan Terintegrasi) adalah platform digital yang menghadirkan informasi medis, SOP keperawatan, panduan asuhan keperawatan, manajemen tindakan, serta edukasi pasien secara terintegrasi dalam satu sistem.

## ✨ Fitur Utama

### 1. **Sistem Autentikasi**
- Login dengan role-based access (Admin, Perawat, Dokter)
- Session management menggunakan localStorage
- Logout otomatis

### 2. **Dashboard Beranda**
- Statistik ringkas (jumlah SOP, spesialisasi, dll)
- Berita terkini RSUD Welas Asih
- Pengumuman terbaru
- FAQ interaktif
- Marquee informasi prosedur keperawatan

### 3. **Modul SOP Keperawatan**
- **SOP Umum**: Prosedur keperawatan dasar yang berlaku di semua area
- **SOP Manajemen**: Prosedur administratif dan manajerial
- **SOP Tindakan**: Prosedur spesifik berdasarkan kategori (Farmasi, ICU, IGD, dll)

### 4. **Fitur Pencarian**
- Pencarian real-time pada setiap modul SOP
- Filter berdasarkan kategori pada modul tindakan
- Highlight hasil pencarian

### 5. **Modal Detail SOP**
- Tampilan lengkap SOP dengan struktur:
  - Pengertian
  - Tujuan
  - Ruang Lingkup
  - Kebijakan
  - Prosedur (step-by-step dengan visual alur)
  - Dokumen terkait
  - Instalasi terkait

### 6. **Responsive Design**
- Tampilan optimal di desktop, tablet, dan mobile
- Burger menu untuk navigasi mobile
- Touch-friendly interface

## 🛠 Teknologi yang Digunakan

| Teknologi | Versi | Keterangan |
|-----------|-------|-------------|
| HTML5 | - | Struktur aplikasi |
| CSS3 | - | Styling dan animasi |
| JavaScript | ES6+ | Logika aplikasi |
| Font Awesome | 6.0 | Ikon-ikon |
| Google Fonts | Plus Jakarta Sans | Tipografi |
| AOS | 2.3.1 | Scroll animations |

## 📁 Struktur Proyek
```bash
KEPERAWATAN-APPS/
│
├── 📁 assets/                      # Aset gambar dan logo
│   ├── 🖼️ logo-apps-title.png
│   ├── 🖼️ logo-apps.png
│   ├── 🖼️ logo-ppn.png
│   ├── 🖼️ logo-upi-full.png
│   ├── 🖼️ logo-upi-icon.svg
│   ├── 🖼️ logo-welas-asih-full.png
│   └── 🖼️ logo-welas-asih-icon.png
│
├── 📁 js/                          # JavaScript files
│   │
│   ├── 📁 data/                    # Data sources
│   │   ├── 📄 announcementsData.js     # Data pengumuman
│   │   ├── 📄 categoryData.js          # Data kategori tindakan
│   │   ├── 📄 newsData.js              # Data berita
│   │   ├── 📄 sopDataPerawatUmum.js    # SOP Umum
│   │   ├── 📄 sopDataPerawatManajemen.js # SOP Manajemen
│   │   └── 📄 sopDataPerawatTindakan.js  # SOP Tindakan
│   │
│   ├── 📁 pages/                   # Page handlers
│   │   ├── 📄 perawatUmum.js           # Handler SOP Umum
│   │   ├── 📄 perawatManajemen.js      # Handler SOP Manajemen
│   │   └── 📄 perawatTindakan.js       # Handler SOP Tindakan
│   │
│   ├── 📄 app.js                   # Aplikasi utama
│   └── 📄 auth.js                  # Modul autentikasi
│
├── 📄 index.html                   # Halaman utama
├── 🎨 styles.css                   # Styling utama
├── 🔧 CNAME                        # Custom domain (jika ada)
└── 📝 README.md                    # Dokumentasi


## 🚀 Instalasi

### Prasyarat
- Web browser modern (Chrome, Firefox, Edge, Safari)
- Web server (opsional, dapat dijalankan langsung)

### Langkah Instalasi

1. **Clone repository**
```bash
git clone https://github.com/AriaRahman1122/keperawatan-apps.git
cd bimasakti-digital

2. **Jalankan aplikasi**

Option A: Buka file index.html langsung di browser
Option B: Gunakan live server (disarankan)
# Jika menggunakan VS Code, install extension "Live Server"
# Klik kanan index.html → Open with Live Server

# Atau menggunakan Python
python -m http.server 8000
# Buka http://localhost:8000

💻 Penggunaan
Login ke Aplikasi
a. Buka aplikasi di browser
b. Masukkan username dan password (lihat Akun Demo)
c. Klik tombol "Login"

Navigasi
- Beranda: Halaman utama dengan ringkasan informasi
- Umum: Lihat dan cari SOP Keperawatan Umum
- Manajemen: Lihat dan cari SOP Manajemen Keperawatan
- Tindakan:
a. Pilih kategori tindakan
b. Lihat SOP berdasarkan kategori
c. Cari SOP dalam kategori

Membaca SOP
1. Klik pada card SOP yang diinginkan
2. Modal akan muncul dengan detail lengkap SOP
3. Scroll untuk membaca seluruh konten
4. Klik tombol X atau area luar modal untuk menutup

Mencari SOP
1. Gunakan kotak pencarian di setiap halaman
2. Pencarian akan memfilter SOP secara real-time
3. Pencarian berdasarkan judul dan deskripsi

👥 Akun Demo
| Role          | Username | Password   |
| ------------- | -------- | ---------- |
| Administrator | admin    | admin123   |
| Perawat       | perawat  | perawat123 |
| Dokter        | dokter   | dokter123  |


👨‍💻 Kontributor
| Nama                 | Peran                                | Kontak                |
| -------------------- | ------------------------------------ | --------------------- |
| Aria Rahman          | UI/UX, System Analyst, Fullstack Dev | GitHub: AriRahman1122 |
| Siddiq Ahmad Anshori | Fullstack Developer                  | GitHub: siddiqanshori |

Institusi:
RSUD Welas Asih Provinsi Jawa Barat
Universitas Pendidikan Indonesia (UPI)

📝 Lisensi
Copyright © 2026 RSUD WELAS ASIH Provinsi Jawa Barat & Universitas Pendidikan Indonesia

All Rights Reserved.

📞 Kontak & Dukungan
| Jenis   | Kontak                                                            |
| ------- | ----------------------------------------------------------------- |
| Alamat  | Jl. Kiastramanggala, Baleendah, Kab. Bandung                      |
| Telepon | (022) 5940872                                                     |
| Email   | [rsudalihsan@jabarprov.go.id](mailto:rsudalihsan@jabarprov.go.id) |


🔄 Changelog
v1.0.0 (2026)
Initial release


🙏 Ucapan Terima Kasih

Terima kasih kepada:

RSUD Welas Asih
Universitas Pendidikan Indonesia
Tim Pengembang
Seluruh staf keperawatan

<div align="center"> <sub>Built with ❤️ for better healthcare</sub> <br> <sub>© 2026 Bimasakti Digital | RSUD Welas Asih & UPI</sub> </div> ```

markdown
🔗 **Live Demo**: [https://bimasakti-digital.site](https://bimasakti-digital.site)

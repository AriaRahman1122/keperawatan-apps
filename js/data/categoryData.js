// Data kategori untuk Tindakan Keperawatan
const tindakanCategories = [
    { id: 'onkologi', name: 'Onkologi', icon: 'fa-capsules', desc: 'Prosedur keperawatan onkologi', sopIds: [1, 7, 13] },
    { id: 'bedah', name: 'Bedah', icon: 'fa-mask-face', desc: 'Tindakan keperawatan bedah', sopIds: [3, 8, 16] },
    { id: 'darurat', name: 'Gawat Darurat', icon: 'fa-heartbeat', desc: 'Prosedur kegawatdaruratan', sopIds: [4, 11, 5] },
    { id: 'anak', name: 'Pediatri', icon: 'fa-child', desc: 'Keperawatan anak', sopIds: [9, 14] },
    { id: 'icu', name: 'ICU', icon: 'fa-lungs', desc: 'Perawatan intensif', sopIds: [4, 11, 5] },
    { id: 'luka', name: 'Perawatan Luka', icon: 'fa-hand-holding-medical', desc: 'Manajemen luka', sopIds: [8, 17] },
    { id: 'infus', name: 'Terapi Infus', icon: 'fa-tint', desc: 'Pemasangan dan perawatan infus', sopIds: [7, 10] },
    { id: 'eliminasi', name: 'Eliminasi', icon: 'fa-toilet', desc: 'Perawatan eliminasi urine dan feses', sopIds: [10, 12] },
    { id: 'oksigenasi', name: 'Oksigenasi', icon: 'fa-lungs', desc: 'Terapi oksigen dan suction', sopIds: [11, 4] },
    { id: 'medikasi', name: 'Pemberian Obat', icon: 'fa-pills', desc: 'Prinsip pemberian obat', sopIds: [9, 5] },
    { id: 'pradiologi', name: 'Persiapan Radiologi', icon: 'fa-x-ray', desc: 'Persiapan pasien radiologi', sopIds: [2, 14] },
    { id: 'endoskopi', name: 'Endoskopi', icon: 'fa-camera', desc: 'Persiapan dan perawatan endoskopi', sopIds: [6, 14] }
];
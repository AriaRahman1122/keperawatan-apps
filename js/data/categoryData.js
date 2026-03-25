/*

    Data Category Tindakan
    Author: Aria Rahman, Siddiq Ahmad Anshori
    Title: categoryData
    Description: Data category pada perawat jenis Tindakan untuk Aplikasi Manajemen Keperawatan

**/

const tindakanCategories = [
    { id: 'farmasi', name: 'Farmasi', icon: 'fa-capsules', desc: 'Prosedur pengelolaan dan pemberian obat-obatan', sopIds: Array.from({ length: 100 }, (_, i) => 1001 + i) },
    { id: 'onkologi', name: 'Onkologi', icon: 'fa-dna', desc: 'Prosedur keperawatan untuk pasien dengan kanker dan gangguan onkologi', sopIds: Array.from({ length: 100 }, (_, i) => 1101 + i) },
    { id: 'maternitas', name: 'Maternitas', icon: 'fa-baby-carriage', desc: 'Prosedur keperawatan ibu hamil, bersalin, nifas, dan bayi baru lahir', sopIds: Array.from({ length: 100 }, (_, i) => 1201 + i) },
    { id: 'medikalBedah', name: 'Medikal Bedah', icon: 'fa-procedures', desc: 'Prosedur keperawatan untuk pasien dengan gangguan medis dan pasca operasi bedah', sopIds: Array.from({ length: 100 }, (_, i) => 1301 + i) },
    { id: 'keperawatanDasar', name: 'Keperawatan Dasar', icon: 'fa-hand-holding-heart', desc: 'Prosedur dasar keperawatan seperti pemasangan infus, perawatan luka, dan mobilisasi', sopIds: Array.from({ length: 100 }, (_, i) => 1401 + i) },
    { id: 'pediatric', name: 'Pediatric', icon: 'fa-child', desc: 'Prosedur keperawatan untuk anak dan bayi', sopIds: Array.from({ length: 100 }, (_, i) => 1501 + i) }
];
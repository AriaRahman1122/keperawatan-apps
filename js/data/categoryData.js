/*

    Data Category Tindakan
    Author: Aria Rahman, Siddiq Ahmad Anshori
    Title: categoryData
    Description: Data category pada perawat jenis Tindakan untuk Aplikasi Manajemen Keperawatan

**/

const tindakanCategories = [
    { id: 'onkologi', name: 'Onkologi', icon: 'fa-capsules', desc: 'Prosedur keperawatan onkologi', sopIds: [1001] },
    { id: 'bedah', name: 'Bedah', icon: 'fa-scalpel', desc: 'Tindakan keperawatan bedah', sopIds: [1002] },
    { id: 'darurat', name: 'Gawat Darurat', icon: 'fa-heartbeat', desc: 'Prosedur kegawatdaruratan', sopIds: [1003] },
    { id: 'anak', name: 'Pediatri', icon: 'fa-child', desc: 'Keperawatan anak', sopIds: [1004] },
    { id: 'icu', name: 'ICU', icon: 'fa-lungs', desc: 'Perawatan intensif', sopIds: [1005] }
];
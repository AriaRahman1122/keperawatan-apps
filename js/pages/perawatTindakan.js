/*
    Handle Data Tindakan Keperawatan Dengan UI
    Author: Aria Rahman, Siddiq Ahmad Anshori
    Title: perawatTindakan
    Description: Class untuk handle data tindakan keperawatan dengan UI
*/

let currentCategorySOPs = [];
let currentCategoryName = '';

function renderTindakanCategories() {
    const container = document.getElementById('categoryGrid');
    if (!container) return;
    
    // Ambil nilai search dari input pencarian kategori
    const searchTerm = document.getElementById('categorySearch')?.value.toLowerCase() || '';
    
    // Filter kategori berdasarkan search term
    const filteredCategories = tindakanCategories.filter(cat => 
        cat.name.toLowerCase().includes(searchTerm) || 
        cat.desc.toLowerCase().includes(searchTerm)
    );
    
    container.innerHTML = '';
    
    if (filteredCategories.length === 0) {
        container.innerHTML = `
            <div class="no-data" style="grid-column: 1/-1; text-align: center; padding: 40px;">
                <i class="fas fa-folder-open" style="font-size: 48px; color: var(--text-light);"></i>
                <p>Tidak ada kategori ditemukan</p>
            </div>
        `;
        return;
    }
    
    filteredCategories.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `
            <i class="fas ${cat.icon}"></i>
            <h4>${cat.name}</h4>
            <p>${cat.desc}</p>
        `;
        card.addEventListener('click', () => showSOPByCategory(cat));
        container.appendChild(card);
    });
}

function showSOPByCategory(category) {
    // Sembunyikan container kategori
    document.getElementById('categoryContainer').style.display = 'none';
    
    // Tampilkan container SOP
    const sopContainer = document.getElementById('sopByCategoryContainer');
    sopContainer.style.display = 'block';
    
    // Ambil SOP berdasarkan sopIds dari kategori
    const sopIds = category.sopIds;
    const sopList = sopDataPerawatTindakan.filter(sop => sopIds.includes(sop.id));
    
    // Simpan ke state global untuk keperluan search dalam kategori
    currentCategorySOPs = sopList;
    currentCategoryName = category.name;
    
    // Update header kategori
    const categoryHeader = document.querySelector('#sopByCategoryContainer .category-header');
    if (categoryHeader) {
        categoryHeader.innerHTML = `
            <i class="fas ${category.icon}"></i>
            <span>${category.name}</span>
            <small>(${sopList.length} SOP)</small>
        `;
    } else {
        // Buat header jika belum ada
        const header = document.createElement('div');
        header.className = 'category-header';
        header.innerHTML = `
            <i class="fas ${category.icon}"></i>
            <span>${category.name}</span>
            <small>(${sopList.length} SOP)</small>
        `;
        sopContainer.insertBefore(header, sopContainer.firstChild);
    }
    
    // Reset search input dalam kategori
    const categorySearchInput = document.getElementById('categorySearchInput');
    if (categorySearchInput) categorySearchInput.value = '';
    
    // Render SOP
    renderSOPGrid(sopList, 'tindakanSopGrid');
}

function renderSOPGrid(sopList, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (sopList.length === 0) {
        grid.innerHTML = `
            <div class="no-data" style="grid-column: 1/-1; text-align: center; padding: 40px;">
                <i class="fas fa-search" style="font-size: 48px; color: var(--text-light);"></i>
                <p>Tidak ada SOP ditemukan dalam kategori ini</p>
            </div>
        `;
        return;
    }
    
    sopList.forEach(sop => {
        const card = document.createElement('div');
        card.className = 'sop-card';
        card.innerHTML = `
            <div class="sop-icon"><i class="fas ${sop.icon}"></i></div>
            <h3>${sop.title}</h3>
            <p>${sop.description}</p>
            <div class="sop-tags">
                ${sop.tags.map(t => `<span class="sop-tag">${t}</span>`).join('')}
            </div>
        `;
        card.addEventListener('click', () => openModal(sop));
        grid.appendChild(card);
    });
}

function initTindakanSearches() {
    // Search kategori tindakan
    const categorySearch = document.getElementById('categorySearch');
    if (categorySearch) {
        categorySearch.addEventListener('input', function(e) {
            // Hanya jalankan jika container kategori sedang ditampilkan
            const categoryContainer = document.getElementById('categoryContainer');
            if (categoryContainer && categoryContainer.style.display !== 'none') {
                renderTindakanCategories();
            }
        });
    }
    
    // Search dalam kategori
    const categoryDetailSearch = document.getElementById('categorySearchInput');
    if (categoryDetailSearch) {
        categoryDetailSearch.addEventListener('input', function(e) {
            const keyword = e.target.value.toLowerCase();
            // Hanya jalankan jika ada SOP yang sedang ditampilkan
            if (currentCategorySOPs && currentCategorySOPs.length > 0) {
                const filtered = currentCategorySOPs.filter(sop => 
                    sop.title.toLowerCase().includes(keyword) || 
                    sop.description.toLowerCase().includes(keyword) ||
                    (sop.tags && sop.tags.some(tag => tag.toLowerCase().includes(keyword)))
                );
                renderSOPGrid(filtered, 'tindakanSopGrid');
            }
        });
    }
    
    // Back to categories
    const backBtn = document.getElementById('backToCategories');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            // Reset state
            currentCategorySOPs = [];
            currentCategoryName = '';
            
            // Reset search input dalam kategori
            const categorySearchInput = document.getElementById('categorySearchInput');
            if (categorySearchInput) categorySearchInput.value = '';
            
            // Reset search input kategori utama
            const categorySearch = document.getElementById('categorySearch');
            if (categorySearch) categorySearch.value = '';
            
            // Tampilkan container kategori, sembunyikan container SOP
            document.getElementById('categoryContainer').style.display = 'block';
            document.getElementById('sopByCategoryContainer').style.display = 'none';
            
            // Render ulang kategori
            renderTindakanCategories();
        });
    }
}

// Inisialisasi halaman Tindakan
function initTindakanPage() {
    renderTindakanCategories();
    initTindakanSearches();
}

// Jalankan inisialisasi saat DOM siap
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('categoryGrid')) {
        initTindakanPage();
    }
});
/*

    Handle Data Perawat Dengan UI
    Author: Aria Rahman, Siddiq Ahmad Anshori
    Title: perawat
    Description: Class untuk handle data perawat dengan UI untuk Aplikasi Manajemen Keperawatan
    Note: Terdapat 3 tab: Perawat Umum, Perawat Tindakan, dan Perawat Manajemen

**/

let currentCategorySOPs = [];
let currentCategoryName = '';

function initPerawatTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            // Update active class on buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update active class on contents
            tabContents.forEach(content => content.classList.remove('active'));
            document.getElementById(`tab-${tabId}`).classList.add('active');
            
            // Reset kategori jika beralih ke tab tindakan
            if (tabId === 'tindakan') {
                // Reset state
                currentCategorySOPs = [];
                currentCategoryName = '';
                
                // Reset search inputs
                const categorySearch = document.getElementById('categorySearch');
                const categorySearchInput = document.getElementById('categorySearchInput');
                if (categorySearch) categorySearch.value = '';
                if (categorySearchInput) categorySearchInput.value = '';
                
                // Tampilkan kategori, sembunyikan container SOP
                document.getElementById('categoryContainer').style.display = 'block';
                document.getElementById('sopByCategoryContainer').style.display = 'none';
                
                // Render ulang kategori
                renderTindakanCategories();
            }
        });
    });
}

function renderPerawatUmum() {
    const umumGrid = document.getElementById('umumGrid');
    if (!umumGrid) return;
    
    umumGrid.innerHTML = '';
    
    sopDataPerawatUmum.forEach(sop => {
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
        umumGrid.appendChild(card);
    });
}

function renderPerawatManajemen() {
    const manajemenGrid = document.getElementById('manajemenGrid');
    if (!manajemenGrid) return;
    
    manajemenGrid.innerHTML = '';
    
    sopDataPerawatManajemen.forEach(sop => {
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
        manajemenGrid.appendChild(card);
    });
}

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
                <p>Tidak ada SOP ditemukan</p>
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

function initPerawatSearches() {
    // Search untuk tab Umum
    const searchUmum = document.getElementById('searchUmum');
    if (searchUmum) {
        searchUmum.addEventListener('input', function(e) {
            const keyword = e.target.value.toLowerCase();
            const grid = document.getElementById('umumGrid');
            if (!grid) return;
            
            Array.from(grid.children).forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const desc = card.querySelector('p').textContent.toLowerCase();
                card.style.display = (title.includes(keyword) || desc.includes(keyword)) ? 'block' : 'none';
            });
        });
    }
    
    // Search untuk tab Manajemen
    const searchManajemen = document.getElementById('searchManajemen');
    if (searchManajemen) {
        searchManajemen.addEventListener('input', function(e) {
            const keyword = e.target.value.toLowerCase();
            const grid = document.getElementById('manajemenGrid');
            if (!grid) return;
            
            Array.from(grid.children).forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const desc = card.querySelector('p').textContent.toLowerCase();
                card.style.display = (title.includes(keyword) || desc.includes(keyword)) ? 'block' : 'none';
            });
        });
    }
    
    // Search kategori tindakan (HANYA untuk halaman kategori, bukan detail)
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
    
    // Search dalam kategori (HANYA untuk halaman detail kategori)
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
    
    // Back to categories - Kembali ke halaman kategori
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

// Inisialisasi halaman perawat
function initPerawatPage() {
    initPerawatTabs();
    renderPerawatUmum();
    renderPerawatManajemen();
    renderTindakanCategories();
    initPerawatSearches();
}

// Jalankan inisialisasi saat DOM siap
document.addEventListener('DOMContentLoaded', function() {
    initPerawatPage();
});
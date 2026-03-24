/*

    Handle Data Perawat Dengan UI
    Author: Aria Rahman, Siddiq Ahmad Anshori
    Title: perawat
    Description: Class untuk handle data perawat dengan UI untuk Aplikasi Manajemen Keperawatan
    Note: Terdapat 3 tab: Perawat Umum, Perawat Tindakan, dan Perawat Manajemen

**/

let currentCategorySOPs = [];

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
                document.getElementById('categoryContainer').style.display = 'block';
                document.getElementById('sopByCategoryContainer').style.display = 'none';
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
    
    container.innerHTML = '';
    tindakanCategories.forEach(cat => {
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
    document.getElementById('categoryContainer').style.display = 'none';
    document.getElementById('sopByCategoryContainer').style.display = 'block';
    
    const sopIds = category.sopIds;
    const sopList = sopDataPerawatTindakan.filter(sop => sopIds.includes(sop.id));
    renderSOPGrid(sopList, 'tindakanSopGrid');

    currentCategorySOPs = sopList;
    document.getElementById('categorySearchInput').value = '';
}

function renderSOPGrid(sopList, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    
    grid.innerHTML = '';
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
    
    // Search kategori tindakan
    const categorySearch = document.getElementById('categorySearch');
    if (categorySearch) {
        categorySearch.addEventListener('input', function(e) {
            const keyword = e.target.value.toLowerCase();
            const categories = document.querySelectorAll('.category-card');
            categories.forEach(card => {
                const name = card.querySelector('h4').textContent.toLowerCase();
                const desc = card.querySelector('p').textContent.toLowerCase();
                card.style.display = (name.includes(keyword) || desc.includes(keyword)) ? 'block' : 'none';
            });
        });
    }
    
    // Search dalam kategori
    const categoryDetailSearch = document.getElementById('categorySearchInput');
    if (categoryDetailSearch) {
        categoryDetailSearch.addEventListener('input', function(e) {
            const keyword = e.target.value.toLowerCase();
            if (!currentCategorySOPs) return;
            const filtered = currentCategorySOPs.filter(sop => 
                sop.title.toLowerCase().includes(keyword) || sop.description.toLowerCase().includes(keyword)
            );
            renderSOPGrid(filtered, 'tindakanSopGrid');
        });
    }
    
    // Back to categories
    const backBtn = document.getElementById('backToCategories');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            document.getElementById('categoryContainer').style.display = 'block';
            document.getElementById('sopByCategoryContainer').style.display = 'none';
            currentCategorySOPs = [];
            const categorySearchInput = document.getElementById('categorySearch');
            if (categorySearchInput) categorySearchInput.value = '';
        });
    }
}
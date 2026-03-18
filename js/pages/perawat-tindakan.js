// Halaman Perawat - Tindakan Keperawatan
let currentCategorySOPs = [];

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
    const sopList = sopData.filter(sop => sopIds.includes(sop.id));
    renderSOPGrid(sopList, 'tindakanSopGrid');

    currentCategorySOPs = sopList;
    document.getElementById('categorySearchInput').value = '';
}

function renderSOPGrid(sopList, gridId) {
    const grid = document.getElementById(gridId);
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

// Search kategori
function initCategorySearch() {
    const categorySearch = document.getElementById('categorySearch');
    if (!categorySearch) return;
    
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
function initCategoryDetailSearch() {
    const categoryDetailSearch = document.getElementById('categorySearchInput');
    if (!categoryDetailSearch) return;
    
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
function initBackToCategories() {
    const backBtn = document.getElementById('backToCategories');
    if (!backBtn) return;
    
    backBtn.addEventListener('click', function() {
        document.getElementById('categoryContainer').style.display = 'block';
        document.getElementById('sopByCategoryContainer').style.display = 'none';
        currentCategorySOPs = [];
        document.getElementById('categorySearch').value = '';
    });
}
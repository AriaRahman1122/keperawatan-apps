// Halaman Perawat - Manajemen Keperawatan
function renderPerawatManajemenPage() {
    const manajemenGrid = document.getElementById('manajemenGrid');
    if (!manajemenGrid) return;
    
    manajemenGrid.innerHTML = '';
    const manajemenSOP = sopData.filter(sop => sop.category === 'manajemen');
    
    manajemenSOP.forEach(sop => {
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

// Search untuk manajemen
function initPerawatManajemenSearch() {
    const searchInput = document.querySelector('.sub-search-input[data-sub="manajemen"]');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
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
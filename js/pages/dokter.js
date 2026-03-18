// Halaman Dokter
function renderDokterPage() {
    const dokterGrid = document.getElementById('dokterGrid');
    if (!dokterGrid) return;
    
    dokterGrid.innerHTML = '';
    const dokterSOP = sopData.filter(sop => sop.category === 'dokter');
    
    dokterSOP.forEach(sop => {
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
        dokterGrid.appendChild(card);
    });
}

// Search untuk halaman dokter
function initDokterSearch() {
    const searchInput = document.querySelector('.page-search-input[data-page="dokter"]');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
        const keyword = e.target.value.toLowerCase();
        const grid = document.getElementById('dokterGrid');
        if (!grid) return;
        
        Array.from(grid.children).forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const desc = card.querySelector('p').textContent.toLowerCase();
            card.style.display = (title.includes(keyword) || desc.includes(keyword)) ? 'block' : 'none';
        });
    });
}
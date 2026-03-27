/*
    Handle Data Manajemen Keperawatan Dengan UI
    Author: Aria Rahman, Siddiq Ahmad Anshori
    Title: perawatManajemen
    Description: Class untuk handle data manajemen keperawatan dengan UI
*/

function renderManajemenPage() {
    const manajemenGrid = document.getElementById('manajemenGrid');
    if (!manajemenGrid) return;
    
    manajemenGrid.innerHTML = '';
    
    if (!sopDataPerawatManajemen || sopDataPerawatManajemen.length === 0) {
        manajemenGrid.innerHTML = `
            <div class="no-data" style="grid-column: 1/-1; text-align: center; padding: 40px;">
                <i class="fas fa-folder-open" style="font-size: 48px; color: var(--text-light);"></i>
                <p>Belum ada data SOP Manajemen Keperawatan</p>
            </div>
        `;
        return;
    }
    
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

function initManajemenSearch() {
    const searchInput = document.getElementById('searchManajemenPage');
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

// Inisialisasi halaman Manajemen
function initManajemenPage() {
    renderManajemenPage();
    initManajemenSearch();
}

// Jalankan inisialisasi saat DOM siap
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('manajemenGrid')) {
        initManajemenPage();
    }
});
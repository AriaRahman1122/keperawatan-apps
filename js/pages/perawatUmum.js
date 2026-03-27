/*
    Handle Data Umum Dengan UI
    Author: Aria Rahman, Siddiq Ahmad Anshori
    Title: perawatUmum
    Description: Class untuk handle data umum keperawatan dengan UI
*/

function renderUmumPage() {
    const umumGrid = document.getElementById('umumGrid');
    if (!umumGrid) return;
    
    umumGrid.innerHTML = '';
    
    if (!sopDataPerawatUmum || sopDataPerawatUmum.length === 0) {
        umumGrid.innerHTML = `
            <div class="no-data" style="grid-column: 1/-1; text-align: center; padding: 40px;">
                <i class="fas fa-folder-open" style="font-size: 48px; color: var(--text-light);"></i>
                <p>Belum ada data SOP Umum</p>
            </div>
        `;
        return;
    }
    
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

function initUmumSearch() {
    const searchInput = document.getElementById('searchUmumPage');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
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

// Inisialisasi halaman Umum
function initUmumPage() {
    renderUmumPage();
    initUmumSearch();
}

// Jalankan inisialisasi saat DOM siap
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('umumGrid')) {
        initUmumPage();
    }
});
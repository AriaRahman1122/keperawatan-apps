/*

    Handle Data Dokter Dengan UI
    Author: Aria Rahman, Siddiq Ahmad Anshori
    Title: dokter
    Description: Class untuk handle data dokter dengan UI untuk Aplikasi Manajemen Keperawatan

**/

function renderDokterPage() {
    const dokterGrid = document.getElementById('dokterGrid');
    if (!dokterGrid) return;
    
    dokterGrid.innerHTML = '';

    if (!Array.isArray(sopDataDokter) || sopDataDokter.length === 0) {
        dokterGrid.innerHTML = `
            <div class="sop-empty-state" data-aos="fade-up">
                <div class="sop-empty-icon"><i class="fas fa-folder-open"></i></div>
                <h3>Belum Ada Data SOP Dokter</h3>
                <p>Data SOP dokter masih dalam proses validasi dan akan ditampilkan setelah siap.</p>
            </div>
        `;
        return;
    }
    
    sopDataDokter.forEach(sop => {
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

function initDokterSearch() {
    const searchInput = document.querySelector('.page-search-input[data-page="dokter"]');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
        const keyword = e.target.value.toLowerCase();
        const grid = document.getElementById('dokterGrid');
        if (!grid) return;
        
        Array.from(grid.querySelectorAll('.sop-card')).forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const desc = card.querySelector('p').textContent.toLowerCase();
            card.style.display = (title.includes(keyword) || desc.includes(keyword)) ? 'block' : 'none';
        });
    });
}
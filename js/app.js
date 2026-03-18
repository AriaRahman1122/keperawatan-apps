// Inisialisasi AOS
AOS.init({ duration: 800 });

// Modal global
const modal = document.getElementById('sopModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

// Fungsi untuk membuka modal dengan detail SOP
function openModal(sop) {
    modalTitle.textContent = sop.title;
    
    let prosedurHTML = '';
    if (sop.prosedur) {
        prosedurHTML = '<div class="prosedur-visual">' + 
            sop.prosedur.map((p, index) => `
                <div class="prosedur-step">
                    <div class="step-number">${index + 1}</div>
                    <div class="step-content">
                        <div class="step-title">${p.step}</div>
                        <div class="step-desc">${p.desc}</div>
                        ${p.detail ? `<small style="color: #7a94b5; display: block; margin-top: 5px;">${p.detail}</small>` : ''}
                    </div>
                    <div class="step-arrow"><i class="fas fa-arrow-down"></i></div>
                </div>
            `).join('') + 
            '</div>';
    } else {
        prosedurHTML = '<p>Tidak ada data prosedur</p>';
    }

    let html = `
        <div class="sop-meta-grid">
            <div class="meta-item">
                <span class="meta-label">No. Dokumen</span>
                <span class="meta-value">${sop.noDokumen || 'SOP/XXX/001/2025'}</span>
            </div>
            <div class="meta-item">
                <span class="meta-label">Tanggal Terbit</span>
                <span class="meta-value">${sop.tanggalTerbit || '1 Januari 2025'}</span>
            </div>
        </div>

        <div class="sop-detail-section">
            <div class="sop-detail-title"><i class="fas fa-info-circle"></i> Pengertian</div>
            <p>${sop.pengertian || sop.fullDesc || 'Tidak ada data'}</p>
        </div>

        <div class="sop-detail-section">
            <div class="sop-detail-title"><i class="fas fa-bullseye"></i> Tujuan</div>
            <p>${sop.tujuan || 'Standar operasional prosedur ini bertujuan untuk memberikan panduan yang jelas dan seragam.'}</p>
        </div>

        <div class="sop-detail-section">
            <div class="sop-detail-title"><i class="fas fa-gavel"></i> Kebijakan</div>
            <p>${sop.kebijakan || 'Berdasarkan standar pelayanan rumah sakit dan peraturan yang berlaku.'}</p>
        </div>

        <div class="sop-detail-section">
            <div class="sop-detail-title"><i class="fas fa-list-ol"></i> Prosedur</div>
            ${prosedurHTML}
        </div>

        <div class="sop-detail-section">
            <div class="sop-detail-title"><i class="fas fa-file-alt"></i> Dokumen Terkait</div>
            <div class="related-items">
                ${sop.dokumenTerkait ? sop.dokumenTerkait.map(d => `<span class="related-tag">${d}</span>`).join('') : '<span class="related-tag">Formulir Informed Consent</span><span class="related-tag">Lembar Monitoring</span>'}
            </div>
        </div>

        <div class="sop-detail-section">
            <div class="sop-detail-title"><i class="fas fa-building"></i> Instalasi Terkait</div>
            <div class="related-items">
                ${sop.instalasiTerkait ? sop.instalasiTerkait.map(i => `<span class="related-tag">${i}</span>`).join('') : '<span class="related-tag">Instalasi Rawat Inap</span><span class="related-tag">Instalasi Gawat Darurat</span>'}
            </div>
        </div>
    `;

    modalBody.innerHTML = html;
    modal.classList.add('active');
}

// Event listener untuk modal
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
});

// Navigation
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');
const footerNavs = document.querySelectorAll('.nav-footer');
const burgerBtn = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');

// Burger menu toggle
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Tutup menu saat link diklik
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

function switchPage(pageId) {
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    navItems.forEach(n => n.classList.remove('active'));
    document.querySelector(`.nav-item[data-page="${pageId}"]`).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (pageId === 'perawat') {
        document.querySelectorAll('.submenu-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('.submenu-btn[data-sub="manajemen"]').classList.add('active');
        document.querySelectorAll('.sub-view').forEach(v => v.classList.remove('active'));
        document.getElementById('manajemenView').classList.add('active');
        document.getElementById('categoryContainer').style.display = 'block';
        document.getElementById('sopByCategoryContainer').style.display = 'none';
        document.getElementById('categorySearch').value = '';
    }
}

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        switchPage(item.dataset.page);
    });
});

footerNavs.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        switchPage(item.dataset.page);
    });
});

// Submenu perawat
document.querySelectorAll('.submenu-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.submenu-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const sub = this.dataset.sub;
        document.querySelectorAll('.sub-view').forEach(v => v.classList.remove('active'));
        if (sub === 'manajemen') {
            document.getElementById('manajemenView').classList.add('active');
        } else {
            document.getElementById('tindakanView').classList.add('active');
            document.getElementById('categoryContainer').style.display = 'block';
            document.getElementById('sopByCategoryContainer').style.display = 'none';
            document.getElementById('categorySearch').value = '';
        }
    });
});

// FAQ
document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const icon = this.querySelector('i');
        answer.classList.toggle('active');
        icon.style.transform = answer.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
    });
});

// Initialize semua halaman
document.addEventListener('DOMContentLoaded', function() {
    renderDokterPage();
    renderPasienPage();
    renderPerawatManajemenPage();
    renderTindakanCategories();
    
    initDokterSearch();
    initPasienSearch();
    initPerawatManajemenSearch();
    initCategorySearch();
    initCategoryDetailSearch();
    initBackToCategories();
});
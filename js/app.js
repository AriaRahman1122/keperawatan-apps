/*

    Handle Pertukaran Data JS dengan UI
    Author: Aria Rahman, Siddiq Ahmad Anshori
    Title: app
    Description: Class untuk handle pertukaran data JS dengan UI untuk Aplikasi Manajemen Keperawatan

**/


AOS.init({ duration: 800 });

// Modal global
const modal = document.getElementById('sopModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

// Fungsi untuk membuka modal dengan detail SOP
function openModal(sop) {
    modalTitle.textContent = sop.title;

    const splitListMarker = (text = '') => {
        const match = text.match(/^\s*([A-Za-z]+\.|\d+\)|[-•])\s+(.*)$/);
        if (!match) {
            return { marker: '', content: text.trim() };
        }
        return { marker: match[1], content: match[2].trim() };
    };

    const getAlphabetMarker = (index) => {
        let marker = '';
        let value = index;

        do {
            marker = String.fromCharCode(65 + (value % 26)) + marker;
            value = Math.floor(value / 26) - 1;
        } while (value >= 0);

        return `${marker}.`;
    };

    const renderDesc = (desc, options = {}) => {
        if (!desc) return '';

        const { indexed = false, markerOverride = '' } = options;
        if (!indexed) {
            return `<div class="step-desc">${desc}</div>`;
        }

        const parsed = splitListMarker(desc);
        const marker = markerOverride || parsed.marker;
        const content = parsed.content || desc;

        return `
            <div class="step-desc step-desc-indexed">
                <span class="step-desc-marker">${marker}</span>
                <span class="step-desc-text">${content}</span>
            </div>
        `;
    };

    const normalizeSubDetail = (input) => {
        if (!input) return [];

        if (Array.isArray(input)) {
            return input
                .map((line) => (typeof line === 'string' ? line.trim() : ''))
                .filter(Boolean);
        }

        if (typeof input === 'string') {
            return input
                .split('\n')
                .map((line) => line.trim())
                .filter(Boolean);
        }

        return [];
    };

    const normalizeDetailEntries = (detailInput) => {
        if (!detailInput) return [];

        if (typeof detailInput === 'string') {
            return detailInput
                .split('\n')
                .map((line) => line.trim())
                .filter(Boolean)
                .map((line) => ({ text: line, subDetail: [] }));
        }

        const entries = Array.isArray(detailInput) ? detailInput : [detailInput];

        return entries
            .map((entry) => {
                if (typeof entry === 'string') {
                    return { text: entry.trim(), subDetail: [] };
                }

                if (!entry || typeof entry !== 'object') {
                    return null;
                }

                const text = (entry.text || entry.detail || entry.desc || '').trim();
                const subDetail = normalizeSubDetail(entry.subDetail || entry.subDetails || entry.children);

                if (!text && !subDetail.length) {
                    return null;
                }

                return { text, subDetail };
            })
            .filter(Boolean);
    };

    const renderDetail = (detailInput, options = {}) => {
        if (!detailInput) return '';

        const { indexed = false } = options;
        const entries = normalizeDetailEntries(detailInput);

        if (!entries.length) return '';

        let autoNumber = 0;

        const renderedEntries = entries.map((entry) => {
            const parsed = splitListMarker(entry.text || '');
            const lineMarker = indexed ? (parsed.marker || `${++autoNumber})`) : '';
            const lineContent = parsed.content || entry.text;

            const mainLine = indexed
                ? `
                    <div class="step-detail-item step-detail-item-indexed">
                        <span class="step-detail-marker">${lineMarker}</span>
                        <span class="step-detail-text">${lineContent}</span>
                    </div>
                `
                : `<div class="step-detail-item">${lineContent}</div>`;

            const subLines = entry.subDetail.length
                ? `
                    <div class="step-subdetail-list">
                        ${(() => {
                            const rows = [];
                            let formulaGroup = [];
                            const isFormulaExpression = (text = '') => /=/.test(text)
                                || (/[()]/.test(text) && /[xX×*\/+-]/.test(text));
                            const isGivenValueLine = (text = '') => /^diberikan\b/i.test(text)
                                && /\bbb\b/i.test(text)
                                && /\d/.test(text);

                            const flushFormulaGroup = () => {
                                if (!formulaGroup.length) return;

                                rows.push(`
                                    <div class="step-subdetail-item step-detail-item-indexed is-formula">
                                        <span class="step-detail-text formula-group">
                                            ${formulaGroup.map((line) => `
                                                <div class="formula-line ${line.isNote ? 'formula-note' : ''}">
                                                    ${line.marker ? `<span class="formula-inline-marker">${line.marker}</span>` : ''}
                                                    <span>${line.content}</span>
                                                </div>
                                            `).join('')}
                                        </span>
                                    </div>
                                `);

                                formulaGroup = [];
                            };

                            entry.subDetail.forEach((subLine, idx, allLines) => {
                                const subParsed = splitListMarker(subLine);
                                const hasExplicitMarker = Boolean(subParsed.marker);
                                const subMarker = hasExplicitMarker ? subParsed.marker : '';
                                const subContent = subParsed.content || subLine;

                                const previousRaw = idx > 0 ? allLines[idx - 1] : '';
                                const nextRaw = idx < allLines.length - 1 ? allLines[idx + 1] : '';
                                const previousParsed = splitListMarker(previousRaw || '');
                                const nextParsed = splitListMarker(nextRaw || '');
                                const previousContent = previousParsed.content || previousRaw;
                                const nextContent = nextParsed.content || nextRaw;

                                const isFormulaExpr = isFormulaExpression(subContent);
                                const isFormulaNote = /^keterangan\s*:/i.test(subContent);
                                const isContextFormulaValue = isGivenValueLine(subContent)
                                    && (isFormulaExpression(previousContent) || isFormulaExpression(nextContent));
                                const isFormulaRelated = isFormulaExpr || isFormulaNote || isContextFormulaValue;

                                if (isFormulaRelated) {
                                    formulaGroup.push({
                                        marker: subMarker,
                                        content: subContent,
                                        isNote: isFormulaNote
                                    });
                                    return;
                                }

                                flushFormulaGroup();

                                const displayMarker = subMarker || '-';

                                rows.push(`
                                    <div class="step-subdetail-item step-detail-item-indexed">
                                        <span class="step-detail-marker">${displayMarker}</span>
                                        <span class="step-detail-text">${subContent}</span>
                                    </div>
                                `);
                            });

                            flushFormulaGroup();

                            return rows.join('');
                        })()}
                    </div>
                `
                : '';

            return `
                <div class="step-detail-entry">
                    ${mainLine}
                    ${subLines}
                </div>
            `;
        }).join('');

        return `
            <div class="step-detail-list">
                ${renderedEntries}
            </div>
        `;
    };

    const renderDescDetailBlock = (desc, detail, itemIndex) => {
        const parsed = splitListMarker(desc || '');
        const markerOverride = parsed.marker ? '' : getAlphabetMarker(itemIndex);

        return `
            <div class="step-item-group">
                ${renderDesc(desc, { indexed: true, markerOverride })}
                ${renderDetail(detail, { indexed: true })}
            </div>
        `;
    };

    const renderPointList = (text, fallback) => {
        const value = (text || fallback).trim();
        const lines = value.split('\n').map((line) => line.trim()).filter(Boolean);

        if (lines.length <= 1) {
            return `<p>${value}</p>`;
        }

        let intro = '';
        let items = lines;

        if (/[:：]$/.test(lines[0]) && lines.length > 1) {
            intro = lines[0];
            items = lines.slice(1);
        }

        const cleanItems = items
            .map((line) => line.replace(/^(\d+[\.)]?|[-•])\s*/, '').trim())
            .filter(Boolean);

        if (!cleanItems.length) {
            return `<p>${value}</p>`;
        }

        return `
            ${intro ? `<p>${intro}</p>` : ''}
            <ol class="tujuan-list">
                ${cleanItems.map((item) => `<li>${item}</li>`).join('')}
            </ol>
        `;
    };

    const renderTujuan = (tujuanText) => {
        return renderPointList(
            tujuanText,
            'Standar operasional prosedur ini bertujuan untuk memberikan panduan yang jelas dan seragam.'
        );
    };

    const renderPengertian = (pengertianText) => {
        const value = (pengertianText || 'Tidak ada data').trim();
        const lines = value.split('\n').map((line) => line.trim()).filter(Boolean);

        if (lines.length <= 1) {
            return `<p>${value}</p>`;
        }

        const isAlphaItem = (line) => /^[a-zA-Z][\.)]\s+/.test(line);
        const cleanAlphaItem = (line) => line.replace(/^[a-zA-Z][\.)]\s+/, '').trim();

        const groups = [];
        let currentGroup = null;

        lines.forEach((line) => {
            if (isAlphaItem(line)) {
                if (!currentGroup) {
                    currentGroup = { title: '', items: [] };
                    groups.push(currentGroup);
                }
                currentGroup.items.push(cleanAlphaItem(line));
                return;
            }

            currentGroup = { title: line, items: [] };
            groups.push(currentGroup);
        });

        const hasAlphaGroups = groups.some((group) => group.items.length);

        if (!hasAlphaGroups) {
            return renderPointList(value, 'Tidak ada data');
        }

        return `
            <div class="pengertian-list">
                ${groups.map((group) => `
                    <div class="pengertian-block">
                        ${group.title ? `<p class="pengertian-title">${group.title}</p>` : ''}
                        ${group.items.length
                            ? `<ol class="pengertian-sublist" type="a">${group.items.map((item) => `<li>${item}</li>`).join('')}</ol>`
                            : ''}
                    </div>
                `).join('')}
            </div>
        `;
    };
    
    let prosedurHTML = '';
    if (sop.prosedur) {
        prosedurHTML = '<div class="prosedur-visual">' + 
            sop.prosedur.map((p, index) => `
                <div class="prosedur-step">
                    <div class="step-number">${index + 1}</div>
                    <div class="step-content ${p.items && Array.isArray(p.items) ? 'has-items' : ''}">
                        <div class="step-title">${p.step}</div>
                        ${p.items && Array.isArray(p.items)
                            ? p.items.map((item, itemIndex) => renderDescDetailBlock(item.desc, item.detail, itemIndex)).join('')
                            : `
                                ${renderDesc(p.desc)}
                                ${p.detail ? `<small class="step-detail" style="white-space: pre-line;">${p.detail}</small>` : ''}
                            `
                        }
                    </div>
                    <div class="step-arrow"><i class="fas fa-arrow-right"></i></div>
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
            ${renderPengertian(sop.pengertian)}
        </div>

        <div class="sop-detail-section">
            <div class="sop-detail-title"><i class="fas fa-bullseye"></i> Tujuan</div>
            ${renderTujuan(sop.tujuan)}
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

// Fungsi untuk render berita
function renderNews() {
    const newsGrid = document.querySelector('.news-grid');
    if (!newsGrid) return;
    
    newsGrid.innerHTML = '';
    newsData.forEach((news, index) => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.setAttribute('data-aos', 'fade-up');
        newsItem.setAttribute('data-aos-delay', index * 50);
        newsItem.innerHTML = `
            <div class="news-date">${news.date}</div>
            <div class="news-title">${news.title}</div>
            <p>${news.description}</p>
        `;
        newsGrid.appendChild(newsItem);
    });
}

// Fungsi untuk render pengumuman
function renderAnnouncements() {
    const announcementsGrid = document.querySelector('.announcements-grid');
    if (!announcementsGrid) return;
    
    announcementsGrid.innerHTML = '';
    announcementsData.forEach((announcement, index) => {
        const announcementItem = document.createElement('div');
        announcementItem.className = 'announcement-item';
        announcementItem.setAttribute('data-aos', 'zoom-in');
        announcementItem.setAttribute('data-aos-delay', index * 100);
        announcementItem.innerHTML = `
            <h3 style="color: #1a2b4c; margin-bottom: 10px;">${announcement.title}</h3>
            <p style="color: #4d6a8c;">${announcement.description}</p>
            <div style="margin-top: 15px; color: #4300FF;"><i class="fas fa-clock"></i> ${announcement.date}</div>
        `;
        announcementsGrid.appendChild(announcementItem);
    });
}

// Modal event listeners
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

// Burger menu
if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn?.classList.remove('active');
        navLinks?.classList.remove('active');
    });
});

function switchPage(pageId) {
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    navItems.forEach(n => n.classList.remove('active'));
    document.querySelector(`.nav-item[data-page="${pageId}"]`).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Reset perawat tabs ketika membuka halaman perawat
    if (pageId === 'perawat') {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        if (tabBtns.length) {
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            document.querySelector('.tab-btn[data-tab="umum"]')?.classList.add('active');
            document.getElementById('tab-umum')?.classList.add('active');
            document.getElementById('categoryContainer') ? document.getElementById('categoryContainer').style.display = 'block' : null;
            document.getElementById('sopByCategoryContainer') ? document.getElementById('sopByCategoryContainer').style.display = 'none' : null;
        }
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

// FAQ
document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const icon = this.querySelector('i');
        answer.classList.toggle('active');
        icon.style.transform = answer.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
    });
});

// Initialize all
document.addEventListener('DOMContentLoaded', function() {
    renderNews();
    renderAnnouncements();
    renderDokterPage();
    renderPasienPage();
    renderPerawatUmum();
    renderPerawatManajemen();
    renderTindakanCategories();
    
    initDokterSearch();
    initPasienSearch();
    initPerawatSearches();
    initPerawatTabs();
});
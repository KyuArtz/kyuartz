const sampleData = {
    changelog: {
        version: "1.5.1",
        last_updated: "2025-09-26T04:00:00Z",
        updates: [
            {
                date: "2025-09-26",
                timestamp: "2025-09-26T04:00:00Z",
                version: "1.5.1",
                major: [],
                minor: [
                    {
                        title: "Interface Imrovements",
                        description: "Made improvements and adjustments to the interface design, added translucent gradient.",
                        category: "UI/UX"
                    }
                ],
                bugfixes: [],
                upcoming: []
            },
            {
                date: "2025-09-12",
                timestamp: "2025-09-12T06:22:00Z",
                version: "1.4.1",
                major: [],
                minor: [
                    {
                        title: "Technical Imrovements",
                        description: "Made various improvements to the site.",
                        category: "UI/UX"
                    },
                    {
                        title: "Meo Interface Upgrade",
                        description: "Releasing a small update to our AI asistant interface and added new various functionalities like (AI mood, new chat functionality, functional settings & history modal).",
                        category: "UI/UX, AI"
                    },
                ],
                bugfixes: [],
                upcoming: []
            },
            {
                date: "2025-09-09",
                timestamp: "2025-09-09T05:30:00Z",
                version: "1.2.1",
                major: [],
                minor: [],
                bugfixes: [],
                upcoming: [
                    {
                        title: "Improved Meo Assistant",
                        description: "Upgrading Meo with new features, enhanced AI capabilities, and a more interactive experience.",
                        category: "AI",
                        expected_release: "2025-10-15"
                    }
                ]
            },
            {
                date: "2025-09-06",
                timestamp: "2025-09-06T02:30:00Z",
                version: "1.2.1",
                major: [],
                minor: [
                    {
                        title: "Portfolio section improvements",
                        description: "Made various improvements to the portfolio section for better usability and performance.",
                        category: "Performance"
                    },
                    {
                        title: "Comics section improvements",
                        description: "Made various improvements to the comics section for better usability and performance.",
                        category: "Performance"
                    }
                ],
                bugfixes: [],
                upcoming: []
            },
            {
                date: "2025-09-03",
                timestamp: "2025-09-03T10:30:00Z",
                version: "1.1.1",
                major: [],
                minor: [
                    {
                        title: "Technical improvements",
                        description: "Made various technical improvements to enhance performance and maintainability to the site.",
                        category: "Performance"
                    },
                    {
                        title: "Character panel improvements",
                        description: "Made various improvements to the character panel for better usability and performance.",
                        category: "Performance"
                    },
                    {
                        title: "Improved Preferences Page",
                        description: "Enhanced the layout and usability of the Preferences Page.",
                        category: "UI/UX"
                    }
                ],
                bugfixes: [
                    {
                        title: "Fixed character panel layout issues",
                        description: "Resolved various layout issues in the character panel for improved usability and known bugs.",
                        category: "UI/UX"
                    }
                ],
                upcoming: []
            },
            {
                date: "2025-08-30",
                timestamp: "2025-08-30T10:30:00Z",
                version: "1.0.0",
                major: [
                    {
                        title: "Complete Site Overhaul",
                        description: "Redesigned the entire site with a fresh look, improved performance, and enhanced features.",
                        category: "UI/UX"
                    }
                ],
                minor: [
                    {
                        title: "Upgraded Contact Form",
                        description: "The contact page now supports commission requests, general inquiries, and support messages on a single page, featuring a more streamlined and user-friendly UI/UX.",
                        category: "Functionality"
                    },
                    {
                        title: "Enhanced Client Queue",
                        description: "Added search and filter functionality for client names, along with an upgraded interface for a smoother user experience.",
                        category: "UI/UX"
                    },
                    {
                        title: "What's New Page",
                        description: "Replaced the old home-page popup with a dedicated 'What's New' page, offering a cleaner layout and improved UI/UX.",
                        category: "Content"
                    },
                    {
                        title: "New Service Center",
                        description: "Replaced the old help center with a new Service Center that includes Terms of Service, FAQs, and Policies, all accessible through an integrated search function.",
                        category: "Navigation"
                    }
                ],
                bugfixes: [],
                upcoming: []
            }
        ],
        summary: {
            total_major_updates: 1,
            total_minor_updates: 11,
            total_bugfixes: 1,
            total_upcoming_features: 1,
            primary_focus_areas: ["UI/UX", "Performance", "Mobile Experience"]
        }
    }

};

// DOM Elements
const updatesContainer = document.getElementById('updates-container');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');
const filterBtns = document.querySelectorAll('.filter-btn');
const viewBtns = document.querySelectorAll('.view-btn');

// State
let currentData = null;
let currentFilter = 'all';
let currentSort = 'newest';
let currentView = 'grid';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    setupEventListeners();
});

// Load data (replace with your fetch logic)
function loadData() {
    // Simulate loading
    setTimeout(() => {
        currentData = sampleData;
        updateHeroStats();
        renderUpdates();
    }, 1000);
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderUpdates();
        });
    });

    // View toggle buttons
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentView = btn.dataset.view;
            updateViewMode();
        });
    });

    // Search input
    searchInput.addEventListener('input', debounce(renderUpdates, 300));

    // Sort dropdown
    sortSelect.addEventListener('change', () => {
        currentSort = sortSelect.value;
        renderUpdates();
    });
}

// Update hero statistics
function updateHeroStats() {
    const summary = currentData.changelog.summary;
    document.getElementById('total-updates').textContent =
        summary.total_major_updates + summary.total_minor_updates;
    document.getElementById('major-updates').textContent = summary.total_major_updates;
    document.getElementById('bug-fixes').textContent = summary.total_bugfixes;
}

// Update view mode
function updateViewMode() {
    updatesContainer.className = `updates-container ${currentView}-view`;
    renderUpdates();
}

// Render updates
function renderUpdates() {
    if (!currentData) return;

    let filteredUpdates = filterUpdates(currentData.changelog.updates);
    filteredUpdates = searchUpdates(filteredUpdates);
    filteredUpdates = sortUpdates(filteredUpdates);

    if (currentView === 'timeline') {
        renderTimelineView(filteredUpdates);
    } else {
        renderCardView(filteredUpdates);
    }
}

// Filter updates based on selected filter
function filterUpdates(updates) {
    if (currentFilter === 'all') return updates;

    return updates.filter(update => {
        switch (currentFilter) {
            case 'major':
                return update.major.length > 0;
            case 'minor':
                return update.minor.length > 0;
            case 'bugfixes':
                return update.bugfixes.length > 0;
            case 'upcoming':
                return update.upcoming.length > 0;
            default:
                return true;
        }
    });
}

// Search updates
function searchUpdates(updates) {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) return updates;

    return updates.filter(update => {
        const searchableText = [
            ...update.major.map(item => `${item.title} ${item.description}`),
            ...update.minor.map(item => `${item.title} ${item.description}`),
            ...update.bugfixes.map(item => `${item.title} ${item.description}`),
            ...update.upcoming.map(item => `${item.title} ${item.description}`)
        ].join(' ').toLowerCase();

        return searchableText.includes(query) ||
            update.version.toLowerCase().includes(query) ||
            formatDate(update.date).toLowerCase().includes(query);
    });
}

// Sort updates
function sortUpdates(updates) {
    const sortedUpdates = [...updates];

    switch (currentSort) {
        case 'newest':
            return sortedUpdates.sort((a, b) => new Date(b.date) - new Date(a.date));
        case 'oldest':
            return sortedUpdates.sort((a, b) => new Date(a.date) - new Date(b.date));
        case 'version':
            return sortedUpdates.sort((a, b) => b.version.localeCompare(a.version));
        default:
            return sortedUpdates;
    }
}

// Render card view
function renderCardView(updates) {
    if (updates.length === 0) {
        updatesContainer.innerHTML = '<div class="no-results">No updates found matching your criteria.</div>';
        return;
    }

    const html = updates.map(update => createUpdateCard(update)).join('');
    updatesContainer.innerHTML = html;
}

// Render timeline view
function renderTimelineView(updates) {
    if (updates.length === 0) {
        updatesContainer.innerHTML = '<div class="no-results">No updates found matching your criteria.</div>';
        return;
    }

    const timelineHTML = `
    <div class="timeline-container">
        <div class="timeline-line"></div>
        ${updates.map(update => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                ${createUpdateCard(update)}
            </div>
        `).join('')}
    </div>
    `;

    updatesContainer.innerHTML = timelineHTML;
}

// Create update card HTML
function createUpdateCard(update) {
    const sections = [];

    if (shouldShowSection('major', update.major)) {
        sections.push(createUpdateSection('Major Updates', update.major, 'major', '🚀'));
    }

    if (shouldShowSection('minor', update.minor)) {
        sections.push(createUpdateSection('Minor Updates', update.minor, 'minor', '✨'));
    }

    if (shouldShowSection('bugfixes', update.bugfixes)) {
        sections.push(createUpdateSection('Bug Fixes', update.bugfixes, 'bugfixes', '🔧'));
    }

    if (shouldShowSection('upcoming', update.upcoming)) {
        sections.push(createUpdateSection('Upcoming', update.upcoming, 'upcoming', '🔮'));
    }

    return `
    <div class="update-card">
        <div class="update-card-header">
            <div class="update-date">${formatDate(update.date)}</div>
            ${update.version ? `<span class="update-version">v${update.version}</span>` : ''}
            ${update.timestamp ? `<div class="relative-time">${getRelativeTime(update.timestamp)}</div>` : ''}
        </div>
        <div class="update-card-body">
            ${sections.join('')}
        </div>
    </div>
    `;
}

// Check if section should be shown based on current filter
function shouldShowSection(sectionType, items) {
    return currentFilter === 'all' || currentFilter === sectionType ? items.length > 0 : false;
}

// Create update section HTML
function createUpdateSection(title, items, type, icon) {
    return `
                <div class="update-section ${type}-section">
                    <div class="section-header">
                        <div class="section-icon">${icon}</div>
                        <span>${title}</span>
                    </div>
                    <ul class="update-items">
                        ${items.map(item => createUpdateItem(item, type)).join('')}
                    </ul>
                </div>
            `;
}

// Create individual update item HTML
function createUpdateItem(item, type) {
    return `
                <li class="update-item">
                    <div class="item-title">${item.title}</div>
                    <div class="item-description">${item.description}</div>
                    ${item.category ? `<span class="category-badge">${item.category}</span>` : ''}
                    ${item.expected_release ? `<div style="font-size: 0.8rem; margin-top: 5px; opacity: 0.7;">Expected: ${item.expected_release}</div>` : ''}
                </li>
            `;
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function getRelativeTime(dateTimeString) {
    const date = new Date(dateTimeString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60
    };

    for (const [unit, seconds] of Object.entries(intervals)) {
        const interval = Math.floor(diffInSeconds / seconds);
        if (interval >= 1) {
            return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
        }
    }

    return 'Just now';
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add smooth scrolling for better UX
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Add intersection observer for animations
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.update-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// Enhanced error handling
function displayError(message) {
    updatesContainer.innerHTML = `
    <div style="text-align: center; padding: 60px 20px; color: var(--error);">
        <h3>⚠️ ${message}</h3>
        <p style="margin-top: 10px; opacity: 0.8;">Please try refreshing the page or check back later.</p>
        <button onclick="loadData()" style="
            margin-top: 20px; 
            padding: 10px 20px; 
            background: var(--accent-color); 
            color: white; 
            border: none; 
            border-radius: var(--border-radius-custom); 
            cursor: pointer;
        ">Try Again</button>
    </div>
    `;
}

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === '/' && e.target !== searchInput) {
        e.preventDefault();
        searchInput.focus();
    }
});

// Add loading states for better UX
function setLoadingState(isLoading) {
    const loadingHTML = `
                <i class="fa-solid fa-spinner fa-spin" style="font-size: 2rem; color: var(--accent-color);"></i>
            `;

    if (isLoading) {
        updatesContainer.innerHTML = loadingHTML;
    }
}

// Add empty state
function showEmptyState() {
    updatesContainer.innerHTML = `
                <div style="text-align: center; padding: 80px 20px; color: var(--text-color);">
                    <div style="font-size: 4rem; margin-bottom: 20px; opacity: 0.3;">📝</div>
                    <h3 style="margin-bottom: 10px;">No Updates Found</h3>
                    <p style="opacity: 0.7; max-width: 400px; margin: 0 auto;">
                        We couldn't find any updates matching your search criteria. 
                        Try adjusting your filters or search terms.
                    </p>
                </div>
            `;
}

// Add print styles and functionality
function addPrintStyles() {
    const printStyles = `
                <style media="print">
                    .hero-section { background: white !important; color: black !important; }
                    .filter-section { display: none !important; }
                    .update-card { break-inside: avoid; margin-bottom: 20px; }
                    .update-card-header { background: #f8f9fa !important; color: black !important; }
                </style>
            `;
    document.head.insertAdjacentHTML('beforeend', printStyles);
}

// Initialize print styles
addPrintStyles();

// Add export functionality
function exportUpdates() {
    const content = document.querySelector('.updates-container').innerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>KyuArtz - Update Log Export</title>
            <style>
                body { font-family: "Roboto", "Arial", sans-serif; margin: 20px; }
                .update-card { margin-bottom: 30px; border: 1px solid #ddd; padding: 20px; }
                .update-card-header { background: #f8f9fa; margin: -20px -20px 20px -20px; padding: 20px; }
                .section-header { font-weight: bold; margin: 15px 0 10px 0; }
                .update-item { margin-bottom: 10px; padding: 10px; background: #f9f9f9; }
            </style>
        </head>
        <body>
            <h1>KyuArtz Update Log</h1>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
            ${content}
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

// Add export button to filter section
document.querySelector('.filter-header').insertAdjacentHTML('beforeend', `
    <button onclick="exportUpdates()" style="
    padding: 8px 16px;
    background: var(--accent-color);
    color: white;
    border: none;
    border-radius: var(--border-radius-custom);
    cursor: pointer;
    font-size: 0.9rem;
    ">Export</button>
`);
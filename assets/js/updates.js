document.addEventListener('DOMContentLoaded', () => {
    fetch('assets/json/updateLog.json')
        .then(response => response.json())
        .then(data => {
            const changelog = data.changelog;
            const updates = changelog.updates;
            const whatsNewContent = document.getElementById('whats-new-content');
            whatsNewContent.innerHTML = '';  // Clear existing content

            // Add changelog header with metadata
            const headerSection = createChangelogHeader(changelog);
            whatsNewContent.appendChild(headerSection);

            updates.forEach(update => {
                // Create main update container
                const updateContainer = document.createElement('div');
                updateContainer.classList.add('update-container');
                
                // Create date and version header
                const updateHeader = createUpdateHeader(update);
                updateContainer.appendChild(updateHeader);

                // Create section for major updates
                if (update.major.length > 0) {
                    const majorSection = createUpdateSection('Major Updates', update.major, 'major');
                    updateContainer.appendChild(majorSection);
                }

                // Create section for minor updates
                if (update.minor.length > 0) {
                    const minorSection = createUpdateSection('Minor Updates', update.minor, 'minor');
                    updateContainer.appendChild(minorSection);
                }

                // Create section for bug fixes
                if (update.bugfixes.length > 0) {
                    const bugFixSection = createUpdateSection('Bug Fixes & Improvements', update.bugfixes, 'bugfixes');
                    updateContainer.appendChild(bugFixSection);
                }

                // Create section for upcoming updates
                if (update.upcoming.length > 0) {
                    const upcomingSection = createUpdateSection('Upcoming Features', update.upcoming, 'upcoming');
                    updateContainer.appendChild(upcomingSection);
                }

                whatsNewContent.appendChild(updateContainer);
            });

            // Add summary section at the bottom
            if (changelog.summary) {
                const summarySection = createSummarySection(changelog.summary);
                whatsNewContent.appendChild(summarySection);
            }
        })
        .catch(error => {
            console.error('Error fetching updates:', error);
            displayErrorMessage();
        });
});

// Create changelog header with metadata
function createChangelogHeader(changelog) {
    const headerSection = document.createElement('section');
    headerSection.classList.add('changelog-header');
    
    const title = document.createElement('h2');
    title.textContent = '';
    title.classList.add('changelog-title');
    
    const metadata = document.createElement('div');
    metadata.classList.add('changelog-metadata');
    metadata.innerHTML = `
        <div class="metadata-item">
            <span class="label">Version:</span> 
            <span class="value">${changelog.version}</span>
        </div>
        <div class="metadata-item">
            <span class="label">Last Updated:</span> 
            <span class="value">${formatDateTime(changelog.last_updated)}</span>
        </div>
    `;
    
    headerSection.appendChild(title);
    headerSection.appendChild(metadata);
    
    return headerSection;
}

// Create update header with date, time and version
function createUpdateHeader(update) {
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('update-header');
    
    const dateElement = document.createElement('h3');
    dateElement.classList.add('update-date');
    
    // Use timestamp if available, otherwise fall back to date
    const displayDate = update.timestamp ? formatDateTime(update.timestamp) : formatDate(update.date);
    dateElement.textContent = displayDate;
    
    if (update.version) {
        const versionElement = document.createElement('span');
        versionElement.classList.add('version-badge');
        versionElement.textContent = `v${update.version}`;
        headerDiv.appendChild(versionElement);
    }
    
    // Add relative time if timestamp is available
    if (update.timestamp) {
        const relativeTimeElement = document.createElement('div');
        relativeTimeElement.classList.add('relative-time');
        relativeTimeElement.textContent = getRelativeTime(update.timestamp);
        headerDiv.appendChild(relativeTimeElement);
    }
    
    headerDiv.appendChild(dateElement);
    
    return headerDiv;
}

// Enhanced helper function to create update sections
function createUpdateSection(title, items, type) {
    const section = document.createElement('section');
    section.classList.add('update-section', `${type}-section`);
    
    const heading = document.createElement('h4');
    heading.textContent = title;
    heading.classList.add('section-heading', `${type}-heading`);
    section.appendChild(heading);

    const list = document.createElement('ul');
    list.classList.add('update-list', `${type}-list`);
    
    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('update-item', `${type}-item`);
        
        // Handle both string items (legacy) and object items (new format)
        if (typeof item === 'string') {
            listItem.innerHTML = `<div class="item-content">${item}</div>`;
        } else {
            // New structured format
            const itemContent = createStructuredUpdateItem(item, type);
            listItem.appendChild(itemContent);
        }
        
        list.appendChild(listItem);
    });
    
    section.appendChild(list);
    return section;
}

// Create structured update item for new format
function createStructuredUpdateItem(item, type) {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('structured-item');
    
    // Title
    const titleElement = document.createElement('div');
    titleElement.classList.add('item-title');
    titleElement.textContent = item.title;
    itemContainer.appendChild(titleElement);
    
    // Description
    const descriptionElement = document.createElement('div');
    descriptionElement.classList.add('item-description');
    descriptionElement.textContent = item.description;
    itemContainer.appendChild(descriptionElement);
    
    // Category badge
    if (item.category) {
        const categoryBadge = document.createElement('span');
        categoryBadge.classList.add('category-badge', `category-${item.category.toLowerCase().replace(/\s+/g, '-')}`);
        categoryBadge.textContent = item.category;
        itemContainer.appendChild(categoryBadge);
    }
    
    // Expected release date for upcoming items
    if (type === 'upcoming' && item.expected_release) {
        const releaseDate = document.createElement('div');
        releaseDate.classList.add('expected-release');
        releaseDate.textContent = `Expected: ${item.expected_release}`;
        itemContainer.appendChild(releaseDate);
    }
    
    return itemContainer;
}

// Create summary section
function createSummarySection(summary) {
    const summarySection = document.createElement('section');
    summarySection.classList.add('changelog-summary');
    
    const summaryTitle = document.createElement('h3');
    summaryTitle.textContent = 'Development Summary';
    summaryTitle.classList.add('summary-title');
    summarySection.appendChild(summaryTitle);
    
    const statsContainer = document.createElement('div');
    statsContainer.classList.add('summary-stats');
    
    // Statistics
    const stats = [
        { label: 'Major Updates', value: summary.total_major_updates },
        { label: 'Minor Updates', value: summary.total_minor_updates },
        { label: 'Bug Fixes', value: summary.total_bugfixes },
        { label: 'Upcoming Features', value: summary.total_upcoming_features }
    ];
    
    stats.forEach(stat => {
        const statItem = document.createElement('div');
        statItem.classList.add('stat-item');
        statItem.innerHTML = `
            <span class="stat-value">${stat.value}</span>
            <span class="stat-label">${stat.label}</span>
        `;
        statsContainer.appendChild(statItem);
    });
    
    summarySection.appendChild(statsContainer);
    
    // Primary focus areas
    if (summary.primary_focus_areas && summary.primary_focus_areas.length > 0) {
        const focusAreasContainer = document.createElement('div');
        focusAreasContainer.classList.add('focus-areas');
        
        const focusTitle = document.createElement('h4');
        focusTitle.textContent = 'Primary Focus Areas';
        focusTitle.classList.add('focus-title');
        focusAreasContainer.appendChild(focusTitle);
        
        const focusList = document.createElement('ul');
        focusList.classList.add('focus-list');
        
        summary.primary_focus_areas.forEach(area => {
            const focusItem = document.createElement('li');
            focusItem.classList.add('focus-item');
            focusItem.textContent = area;
            focusList.appendChild(focusItem);
        });
        
        focusAreasContainer.appendChild(focusList);
        summarySection.appendChild(focusAreasContainer);
    }
    
    return summarySection;
}

// Utility function to format dates
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

// Utility function to format dates with time
function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
    const dateOptions = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };
    
    const formattedDate = date.toLocaleDateString('en-US', dateOptions);
    const formattedTime = date.toLocaleTimeString('en-US', timeOptions);
    
    return `${formattedDate} at ${formattedTime}`;
}

// Utility function to get relative time
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

// Display error message if fetch fails
function displayErrorMessage() {
    const whatsNewContent = document.getElementById('whats-new-content');
    whatsNewContent.innerHTML = `
        <div class="error-message">
            <h3>Unable to Load Updates</h3>
            <p>Sorry, we couldn't load the latest updates at this time. Please try refreshing the page or check back later.</p>
        </div>
    `;
}

// Optional: Add filtering functionality
function addUpdateFilters() {
    const whatsNewContent = document.getElementById('whats-new-content');
    
    // Create filter container
    const filterContainer = document.createElement('div');
    filterContainer.classList.add('update-filters');
    
    const filterButtons = [
        { text: 'All', filter: 'all' },
        { text: 'Major', filter: 'major' },
        { text: 'Minor', filter: 'minor' },
        { text: 'Bug Fixes', filter: 'bugfixes' },
        { text: 'Upcoming', filter: 'upcoming' }
    ];
    
    filterButtons.forEach(button => {
        const filterBtn = document.createElement('button');
        filterBtn.textContent = button.text;
        filterBtn.classList.add('filter-btn');
        filterBtn.dataset.filter = button.filter;
        
        if (button.filter === 'all') {
            filterBtn.classList.add('active');
        }
        
        filterBtn.addEventListener('click', () => filterUpdates(button.filter));
        filterContainer.appendChild(filterBtn);
    });
    
    // Insert filter container at the beginning
    whatsNewContent.insertBefore(filterContainer, whatsNewContent.firstChild);
}

// Filter updates based on type
function filterUpdates(filterType) {
    const sections = document.querySelectorAll('.update-section');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    filterButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filterType);
    });
    
    // Show/hide sections
    sections.forEach(section => {
        if (filterType === 'all') {
            section.style.display = 'block';
        } else {
            section.style.display = section.classList.contains(`${filterType}-section`) ? 'block' : 'none';
        }
    });
}
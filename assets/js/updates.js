document.addEventListener('DOMContentLoaded', () => {
    fetch('assets/json/updateLog.json')
        .then(response => response.json())
        .then(data => {
            const updates = data.updates;
            const whatsNewContent = document.getElementById('whats-new-content');
            whatsNewContent.innerHTML = '';  // Clear existing content

            updates.forEach(update => {
                // Create date section
                const updateDate = document.createElement('div');
                updateDate.classList.add('update');
                updateDate.innerHTML = `<h4>${update.date}</h4>`;
                whatsNewContent.appendChild(updateDate);

                // Create section for major updates
                if (update.major.length > 0) {
                    const majorSection = createUpdateSection('Major Updates', update.major);
                    whatsNewContent.appendChild(majorSection);
                }

                // Create section for minor updates
                if (update.minor.length > 0) {
                    const minorSection = createUpdateSection('Minor Updates', update.minor);
                    whatsNewContent.appendChild(minorSection);
                }

                // Create section for bug fixes
                if (update.bugfixes.length > 0) {
                    const bugFixSection = createUpdateSection('Bug Fixes/Improvements', update.bugfixes);
                    whatsNewContent.appendChild(bugFixSection);
                }

                // Create section for upcoming updates
                if (update.upcoming.length > 0) {
                    const upcomingSection = createUpdateSection('Upcoming Updates', update.upcoming);
                    whatsNewContent.appendChild(upcomingSection);
                }
            });
        })
        .catch(error => console.error('Error fetching updates:', error));
});

// Helper function to create update sections
function createUpdateSection(title, items) {
    const section = document.createElement('section');
    const heading = document.createElement('h3');
    heading.textContent = title;
    section.appendChild(heading);

    const list = document.createElement('ul');
    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
    });
    section.appendChild(list);

    return section;
}
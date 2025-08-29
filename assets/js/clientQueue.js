// Filter functionality
function filterTable(status) {
    const rows = document.querySelectorAll('#commission-list tr');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter rows
    rows.forEach(row => {
    if (status === 'all' || row.dataset.status === status) {
        row.style.display = '';
        row.style.animation = 'fadeInUp 0.3s ease-out';
    } else {
        row.style.display = 'none';
    }
    });
}

// Search functionality
function searchTable() {
    const input = document.getElementById('searchBox');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('commission-table');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName('td');
    let found = false;
    
    for (let j = 0; j < cells.length; j++) {
        if (cells[j].textContent.toLowerCase().includes(filter)) {
        found = true;
        break;
        }
    }
    
    rows[i].style.display = found ? '' : 'none';
    }
}

// Update stats counters
function updateStats() {
    const rows = document.querySelectorAll('#commission-list tr');
    const stats = { waiting: 0, pending: 0, progress: 0, completed: 0 };
    
    rows.forEach(row => {
    const status = row.dataset.status;
    if (stats.hasOwnProperty(status)) {
        stats[status]++;
    }
    });
    
    document.getElementById('waiting-count').textContent = stats.waiting;
    document.getElementById('pending-count').textContent = stats.pending;
    document.getElementById('progress-count').textContent = stats.progress;
    document.getElementById('completed-count').textContent = stats.completed;
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateStats();
    
    // Add hover effects to table rows
    const rows = document.querySelectorAll('#commission-list tr');
    rows.forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.01)';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    });
});
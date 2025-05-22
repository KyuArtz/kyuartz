// Data for commissions and waitlist
const commissions = [
    { client: "_", type: "_", contact: "_", status: "_", notes: "_" },
    { client: "_", type: "_", contact: "_", status: "_", notes: "_" },
    { client: "_", type: "_", contact: "_", status: "_", notes: "_" },
    { client: "_", type: "_", contact: "_", status: "_", notes: "_" }
];

const waitlistData = [
    { name: "_", commissionType: "_", contact: "_", status: "_" }
];

const slots = {
    "January 1, 2025": 0,
    "February 1, 2025": 0
};

// Utility to create table rows from data
function createTableRow(data, keys) {
    const row = document.createElement('tr');
    row.innerHTML = keys.map(key => `<td>${data[key] ?? ""}</td>`).join('');
    return row;
}

// Render commission list
function renderCommissionList() {
    const commissionList = document.getElementById('commission-list');
    if (!commissionList) return;
    commissionList.innerHTML = '';
    commissions.forEach(commission => {
        commissionList.appendChild(
            createTableRow(commission, ['client', 'type', 'contact', 'status', 'notes'])
        );
    });
}

// Render waitlist
function renderWaitlist() {
    const waitlistTableBody = document.querySelector('#waitlist-table tbody');
    if (!waitlistTableBody) return;
    waitlistTableBody.innerHTML = '';
    waitlistData.forEach(wait => {
        waitlistTableBody.appendChild(
            createTableRow(wait, ['name', 'commissionType', 'contact', 'status'])
        );
    });
}

// Render slots
function renderSlots() {
    document.querySelectorAll('#upcoming-slots li').forEach(item => {
        const dateElem = item.querySelector('strong');
        const remainingText = item.querySelector('.remaining-slots');
        if (!dateElem || !remainingText) return;
        const date = dateElem.innerText;
        remainingText.innerText = `( ${slots[date] ?? 0} slots remaining )`;
    });
}

// Initial render
renderCommissionList();
renderWaitlist();
renderSlots();

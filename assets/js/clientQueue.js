// Sample data array (initial commissions)
const commissions = [
    {
        client: "NULL",
        type: "NULL",
        contact: "NULL",
        status: "NULL",
        notes: "NULL"
    },
    {
        client: "NULL",
        type: "NULL",
        contact: "NULL",
        status: "NULL",
        notes: "NULL"
    },
    {
        client: "NULL",
        type: "NULL",
        contact: "NULL",
        status: "NULL",
        notes: "NULL"
    },
    {
        client: "NULL",
        type: "NULL",
        contact: "NULL",
        status: "NULL",
        notes: "NULL"
    }
];

// Function to render the commission list
function renderCommissionList() {
    const commissionList = document.getElementById('commission-list');
    commissionList.innerHTML = ''; // Clear existing content

    // Create rows for each commission
    commissions.forEach(commission => {
        const commissionRow = document.createElement('tr');
        commissionRow.innerHTML = `
            <td>${commission.client}</td>
            <td>${commission.type}</td>
            <td>${commission.contact}</td>
            <td>${commission.status}</td>
            <td>${commission.notes}</td>
        `;
        commissionList.appendChild(commissionRow);
    });
}

// Initial render
renderCommissionList();

const waitlistData = [
    {
        name: "NULL",
        commissionType: "NULL",
        contact: "NULL",
        status: "NULL" 
    }
];

const waitlistTableBody = document.querySelector('#waitlist-table tbody');

waitlistData.forEach(wait => {
    const waitListRow = document.createElement('tr');
    waitListRow.innerHTML = `
        <td>${wait.name}</td>
        <td>${wait.commissionType}</td>
        <td>${wait.contact}</td>
        <td>${wait.status}</td>
    `;
    waitlistTableBody.appendChild(waitListRow);
});

let slots = {
    "January 1, 2025": 0,
    "February 1, 2025": 0
};

document.querySelectorAll('#upcoming-slots li').forEach(item => {
    const date = item.querySelector('strong').innerText;
    const remainingText = item.querySelector('.remaining-slots');
    remainingText.innerText = `( ${slots[date]} slots remaining )`;
});
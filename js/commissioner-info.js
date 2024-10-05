// Sample data array (initial commissions)
const commissions = [
    {
        commissioner: "Client A",
        type: "Null",
        contact: "Null",
        status: "Null",
        notes: "Null"
    },
    {
        commissioner: "Client B",
        type: "Null",
        contact: "Null",
        status: "Null",
        notes: "Null"
    },
    {
        commissioner: "Client C",
        type: "Null",
        contact: "Null",
        status: "Null",
        notes: "Null"
    },
    {
        commissioner: "Client D",
        type: "Null",
        contact: "Null",
        status: "Null",
        notes: "Null"
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
            <td>${commission.commissioner}</td>
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

let slots = {
    "": 4
};

document.querySelectorAll('#upcoming-slots li').forEach(item => {
    const date = item.querySelector('strong').innerText;
    const remainingText = item.querySelector('.remaining-slots');
    remainingText.innerText = `(${slots[date]} slots remaining)`;
});

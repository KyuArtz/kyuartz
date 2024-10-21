let availableKeywords = [
    { name: 'Portfolio', url: '../pages/portfolio.html' },
    { name: 'About', url: '../pages/about.html' },
    { name: 'Contact Us', url: '../pages/contact.html' },
    { name: 'Commission Sheet', url: '../pages/commission-sheet.html' },
    { name: 'Commissioner Information', url: '../pages/commissioner-info.html' },
    { name: 'Comic', url: '../pages/comic.html' },
    { name: 'Original Character', url: '../pages/original-character.html' },
    { name: 'Timelapse Video', url: '../pages/timelapse-video.html' },
    { name: 'Personal Project', url: '../pages/personal-project.html' },
    { name: 'Terms of Service', url: '../pages/terms-of-service.html' },
    { name: 'Privacy Policy', url: '../pages/privacy-policy.html' },
    { name: 'FAQs', url: '../pages/faq.html' },
    { name: 'Customer Support', url: '../pages/customer-support.html' },
    { name: 'Help Center', url: '../pages/help.html' },
    { name: 'User Guide to KyuArtz', url: '../pages/guide.html' },
    { name: 'Troubleshooting', url: '../pages/troubleshoot.html' },
    { name: 'Preferences', url: '../pages/preferences.html' },
    { name: 'Paypal (KyuArtz)', url: 'https://paypal.me/kyushiartz?country.x=PH&locale.x=en_US' },
    { name: 'Facebook (KyuArtz page)', url: 'https://www.facebook.com/KyuArtz' },
    { name: 'Youtube (KyuArtz page)', url: 'https://www.youtube.com/channel/UCfrtqAzAoFq0IzE_nlvi4Tw' },
    { name: 'X-Twitter (KyuArtz page)', url: 'https://x.com/KyuArtz_992' },
    { name: 'Artstation (KyuArtz page)', url: 'https://KyuArtz.artstation.com/' },
    { name: 'Cara (KyuArtz page)', url: 'https://cara.app/kyuu' },
];

const resultBox = document.querySelector(".search-result");
const inputBox = document.getElementById("input-box");
const searchButton = document.getElementById("search-button");

inputBox.onkeyup = function() {
    search();
}

searchButton.onclick = function(event) {
    event.preventDefault(); // Prevent the form from submitting
    search();
}

function search() {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.name.toLowerCase().includes(input.toLowerCase());
        });
        display(result);
    } else {
        resultBox.style.display = 'none';
    }
}

function display(result) {
    if (result.length === 0) {
        resultBox.innerHTML = "<p>No matching results were found.</p>";
    } else {
        const content = result.map((list) => {
            return `<li><a href="${list.url}"><i class="fa-solid fa-magnifying-glass"></i> ${list.name}</a></li>`;
        }).join(""); // join the array into a single string

        resultBox.innerHTML = `<ul>${content}</ul>`;
    }
    resultBox.style.display = 'block'; // show the result box
}

// Hide the search results when clicking outside
document.addEventListener('click', function(event) {
    if (!resultBox.contains(event.target) && !inputBox.contains(event.target) && !searchButton.contains(event.target)) {
        resultBox.style.display = 'none';
    }
});
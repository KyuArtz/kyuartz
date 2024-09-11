let availableKeywords = [
    { name: 'Home page', url: 'index.html' },
    { name: 'Portfolio', url: 'portfolio.html' },
    { name: 'Comic', url: 'comic.html' },
    { name: 'Comic sci-fi', url: 'comic-sci-fi.html' },
    { name: 'Comic fantasy', url: 'comic-fantasy.html' },
    { name: 'Original Character', url: 'maintenance.html' },
    { name: 'Commission sheet', url: 'commission-sheet.html' },
    { name: 'Commission sheet semi realism', url: 'commission-sheet-semirealism.html' },
    { name: 'Commission sheet anime', url: 'commission-sheet-anime.html' },
    { name: 'Commission sheet grayscale', url: 'commission-sheet-grayscale.html' },
    { name: 'Commission sheet chibi', url: 'commission-sheet-chibi.html' },
    { name: 'Commission sheet landscape', url: 'commission-sheet-landscape.html' },
    { name: 'Commission sheet emote', url: 'commission-sheet-emote.html' },
    { name: 'Terms of service', url: 'terms_of_service.html' },
    { name: 'Privacy policy', url: 'privacy-policy.html' },
    { name: 'FAQ', url: 'faq.html' },
    { name: 'About me', url: 'about.html' },
    { name: 'contact', url: 'contact.html' },
    { name: 'Facebook (kyushiartz page)', url: 'https://www.facebook.com/kyushiartz' },
    { name: 'Youtube (kyushiartz page)', url: 'https://www.youtube.com/channel/UCfrtqAzAoFq0IzE_nlvi4Tw' },
    { name: 'X (kyushiartz page)', url: ' ' },
    { name: 'Artstation (kyushiartz page)', url: 'https://kyushiartz.artstation.com/' },
    { name: 'Cara (kyushiartz page)', url: 'https://cara.app/kyuu' },
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
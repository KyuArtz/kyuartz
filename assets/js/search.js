let availableKeywords = [
  { name: 'Home Page', url: 'index.html' },
  { name: 'Portfolio', url: 'portfolio.html' },
  { name: 'About', url: 'about.html' },
  { name: 'Contact Us', url: 'contact.html' },
  { name: 'Commission Sheet', url: 'commission-sheet.html' },
  { name: 'Client Queue', url: 'client-queue.html' },
  { name: 'Comic', url: 'comic.html' },
  { name: 'Original Character', url: 'characters.html' },
  { name: 'Terms of Service', url: 'terms-of-service.html' },
  { name: 'Privacy Policy', url: 'privacy-policy.html' },
  { name: 'FAQs', url: 'faq.html' },
  { name: 'Customer Support', url: 'customer-support.html' },
  { name: 'Help Center', url: 'help.html' },
  { name: 'User Guide to KyuArtz', url: 'guide.html' },
  { name: 'Troubleshooting', url: 'troubleshoot.html' },
  { name: 'Preferences', url: 'preferences.html' },
  { name: 'Paypal (KyuArtz)', url: 'https://paypal.me/kyushiartz?country.x=PH&locale.x=en_US' },
  { name: 'Facebook (KyuArtz page)', url: 'https://www.facebook.com/KyuArtz' },
  { name: 'Youtube (KyuArtz page)', url: 'https://www.youtube.com/channel/UCfrtqAzAoFq0IzE_nlvi4Tw' },
  { name: 'X-Twitter (KyuArtz page)', url: 'https://x.com/KyuArtz_992' },
  { name: 'Artstation (KyuArtz page)', url: 'https://KyuArtz.artstation.com/' },
  { name: 'Cara (KyuArtz page)', url: 'https://cara.app/kyuartz' },
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
const availableKeywords = [
  { name: 'Home Page', url: 'index.html' },
  { name: 'Portfolio', url: 'portfolio.html' },
  { name: 'About', url: 'about.html' },
  { name: 'Contact Us', url: 'contact.html' },
  { name: 'Commission Sheet', url: 'commission-sheet.html' },
  { name: 'Client Queue', url: 'client-queue.html' },
  { name: 'Kyuartz Comic', url: 'comic.html' },
  { name: 'Original Character', url: 'characters.html' },
  { name: 'Terms of Service', url: 'service-center.html' },
  { name: 'Privacy Policy', url: 'service-center.html' },
  { name: 'FAQs', url: 'service-center.html' },
  { name: 'Customer Support', url: 'service-center.html' },
  { name: 'Service Center', url: 'service-center.html' },
  { name: 'Preferences', url: 'preferences.html' },
  { name: 'Meo Virtual Assistant', url: 'virtual-assistant.html' },
  { name: 'Paypal (KyuArtz)', url: 'https://paypal.me/kyushiartz?country.x=PH&locale.x=en_US' },
  { name: 'Facebook (KyuArtz page)', url: 'https://www.facebook.com/KyuArtz' },
  { name: 'Youtube (KyuArtz page)', url: 'https://www.youtube.com/channel/UCfrtqAzAoFq0IzE_nlvi4Tw' },
  { name: 'X-Twitter (KyuArtz page)', url: 'https://x.com/KyuArtz_992' },
  { name: 'Artstation (KyuArtz page)', url: 'https://KyuArtz.artstation.com/' },
  { name: 'Cara (KyuArtz page)', url: 'https://cara.app/kyuartz' },
];

const resultBox = document.querySelector('.search-result');
const inputBox = document.getElementById('input-box');
const searchButton = document.getElementById('search-button');

let debounceTimer = null;

inputBox.addEventListener('keyup', () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(search, 200);
});

searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  search();
});

function search() {
  const input = inputBox.value.trim();
  if (!input) {
    resultBox.style.display = 'none';
    return;
  }
  const result = availableKeywords.filter(keyword =>
    keyword.name.toLowerCase().includes(input.toLowerCase())
  );
  display(result);
}

function display(result) {
  if (result.length === 0) {
    resultBox.innerHTML = '';
    const p = document.createElement('p');
    p.textContent = 'No matching results were found.';
    resultBox.appendChild(p);
  } else {
    const ul = document.createElement('ul');
    result.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${item.url}"><i class="fa-solid fa-magnifying-glass"></i> ${item.name}</a>`;
      ul.appendChild(li);
    });
    resultBox.innerHTML = '';
    resultBox.appendChild(ul);
  }
  resultBox.style.display = 'block';
}

// Hide the search results when clicking outside
document.addEventListener('click', function(event) {
  if (
    !resultBox.contains(event.target) &&
    !inputBox.contains(event.target) &&
    !searchButton.contains(event.target)
  ) {
    resultBox.style.display = 'none';
  }
});
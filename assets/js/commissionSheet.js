// Filter functionality
const categoryFilters = document.querySelectorAll('.filter-btn');
const commissionCards = document.querySelectorAll('.commission-card');

categoryFilters.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        categoryFilters.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');

        const filter = tab.dataset.filter;

        // Filter cards
        commissionCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Currency conversion
const currencySelector = document.getElementById('currency-selector');
const loadingIndicator = document.getElementById('loading');

// Exchange rates cache
let exchangeRates = {};

async function fetchExchangeRates() {
    try {
        loadingIndicator.style.display = 'block';

        // Using a free exchange rate API
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();

        exchangeRates = data.rates;
        loadingIndicator.style.display = 'none';

        return true;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        loadingIndicator.style.display = 'none';
        alert('Could not update currency rates. Please try again later.');
        return false;
    }
}

function updatePrices(currency) {
    const priceElements = document.querySelectorAll('.price-amount');

    priceElements.forEach(element => {
        const usdPrice = parseFloat(element.dataset.usd);

        if (currency === 'USD') {
            element.textContent = `${usdPrice}`;
        } else if (exchangeRates[currency]) {
            const convertedPrice = (usdPrice * exchangeRates[currency]).toFixed(2);
            const currencySymbols = {
                'USD': '$',       // United States Dollar
                'EUR': '€',       // Euro
                'JPY': '¥',       // Japanese Yen
                'GBP': '£',       // British Pound
                'AUD': 'A$',      // Australian Dollar
                'CAD': 'C$',      // Canadian Dollar
                'CHF': 'CHF',     // Swiss Franc
                'CNY': '¥',       // Chinese Yuan
                'HKD': 'HK$',     // Hong Kong Dollar
                'SGD': 'S$',      // Singapore Dollar
                'KRW': '₩',       // South Korean Won
                'INR': '₹',       // Indian Rupee
                'NZD': 'NZ$',     // New Zealand Dollar
                'MXN': 'MX$',     // Mexican Peso
                'ZAR': 'R',       // South African Rand
                'BRL': 'R$',      // Brazilian Real
                'PHP': '₱',       // Philippine Peso
                'THB': '฿',       // Thai Baht
                'MYR': 'RM',      // Malaysian Ringgit
                'VND': '₫',       // Vietnamese Dong
                'IDR': 'Rp',      // Indonesian Rupiah
                'SEK': 'kr',      // Swedish Krona
                'NOK': 'kr',      // Norwegian Krone
                'DKK': 'kr',      // Danish Krone
                'RUB': '₽',       // Russian Ruble
                'TRY': '₺',       // Turkish Lira
                'PLN': 'zł'       // Polish Zloty
            };

            const symbol = currencySymbols[currency] || currency + ' ';
            element.textContent = `${symbol}${convertedPrice}`;
        }
    });
}

// Currency selector event listener
currencySelector.addEventListener('change', async (e) => {
    const selectedCurrency = e.target.value;

    if (selectedCurrency === 'USD') {
        updatePrices('USD');
        return;
    }

    if (Object.keys(exchangeRates).length === 0) {
        await fetchExchangeRates();
    }

    updatePrices(selectedCurrency);
});

// Auto-detect user's currency based on location
async function detectUserCurrency() {
    try {
        const response = await fetch('https://ipapi.co/currency/');
        const currency = await response.text();

        // Check if the detected currency is in our selector
        const option = currencySelector.querySelector(`option[value="${currency}"]`);
        if (option) {
            currencySelector.value = currency;
            currencySelector.dispatchEvent(new Event('change'));
        }
    } catch (error) {
        console.log('Could not detect user currency, using USD as default');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    detectUserCurrency();

    // Add stagger animation delay to cards
    const cards = document.querySelectorAll('.commission-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Image hover effect enhancement
document.querySelectorAll('.card-image').forEach(imageContainer => {
    const img = imageContainer.querySelector('img');
    const overlay = imageContainer.querySelector('.image-overlay');

    imageContainer.addEventListener('mouseenter', () => {
        img.style.filter = 'brightness(0.7)';
    });

    imageContainer.addEventListener('mouseleave', () => {
        img.style.filter = 'brightness(1)';
    });
});

// Smooth scroll for any internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
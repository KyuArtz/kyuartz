const apiKey = 'af75c5ccaa788d623d17b486';
const baseCurrency = 'USD';

// Cache for exchange rates and timestamp
let exchangeRatesCache = null;
let exchangeRatesTimestamp = null;
const CACHE_DURATION = 12 * 60 * 60 * 1000; // 12 hours

function showCurrencyError(message) {
    alert(message);
}

function showCurrencyLoading(show) {
    let loader = document.getElementById('currency-loader');
    if (!loader) {
        loader = document.createElement('div');
        loader.id = 'currency-loader';
        loader.style.position = 'fixed';
        loader.style.top = '10px';
        loader.style.right = '10px';
        loader.style.background = '#222';
        loader.style.color = '#fff';
        loader.style.padding = '8px 16px';
        loader.style.borderRadius = '6px';
        loader.style.zIndex = '9999';
        loader.style.fontSize = '1rem';
        loader.innerText = 'Updating prices...';
        document.body.appendChild(loader);
    }
    loader.style.display = show ? 'block' : 'none';
}

const currencySelector = document.getElementById('currency-selector');
let lastCurrency = baseCurrency;

function updatePrices(selectedCurrency, rates) {
    const prices = document.querySelectorAll('.price-amount');
    prices.forEach(price => {
        const originalPrice = parseFloat(price.getAttribute('data-usd'));
        if (isNaN(originalPrice)) return;
        if (selectedCurrency === baseCurrency) {
            price.innerText = `${originalPrice} USD`;
        } else {
            const rate = rates[selectedCurrency];
            if (!rate) {
                showCurrencyError('Selected currency is not supported.');
                return;
            }
            const convertedPrice = (originalPrice * rate).toFixed(2);
            price.innerText = `${convertedPrice} ${selectedCurrency}`;
        }
    });
}

async function getExchangeRates() {
    const now = Date.now();
    if (
        exchangeRatesCache &&
        exchangeRatesTimestamp &&
        now - exchangeRatesTimestamp < CACHE_DURATION
    ) {
        return exchangeRatesCache;
    }
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`);
    const data = await response.json();
    if (data.result !== "success") throw new Error('Failed to fetch exchange rates');
    exchangeRatesCache = data.conversion_rates;
    exchangeRatesTimestamp = now;
    return exchangeRatesCache;
}

if (currencySelector) {
    currencySelector.addEventListener('change', async function () {
        const selectedCurrency = this.value;
        if (selectedCurrency === lastCurrency) return;
        lastCurrency = selectedCurrency;
        showCurrencyLoading(true);
        if (selectedCurrency === baseCurrency) {
            updatePrices(baseCurrency, {});
            showCurrencyLoading(false);
            return;
        }
        try {
            const rates = await getExchangeRates();
            updatePrices(selectedCurrency, rates);
        } catch (error) {
            console.error('Error fetching exchange rate:', error);
            showCurrencyError('Could not update prices. Please try again later.');
        }
        showCurrencyLoading(false);
    });
}

// Automatically detect user's currency
fetch('https://ipapi.co/currency/')
    .then(response => response.text())
    .then(currency => {
        if (!currencySelector) return;
        const optionExists = Array.from(currencySelector.options).some(opt => opt.value === currency);
        currencySelector.value = optionExists ? currency : baseCurrency;
        currencySelector.dispatchEvent(new Event('change'));
    })
    .catch(error => {
        console.error('Error detecting currency:', error);
    });

// On page load, ensure prices are set to USD
document.addEventListener('DOMContentLoaded', () => {
    updatePrices(baseCurrency, {});
});
const apiKey = 'af75c5ccaa788d623d17b486'; // Replace with your actual API key
        const baseCurrency = 'USD'; // Base currency

        // Currency conversion
        document.getElementById('currency-selector').addEventListener('change', function () {
            const selectedCurrency = this.value;
            const prices = document.querySelectorAll('.price-amount');
            
            fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`)
                .then(response => response.json())
                .then(data => {
                    const rate = data.conversion_rates[selectedCurrency];
                    prices.forEach(price => {
                        const originalPrice = parseFloat(price.getAttribute('data-usd'));
                        const convertedPrice = (originalPrice * rate).toFixed(2);
                        price.innerText = `${convertedPrice} ${selectedCurrency}`;
                    });
                })
                .catch(error => console.error('Error fetching exchange rate:', error));
        });

        // Automatically detect user's currency
        fetch('https://ipapi.co/currency/')
            .then(response => response.text())
            .then(currency => {
                document.getElementById('currency-selector').value = currency;
                document.getElementById('currency-selector').dispatchEvent(new Event('change'));
            })
            .catch(error => console.error('Error detecting currency:', error));
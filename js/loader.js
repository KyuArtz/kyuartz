document.addEventListener("DOMContentLoaded", function() {
    // Check if the loader has been shown before
    if (localStorage.getItem('loaderDisplayed') === 'true') {
        // Hide the loader if it has been shown before
        hideLoader();
    } else {
        // Show the loader for the first time
        localStorage.setItem('loaderDisplayed', 'true');
        window.addEventListener('load', function() {
            // Add a small delay to ensure the page is fully loaded before hiding the loader
            setTimeout(hideLoader, 500); // Adjust the delay as necessary
        });
    }
});

function hideLoader() {
    var loader = document.querySelector('.loader');
    if (loader) {
        loader.classList.add('loader-hidden');
        // Remove the loader from the DOM once hidden
        setTimeout(function() {
            loader.remove();
        }, 750); // Adjust the delay to match the transition duration in CSS
    }
}
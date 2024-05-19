window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    const loadingText = document.querySelector(".loading-text");
    const messages = [
        "Loading Webpage...",
        "Almost there...",
        "Just a moment...",
        "Thank you for your patience..."
    ];
    let messageIndex = 0;

    const interval = setInterval(() => {
        messageIndex = (messageIndex + 1) % messages.length;
        loadingText.textContent = messages[messageIndex];
    }, 2000); // Change text every 2 seconds

    // Remove this line to let the loader remain visible until transition ends
    // loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        clearInterval(interval); // Stop changing text when loader is hidden
        loader.remove();
    });

    // Add loader-hidden class only after the page has fully loaded and displayed
    window.setTimeout(() => {
        loader.classList.add("loader-hidden");
    }, 100); // Slight delay to ensure everything is ready
});

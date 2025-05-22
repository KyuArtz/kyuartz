document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel_inner');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentIndex = 0;
    const itemCount = carouselInner.children.length;

    // Smooth transition effect
    carouselInner.style.transition = "transform 0.3s ease-in-out";

    // Navigation buttons
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + itemCount) % itemCount; // Loop backward
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % itemCount; // Loop forward
        updateCarousel();
    });

    function updateCarousel() {
        const width = carouselInner.children[0].offsetWidth;
        carouselInner.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    //Auto-scroll feature
    let autoScroll = setInterval(() => {
        currentIndex = (currentIndex + 1) % itemCount;
        updateCarousel();
    }, 5000); // Change slide every 5 seconds

    // Pause auto-scroll on hover & resume on leave
    carouselInner.addEventListener('mouseenter', () => clearInterval(autoScroll));
    carouselInner.addEventListener('mouseleave', () => {
        autoScroll = setInterval(() => {
            currentIndex = (currentIndex + 1) % itemCount;
            updateCarousel();
        }, 5000);
    });
});

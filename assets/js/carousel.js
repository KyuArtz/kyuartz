const carouselInner = document.querySelector('.carousel_inner');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    let currentIndex = 0;

    prevButton.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = Math.min(currentIndex + 1, Math.floor(carouselInner.children.length / 1) - 1);
        updateCarousel();
    });

    function updateCarousel() {
        const width = carouselInner.children[0].offsetWidth;
        carouselInner.style.transform = `translateX(-${currentIndex * width * 1}px)`;
}
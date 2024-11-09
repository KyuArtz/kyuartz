const carouselInner = document.querySelector('.carousel_inner');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentIndex = 0;
const itemCount = carouselInner.children.length;

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
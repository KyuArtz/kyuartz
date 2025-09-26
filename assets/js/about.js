document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in-up, .slide-in-left');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

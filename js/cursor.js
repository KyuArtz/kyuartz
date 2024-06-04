document.addEventListener('DOMContentLoaded', () => {
    const customCursor = document.getElementById('custom-cursor');

    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    });
});

document.querySelectorAll('.hover-element').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('hover');
    });

    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('hover');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const toggleCheckbox = document.getElementById('theme-toggle-checkbox');
    const currentTheme = localStorage.getItem('theme') || 'default-theme';
    
    document.body.classList.add(currentTheme);
    toggleCheckbox.checked = currentTheme === 'custom-theme';

    toggleCheckbox.addEventListener('change', () => {
        document.body.classList.toggle('custom-theme');
        document.body.classList.toggle('default-theme');

        const theme = document.body.classList.contains('custom-theme') ? 'custom-theme' : 'default-theme';
        localStorage.setItem('theme', theme);
    });
});

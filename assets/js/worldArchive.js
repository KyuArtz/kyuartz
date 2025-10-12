// Filter functionality with smooth transitions
const filterTabs = document.querySelectorAll('.filter-btn');
const worldCards = document.querySelectorAll('.world-card');

filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        filterTabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');

        const filter = tab.dataset.filter;

        // Filter cards with stagger animation
        worldCards.forEach((card, index) => {
            if (filter === 'all' || card.dataset.category === filter) {
                // Fade out first
                card.style.animation = 'none';
                
                // Trigger reflow
                void card.offsetWidth;
                
                // Show card with delay based on visible index
                setTimeout(() => {
                    card.classList.remove('hidden');
                    card.style.animation = `fadeInUp 0.6s ease forwards`;
                }, index * 100);
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Add parallax effect to cards on mouse move
worldCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Add stagger animation delay to cards
    const cards = document.querySelectorAll('.world-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach(card => observer.observe(card));
});

// Smooth scroll for any internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add card count display
function updateCardCount() {
    const visibleCards = document.querySelectorAll('.world-card:not(.hidden)').length;
    const activeFilter = document.querySelector('.filter-btn.active');
    
    if (activeFilter && activeFilter.dataset.filter !== 'all') {
        const countElement = activeFilter.querySelector('.card-count');
        if (!countElement) {
            const count = document.createElement('span');
            count.className = 'card-count';
            count.style.cssText = 'margin-left: 0.5rem; opacity: 0.7; font-size: 0.9em;';
            count.textContent = `(${visibleCards})`;
            activeFilter.appendChild(count);
        }
    }
}

// Call after filter changes
filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        setTimeout(updateCardCount, 100);
        
        // Remove count from all tabs first
        document.querySelectorAll('.card-count').forEach(el => el.remove());
    });
});
// Slideshow Functionality
class ModernSlideshow {
  constructor() {
    this.slides = document.querySelectorAll('.slide');
    this.dots = document.querySelectorAll('.dot');
    this.prevBtn = document.querySelector('.slide-prev');
    this.nextBtn = document.querySelector('.slide-next');
    this.currentSlide = 0;
    this.slideInterval = null;
    this.isSliding = false; // to debounce manual clicks

    this.init();
  }

  init() {
    this.showSlide(0);
    this.startAutoSlide();
    this.addEventListeners();
  }

  addEventListeners() {
    this.prevBtn.addEventListener('click', () => this.handleManualSlide(() => this.previousSlide()));
    this.nextBtn.addEventListener('click', () => this.handleManualSlide(() => this.nextSlide()));

    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.handleManualSlide(() => this.showSlide(index)));
    });

    // Pause on hover
    const container = document.querySelector('.slideshow-container');
    container.addEventListener('mouseenter', () => this.pauseAutoSlide());
    container.addEventListener('mouseleave', () => this.startAutoSlide());
  }

  handleManualSlide(action) {
    if (this.isSliding) return; // prevent spamming
    this.isSliding = true;

    action(); // perform the action
    this.resetAutoSlide();

    setTimeout(() => {
      this.isSliding = false;
    }, 500); // half-second cooldown
  }

  showSlide(index) {
    if (index < 0) index = this.slides.length - 1;
    if (index >= this.slides.length) index = 0;

    this.slides.forEach(slide => slide.classList.remove('active'));
    this.dots.forEach(dot => dot.classList.remove('active'));

    this.currentSlide = index;
    this.slides[index].classList.add('active');
    this.dots[index].classList.add('active');
  }

  nextSlide() {
    this.showSlide((this.currentSlide + 1) % this.slides.length);
  }

  previousSlide() {
    this.showSlide((this.currentSlide - 1 + this.slides.length) % this.slides.length);
  }

  startAutoSlide() {
    if (this.slideInterval) return; // prevent stacking
    this.slideInterval = setInterval(() => this.nextSlide(), 8000);
  }

  pauseAutoSlide() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.slideInterval = null;
    }
  }

  resetAutoSlide() {
    this.pauseAutoSlide();
    this.startAutoSlide();
  }
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';

      // Animate counters when stats section is visible
      if (entry.target.classList.contains('stats-section')) {
        animateCounters();
      }
    }
  });
}, observerOptions);

// Smooth scrolling for navigation links
function smoothScroll() {
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
}

// Parallax effect for hero section
function parallaxEffect() {
  const hero = document.querySelector('.hero');
  const shapes = document.querySelectorAll('.shape');

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    if (hero) {
      hero.style.transform = `translateY(${rate}px)`;
    }

    shapes.forEach((shape, index) => {
      const speed = 0.3 + (index * 0.1);
      shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
  });
}

// Keyboard navigation
function addKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      document.querySelector('.slide-prev').click();
    } else if (e.key === 'ArrowRight') {
      document.querySelector('.slide-next').click();
    }
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ModernSlideshow();
  smoothScroll();
  parallaxEffect();
  addKeyboardNavigation();

  // Observe elements for animations
  document.querySelectorAll('.stat-card, .video-card, .slide-content').forEach(el => {
    observer.observe(el);
  });

  // Add stagger animation to stat cards
  const statCards = document.querySelectorAll('.stat-card');
  statCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.style.animation = 'fadeInUp 0.8s ease-out forwards';
    card.style.opacity = '0';
  });

  // Add hover effects to buttons
  document.querySelectorAll('.btn, .cta-button').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'translateY(-3px)';
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translateY(0)';
    });
  });
});
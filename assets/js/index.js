// Slideshow Functionality
class ModernSlideshow {
  constructor() {
    this.slides = document.querySelectorAll('.slide');
    this.dots = document.querySelectorAll('.dot');
    this.prevBtn = document.querySelector('.slide-prev');
    this.nextBtn = document.querySelector('.slide-next');
    this.currentSlide = 0;
    this.slideInterval = null;

    this.init();
  }

  init() {
    this.showSlide(0);
    this.startAutoSlide();
    this.addEventListeners();
  }

  addEventListeners() {
    this.prevBtn.addEventListener('click', () => {
      this.previousSlide();
      this.resetAutoSlide();
    });

    this.nextBtn.addEventListener('click', () => {
      this.nextSlide();
      this.resetAutoSlide();
    });

    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.showSlide(index);
        this.resetAutoSlide();
      });
    });

    // Pause on hover
    const container = document.querySelector('.slideshow-container');
    container.addEventListener('mouseenter', () => this.pauseAutoSlide());
    container.addEventListener('mouseleave', () => this.startAutoSlide());
  }

  showSlide(index) {
    this.slides.forEach(slide => slide.classList.remove('active'));
    this.dots.forEach(dot => dot.classList.remove('active'));

    this.currentSlide = index;
    this.slides[index].classList.add('active');
    this.dots[index].classList.add('active');
  }

  nextSlide() {
    const next = (this.currentSlide + 1) % this.slides.length;
    this.showSlide(next);
  }

  previousSlide() {
    const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.showSlide(prev);
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 8000);
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

// Counter Animation
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');

  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = Math.floor(current);
    }, 16);
  });
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

// Enhanced video card interactions
function enhanceVideoCards() {
  const videoCards = document.querySelectorAll('.video-card');

  videoCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-15px) rotateX(5deg)';
      card.style.boxShadow = '0 40px 80px rgba(0, 0, 0, 0.5)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) rotateX(0deg)';
      card.style.boxShadow = 'var(--shadow)';
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
  enhanceVideoCards();
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
      btn.style.transform = 'translateY(-3px) scale(1.05)';
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translateY(0) scale(1)';
    });
  });
});
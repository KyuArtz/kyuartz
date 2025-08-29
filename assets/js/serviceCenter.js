/* Tab switching */
function showTab(event, tabName) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  // Remove active from buttons
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
  });
  // Show target
  const target = document.getElementById(tabName);
  if (target) target.classList.add('active');

  // Mark active button
  const btn = event.currentTarget || event.target;
  if (btn) {
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
  }
}

/* FAQ toggle (accordion style) */
function toggleFAQ(el) {
  const wasOpen = el.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('open');
    item.setAttribute('aria-expanded', 'false');
  });
  if (!wasOpen) {
    el.classList.add('open');
    el.setAttribute('aria-expanded', 'true');
  }
}

/* Scroll progress indicator */
window.addEventListener('scroll', () => {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const docHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  const winHeight = window.innerHeight || document.documentElement.clientHeight;
  const pct = Math.max(0, Math.min(1, scrollTop / (docHeight - winHeight)));
  bar.style.width = (pct * 100).toFixed(1) + '%';
});

/* Smooth internal anchor links */
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href');
  const target = document.querySelector(id);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

/* Debounce helper */
function debounce(fn, wait = 300) {
  let t;
  return function (...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

/* Safe highlighter (works on plain text containers we control) */
function highlight(node, term) {
  if (!term) return;
  const text = node.textContent;
  const re = new RegExp(`(${term.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')})`, 'gi');
  node.innerHTML = text.replace(re, '<span class="search-highlight">$1</span>');
}

/* Add FAQ search input with highlight */
function addSearchToFAQ() {
  const faqRoot = document.getElementById('faq');
  if (!faqRoot) return;

  const card = faqRoot.querySelector('.content-card');
  const grid = faqRoot.querySelector('.content-grid');
  if (!card || !grid) return;

  // Create search input
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Search FAQs...';
  input.className = 'faq-search';
  card.insertBefore(input, grid);

  // Ensure each h3 has a span.qtext for safe highlighting (preserve chevron icon)
  faqRoot.querySelectorAll('.faq-item h3').forEach(h3 => {
    if (!h3.querySelector('.qtext')) {
      const icon = h3.querySelector('.toggle-icon');
      const textOnly = document.createElement('span');
      textOnly.className = 'qtext';
      // capture text nodes except the icon
      const nodes = Array.from(h3.childNodes).filter(n => n !== icon);
      nodes.forEach(n => textOnly.appendChild(n));
      if (icon) {
        h3.innerHTML = ''; // clear then rebuild
        h3.appendChild(textOnly);
        h3.appendChild(icon);
      } else {
        h3.innerHTML = '';
        h3.appendChild(textOnly);
      }
    }
  });

  const handler = debounce(function () {
    const term = this.value.trim().toLowerCase();
    const items = faqRoot.querySelectorAll('.faq-item');

    items.forEach(item => {
      // reset previous highlights
      const qSpan = item.querySelector('.qtext');
      const ansP = item.querySelector('.faq-answer p');

      if (qSpan) qSpan.textContent = qSpan.textContent; // reset
      if (ansP) ansP.textContent = ansP.textContent;     // reset

      // matching logic
      const qText = qSpan ? qSpan.textContent.toLowerCase() : '';
      const aText = ansP ? ansP.textContent.toLowerCase() : '';
      const match = !term || qText.includes(term) || aText.includes(term);

      item.style.display = match ? 'block' : 'none';

      // apply highlight if needed
      if (match && term) {
        if (qSpan) highlight(qSpan, term);
        if (ansP) highlight(ansP, term);
      }
    });
  }, 150);

  input.addEventListener('input', handler);
}

/* Entrance animation via IntersectionObserver */
function addEntranceAnimation() {
  const style = document.createElement('style');
  style.textContent = `
    .fade-in-up { animation: kyuFadeInUp .6s ease-out forwards; opacity: 0; }
    @keyframes kyuFadeInUp { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: translateY(0);} }
  `;
  document.head.appendChild(style);

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('fade-in-up');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.content-card, .term-item').forEach(el => io.observe(el));
}

/* Init */
window.addEventListener('DOMContentLoaded', () => {
  addSearchToFAQ();
  addEntranceAnimation();
});

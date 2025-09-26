const comicData = {
  comic1: {
    title: "FRAGMENTS OF DECAY",
    description: `
      <p>In a future shaped by towering progress and silent conflict, the world of Terra finds itself unraveling when fragments of a celestial meteor crash through the skies. These fragments release a mysterious dust—microscopic, infectious, and alive. Exposure mutates the living into grotesque beings of alien origin, soon feared and named the <strong>Dustwrought</strong>.</p>
      
      <p>The Dustwrought are not merely infected; they are remade. Their bodies twist into inhuman forms—bone split, flesh reshaped, eyes hollowed out—driven by a primal, alien will. Some resemble beasts. Others wear the echoes of humanity like broken masks. Their presence brings terror, corruption, and decay.</p>
      
      <p>Cities crumble beneath their onslaught. Governments fall. The world splinters.</p>
      
      <p>Yet, in rare cases, the infection changes rather than consumes. These survivors—those who adapt instead of fall—become the <strong>Hollowborn</strong>. Marked by unnatural abilities and fractured minds, they walk the line between savior and monster.</p>
      
      <p>As the dust thickens and Terra teeters on the edge of extinction, the fate of humanity rests on a bitter truth: <em>To defeat the contagion, they may have to become part of it.</em></p>
    `
  },
  comic2: {
    title: "LEGEND OF THE CRYSTALIGHT",
    description: `
      <p>The Legend of the Crystalight unfolds in <strong>Eldoria</strong>, a once-majestic realm where magic thrived and diverse races lived in harmony. This fragile peace was shattered by the Great War, a cataclysm ignited by a forbidden love between the daughter of the Solaraenian God and the son of the Umbrakith.</p>
      
      <p>The war left Eldoria scarred—not just across its lands, but deep within the hearts of its people. Once-unified races turned against one another, and the world plunged into an age of mistrust, sorrow, and ruin.</p>
      
      <p>But from the ashes, hope was rekindled.</p>
      
      <p>Led by the radiant Light Empress <strong>Liliana</strong>, the ancient Solaraenians founded the Magelion Empire. At its heart—the new capital of Eldoria—a fragile unity began to take root. Under Liliana's guidance, the realm entered an era of healing and renewal.</p>
      
      <p>From beyond the veil of shadows, a new enemy stirs—one whose presence threatens not only the empire, but also the fate of the legendary artifact known as the <strong>Crystalight</strong>. Forged by Liliana and the ancient rulers of Eldoria, the Crystalight holds power beyond comprehension: capable of creating and destroying worlds... and even granting eternal life.</p>
      
      <p><em>And so the legend begins anew...</em></p>
    `
  }
};

// Filter functionality
document.addEventListener('DOMContentLoaded', function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const comicCards = document.querySelectorAll('.comic-card');

  // Add loading animation delay
  document.querySelectorAll('.loading').forEach((el, index) => {
    el.style.animationDelay = `${index * 0.2}s`;
  });

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      // Update active filter
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const category = this.getAttribute('data-category');

      comicCards.forEach(card => {
        const cardCategories = card.getAttribute('data-category').split(',');

        if (category === 'all' || cardCategories.includes(category)) {
          card.style.display = 'block';
          card.style.animation = 'slideInUp 0.6s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

// Modal functionality
function showDescription(comicId) {
  const modal = document.getElementById('comic-modal');
  const title = document.getElementById('modal-title');
  const description = document.getElementById('modal-description');

  const comic = comicData[comicId];
  if (comic) {
    title.textContent = comic.title;
    description.innerHTML = comic.description;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  const modal = document.getElementById('comic-modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('comic-modal').addEventListener('click', function (e) {
  if (e.target === this) {
    closeModal();
  }
});

// Keyboard navigation
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
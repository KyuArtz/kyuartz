document.addEventListener('DOMContentLoaded', function () {
  const categoryLinksContainer = document.getElementById('category-links');
  const slideshowContainers = Array.from(document.querySelectorAll('.slideshow-container'));

  // Use event delegation for better performance
  if (categoryLinksContainer) {
    categoryLinksContainer.addEventListener('click', function (event) {
      const link = event.target.closest('.category-link');
      if (!link) return;
      event.preventDefault();

      const category = link.getAttribute('data-category');
      slideshowContainers.forEach(slide => {
        const slideCategories = (slide.getAttribute('data-category') || '').split(',');
        slide.style.display =
          category === 'all' || slideCategories.includes(category) ? 'block' : 'none';
      });
    });
  }
});

// Comic titles and descriptions
const comicData = {
  comic1: {
    title: "FRAGMENTS OF DECAY",
    description: `In a future shaped by towering progress and silent conflict, the world of Terra finds itself unraveling when fragments of a celestial meteor crash through the skies. These fragments release a mysterious dust—microscopic, infectious, and alive. Exposure mutates the living into grotesque beings of alien origin, soon feared and named the Dustwrought.<br><br>
                  The Dustwrought are not merely infected; they are remade. Their bodies twist into inhuman forms—bone split, flesh reshaped, eyes hollowed out—driven by a primal, alien will. Some resemble beasts. Others wear the echoes of humanity like broken masks. Their presence brings terror, corruption, and decay. Cities crumble beneath their onslaught. Governments fall. The world splinters.<br><br>
                  Yet, in rare cases, the infection changes rather than consumes. These survivors—those who adapt instead of fall—become the Hollowborn. Marked by unnatural abilities and fractured minds, they walk the line between savior and monster. Their bodies bear the scars of mutation: glowing veins, eerie eyes, alien echoes in their voice. Some rise to protect what remains of humanity, others give in to the seductive pull of power.<br><br>
                  Society collapses into fragmented factions. Some worship the Hollowborn, believing them to be chosen. Others hunt them, seeing only the Dust’s corruption within. Meanwhile, war erupts—not just against the Dustwrought, but between survivors clinging to differing ideals of salvation.<br><br>
                  As the dust thickens and Terra teeters on the edge of extinction, the fate of humanity rests on a bitter truth: To defeat the contageon, they may have to become part of it.`
  },
  comic2: {
    title: "LEGEND OF THE CRYSTALIGHT",
    description: `The Legend of the Crystalight unfolds in Eldoria, a once-majestic realm where magic thrived and diverse races lived in harmony. This fragile peace was shattered by the Great War, a cataclysm ignited by a forbidden love between the daughter of the Solaraenian God and the son of the Umbrakith.<br><br>
                  The war left Eldoria scarred—not just across its lands, but deep within the hearts of its people. Once-unified races turned against one another, and the world plunged into an age of mistrust, sorrow, and ruin.<br><br>
                  But from the ashes, hope was rekindled.<br><br>
                  Led by the radiant Light Empress Liliana, the ancient Solaraenians founded the Magelion Empire. At its heart—the new capital of Eldoria—a fragile unity began to take root. Under Liliana’s guidance, the realm entered an era of healing and renewal.<br><br>
                  Yet peace is never eternal.<br><br>
                  From beyond the veil of shadows, a new enemy stirs—one whose presence threatens not only the empire, but also the fate of the legendary artifact known as the Crystalight. Forged by Liliana and the ancient rulers of Eldoria, the Crystalight holds power beyond comprehension: capable of creating and destroying worlds... and even granting eternal life.<br><br>
                  Now, as darkness spreads once more, the forgotten prophecy stirs.<br><br>
                  And so the legend begins anew...`
  }
};

function showDescription(button) {
  const comicType = button.getAttribute("data-comic");
  const comicInfo = comicData[comicType];
  if (!comicInfo) return;

  const titleElem = document.getElementById("comic-title");
  const descElem = document.getElementById("comic-description");
  const popup = document.getElementById("description-popup");

  if (titleElem && descElem && popup) {
    titleElem.innerHTML = comicInfo.title;
    descElem.innerHTML = comicInfo.description;
    popup.style.display = "block";
  }
}

function closeDescription() {
  const popup = document.getElementById("description-popup");
  if (popup) popup.style.display = "none";
}

// Optional: Close popup when clicking outside of it
window.onclick = function(event) {
  const popup = document.getElementById("description-popup");
  if (popup && event.target === popup) {
    popup.style.display = "none";
  }
};
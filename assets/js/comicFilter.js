document.addEventListener('DOMContentLoaded', function () {
  const categoryLinks = document.querySelectorAll('.category-link');
  const slideshowContainer = document.querySelectorAll('.slideshow-container');

  categoryLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      const category = this.getAttribute('data-category');

      // Filter slides based on category
      slideshowContainer.forEach(slide => {
        const slideCategories = slide.getAttribute('data-category').split(' '); // Assuming space-separated

        if (category === 'all') {
          slide.style.display = 'block'; // Show all slideshow containers
        } else {
          // Check if the slide's categories include the selected category
          if (slideCategories.includes(category)) {
            slide.style.display = 'block'; // Show if matches the category
          } else {
            slide.style.display = 'none'; // Hide if it doesn't match
          }
        }
      });
    });
  });
});

// Comic titles and descriptions
const comicData = {
  comic1: {
      title: "FRAGMENTS OF DECAY",
      description: "In a future shaped by towering progress and silent conflict, the world of Terra finds itself unraveling when fragments of a celestial meteor crash through the skies. These fragments release a mysterious dust—microscopic, infectious, and alive. Exposure mutates the living into grotesque beings of alien origin, soon feared and named the Dustwrought.\n\nThe Dustwrought are not merely infected; they are remade. Their bodies twist into inhuman forms—bone split, flesh reshaped, eyes hollowed out—driven by a primal, alien will. Some resemble beasts. Others wear the echoes of humanity like broken masks. Their presence brings terror, corruption, and decay. Cities crumble beneath their onslaught. Governments fall. The world splinters.\n\nYet, in rare cases, the infection changes rather than consumes. These survivors—those who adapt instead of fall—become the Hollowborn. Marked by unnatural abilities and fractured minds, they walk the line between savior and monster. Their bodies bear the scars of mutation: glowing veins, eerie eyes, alien echoes in their voice. Some rise to protect what remains of humanity, others give in to the seductive pull of power.\n\nSociety collapses into fragmented factions. Some worship the Hollowborn, believing them to be chosen. Others hunt them, seeing only the Dust’s corruption within. Meanwhile, war erupts—not just against the Dustwrought, but between survivors clinging to differing ideals of salvation.\n\nAs the dust thickens and Terra teeters on the edge of extinction, the fate of humanity rests on a bitter truth: To defeat the contageon, they may have to become part of it."
  },
  comic2: {
      title: "LEGEND OF THE CRYSTALIGHT",
      description: "The Legend of the Crystalight is set in Eldoria, a once-majestic realm brimming with magic, where diverse races thrived in harmony. This fragile peace was shattered by the Great War, sparked by a forbidden love between the daughter of the Solarae lord and the son of the Umbrakith.\n\nThe war left deep scars—not only on the land but also among the once-unified races of Eldoria. Divided and wounded, the realm fell into an age of mistrust and ruin. Hope returned when the ancient Solarae, led by the radiant light elven goddess Liliana Solarae, founded the Magelion Empire. From its heart—now the capital city of Eldoria—a new era of healing and unity began.\n\nYet peace, once restored, would not last forever. A mysterious new enemy has emerged from the shadows, threatening to destroy the empire and the mythical artifact known as the Crystalight. Forged by Liliana and the ancient rulers of Eldoria to save the world from extinction, the Crystalight holds unimaginable power—capable of creating and destroying entire worlds, and even granting eternal life.\n\nNow, as darkness creeps across the land once more, the legend begins anew..."
  },
 
};

function showDescription(button) {
  // Get the comic type from the data attribute
  const comicType = button.getAttribute("data-comic");
  // Get the corresponding title and description
  const comicInfo = comicData[comicType];
  // Set the title and description in the popup
  document.getElementById("comic-title").innerText = comicInfo.title;
  document.getElementById("comic-description").innerText = comicInfo.description;
  // Display the popup
  document.getElementById("description-popup").style.display = "block";
}

function closeDescription() {
  // Hide the popup
  document.getElementById("description-popup").style.display = "none";
}

// Optional: Close popup when clicking outside of it
window.onclick = function(event) {
  const popup = document.getElementById("description-popup");
  if (event.target == popup) {
      popup.style.display = "none";
  }
};
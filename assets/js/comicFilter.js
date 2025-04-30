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
      description: "In a future where humanity has achieved technological advancement, tensions simmer beneath the surface as minor conflicts arise between two factions: the Alliance and the Resistance. However, everything changes when fragments of a mysterious meteor crash into Terra, releasing a highly contagious dust that transforms living beings into terrifying hybrid creatures known as Corruptors.\n\nThese monstrous beings, mutated with alien traits, take on multiple deadly forms. Some Corruptors mysteriously gain supernatural abilities, becoming hybrids—a force with the potential to unlock the secrets of the contagion, but also a temptation that some misuse for their own gain. As the contagion spreads, society crumbles.\n\nOnce-thriving cities descend into chaos, governments collapse, and survivors turn rogue. Amid the destruction, newly formed factions arise, each with its own vision for humanity’s survival. While some factions work to restore order and unity, others embrace brutality and selfishness, leading to inhumane acts that deepen the divides.\n\nWith humanity on the brink of extinction, war erupts not only against the Corruptors but also among the survivors themselves. As new enemies emerge and darkness closes in, humanity’s last hope lies in those willing to stand together—or perish apart."
  },
  comic2: {
      title: "LEGEND OF THE CRYSTALIGHT",
      description: "The Legend of the Crystalight is set in Eldoria, a once-majestic realm brimming with magic, where diverse races thrived in harmony. This fragile peace was shattered by the Great War, sparked by a forbidden love between the daughter of the Solarae lord and the son of the Umbrakith.\n\nThe war left deep scars—not only on the land but also among the once-unified peoples of Eldoria. Divided and wounded, the realm fell into an age of mistrust and ruin. Hope returned when the ancient Solarae, led by the radiant light elven goddess Liliana Solarae, founded the Magelion Empire. From its heart—now the capital city of Eldoria—a new era of healing and unity began.\n\nYet peace, once restored, would not last forever. A mysterious new enemy has emerged from the shadows, threatening to destroy the empire and the mythical artifact known as the Crystalight. Forged by Liliana and the ancient rulers of Eldoria to save the world from extinction, the Crystalight holds unimaginable power—capable of creating and destroying entire worlds, and even granting eternal life.\n\nNow, as darkness creeps across the land once more, the legend begins anew..."
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
// Map character names to landscape and portrait background images
const characterBackgrounds = {
    elishia: {
        landscape: "url('assets/images/character-presets/elishia-cover.webp')",
        portrait: "url('assets/images/character-presets/gif/elishia.gif')"
    },
    hexxana: {
        landscape: "url('')",
        portrait: "url('')"
    },
    comingSoon: {
        landscape: "url('')",
        portrait: "url('')"
    },
    // Add more characters and their backgrounds here
};

// Track the currently selected character
let currentCharacter = null;

function updateBackground() {
    if (!currentCharacter) return;

    const isMobile = window.innerWidth <= 768;
    const backgroundType = isMobile ? 'portrait' : 'landscape';
    const characterContainer = document.querySelector('.character-container');

    // Set initial opacity to create a fade-out effect
    characterContainer.style.opacity = 0;

    // After a short delay, change the background image and fade back in
    setTimeout(() => {
        if (characterBackgrounds[currentCharacter]) {
            characterContainer.style.backgroundImage = characterBackgrounds[currentCharacter][backgroundType];
        } else {
            characterContainer.style.backgroundImage = "url('assets/images/character-presets/gif/default.gif')";
        }

        // Fade-in effect
        characterContainer.style.opacity = 1;
    }, 200); // Adjust this timing for the fade-out duration
}

// Set CSS for the transition effect on `.character-container`
const characterContainer = document.querySelector('.character-container');
characterContainer.style.transition = "opacity 0.5s ease-in-out";

// Show character information and update the main background
function showCharacterInfo(character) {
    const characterInfo = document.getElementById("character-info");
    const characterDetails = document.getElementById("character-details");

    // Set default character details
    let details = {
        name: "No character has been selected yet",
        faction:"NULL",
        role:"NULL",
        speciality:"NULL",
        birthPlace: "NULL",
        affiliation: "NULL",
        gender: "NULL",
        age: "NULL",
        height: "NULL",
        likes: "NULL",
        elementalImages: ["", ""],
        weapon: "NULL",
        abilities: "NULL",
        background: "NULL"
    };

    // Define character-specific details
    if (character === 'elishia') {
        details = {
            name: "Elishia Bluestein",
            faction:"Falcon Company",
            role:"Tactical Specialist",
            speciality:"Holo-Engineer",
            birthPlace: "Orag City",
            affiliation: "Roman Bluestein (Sibling) | Niks (Bestfriend) | Ferdinand (Commandant) |",
            gender: "Female",
            age: "17",
            height: "5'5\"",
            likes: "Lollipop | Cats | Reading | organizing |",
            dislikes: "His big brother",
            elementalImages: ["assets/images/character-presets/elements/energy.webp"],
            weapon: "Falconate Blade | Bolt Sniper",
            abilities: "Holographic Shields | Environmental Manipulation | Multi-Weapon Combat | Decoys and Illusions |",
            background: "Elishia and her mother lived a serene life in her mother's province, nestled outside the bustling city of Orag. For a year, their world was peaceful, filled with laughter and simple joys. However, a year later, her father, a visionary inventor renowned for his groundbreaking contributions to technology, decided it was time for a change. He wanted to move them to the capital city, where the prestigious university offered an educational experience far superior to what their province could provide. He also yearned to be closer to his daughter, balancing his demanding work at NanoFutureTech—a private laboratory he owned that was dedicated to pioneering future technologies for humanity. Upon their arrival in the capital, they settled into her father's old house, a place filled with memories of his past and echoes of his dreams. Elishia, now attending the university, quickly found herself at the center of attention. As the daughter of a famous scientist and a brilliant student in her own right, she was admired by her peers. Yet, despite the spotlight, Elishia craved a simple, quiet existence, far removed from the expectations that came with her lineage. But that peace shattered one fateful day. Without warning, the city descended into chaos. People began to exhibit erratic and violent behavior, transforming into grotesque creatures that emerged from the shadows. The very fabric of her life unraveled as she witnessed her parents bravely defend her, sacrificing their lives in a desperate attempt to protect her from the horrors that had befallen them. In the aftermath, Elishia was rescued by a team of special ops forces, who evacuated her to a designated safe point alongside other survivors. The trauma of losing her parents weighed heavily on her, igniting a fire within her—a determination to protect those who could not protect themselves. With her once peaceful dreams now shattered, she felt a newfound purpose. Driven by this resolve, Elishia enlisted in the military, where she honed her skills and emerged as a tactical specialist. Her intelligence and tenacity propelled her through rigorous training, earning her a coveted position within Falcon Company, a renowned unit known for their strategic operations and bravery. As Elishia now fights to reclaim her world from the clutches of chaos, she carries with her the memory of her parents and the hope of a future where peace can be restored. With every mission, she strives not only to protect lives but to honor the legacy of the family that shaped her into the warrior she has become."
        };
    } else if (character === 'hexxana') {
        details = {
            name: "Hexxana",
            faction:"Unknown",
            role:"Unknown",
            speciality:"Unknown",
            birthPlace: "Unknown",
            affiliation: "Unknown",
            gender: "Unknown",
            age: "Unknown",
            height: "Unknown",
            likes: "Unknown",
            dislikes: "Unknown",
            elementalImages: [""],
            weapon: "Unknown",
            abilities: "Unknown",
            background: "Unknown"
        };
    } else if (character === 'coming-soon') {
        details = {
            name: "Character Coming Soon",
            faction:"Unknown",
            role:"Unknown",
            speciality:"Unknown",
            birthPlace: "Unknown",
            affiliation: "Unknown",
            gender: "Unknown",
            age: "Unknown",
            height: "Unknown",
            likes: "Unknown",
            dislikes: "Unknown",
            elementalImages: [""],
            weapon: "Unknown",
            abilities: "Unknown",
            background: "Unknown"
        };
    }

    // Populate character details
    characterDetails.innerHTML = `
        <h2>${details.name}</h2>
        <div class="info-section" id="basic-info-scrollable">
            <p><strong>Faction:</strong> ${details.faction}</p>
            <p><strong>Role:</strong> ${details.role}</p>
            <p><strong>Specialty:</strong> ${details.speciality}</p>
            <p><strong>Birth Place:</strong> ${details.birthPlace}</p>
            <p><strong>Affiliation:</strong> ${details.affiliation}</p>
            <p><strong>Gender:</strong> ${details.gender}</p>
            <p><strong>Age:</strong> ${details.age}</p>
            <p><strong>Height:</strong> ${details.height}</p>
            <p><strong>Likes:</strong> ${details.likes}</p>
            <p><strong>Dislikes:</strong> ${details.dislikes}</p>
        </div>

        <div class="info-section" id="elementalPower">
            <h3>Elemental Mastery</h3>
            ${details.elementalImages.map(imgSrc => `<img src="${imgSrc}" alt="">`).join('')}
        </div>

        <div class="info-section" id="Weapon">
            <h3>Favorite Weapon</h3>
            <p>${details.weapon}</p>
        </div>

        <div class="info-section" id="abilities">
            <h3>Abilities</h3>
            <p>${details.abilities}</p>
        </div>

        <div class="info-section" id="background">
            <h3>Background</h3>
            <p>${details.background}</p>
        </div>
    `;

    // Show the character-info section
    characterInfo.style.display = "block";

    // Set the current character and update the background
    currentCharacter = character;
    updateBackground();
}

// Event listener for each card
document.querySelectorAll('.character-card').forEach(card => {
    card.addEventListener('click', (e) => {
        // Extract the character ID from the card and update currentCharacter
        const characterId = card.getAttribute('onclick').match(/'(\w+)'/)[1];
        showCharacterInfo(characterId);
    });
});

// Update background when resizing
window.addEventListener('resize', updateBackground); // Calls updateBackground on resize

// Hide character info function
function hideCharacterInfo() {
    const characterInfo = document.getElementById("character-info");
    characterInfo.style.display = "none";
    
    // Optionally reset to default background when closed
    const characterContainer = document.querySelector('.character-container');
    characterContainer.style.backgroundImage = "url('assets/images/character-presets/gif/default.gif')";
    currentCharacter = null; // Clear the current character when info is hidden
}

// Carousel functionality
let currentIndex = 0;

function calculateVisibleCards() {
    const wrapper = document.querySelector(".character-cards-wrapper");
    if (window.innerWidth > 1024) return 5;
    if (window.innerWidth > 768) return 4;
    if (window.innerWidth > 576) return 3;
    if (window.innerWidth > 400) return 2;
    return 1;
}

function updateCarousel() {
    const wrapper = document.querySelector(".character-cards-wrapper");
    const cardWidth = wrapper.children[0].offsetWidth + 10; // Include gap between cards
    wrapper.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
}

function scrollCarousel(direction) {
    const visibleCards = calculateVisibleCards();
    const wrapper = document.querySelector(".character-cards-wrapper");
    const totalCards = wrapper.children.length;

    // Adjust current index with wrapping behavior
    currentIndex = (currentIndex + direction * visibleCards + totalCards) % totalCards;

    updateCarousel();
}

// Resize handling for responsive recalculation
let resizeTimeout;

window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        currentIndex = 0; // Reset index to prevent issues with partial visibility on resize
        updateCarousel();
    }, 100);
});
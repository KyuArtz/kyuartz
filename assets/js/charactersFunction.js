// Map character names to landscape and portrait background images
const characterBackgrounds = {
    elishia: {
        landscape: "url('assets/images/character-presets/elishia-cover.webp')",
        portrait: "url('')"
    },
    hexxana: {
        landscape: "url('assets/images/character-presets/hexxana-cover.webp')",
        portrait: "url('')"
    },
    rayza: {
        landscape: "url('assets/images/character-presets/rayza-cover.webp')",
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
        affiliates: "NULL",
        gender: "NULL",
        age: "NULL",
        height: "NULL",
        likes: "NULL",
        dislikes: "NULL",
        elementalImages: ["", ""],
        weapon: "NULL",
        ability1: "NULL",
        ability2: "",
        ability3: "",
        ability4: "",
        ability5: "",
        ability6: "",
        ability7: "",
        ability8: "",
        ability9: "",
        ability10: "",
        ability11: "",
        ability12: "",
        ability13: "",
        ability14: "",
        ability15: "",
        background: "NULL"
    };

    // Define character-specific details
    if (character === 'elishia') {
        details = {
            name: "Elishia Bluestein - Falcon Elite",
            faction:"Falcon Company",
            role:"Tactical Specialist",
            speciality:"Holo-Engineer",
            birthPlace: "Orag City",
            affiliates: "Roman Bluestein (Older Brother) | Niks (Bestfriend) | Ferdinand (Commandant)",
            gender: "Female",
            age: "17 yrs.",
            height: "5'5\"",
            likes: "Lollipop | Bubblegum | Cats | Reading | Organizing",
            dislikes: "His big brother",
            elementalImages: ["assets/images/character-presets/elements/energy.webp"],
            weapon: "Falconate Blade | Bolt Sniper",
            ability1: "<strong>Holographic Shields</strong> - Create protective barriers during battles to shield herself and allies from attacks.",
            ability2: "<strong>Weapon Creation</strong> - Form weapons on the fly, adapting to different combat situations or combining elements for unique effects.",
            ability3: "<strong>Environmental Manipulation</strong> - Alter the battlefield by moving or reshaping objects, like creating obstacles for enemies or enhancing terrain for tactical advantages.",
            ability4: "<strong>Multi-Weapon Combat</strong> - Combine multiple weapons into one or create several holographic weapons at once to overwhelm opponents.",
            ability5: "<strong>Decoys and Illusions</strong> - Generate holographic duplicates of herself or objects to confuse enemies or draw their fire.",
            ability6: "",
            ability7: "",
            ability8: "",
            ability9: "",
            ability10: "",
            ability11: "",
            ability12: "",
            ability13: "",
            ability14: "",
            ability15: "",
            background: "Elishia and her mother lived a serene life in her mother's province, nestled outside the bustling city of Orag. For a year, their world was peaceful, filled with laughter and simple joys. However, a year later, her father, a visionary inventor renowned for his groundbreaking contributions to technology, decided it was time for a change. He wanted to move them to the capital city, where the prestigious university offered an educational experience far superior to what their province could provide. He also yearned to be closer to his daughter, balancing his demanding work at NanoFutureTech—a private laboratory he owned that was dedicated to pioneering future technologies for humanity. Upon their arrival in the capital, they settled into her father's old house, a place filled with memories of his past and echoes of his dreams. Elishia, now attending the university, quickly found herself at the center of attention. As the daughter of a famous scientist and a brilliant student in her own right, she was admired by her peers. Yet, despite the spotlight, Elishia craved a simple, quiet existence, far removed from the expectations that came with her lineage. But that peace shattered one fateful day. Without warning, the city descended into chaos. People began to exhibit erratic and violent behavior, transforming into grotesque creatures that emerged from the shadows. The very fabric of her life unraveled as she witnessed her parents bravely defend her, sacrificing their lives in a desperate attempt to protect her from the horrors that had befallen them. In the aftermath, Elishia was rescued by a team of special ops forces, who evacuated her to a designated safe point alongside other survivors. The trauma of losing her parents weighed heavily on her, igniting a fire within her—a determination to protect those who could not protect themselves. With her once peaceful dreams now shattered, she felt a newfound purpose. Driven by this resolve, Elishia enlisted in the military, where she honed her skills and emerged as a tactical specialist. Her intelligence and tenacity propelled her through rigorous training, earning her a coveted position within Falcon Company, a renowned unit known for their strategic operations and bravery. As Elishia now fights to reclaim her world from the clutches of chaos, she carries with her the memory of her parents and the hope of a future where peace can be restored. With every mission, she strives not only to protect lives but to honor the legacy of the family that shaped her into the warrior she has become."
        };
    } else if (character === 'hexxana') {
        details = {
            name: "Hexxana - Lone Wanderer",
            faction:"Unknown",
            role:"Dark Vanguard",
            speciality:"Umbral Enforcer",
            birthPlace: "Unknown",
            affiliates: "Unknown",
            gender: "Female",
            age: "Unknown",
            height: "5'8\"",
            likes: "Reading | Hexing | Wandering | Making Potions",
            dislikes: "Doing chores",
            elementalImages: ["assets/images/character-presets/elements/shadow.webp"],
            weapon: "Oblivion’s Edge",
            ability1: "<strong>Shadow Manipulation</strong> - Hexxana can control shadows, allowing her to create illusions, cloak herself, or even solidify shadows into physical weapons or barriers. This would add stealth and versatility to her abilities.",
            ability2: "<strong>Ethereal Phasing</strong> - Hexxana can become partially intangible, allowing her to pass through solid objects or evade attacks momentarily. This would fit well as both a defense mechanism and a way to surprise her foes.",
            ability3: "<strong>Umbral Rift</strong> -  She can summon a portal or dark energy vortex that pulls enemies in or repels them. The rift could deal damage over time, serve as an escape route, or even as a way to trap opponents.",
            ability4: "<strong>Curse Weaving</strong> - Hexxana can place curses on enemies that have lingering effects, like causing weakness, confusion, or nightmares that haunt them even after the battle ends.",
            ability5: "<strong>Dark Familiar</strong> - She could summon a dark familiar, like a spectral raven or shadow beast, which fights alongside her or scouts ahead, allowing her to control a minion that aids her in and out of combat.",
            ability6: "<strong>Void Tendrils</strong> - Hexxana summons dark, otherworldly tendrils that can attack, restrain, or drain the energy of her foes. These could extend from the ground or appear in mid-air, giving her a unique combat advantage.",
            ability7: "<strong>Spectral Sweep</strong> - Hexxana can unleash a wave of dark magic energy from her scythe that extends outward in a powerful arc, damaging enemies in a line or cone.",
            ability8: "<strong>Shadow Reaping</strong> - Hexxana channels dark energy through her scythe, allowing her to strike from a distance by sending arcs of dark magic in the shape of scythe slashes. The ranged attacks could drain vitality or temporarily weaken enemies.",
            ability9: "<strong>Abyssal Mark</strong> - A curse-like ability where her scythe leaves a “mark” on an enemy upon hitting them. Marked enemies are more susceptible to her magic attacks, increasing the damage they take from her dark spells or making them vulnerable to curses.",
            ability10: "<strong>Void Step</strong> - this lets her teleport short distances, moving through shadows or dark matter, allowing her to close gaps or evade attacks while disorienting her opponents.",
            ability11: "<strong>Demonic Form: Reaper’s Wrath</strong> -  In her demon form, her scythe becomes an extension of her power.",
            ability12: "",
            ability13: "",
            ability14: "",
            ability15: "",
            background: "Hexxana’s origins are shrouded in mystery; no one knows where she came from, and she shares little about her past. She appears as a spectral figure in the dead of night, often accompanied by an eerie, shimmering aurora. Known to sometimes intervene in dire moments, she aids those in danger but vanishes as quickly as she arrives, leaving only whispers and rumors in her wake. Hexxana is a lone wanderer, loyal to no one but herself. She drifts through cities and forgotten landmarks, guided by her own enigmatic purpose. Her neutrality is unshakable, and she is a silent guardian—though only when it suits her will."
        };
    } else if (character === 'rayza') {
        details = {
            name: "Rayza - Blade Master",
            faction:"Zephyra Vale",
            role:"Windborne Assassin",
            speciality:"Mist Dancer",
            birthPlace: "Hidden Mist Valley",
            affiliates: "Ren (Older Brother)",
            gender: "Female",
            age: "19 yrs.",
            height: "5'7\"",
            likes: "Training | Cute Stuff | Sweets",
            dislikes: "Lazy People",
            elementalImages: ["assets/images/character-presets/elements/air.webp"],
            weapon: "Tempest Bloom",
            ability1: "<strong>Wind Manipulation</strong> - Using her enchanted fan, she can control and shape the wind around her, creating anything from gentle breezes to fierce gusts that can knock back enemies.",
            ability2: "<strong>Mist Veil</strong> - Allows her to create a dense fog or mist around her, enhancing her stealth and making her harder to detect or target in battle.",
            ability3: "<strong>Wind Blades</strong> - She can send sharp, slicing gusts of wind towards her enemies by swinging her fan, turning the air itself into a weapon.",
            ability4: "<strong>Dance of the Tempest</strong> - A graceful, deadly series of moves that combines her fan with powerful wind attacks, unleashing a storm of slashes in a controlled radius around her.",
            ability5: "<strong>Petal Storm</strong> - She can summon a flurry of petals carried by the wind to obscure her movements or distract her foes, providing both offense and defense in combat.",
            ability6: "<strong>Silent Step</strong> - Her movement becomes almost undetectable as the wind silences her steps, making it easier for her to approach targets unseen.",
            ability7: "<strong>Blood Rage</strong> - Rayza taps into a hidden power, enveloping herself in a red aura that boosts her strength, speed, and resilience. While in this state, she fights with fierce, unpredictable energy, but the power drains her, leaving her exhausted once it fades.",
            ability8: "",
            ability9: "",
            ability10: "",
            ability11: "",
            ability12: "",
            ability13: "",
            ability14: "",
            ability15: "",
            background: "Rayza was born into a prestigious family celebrated for their mastery in combat, especially in the art of swordsmanship. Growing up, she idolized her father and older brother, Ren, both renowned for their skill and strength. She longed to join their ranks, to prove her worth as a warrior. But her father, bound by tradition and protective instincts, refused to train her, believing the path of a swordsman was not meant for her. His decision only fueled her resolve. Determined to show her father that strength was not bound by tradition or gender, Rayza began to train in secret. Her brother, who recognized her passion and potential, became her silent ally, offering tips and guidance away from their father's watchful eyes. When news of a prestigious tournament spread through the land, Rayza saw her chance. She entered the competition in disguise, hiding her face to avoid recognition. Her heart pounded as she faced each opponent, her confidence growing with every victory. One by one, she defeated nine challengers, advancing to the final round. To her shock, her last opponent was none other than Ren. She froze, realizing her secret could be exposed, but her brother’s smirk and knowing glance told her he had recognized her long before. He remained silent, signaling his respect for her determination. Rayza steeled herself for the fight, determined to prove herself not just to her brother but to everyone who doubted her. The duel was fierce and unrelenting, each sibling pushing the other to their limits. Rayza fought with all her heart, but Ren’s experience and skill proved formidable. As she faced the brink of defeat, something deep within her awakened—a latent power passed down through her bloodline. Enveloped in a red aura, Rayza entered a 'blood rage,' her strength and speed heightened to extraordinary levels. In the stands, her father’s face changed from shock to realization as he recognized the aura—and his daughter. His heart warred between pride and fear, but the tournament rules demanded that the match continue. The crowd watched in awe as the siblings clashed in a battle that seemed almost otherworldly, their bond and rivalry displayed in every strike. After an hour of grueling combat, Rayza finally succumbed to exhaustion, defeated by her brother but not broken. She awoke to find herself at home, her father and Ren beside her. Before she could explain herself, her father placed a hand on her shoulder, his expression a mix of pride and sadness. “I was only trying to protect you,” he admitted, his voice heavy with emotion. “You remind me so much of your mother. But watching you fight, I realize now—I was wrong. I won't always be here to shield you, and perhaps that isn’t what you need. Keep growing, Rayza. Become strong, but also wise. And, Ren,” he added, turning to his son, “look after your sister.” In that moment, Rayza felt the acceptance she had longed for. The family shared a tearful embrace, a silent promise binding them closer than ever. From that day on, Rayza’s path was clear—not just to prove her worth but to carry forward the strength and love her family had instilled in her."
        };
    } else if (character === 'coming-soon') {
        details = {
            name: "Character Coming Soon",
            faction:"",
            role:"",
            speciality:"",
            birthPlace: "",
            affiliates: "",
            gender: "",
            age: "",
            height: "",
            likes: "",
            dislikes: "",
            elementalImages: [""],
            weapon: "",
            ability1: "",
            ability2: "",
            ability3: "",
            ability4: "",
            ability5: "",
            ability6: "",
            ability7: "",
            ability8: "",
            ability9: "",
            ability10: "",
            ability11: "",
            ability12: "",
            ability13: "",
            ability14: "",
            ability15: "",
            background: ""
        };
    }

    // Populate character details
    characterDetails.innerHTML = `
        <h2>${details.name}</h2>
        <div class="character-info-scrollable">
        <div class="info-section" id="basic-info-scrollable">
            <p><strong>Faction:</strong> ${details.faction}</p>
            <p><strong>Role:</strong> ${details.role}</p>
            <p><strong>Specialty:</strong> ${details.speciality}</p>
            <p><strong>Birth Place:</strong> ${details.birthPlace}</p>
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

        <div class="info-section" id="weapon">
            <h3>Favorite Weapon</h3>
            <p>${details.weapon}</p>
        </div>

        <div class="info-section" id="abilities">
            <h3>Abilities</h3>
            <div id="abilities-scrollable">
            <p>${details.ability1}</p>
            <p>${details.ability2}</p>
            <p>${details.ability3}</p>
            <p>${details.ability4}</p>
            <p>${details.ability5}</p>
            <p>${details.ability6}</p>
            <p>${details.ability7}</p>
            <p>${details.ability8}</p>
            <p>${details.ability9}</p>
            <p>${details.ability10}</p>
            <p>${details.ability11}</p>
            <p>${details.ability12}</p>
            <p>${details.ability13}</p>
            <p>${details.ability14}</p>
            <p>${details.ability15}</p>
            </div>
        </div>

        <div class="info-section" id="affiliates">
            <h3>Affiliates</h3>
            <p>${details.affiliates}</p>
        </div>

        <div class="info-section" id="background">
            <h3>Background</h3>
            <p>${details.background}</p>
        </div>
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
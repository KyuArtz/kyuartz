let currentCharacter = null;
let charactersData = null;

// =====================
// Character Backgrounds
// =====================
const characterBackgrounds = {};

// =====================
// Background Handling
// =====================
function updateBackground() {
    if (!currentCharacter) return;
    const isMobile = window.innerWidth <= 768;
    const backgroundType = isMobile ? 'portrait' : 'landscape';
    const characterContainer = document.querySelector('.character-background');
    if (!characterContainer) return;

    characterContainer.style.transition = "opacity 0.3s ease-out";
    characterContainer.style.opacity = 0;

    setTimeout(() => {
        const bg = characterBackgrounds[currentCharacter]?.[backgroundType]
            ?? "url('assets/images/bg/default.webp')";
        characterContainer.style.backgroundImage = bg;
        characterContainer.style.transition = "opacity 0.5s ease";
        characterContainer.style.opacity = 1;
    }, 300);
}

// Set initial CSS transition for background
(function setInitialBackgroundTransition() {
    const characterContainer = document.querySelector('.character-background');
    if (characterContainer) {
        characterContainer.style.transition = "opacity 0.5s ease";
    }
})();

// =====================
// Character Info Logic
// =====================
function loadCharacterData() {
    if (charactersData) return Promise.resolve(charactersData);
    return fetch('assets/data/characters.json', { cache: "no-cache" })
        .then(r => {
            if (!r.ok) throw new Error('Failed to load characters.json');
            return r.json();
        })
        .then(json => {
            // optional: merge backgrounds from JSON into existing characterBackgrounds
            if (json.backgrounds) {
                Object.keys(json.backgrounds).forEach(k => {
                    characterBackgrounds[k] = json.backgrounds[k];
                });
            }
            charactersData = json.characters || {};
            return charactersData;
        })
        .catch(err => {
            console.error('Error loading character data:', err);
            charactersData = {};
            return charactersData;
        });
}

// update getCharacterDetails to use external data
function getCharacterDetails(character) {
    // if data not yet loaded, load then recall
    if (!charactersData) {
        loadCharacterData().then(() => getCharacterDetails(character));
        return;
    }

    const card = document.querySelector(`.character-card[data-character="${character}"]`);
    const accent = card ? card.dataset.accent : null;
    const characterInfo = document.getElementById("character-info");
    const characterOverlay = document.querySelector('.character-overlay');

    if (accent) {
        if (characterInfo) characterInfo.style.setProperty('--accent', accent);
        if (characterOverlay) characterOverlay.style.setProperty('--accent', accent);
    }

    const characterDetailsEl = document.getElementById("character-details");
    if (!characterInfo || !characterDetailsEl) return;

    characterInfo.classList.add('fading');
    setTimeout(() => characterInfo.classList.remove('fading'), 300);

    // default fallback object (same shape as JSON entries)
    const defaultDetails = {
        name: "Info Not Available Yet",
        race: "<info>Unknown</info>",
        gender: "<info>Unknown</info>",
        height: "<info>Unknown</info>",
        homeland: "<info>Unknown</info>",
        faction: "<info>Unknown</info>",
        role: "<info>Unknown</info>",
        occupation: "<info>Unknown</info>",
        affiliates: "<info><i class='fas fa-users'></i> Unknown</info>",
        elementalImages: ["assets/images/character-presets/roles/question.webp"],
        likes: "<info><i class='fas fa-check'></i> Unknown</info>",
        dislikes: "<info><i class='fas fa-times'></i> Unknown</info>",
        weapon: "<info><i class='fas fa-heart'></i> Unknown</info>",
        ability1: "<strong><i class='fas fa-star'></i> Ability 1</strong> <p>Description coming soon.</p>",
        ability2: "<strong><i class='fas fa-star'></i> Ability 2</strong> <p>Description coming soon.</p>",
        ability3: "<strong><i class='fas fa-star'></i> Ability 3</strong> <p>Description coming soon.</p>",
        ability4: "<strong><i class='fas fa-star'></i> Ability 4</strong> <p>Description coming soon.</p>",
        ability5: "<strong><i class='fas fa-star'></i> Ability 5</strong> <p>Description coming soon.</p>",
        ability6: "<strong><i class='fas fa-star'></i> Ability 6</strong> <p>Description coming soon.</p>",
        background: "<p><i class='fas fa-book'></i> Background details coming soon.</p>"
    };

    const details = charactersData[character] || defaultDetails;

    // existing render helpers can remain unchanged and will use 'details' object
    characterDetailsEl.innerHTML = renderCharacterDetails(details);

    characterInfo.style.display = "block";
    currentCharacter = character;
    updateBackground();
}

// --- replaced startup logic: ensure default info & background remain blank/default until user selects a character ---
document.addEventListener('DOMContentLoaded', () => {
    // apply per-card accent CSS vars (does not change the info panel)
    applyAccentColors();

    const characterInfo = document.getElementById("character-info");
    const characterDetailsEl = document.getElementById("character-details");
    const characterContainer = document.querySelector('.character-background');

    // Ensure the info panel is hidden / blank on first load
    if (characterInfo) {
        characterInfo.style.display = "none";
        characterInfo.style.removeProperty('--accent');
    }
    if (characterDetailsEl) {
        characterDetailsEl.innerHTML = ""; // keep it blank until user selects a card
    }

    // Always use the default background until a character is selected
    if (characterContainer) {
        characterContainer.style.backgroundImage = characterBackgrounds.comingSoon.landscape || "url('assets/images/bg/default.webp')";
    }

    // Load JSON so data is ready for clicks later, but DO NOT auto-select the first card
    loadCharacterData().catch(() => {
        // ignore — keep blank/default UI if JSON fails
    });
});

// =====================
// Character Card Events
// =====================
function resetCharacterCardStates() {
    document.querySelectorAll('.character-card').forEach(card => {
        card.classList.remove('clicked');
        card.setAttribute('aria-pressed', 'false');
    });
}

function attachCharacterCardListeners() {
    const wrapper = document.querySelector('.character-cards-wrapper');
    if (!wrapper) return;
    wrapper.addEventListener('click', function (e) {
        const card = e.target.closest('.character-card');
        if (card) {
            resetCharacterCardStates();
            card.classList.add('clicked');
            card.setAttribute('aria-pressed', 'true');
            getCharacterDetails(card.dataset.character);
        }
    });
    wrapper.addEventListener('keydown', function (e) {
        if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('character-card')) {
            e.preventDefault();
            e.target.click();
        }
    });
    // Set ARIA attributes once
    document.querySelectorAll('.character-card').forEach(card => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-pressed', 'false');
        if (card.dataset.character) {
            card.setAttribute('aria-label', `Select ${card.dataset.character}`);
        }
    });
}

// Combined filter helper: role button + faction checkboxes
function applyCombinedFilters() {
    // hide details when filtering
    hideCharacterInfo();

    // get active role/category filter
    const activeBtn = document.querySelector('.filter-character button.active-filter');
    const activeRole = (activeBtn && (activeBtn.dataset.category || 'all')) ? (activeBtn.dataset.category || 'all').toString().trim().toLowerCase() : 'all';

    // get checked factions
    const checkboxes = Array.from(document.querySelectorAll('.faction input[type="checkbox"]'));
    const checkedFactions = checkboxes.filter(cb => cb.checked).map(cb => (cb.id || cb.value || '').toString().trim().toLowerCase()).filter(Boolean);
    const anyFactionChecked = checkedFactions.length > 0;

    document.querySelectorAll('.character-card').forEach(card => {
        const cardRoles = (card.dataset.category || '').split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
        const cardFactions = (card.dataset.faction || '').split(',').map(s => s.trim().toLowerCase()).filter(Boolean);

        const roleMatch = (activeRole === 'all') || cardRoles.includes(activeRole);
        const factionMatch = !anyFactionChecked || cardFactions.some(g => checkedFactions.includes(g));

        const shouldShow = roleMatch && factionMatch;

        if (shouldShow) {
            card.style.display = '';
            requestAnimationFrame(() => card.classList.remove('card-hidden'));
        } else {
            card.classList.add('card-hidden');
            setTimeout(() => { card.style.display = 'none'; }, 300);
        }
    });

    // trigger layout update for carousel
    window.dispatchEvent(new Event('resize'));
}

// Replace attachFilterListeners to use combined logic
function attachFilterListeners() {
    document.querySelectorAll('.filter-character button').forEach(filterBtn => {
        filterBtn.addEventListener('click', function (e) {
            e.preventDefault();
            // --- Active indicator logic ---
            document.querySelectorAll('.filter-character button').forEach(btn => btn.classList.remove('active-filter'));
            this.classList.add('active-filter');
            // --- End active indicator logic ---

            // Apply combined filters (role + faction)
            applyCombinedFilters();
        });
    });

    // Optionally, set the first filter as active on load
    const firstFilter = document.querySelector('.filter-character button[data-category="all"]');
    if (firstFilter) firstFilter.classList.add('active-filter');
}

// Update faction checkbox listener to call combined logic
function attachFactionCheckboxListeners() {
    const checkboxes = Array.from(document.querySelectorAll('.faction input[type="checkbox"]'));
    if (!checkboxes.length) return;

    function onChange() {
        applyCombinedFilters();
    }

    checkboxes.forEach(cb => {
        cb.addEventListener('change', onChange);
        // make keyboard accessible
        cb.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                cb.checked = !cb.checked;
                onChange();
            }
        });
    });
}

// Initial setup
attachCharacterCardListeners();
attachFilterListeners();
attachFactionCheckboxListeners();

// Event delegation for card clicks (for dynamically added cards)
document.querySelector('.character-cards-wrapper').addEventListener('click', function (e) {
    const card = e.target.closest('.character-card');
    if (card) {
        resetCharacterCardStates();
        card.classList.add('clicked');
        card.setAttribute('aria-pressed', 'true');
        getCharacterDetails(card.dataset.character);
    }
});

// Update background on window resize
function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), delay);
    };
}

window.addEventListener('resize', debounce(updateBackground, 100));

// =====================
// Hide/Show Character Info
// =====================
function hideCharacterInfo() {
    const characterInfo = document.getElementById("character-info");
    const characterDetails = document.getElementById("character-details");
    const characterOverlay = document.querySelector('.character-overlay');
    if (characterInfo) {
        characterInfo.style.display = "none";
        characterInfo.style.removeProperty('--accent');
    }
    if (characterDetails) {
        characterDetails.innerHTML = "";
    }
    if (characterOverlay) {
        characterOverlay.style.removeProperty('--accent');
    }
    const characterContainer = document.querySelector('.character-background');
    if (characterContainer) {
        characterContainer.style.backgroundImage = "url('assets/images/bg/default.webp')";
    }
    resetCharacterCardStates();
    currentCharacter = null;
}

// =====================
// Carousel Logic
// =====================
(function () {
    let currentIndex = 0;
    let wrapper = null;
    let container = null;
    const GAP = 10;

    function getVisibleCards() {
        return Array.from(wrapper.children).filter(card => card.style.display !== 'none');
    }

    function calculateVisibleCards() {
        if (!container || !wrapper) return 1;
        const containerWidth = container.offsetWidth;
        const visibleCards = getVisibleCards();
        if (!visibleCards.length) return 1;
        const cardWidth = visibleCards[0].offsetWidth + GAP;
        return Math.max(1, Math.floor(containerWidth / cardWidth));
    }

    function updateCarousel() {
        if (!wrapper) return;
        const visibleCards = getVisibleCards();
        if (!visibleCards.length) return;
        const visibleCount = calculateVisibleCards();
        const maxIndex = Math.max(0, visibleCards.length - visibleCount);

        // Clamp currentIndex
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        if (currentIndex < 0) currentIndex = 0;

        const cardWidth = visibleCards[0].offsetWidth + GAP;
        const offset = cardWidth * currentIndex;
        wrapper.style.transform = `translateX(-${offset}px)`;
    }

    function scrollCarousel(direction) {
        if (!wrapper) return;
        const visibleCards = getVisibleCards();
        const visibleCount = calculateVisibleCards();
        const maxIndex = Math.max(0, visibleCards.length - visibleCount);

        if (visibleCards.length <= visibleCount) return;

        currentIndex += direction * visibleCount;
        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        updateCarousel();
    }

    let resizeTimeout;
    function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            currentIndex = 0;
            updateCarousel();
        }, 100);
    }

    window.scrollCarousel = scrollCarousel;

    function initCarousel() {
        wrapper = document.querySelector(".character-cards-wrapper");
        container = wrapper?.parentElement;
        if (!wrapper || !wrapper.children.length) return;
        updateCarousel();
        window.addEventListener("resize", handleResize);
    }

    // When filtering, reset carousel to first visible card
    function patchFilterButtons() {
        document.querySelectorAll('.filter-character button').forEach(filterBtn => {
            filterBtn.addEventListener('click', function (e) {
                e.preventDefault();
                // Use the shared combined filter so carousel sees the same visible set
                applyCombinedFilters();
                currentIndex = 0;
                updateCarousel();
            });
        });
        // Also ensure faction changes reset carousel
        const factionBoxes = Array.from(document.querySelectorAll('.faction input[type="checkbox"]'));
        factionBoxes.forEach(cb => cb.addEventListener('change', () => {
            currentIndex = 0;
            updateCarousel();
        }));
    }

    document.addEventListener("DOMContentLoaded", () => {
        initCarousel();
        patchFilterButtons();
    });
})();

function applyAccentColors() {
    document.querySelectorAll('.character-card').forEach(card => {
        const accent = card.dataset.accent;
        if (accent) {
            card.style.setProperty('--accent', accent);
        }
    });
}

// Call this after cards are rendered or on DOMContentLoaded
applyAccentColors();

function renderCharacterDetails(details = {}) {
    const d = details || {};
    const elementalImgs = (d.elementalImages || [])
        .map(src => `<img src="${src}" alt="" title="Element">`)
        .join('') || `<img src="assets/images/character-presets/roles/question.webp" alt="" title="Unknown">`;

    const abilities = ['ability1', 'ability2', 'ability3', 'ability4', 'ability5', 'ability6']
        .map(k => d[k] ? `<div class="ability">${d[k]}</div>` : '')
        .join('');

    return `
        <h2>${d.name || 'Info Not Available Yet'}</h2>

        <div class="elemental-section" id="elemental">
            <h3>Elemental Mastery</h3>
            ${elementalImgs}
        </div>

        <div class="character-info-wrapper">
            <div class="character-info-scrollable">
                <div class="info-section" id="basic-info-scrollable">
                    <h3>Basic Information</h3>
                    <content><strong><i class="fas fa-user"></i> Race:</strong> ${d.race || ''}</content>
                    <content><strong><i class="fas fa-venus-mars"></i> Gender:</strong> ${d.gender || ''}</content>
                    <content><strong><i class="fas fa-ruler-vertical"></i> Height:</strong> ${d.height || ''}</content>
                    <content><strong><i class="fas fa-globe"></i> Homeland:</strong> ${d.homeland || ''}</content>
                    <content><strong><i class="fas fa-shield-alt"></i> Faction:</strong> ${d.faction || ''}</content>
                    <content><strong><i class="fas fa-crown"></i> Role:</strong> ${d.role || ''}</content>
                    <content><strong><i class="fas fa-briefcase"></i> Occupation:</strong> ${d.occupation || ''}</content>
                </div>

                <div class="info-section" id="abilities">
                    <h3>Abilities</h3>
                    <content>${abilities}</content>
                </div>

                <div class="info-section" id="weapon">
                    <h3>Main Weapon</h3>
                    <content>${d.weapon || ''}</content>
                </div>

                <div class="info-section" id="affiliates">
                    <h3>Affiliates</h3>
                    <content>${d.affiliates || ''}</content>
                </div>

                <div class="info-section" id="likes">
                    <h3>Likes</h3>
                    <content>${d.likes || ''}</content>
                </div>

                <div class="info-section" id="dislikes">
                    <h3>Dislikes</h3>
                    <content>${d.dislikes || ''}</content>
                </div>

                <div class="info-section" id="background">
                    <h3>Background</h3>
                    ${d.background || ''}
                </div>
            </div>
        </div>
    `;
}

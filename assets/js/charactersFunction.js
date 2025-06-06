// =====================
// Character Backgrounds
// =====================
const characterBackgrounds = {
    comingSoon: { landscape: "url('assets/images/character-presets/cover/default.gif')", portrait: "url('assets/images/character-presets/cover/default.gif')" },
    elishia: { landscape: "url('assets/images/character-presets/cover/elishia-cover.jpg')", portrait: "url('assets/images/character-presets/cover/sample.jpg')" },
    hexxana: { landscape: "url('assets/images/character-presets/cover/hexxana-cover.jpg')", portrait: "url('assets/images/character-presets/cover/sample.jpg')" },
    ren: { landscape: "url('assets/images/character-presets/cover/ren-cover.jpg')", portrait: "url('assets/images/character-presets/cover/sample.jpg')" },
    rayza: { landscape: "url('assets/images/character-presets/cover/rayza-cover.jpg')", portrait: "url('assets/images/character-presets/cover/sample.jpg')" },
    liliana: { landscape: "url('assets/images/character-presets/cover/liliana-cover.jpg')", portrait: "url('assets/images/character-presets/cover/sample.jpg')" },
    blessica: { landscape: "url('assets/images/character-presets/cover/blessica-cover.jpg')", portrait: "url('assets/images/character-presets/cover/sample.jpg')" },
    lunara: { landscape: "url('assets/images/character-presets/cover/lunara-cover.jpg')", portrait: "url('assets/images/character-presets/cover/sample.jpg')" },
    floribeth: { landscape: "url('assets/images/character-presets/cover/floribeth-cover.jpg')", portrait: "url('assets/images/character-presets/cover/sample.jpg')" },
    shelain: { landscape: "url('assets/images/character-presets/cover/shelain-cover.jpg')", portrait: "url('assets/images/character-presets/cover/sample.jpg')" },
    arzhel: { landscape: "url('assets/images/character-presets/cover/arzhel-cover.jpg')", portrait: "url('assets/images/character-presets/cover/sample.jpg')" },
    feya: { landscape: "url('assets/images/character-presets/cover/feya-cover.jpg')", portrait: "url('assets/images/character-presets/cover/sample.jpg')" },
};

let currentCharacter = null;

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
            ?? "url('assets/images/character-presets/cover/default.gif')";
        characterContainer.style.backgroundImage = bg;
        characterContainer.style.transition = "opacity 0.5s ease-in";
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
function getCharacterDetails(character) {
    const card = document.querySelector(`.character-card[data-character="${character}"]`);
    const accent = card ? card.dataset.accent : null;
    const characterInfo = document.getElementById("character-info");
    if (accent && characterInfo) {
        characterInfo.style.setProperty('--accent', accent);
    }

    const characterDetails = document.getElementById("character-details");
    if (!characterInfo || !characterDetails) return;

    characterInfo.classList.add('fading');
    setTimeout(() => characterInfo.classList.remove('fading'), 300);

    let details = {
        name: "Info Not Available Yet",
        race: "<info>Unknown</info>",
        gender: "<info>Unknown</info>",
        height: "<info>Unknown</info>",
        homeland: "<info>Unknown</info>",
        faction: "<info>Unknown</info>",
        role: "<info>Unknown</info>",
        occupation: "<info>Unknown</info>",
        affiliates: "<info><i class='fas fa-users'></i> Unknown</info>",
        elementalImages: [
        "assets/images/character-presets/roles/question.webp"
        ],
        likes: "<info><i class='fas fa-check'></i> Unknown</info>",
        dislikes: "<info><i class='fas fa-times'></i> Unknown</info>",
        weapon: "<info><i class='fas fa-heart'></i> Unknown</info>",
        ability1: "<info><i class='fas fa-star'></i> Ability 1</info><p>Description coming soon.",
        ability2: "<info><i class='fas fa-star'></i> Ability 2</info><p>Description coming soon.",
        ability3: "<info><i class='fas fa-star'></i> Ability 3</info><p>Description coming soon.",
        ability4: "<info><i class='fas fa-star'></i> Ability 4</info><p>Description coming soon.",
        ability5: "<info><i class='fas fa-star'></i> Ability 5</info><p>Description coming soon.",
        ability6: "<info><i class='fas fa-star'></i> Ability 6</info><p>Description coming soon.",
        background: "<info><i class='fas fa-book'></i> Background details coming soon.</info>"
    };

    if (character === 'elishia') {
        details = {
            name: "Elishia Bluestein",
            race: "<info>Human</info>",
            gender: "<info>Female</info>",
            height: "<info>5'5\" ft / 165.1 cm</info>",
            homeland: "<info>Orag City, Zone 3</info>",
            faction: "<info>Falconite</info>",
            role: "<info>Versatile</info>",
            occupation: "<info>Tactical Specialist</info>",
            affiliates: "<info><i class='fas fa-users'></i> Roman Bluestein (Older Brother)</info> <info><i class='fas fa-users'></i> Nicks (Bestfriend)</info> <info><i class='fas fa-users'></i> Zackry (Commandant)</info> <info><i class='fas fa-users'></i> Evalete (Squadmate)</info> <info><i class='fas fa-users'></i> Zenki (Squadmate)</info> <info><i class='fas fa-users'></i> Jazen (Squadmate)</info>",
            elementalImages: [
            "assets/images/character-presets/elements/energy.webp"
            ],
            likes: "<info><i class='fas fa-check'></i> Music</info> <info><i class='fas fa-check'></i> Lollipops & Bubblegum</info> <info><i class='fas fa-check'></i> Cats</info> <info><i class='fas fa-check'></i> Reading</info> <info><i class='fas fa-check'></i> Organizing</info> <info><i class='fas fa-check'></i> Hover Bikes</info> <info><i class='fas fa-check'></i> Tinkering with Tech</info>",
            dislikes: "<info><i class='fas fa-times'></i> Dustwrought</info> <info><i class='fas fa-times'></i> Hollowborn</info> <info><i class='fas fa-times'></i> Her Older Brother</info> <info><i class='fas fa-times'></i> Disorder & Chaos</info> <info><i class='fas fa-times'></i> Wasting Time</info> <info><i class='fas fa-times'></i> Arrogant People</info>",
            weapon: "<info><i class='fas fa-heart'></i> Falconate Blade</info> <info><i class='fas fa-heart'></i> Dual Gun</info>",
            ability1: "<info><i class='fas fa-star'></i> Holographic Shields</info><p>Projects sturdy, translucent energy barriers that absorb incoming damage. These shields can be cast around allies or positioned tactically to control the flow of battle.</p>",
            ability2: "<info><i class='fas fa-bolt'></i> Weapon Creation</info><p>Constructs energy-based weapons on demand, crafted from her imagination and adapted to any combat situation. Weapons can be fused for unique hybrid effects.</p>",
            ability3: "<info><i class='fas fa-cubes'></i> Environmental Manipulation</info><p>Alters the terrain using advanced holographic constructs, creating cover, barricades, or traps. A tactical edge that turns the battlefield into her playground.</p>",
            ability4: "<info><i class='fas fa-crosshairs'></i> Multi-Weapon Combat</info><p>Wields multiple energy weapons simultaneously with precision. Switches seamlessly between melee and ranged forms to overwhelm her opponents.</p>",
            ability5: "<info><i class='fas fa-clone'></i> Decoys and Illusions</info><p>Generates realistic holographic doubles of herself or objects to mislead enemies, draw fire, or confuse trackers during stealth operations.</p>",
            ability6: "<info><i class='fas fa-microchip'></i> Tactical Override</info><p>Enhances her neural link with battlefield drones or systems, temporarily increasing her reaction time and precision while disrupting enemy tech-based abilities.</p>",
            background: [
            "Elishia spent the first years of her life in a serene province outside the bustling city of Orag, where she lived with her mother—a renowned biotech expert researching a mysterious new disease quietly spreading across the region. Their world, though modest, overflowed with warmth, laughter, and an unbreakable bond between mother and daughter.<br><br>",
            "After a year of peace, everything changed. Her father, a visionary inventor and the mind behind NanoFutureTech—a pioneering private lab pushing the boundaries of human advancement—decided to reunite the family in the capital. He sought better educational opportunities for Elishia at the prestigious university and wanted to personally monitor the rare disease she carried—an unintended result of his past experiments.<br><br>",
            "The family relocated to his old residence in the capital, a house filled with relics of invention and echoes of long-forgotten ambitions. As Elishia began her university life, she quickly drew attention. Her brilliance, matched with her lineage as the daughter of two esteemed scientists, earned her admiration among her peers. But beneath the spotlight, Elishia longed for the quiet days of the province—days untouched by expectation or legacy.<br><br>",
            "That peace was shattered without warning.<br><br>",
            "The city spiraled into chaos. People transformed into twisted, violent abominations—creatures born of the spreading plague. In the midst of the horror, her parents made the ultimate sacrifice to protect her. Elishia was pulled from the ruins by a special ops unit, evacuated to a survivor safe zone. The trauma of loss burned into her soul—but so did a purpose.<br><br>",
            "No longer the quiet dreamer, Elishia took up arms.<br><br>",
            "Driven by the memory of her parents and fueled by a need to protect others from suffering the same fate, she enlisted in the military. Through relentless training and unwavering focus, she rose quickly—earning her place as a Falconite Agent within Falcon Company, an elite tactical unit known for precision, courage, and adaptability in high-risk zones.<br><br>",
            "Now a hardened tactical specialist, Elishia fights not just for survival, but to restore what was lost—and to ensure no one else is left unguarded in the face of a crumbling world. And though the world crumbles around her, Elishia fights on—proof that even in the ashes of decay, purpose can still burn bright."
            ].join("")
        };
    } else if (character === 'hexxana') {
        details = {
            name: "Hexxana",
            race: "<info>Unknown</info>",
            gender: "<info>Female</info>",
            height: "<info>5'7\" ft / 170.2 cm</info>",
            homeland: "<info>Unknown</info>",
            faction: "<info>None</info>",
            role: "<info>Mage</info> <info>Warrior</info>",
            occupation: "<info>None</info>",
            affiliates: "<info><i class='fas fa-users'></i> Unknown</info>",
            elementalImages: [
            "assets/images/character-presets/elements/shadow.webp"
            ],
            likes: "<info><i class='fas fa-check'></i> Grimoire</info> <info><i class='fas fa-check'></i> Hexing</info> <info><i class='fas fa-check'></i> Wandering</info> <info><i class='fas fa-check'></i> Making Potions</info> <info><i class='fas fa-check'></i> Silence & Solitude</info> <info><i class='fas fa-check'></i> Eclipses & Starry Nights</info> <info><i class='fas fa-check'></i> Rare Artifacts</info>",
            dislikes: "<info><i class='fas fa-times'></i> Doing Chores</info> <info><i class='fas fa-times'></i> Loud, Noisy Places</info> <info><i class='fas fa-times'></i> Being Controlled</info> <info><i class='fas fa-times'></i> Weak-willed People</info> <info><i class='fas fa-times'></i> Uninvited Company</info>",
            weapon: "<info><i class='fas fa-heart'></i> Oblivion’s Edge</info>",
            ability1: "<info><i class='fas fa-mask'></i> Shadow Manipulation</info><p>Bends shadows to her will, forming them into weapons, cloaks, or illusions. These ever-shifting forms blur the line between reality and nightmare.</p>",
            ability2: "<info><i class='fas fa-circle-notch'></i> Umbral Rift</info><p>Opens a swirling rift of darkness that pulls in enemies, distorts space, and inflicts continuous damage. Can be used for crowd control or quick repositioning.</p>",
            ability3: "<info><i class='fas fa-skull-crossbones'></i> Curse Weaving</info><p>Weaves hexes into the air or onto weapons that inflict debuffs like slowed reactions, mental torment, or weakened defenses. Some curses linger, even after combat ends.</p>",
            ability4: "<info><i class='fas fa-hand-sparkles'></i> Void Tendrils</info><p>Summons inky tendrils from the void that lash at foes, immobilize targets, or siphon their energy. A versatile spell that balances crowd control and suppression.</p>",
            ability5: "<info><i class='fas fa-wind'></i> Shadow Reaping</info><p>Channels dark energy through her scythe, releasing crescent-shaped slashes of magic from afar that drain enemy vitality and pierce through armor.</p>",
            ability6: "<info><i class='fas fa-skull'></i> Demonic Form: Reaper’s Wrath</info><p>Transforms into her demon form, amplifying her power. While active, her scythe grows more lethal, her attacks quicken, and her aura instills fear in even the bravest foes.</p>",
            background: [
            "Hexxana is an enigma—a wandering force of magic and steel cloaked in shadows and silence. Her origins are lost to time, her presence marked only by fleeting glimpses under starry skies and whispered rumors of spectral sightings. Wielding her cursed scythe, Oblivion’s Edge, she cuts down foes with devastating magic and precision, vanishing just as quickly as she appears.<br><br>",
            "She walks a solitary path, guided by an unknown purpose, helping only when it aligns with her will. Though some see her as a savior in the dark, others fear her as a harbinger of doom. Neither wholly light nor dark, Hexxana remains fiercely neutral—bound to no kingdom, loyal only to herself. Her aura is both haunting and beautiful, much like the twilight she so often vanishes into."
            ].join("")
        };
    } else if (character === 'rayza') {
        details = {
            name: "Rayza Huǒ",
            race: "<info>Human</info>",
            gender: "<info>Female</info>",
            height: "<info>5'6\" ft / 167.6 cm</info>",
            homeland: "<info>Hidden Mist Valley</info>",
            faction: "<info>Dracona Sovereignty</info>",
            role: "<info>Assassin</info>",
            occupation: "<info>Stormwing Guardian</info>",
            affiliates: "<info><i class='fas fa-users'></i> Ren (Older Brother)</info> <info><i class='fas fa-users'></i> Liliana (Ally)</info> <info><i class='fas fa-users'></i> Feya (Friend)</info>",
            elementalImages: [
            "assets/images/character-presets/elements/air.webp" 
            ],
            likes: "<info><i class='fas fa-check'></i> Cute Stuff</info> <info><i class='fas fa-check'></i> Training & Combat</info> <info><i class='fas fa-check'></i> Flying or Gliding</info> <info><i class='fas fa-check'></i> Freedom</info> <info><i class='fas fa-check'></i> Sweets</info>",
            dislikes: "<info><i class='fas fa-times'></i> Lazy People</info> <info><i class='fas fa-times'></i> Loud or Arrogant People</info> <info><i class='fas fa-times'></i> Crowded Places</info> <info><i class='fas fa-times'></i> Extreme Heat</info> <info><i class='fas fa-times'></i> Losing Control</info>",
            weapon: "<info><i class='fas fa-heart'></i> Tempest Bloom</info>",
            ability1: "<info><i class='fas fa-cloud'></i> Mist Veil</info><p>Envelops herself in a cloak of dense mist, reducing visibility and enhancing stealth. Ideal for ambushing enemies or escaping a losing fight.</p>",
            ability2: "<info><i class='fas fa-wind'></i> Wind Blades</info><p>Launches crescent blades of compressed air with deadly speed, slicing enemies from a distance with precise strikes.</p>",
            ability3: "<info><i class='fas fa-fan'></i> Dance of the Tempest</info><p>Combines elegance with lethality in a whirlwind barrage of wind-fueled strikes, hitting all enemies around her in a rhythmic assault.</p>",
            ability4: "<info><i class='fas fa-shoe-prints'></i> Silent Step</info><p>Moves with absolute silence, guided by subtle air currents. Increases speed and evasion, letting her bypass detection or close in unnoticed.</p>",
            ability5: "<info><i class='fas fa-leaf'></i> Petal Storm</info><p>Summons a flurry of wind-carried petals that slice and confuse enemies, creating a distraction while buffing her agility mid-combat.</p>",
            ability6: "<info><i class='fas fa-fire'></i> Blood Rage</info><p>Taps into her latent bloodline power, igniting a red aura that boosts her strength and reflexes to near-superhuman levels. When it fades, she’s left physically drained.</p>",
            background: [
            "Rayza was born into a prestigious family celebrated for their mastery in combat, especially in the art of swordsmanship. Growing up, she idolized her father and older brother, Ren, both renowned for their skill and strength. She longed to join their ranks, to prove her worth as a warrior. But her father, bound by tradition and protective instincts, refused to train her, believing the path of a swordsman was not meant for her. His decision only fueled her resolve. Determined to show her father that strength was not bound by tradition or gender, Rayza began to train in secret.<br><br>",
            "Her brother, who recognized her passion and potential, became her silent ally, offering tips and guidance away from their father's watchful eyes. When news of a prestigious tournament spread through the land, Rayza saw her chance. She entered the competition in disguise, hiding her face to avoid recognition. Her heart pounded as she faced each opponent, her confidence growing with every victory. One by one, she defeated nine challengers, advancing to the final round. To her shock, her last opponent was none other than Ren.<br><br>",
            "She froze, realizing her secret could be exposed, but her brother’s smirk and knowing glance told her he had recognized her long before. He remained silent, signaling his respect for her determination. Rayza steeled herself for the fight, determined to prove herself not just to her brother but to everyone who doubted her. The duel was fierce and unrelenting, each sibling pushing the other to their limits. Rayza fought with all her heart, but Ren’s experience and skill proved formidable. As she faced the brink of defeat, something deep within her awakened—a latent power passed down through her bloodline.<br><br>",
            "Enveloped in a red aura, Rayza entered a 'blood rage,' her strength and speed heightened to extraordinary levels. In the stands, her father’s face changed from shock to realization as he recognized the aura—and his daughter. His heart warred between pride and fear, but the tournament rules demanded that the match continue. The crowd watched in awe as the siblings clashed in a battle that seemed almost otherworldly, their bond and rivalry displayed in every strike.<br><br>",
            "After an hour of grueling combat, Rayza finally succumbed to exhaustion, defeated by her brother but not broken. She awoke to find herself at home, her father and Ren beside her. Before she could explain herself, her father placed a hand on her shoulder, his expression a mix of pride and sadness. “I was only trying to protect you,” he admitted, his voice heavy with emotion. “You remind me so much of your mother. But watching you fight, I realize now—I was wrong. I won't always be here to shield you, and perhaps that isn’t what you need.<br><br>",
            "Keep growing, Rayza. Become strong, but also wise. And, Ren,” he added, turning to his son, “look after your sister.” In that moment, Rayza felt the acceptance she had longed for. The family shared a tearful embrace, a silent promise binding them closer than ever. From that day on, Rayza’s path was clear—not just to prove her worth but to carry forward the strength and love her family had instilled in her."
            ].join("")
        };
    } else if (character === 'liliana') {
        details = {
            name: "Liliana",
            race: "<info>Celestial</info>",
            gender: "<info>Female</info>",
            height: "<info>5'9\" ft / 170.2 cm</info>",
            homeland: "<info>Magelion Empire</info>",
            faction: "<info>Light Harbingers</info>",
            role: "<info>Mage</info> <info>Healer</info>",
            occupation: "<info>Grand Priestess</info>",
            affiliates: "<info><i class='fas fa-users'></i> Zion (Father)</info> <info><i class='fas fa-users'></i> Feya (Companion)</info> <info><i class='fas fa-users'></i> Lunara (Mother)</info> <info><i class='fas fa-users'></i> Blessica (Aunt)</info>",
            elementalImages: [
            "assets/images/character-presets/elements/light.webp", 
            "assets/images/character-presets/elements/frost.webp"
            ],
            likes: "<info><i class='fas fa-check'></i> Reading</info> <info><i class='fas fa-check'></i> Helping People</info> <info><i class='fas fa-check'></i> Singing</info> <info><i class='fas fa-check'></i> Meditating</info> <info><i class='fas fa-check'></i> Peaceful Gardens</info> <info><i class='fas fa-check'></i> Teaching Young Mages</info>",
            dislikes: "<info><i class='fas fa-times'></i> Nethersteel Pact</info> <info><i class='fas fa-times'></i> War and Senseless Bloodshed</info> <info><i class='fas fa-times'></i> Betrayal</info> <info><i class='fas fa-times'></i> Abuse of Magic</info> <info><i class='fas fa-times'></i> Being Seen Only as a Symbol</info>",
            weapon: "<info><i class='fas fa-heart'></i> Solaraenia Staff</info>",
            ability1: "<info><i class='fas fa-sun'></i> Radiant Blessing</info><p>Heals allies in an area with a burst of warm, holy light, gradually restoring health and cleansing minor ailments.</p>",
            ability2: "<info><i class='fas fa-snowflake'></i> Frostbound Aegis</info><p>Conjures a shimmering barrier of frost and light, absorbing damage and slowing enemies who strike it.</p>",
            ability3: "<info><i class='fas fa-praying-hands'></i> Sanctum of Solarae</info><p>Marks sacred ground that empowers allies with regeneration and resistance, while weakening enemies who step within.</p>",
            ability4: "<info><i class='fas fa-icicles'></i> Glacial Lance</info><p>Forms a sharp spear of frozen light and hurls it with deadly precision, piercing through enemies and freezing them on impact.</p>",
            ability5: "<info><i class='fas fa-star-of-life'></i> Light barrage</info><p>Unleashes a barrage of radiant energy bolts that explode on impact, dealing damage and blinding enemies caught in the blast.</p>",
            ability6: "<info><i class='fas fa-praying-hands'></i> Celestial Oath</info><p>Liliana binds her soul to her allies, making them temporarily invulnerable to death for several seconds. If she falls during this time, she is revived in a burst of healing light that restores nearby allies.</p>",
            background: [
            "Liliana, the Radiant Empress, is the revered founder and current ruler of the Magelion Empire—an empire born from ruin and risen from the ashes of a shattered world. After the death of the Solaraenian God and the tragic sealing of her mother, Lunara, during the catastrophic Great War, a young Liliana was thrust into chaos. The celestial homeland of Solaraenia was obliterated. The once-proud Umbrakith were nearly wiped from existence. And Eldoria, once vibrant and united, teetered on the brink of total collapse.<br><br>",
            "In the heart of that devastation, Liliana stood witness to the unthinkable: her aunt, Blessica, sacrificing herself to seal Lunara due to corruption and prevent further destruction. As the sealing spell took its toll, Blessica grew weak and began to fade. In her final moments, she entrusted Liliana with a sacred vow—to lead their people, restore the broken world, and protect the future. Liliana, still only a child, gave a solemn nod as Blessica ascended in a burst of divine light, her spirit returning to the heavens in eternal slumber. All present—mortals, celestials, and warriors alike—knelt before Liliana as she rose into the air, her aura radiant with divine purpose. With a steady breath and unwavering heart, she cast a spell that summoned a great beam of light from the heavens. It poured down upon her like a blessing, encasing her in brilliance.<br><br>",
            "As the light engulfed her, Liliana extended her hands—and in them, a crystal began to form, pulsing with pure energy. The crystal glowed brighter with every heartbeat, resonating with the very soul of Eldoria. In a single, luminous surge, the light rippled outward. Darkness recoiled. The broken land around her shimmered, and corruption melted into air. With that act, she did not just cleanse the land—she gave the people hope.<br><br>",
            "From that moment, Liliana was no longer seen as a child of tragedy, but as the dawn reborn.<br><br>",
            "As the years passed, Liliana matured beneath the weight of destiny. Where others saw division, she envisioned unity. Where there was despair, she sought hope. Determined to break the cycle of war, she summoned the remaining leaders of Eldoria’s fractured races and called for a Grand Council—a final, desperate plea for peace. Though not all welcomed her vision, many were moved by the clarity and courage in her voice. Her words awakened something ancient and true in their hearts.<br><br>",
            "To safeguard the fragile harmony that followed, Liliana founded the Light Harbingers—an elite order of guardians drawn from every race and realm. But membership was not easily earned. Liliana herself forged the Trials: tests not of raw strength, but of compassion, resolve, and integrity. Through her vision and leadership, Eldoria slowly healed. The divided nations began to sing her name in reverence, and Liliana became a living beacon—not only of survival, but of love, light, and unity.<br><br>",
            "And yet… behind her serene gaze lies vigilance. For in the quiet of her dreams, Liliana sees a shadow forming—a veiled figure beneath a dying sky. A second darkness. A return of the devouring silence.",
            ].join("")
        };
    } else if (character === 'lunara') {
        details = {
            name: "Lunara",
            race: "<info>Celestial</info>",
            gender: "<info>Female</info>",
            height: "<info>6'0\" ft / 182.88 cm</info>",
            homeland: "<info>Solaraenia</info>",
            faction: "<info>Order of Seekers</info>",
            role: "<info>Mage</info>",
            occupation: "<info>None</info>",
            affiliates: "<info><i class='fas fa-users'></i> Zion (Lover)</info> <info><i class='fas fa-users'></i> Liliana (Daughter)</info> <info><i class='fas fa-users'></i> Blessica (Sister)</info> <info><i class='fas fa-users'></i> Floribeth (Former Ally)</info> <info><i class='fas fa-users'></i> Shelain (Former Ally)</info>",
            elementalImages: [
            "assets/images/character-presets/elements/shadow.webp"
            ],
            likes: "<info><i class='fas fa-check'></i> Zion</info> <info><i class='fas fa-check'></i> Moonlit Nights</info> <info><i class='fas fa-check'></i> Ancient Magic</info> <info><i class='fas fa-check'></i> Roses</info>",
            dislikes: "<info><i class='fas fa-times'></i> Celestial Betrayal</info> <info><i class='fas fa-times'></i> War</info> <info><i class='fas fa-times'></i> Her Own Reflection</info>",
            weapon: "<info><i class='fas fa-heart'></i> Crimson Wail (Blood-Cursed Scythe)</info>",
            ability1: "<info><i class='fas fa-eye'></i> Blood Moon's Curse</info><p>Anyone who meets her gaze under the blood moon dies instantly, while the blood moon still active she gains enhanced attributes.</p>",
            ability2: "<info><i class='fas fa-burn'></i> Scarlet Dominion</info><p>Controls the blood of the fallen, twisting it into deadly weapons or chains to ensnare enemies.</p>",
            ability3: "<info><i class='fas fa-ghost'></i> Eclipsing Phantom</info><p>Becomes a shadow-like wraith, moving unseen through the battlefield, immune to physical attacks.</p>",
            ability4: "<info><i class='fas fa-volume-mute'></i> Wail of the Forsaken</info><p>Her sorrowful cry weakens the minds of those who hear it, driving them to madness.</p>",
            ability5: "<info><i class='fas fa-brain'></i> Echoes of Sorrow</info><p>Creates a pitch black domain while inside, causing enemies to relive their most painful memories, paralyzing them in fear.</p>",
            ability6: "<info><i class='fas fa-explosion'></i> Cosmic Cataclysm</info><p>She can unleash a devastating explosion of cursed energy in a continental scale, consuming everything around her .</p>",
            background: ["Lunara was once a celestial being—pure, radiant, and beloved. She was the selfless and compassionate princess of Solaraenia, destined to inherit the throne and bring eternal light to her people. She embodied everything a ruler should be—kind yet strong, wise yet humble. But love, the most beautiful and dangerous force, would become her ruin.<br><br>",
            "In secret, she fell for Zion, the prince of the Umbrakiths, the sworn enemies of the Solaraenians for eons. Their love was a forbidden flame, burning against the tides of history and war. They met not as enemies, but as two wandering souls, lost in the vastness of the realms. In Zion, Lunara saw not a monster, not an enemy, but a heart that beat in harmony with hers. And for him, she was not just a celestial heir but a light he had never known in his shadowed world.<br><br>",
            "But love is not enough to break the chains of destiny. When their secret was unveiled, the Solarae God's fury shook the heavens. He accused Lunara of treason, of falling victim to the dark magic of the Umbrakiths. Her people turned against her, branding her a traitor to their divine bloodline.<br><br>",
            "In the eyes of the Solaraenians, she was no longer their princess—she was tainted, lost, a disgrace. And so, she was cast down, banished from Solaraenia, and exiled into the mortal land of Eldoria. But her fall was only the beginning of the tragedy. The Umbrakiths were stunned by the revelation. They had not conspired to claim the celestial princess, yet their hands were now forced into war. The Solaraenians, blinded by their wrath, saw no redemption for Lunara. They saw only war.<br><br>",
            "And so, the Great War of Eldoria began—a conflict forged not by hatred, but by love that the world refused to accept. Amidst the bloodshed, Lunara and Zion fought together—not as leaders of warring nations, but as lovers desperate to stop the slaughter. They pleaded, they struggled, they tried to hold back the tides of fate itself. But fate is cruel. On the battlefield, Zion fell. Lunara watched as the blade that should have struck her instead pierced through the heart of the man she loved.<br><br>",
            "His blood clung to her trembling hands like a vow undone. Warm. Real. Fading. Her scream never came—it was swallowed by the silence of a shattered world. The battlefield faded. Time itself seemed to shatter. She saw every moment they had shared—His laughter, the whispered promises, the stolen touches beneath forbidden skies. His voice, calling her name, fading into silence. His warmth, now nothing but a lifeless embrace. And something inside her broke. A whisper left her lips, a prayer, a curse, an agony too great for words.<br><br>",
            "The sky darkened, the winds howled, and a blood moon rose. Those who dared look into her eyes saw only death. An aurora, dark and unholy, erupted around her as her tears of sorrow turned into rivers of blood. And then, the slaughter began. She bent the blood of those around her, twisting them into lifeless husks, consuming their very essence in an unrelenting storm of carnage. The battlefield became a graveyard. Soldiers—Solaraenians, Umbrakiths and every race all—fell before her wrath. She was no longer the celestial princess, nor the traitor in exile. She was something else. A phantom. A reaper. A queen of death. That day, the Scarlet Phantom was born. The war ended. But not in victory, nor in peace. Only in silence.<br><br>",
            "Now, Lunara was sealed by her own sister in the very heart of Eldoria, her heart long turned to ice, her soul shackled by the blood of those she loved and those she loathed. She no longer fights for light, nor darkness. She seeks something beyond the reach of gods and mortals alike. Perhaps redemption. Perhaps revenge. Or perhaps, she simply searches for the one thing she lost—the love that once made her whole.<br><br>",
            "For in the end, Lunara never wished to be queen. She only wished to be with him. And that… was the one wish the universe would never grant."
            ].join("")
        };
    } else if (character === 'feya') {
        details = {
            name: "Feya Ashey",
            race: "<info>Vulpheiri</info>",
            gender: "<info>Female</info>",
            height: "<info>5'4\" ft / 162.6 cm</info>",
            homeland: "<info>Frostfire Timberland</info>",
            faction: "<info>Light Harbingers</info>",
            role: "<info>Mage</info>",
            occupation: "<info>Arch Harbinger</info>",
            affiliates: "<info><i class='fas fa-users'></i> Liliana (Mentor)</info> <info><i class='fas fa-users'></i> Ren (Friend)</info> <info><i class='fas fa-users'></i> Rayza (Friend)</info>",
            elementalImages: [
            "assets/images/character-presets/elements/fire.webp", 
            "assets/images/character-presets/elements/light.webp"
            ],
            likes: "<info><i class='fas fa-check'></i> Grimoire</info> <info><i class='fas fa-check'></i> Warmth & Sunlight</info> <info><i class='fas fa-check'></i> Foxes & Small Creatures</info> <info><i class='fas fa-check'></i> Dawn & Dusk</info> <info><i class='fas fa-check'></i> Melodic Sounds</info> <info><i class='fas fa-check'></i> Fire Magic</info>",
            dislikes: "<info><i class='fas fa-times'></i> Cold & Rainy Weather</info> <info><i class='fas fa-times'></i> Large Bodies of Water</info> <info><i class='fas fa-times'></i> Being Watched</info> <info><i class='fas fa-times'></i> Nethersteel Pact</info> <info><i class='fas fa-times'></i> Strict Rules</info>",
            weapon: "<info><i class='fas fa-heart'></i> None</info>",
            ability1: "<info><i class='fas fa-fire'></i> Foxfire Embers</info><p>Releases a flurry of ethereal foxfire flames that chase down enemies and explode on impact.</p>",
            ability2: "<info><i class='fas fa-tachometer-alt'></i> Spirit Rush</info><p>Dashes forward in a burst of fiery speed, leaving a trail of fire and damaging enemies in her path.</p>",
            ability3: "<info><i class='fas fa-moon'></i> Eclipse Flare</info><p>Channels moonlight and fire into a powerful beam that pierces through enemy lines, dealing massive elemental damage.</p>",
            ability4: "<info><i class='fas fa-paw'></i> Infernal Vulpes</info><p>Transforms into a fiery fox spirit, increasing her agility and spell potency for a short duration.</p>",
            ability5: "<info><i class='fas fa-shield-alt'></i> Radiant Safeguard</info><p>Summons a protective charm that absorbs magic damage and reflects a portion of it back to the attacker.</p>",
            ability6: "<info><i class='fas fa-star'></i> Celestial Afterglow</info><p>Feya channels her inner radiance, creating a glowing sigil beneath her and her allies. It heals nearby allies over time and grants brief invulnerability to fatal damage once. Enemies that enter the sigil's edge are burned by radiant flames.</p>",
            background: [
            "Feya was once a carefree child, growing up in the mystical Frostfire Timberland, nestled near the northern mountains of the Magelion Empire. Her people, deeply attuned to nature and magic, lived in peaceful harmony, untouched by the conflicts of the outside world. With an adventurous spirit and an ever-burning curiosity, Feya spent her days exploring the vast Frostfire Timberland, her innate magic strengthening with each passing day.<br><br>",
            "But peace is never eternal. The rise of the Nethersteel Pact shattered the tranquility of her homeland. The Legion's forces swept through the land like a merciless storm, leaving destruction in their wake. Her people fought valiantly to defend their sacred home, her parents among the bravest warriors, but the enemy's power was overwhelming. One by one, the Frostfire Timberlands burned, and her entire race was driven to extinction.<br><br>",
            "Feya, the last survivor, refused to go down without a fight. In a desperate stand, she unleashed her full power, incinerating the remaining Legion troops in a fiery explosion of magic. But her victory was fleeting. Drained and gravely wounded, she found herself face to face with the Nethersteel Pact’s ruthless general—Drakeon. Overwhelmed, she fell in battle, her strength fading as the dark forces prepared to end her existence.<br><br>",
            "Just as all hope seemed lost, the royal army of the Magelion Empire arrived, forcing the Nethersteel Pact into retreat. Yet, the damage had already been done—the once-thriving Frostfire Timberland lay in ruins, its beauty forever tainted by corruption. Hours later, Feya was found unconscious by the Empire’s scouts. Among them was Queen Liliana, a compassionate ruler renowned for her wisdom and healing powers. Moved by the sight of the broken girl and the devastation of her homeland, Liliana personally nursed Feya back to health. Recognizing the immense power within her, the queen adopted her as her own daughter, offering her a new life within the Empire.<br><br>",
            "Under Liliana’s guidance, Feya trained to become one of the Light Harbingers, an elite order sworn to protect the Crystalight, the heart of the Empire’s power. Though the wounds of her past still linger, Feya has found a new purpose—to ensure that no one else suffers the fate of her people. As the Fiery Fox of the Light Harbingers, she fights with relentless passion, wielding her magic to defend the Empire and those she holds dear. But with Drakeon still at large and the Nethersteel Pact looming in the shadows, she knows that her battle is far from over. Her past may have been forged in tragedy, but her future burns brighter than ever."
            ].join("")
        };
    } else if (character === 'floribeth') {
        details = {
            name: "Floribeth Eldeblossom",
            race: "<info>Elf</info>",
            gender: "<info>Female</info>",
            height: "<info>5'6\" ft / 167.6 cm</info>",
            homeland: "<info>Luminwood Expanse</info>",
            faction: "<info>Bloomforge Order</info>",
            role: "<info>Healer</info>",
            occupation: "<info>Eldertree Warden</info>",
            affiliates: "<info><i class='fas fa-users'></i> Lunara (Former Ally)</info> <info><i class='fas fa-users'></i> Shelain (Ally)</info> <info><i class='fas fa-users'></i> Liliana (Ally)</info> <info><i class='fas fa-users'></i> Arzhel (Companion)</info>",
            elementalImages: [
            "assets/images/character-presets/elements/nature.webp", 
            "assets/images/character-presets/elements/earth.webp"
            ],
            likes: "<info><i class='fas fa-check'></i> Gardening</info> <info><i class='fas fa-check'></i> Rainy Days</info> <info><i class='fas fa-check'></i> Singing to Trees</info> <info><i class='fas fa-check'></i> Ancient Lore</info>",
            dislikes: "<info><i class='fas fa-times'></i> Nethersteel Pact</info> <info><i class='fas fa-times'></i> Corruption</info> <info><i class='fas fa-times'></i> Industrial Expansion</info> <info><i class='fas fa-times'></i> Fire Magic</info>",
            weapon: "<info><i class='fas fa-heart'></i> Thornweaver Staff</info>",
            ability1: "<info><i class='fas fa-seedling'></i> Verdant Embrace</info><p>Channels restorative life energy through roots and vines, gradually healing allies in a targeted area and cleansing minor ailments.</p>",
            ability2: "<info><i class='fas fa-leaf'></i> Briarwall</info><p>Summons a dense barrier of thorny vines that blocks enemy movement and projectiles, providing cover and slowing attackers who try to cross it.</p>",
            ability3: "<info><i class='fas fa-spa'></i> Bloom Surge</info><p>Unleashes a wave of blossoming flowers that stuns nearby enemies and instantly restores a burst of health to allies within range.</p>",
            ability4: "<info><i class='fas fa-tree'></i> Nature’s Wrath</info><p>Calls upon the fury of the forest, causing roots and vines to erupt in a wide area, entangling and damaging all enemies caught within.</p>",
            ability5: "<info><i class='fas fa-vial'></i> Thornbind</info><p>Entwines a target in magical vines, immobilizing them and silencing their spellcasting for a short duration.</p>",
            ability6: "<info><i class='fas fa-pagelines'></i> Groveheart Ascension</info><p>Enters an awakened state, greatly enhancing all nature-based spells and summoning ethereal dryad spirits to aid her in battle for a limited time.</p>",
            background: [
            "Floribeth, guardian of nature and master of floramancy, once ruled the vast and vibrant Luminwood Expanse—a realm where flora and fauna danced in perfect harmony. A former elite of the ancient faction led by Princess Lunara, Floribeth eventually stepped away from her old ties, seeking a deeper purpose. With a heart rooted in healing and preservation, she founded her own faction: the Bloomforge Order, sworn to protect the Tree of Life, the sacred heart of Eldoria itself—its roots stretching through generations of time.<br><br>",
            "Her homeland was once a breathtaking expanse of lush valleys, mystical groves, and ancient trees that whispered tales of old. Diverse in culture and wild in spirit also home to the elves, it was paradise. But after the devastating Great War, the land was left wounded—its spirit dimmed, its beauty scarred. Still, Floribeth remained unwavering. Her mission: to restore Luminwood to its former glory and protect it from any threat that dared approach. Peace, however, was fleeting<br><br>",
            "Not long after the war’s end, a mysterious corruption began to seep into the lands—spreading through the Elderhaven Wilds like rot beneath the surface. Dark magic, twisted and unnatural, corrupted creatures and poisoned the soil. The source? Unknown. The danger? Imminent. Floribeth acted swiftly. She reinforced borders, empowered her Bloomforge guardians, and sent urgent reports to the elite members of the Light Harbingers. Her warning proved timely. One fateful night, under a moon veiled in mist, a shadowy faction launched a full-scale assault on Luminwood Expanse.<br><br>",
            "But Floribeth, ever the strategist, was ready. Joined by her trusted companion Arzhel, she activated the ancient Solaraenian portal, summoning reinforcements just in time. Liliana Solarae and her forces arrived, rallying to Luminwood’s defense. The battle raged for hours under the canopy of burning leaves and flickering starlight. Though blood was shed and wounds were deep, they emerged victorious—with fewer casualties than feared. But Floribeth did not rejoice.<br><br>",
            "She knew this was only the beginning. Refusing to let her people fall again, she began fortifying Springvale, the heart of her realm, transforming it into a sanctuary and stronghold. With the unwavering aid of her allies, she prepares—not just to defend—but to reclaim what was once pure. For as long as she breathes, Floribeth will stand between corruption and creation."
            ].join("")
        };
    } else if (character === 'blessica') {
        details = {
            name: "Blessica Solarae",
            race: "<info>Celestial</info>",
            gender: "<info>Female</info>",
            height: "<info>6'0\" ft / 182.88 cm</info>",
            homeland: "<info>Solaraenia</info>",
            faction: "<info>Light Harbingers</info>",
            role: "<info>Healer</info>",
            occupation: "<info>High Cleric</info>",
            affiliates: "<info><i class='fas fa-users'></i> Lunara (Sister)</info> <info><i class='fas fa-users'></i> Liliana (Niece)</info>",
            elementalImages: [
            "assets/images/character-presets/elements/light.webp"
            ],
            likes: "<info><i class='fas fa-check'></i> Stargazing</info> <info><i class='fas fa-check'></i> Ancient Texts</info> <info><i class='fas fa-check'></i> Singing</info>",
            dislikes: "<info><i class='fas fa-times'></i> Bloodshed</info> <info><i class='fas fa-times'></i> Secrets</info>",
            weapon: "<info><i class='fas fa-heart'></i> None</info>",
            ability1: "<info><i class='fas fa-hand-holding-heart'></i> Sanctuary Ward</info><p>Summons a radiant zone that heals allies over time and purifies minor curses or afflictions.</p>",
            ability2: "<info><i class='fas fa-dove'></i> Celestial Grace</info><p>Channels divine energy to shield a single ally, absorbing incoming damage and briefly granting immunity to status effects.</p>",
            ability3: "<info><i class='fas fa-praying-hands'></i> Echo of Solarae</info><p>Revives a fallen ally with a surge of light, restoring them to fighting condition with temporary enhanced stats.</p>",
            ability4: "<info><i class='fas fa-feather-alt'></i> Guiding Feather</info><p>Sends a magical feather to seek out an ally, instantly transporting Blessica to their side and restoring a portion of their health.</p>",
            ability5: "<info><i class='fas fa-star-of-life'></i> Lumina Pulse</info><p>Releases a burst of holy light around her that heals nearby allies and damages nearby enemies of dark origin.</p>",
            ability6: "<info><i class='fas fa-sun'></i> Luminous Salvation</info><p>Summons a radiant beam of holy light from above, scorching enemies within its range while simultaneously restoring the vitality of nearby allies.</p>",
            background: [
            "Blessica, the second daughter of the Solaraenian God, was born in the celestial realm of Solaraenia—a realm of radiant light and divine order, home to the ethereal Solaraenian beings. Gifted with potent light magic, she was revered not only for her elegance and power but also for the deep, unwavering love she held for her elder sister, Lunara. But over time, Blessica began to notice a change in Lunara. Her sister would disappear into the night, venturing into forbidden realms—most often to the mortal world of Eldoria. There, disguised in mortal form, Lunara quietly aided those in need and sought a purpose beyond her celestial duties. Though she was heir to the throne, her heart strayed from her royal path. Blessica watched with silent concern, sensing a storm on the horizon.<br><br>",
            "Eventually, tragedy struck. Whispers echoed through the palace—Lunara was to be banished. Their father had uncovered her love for a prince of the Umbrakith, the sworn enemies of their kind. He called it treason, a betrayal of divine law. Desperate, Blessica pleaded with him before the trial, but he would not yield. Lunara was exiled. Unable to bear the loss, Blessica defied all boundaries and followed her sister into the mortal realm. Through the veils between worlds, she found Lunara—together with her beloved Zion, and with them… a young girl. Their daughter. Stunned, Blessica stood in silence, but Lunara’s voice was calm. She placed her daughter in Blessica’s arms and whispered:<br><br>",
            "“Take her. Keep her safe. I trust you. She is the future of our people.”<br><br>",
            "Lunara then confessed that their father had hidden ancient truths—secrets buried so deep that not even royal blood was meant to uncover them. Though torn with fear and sorrow, Blessica agreed. She took the child—Liliana—and vanished just as war broke out between the gods and mortals. When Blessica returned to Solaraenia, she was met by the surviving members of the Order of Light, who delivered grave news: Lunara had named Blessica her successor before vanishing into the chaos. As the celestial war escalated, Blessica ordered her people to retreat to safety—with Liliana—while she and her most loyal warrior returned to the frontlines in hopes of rescuing Lunara and ending the bloodshed.<br><br>",
            "But what they found was devastation.<br><br>",
            "The battlefield was drowned in destruction, as Solaraenians, mortals, and the relentless Umbrakith army clashed in desperation. Then, beneath the rise of a blood moon, an overwhelming surge of dark energy swept across the land—obliterating millions in a single instant.<br><br>",
            "At the heart of the chaos stood Lunara—no longer herself—consumed by an abyssal force. She struck down friend and foe alike, even slaying their father in a fit of corrupted fury. Stunned and heartbroken, Blessica and her companion confronted her. But Lunara’s power had grown far beyond comprehension. As she unleashed a catastrophic spell, Blessica gave the order to retreat—but her comrade refused to abandon the mission.<br><br>",
            "Left with no choice, Blessica invoked a forbidden sealing spell, channeling her remaining strength. With help from her comrade, the last surviving warriors, and loyal allies, they succeeded in imprisoning Lunara. The world watched in silence as the dark threat was finally subdued.<br><br>",
            "But the victory came at a great price.<br><br>",
            "The spell drained Blessica’s life force. Her form began to glow and fade. As she collapsed, young Liliana rushed to her side along with her allies. With her final breath, Blessica whispered:<br><br>",
            "“Lead our people… protect her. She is the light of our future… and the hope of this world.”<br><br>",
            "Blessica ascended in a burst of radiant light, her soul returning to the heavens in eternal slumber. All present—mortals, celestials, and warriors alike—knelt before Liliana. In that moment, at a young age Liliana became a leader. From the ruins of war, Liliana would rise to fulfill the promise of her lineage. Guided by the teachings of her mother and the strength of her people, she founded the Magelion Empire upon the very grounds where it all began.<br><br>",
            "The war ended in silence, but the echoes of its cost would forever shape the future of Eldoria."
            ].join("")
        };
    } else if (character === 'coming-soon') {
        details = {
            name: "Coming Soon",
            race: "<info>Unknown</info>",
            gender: "<info>Unknown</info>",
            height: "<info>Unknown</info>",
            homeland: "<info>Unknown</info>",
            faction: "<info>Unknown</info>",
            role: "<info>Unknown</info>",
            occupation: "<info>Unknown</info>",
            affiliates: "<info><i class='fas fa-users'></i> Unknown</info>",
            elementalImages: [
            "assets/images/character-presets/roles/question.webp"
            ],
            likes: "<info><i class='fas fa-check'></i> Unknown</info>",
            dislikes: "<info><i class='fas fa-times'></i> Unknown</info>",
            weapon: "<info><i class='fas fa-heart'></i> Unknown</info>",
            ability1: "<info><i class='fas fa-star'></i> Ability 1</info><p>Description coming soon.",
            ability2: "<info><i class='fas fa-star'></i> Ability 2</info><p>Description coming soon.",
            ability3: "<info><i class='fas fa-star'></i> Ability 3</info><p>Description coming soon.",
            ability4: "<info><i class='fas fa-star'></i> Ability 4</info><p>Description coming soon.",
            ability5: "<info><i class='fas fa-star'></i> Ability 5</info><p>Description coming soon.",
            ability6: "<info><i class='fas fa-star'></i> Ability 6</info><p>Description coming soon.",
            background: "<info><i class='fas fa-book'></i> Background details coming soon.</info>"
        };
    } 

    characterDetails.innerHTML = `
        <h2>${details.name}</h2>
        <div class="character-info-scrollable">
            <div class="info-section" id="elementalPower">
                <h3>Elemental Mastery</h3>
                ${details.elementalImages.map(imgSrc => `<img src="${imgSrc}" alt="">`).join('')}
            </div>
            <div class="info-section" id="basic-info-scrollable">
                <p><strong><i class='fas fa-user'></i> Race</strong> ${details.race}</p>
                <p><strong><i class='fas fa-venus-mars'></i> Gender</strong> ${details.gender}</p>
                <p><strong><i class='fas fa-ruler-vertical'></i> Height</strong> ${details.height}</p>
                <p><strong><i class='fas fa-globe'></i> Homeland</strong> ${details.homeland}</p>
                <p><strong><i class='fas fa-shield-alt'></i> Faction</strong> ${details.faction}</p>
                <p><strong><i class='fas fa-crown'></i> Role</strong> ${details.role}</p>
                <p><strong><i class='fas fa-briefcase'></i> Occupation</strong> ${details.occupation}</p>
            </div>
            <div class="info-section" id="abilities">
                <h3>Abilities</h3>
                <p>${details.ability1}</p>
                <p>${details.ability2}</p>
                <p>${details.ability3}</p>
                <p>${details.ability4}</p>
                <p>${details.ability5}</p>
                <p>${details.ability6}</p>
            </div>
            <div class="info-section" id="weapon">
                <h3>Favorite Weapon</h3>
                <p>${details.weapon}</p>
            </div>
            <div class="info-section" id="affiliates">
                <h3>Affiliates</h3>
                <p>${details.affiliates}</p>
            </div>
            <div class="info-section" id="likes">
                <h3>Likes</h3>
                <p>${details.likes}</p>
            </div>
            <div class="info-section" id="dislikes">
                <h3>Dislikes</h3>
                <p>${details.dislikes}</p>
            </div>
            <div class="info-section" id="background">
                <h3>Background</h3>
                <p>${details.background}</p>
            </div>
        </div>
    `;

    characterInfo.style.display = "block";
    currentCharacter = character;
    updateBackground();
}

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
    document.querySelectorAll('.character-card').forEach(card => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-pressed', 'false');
        if (card.dataset.character) {
            card.setAttribute('aria-label', `Select ${card.dataset.character}`);
        }
        // Remove previous listeners by cloning
        card.replaceWith(card.cloneNode(true));
    });

    // Re-select after cloning
    document.querySelectorAll('.character-card').forEach(card => {
        card.addEventListener('click', function () {
            resetCharacterCardStates();
            this.classList.add('clicked');
            this.setAttribute('aria-pressed', 'true');
            getCharacterDetails(this.dataset.character);
        });
        card.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Filtering logic for character cards
function attachFilterListeners() {
    document.querySelectorAll('.filter-character a').forEach(filterBtn => {
        filterBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const category = this.dataset.category;
            document.querySelectorAll('.character-card').forEach(card => {
                const cardCategories = (card.dataset.category || '').split(',').map(cat => cat.trim());
                const shouldShow = (category === 'all' || cardCategories.includes(category));
                if (shouldShow) {
                    card.style.display = ''; // Show immediately
                    // Use requestAnimationFrame to ensure the browser registers the display change
                    requestAnimationFrame(() => {
                        card.classList.remove('card-hidden');
                    });
                } else {
                    card.classList.add('card-hidden');
                    setTimeout(() => { card.style.display = 'none'; }, 300);
                }
            });
        });
    });
}

// Initial setup
attachCharacterCardListeners();
attachFilterListeners();

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
window.addEventListener('resize', updateBackground);

// =====================
// Hide/Show Character Info
// =====================
function hideCharacterInfo() {
    const characterInfo = document.getElementById("character-info");
    if (characterInfo) characterInfo.style.display = "none";
    const characterContainer = document.querySelector('.character-background');
    if (characterContainer) {
        characterContainer.style.backgroundImage = "url('assets/images/character-presets/cover/default.gif')";
    }
    resetCharacterCardStates();
    currentCharacter = null;
}

// =====================
// Fullscreen Functions
// =====================
function openFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

// =====================
// Hide/Show Character Container
// =====================
(function () {
    const toggleBtn = document.getElementById('toggle-character-hide-btn');
    const bottomNav = document.querySelector('.bottom-navigation');
    const charContainer = document.querySelector('.character-container');
    let isHidden = false;

    function updateVisibility() {
        if (!toggleBtn || !bottomNav) return;
        bottomNav.classList.toggle('nav-hidden', isHidden);
        if (charContainer) {
            charContainer.classList.toggle('hidden', isHidden); // Use class for transition
        }
        toggleBtn.innerHTML = isHidden
            ? '<i class="fa-solid fa-eye"></i>'
            : '<i class="fa-solid fa-eye-slash"></i>';
        const label = isHidden ? 'Show CharacterContainer' : 'Hide CharacterContainer';
        toggleBtn.setAttribute('aria-label', label);
        toggleBtn.setAttribute('title', label);
    }

    if (toggleBtn && bottomNav) {
        toggleBtn.addEventListener('click', () => {
            isHidden = !isHidden;
            updateVisibility();
        });
    }
})();

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
        document.querySelectorAll('.filter-character a').forEach(filterBtn => {
            filterBtn.addEventListener('click', function (e) {
                e.preventDefault();
                const category = this.dataset.category;
                document.querySelectorAll('.character-card').forEach(card => {
                    const cardCategories = (card.dataset.category || '').split(',').map(cat => cat.trim());
                    card.style.display = (category === 'all' || cardCategories.includes(category)) ? '' : 'none';
                });
                currentIndex = 0;
                updateCarousel();
            });
        });
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

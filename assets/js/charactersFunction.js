// Map character names to landscape and portrait background images
const characterBackgrounds = {
    comingSoon: { landscape: "url('')", portrait: "url('')" },
    elishia: { landscape: "url('assets/images/bg/lbg_main2.webp')", portrait: "url('')" },
    hexxana: { landscape: "url('assets/images/bg/lbg_main3.webp')", portrait: "url('')" },
    ren: { landscape: "url('assets/images/bg/lbg_main3.webp')", portrait: "url('')" },
    rayza: { landscape: "url('assets/images/bg/lbg_main3.webp')", portrait: "url('')" },
    liliana: { landscape: "url('assets/images/bg/lbg_main3.webp')", portrait: "url('')" },
    blessica: { landscape: "url('assets/images/bg/lbg_main3.webp')", portrait: "url('')" },
    lunara: { landscape: "url('assets/images/bg/lbg_main3.webp')", portrait: "url('')" },
    floribeth: { landscape: "url('assets/images/bg/lbg_main3.webp')", portrait: "url('')" },
    shelain: { landscape: "url('assets/images/bg/lbg_main3.webp')", portrait: "url('')" },
    arzhel: { landscape: "url('assets/images/bg/lbg_main3.webp')", portrait: "url('')" },   
    feya: { landscape: "url('assets/images/bg/lbg_main3.webp')", portrait: "url('')" },
};

// Track the currently selected character
let currentCharacter = null;

function updateBackground() {
    if (!currentCharacter) return;

    const isMobile = window.innerWidth <= 768;
    const backgroundType = isMobile ? 'portrait' : 'landscape';
    const characterContainer = document.querySelector('.character-background');

    // Apply fade-out effect before changing the background
    characterContainer.style.transition = "opacity 0.3s ease-out";
    characterContainer.style.opacity = 0;

    // After a short delay, change the background image and fade back in
    setTimeout(() => {
        if (characterBackgrounds[currentCharacter]) {
            characterContainer.style.backgroundImage = characterBackgrounds[currentCharacter][backgroundType];
        } else {
            characterContainer.style.backgroundImage = "url('assets/images/character-presets/cover/default.gif')";
        }

        // Fade back in
        characterContainer.style.transition = "opacity 0.5s ease-in";
        characterContainer.style.opacity = 1;
    }, 300); // Adjust timing for smoother effect
}

// Set CSS for the transition effect on `.character-container`
const characterContainer = document.querySelector('.character-background');
characterContainer.style.transition = "opacity 0.5s ease";

// Show character information and update the main background
function showCharacterInfo(character) {
    const characterInfo = document.getElementById("character-info");
    const characterDetails = document.getElementById("character-details");

    // Set default character details
    let details = {
        name: "Info Not Available Yet",
        race: "",
        gender: "",
        height: "",
        homeland: "",
        faction:"",
        role:"",
        occupation: "",
        affiliates: "",
        elementalImages: [
            "assets/images/character-presets/roles/question.webp"
        ],
        likes: "",
        dislikes: "",
        weapon: "",
        ability1: "",
        ability2: "",
        ability3: "",
        ability4: "",
        ability5: "",
        ability6: "",
        background: ""
    };

    if (character === 'elishia') {
        details = {
            name: "<blue>Elishia Bluestein</blue>",
            race: "<info><blue>Human</blue></info>",
            gender: "<info><blue>Female</blue></info>",
            height: "<info><blue>5'5\" ft / 165.1 cm</blue></info>",
            homeland: "<info><blue>Orag City, District 3</blue></info>",
            faction: "<info><blue>Falconite</blue></info>",
            role: "<info><blue>Versatile</blue></info>",
            occupation: "<info><blue>Tactical Specialist<blue></info>",
            affiliates: "<info><blue><i class='fas fa-users'></i> Roman Bluestein (Older Brother)</blue></info> <info><blue><i class='fas fa-users'></i> Nicks (Bestfriend)</blue></info> <info><blue><i class='fas fa-users'></i> Zackry (Commandant)</blue></info> <info><blue><i class='fas fa-users'></i> Evalete (Squadmate)</blue></info> <info><blue><i class='fas fa-users'></i> Zenki (Squadmate)</blue></info> <info><blue><i class='fas fa-users'></i> Jazen (Squadmate)</blue></info>",
            elementalImages: [
                "assets/images/character-presets/elements/energy.webp"
            ],
            likes: "<info><blue><i class='fas fa-check'></i> Music</blue></info> <info><blue><i class='fas fa-check'></i> Lollipops & Bubblegum</blue></info> <info><blue><i class='fas fa-check'></i> Cats</blue></info> <info><blue><i class='fas fa-check'></i> Reading</blue></info> <info><blue><i class='fas fa-check'></i> Organizing</blue></info> <info><blue><i class='fas fa-check'></i> Hover Bikes</blue></info> <info><blue><i class='fas fa-check'></i> Tinkering with Tech</blue></info>",
            dislikes: "<info><blue><i class='fas fa-times'></i> Dustwrought</blue></info> <info><blue><i class='fas fa-times'></i> Hollowborn</blue></info> <info><blue><i class='fas fa-times'></i> Her Older Brother</blue></info> <info><blue><i class='fas fa-times'></i> Disorder & Chaos</blue></info> <info><blue><i class='fas fa-times'></i> Wasting Time</blue></info> <info><blue><i class='fas fa-times'></i> Arrogant People</blue></info>",
            weapon: "<info><blue><i class='fas fa-heart'></i> Falconate Blade</blue></info> <info><blue><i class='fas fa-heart'></i> Dual Gun</blue></info>",
            ability1: "<info><blue><i class='fas fa-star'></i> Holographic Shields</blue></info> – Projects sturdy, translucent energy barriers that absorb incoming damage. These shields can be cast around allies or positioned tactically to control the flow of battle.",
            ability2: "<info><blue><i class='fas fa-bolt'></i> Weapon Creation</blue></info> – Constructs energy-based weapons on demand, crafted from her imagination and adapted to any combat situation. Weapons can be fused for unique hybrid effects.",
            ability3: "<info><blue><i class='fas fa-cubes'></i> Environmental Manipulation</blue></info> – Alters the terrain using advanced holographic constructs, creating cover, barricades, or traps. A tactical edge that turns the battlefield into her playground.",
            ability4: "<info><blue><i class='fas fa-crosshairs'></i> Multi-Weapon Combat</blue></info> – Wields multiple energy weapons simultaneously with precision. Switches seamlessly between melee and ranged forms to overwhelm her opponents.",
            ability5: "<info><blue><i class='fas fa-clone'></i> Decoys and Illusions</blue></info> – Generates realistic holographic doubles of herself or objects to mislead enemies, draw fire, or confuse trackers during stealth operations.",
            ability6: "<info><blue><i class='fas fa-microchip'></i> Tactical Override</blue></info> – Enhances her neural link with battlefield drones or systems, temporarily increasing her reaction time and precision while disrupting enemy tech-based abilities.",
            background: "Elishia spent the first years of her life in a serene province outside the bustling city of Orag, where she lived with her mother—a renowned biotech expert researching a mysterious new disease quietly spreading across the region. Their world, though simple, was filled with warmth, laughter, and a deep bond between mother and daughter.<br><br>After a year of peace, everything changed. Her father, a visionary inventor and the mind behind NanoFutureTech—a pioneering private lab pushing the boundaries of human advancement—decided to reunite the family in the capital. He sought better educational opportunities for Elishia at the prestigious university and wanted to personally monitor the rare disease she carried—an unintended result of his past experiments.<br><br>The family relocated to his old residence in the capital, a house filled with relics of invention and echoes of long-forgotten ambitions. As Elishia began her university life, she quickly drew attention. Her brilliance, matched with her lineage as the daughter of two esteemed scientists, earned her admiration among her peers. But beneath the spotlight, Elishia longed for the quiet days of the province—days untouched by expectation or legacy.<br><br>That peace was shattered without warning.<br><br>The city spiraled into chaos. People transformed into twisted, violent abominations—creatures born of the spreading plague. In the midst of the horror, her parents made the ultimate sacrifice to protect her. Elishia was pulled from the ruins by a special ops unit, evacuated to a survivor safe zone. The trauma of loss burned into her soul—but so did a purpose.<br><br>No longer the quiet dreamer, Elishia took up arms.<br><br>Driven by the memory of her parents and fueled by a need to protect others from suffering the same fate, she enlisted in the military. Through relentless training and unwavering focus, she rose quickly—earning her place as a Falconite Agent within Falcon Company, an elite tactical unit known for precision, courage, and adaptability in high-risk zones.<br><br>Now a hardened tactical specialist, Elishia fights not just for survival, but to restore what was lost—and to ensure no one else is left unguarded in the face of a crumbling world. Every mission she takes is a step toward reclaiming peace… and a tribute to the legacy of the family who shaped her."
        };
    } else if (character === 'hexxana') {
        details = {
            name: "<purple>Hexxana</purple>",
            race: "<info><purple>Unknown</purple></info>",
            gender: "<info><purple>Female</purple></info>",
            height: "<info><purple>5'7\" ft / 170.2 cm</purple></info>",
            homeland: "<info><purple>Unknown</purple></info>",
            faction: "<info><purple>None</purple></info>",
            role: "<info><purple>Mage</purple></info> <info><purple>Warrior</purple></info>",
            occupation: "<info><purple>None<purple></info>",
            affiliates: "<info><purple><i class='fas fa-users'></i> Unknown</purple></info>",
            elementalImages: [
                "assets/images/character-presets/elements/shadow.webp"
            ],
            likes: "<info><purple><i class='fas fa-check'></i> Grimoire</purple></info> <info><purple><i class='fas fa-check'></i> Hexing</purple></info> <info><purple><i class='fas fa-check'></i> Wandering</purple></info> <info><purple><i class='fas fa-check'></i> Making Potions</purple></info> <info><purple><i class='fas fa-check'></i> Silence & Solitude</purple></info> <info><purple><i class='fas fa-check'></i> Eclipses & Starry Nights</purple></info> <info><purple><i class='fas fa-check'></i> Rare Artifacts</purple></info>",
            dislikes: "<info><purple><i class='fas fa-times'></i> Doing Chores</purple></info> <info><purple><i class='fas fa-times'></i> Loud, Noisy Places</purple></info> <info><purple><i class='fas fa-times'></i> Being Controlled</purple></info> <info><purple><i class='fas fa-times'></i> Weak-willed People</purple></info> <info><purple><i class='fas fa-times'></i> Uninvited Company</purple></info>",
            weapon: "<info><purple><i class='fas fa-heart'></i> Oblivion’s Edge</purple></info>",
            ability1: "<info><purple><i class='fas fa-mask'></i> Shadow Manipulation</purple></info> – Bends shadows to her will, forming them into weapons, cloaks, or illusions. These ever-shifting forms blur the line between reality and nightmare.",
            ability2: "<info><purple><i class='fas fa-circle-notch'></i> Umbral Rift</purple></info> – Opens a swirling rift of darkness that pulls in enemies, distorts space, and inflicts continuous damage. Can be used for crowd control or quick repositioning.",
            ability3: "<info><purple><i class='fas fa-skull-crossbones'></i> Curse Weaving</purple></info> – Weaves hexes into the air or onto weapons that inflict debuffs like slowed reactions, mental torment, or weakened defenses. Some curses linger, even after combat ends.",
            ability4: "<info><purple><i class='fas fa-hand-sparkles'></i> Void Tendrils</purple></info> – Summons inky tendrils from the void that lash at foes, immobilize targets, or siphon their energy. A versatile spell that balances crowd control and suppression.",
            ability5: "<info><purple><i class='fas fa-wind'></i> Shadow Reaping</purple></info> – Channels dark energy through her scythe, releasing crescent-shaped slashes of magic from afar that drain enemy vitality and pierce through armor.",
            ability6: "<info><purple><i class='fas fa-skull'></i> Demonic Form: Reaper’s Wrath</purple></info> – Transforms into her demon form, amplifying her power. While active, her scythe grows more lethal, her attacks quicken, and her aura instills fear in even the bravest foes.",
            background: "Hexxana is an enigma—a wandering force of magic and steel cloaked in shadows and silence. Her origins are lost to time, her presence marked only by fleeting glimpses under starry skies and whispered rumors of spectral sightings. Wielding her cursed scythe, Oblivion’s Edge, she cuts down foes with devastating magic and precision, vanishing just as quickly as she appears.<br><br>She walks a solitary path, guided by an unknown purpose, helping only when it aligns with her will. Though some see her as a savior in the dark, others fear her as a harbinger of doom. Neither wholly light nor dark, Hexxana remains fiercely neutral—bound to no kingdom, loyal only to herself. Her aura is both haunting and beautiful, much like the twilight she so often vanishes into."
        };
    } else if (character === 'rayza') {
        details = {
            name: "<pink>Rayza Huǒ</pink>",
            race: "<info><pink>Human</pink></info>",
            gender: "<info><pink>Female</pink></info>",
            height: "<info><pink>5'6\" ft / 167.6 cm</pink></info>",
            homeland: "<info><pink>Hidden Mist Valley</pink></info>",
            faction: "<info><pink>Dracona Sovereignty</pink></info>",
            role: "<info><pink>Assassin</pink></info>",
            occupation: "<info><pink>Stormwing Guardian<pink></info>",
            affiliates: "<info><pink><i class='fas fa-users'></i> Ren (Older Brother)</pink></info> <info><pink><i class='fas fa-users'></i> Liliana (Ally)</pink></info> <info><pink><i class='fas fa-users'></i> Feya (Friend)</pink></info>",
            elementalImages: [
                "assets/images/character-presets/elements/air.webp" 
            ],
            likes: "<info><pink><i class='fas fa-check'></i> Cute Stuff</pink></info> <info><pink><i class='fas fa-check'></i> Training & Combat</pink></info> <info><pink><i class='fas fa-check'></i> Flying or Gliding</pink></info> <info><pink><i class='fas fa-check'></i> Freedom</pink></info> <info><pink><i class='fas fa-check'></i> Sweets</pink></info>",
            dislikes: "<info><pink><i class='fas fa-times'></i> Lazy People</pink></info> <info><pink><i class='fas fa-times'></i> Loud or Arrogant People</pink></info> <info><pink><i class='fas fa-times'></i> Crowded Places</pink></info> <info><pink><i class='fas fa-times'></i> Extreme Heat</pink></info> <info><pink><i class='fas fa-times'></i> Losing Control</pink></info>",
            weapon: "<info><pink><i class='fas fa-heart'></i> Tempest Bloom</pink></info>",
            ability1: "<info><pink><i class='fas fa-cloud'></i> Mist Veil</pink></info> – Envelops herself in a cloak of dense mist, reducing visibility and enhancing stealth. Ideal for ambushing enemies or escaping a losing fight.",
            ability2: "<info><pink><i class='fas fa-wind'></i> Wind Blades</pink></info> – Launches crescent blades of compressed air with deadly speed, slicing enemies from a distance with precise strikes.",
            ability3: "<info><pink><i class='fas fa-fan'></i> Dance of the Tempest</pink></info> – Combines elegance with lethality in a whirlwind barrage of wind-fueled strikes, hitting all enemies around her in a rhythmic assault.",
            ability4: "<info><pink><i class='fas fa-shoe-prints'></i> Silent Step</pink></info> – Moves with absolute silence, guided by subtle air currents. Increases speed and evasion, letting her bypass detection or close in unnoticed.",
            ability5: "<info><pink><i class='fas fa-leaf'></i> Petal Storm</pink></info> – Summons a flurry of wind-carried petals that slice and confuse enemies, creating a distraction while buffing her agility mid-combat.",
            ability6: "<info><pink><i class='fas fa-fire'></i> Blood Rage</pink></info> – Taps into her latent bloodline power, igniting a red aura that boosts her strength and reflexes to near-superhuman levels. When it fades, she’s left physically drained.",
            background: "Rayza was born into a prestigious family celebrated for their mastery in combat, especially in the art of swordsmanship. Growing up, she idolized her father and older brother, Ren, both renowned for their skill and strength. She longed to join their ranks, to prove her worth as a warrior. But her father, bound by tradition and protective instincts, refused to train her, believing the path of a swordsman was not meant for her. His decision only fueled her resolve. Determined to show her father that strength was not bound by tradition or gender, Rayza began to train in secret.<br><br>Her brother, who recognized her passion and potential, became her silent ally, offering tips and guidance away from their father's watchful eyes. When news of a prestigious tournament spread through the land, Rayza saw her chance. She entered the competition in disguise, hiding her face to avoid recognition. Her heart pounded as she faced each opponent, her confidence growing with every victory. One by one, she defeated nine challengers, advancing to the final round. To her shock, her last opponent was none other than Ren.<br><br>She froze, realizing her secret could be exposed, but her brother’s smirk and knowing glance told her he had recognized her long before. He remained silent, signaling his respect for her determination. Rayza steeled herself for the fight, determined to prove herself not just to her brother but to everyone who doubted her. The duel was fierce and unrelenting, each sibling pushing the other to their limits. Rayza fought with all her heart, but Ren’s experience and skill proved formidable. As she faced the brink of defeat, something deep within her awakened—a latent power passed down through her bloodline.<br><br>Enveloped in a red aura, Rayza entered a 'blood rage,' her strength and speed heightened to extraordinary levels. In the stands, her father’s face changed from shock to realization as he recognized the aura—and his daughter. His heart warred between pride and fear, but the tournament rules demanded that the match continue. The crowd watched in awe as the siblings clashed in a battle that seemed almost otherworldly, their bond and rivalry displayed in every strike.<br><br>After an hour of grueling combat, Rayza finally succumbed to exhaustion, defeated by her brother but not broken. She awoke to find herself at home, her father and Ren beside her. Before she could explain herself, her father placed a hand on her shoulder, his expression a mix of pride and sadness. “I was only trying to protect you,” he admitted, his voice heavy with emotion. “You remind me so much of your mother. But watching you fight, I realize now—I was wrong. I won't always be here to shield you, and perhaps that isn’t what you need.<br><br>Keep growing, Rayza. Become strong, but also wise. And, Ren,” he added, turning to his son, “look after your sister.” In that moment, Rayza felt the acceptance she had longed for. The family shared a tearful embrace, a silent promise binding them closer than ever. From that day on, Rayza’s path was clear—not just to prove her worth but to carry forward the strength and love her family had instilled in her."
        };
    } else if (character === 'liliana') {
        details = {
            name: "<yellow>Liliana Solarae</yellow>",
            race: "<info><yellow>Celestial</yellow></info>",
            gender: "<info><yellow>Female</yellow></info>",
            height: "<info><yellow>5'7\" ft / 170.2 cm</yellow></info>",
            homeland: "<info><yellow>Magelion Empire</yellow></info>",
            faction: "<info><yellow>Light Harbingers</yellow></info>",
            role: "<info><yellow>Mage</yellow></info> <info><yellow>Healer</yellow></info>",
            occupation: "<info><yellow>Grand Priestess<yellow></info>",
            affiliates: "<info><yellow><i class='fas fa-users'></i> Zion (Father)</yellow></info> <info><yellow><i class='fas fa-users'></i> Feya (Companion)</yellow></info> <info><yellow><i class='fas fa-users'></i> Lunara (Mother)</yellow></info> <info><yellow><i class='fas fa-users'></i> Blessica (Aunt)</yellow></info>",
            elementalImages: [
                "assets/images/character-presets/elements/light.webp", 
                "assets/images/character-presets/elements/frost.webp"
            ],
            likes: "<info><yellow><i class='fas fa-check'></i> Reading</yellow></info> <info><yellow><i class='fas fa-check'></i> Helping People</yellow></info> <info><yellow><i class='fas fa-check'></i> Singing</yellow></info> <info><yellow><i class='fas fa-check'></i> Dancing</yellow></info> <info><yellow><i class='fas fa-check'></i> Peaceful Gardens</yellow></info> <info><yellow><i class='fas fa-check'></i> Teaching Young Mages</yellow></info>",
            dislikes: "<info><yellow><i class='fas fa-times'></i> Nethersteel Pact</yellow></info> <info><yellow><i class='fas fa-times'></i> War and Senseless Bloodshed</yellow></info> <info><yellow><i class='fas fa-times'></i> Betrayal</yellow></info> <info><yellow><i class='fas fa-times'></i> Abuse of Magic</yellow></info> <info><yellow><i class='fas fa-times'></i> Being Seen Only as a Symbol</yellow></info>",
            weapon: "<info><yellow><i class='fas fa-heart'></i> Solaraenia Staff</yellow></info>",
            ability1: "<info><yellow><i class='fas fa-sun'></i> Radiant Blessing</yellow></info> – Heals allies in an area with a burst of warm, holy light, gradually restoring health and cleansing minor ailments.",
            ability2: "<info><yellow><i class='fas fa-snowflake'></i> Frostbound Aegis</yellow></info> – Conjures a shimmering barrier of frost and light, absorbing damage and slowing enemies who strike it.",
            ability3: "<info><yellow><i class='fas fa-praying-hands'></i> Sanctum of Solarae</yellow></info> – Marks sacred ground that empowers allies with regeneration and resistance, while weakening enemies who step within.",
            ability4: "<info><yellow><i class='fas fa-icicles'></i> Glacial Lance</yellow></info> – Forms a sharp spear of frozen light and hurls it with deadly precision, piercing through enemies and freezing them on impact.",
            ability5: "<info><yellow><i class='fas fa-star-of-life'></i> Aurora Ascension</yellow></info> – Enters a transcendent state, amplifying all her abilities for a short duration and radiating waves of healing energy.",
            ability6: "<yellow><info><i class='fas fa-praying-hands'></i> Celestial Oath</yellow></info> – Liliana binds her soul to her allies, making them temporarily invulnerable to death for several seconds. If she falls during this time, she is revived in a burst of healing light that restores nearby allies.",
            background: "Liliana Solarae, the radiant founder of the Magelion Empire, rose from the ashes of a fallen world. After the death of the Solaraenia King and the mysterious disappearance of her mother, Lunara, during the catastrophic Great War, Liliana—still a child—was swept into the chaos of a land torn apart. Their celestial homeland was obliterated, and the Umbrakiths were driven to near extinction.<br><br>Eldoria, once vibrant, was on the brink of annihilation. In the shadows of destruction, Liliana was taken in by her aunt, Blessica—Lunara’s twin sister—who concealed Liliana’s true lineage to protect her from enemies still thirsting for blood. Under Blessica’s watchful eye, Liliana was trained in secret, groomed not just as a survivor—but as a beacon of hope. Her mother’s final words echoed in her soul: 'You are the future of our people.' When she came of age, Blessica stepped aside, entrusting Liliana with the crown and the burden of a fractured world. Refusing to let history repeat itself, Liliana rose with wisdom far beyond her years.<br><br>She sought unity where there was only division. Strength where there was only sorrow. Summoning the leaders of every race across Eldoria, Liliana called for a grand council—a final chance to end the cycle of violence. Though not all agreed, many saw truth in her words. Her voice, steady and unwavering, ignited something ancient and pure in their hearts. To safeguard this fragile new peace, she formed the Light Harbingers—a legendary order of warriors and guardians drawn from every corner of Eldoria.<br><br>Not all who wished to join succeeded, for Liliana herself forged the trials: tests not of strength, but of compassion, discipline, and resolve. In time, peace returned. Races once divided sang her name in reverence. Eldoria flourished under her guidance. Liliana became a living symbol—not just of survival, but of unity, love, and light. Yet, amid celebration, Liliana stood watchful. For in her dreams, she saw glimpses of what’s to come: a shrouded figure, a dying sky, a second darkness waiting to devour the light. Peace had come… but for how long?"
        };
    } else if (character === 'lunara') {
        details = {
            name: "<red>Lunara</red>",
            race: "<info><red>Celestial</red></info>",
            gender: "<info><red>Female</red></info>",
            height: "<info><red>5'9\" ft / 175.3 cm</red></info>",
            homeland: "<info><red>Solaraenia</red></info>",
            faction: "<info><red>None</red></info>",
            role: "<info><red>Mage</red></info>",
            occupation: "<info><red>None<red></info>",
            affiliates: "<info><red><i class='fas fa-users'></i> Zion (Lover)</red></info> <info><red><i class='fas fa-users'></i> Liliana (Daughter)</red></info> <info><red><i class='fas fa-users'></i> Blessica (Sister)</red></info> <info><red><i class='fas fa-users'></i> Floribeth (Former Ally)</red></info> <info><red><i class='fas fa-users'></i> Shelain (Former Ally)</red></info>",
            elementalImages: [
                "assets/images/character-presets/elements/shadow.webp"
            ],
            likes: "<info><red><i class='fas fa-check'></i> Zion</red></info> <info><red><i class='fas fa-check'></i> Moonlit Nights</red></info> <info><red><i class='fas fa-check'></i> Ancient Magic</red></info> <info><red><i class='fas fa-check'></i> Roses</red></info>",
            dislikes: "<info><red><i class='fas fa-times'></i> Celestial Betrayal</red></info> <info><red><i class='fas fa-times'></i> War</red></info> <info><red><i class='fas fa-times'></i> Her Own Reflection</red></info>",
            weapon: "<info><red><i class='fas fa-heart'></i> Crimson Wail (Blood-Cursed Scythe)</red></info>",
            ability1: "<info><red><i class='fas fa-eye'></i> Blood Moon's Curse</red></info> – Anyone who meets her gaze under the blood moon dies instantly.",
            ability2: "<info><red><i class='fas fa-burn'></i> Scarlet Dominion</red></info> – Controls the blood of the fallen, twisting it into deadly weapons or chains to ensnare enemies.",
            ability3: "<info><red><i class='fas fa-ghost'></i> Eclipsing Phantom</red></info> – Becomes a shadow-like wraith, moving unseen through the battlefield, immune to physical attacks.",
            ability4: "<info><red><i class='fas fa-volume-mute'></i> Wail of the Forsaken</red></info> – Her sorrowful cry weakens the minds of those who hear it, driving them to madness.",
            ability5: "<info><red><i class='fas fa-brain'></i> Umbral Requiem</red></info> – Summons a spectral vision of Zion, causing enemies to relive their most painful memories, paralyzing them in fear.",
            ability6: "<info><red><i class='fas fa-explosion'></i> Final Embrace</red></info> – If she is mortally wounded, she can unleash a devastating explosion of cursed energy, consuming everything around her.",
            background: "Lunara was once a celestial being—pure, radiant, and beloved. She was the selfless and compassionate princess of Solaraenia, destined to inherit the throne and bring eternal light to her people. She embodied everything a ruler should be—kind yet strong, wise yet humble. But love, the most beautiful and dangerous force, would become her ruin.<br><br>In secret, she fell for Zion, the prince of the Umbrakiths, the sworn enemies of the Solaraenians for millennia. Their love was a forbidden flame, burning against the tides of history and war. They met not as enemies, but as two wandering souls, lost in the vastness of the realms. In Zion, Lunara saw not a monster, not an enemy, but a heart that beat in harmony with hers. And for him, she was not just a celestial heir but a light he had never known in his shadowed world.<br><br>But love is not enough to break the chains of destiny. When their secret was unveiled, the Solarae King’s fury shook the heavens. He accused Lunara of treason, of falling victim to the dark magic of the Umbrakiths. Her people turned against her, branding her a traitor to their divine bloodline.<br><br>In the eyes of the Solaraenians, she was no longer their princess—she was tainted, lost, a disgrace. And so, she was cast down, banished from Solaraenia, and exiled into the mortal land of Eldoria. But her fall was only the beginning of the tragedy. The Umbrakiths were stunned by the revelation. They had not conspired to claim the celestial princess, yet their hands were now forced into war. The Solaraenians, blinded by their wrath, saw no redemption for Lunara. They saw only war.<br><br>And so, the Great War of Eldoria began—a conflict forged not by hatred, but by love that the world refused to accept. Amidst the bloodshed, Lunara and Zion fought together—not as leaders of warring nations, but as lovers desperate to stop the slaughter. They pleaded, they struggled, they tried to hold back the tides of fate itself. But fate is cruel. On the battlefield, Zion fell. Lunara watched as the blade that should have struck her instead pierced through the heart of the man she loved.<br><br>His blood stained her hands, warm, real, slipping through her trembling fingers. The battlefield faded. Time itself seemed to shatter. She saw every moment they had shared—His laughter, the whispered promises, the stolen touches beneath forbidden skies. His voice, calling her name, fading into silence. His warmth, now nothing but a lifeless embrace. And something inside her broke. A whisper left her lips, a prayer, a curse, an agony too great for words.<br><br>The sky darkened, the winds howled, and a blood moon rose. Those who dared look into her eyes saw only death. An aurora, dark and unholy, erupted around her as her tears of sorrow turned into rivers of blood. And then, the slaughter began. She bent the blood of those around her, twisting them into lifeless husks, consuming their very essence in an unrelenting storm of carnage. The battlefield became a graveyard. Soldiers—Solaraenians, Umbrakiths, all—fell before her wrath. She was no longer the celestial princess, nor the traitor in exile. She was something else. A phantom. A reaper. A queen of death.<br><br>That day, the Scarlet Phantom was born. And the war ended. But not in victory, nor in peace. Only in silence.<br><br>Now, Lunara Umbrakith wanders the lands of Eldoria, her heart long turned to ice, her soul shackled by the blood of those she loved and those she loathed. She no longer fights for light, nor darkness. She seeks something beyond the reach of gods and mortals alike. Perhaps redemption. Perhaps revenge. Or perhaps, she simply searches for the one thing she lost—the love that once made her whole.<br><br>For in the end, Lunara never wished to be queen. She only wished to be with him. And that… was the one wish the universe would never grant."
        };
    } else if (character === 'feya') {
        details = {
            name: "<orange>Feya Ashey</orange>",
            race: "<info><orange>Vulpheiri</orange></info>",
            gender: "<info><orange>Female</orange></info>",
            height: "<info><orange>5'4\" ft / 162.6 cm</orange></info>",
            homeland: "<info><orange>Frostfire Timberland</orange></info>",
            faction: "<info><orange>Light Harbingers</orange></info>",
            role: "<info><orange>Mage</orange></info>",
            occupation: "<info><orange>Arch Harbinger<orange></info>",
            affiliates: "<info><orange><i class='fas fa-users'></i> Liliana (Mentor)</orange></info> <info><orange><i class='fas fa-users'></i> Ren (Friend)</orange></info> <info><orange><i class='fas fa-users'></i> Rayza (Friend)</orange></info>",
            elementalImages: [
                "assets/images/character-presets/elements/fire.webp", 
                "assets/images/character-presets/elements/light.webp"
            ],
            likes: "<info><orange><i class='fas fa-check'></i> Grimoire</orange></info> <info><orange><i class='fas fa-check'></i> Warmth & Sunlight</orange></info> <info><orange><i class='fas fa-check'></i> Foxes & Small Creatures</orange></info> <info><orange><i class='fas fa-check'></i> Dawn & Dusk</orange></info> <info><orange><i class='fas fa-check'></i> Melodic Sounds</orange></info> <info><orange><i class='fas fa-check'></i> Fire Magic</orange></info>",
            dislikes: "<info><orange><i class='fas fa-times'></i> Cold & Rainy Weather</orange></info> <info><orange><i class='fas fa-times'></i> Large Bodies of Water</orange></info> <info><orange><i class='fas fa-times'></i> Being Watched</orange></info> <info><orange><i class='fas fa-times'></i> Nethersteel Pact</orange></info> <info><orange><i class='fas fa-times'></i> Strict Rules</orange></info>",
            weapon: "<info><orange><i class='fas fa-heart'></i> None</orange></info>",
            ability1: "<info><orange><i class='fas fa-fire'></i> Foxfire Embers</orange></info> – Releases a flurry of ethereal foxfire flames that chase down enemies and explode on impact.",
            ability2: "<info><orange><i class='fas fa-tachometer-alt'></i> Spirit Rush</orange></info> – Dashes forward in a burst of fiery speed, leaving a trail of fire and damaging enemies in her path.",
            ability3: "<info><orange><i class='fas fa-moon'></i> Eclipse Flare</orange></info> – Channels moonlight and fire into a powerful beam that pierces through enemy lines, dealing massive elemental damage.",
            ability4: "<info><orange><i class='fas fa-paw'></i> Infernal Vulpes</orange></info> – Transforms into a fiery fox spirit, increasing her agility and spell potency for a short duration.",
            ability5: "<info><orange><i class='fas fa-shield-alt'></i> Radiant Safeguard</orange></info> – Summons a protective charm that absorbs magic damage and reflects a portion of it back to the attacker.",
            ability6: "<info><orange><i class='fas fa-star'></i> Celestial Afterglow</orange></info> – Feya channels her inner radiance, creating a glowing sigil beneath her and her allies. It heals nearby allies over time and grants brief invulnerability to fatal damage once. Enemies that enter the sigil's edge are burned by radiant flames.",
            background: "Feya was once a carefree child, growing up in the mystical Frostfire Timberland, nestled near the northern mountains of the Magelion Empire. Her people, deeply attuned to nature and magic, lived in peaceful harmony, untouched by the conflicts of the outside world. With an adventurous spirit and an ever-burning curiosity, Feya spent her days exploring the vast Frostfire Timberland, her innate magic strengthening with each passing day.<br><br>But peace is never eternal. The rise of the Nethersteel Pact shattered the tranquility of her homeland. The Legion's forces swept through the land like a merciless storm, leaving destruction in their wake. Her people fought valiantly to defend their sacred home, her parents among the bravest warriors, but the enemy's power was overwhelming. One by one, the Frostfire Timberlands burned, and her entire race was driven to extinction.<br><br>Feya, the last survivor, refused to go down without a fight. In a desperate stand, she unleashed her full power, incinerating the remaining Legion troops in a fiery explosion of magic. But her victory was fleeting. Drained and gravely wounded, she found herself face to face with the Nethersteel Pact’s ruthless general—Drakeon. Overwhelmed, she fell in battle, her strength fading as the dark forces prepared to end her existence.<br><br>Just as all hope seemed lost, the royal army of the Magelion Empire arrived, forcing the Nethersteel Pact into retreat. Yet, the damage had already been done—the once-thriving Frostfire Timberland lay in ruins, its beauty forever tainted by corruption. Hours later, Feya was found unconscious by the Empire’s scouts. Among them was Queen Liliana, a compassionate ruler renowned for her wisdom and healing powers. Moved by the sight of the broken girl and the devastation of her homeland, Liliana personally nursed Feya back to health. Recognizing the immense power within her, the queen adopted her as her own daughter, offering her a new life within the Empire.<br><br>Under Liliana’s guidance, Feya trained to become one of the Light Harbingers, an elite order sworn to protect the Crystalight, the heart of the Empire’s power. Though the wounds of her past still linger, Feya has found a new purpose—to ensure that no one else suffers the fate of her people. As the Fiery Fox of the Light Harbingers, she fights with relentless passion, wielding her magic to defend the Empire and those she holds dear. But with Drakeon still at large and the Nethersteel Pact looming in the shadows, she knows that her battle is far from over. Her past may have been forged in tragedy, but her future burns brighter than ever."
        };
    } else if (character === 'floribeth') {
        details = {
            name: "<green>Floribeth Eldeblossom</green>",
            race: "<info><green>Elf</green></info>",
            gender: "<info><green>Female</green></info>",
            height: "<info><green>5'6\" ft / 167.6 cm</green></info>",
            homeland: "<info><green>Luminwood Expanse</green></info>",
            faction: "<info><green>Bloomforge Order</green></info>",
            role: "<info><green>Healer</green></info>",
            occupation: "<info><green>Eldertree Warden<green></info>",
            affiliates: "<info><green><i class='fas fa-users'></i> Lunara (Former Ally)</green></info> <info><green><i class='fas fa-users'></i> Shelain (Ally)</green></info> <info><green><i class='fas fa-users'></i> Liliana (Ally)</green></info> <info><green><i class='fas fa-users'></i> Arzhel (Companion)</green></info>",
            elementalImages: [
                "assets/images/character-presets/elements/nature.webp", 
                "assets/images/character-presets/elements/earth.webp"
            ],
            likes: "<info><green><i class='fas fa-check'></i> Gardening</green></info> <info><green><i class='fas fa-check'></i> Rainy Days</green></info> <info><green><i class='fas fa-check'></i> Singing to Trees</green></info> <info><green><i class='fas fa-check'></i> Ancient Lore</green></info>",
            dislikes: "<info><green><i class='fas fa-times'></i> Nethersteel Pact</green></info> <info><green><i class='fas fa-times'></i> Corruption</green></info> <info><green><i class='fas fa-times'></i> Industrial Expansion</green></info> <info><green><i class='fas fa-times'></i> Fire Magic</green></info>",
            weapon: "<info><green><i class='fas fa-heart'></i> Thornweaver Staff</green></info>",
            ability1: "<info><green><i class='fas fa-seedling'></i> Verdant Embrace</green></info> – Heals allies over time by channeling life energy through roots and vines.",
            ability2: "<info><green><i class='fas fa-leaf'></i> Briarwall</green></info> – Summons a thick wall of thorns to block enemy movement or projectiles.",
            ability3: "<info><green><i class='fas fa-spa'></i> Bloom Surge</green></info> – A pulse of blooming flowers stuns enemies and restores minor health to allies in range.",
            ability4: "<info><green><i class='fas fa-tree'></i> Nature’s Wrath</green></info> – Unleashes the fury of the forest in a massive AoE of erupting roots and vines.",
            ability5: "<info><green><i class='fas fa-vial'></i> Thornbind</green></info> – Immobilizes a target by entwining them in magical vines, silencing spellcasters.",
            ability6: "<info><green><i class='fas fa-pagelines'></i> Groveheart Ascension</green></info> – Temporarily enters an awakened state, enhancing all nature spells, summoning dryad spirits to fight alongside her.",
            background: "Floribeth, guardian of nature and master of floramancy, once ruled the vast and vibrant Luminwood Expanse—a realm where flora and fauna danced in perfect harmony. A former elite of the ancient faction led by Princess Lunara, Floribeth eventually stepped away from her old ties, seeking a deeper purpose. With a heart rooted in healing and preservation, she founded her own faction: the Bloomforge Order, sworn to protect the Tree of Life, the sacred heart of Eldoria itself—its roots stretching through generations of time.<br><br>Her homeland was once a breathtaking expanse of lush valleys, mystical groves, and ancient trees that whispered tales of old. Diverse in culture and wild in spirit also home to the elves, it was paradise. But after the devastating Great War, the land was left wounded—its spirit dimmed, its beauty scarred. Still, Floribeth remained unwavering. Her mission: to restore Luminwood to its former glory and protect it from any threat that dared approach. Peace, however, was fleeting<br><br>Not long after the war’s end, a mysterious corruption began to seep into the lands—spreading through the Elderhaven Wilds like rot beneath the surface. Dark magic, twisted and unnatural, corrupted creatures and poisoned the soil. The source? Unknown. The danger? Imminent. Floribeth acted swiftly. She reinforced borders, empowered her Bloomforge guardians, and sent urgent reports to the elite members of the Light Harbingers. Her warning proved timely. One fateful night, under a moon veiled in mist, a shadowy faction launched a full-scale assault on Luminwood Expanse.<br><br>But Floribeth, ever the strategist, was ready. Joined by her trusted companion Arzhel, she activated the ancient Solaraenian portal, summoning reinforcements just in time. Liliana Solarae and her forces arrived, rallying to Luminwood’s defense. The battle raged for hours under the canopy of burning leaves and flickering starlight. Though blood was shed and wounds were deep, they emerged victorious—with fewer casualties than feared. But Floribeth did not rejoice.<br><br> She knew this was only the beginning. Refusing to let her people fall again, she began fortifying Springvale, the heart of her realm, transforming it into a sanctuary and stronghold. With the unwavering aid of her allies, she prepares—not just to defend—but to reclaim what was once pure. For as long as she breathes, Floribeth will stand between corruption and creation."
        };
    } else if (character === 'blessica') {
        details = {
            name: "<yellow>Blessica Solarae</yellow>",
            race: "<info><yellow>Celestial</yellow></info>",
            gender: "<info><yellow>Female</yellow></info>",
            height: "<info><yellow>5'8\" ft</yellow></info>",
            homeland: "<info><yellow>Solaraenia</yellow></info>",
            faction: "<info><yellow>Light Harbingers</yellow></info>",
            role: "<info><yellow>Healer</yellow></info>",
            occupation: "<info><yellow>High Cleric<yellow></info>",
            affiliates: "<info><yellow><i class='fas fa-users'></i> Lunara (Sister)</yellow></info> <info><yellow><i class='fas fa-users'></i> Liliana (Niece)</yellow></info>",
            elementalImages: [
            "assets/images/character-presets/elements/light.webp"
            ],
            likes: "<info><yellow><i class='fas fa-check'></i> Stargazing</yellow></info> <info><yellow><i class='fas fa-check'></i> Ancient Texts</yellow></info> <info><yellow><i class='fas fa-check'></i> Gardens</yellow></info>",
            dislikes: "<info><yellow><i class='fas fa-times'></i> Bloodshed</yellow></info> <info><yellow><i class='fas fa-times'></i> Secrets</yellow></info>",
            weapon: "<info><yellow><i class='fas fa-heart'></i> None</yellow></info>",
            ability1: "<info><i class='fas fa-hand-holding-heart'></i> <yellow>Sanctuary Ward</yellow></info> – Summons a radiant zone that heals allies over time and purifies minor curses or afflictions.",
            ability2: "<info><i class='fas fa-dove'></i> <yellow>Celestial Grace</yellow></info> – Channels divine energy to shield a single ally, absorbing incoming damage and briefly granting immunity to status effects.",
            ability3: "<info><i class='fas fa-praying-hands'></i> <yellow>Echo of Solarae</yellow></info> – Revives a fallen ally with a surge of light, restoring them to fighting condition with temporary enhanced stats.",
            ability4: "<info><i class='fas fa-feather-alt'></i> <yellow>Guiding Feather</yellow></info> – Sends a magical feather to seek out an ally, instantly transporting Blessica to their side and restoring a portion of their health.",
            ability5: "<info><i class='fas fa-star-of-life'></i> <yellow>Lumina Pulse</yellow></info> – Releases a burst of holy light around her that heals nearby allies and damages nearby enemies of dark origin.",
            ability6: "<info><i class='fas fa-sun'></i> <yellow>Luminous Salvation</yellow></info> – Summons a radiant beam of holy light from above, scorching enemies within its range while simultaneously restoring the vitality of nearby allies.",
            background: "Blessica, the second daughter of the Solaraenian King, was born in the celestial realm of Solaraenia—a majestic and radiant homeland of the Solaraenian beings. Gifted with powerful healing magic, she was known not only for her grace and talent, but also for the deep love she held for her older sister, Lunara. But something began to change.<br><br>Lunara had started slipping away during the nights, venturing into other realms—most often to the mortal world of Eldoria. She sought adventure, meaning, and secretly helped those in need while in her mortal form. Though destined to inherit the throne, Lunara's heart was drifting from royal duty, and Blessica could see it clearly.<br><br>Years passed. Then came the day that shattered everything: a rumor spread through the palace—Lunara was to be banished. The king had discovered her love for an Umbrakith prince, the very enemy of their kind. He called it betrayal. A crime against their people. Blessica pleaded with their father before the trial, but he would not listen. Lunara was exiled.<br><br>Unable to bear the thought of losing her sister, Blessica followed her into the mortal realm, through the veils between worlds. She found her—together with Zion. And in her arms… a child. Their child. Blessica stood frozen, stunned by the revelation. But Lunara's voice was calm and steady. She placed the baby in Blessica’s arms and whispered, “Take her. Keep her safe. I trust you. I’ve seen the future—this is the only timeline that can save the world. She is the future of our people.”<br><br>Lunara then revealed there were truths their father had hidden—ancient secrets buried so deep that not even royal blood was meant to uncover them. Though torn and afraid, Blessica agreed. She took the child and vanished into the mortal world—just as a war erupted between gods and mortals. She tried to convince Lunara to come with her, but her sister refused, determined to see her mission through to the end.<br><br>When Blessica returned to her homeland, the surviving members of the Order of Seekers were waiting. They informed her, with heavy hearts, that Lunara had named her as the new leader before disappearing. As the war escalated, Blessica ordered one of the members to lead the people to safety—along with Lunara’s child—while she and an elite warrior returned to aid her sister and stop the destruction. What they found was devastation—a battlefield drenched in chaos. Celestials, humans, elves, dwarves, sirens, dragons, and the relentless Umbrakith army all fought with desperation. Then the blood moon rose, and a wave of mysterious, overwhelming energy swept across the field. Thousands fell instantly.<br><br>In the heart of it all, they saw Lunara—no longer herself—consumed by a dark force and mercilessly slaying both friend and foe, including the Solarae King. Horrified, Blessica and her companion confronted her. But Lunara’s power had grown beyond anything they could have imagined. Blessica ordered a retreat, but her ally refused. Left with no other choice, she initiated a powerful sealing spell. With the aid of her elite comrades, loyal friends, and the last of the battlefield’s surviving warriors, they managed to imprison Lunara.<br><br>The war ended in silence—but the cost was immeasurable. The world would never be the same again."
        };
    } else if (character === 'coming-soon') {
        details = {
            name: "<gray>Coming Soon</gray>",
            race: "<info><gray>Unknown</gray></info>",
            gender: "<info><gray>Unknown</gray></info>",
            height: "<info><gray>Unknown</gray></info>",
            homeland: "<info><gray>Unknown</gray></info>",
            faction: "<info><gray>Unknown</gray></info>",
            role: "<info><gray>Unknown</gray></info>",
            occupation: "<info><gray>Unknown<gray></info>",
            affiliates: "<info><i class='fas fa-users'></i> <gray>Unknown</gray></info>",
            elementalImages: [
                "assets/images/character-presets/roles/question.webp"
            ],
            likes: "<info><i class='fas fa-check'></i> <gray>Unknown</gray></info>",
            dislikes: "<info><i class='fas fa-times'></i> <gray>Unknown</gray></info>",
            weapon: "<info><i class='fas fa-heart'></i> <gray>Unknown</gray></info>",
            ability1: "<info><i class='fas fa-star'></i> <gray>Ability 1</gray></info> – Description coming soon.",
            ability2: "<info><i class='fas fa-star'></i> <gray>Ability 2</gray></info> – Description coming soon.",
            ability3: "<info><i class='fas fa-star'></i> <gray>Ability 3</gray></info> – Description coming soon.",
            ability4: "<info><i class='fas fa-star'></i> <gray>Ability 4</gray></info> – Description coming soon.",
            ability5: "<info><i class='fas fa-star'></i> <gray>Ability 5</gray></info> – Description coming soon.",
            ability6: "<info><i class='fas fa-star'></i> <gray>Ability 6</gray></info> – Description coming soon.",
            background: "<info><i class='fas fa-book'></i> <gray>Background details coming soon.</gray></info>"
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
                <div id="abilities-scrollable">
                <p>${details.ability1}</p>
                <p>${details.ability2}</p>
                <p>${details.ability3}</p>
                <p>${details.ability4}</p>
                <p>${details.ability5}</p>
                <p>${details.ability6}</p>
                </div>
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

    // Show the character-info section
    characterInfo.style.display = "block";

    // Set the current character and update the background
    currentCharacter = character;
    updateBackground();
}

document.querySelectorAll('.character-card').forEach(card => {
    card.addEventListener('click', function() {
        // Remove 'clicked' class from all cards
        document.querySelectorAll('.character-card').forEach(c => c.classList.remove('clicked'));

        // Add 'clicked' class only to the selected card
        this.classList.add('clicked');
    });
});

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
    const characterContainer = document.querySelector('.character-background');
    characterContainer.style.backgroundImage = "url('assets/images/character-presets/cover/default.gif')";
    currentCharacter = null; // Clear the current character when info is hidden
}

(() => {
  // Local variables for the carousel
  let currentIndex = 0;
  let wrapper = null;
  const GAP = 10; // Constant gap value (in pixels) between cards

  // Initialize the carousel once DOM is ready
  function initCarousel() {
    wrapper = document.querySelector(".character-cards-wrapper");
    if (!wrapper || !wrapper.children.length) return;
    updateCarousel();
    window.addEventListener("resize", handleResize);
  }

  // Calculate how many cards are visible based on the current window width.
  function calculateVisibleCards() {
    const width = window.innerWidth;
    if (width > 1024) return 5;
    if (width > 768) return 4;
    if (width > 576) return 3;
    if (width > 400) return 2;
    return 1;
  }

  // Update the carousel's transform to slide to the current index.
  function updateCarousel() {
    if (!wrapper || !wrapper.children.length) return;
    // Get the first card's width plus the fixed gap.
    const cardWidth = wrapper.children[0].offsetWidth + GAP;
    wrapper.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
  }

  // Scroll the carousel in the provided direction.
  // direction: 1 for forward, -1 for backward.
  function scrollCarousel(direction) {
    if (!wrapper) return;
    const visibleCards = calculateVisibleCards();
    const totalCards = wrapper.children.length;
    
    // If the total cards are less than or equal to visible cards, no need to scroll.
    if (totalCards <= visibleCards) return;
    
    // Adjust the current index with wrapping behavior.
    currentIndex = (currentIndex + direction * visibleCards + totalCards) % totalCards;
    updateCarousel();
  }

  // Resize handling: wait until resizing stops, reset the index, and re-calculate.
  let resizeTimeout;
  function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      currentIndex = 0; // Reset index to prevent partial visibility on resize.
      updateCarousel();
    }, 100);
  }

  // Expose the scrollCarousel function globally to allow control from buttons, etc.
  window.scrollCarousel = scrollCarousel;

  // Initialize the carousel once the DOM content is loaded.
  document.addEventListener("DOMContentLoaded", initCarousel);
})();

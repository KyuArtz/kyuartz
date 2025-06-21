// =====================
// Character Backgrounds
// =====================
const characterBackgrounds = {
    comingSoon: { landscape: "url('assets/images/character-presets/cover/default.gif')", portrait: "url('assets/images/character-presets/cover/default.gif')" },
    elishia: { landscape: "url('assets/images/character-presets/cover/elishia-cover.webp')", portrait: "url('assets/images/character-presets/cover/sample.webp')" },
    hexxana: { landscape: "url('assets/images/character-presets/cover/hexxana-cover.webp')", portrait: "url('assets/images/character-presets/cover/sample.webp')" },
    ren: { landscape: "url('assets/images/character-presets/cover/ren-cover.webp')", portrait: "url('assets/images/character-presets/cover/sample.webp')" },
    rayza: { landscape: "url('assets/images/character-presets/cover/rayza-cover.webp')", portrait: "url('assets/images/character-presets/cover/sample.webp')" },
    liliana: { landscape: "url('assets/images/character-presets/cover/liliana-cover.webp')", portrait: "url('assets/images/character-presets/cover/sample.webp')" },
    blessica: { landscape: "url('assets/images/character-presets/cover/blessica-cover.webp')", portrait: "url('assets/images/character-presets/cover/sample.webp')" },
    lunara: { landscape: "url('assets/images/character-presets/cover/lunara-cover.webp')", portrait: "url('assets/images/character-presets/cover/sample.webp')" },
    floribeth: { landscape: "url('assets/images/character-presets/cover/floribeth-cover.webp')", portrait: "url('assets/images/character-presets/cover/sample.webp')" },
    shelain: { landscape: "url('assets/images/character-presets/cover/shelain-cover.webp')", portrait: "url('assets/images/character-presets/cover/sample.webp')" },
    arzhel: { landscape: "url('assets/images/character-presets/cover/arzhel-cover.webp')", portrait: "url('assets/images/character-presets/cover/sample.webp')" },
    feya: { landscape: "url('assets/images/character-presets/cover/feya-cover.webp')", portrait: "url('assets/images/character-presets/cover/sample.webp')" },
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
    const characterOverlay = document.querySelector('.character-overlay');

    if (accent) {
        if (characterInfo) characterInfo.style.setProperty('--accent', accent);
        if (characterOverlay) characterOverlay.style.setProperty('--accent', accent);
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
            race: "<info>Enhanced Human</info>",
            gender: "<info>Female</info>",
            height: "<info>5'5\" ft / 165.1 cm</info>",
            homeland: "<info>Province near Orag</info>",
            faction: "<info>Falcon Company</info>",
            role: "<info>Tactical Operative</info> <info>Engineer</info>",
            occupation: "<info>Falconite Agent</info>",
            affiliates: "<info><i class='fas fa-users'></i> Falcon Company</info> <info><i class='fas fa-users'></i> Zackry (Commandant)</info> <info><i class='fas fa-users'></i> Formerly: NanoFutureTech</info>",
            elementalImages: [
            "assets/images/character-presets/elements/energy.webp"
            ],
            likes: "<info><i class='fas fa-check'></i> Quiet Nights</info> <info><i class='fas fa-check'></i> Tactical Precision</info> <info><i class='fas fa-check'></i> Coffee</info> <info><i class='fas fa-check'></i> Tinkering with Tech</info>",
            dislikes: "<info><i class='fas fa-times'></i> Unnecessary Risk</info> <info><i class='fas fa-times'></i> Plague Creatures</info> <info><i class='fas fa-times'></i> Corrupt Scientists</info> <info><i class='fas fa-times'></i> Failure</info>",
            weapon: "<info><i class='fas fa-heart'></i> Dual Energy Pistols</info> <info><i class='fas fa-heart'></i> Elite Falconite Blade</info>",
            ability1: "<info><i class='fas fa-microchip'></i> Biotech Overdrive</info><p>Temporarily enhances reflexes and reaction time through internal nanotech boosts. Increases accuracy, reload speed, and evasion.</p>",
            ability2: "<info><i class='fas fa-radiation'></i> Viral Sweep</info><p>Deploys a tech-plasma burst that neutralizes organic plague entities. Deals damage over time and halts regeneration in infected targets.</p>",
            ability3: "<info><i class='fas fa-eye'></i> Tactical Scan</info><p>Reveals enemies through walls and weak points in armor. Grants temporary critical chance bonus to allies who attack scanned targets.</p>",
            ability4: "<info><i class='fas fa-shield-alt'></i> Adaptive Barrier</info><p>Deploys a reactive energy shield that shifts to counter incoming damage types. Can protect a wide area or follow a single target.</p>",
            ability5: "<info><i class='fas fa-robot'></i> Falcon Drone: EB-9</info><p>Deploys her custom support drone “EB-9.” It provides cover fire, revives nearby allies once per deployment, and emits a brief EMP pulse on destruction.</p>",
            ability6: "<info><i class='fas fa-biohazard'></i> Redline Protocol</info><p>Activates Elishia’s failsafe mode—sacrificing defensive functions to maximize speed, firepower, and aggression. All cooldowns are reduced, but damage taken is increased. Ends with a powerful anti-plague discharge blast.</p>",
            background: [
            "Elishia spent the early years of her life in a peaceful province outside the bustling city of **Orag**, where she lived with her mother—a renowned biotech expert researching a mysterious disease quietly spreading across the region.<br><br>",
            "Her world, though modest, was full of laughter, warmth, and love. Her mother’s work was groundbreaking. Her bond with Elishia, unbreakable.<br><br>",
            "Then came the shift. Her father—a visionary inventor and the founder of **NanoFutureTech**—moved them to the capital. He sought better education for Elishia and wanted to personally monitor the rare condition she carried—an unintentional side effect of his past experiments.<br><br>",
            "Their new home, filled with experimental tech and dusty dreams, became her classroom. At university, Elishia thrived. Brilliant, humble, and the daughter of two famed scientists, she earned admiration quickly. But inside, she missed the quiet province... a world without expectation.<br><br>",
            "That world shattered.<br><br>",
            "A catastrophic plague spread faster than anyone could contain. People mutated—twisting into violent, inhuman abominations. The capital fell into panic and blood. Amid the chaos, her parents made the ultimate sacrifice to ensure her survival.<br><br>",
            "Elishia was rescued by **Falcon Company**, an elite special operations unit. From that moment on, her fire changed.<br><br>",
            "No longer the quiet girl from the woods, she trained. She fought. She rose—becoming a **Falconite Agent**, specializing in tech, tactics, and plague zone combat.<br><br>",
            "Now she stands as one of Falcon Company’s elite. Hardened. Focused. Driven by purpose, not fame. For her parents. For the lost. For those who still cling to hope.<br><br>",
            "**She is proof that even in a crumbling world… something bright can still rise from the ashes.**"
            ].join("")
        };
    } else if (character === 'hexxana') {
        details = {
            name: "Hexxana",
            race: "<info>Unknown</info>",
            gender: "<info>Female</info>",
            height: "<info>5'8\" ft / 172.7 cm</info>",
            homeland: "<info>Unknown</info>",
            faction: "<info>None</info>",
            role: "<info>Mage</info> <info>Warrior</info>",
            occupation: "<info>Occult Nomad</info>",
            affiliates: "<info><i class='fas fa-users'></i> None</info>",
            elementalImages: [
            "assets/images/character-presets/elements/shadow.webp"
            ],
            likes: "<info><i class='fas fa-check'></i> Solitude</info> <info><i class='fas fa-check'></i> Stargazing</info> <info><i class='fas fa-check'></i> Silence</info> <info><i class='fas fa-check'></i> Old Tomes</info>",
            dislikes: "<info><i class='fas fa-times'></i> Crowds</info> <info><i class='fas fa-times'></i> Obedience</info> <info><i class='fas fa-times'></i> Blind Loyalty</info> <info><i class='fas fa-times'></i> Corruption</info>",
            weapon: "<info><i class='fas fa-heart'></i> Oblivion’s Edge (Cursed Scythe)</info>",
            ability1: "<info><i class='fas fa-mask'></i> Shadowcraft</info><p>Hexxana bends shadows into blades, cloaks, or illusions—shifting reality at will. These constructs disorient enemies and cloak her movements.</p>",
            ability2: "<info><i class='fas fa-circle'></i> Umbral Rift</info><p>Opens a swirling rift that distorts space and pulls enemies inward. Hexxana can phase through the rift to reposition instantly. Deals continuous void damage over time.</p>",
            ability3: "<info><i class='fas fa-skull-crossbones'></i> Curse Weaving</info><p>Hexxana enchants enemies or her weapon with potent hexes. Inflicts mental disarray, weakens armor, or causes delayed detonation. Some effects linger even after death.</p>",
            ability4: "<info><i class='fas fa-hand-sparkles'></i> Void Tendrils</info><p>Summons shadowy tendrils from the ground to lash and bind enemies, draining energy and immobilizing them. Effective for crowd control or disabling targets.</p>",
            ability5: "<info><i class='fas fa-wind'></i> Shadow Reaping</info><p>Channels void energy through Oblivion’s Edge, releasing spectral slashes in wide arcs. Each strike pierces defenses and leeches vitality from enemies.</p>",
            ability6: "<info><i class='fas fa-fire'></i> Oblivion Form</info><p>Hexxana ascends into her true cursed state, becoming a spectral demon. Her speed increases, attacks ignore resistances, and enemies nearby are afflicted with fear. Oblivion’s Edge becomes engulfed in anti-light, burning through both body and spirit.</p>",
            background: [
            "Hexxana is an enigma—a wandering force of magic and steel, cloaked in shadows and silence. Her origins are lost to time, her presence marked only by fleeting glimpses under starry skies and whispered rumors of spectral sightings.<br><br>",
            "She wields **Oblivion’s Edge**, a cursed scythe said to consume the life force of any who dare touch it—save for her. With it, she cuts down enemies in a flurry of devastating magic and precise strikes, vanishing into the night as quickly as she appears.<br><br>",
            "Hexxana walks a solitary path, guided by a purpose known only to her. She intervenes in the affairs of mortals only when it suits her will—helping the helpless in one moment, and disappearing without thanks in the next.<br><br>",
            "Some call her a savior cloaked in dusk. Others, a reaper of judgment. She is neither light nor dark—**fiercely neutral**, bound to no kingdom, loyal only to herself.<br><br>",
            "Her aura is haunting, ethereal, and beautiful—like the twilight she so often vanishes into. Where Hexxana walks, legends are born… but truth remains elusive.",
            ].join("")
        };
    } else if (character === 'ren') {
        details = {
            name: "Ren Bakonawa",
            race: "<info>Human (Dragonkin)</info>",
            gender: "<info>Male</info>",
            height: "<info>5'10\" ft / 177.8 cm</info>",
            homeland: "<info>Hidden Mist Valley</info>",
            faction: "<info>Dracona Sovereignty</info>",
            role: "<info>Warrior</info> <info>Assassin</info>",
            occupation: "<info>Light Harbinger Elite</info>",
            affiliates: "<info><i class='fas fa-users'></i> Rayza (Sister)</info> <info><i class='fas fa-users'></i> Liliana (Ally)</info> <info><i class='fas fa-users'></i> Feya (Friend)</info>",
            elementalImages: [
            "assets/images/character-presets/elements/fire.webp"
            ],
            likes: "<info><i class='fas fa-check'></i> Having Fun</info> <info><i class='fas fa-check'></i> Training & Combat</info> <info><i class='fas fa-check'></i> Discipline</info> <info><i class='fas fa-check'></i> Spicy Food</info>",
            dislikes: "<info><i class='fas fa-times'></i> Nethersteel Pact</info> <info><i class='fas fa-times'></i> Arrogant People</info> <info><i class='fas fa-times'></i> Crowds</info> <info><i class='fas fa-times'></i> Cooking</info> <info><i class='fas fa-times'></i> Losing Control</info>",
            weapon: "<info><i class='fas fa-heart'></i> Dual Fang Blades / Dragonforged Broadsword</info>",
            ability1: "<info><i class='fas fa-fire'></i> Blazing Fang</info><p>Strikes with his twin blades, igniting the target with fire-enhanced slashes. Each successful hit increases burn duration and stacks toward combo finishers.</p>",
            ability2: "<info><i class='fas fa-tornado'></i> Whirlwind Edge</info><p>Spins forward in a sweeping circular strike. Deals AoE damage around him and knocks enemies back. If used during Bloodheat, adds a fire shockwave.</p>",
            ability3: "<info><i class='fas fa-dragon'></i> Dragonbound Leap</info><p>Leaps high into the air and crashes down with explosive force. Leaves behind searing flame at the impact zone. Grants armor while airborne.</p>",
            ability4: "<info><i class='fas fa-user-secret'></i> Phantom Dash</info><p>Dashes forward invisibly, striking from behind with precision. Grants critical damage boost if used out of sight.</p>",
            ability5: "<info><i class='fas fa-swords'></i> Broadsoul Fusion</info><p>Temporarily fuses his Dual Fang Blades into a massive broadsword made of draconic flame. Increases range, adds sweeping attacks, and cleaves through enemy defenses.</p>",
            ability6: "<info><i class='fas fa-bolt'></i> Bloodheat Ascension</info><p>Ren taps into his awakened Dragonkin bloodline, enveloping himself in a burning aura. While active, all attacks deal fire AoE, stagger resistance is increased, and he regenerates health per kill. Ends with an explosive finisher if activated again.</p>",
            background: [
            "Ren Bakonawa was once a mischievous, troublemaking boy—always getting into trouble, but with a loving heart. His carefree spirit often clashed with his strict father, the clan chief of Hidden Mist Valley. He found comfort in his mother, a kind yet formidable warrior—formerly a Stormwing Elite Guardian.<br><br>",
            "During the Great War of Eldoria, their homeland was attacked by the Nethersteel Pact—a rogue Umbrakith faction bent on conquest. Ren and his younger sister Rayza were nearly lost, but their mother gave her life to protect them. The clan barely survived.<br><br>",
            "After the war, everything changed. Ren’s father became cold and harsh, pushing him into relentless training. Though bruised and scarred, Ren never resisted. He endured—for his father, for Rayza, and to protect what remained of their family. Rayza, still young and afraid, would secretly tend to his wounds in the quiet of night.<br><br>",
            "Determined to prove himself, Ren grew stronger through discipline and hardship. He led expeditions, helped rebuild their clan, and eventually earned his father’s respect. For his final trial, he ascended the thousand-step path to the highest peak of the Hidden Mist Valley. There, within an ancient temple, he challenged one of the Three Elder Dragons.<br><br>",
            "After hours of battle, Ren unlocked his dormant bloodline—becoming Dragonkin. The dragon bowed to him in recognition, and he returned home transformed.<br><br>",
            "Years later, a letter arrived from the Magelion Empire—a call for peace and diplomacy. Ren’s father accepted. Ren volunteered to represent his people. Before leaving, he embraced Rayza and whispered: “Don’t worry, I’ll be back.” Then he set out, a warrior of flame and honor, to shape the future with the fire of the past.",
            ].join("")
        };
    } else if (character === 'rayza') {
        details = {
            name: "Rayza Bakonawa",
            race: "<info>Human</info>",
            gender: "<info>Female</info>",
            height: "<info>5'6\" ft / 167.6 cm</info>",
            homeland: "<info>Hidden Mist Valley</info>",
            faction: "<info>Dracona Sovereignty</info>",
            role: "<info>Assassin</info>",
            occupation: "<info>Stormwing Guardian</info>",
            affiliates: "<info><i class='fas fa-users'></i> Ren (Brother)</info> <info><i class='fas fa-users'></i> Liliana (Ally)</info> <info><i class='fas fa-users'></i> Feya (Friend)</info>",
            elementalImages: [
            "assets/images/character-presets/elements/air.webp" 
            ],
            likes: "<info><i class='fas fa-check'></i> Cute Things</info> <info><i class='fas fa-check'></i> Training & Combat</info> <info><i class='fas fa-check'></i> Gliding</info> <info><i class='fas fa-check'></i> Sweets</info>",
            dislikes: "<info><i class='fas fa-times'></i> Loud People</info> <info><i class='fas fa-times'></i> Laziness</info> <info><i class='fas fa-times'></i> Crowded Places</info> <info><i class='fas fa-times'></i> Losing Control</info>",
            weapon: "<info><i class='fas fa-heart'></i> Tempest Bloom (Twin Windfang Blades)</info>",
            ability1: "<info><i class='fas fa-cloud'></i> Mist Veil</info><p>Rayza disappears in a sudden burst of fog, becoming invisible and untargetable for a few seconds. Her next attack from stealth deals bonus wind damage.</p>",
            ability2: "<info><i class='fas fa-wind'></i> Wind Blades</info><p>Unleashes sharp wind crescents from her dual blades in a wide arc. Can be charged for focused piercing strikes that knock enemies back.</p>",
            ability3: "<info><i class='fas fa-fan'></i> Dance of the Tempest</info><p>Performs a rapid series of agile strikes and dashes between enemies. Each strike gains critical chance if Rayza is midair or above her target.</p>",
            ability4: "<info><i class='fas fa-shoe-prints'></i> Silent Step</info><p>Grants enhanced movement speed and silence. While active, Rayza leaves behind no trace or sound, and gains bonus evasion from ranged attacks.</p>",
            ability5: "<info><i class='fas fa-leaf'></i> Petal Storm</info><p>Summons a spiraling windstorm filled with sharp petals that cut all enemies caught inside. Foes are slowed and receive continuous bleed damage.</p>",
            ability6: "<info><i class='fas fa-fire'></i> Blood Rage</info><p>When pushed to her limit, Rayza unleashes her latent bloodline power. Her aura turns crimson, increasing attack speed, agility, and damage output dramatically. While active, her abilities become enhanced versions and leave afterimages in her wake.</p>",
            background: [
            "Rayza Bakonawa was born into a prestigious family known for their skill in swordsmanship and battle strategy. From an early age, she idolized her father and her older brother, Ren—both praised for their strength and discipline. Rayza longed to join them and prove her worth as a warrior.<br><br>",
            "However, bound by tradition and protectiveness, her father refused to train her. He believed the warrior’s path was not meant for her. But instead of breaking her spirit, his rejection only fueled it. Determined to prove that strength wasn’t limited by tradition or gender, Rayza began training in secret.<br><br>",
            "Ren, recognizing her passion and remembering a promise their mother once made for her, became her silent supporter. He offered her guidance in secret, helping her grow without drawing their father’s attention.<br><br>",
            "When word of a prestigious swordsmanship tournament spread through the Hidden Mist Valley, Rayza saw her chance. Disguised to hide her identity, she entered the tournament. With each match, she defeated her opponents one by one—until she reached the final round.<br><br>",
            "There, to her shock, stood her final opponent: her brother, Ren.<br><br>",
            "She hesitated, fearing her secret would be revealed. But Ren’s smirk and knowing glance told her he had recognized her all along. He remained silent, respecting her resolve. Rayza steeled herself and fought fiercely. The duel was intense, with both siblings pushing each other to their limits.<br><br>",
            "Near defeat, something deep within her awakened—a dormant power passed down through their bloodline. A red aura enveloped her, and she entered a heightened state known as 'Blood Rage.' Her strength and speed surged beyond normal limits. The crowd watched in awe as the siblings clashed with near-mythical intensity.<br><br>",
            "In the stands, their father watched in silence. Shock turned to realization as he recognized the aura—the same one their mother once unleashed in battle. Torn between fear and pride, he made no move to stop them.<br><br>",
            "After nearly an hour of fierce combat, Rayza collapsed from exhaustion. Though she lost the match, she had proven herself.<br><br>",
            "She awoke at home, with Ren and her father at her side. Before she could speak, her father placed a hand on her shoulder, his voice heavy with emotion:<br><br>",
            "'I was only trying to protect you. You remind me so much of your mother before I watched her fall. But I see now—I was wrong. I won’t always be here to shield you. Maybe you don’t need me to. Keep growing, Rayza. Become strong… and wise. And Ren,' he said, turning to his son, 'look after your sister.'<br><br>",
            "In that moment, Rayza received the acceptance she had long yearned for. Their family shared a quiet embrace—a promise unspoken, but deeply understood. From that day on, Rayza's path became clear—not just to prove her worth, but to carry forward the strength, legacy, and love that shaped her.",
            ].join("")
        };
    } else if (character === 'liliana') {
        details = {
            name: "Liliana Solarae",
            race: "<info>Half-Celestial / Umbrakith</info>",
            gender: "<info>Female</info>",
            height: "<info>5'7\" ft / 170.2 cm</info>",
            homeland: "<info>Magelion Empire</info>",
            faction: "<info>Light Harbingers</info>",
            role: "<info>Mage</info> <info>Healer</info>",
            occupation: "<info>Empress of the Magelion Empire</info>",
            affiliates: "<info><i class='fas fa-users'></i> Blessica (Mother Figure)</info> <info><i class='fas fa-users'></i> Feya (Adopted Daughter)</info> <info><i class='fas fa-users'></i> Ren & Rayza (Allies)</info> <info><i class='fas fa-users'></i> Floribeth (Ally)</info>",
            elementalImages: [
            "assets/images/character-presets/elements/light.webp", 
            "assets/images/character-presets/elements/frost.webp"
            ],
            likes: "<info><i class='fas fa-check'></i> Reading</info> <info><i class='fas fa-check'></i> Helping Others</info> <info><i class='fas fa-check'></i> Singing</info> <info><i class='fas fa-check'></i> Peaceful Nights</info>",
            dislikes: "<info><i class='fas fa-times'></i> Needless Suffering</info> <info><i class='fas fa-times'></i> Corruption</info> <info><i class='fas fa-times'></i> War</info> <info><i class='fas fa-times'></i> Losing Faith</info>",
            weapon: "<info><i class='fas fa-heart'></i> Staff of Solarae</info>",
            ability1: "<info><i class='fas fa-praying-hands'></i> Lightweave</info><p>Channels pure light to cleanse allies of curses and restore health over time. Deals radiant damage to undead or corrupted enemies touched by the stream.</p>",
            ability2: "<info><i class='fas fa-snowflake'></i> Frostguard Halo</info><p>Encases a target in a barrier of divine frost. Reduces damage taken and slows attackers. Shatters after absorbing damage, freezing nearby enemies.</p>",
            ability3: "<info><i class='fas fa-dove'></i> Aurora Prayer</info><p>Liliana raises her staff, calling down a serene aurora. Allies within its glow are healed, gain regeneration, and feel temporarily immune to fear or charm effects.</p>",
            ability4: "<info><i class='fas fa-star'></i> Dawnburst</info><p>Fires a concentrated burst of solar light that pierces through enemies in a straight line. Blinds and damages targets hit, especially those aligned with darkness.</p>",
            ability5: "<info><i class='fas fa-hand-holding-heart'></i> Radiant Safeguard</info><p>Projects a divine ward on all nearby allies, granting immunity to lethal damage for a brief time. When triggered, leaves behind a soothing trail of light.</p>",
            ability6: "<info><i class='fas fa-sun'></i> Ascendant Blessing</info><p>Liliana enters a divine trance, glowing with Solaraenian power. All healing is amplified, light abilities deal extra radiant damage, and fallen allies within her aura are revived with partial health. Lasts for a short duration.</p>",
            background: [
            "Liliana Solarae, the Radiant Empress, is the revered founder and current ruler of the Magelion Empire—an empire born from ruin and risen from the ashes of a shattered world.<br><br>",
            "After the death of the Solaraenian God and the tragic sealing of her mother, Lunara, during the Great War, young Liliana was thrust into chaos. The celestial homeland of Solaraenia was obliterated. The proud Umbrakith were nearly wiped from existence. And Eldoria, once vibrant and united, teetered on the brink of collapse.<br><br>",
            "At the center of this devastation, Liliana witnessed the unthinkable: her beloved aunt, Blessica, sacrificing herself to seal the corrupted Lunara and prevent further destruction. As the sealing spell drained her strength, Blessica placed her hands on Liliana’s shoulders and gave her a sacred vow.<br><br>",
            "'Restore what we’ve lost. Protect the future. Lead them home.'<br><br>",
            "Liliana nodded through tears. As Blessica ascended in radiant light, mortals and celestials alike knelt before the child of divine and umbrakith blood—her aura glowing with purpose.<br><br>",
            "With a steady breath and unwavering heart, Liliana summoned a great beam of light from the heavens. It poured over her like a divine blessing. As Eldoria crumbled around her, she lifted her hands—and in them, a crystal formed, pulsing with pure, radiant energy.<br><br>",
            "This 'Beacon Surge' resonated with the very soul of Eldoria. In a single, luminous wave, the light rippled outward. Darkness recoiled. Corruption melted into air. Hope was reborn.<br><br>",
            "From that moment, Liliana was no longer a child of tragedy—She became the dawn reborn—the light after ruin.<br><br>",
            "As the years passed, she matured under the weight of destiny. While others clung to division, she envisioned unity. Where despair lingered, she brought hope. Determined to break the cycle of endless war, she summoned the remaining leaders of Eldoria and proposed a Grand Council—a final plea for peace.<br><br>",
            "Not all agreed, but many were moved by the clarity and grace in her voice. Her words awakened something ancient and true in their hearts.<br><br>",
            "To safeguard this fragile peace, Liliana founded the Light Harbingers—an elite order drawn from every race and realm. Membership was not given lightly. She forged the Trials herself: not tests of strength, but of compassion, resolve, and unwavering heart.<br><br>",
            "Through her leadership, Eldoria slowly began to heal. The once-divided nations began to sing her name. She became a living beacon—not only of survival, but of unity, light, and love.<br><br>",
            "And yet... behind her serene gaze lies vigilance. In her quiet dreams, Liliana sees it—A veiled figure beneath a dying sky… a second darkness… and silence that devours light itself.",
            ].join("")
        };
    } else if (character === 'lunara') {
        details = {
            name: "Lunara Solarae",
            race: "<info>Celestial</info>",
            gender: "<info>Female</info>",
            height: "<info>6'1\" ft / 185.4 cm</info>",
            homeland: "<info>Solaraenia</info>",
            faction: "<info>Former Solaraenian Kingdom</info>",
            role: "<info>Mage</info> <info>Witch</info>",
            occupation: "<info>Sealed Entity</info>",
            affiliates: "<info><i class='fas fa-users'></i> Zion (Lover)</info> <info><i class='fas fa-users'></i> Blessica (Sister)</info> <info><i class='fas fa-users'></i> Liliana (Daughter)</info>",
            elementalImages: [
            "assets/images/character-presets/elements/shadow.webp"
            ],
            likes: "<info><i class='fas fa-check'></i> Zion</info> <info><i class='fas fa-check'></i> Moonlit Nights</info> <info><i class='fas fa-check'></i> Ancient Magic</info> <info><i class='fas fa-check'></i> Roses</info>",
            dislikes: "<info><i class='fas fa-times'></i> Celestial Betrayal</info> <info><i class='fas fa-times'></i> War</info> <info><i class='fas fa-times'></i> Her Own Reflection</info>",
            weapon: "<info><i class='fas fa-heart'></i> Bloodwoven Staff</info>",
            ability1: "<info><i class='fas fa-moon'></i> Moonveil Curse</info><p>Calls upon tainted celestial energy to cast a weakening veil on enemies, lowering their magic resistance and stamina. Under the moon’s gaze, the effect intensifies.</p>",
            ability2: "<info><i class='fas fa-burn'></i> Bloodbinding</info><p>Manipulates the blood of enemies within range, restricting their movement or forcing them to act against their will. Overuse risks backlash to Lunara's own vitality.</p>",
            ability3: "<info><i class='fas fa-skull'></i> Lament of the Exiled</info><p>Unleashes a wave of cursed memories that damage enemies and sap their morale. Those affected may hallucinate visions from Lunara’s broken past.</p>",
            ability4: "<info><i class='fas fa-fire'></i> Crimson Howl</info><p>Releases a piercing scream that erupts into a shockwave of corrupted light and blood magic. Deals high AoE damage and instills fear in those who survive.</p>",
            ability5: "<info><i class='fas fa-heart-broken'></i> Heartsplit</info><p>Fires a concentrated bolt of celestial and void magic that detonates on impact. Targets struck are cursed to suffer bonus damage from future spells.</p>",
            ability6: "<info><i class='fas fa-crown'></i> Blood Eclipse</info><p>Unleashes her sealed form as the Scarlet Phantom. Her aura corrupts the battlefield, amplifying all abilities, draining enemies nearby, and marking them with the Reaper’s Sigil. During this form, Lunara regenerates from all damage dealt.</p>",
            background: [
            "Lunara was once a celestial being—pure, radiant, and beloved. She was the selfless and compassionate princess of Solaraenia, destined to inherit the throne and bring eternal light to her people. She embodied everything a ruler should be—kind yet strong, wise yet humble. But love, the most beautiful and dangerous force, would become her ruin.<br><br>",        
            "In secret, she fell for Zion, the prince of the Umbrakiths—the sworn enemies of the Solaraenians for eons. Their love was a forbidden flame, burning against the tides of history and war. They met not as enemies, but as two wandering souls lost in the vastness of the realms. In Zion, Lunara saw not a monster or rival, but a heart that beat in harmony with hers. And to him, she was not just a celestial heir—but a light he had never known in his shadowed world.<br><br>",         
            "But love is not enough to break the chains of destiny. When their secret was unveiled, the Solarae God's fury shook the heavens. He accused Lunara of treason—of being corrupted by Umbrakith magic. Her people turned against her, branding her a traitor to their divine bloodline.<br><br>",       
            "In the eyes of the Solaraenians, she was no longer their princess. She was tainted, lost, a disgrace. And so, she was cast down—banished from Solaraenia and exiled into the mortal land of Eldoria.<br><br>",        
            "But her fall was only the beginning. The Umbrakiths, stunned by the revelation, had not plotted to claim the celestial princess—but now they were forced into war. The Solaraenians, blinded by rage, saw no redemption—only war.<br><br>",            
            "And so, the Great War of Eldoria began. A conflict forged not by hatred, but by a love the world refused to accept. Amidst the bloodshed, Lunara and Zion fought together—not as rulers of warring nations, but as lovers desperate to stop the slaughter. They pleaded, they struggled, they tried to hold back the tides of fate itself.<br><br>",           
            "But fate is cruel. On the battlefield, Zion fell. The blade meant for Lunara pierced through the heart of the man she loved.<br><br>",     
            "His blood clung to her trembling hands like a vow undone. Warm. Real. Fading. Her scream never came—it was swallowed by the silence of a shattered world. The battlefield blurred. Time itself shattered. She saw every moment they had shared—his laughter, the whispered promises, the stolen touches beneath forbidden skies. His voice, calling her name, fading into silence. His warmth, now only a lifeless embrace.<br><br>",           
            "And something inside her broke. A whisper left her lips—a prayer, a curse, an agony too great for words.<br><br>",           
            "The sky darkened. The winds howled. A blood moon rose.<br><br>", 
            "Those who dared to look into her eyes saw only death. An aurora, dark and unholy, erupted around her as her tears turned into rivers of blood. And then… the slaughter began. She bent the blood of those around her, twisting it into lifeless husks, consuming their essence in an unrelenting storm of carnage. The battlefield became a graveyard. Solaraenians, Umbrakiths, all races fell before her wrath.<br><br>", 
            "She was no longer the celestial princess. No longer the exile. She became something else—a phantom, a reaper, a queen of death.<br><br>",  
            "That day, the Scarlet Phantom was born. The war ended—not in peace, not in victory, but in silence.<br><br>",
            "Now, Lunara lies sealed by her own sister in the very heart of Eldoria. Her heart turned to ice, her soul shackled by the blood of those she loved—and those she loathed.<br><br>",
            "She no longer fights for light. Nor for darkness. She seeks something beyond the reach of gods and mortals alike. Perhaps redemption. Perhaps revenge. Or perhaps… she simply searches for the one thing she lost—the love that once made her whole.<br><br>",
            "For in the end, Lunara never wished to be queen. She only wished to be with him.<br><br>",
            "And that… was the one wish the universe would never grant."
            ].join("")
        };
    } else if (character === 'feya') {
        details = {
            name: "Feya Ashey",
            race: "<info>Fox Spirit</info>",
            gender: "<info>Female</info>",
            height: "<info>5'4\" ft / 162.5 cm</info>",
            homeland: "<info>Frostfire Timberland</info>",
            faction: "<info>Light Harbingers</info>",
            role: "<info>Mage</info> <info>Summoner</info>",
            occupation: "<info>Light Harbinger Elite</info>",
            affiliates: "<info><i class='fas fa-users'></i> Liliana (Adoptive Mother)</info> <info><i class='fas fa-users'></i> Rayza (Friend)</info> <info><i class='fas fa-users'></i> Ren (Friend)</info>",
            elementalImages: [
            "assets/images/character-presets/elements/fire.webp",
            "assets/images/character-presets/elements/light.webp",
            "assets/images/character-presets/elements/nature.webp"
            ],
            likes: "<info><i class='fas fa-check'></i> Fire Magic</info> <info><i class='fas fa-check'></i> Nature</info> <info><i class='fas fa-check'></i> Playfulness</info> <info><i class='fas fa-check'></i> Sweets</info>",
            dislikes: "<info><i class='fas fa-times'></i> The Nethersteel Pact</info> <info><i class='fas fa-times'></i> Cold Rain</info> <info><i class='fas fa-times'></i> Silence</info> <info><i class='fas fa-times'></i> Losing Friends</info>",
            weapon: "<info><i class='fas fa-heart'></i> Embercore Orb</info>",
            ability1: "<info><i class='fas fa-fire'></i> Foxfire Embers</info><p>Summons dancing flames shaped like fox spirits to attack enemies in a wide area. Embers trail behind Feya for several seconds, damaging foes that follow.</p>",
            ability2: "<info><i class='fas fa-ghost'></i> Spirit Rush</info><p>Feya transforms into a blazing fox spirit and dashes through enemies, phasing through them and leaving a trail of fire. Grants brief invulnerability and speed.</p>",
            ability3: "<info><i class='fas fa-sun'></i> Eclipse Flare</info><p>Charges a burst of radiant fire that explodes outward in a sun-shaped blast, burning enemies and weakening their elemental resistance. Empowered if cast near allies.</p>",
            ability4: "<info><i class='fas fa-paw'></i> Infernal Vulpes</info><p>Summons a giant spectral fox engulfed in flame that charges forward, knocking enemies airborne and burning the battlefield in its wake.</p>",
            ability5: "<info><i class='fas fa-seedling'></i> Radiant Safeguard</info><p>Surrounds allies in a barrier of nature-infused fire that absorbs damage and burns attackers. Strength increases if Feya is under half HP.</p>",
            ability6: "<info><i class='fas fa-star'></i> Vulpine Ascension</info><p>Feya awakens her true form—a celestial fox spirit wreathed in infernal fire. During this state, all abilities are empowered, and attacks gain burn and lifesteal effects. Her eyes glow, her tails flare, and the battlefield bends to her will.</p>",
            background: [
            "Feya Ashey was once a carefree child, raised in the mystical Frostfire Timberland among her fox spirit kin. Playful, mischievous, and endlessly curious, she roamed the northern mountains of the Magelion Empire, her heart unburdened and her magic growing stronger with each adventure.<br><br>",
            "Her people lived in peaceful harmony—deeply attuned to nature and elemental magic, untouched by the chaos of the outside world. But peace, like snow under fire, never lasts.<br><br>",
            "The rise of the Nethersteel Pact shattered everything. Their armies swept across the land like a storm of steel and shadow. The Frostfire Timberland—once vibrant with spirit and song—was reduced to smoldering ash. Her clan fought bravely—her parents among them—but the Pact’s might was overwhelming.<br><br>",
            "One by one, her kin fell. Her home burned. And Feya—young and unprepared—was left alone.<br><br>",
            "In a final act of desperation, she unleashed her latent power in a fiery, uncontrolled surge. The resulting explosion consumed the remaining enemy forces, but left Feya gravely wounded and drained.<br><br>",
            "As she collapsed, the Nethersteel general, Drakeon, stood over her. She had no strength left to resist. But before the final blow could fall, salvation arrived—the royal army of the Magelion Empire, led by Empress Liliana herself. The enemy fled. The damage, however, was done.<br><br>",
            "The once-beautiful Frostfire Timberland was reduced to ashes, its magic corrupted, its people gone.<br><br>",
            "Hours later, the scouts found Feya unconscious in the ruins. Empress Liliana, moved by the sight of the broken girl and the loss of her entire race, personally healed her. Seeing the fire still burning inside her, Liliana adopted Feya as her daughter, offering her sanctuary and a new path.<br><br>",
            "Under the Empress’s care, Feya trained as a Light Harbinger—sworn to defend the Crystalight and preserve Eldoria’s fragile peace. Though her heart still carries the scars of her past, she now fights with renewed purpose.<br><br>",
            "As the Fiery Fox of the Light Harbingers, she burns bright with passion and fury, vowing that no one else will suffer as she did.<br><br>",
            "But Drakeon still lives. The Nethersteel Pact still lurks in the shadows. And Feya knows... her story is far from over.<br><br>",
            "Her past was forged in flames—but her future blazes even brighter.",
            ].join("")
        };
    } else if (character === 'floribeth') {
        details = {
            name: "Floribeth Eldeblossom",
            race: "<info>High Elf</info>",
            gender: "<info>Female</info>",
            height: "<info>6'0\" ft / 182.8 cm</info>",
            homeland: "<info>Luminwood Expanse</info>",
            faction: "<info>Bloomforge Order</info>",
            role: "<info>Healer</info> <info>Guardian</info>",
            occupation: "<info>Ruler of luminwood</info>",
            affiliates: "<info><i class='fas fa-users'></i> Liliana (Ally)</info> <info><i class='fas fa-users'></i> Arzhel (Companion)</info>",
            elementalImages: [
            "assets/images/character-presets/elements/earth.webp",
            "assets/images/character-presets/elements/nature.webp"
            ],
            likes: "<info><i class='fas fa-check'></i> Harmony</info> <info><i class='fas fa-check'></i> Ancient Lore</info> <info><i class='fas fa-check'></i> Elven Traditions</info> <info><i class='fas fa-check'></i> Wildflowers</info>",
            dislikes: "<info><i class='fas fa-times'></i> Corruption</info> <info><i class='fas fa-times'></i> Senseless War</info> <info><i class='fas fa-times'></i> Burned Forests</info> <info><i class='fas fa-times'></i> Arrogance</info>",
            weapon: "<info><i class='fas fa-heart'></i> Bloomforge Staff</info>",
            ability1: "<info><i class='fas fa-shield-alt'></i> Bloomguard</info><p>Envelops an ally in a protective floral shield that absorbs incoming damage. When the shield breaks, it releases a burst of healing energy to nearby allies.</p>",
            ability2: "<info><i class='fas fa-leaf'></i> Thornwall</info><p>Summons a wall of living vines that blocks enemy movement and ranged attacks. Allies standing behind it gain bonus defense for a short time.</p>",
            ability3: "<info><i class='fas fa-spa'></i> Soothing Petals</info><p>Releases a gentle wave of floating petals around Floribeth, slowly healing allies over time. The effect is stronger on targets with active shields.</p>",
            ability4: "<info><i class='fas fa-hand-holding-heart'></i> Verdant Embrace</info><p>Targets an ally or herself to receive a burst of healing and a brief shield. If the ally is below 50% HP, the shield’s strength is doubled.</p>",
            ability5: "<info><i class='fas fa-globe'></i> Sanctuary Bloom</info><p>Creates a sanctuary zone of glowing flora that lasts several seconds. Allies inside are shielded over time and gradually regenerate health while inside the bloom radius.</p>",
            ability6: "<info><i class='fas fa-star-of-life'></i> Blooming Ascension</info><p>Floribeth invokes the essence of the Tree of Life, ascending into a radiant spirit form. While active, healing effects are doubled, enemies nearby are pacified, and all allies regenerate mana and stamina steadily. Her presence revives fallen allies with partial health if cast at the center of Springvale.</p>",
            background: [
            "Floribeth, guardian of nature and master of floramancy and earth, once ruled over the vast and vibrant **Luminwood Expanse**—a realm where flora and fauna danced in perfect harmony far northwest of the Magelion Empire.<br><br>",
            "Once an elite of the ancient faction led by Princess Lunara, Floribeth eventually stepped away from her former ties, seeking a deeper purpose. With a heart rooted in healing and preservation, she founded her own faction: the **Bloomforge Order**, sworn to protect the **Tree of Life**—the sacred heart of Eldoria, whose roots stretch through generations of time.<br><br>",
            "Her homeland was once a breathtaking tapestry of lush valleys, mystical groves, and ancient whispering trees. Home to elves, spiritfolk, and rare creatures, Luminwood was a paradise—wild, diverse, and deeply connected to the world’s natural soul.<br><br>",
            "But after the devastation of the Great War, the land was wounded. Corruption seeped into its roots. Its spirit dimmed. Its beauty scarred.<br><br>",
            "Floribeth did not waver.<br><br>",
            "Her mission became clear: to **restore Luminwood to its former glory** and defend it from any force that dared threaten its sacred balance.<br><br>",
            "But peace was fleeting.<br><br>",
            "Not long after the war’s end, corruption crept through the Elderhaven Wilds…twisted magic poisoning the land, warping creatures, and draining life from the soil. The source was unknown. The threat, undeniable.<br><br>",
            "Floribeth acted swiftly. She reinforced Luminwood’s borders, empowered her **Bloomforge Guardians**, and sent urgent warnings to the Light Harbingers.<br><br>",
            "Her call was not in vain.<br><br>",
            "One fateful night, under a moon veiled in mist, a shadowy faction launched a full-scale assault on the Luminwood Expanse. But Floribeth—ever the strategist—was ready. Alongside her trusted companion **Arzhel**, she activated an ancient Solaraenian portal beneath the Tree of Life.<br><br>",
            "**Liliana** and her forces arrived through the shimmering gate, answering the call. The battle raged for hours beneath a canopy of burning leaves and flickering starlight. Though the bloodshed was great, the defenders emerged victorious—with fewer casualties than feared.<br><br>",
            "But Floribeth did not celebrate. She knew this was only the beginning.<br><br>",
            "She returned to **Springvale**, capital of the Luminwood Expanse, and began its transformation into a fortified sanctuary. With the unwavering support of her allies, she now prepares not just to defend... but to reclaim what was once pure.<br><br>",
            "For as long as she breathes, Floribeth will stand as the **Warden of the Bloom**—a shield between corruption and creation.<br><br>"
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
            "Blessica, the second daughter of the Solaraenian God, was born in the celestial realm of Solaraenia a realm of radiant light and divine order, home to the ethereal Solaraenian beings. Gifted with potent light magic, she was revered not only for her elegance and power but also for the deep, unwavering love she held for her elder sister, Lunara. But over time, Blessica began to notice a change in Lunara. Her sister would disappear into the night, venturing into forbidden realms most often to the mortal world of Eldoria. There, disguised in mortal form, Lunara quietly aided those in need and sought a purpose beyond her celestial duties. Though she was heir to the throne, her heart strayed from her royal path. Blessica watched with silent concern, sensing a storm on the horizon.<br><br>",
            "Eventually, tragedy struck. Whispers echoed through the palace Lunara was to be banished. Their father had uncovered her love for a prince of the Umbrakith, the sworn enemies of their kind. He called it treason, a betrayal of divine law. Desperate, Blessica pleaded with him before the trial, but he would not yield. Lunara was exiled. Unable to bear the loss, Blessica defied all boundaries and followed her sister into the mortal realm. Through the veils between worlds, she found Lunara together with her beloved Zion, and with them… a young girl. Their daughter. Stunned, Blessica stood in silence, but Lunara’s voice was calm. She placed her daughter in Blessica’s arms and whispered:<br><br>",
            "“Take her. Keep her safe. I trust you. She is the future of our people.”<br><br>",
            "Lunara then confessed that their father had hidden ancient truths secrets buried so deep that not even royal blood was meant to uncover them. Though torn with fear and sorrow, Blessica agreed. She took the child Liliana and vanished just as war broke out between the gods and mortals. When Blessica returned to Solaraenia, she was met by the surviving members of the Order of Light, who delivered grave news: Lunara had named Blessica her successor before vanishing into the chaos. As the celestial war escalated, Blessica ordered her people to retreat to safety with Liliana while she and her most loyal warrior returned to the frontlines in hopes of rescuing Lunara and ending the bloodshed.<br><br>",
            "But what they found was devastation.<br><br>",
            "The battlefield was drowned in destruction, as Solaraenians, mortals, and the relentless Umbrakith army clashed in desperation. Then, beneath the rise of a blood moon, an overwhelming surge of dark energy swept across the land obliterating millions in a single instant.<br><br>",
            "At the heart of the chaos stood Lunara no longer herself consumed by an abyssal force. She struck down friend and foe alike, even slaying their father in a fit of corrupted fury. Stunned and heartbroken, Blessica and her companion confronted her. But Lunara’s power had grown far beyond comprehension. As she unleashed a catastrophic spell, Blessica gave the order to retreat but her comrade refused to abandon the mission.<br><br>",
            "Left with no choice, Blessica invoked a forbidden sealing spell, channeling her remaining strength. With help from her comrade, the last surviving warriors, and loyal allies, they succeeded in imprisoning Lunara. The world watched in silence as the dark threat was finally subdued.<br><br>",
            "But the victory came at a great price.<br><br>",
            "The spell drained Blessica’s life force. Her form began to glow and fade. As she collapsed, young Liliana rushed to her side along with her allies. With her final breath, Blessica whispered:<br><br>",
            "“Lead our people… protect her. She is the light of our future… and the hope of this world.”<br><br>",
            "Blessica ascended in a burst of radiant light, her soul returning to the heavens in eternal slumber. All present mortals, celestials, and warriors alike knelt before Liliana. In that moment, at a young age Liliana became a leader. From the ruins of war, Liliana would rise to fulfill the promise of her lineage. Guided by the teachings of her mother and the strength of her people, she founded the Magelion Empire upon the very grounds where it all began.<br><br>",
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
            // --- Active indicator logic ---
            document.querySelectorAll('.filter-character a').forEach(btn => btn.classList.remove('active-filter'));
            this.classList.add('active-filter');
            // --- End active indicator logic ---

            const category = this.dataset.category;
            document.querySelectorAll('.character-card').forEach(card => {
                const cardCategories = (card.dataset.category || '').split(',').map(cat => cat.trim());
                const shouldShow = (category === 'all' || cardCategories.includes(category));
                if (shouldShow) {
                    card.style.display = ''; // Show immediately
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

    // Optionally, set the first filter as active on load
    const firstFilter = document.querySelector('.filter-character a[data-category="all"]');
    if (firstFilter) firstFilter.classList.add('active-filter');
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

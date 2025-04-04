// Map character names to landscape and portrait background images
const characterBackgrounds = {
    comingSoon: {
        landscape: "url('')",
        portrait: "url('')"
    },
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
            characterContainer.style.backgroundImage = "url('assets/images/character-presets/cover/default.gif')";
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
        name: "Info Not Available Yet",
        faction:"",
        role:"",
        homeland: "",
        affiliates: "",
        gender: "",
        height: "",
        elementalImages: ["assets/images/character-presets/roles/question.webp"],
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
            name: "<blue>Elishia Bluestein<blue>",
            faction:"<info><blue>Falconite</blue></info>",
            role:"<info><blue>Versatile</blue></info>",
            homeland: "<info><blue>Orag City, District 3</blue></info>",
            affiliates: "<info><blue>Roman Bluestein (Older Brother)</blue></info> <info><blue>Nicks (Bestfriend)</blue></info> <info><blue>Zackry (Commandant)</blue></info> <info><blue>Evalete (Squadmate)</blue></info> <info><blue>Zenki (Squadmate)</blue></info> <info><blue>Jaze (Squadmate)</blue></info>",
            gender: "<info><blue>Female</blue></info>",
            height: "<info><blue>5'5\" ft</blue></info>",
            elementalImages: ["assets/images/character-presets/elements/energy.webp"],
            likes: "<info><blue>Music</blue></info> <info><blue>Lollipops & Bubblegum</blue></info> <info><blue>Cats</blue></info> <info><blue>Reading</blue></info> <info><blue>Organizing</blue></info> <info><blue>Hover Bikes</blue></info> <info><blue>Tinkering with Tech</blue></info>",
            dislikes: "<info><blue>Corrupt Officials</blue></info> <info><blue>Her Older Brother (Complicated Relationship)</blue></info> <info><blue>Disorder & Chaos</blue></info> <info><blue>Wasting Time</blue></info> <info><blue>Arrogant People</blue></info>",
            weapon: "<info><blue>Falconate Blade</blue></info> <info><blue>Dual Gun</blue></info>",
            ability1: "<strong><blue>Holographic Shields</blue></strong> – Create protective barriers during battles to shield herself and allies from attacks.",
            ability2: "<strong><blue>Weapon Creation</blue></strong> – Form weapons on the fly, adapting to different combat situations or combining elements for unique effects.",
            ability3: "<strong><blue>Environmental Manipulation</blue></strong> – Alter the battlefield by moving or reshaping objects, like creating obstacles for enemies or enhancing terrain for tactical advantages.",
            ability4: "<strong><blue>Multi-Weapon Combat</blue></strong> – Combine multiple weapons into one or create several holographic weapons at once to overwhelm opponents.",
            ability5: "<strong><blue>Decoys and Illusions</blue></strong> – Generate holographic duplicates of herself or objects to confuse enemies or draw their fire.",
            ability6: "",
            background: "Elishia and her mother lived a serene life in her mother's province, nestled outside the bustling city of Orag. For a year, their world was peaceful, filled with laughter and simple joys. However, a year later, her father, a visionary inventor renowned for his groundbreaking contributions to technology, decided it was time for a change. He wanted to move them to the capital city, where the prestigious university offered an educational experience far superior to what their province could provide. He also yearned to be closer to his daughter, balancing his demanding work at NanoFutureTech—a private laboratory he owned that was dedicated to pioneering future technologies for humanity. Upon their arrival in the capital, they settled into her father's old house, a place filled with memories of his past and echoes of his dreams. Elishia, now attending the university, quickly found herself at the center of attention. As the daughter of a famous scientist and a brilliant student in her own right, she was admired by her peers. Yet, despite the spotlight, Elishia craved a simple, quiet existence, far removed from the expectations that came with her lineage. But that peace shattered one fateful day. Without warning, the city descended into chaos. People began to exhibit erratic and violent behavior, transforming into grotesque creatures that emerged from the shadows. The very fabric of her life unraveled as she witnessed her parents bravely defend her, sacrificing their lives in a desperate attempt to protect her from the horrors that had befallen them. In the aftermath, Elishia was rescued by a team of special ops forces, who evacuated her to a designated safe point alongside other survivors. The trauma of losing her parents weighed heavily on her, igniting a fire within her—a determination to protect those who could not protect themselves. With her once peaceful dreams now shattered, she felt a newfound purpose. Driven by this resolve, Elishia enlisted in the military, where she honed her skills and emerged as a tactical specialist. Her intelligence and tenacity propelled her through rigorous training, earning her a coveted position within Falcon Company, a renowned unit known for their strategic operations and bravery. As Elishia now fights to reclaim her world from the clutches of chaos, she carries with her the memory of her parents and the hope of a future where peace can be restored. With every mission, she strives not only to protect lives but to honor the legacy of the family that shaped her into the warrior she has become."
        };
    } else if (character === 'hexxana') {
        details = {
            name: "<purple>Hexxana</purple>",
            faction:"<info><purple>None</purple></info>",
            role:"<info><purple>Mage</purple></info> <info><purple>Warrior</purple></info>",
            homeland: "<info><purple>Unknown</purple></info>",
            affiliates: "<info><purple>Unknown</purple></info>",
            gender: "<info><purple>Female</purple></info>",
            height: "<info><purple>5'7\" ft</purple></info>",
            elementalImages: ["assets/images/character-presets/elements/shadow.webp"],
            likes: "<info><purple>Reading</purple></info> <info><purple>Hexing</purple></info> <info><purple>Wandering</purple></info> <info><purple>Making Potions</purple></info> <info><purple>Silence & Solitud</purple></info> <info><purple>Eclipses & Starry Nights</purple></info> <info><purple>Rare Artifacts</purple></info>",
            dislikes: "<info><purple>Doing Chores</purple></info> <info><purple>Loud, Noisy Places</purple></info> <info><purple>Being Controlled</purple></info> <info><purple>Weak-willed People</purple></info> <info><purple>Uninvited Company</purple></info>",
            weapon: "<info><purple>Oblivion’s Edge</purple></info>",
            ability1: "<strong><purple>Shadow Manipulation</purple></strong> – Hexxana can shape and control shadows at will, creating illusions, forming shadow weapons, or vanishing into darkness for stealth or defense. This ability grants her high adaptability in both offense and escape.",
            ability2: "<strong><purple>Umbral Rift</purple></strong> – She summons a swirling vortex of dark energy that pulls in enemies, dealing continuous damage while distorting space. She can also use it to reposition herself or allies, making it a mix of offense and mobility.",
            ability3: "<strong><purple>Curse Weaving</purple></strong> – Hexxana places sinister hexes on her enemies, causing effects such as slowed movement, weakened attacks, or hallucinations. Some curses linger even after battle, haunting her foes.",
            ability4: "<strong><purple>Void Tendrils</purple></strong> – She summons otherworldly tendrils from the void, which lash out to attack, restrain, or drain energy from enemies. These eerie manifestations enhance her battlefield control.",
            ability5: "<strong><purple>Shadow Reaping</purple></strong> – With each scythe swing, she sends out slashes of dark energy that extend her reach and can steal vitality from enemies. This ability allows her to fight at both melee and ranged distances.",
            ability6: "<strong><purple>Demonic Form: Reaper’s Wrath</purple></strong> – Hexxana unleashes her true power, temporarily transforming into a demon-like entity. In this state, her attacks become faster and more devastating, her scythe radiates abyssal energy, and her abilities are enhanced.",
            background: "Hexxana’s origins are shrouded in mystery; no one knows where she came from, and she shares little about her past. She appears as a spectral figure in the dead of night, often accompanied by an eerie, shimmering aurora. Known to sometimes intervene in dire moments, she aids those in danger but vanishes as quickly as she arrives, leaving only whispers and rumors in her wake. Hexxana is a lone wanderer, loyal to no one but herself. She drifts through cities and forgotten landmarks, guided by her own enigmatic purpose. Her neutrality is unshakable, and she is a silent guardian—though only when it suits her will."
        };
    } else if (character === 'rayza') {
        details = {
            name: "<red>Rayza Huǒ</red>",
            faction:"<info><red>Zephyra Vale</red></info>",
            role:"<info><red>Assassin</red></info>",
            homeland: "<info><red>Hidden Mist Valley</red></info>",
            affiliates: "<info><red>Ren (Older Brother)</red></info> <info><red>Feya (Friend)</red></info>",
            gender: "<info><red>Female</red></info>",
            height: "<info><red>5'5\" ft</red></info>",
            elementalImages: ["assets/images/character-presets/elements/air.webp"],
            likes: "<info><red>Cute Stuff</red></info> <info><red>Training & Combat</red></info> <info><red>Flying or Gliding</red></info> <info><red>Freedom</red></info> <info><red>Sweets</red></info>",
            dislikes: "<info><red>Lazy People</red></info> <info><red>Loud or Arrogant People</red></info> <info><red>Crowded Places</red></info> <info><red>Extreme Heat</red></info> <info><red>Losing Control</red></info>",
            weapon: "<info><red>Tempest Bloom</red></info>",
            ability1: "<strong><red>Mist Veil</red></strong> – Rayza can summon a thick mist that cloaks her movements, making her harder to detect and allowing her to reposition stealthily. This ability is perfect for ambushing or retreating.",
            ability2: "<strong><red>Wind Blades</red></strong> – With a flick of her fan, Rayza sends razor-sharp wind slashes at her enemies. These cutting gusts can hit multiple targets in a straight line or curve unpredictably for precise strikes.",
            ability3: "<strong><red>Dance of the Tempest</red></strong> – A rapid, fluid series of strikes combined with wind-enhanced slashes, striking enemies in a controlled area. This attack allows Rayza to fight gracefully while maintaining mobility.",
            ability4: "<strong><red>Silent Step</red></strong> – By manipulating the wind around her feet, Rayza moves with absolute silence. This ability increases her speed, allows her to bypass enemy detection, and helps her strike from unexpected angles.",
            ability5: "<strong><red>Petal Storm</red></strong> – Summoning a vortex of wind and petals, Rayza disorients enemies while enhancing her evasiveness. The petals act as both a distraction and a cutting force against anyone who gets too close.",
            ability6: "<strong><red>Blood Rage</red></strong> – In dire situations, Rayza taps into her bloodline’s hidden power, entering a frenzied state. Her strength and speed increase drastically, and her attacks become relentless, but once the effect fades, she is left fatigued.",
            background: "Rayza was born into a prestigious family celebrated for their mastery in combat, especially in the art of swordsmanship. Growing up, she idolized her father and older brother, Ren, both renowned for their skill and strength. She longed to join their ranks, to prove her worth as a warrior. But her father, bound by tradition and protective instincts, refused to train her, believing the path of a swordsman was not meant for her. His decision only fueled her resolve. Determined to show her father that strength was not bound by tradition or gender, Rayza began to train in secret. Her brother, who recognized her passion and potential, became her silent ally, offering tips and guidance away from their father's watchful eyes. When news of a prestigious tournament spread through the land, Rayza saw her chance. She entered the competition in disguise, hiding her face to avoid recognition. Her heart pounded as she faced each opponent, her confidence growing with every victory. One by one, she defeated nine challengers, advancing to the final round. To her shock, her last opponent was none other than Ren. She froze, realizing her secret could be exposed, but her brother’s smirk and knowing glance told her he had recognized her long before. He remained silent, signaling his respect for her determination. Rayza steeled herself for the fight, determined to prove herself not just to her brother but to everyone who doubted her. The duel was fierce and unrelenting, each sibling pushing the other to their limits. Rayza fought with all her heart, but Ren’s experience and skill proved formidable. As she faced the brink of defeat, something deep within her awakened—a latent power passed down through her bloodline. Enveloped in a red aura, Rayza entered a 'blood rage,' her strength and speed heightened to extraordinary levels. In the stands, her father’s face changed from shock to realization as he recognized the aura—and his daughter. His heart warred between pride and fear, but the tournament rules demanded that the match continue. The crowd watched in awe as the siblings clashed in a battle that seemed almost otherworldly, their bond and rivalry displayed in every strike. After an hour of grueling combat, Rayza finally succumbed to exhaustion, defeated by her brother but not broken. She awoke to find herself at home, her father and Ren beside her. Before she could explain herself, her father placed a hand on her shoulder, his expression a mix of pride and sadness. “I was only trying to protect you,” he admitted, his voice heavy with emotion. “You remind me so much of your mother. But watching you fight, I realize now—I was wrong. I won't always be here to shield you, and perhaps that isn’t what you need. Keep growing, Rayza. Become strong, but also wise. And, Ren,” he added, turning to his son, “look after your sister.” In that moment, Rayza felt the acceptance she had longed for. The family shared a tearful embrace, a silent promise binding them closer than ever. From that day on, Rayza’s path was clear—not just to prove her worth but to carry forward the strength and love her family had instilled in her."
        };
    } else if (character === 'liliana') {
        details = {
            name: "<yellow>Liliana Solarae</yellow>",
            faction:"<info><yellow>Light Harbingers</yellow></info>",
            role:"<info><yellow>Mage</yellow></info> <info><yellow>Healer</yellow></info>",
            homeland: "<info><yellow>Magelion Empire</yellow></info>",
            affiliates: "<info><yellow>Zion (Father)</yellow></info> <info><yellow>Feya (Companion)</yellow></info> <info><yellow>Floribeth (Mother)</yellow></info> <info><yellow>Blessica (Aunt)</yellow></info>",
            gender: "<info><yellow>Female</yellow></info>",
            height: "<info><yellow>5'7\" ft</yellow></info>",
            elementalImages: ["assets/images/character-presets/elements/light.webp", "assets/images/character-presets/elements/frost.webp"],
            likes: "<info><yellow>Reading</yellow></info> <info><yellow>Helping People</yellow></info> <info><yellow>Singing</yellow></info> <info><yellow>Dancing</yellow></info> <info><yellow>Peaceful gardens</yellow></info> <info><yellow>Teaching young mages</yellow></info>",
            dislikes: "<info><yellow>War and senseless bloodshed</yellow></info> <info><yellow>Betrayal</yellow></info> <info><yellow>Abuse of magic</yellow></info> <info><yellow>Being seen only as a symbol</yellow></info>",
            weapon: "<info><yellow>Solaraenian Staff</yellow></info>",
            ability1: "<strong><yellow>Radiant Blessing</yellow></strong> – Heals allies in an area with a burst of warm, holy light, gradually restoring health and cleansing minor ailments.",
            ability2: "<strong><yellow>Frostbound Aegis</yellow></strong> – Conjures a shimmering barrier of frost and light, absorbing damage and slowing enemies who strike it.",
            ability3: "<strong><yellow>Sanctum of Solarae</yellow></strong> – Marks sacred ground that empowers allies with regeneration and resistance, while weakening enemies who step within.",
            ability4: "<strong><yellow>Glacial Lance</yellow></strong> – Forms a sharp spear of frozen light and hurls it with deadly precision, piercing through enemies and freezing them on impact.",
            ability5: "<strong><yellow>Aurora Ascension</yellow></strong> – Enters a transcendent state, amplifying all her abilities for a short duration and radiating waves of healing energy.",
            ability6: "<strong><yellow>Celestial Oath</yellow></strong> — Liliana binds her soul to her allies, making them temporarily invulnerable to death for several seconds. If she falls during this time, she is revived in a burst of healing light that restores nearby allies.",
            background: "Liliana Solarae, the radiant founder of the Magelion Empire, rose from the ashes of a fallen world. After the death of the Solaraenian King and the mysterious disappearance of her mother, Floribeth, during the catastrophic Great War, Liliana—still a child—was swept into the chaos of a land torn apart. Their celestial homeland was obliterated, and the Umbrakiths were driven to near extinction.\n\nEldoria, once vibrant, was on the brink of annihilation.\n\nIn the shadows of destruction, Liliana was taken in by her aunt, Blessica—Floribeth’s twin sister—who concealed Liliana’s true lineage to protect her from enemies still thirsting for blood. Under Blessica’s watchful eye, Liliana was trained in secret, groomed not just as a survivor—but as a beacon of hope. Her mother’s final words echoed in her soul: 'You are the future of our people.'\n\nWhen she came of age, Blessica stepped aside, entrusting Liliana with the crown and the burden of a fractured world. Refusing to let history repeat itself, Liliana rose with wisdom far beyond her years. She sought unity where there was only division. Strength where there was only sorrow.\n\nSummoning the leaders of every race across Eldoria, Liliana called for a grand council—a final chance to end the cycle of violence. Though not all agreed, many saw truth in her words. Her voice, steady and unwavering, ignited something ancient and pure in their hearts.\n\nTo safeguard this fragile new peace, she formed the Light Harbingers—a legendary order of warriors and guardians drawn from every corner of Eldoria. Not all who wished to join succeeded, for Liliana herself forged the trials: tests not of strength, but of compassion, discipline, and resolve.\n\nIn time, peace returned. Races once divided sang her name in reverence. Eldoria flourished under her guidance. Liliana became a living symbol—not just of survival, but of unity, love, and light.\n\nYet, amid celebration, Liliana stood watchful.\n\nFor in her dreams, she saw glimpses of what’s to come: a shrouded figure, a dying sky, a second darkness waiting to devour the light. Peace had come… but for how long?"
        };
    } else if (character === 'floribeth') {
        details = {
            name: "<red>Floribeth Umbrakith</red>",
            faction: "<info><red>Order of Seekers</red></info>",
            role: "<info><red>Mage</red></info>",
            homeland: "<info><red>Solaraenian</red></info>",
            affiliates: "<info><red>Liliana (Daughter)</red></info> <info><red>Zion (Lover)</red></info> <info><red>Blessica (Sister)</red></info>",
            gender: "<info><red>Female</red></info>",
            height: "<info><red>5'8\" ft</red></info>",
            elementalImages: ["assets/images/character-presets/elements/shadow.webp"],
            likes: "<info><red>Zion</red></info> <info><red>Moonlit Nights</red></info> <info><red>Ancient Magic</red></info> <info><red>Roses</red></info>",
            dislikes: "<info><red>Celestial Betrayal</red></info> <info><red>War</red></info> <info><red>Her Own Reflection</red></info>",
            weapon: "<info><red>Crimson Wail (Blood-Cursed Scythe)</red></info>",
            ability1: "<strong><red>Blood Moon's Curse</red></strong> - Anyone who meets her gaze under the blood moon dies instantly.",
            ability2: "<strong><red>Scarlet Dominion</red></strong> - Controls the blood of the fallen, twisting it into deadly weapons or chains to ensnare enemies.",
            ability3: "<strong><red>Eclipsing Phantom</red></strong> - Becomes a shadow-like wraith, moving unseen through the battlefield, immune to physical attacks.",
            ability4: "<strong><red>Wail of the Forsaken</red></strong> - Her sorrowful cry weakens the minds of those who hear it, driving them to madness.",
            ability5: "<strong><red>Umbral Requiem</red></strong> - Summons a spectral vision of Zion, causing enemies to relive their most painful memories, paralyzing them in fear.",
            ability6: "<strong><red>Final Embrace</red></strong> - If she is mortally wounded, she can unleash a devastating explosion of cursed energy, consuming everything around her.",
            background: "Floribeth was once a celestial being—pure, radiant, and beloved. She was the selfless and compassionate princess of Solaraenian, destined to inherit the throne and bring eternal light to her people. She embodied everything a ruler should be—kind yet strong, wise yet humble. But love, the most beautiful and dangerous force, would become her ruin. In secret, she fell for Zion, the prince of the Umbrakiths, the sworn enemies of the Solaraenians for generations. Their love was a forbidden flame, burning against the tides of history and war. They met not as enemies, but as two wandering souls, lost in the vastness of the realms. In Zion, Floribeth saw not a monster, not an enemy, but a heart that beat in harmony with hers. And for him, she was not just a celestial heir but a light he had never known in his shadowed world. But love is not enough to break the chains of destiny. When their secret was unveiled, the Solarae King’s fury shook the heavens. He accused Floribeth of treason, of falling victim to the dark magic of the Umbrakiths. Her people turned against her, branding her a traitor to their divine bloodline. In the eyes of the Solaraenians, she was no longer their princess—she was tainted, lost, a disgrace. And so, she was cast down, banished from Solaraenian, and exiled into the mortal land of Eldoria. But her fall was only the beginning of the tragedy. The Umbrakiths were stunned by the revelation. They had not conspired to claim the celestial princess, yet their hands were now forced into war. The Solaraenians, blinded by their wrath, saw no redemption for Floribeth. They saw only war. And so, the Great War of Eldoria began—a conflict forged not by hatred, but by love that the world refused to accept. Amidst the bloodshed, Floribeth and Zion fought together—not as leaders of warring nations, but as lovers desperate to stop the slaughter. They pleaded, they struggled, they tried to hold back the tides of fate itself. But fate is cruel. On the battlefield, Zion fell. Floribeth watched as the blade that should have struck her instead pierced through the heart of the man she loved. His blood stained her hands, warm, real, slipping through her trembling fingers. The battlefield faded. Time itself seemed to shatter. She saw every moment they had shared—His laughter, the whispered promises, the stolen touches beneath forbidden skies. His voice, calling her name, fading into silence. His warmth, now nothing but a lifeless embrace. And something inside her broke. A whisper left her lips, a prayer, a curse, an agony too great for words. The sky darkened, the winds howled, and a blood moon rose. Those who dared look into her eyes saw only death. An aurora, dark and unholy, erupted around her as her tears of sorrow turned into rivers of blood. And then, the slaughter began. She bent the blood of those around her, twisting them into lifeless husks, consuming their very essence in an unrelenting storm of carnage. The battlefield became a graveyard. Soldiers—Solaraenians, Umbrakiths, all—fell before her wrath. She was no longer the celestial princess, nor the traitor in exile. She was something else. A phantom. A reaper. A queen of death. That day, the Scarlet Phantom was born. And the war ended. But not in victory, nor in peace. Only in silence. Now, Floribeth Umbrakith wanders the lands of Eldoria, her heart long turned to ice, her soul shackled by the blood of those she loved and those she loathed. She no longer fights for light, nor darkness. She seeks something beyond the reach of gods and mortals alike. Perhaps redemption. Perhaps revenge. Or perhaps, she simply searches for the one thing she lost—the love that once made her whole. For in the end, Floribeth never wished to be queen. She only wished to be with him. And that… was the one wish the universe would never grant."
        };
    } else if (character === 'feya') {
        details = {
            name: "<orange>Feya Ashey</orange>",
            faction:"<info><orange>Light Harbingers</orange></info>",
            role:"<info><orange>Mage</orange></info>",
            homeland: "<info><orange>Enchanted Forest (Village)</orange></info>",
            affiliates: "<info><orange>Liliana (Mentor)</orange></info> <info><orange>Ren (Friend)</orange></info> <info><orange>Rayza (Friend)</orange></info>",
            gender: "<info><orange>Female</orange></info>",
            height: "<info><orange>5'6\" ft</orange></info>",
            elementalImages: ["assets/images/character-presets/elements/fire.webp", "assets/images/character-presets/elements/light.webp"],
            likes: "<info><orange>Warmth & Sunlight</orange></info> <info><orange>Foxes & Small Creatures</orange></info> <info><orange>Dawn & Dusk</orange></info> <info><orange>Melodic Sounds</orange></info> <info><orange>Fire Magic</orange></info>",
            dislikes: "<info><orange>Cold & Rainy Weather</orange></info> <info><orange>Large Bodies of Water</orange></info> <info><orange>Being Watched</orange></info> <info><orange>Dark Legion</orange></info> <info><orange>Strict Rules</orange></info>",
            weapon: "<info><orange>None</orange></info>",
            ability1: "<strong><orange>Foxfire Embers</orange></strong> – Feya summons floating orbs of foxfire around her, which automatically seek out enemies, dealing fire damage over time. Holding the ability charges them into a powerful burst.",
            ability2: "<strong><orange>Spirit Rush</orange></strong> – Dashes forward in a swift fox-like movement, leaving behind an afterimage of flames. Can be used to evade or pass through enemies while burning them.",
            ability3: "<strong><orange>Eclipse Flare</orange></strong> – Unleashes a powerful burst of light-infused flames, dealing AoE damage and blinding enemies caught in the center for a few seconds.",
            ability4: "<strong><orange>Infernal Vulpes</orange></strong> – Feya transforms into a fox spirit, enhancing her fire magic and movement speed for a short duration. Her basic attacks leave lingering flames, and her abilities become stronger.",
            ability5: "<strong><orange>Radiant Safeguard</orange></strong> – A defensive ability where Feya creates a shield of light, reducing incoming damage and reflecting a portion of it back as searing fire.",
            ability6: "",
            background: "Feya was once a carefree child, growing up in the mystical Enchanted Forest, nestled near the mountains of the Magelion Empire. Her people, deeply attuned to nature and magic, lived in peaceful harmony, untouched by the conflicts of the outside world. With an adventurous spirit and an ever-burning curiosity, Feya spent her days exploring the vast woodland, her innate magic strengthening with each passing day. But peace is never eternal. The rise of the Dark Legion shattered the tranquility of her homeland. The Legion's forces swept through the land like a merciless storm, leaving destruction in their wake. Her people fought valiantly to defend their sacred home, her parents among the bravest warriors, but the enemy's power was overwhelming. One by one, the enchanted forests burned, and her entire race was driven to extinction. Feya, the last survivor, refused to go down without a fight. In a desperate stand, she unleashed her full power, incinerating the remaining Legion troops in a fiery explosion of magic. But her victory was fleeting. Drained and gravely wounded, she found herself face to face with the Dark Legion’s ruthless general—Drakeon. Overwhelmed, she fell in battle, her strength fading as the dark forces prepared to end her existence. Just as all hope seemed lost, the royal army of the Magelion Empire arrived, forcing the Dark Legion into retreat. Yet, the damage had already been done—the once-thriving Enchanted Forest lay in ruins, its beauty forever tainted by corruption. Hours later, Feya was found unconscious by the Empire’s scouts. Among them was Queen Liliana, a compassionate ruler renowned for her wisdom and healing powers. Moved by the sight of the broken girl and the devastation of her homeland, Liliana personally nursed Feya back to health. Recognizing the immense power within her, the queen adopted her as her own daughter, offering her a new life within the Empire. Under Liliana’s guidance, Feya trained to become one of the Light Harbingers, an elite order sworn to protect the Crystalight, the heart of the Empire’s power. Though the wounds of her past still linger, Feya has found a new purpose—to ensure that no one else suffers the fate of her people. As the Fiery Fox of the Light Harbingers, she fights with relentless passion, wielding her magic to defend the Empire and those she holds dear. But with Drakeon still at large and the Dark Legion looming in the shadows, she knows that her battle is far from over. Her past may have been forged in tragedy, but her future burns brighter than ever."
        };
    } else if (character === 'evany') {
        details = {
            name: "<green>Evany Eldeblossom</green>",
            title: "<info><green>Warden of the Bloom</green></info>",
            faction: "<info><green>Bloomforge Order</green></info>",
            role: "<info><green>Healer</green></info>",
            homeland: "<info><green>Luminwood Expanse</green></info>",
            affiliates: "<info><green>Floribeth (Former Ally)</green></info> <info><green>Liliana (Current Ally)</green></info> <info><green>Arzhel (Companion)</green></info>",
            gender: "<info><green>Female</green></info>",
            height: "<info><green>5'6\" ft</green></info>",
            elementalImages: ["assets/images/character-presets/elements/nature.webp", "assets/images/character-presets/elements/earth.webp"],
            likes: "<info><green>Gardening</green></info> <info><green>Rainy Days</green></info> <info><green>Singing to Trees</green></info> <info><green>Ancient Lore</green></info>",
            dislikes: "<info><green>Corruption</green></info> <info><green>Industrial Expansion</green></info> <info><green>Fire Magic</green></info>",
            weapon: "<info><green>Thornweaver Staff</green></info>",
            ability1: "<info><green>Verdant Embrace</green></info> - Heals allies over time by channeling life energy through roots and vines.",
            ability2: "<info><green>Briarwall</green></info> - Summons a thick wall of thorns to block enemy movement or projectiles.",
            ability3: "<info><green>Bloom Surge</green></info> - A pulse of blooming flowers stuns enemies and restores minor health to allies in range.",
            ability4: "<info><green>Nature’s Wrath</green></info> - Unleashes the fury of the forest in a massive AoE of erupting roots and vines.",
            ability5: "<info><green>Thornbind</green></info> - Immobilizes a target by entwining them in magical vines, silencing spellcasters.",
            ability6: "<info><green>Groveheart Ascension</green></info> - Temporarily enters an awakened state, enhancing all nature spells, summoning dryad spirits to fight alongside her.",
            background: "Evany, guardian of nature and master of floramancy, once ruled the vast and vibrant Luminwood Expanse—a realm where flora and fauna danced in perfect harmony. A former elite of the ancient faction led by Queen Floribeth, Evany eventually stepped away from her old ties, seeking a deeper purpose. With a heart rooted in healing and preservation, she founded her own faction: the Bloomforge Order, sworn to protect the Tree of Life, the sacred heart of Eldoria itself—its roots stretching through generations of time. Her homeland was once a breathtaking expanse of lush valleys, mystical groves, and ancient trees that whispered tales of old. Diverse in culture and wild in spirit, it was paradise. But after the devastating Great War, the land was left wounded—its spirit dimmed, its beauty scarred. Still, Evany remained unwavering. Her mission: to restore Luminwood to its former glory and protect it from any threat that dared approach. Peace, however, was fleeting. Not long after the war’s end, a mysterious corruption began to seep into the lands—spreading through the Elderhaven Wilds like rot beneath the surface. Dark magic, twisted and unnatural, corrupted creatures and poisoned the soil. The source? Unknown. The danger? Imminent. Evany acted swiftly. She reinforced borders, empowered her Bloomforge guardians, and sent urgent reports to the elite members of the Light Harbingers. Her warning proved timely. One fateful night, under a moon veiled in mist, a shadowy faction launched a full-scale assault on Luminwood Expanse. But Evany, ever the strategist, was ready. Joined by her trusted companion Arzhel, she activated the ancient Solaraenian portal, summoning reinforcements just in time. Liliana Solarae and her forces arrived, rallying to Luminwood’s defense. The battle raged for hours under the canopy of burning leaves and flickering starlight. Though blood was shed and wounds were deep, they emerged victorious—with fewer casualties than feared. But Evany did not rejoice. She knew this was only the beginning. Refusing to let her people fall again, she began fortifying Springvale, the heart of her realm, transforming it into a sanctuary and stronghold. With the unwavering aid of her allies, she prepares—not just to defend—but to reclaim what was once pure. For as long as she breathes, Evany will stand between corruption and creation."
        };
    } else if (character === 'coming-soon') {
        details = {
            name: "Coming Soon",
            faction:"",
            role:"",
            homeland: "",
            affiliates: "",
            gender: "",
            height: "",
            likes: "",
            dislikes: "",
            elementalImages: ["assets/images/character-presets/roles/question.webp"],
            weapon: "",
            ability1: "",
            ability2: "",
            ability3: "",
            ability4: "",
            ability5: "",
            ability6: "",
            background: ""
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
                <p><strong>Faction</strong> ${details.faction}</p>
                <p><strong>Role</strong> ${details.role}</p>
                <p><strong>Homeland</strong> ${details.homeland}</p>
                <p><strong>Gender</strong> ${details.gender}</p>
                <p><strong>Height</strong> ${details.height}</p>
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
    characterContainer.style.backgroundImage = "url('assets/images/character-presets/cover/default.gif')";
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
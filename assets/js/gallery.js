class PortfolioGallery {
  constructor() {
    this.currentFilter = 'all';
    this.currentView = 'grid';
    this.currentLightboxIndex = 0;
    this.filteredImages = [];

    // Sample artwork data - replace with your actual images
    this.artworks = [
      {
        src: "assets/images/artgallary/blessica portrait (2025).webp",
        thumb: "assets/images/artgallary/blessica portrait (2025).webp",
        alt: "blessica portrait",
        title: "blessica portrait",
        category: "semi-realism",
        span: 10
      },
      {
        src: "assets/images/artgallary/last moment (2024).webp",
        thumb: "assets/images/artgallary/last moment (2024).webp",
        alt: "last moment",
        title: "last moment",
        category: "semi-realism",
        span: 15
      },
      {
        src: "assets/images/artgallary/forbidden love (2024).webp",
        thumb: "assets/images/artgallary/forbidden love (2024).webp",
        alt: "Forbidden Love",
        title: "Lunara X Zion",
        category: "semi-realism",
        span: 10
      },
      {
        src: "assets/images/artgallary/elishia cozy scene (2024).webp",
        thumb: "assets/images/artgallary/elishia cozy scene (2024).webp",
        alt: "elishia cozy scene",
        title: "elishia cozy scene",
        category: "semi-realism",
        span: 15
      },
      {
        src: "assets/images/artgallary/floribeth portrait (2024).webp",
        thumb: "assets/images/artgallary/floribeth portrait (2024).webp",
        alt: "floribeth portrait",
        title: "floribeth portrait",
        category: "semi-realism",
        span: 10
      },
      {
        src: "assets/images/artgallary/legend of the crystalight (2024).webp",
        thumb: "assets/images/artgallary/legend of the crystalight (2024).webp",
        alt: "legend of the crystalight",
        title: "legend of the crystalight",
        category: "landscape",
        span: 15
      },
      {
        src: "assets/images/artgallary/bday art (2024).webp",
        thumb: "assets/images/artgallary/bday art (2024).webp",
        alt: "bday art",
        title: "bday art",
        category: "anime-style",
        span: 10
      },
      {
        src: "assets/images/artgallary/elishia avatar.webp",
        thumb: "assets/images/artgallary/elishia avatar.webp",
        alt: "elishia avatar",
        title: "elishia avatar",
        category: "semi-realism",
        span: 15
      },
      {
        src: "assets/images/artgallary/wasteland.webp",
        thumb: "assets/images/artgallary/wasteland.webp",
        alt: "wasteland",
        title: "wasteland",
        category: "landscape",
        span: 10
      },
      {
        src: "assets/images/artgallary/rayza portrait (2025).webp",
        thumb: "assets/images/artgallary/rayza portrait (2025).webp",
        alt: "rayza portrait",
        title: "rayza portrait",
        category: "semi-realism",
        span: 15
      },
      {
        src: "assets/images/artgallary/undawn character.webp",
        thumb: "assets/images/artgallary/undawn character.webp",
        alt: "undawn character",
        title: "undawn character",
        category: "semi-realism",
        span: 10
      },
      {
        src: "assets/images/artgallary/feya bust up.webp",
        thumb: "assets/images/artgallary/feya bust up.webp",
        alt: "feya bust up",
        title: "feya bust up",
        category: "semi-realism",
        span: 15
      },
      {
        src: "assets/images/artgallary/elishia full body (grayscale).webp",
        thumb: "assets/images/artgallary/elishia full body (grayscale).webp",
        alt: "elishia full body",
        title: "elishia full body",
        category: "grayscale",
        span: 10
      },
      {
        src: "assets/images/artgallary/awakened from a deep slumber (2024).webp",
        thumb: "assets/images/artgallary/awakened from a deep slumber (2024).webp",
        alt: "awakened from a deep slumber",
        title: "awakened from a deep slumber",
        category: "semi-realism",
        span: 15
      },
      {
        src: "assets/images/artgallary/elishia portrait (2023).webp",
        thumb: "assets/images/artgallary/elishia portrait (2023).webp",
        alt: "elishia portrait",
        title: "elishia portrait",
        category: "semi-realism",
        span: 10
      },
      {
        src: "assets/images/artgallary/liliana portrait (2023).webp",
        thumb: "assets/images/artgallary/liliana portrait (2023).webp",
        alt: "liliana portrait",
        title: "liliana portrait",
        category: "semi-realism",
        span: 15
      },
      {
        src: "assets/images/artgallary/tekushiki (2023).webp",
        thumb: "assets/images/artgallary/tekushiki (2023).webp",
        alt: "tekushiki",
        title: "tekushiki",
        category: "semi-realism",
        span: 10
      },
      {
        src: "assets/images/artgallary/feya landscape (2023).webp",
        thumb: "assets/images/artgallary/feya landscape (2023).webp",
        alt: "feya landscape",
        title: "feya landscape",
        category: "semi-realism",
        span: 15
      },
      {
        src: "assets/images/artgallary/feya portrait (2023).webp",
        thumb: "assets/images/artgallary/feya portrait (2023).webp",
        alt: "feya portrait",
        title: "feya portrait",
        category: "semi-realism",
        span: 10
      },
      {
        src: "assets/images/artgallary/elishia chibi grayscale (2023).webp",
        thumb: "assets/images/artgallary/elishia chibi grayscale (2023).webp",
        alt: "elishia chibi grayscale",
        title: "elishia chibi grayscale",
        category: "grayscale",
        span: 15
      },
      {
        src: "assets/images/artgallary/tragic past grayscale (2023).webp",
        thumb: "assets/images/artgallary/tragic past grayscale (2023).webp",
        alt: "tragic past grayscale",
        title: "tragic past grayscale",
        category: "grayscale",
        span: 10
      },
      {
        src: "assets/images/artgallary/former falcon squad (2023).webp",
        thumb: "assets/images/artgallary/former falcon squad (2023).webp",
        alt: "former falcon squad",
        title: "former falcon squad",
        category: "semi-realism",
        span: 15
      },
      {
        src: "assets/images/artgallary/old rivals grayscale (2023).webp",
        thumb: "assets/images/artgallary/old rivals grayscale (2023).webp",
        alt: "old rivals grayscale",
        title: "old rivals grayscale",
        category: "grayscale",
        span: 10
      },
      {
        src: "assets/images/artgallary/until we meet again (2022).webp",
        thumb: "assets/images/artgallary/until we meet again (2022).webp",
        alt: "until we meet again",
        title: "until we meet again",
        category: "anime-style",
        span: 15
      },
      {
        src: "assets/images/artgallary/elishia portrait (2022).webp",
        thumb: "assets/images/artgallary/elishia portrait (2022).webp",
        alt: "elishia portrait",
        title: "elishia portrait",
        category: "semi-realism",
        span: 10
      },
      {
        src: "assets/images/artgallary/fell into despair (2022).webp",
        thumb: "assets/images/artgallary/fell into despair (2022).webp",
        alt: "fell into despair",
        title: "fell into despair",
        category: "semi-realism",
        span: 15
      },
      {
        src: "assets/images/artgallary/wednesday fanart (2022).webp",
        thumb: "assets/images/artgallary/wednesday fanart (2022).webp",
        alt: "wednesday fanart",
        title: "wednesday fanart",
        category: "semi-realism",
        span: 10
      },
      {
        src: "assets/images/artgallary/rebecca portrait fanart (2022).webp",
        thumb: "assets/images/artgallary/rebecca portrait fanart (2022).webp",
        alt: "rebecca portrait fanart",
        title: "rebecca portrait fanart",
        category: "anime-style",
        span: 15
      },
      {
        src: "assets/images/artgallary/a mothers love grayscale (2022).webp",
        thumb: "assets/images/artgallary/a mothers love grayscale (2022).webp",
        alt: "a mothers love grayscale",
        title: "a mothers love grayscale",
        category: "grayscale",
        span: 10
      },
      {
        src: "assets/images/artgallary/fallen angel (2022).webp",
        thumb: "assets/images/artgallary/fallen angel (2022).webp",
        alt: "fallen angel",
        title: "fallen angel",
        category: "grayscale",
        span: 15
      },
      {
        src: "assets/images/artgallary/raging blood of the past (2022).webp",
        thumb: "assets/images/artgallary/raging blood of the past (2022).webp",
        alt: "raging blood of the past",
        title: "raging blood of the past",
        category: "semi-realism",
        span: 10
      },
      {
        src: "assets/images/artgallary/the return (2022).webp",
        thumb: "assets/images/artgallary/the return (2022).webp",
        alt: "the return",
        title: "the return",
        category: "semi-realism",
        span: 15
      },
      {
        src: "assets/images/artgallary/phantom nightwalker (2022).webp",
        thumb: "assets/images/artgallary/phantom nightwalker (2022).webp",
        alt: "phantom nightwalker",
        title: "phantom nightwalker",
        category: "semi-realism",
        span: 10
      },
      {
        src: "assets/images/artgallary/hidden truth (2022).webp",
        thumb: "assets/images/artgallary/hidden truth (2022).webp",
        alt: "hidden truth",
        title: "hidden truth",
        category: "semi-realism",
        span: 15
      },
      {
        src: "assets/images/artgallary/mission one (2022).webp",
        thumb: "assets/images/artgallary/mission one (2022).webp",
        alt: "mission one",
        title: "mission one",
        category: "grayscale",
        span: 10
      },
      {
        src: "assets/images/artgallary/ren portrait (2022).webp",
        thumb: "assets/images/artgallary/ren portrait (2022).webp",
        alt: "ren portrait",
        title: "ren portrait",
        category: "semi-realism",
        span: 15
      },
      {
        src: "assets/images/artgallary/elishia summer grayscale (2022).webp",
        thumb: "assets/images/artgallary/elishia summer grayscale (2022).webp",
        alt: "elishia summer grayscale",
        title: "elishia summer grayscale",
        category: "grayscale",
        span: 10
      },
      {
        src: "assets/images/artgallary/bday art (2022).webp",
        thumb: "assets/images/artgallary/bday art (2022).webp",
        alt: "bday art",
        title: "bday art",
        category: "semi-realism",
        span: 15
      },
      {
        src: "assets/images/artgallary/elishia padoru (2022).webp",
        thumb: "assets/images/artgallary/elishia padoru (2022).webp",
        alt: "elishia padoru",
        title: "elishia padoru",
        category: "anime-style",
        span: 10
      },
      {
        src: "assets/images/artgallary/teku padoru (2022).webp",
        thumb: "assets/images/artgallary/teku padoru (2022).webp",
        alt: "teku padoru",
        title: "teku padoru",
        category: "anime-style",
        span: 15
      },
      {
        src: "assets/images/artgallary/restricted zone (2022).webp",
        thumb: "assets/images/artgallary/restricted zone (2022).webp",
        alt: "restricted zone",
        title: "restricted zone",
        category: "semi-realism",
        span: 10
      },
      {
        src: "assets/images/artgallary/elishia younger self (2022).webp",
        thumb: "assets/images/artgallary/elishia younger self (2022).webp",
        alt: "elishia younger self",
        title: "elishia younger self",
        category: "anime-style",
        span: 15
      },
      {
        src: "assets/images/artgallary/childhood bestfriend (2022).webp",
        thumb: "assets/images/artgallary/childhood bestfriend (2022).webp",
        alt: "childhood bestfriend",
        title: "childhood bestfriend",
        category: "anime-style",
        span: 10
      },
      {
        src: "assets/images/artgallary/RB (2022).webp",
        thumb: "assets/images/artgallary/RB (2022).webp",
        alt: "RB",
        title: "RB",
        category: "anime-style",
        span: 15
      },
      {
        src: "assets/images/artgallary/the twin dragon blade (2022).webp",
        thumb: "assets/images/artgallary/the twin dragon blade (2022).webp",
        alt: "the twin dragon blade",
        title: "the twin dragon blade",
        category: "semi-realism",
        span: 10
      },
      {
        src: "assets/images/artgallary/ren & rayza (2022).webp",
        thumb: "assets/images/artgallary/ren & rayza (2022).webp",
        alt: "ren & rayza",
        title: "ren & rayza",
        category: "anime-style",
        span: 15
      },
      {
        src: "assets/images/artgallary/hexxana portrait grayscale (2022).webp",
        thumb: "assets/images/artgallary/hexxana portrait grayscale (2022).webp",
        alt: "hexxana portrait grayscale",
        title: "hexxana portrait grayscale",
        category: "grayscale",
        span: 10
      },
      {
        src: "assets/images/artgallary/hexx emote.webp",
        thumb: "assets/images/artgallary/hexx emote.webp",
        alt: "hexx emote",
        title: "hexx emote",
        category: "anime-style",
        span: 15
      },
      {
        src: "assets/images/artgallary/hexaana close up grayscale (2022).webp",
        thumb: "assets/images/artgallary/hexaana close up grayscale (2022).webp",
        alt: "hexaana close up grayscale",
        title: "hexaana close up grayscale",
        category: "grayscale",
        span: 10
      },
      {
        src: "assets/images/artgallary/inner demon (2022).webp",
        thumb: "assets/images/artgallary/inner demon (2022).webp",
        alt: "inner demon",
        title: "inner demon",
        category: "semi-realism",
        span: 15
      },
      {
        src: "assets/images/artgallary/hexxana star dust witch (2022).webp",
        thumb: "assets/images/artgallary/hexxana star dust witch (2022).webp",
        alt: "hexxana star dust witch",
        title: "hexxana star dust witch",
        category: "semi-realism",
        span: 10
      },
      {
        src: "assets/images/artgallary/enemy territory (2021).webp",
        thumb: "assets/images/artgallary/enemy territory (2021).webp",
        alt: "enemy territory",
        title: "enemy territory",
        category: "landscape",
        span: 15
      },
      {
        src: "assets/images/artgallary/elishia cute emote.webp",
        thumb: "assets/images/artgallary/elishia cute emote.webp",
        alt: "elishia cute emote",
        title: "elishia cute emote",
        category: "anime-style",
        span: 10
      },
      {
        src: "assets/images/artgallary/hexxana cute emote.webp",
        thumb: "assets/images/artgallary/hexxana cute emote.webp",
        alt: "hexxana cute emote",
        title: "hexxana cute emote",
        category: "anime-style",
        span: 15
      },
      {
        src: "assets/images/artgallary/ren cute emote.webp",
        thumb: "assets/images/artgallary/ren cute emote.webp",
        alt: "ren cute emote",
        title: "ren cute emote",
        category: "anime-style",
        span: 10
      },
      {
        src: "assets/images/artgallary/rayza cute emote.webp",
        thumb: "assets/images/artgallary/rayza cute emote.webp",
        alt: "rayza cute emote",
        title: "rayza cute emote",
        category: "anime-style",
        span: 15
      },
      {
        src: "assets/images/artgallary/drakeon cute emote.webp",
        thumb: "assets/images/artgallary/drakeon cute emote.webp",
        alt: "drakeon cute emote",
        title: "drakeon cute emote",
        category: "anime-style",
        span: 10
      },
      {
        src: "assets/images/artgallary/arzhel cute emote.webp",
        thumb: "assets/images/artgallary/arzhel cute emote.webp",
        alt: "arzhel cute emote",
        title: "arzhel cute emote",
        category: "anime-style",
        span: 15
      },
      {
        src: "assets/images/artgallary/stelia cute emote.webp",
        thumb: "assets/images/artgallary/stelia cute emote.webp",
        alt: "stelia cute emote",
        title: "stelia cute emote",
        category: "anime-style",
        span: 10
      },
      {
        src: "assets/images/artgallary/shelain cute emote.webp",
        thumb: "assets/images/artgallary/shelain cute emote.webp",
        alt: "shelain cute emote",
        title: "shelain cute emote",
        category: "anime-style",
        span: 15
      },
      {
        src: "assets/images/artgallary/flora cute emote.webp",
        thumb: "assets/images/artgallary/flora cute emote.webp",
        alt: "flora cute emote",
        title: "flora cute emote",
        category: "anime-style",
        span: 10
      },
      {
        src: "assets/images/artgallary/H.R.E (2021).webp",
        thumb: "assets/images/artgallary/H.R.E (2021).webp",
        alt: "H.R.E",
        title: "H.R.E",
        category: "semi-realism",
        span: 15
      },
      {
        src: "assets/images/artgallary/day off (2021).webp",
        thumb: "assets/images/artgallary/day off (2021).webp",
        alt: "day off",
        title: "day off",
        category: "landscape",
        span: 10
      },
      {
        src: "assets/images/artgallary/christmas theme (2020).webp",
        thumb: "assets/images/artgallary/christmas theme (2020).webp",
        alt: "christmas theme",
        title: "christmas theme",
        category: "landscape",
        span: 15
      },
      {
        src: "assets/images/artgallary/RB9 cover (2020).webp",
        thumb: "assets/images/artgallary/RB9 cover (2020).webp",
        alt: "RB9 cover",
        title: "RB9 cover",
        category: "semi-realism",
        span: 10
      },
      {
        src: "assets/images/artgallary/elishia portrait (2020).webp",
        thumb: "assets/images/artgallary/elishia portrait (2020).webp",
        alt: "elishia portrait",
        title: "elishia portrait",
        category: "semi-realism",
        span: 15
      },
      {
        src: "assets/images/artgallary/hexxana portrait (2020).webp",
        thumb: "assets/images/artgallary/hexxana portrait (2020).webp",
        alt: "hexxana portrait",
        title: "hexxana portrait",
        category: "semi-realism",
        span: 10
      },
      {
        src: "assets/images/artgallary/rayza portrait (2020).webp",
        thumb: "assets/images/artgallary/rayza portrait (2020).webp",
        alt: "rayza portrait",
        title: "rayza portrait",
        category: "semi-realism",
        span: 15
      },
      {
        src: "assets/images/artgallary/stellia portrait (2020).webp",
        thumb: "assets/images/artgallary/stellia portrait (2020).webp",
        alt: "stellia portrait",
        title: "stellia portrait",
        category: "semi-realism",
        span: 10
      },
      {
        src: "assets/images/artgallary/blessica portrait (2020).webp",
        thumb: "assets/images/artgallary/blessica portrait (2020).webp",
        alt: "blessica portrait",
        title: "blessica portrait",
        category: "semi-realism",
        span: 15
      },
      {
        src: "assets/images/artgallary/journey (2020).webp",
        thumb: "assets/images/artgallary/journey (2020).webp",
        alt: "journey",
        title: "journey",
        category: "landscape",
        span: 10
      },
      {
        src: "assets/images/artgallary/ruins (2020).webp",
        thumb: "assets/images/artgallary/ruins (2020).webp",
        alt: "ruins",
        title: "ruins",
        category: "landscape",
        span: 15
      },
      {
        src: "assets/images/artgallary/elishia hexxana (2020).webp",
        thumb: "assets/images/artgallary/elishia hexxana (2020).webp",
        alt: "elishia hexxana",
        title: "elishia hexxana",
        category: "anime-style",
        span: 10
      },
      {
        src: "assets/images/artgallary/tekushiki portrait fanart (2020).webp",
        thumb: "assets/images/artgallary/tekushiki portrait fanart (2020).webp",
        alt: "tekushiki portrait fanart",
        title: "tekushiki portrait fanart",
        category: "semi-realism",
        span: 15
      },
      {
        src: "assets/images/artgallary/duel (2020).webp",
        thumb: "assets/images/artgallary/duel (2020).webp",
        alt: "duel",
        title: "duel",
        category: "landscape",
        span: 10
      },
      {
        src: "assets/images/artgallary/hexxana tekushiki (2020).webp",
        thumb: "assets/images/artgallary/hexxana tekushiki (2020).webp",
        alt: "hexxana tekushiki",
        title: "hexxana tekushiki",
        category: "anime-style",
        span: 15
      },
      {
        src: "assets/images/artgallary/shelain (2020).webp",
        thumb: "assets/images/artgallary/shelain (2020).webp",
        alt: "shelain",
        title: "shelain",
        category: "semi-realism",
        span: 10
      },
      {
        src: "assets/images/artgallary/hexxana full body (2020).webp",
        thumb: "assets/images/artgallary/hexxana full body (2020).webp",
        alt: "hexxana full body",
        title: "hexxana full body",
        category: "semi-realism",
        span: 15
      },
      {
        src: "assets/images/artgallary/rayza full body (2020).webp",
        thumb: "assets/images/artgallary/rayza full body (2020).webp",
        alt: "rayza full body",
        title: "rayza full body",
        category: "semi-realism",
        span: 10
      },
      {
        src: "assets/images/artgallary/hexxana star dust witch (2020).webp",
        thumb: "assets/images/artgallary/hexxana star dust witch (2020).webp",
        alt: "hexxana star dust witch",
        title: "hexxana star dust witch",
        category: "semi-realism",
        span: 15
      },
      {
        src: "assets/images/artgallary/first characters (2020).webp",
        thumb: "assets/images/artgallary/first characters (2020).webp",
        alt: "first characters",
        title: "first characters",
        category: "semi-realism",
        span: 10
      },
      {
        src: "assets/images/artgallary/stelia full body (2020).webp",
        thumb: "assets/images/artgallary/stelia full body (2020).webp",
        alt: "stelia full body",
        title: "stelia full body",
        category: "semi-realism",
        span: 15
      },
      {
        src: "assets/images/artgallary/humanoid (2019).webp",
        thumb: "assets/images/artgallary/humanoid (2019).webp",
        alt: "humanoid",
        title: "humanoid",
        category: "anime-style",
        span: 10
      },
      {
        src: "assets/images/artgallary/hexxana star dust witch (2019).webp",
        thumb: "assets/images/artgallary/hexxana star dust witch (2019).webp",
        alt: "hexxana star dust witch",
        title: "hexxana star dust witch",
        category: "semi-realism",
        span: 15
      },
      {
        src: "assets/images/artgallary/hexxana stardust witch (2019).webp",
        thumb: "assets/images/artgallary/hexxana stardust witch (2019).webp",
        alt: "hexxana stardust witch",
        title: "hexxana stardust witch",
        category: "semi-realism",
        span: 10
      },
      {
        src: "assets/images/artgallary/fan art gate (2019).webp",
        thumb: "assets/images/artgallary/fan art gate (2019).webp",
        alt: "fan art gate",
        title: "fan art gate",
        category: "anime-style",
        span: 15
      },
      {
        src: "assets/images/artgallary/hexxana first digital portrait.webp",
        thumb: "assets/images/artgallary/hexxana first digital portrait.webp",
        alt: "hexxana first digital portrait",
        title: "hexxana first digital portrait",
        category: "anime-style",
        span: 10
      },
    ];

    this.init();
  }

  init() {
    this.renderGallery();
    this.bindEvents();
    this.updateStats();
  }

  renderGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    this.filteredImages = this.currentFilter === 'all'
      ? this.artworks
      : this.artworks.filter(artwork => artwork.category === this.currentFilter);

    this.filteredImages.forEach((artwork, index) => {
      const item = document.createElement('div');
      item.className = 'gallery-item loading';
      item.style.setProperty('--span', artwork.span);
      item.dataset.index = index;

      const img = document.createElement('img');
      img.src = artwork.thumb;
      img.alt = artwork.title;
      img.loading = 'lazy';

      img.onload = () => {
        item.classList.remove('loading');
      };

      const overlay = document.createElement('div');
      overlay.className = 'gallery-overlay';
      overlay.innerHTML = `
            <div class="overlay-title">${artwork.title}</div>
            <div class="overlay-category">${artwork.category.replace('-', ' ')}</div>
          `;

      item.appendChild(img);
      item.appendChild(overlay);
      gallery.appendChild(item);
    });
  }

  bindEvents() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        this.currentFilter = btn.dataset.category;
        this.renderGallery();
        this.updateStats();
      });
    });

    // View toggle
    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelector('.view-btn.active').classList.remove('active');
        btn.classList.add('active');
        this.currentView = btn.dataset.view;
        this.toggleView();
      });
    });

    // Gallery item clicks
    document.getElementById('gallery').addEventListener('click', (e) => {
      const item = e.target.closest('.gallery-item');
      if (item) {
        this.currentLightboxIndex = parseInt(item.dataset.index);
        this.openLightbox();
      }
    });

    // Lightbox controls
    document.getElementById('close-lightbox').addEventListener('click', () => this.closeLightbox());
    document.getElementById('prev-btn').addEventListener('click', () => this.previousImage());
    document.getElementById('next-btn').addEventListener('click', () => this.nextImage());

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (document.getElementById('lightbox').classList.contains('active')) {
        switch (e.key) {
          case 'Escape':
            this.closeLightbox();
            break;
          case 'ArrowLeft':
            this.previousImage();
            break;
          case 'ArrowRight':
            this.nextImage();
            break;
        }
      }
    });

    // Close lightbox on overlay click
    document.getElementById('lightbox').addEventListener('click', (e) => {
      if (e.target.id === 'lightbox') {
        this.closeLightbox();
      }
    });
  }

  toggleView() {
    const gallery = document.getElementById('gallery');
    gallery.className = `gallery ${this.currentView}-view`;
  }

  updateStats() {
    document.getElementById('showing-count').textContent = this.filteredImages.length;
    document.getElementById('total-count').textContent = this.artworks.length;
  }

  openLightbox() {
    const artwork = this.filteredImages[this.currentLightboxIndex];
    const lightboxImage = document.getElementById('lightbox-image');

    // Add fade-out before changing image
    lightboxImage.classList.add('fade-out');

    // Wait for fade-out transition, then swap image and fade-in
    setTimeout(() => {
      lightboxImage.src = artwork.src;
      lightboxImage.alt = artwork.title;
      document.getElementById('lightbox-title').textContent = artwork.title;
      document.getElementById('lightbox-category').textContent = artwork.category.replace('-', ' ');

      lightboxImage.classList.remove('fade-out'); // fade back in
    }, 300);

    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
  }

  previousImage() {
    this.currentLightboxIndex = this.currentLightboxIndex > 0
      ? this.currentLightboxIndex - 1
      : this.filteredImages.length - 1;
    this.openLightbox();
  }

  nextImage() {
    this.currentLightboxIndex = this.currentLightboxIndex < this.filteredImages.length - 1
      ? this.currentLightboxIndex + 1
      : 0;
    this.openLightbox();
  }
}

// Initialize the gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioGallery();
});
document.addEventListener("DOMContentLoaded", () => {
  const images = [
    {
      src: "assets/images/artgallary/blessica portrait (2025).webp",
      alt: "Blessica Portrait",
      title: "Blessica Portrait",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/last moment (2024).webp",
      alt: "Last Moment",
      title: "Last Moment",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/forbidden love (2024).webp",
      alt: "Forbidden Love",
      title: "Lunara X Zion",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/elishia cozy scene (2024).webp",
      alt: "elishia cozy scene",
      title: "elishia cozy scene",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/floribeth portrait (2024).webp",
      alt: "floribeth portrait",
      title: "floribeth portrait",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/legend of the crystalight (2024).webp",
      alt: "legend of the crystalight",
      title: "legend of the crystalight",
      category: "landscape"
    },
    {
      src: "assets/images/artgallary/bday art (2024).webp",
      alt: "bday art",
      title: "bday art",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/elishia avatar.webp",
      alt: "elishia avatar",
      title: "elishia avatar",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/wasteland.webp",
      alt: "wasteland",
      title: "wasteland",
      category: "landscape"
    },
    {
      src: "assets/images/artgallary/rayza portrait (2025).webp",
      alt: "rayza portrait",
      title: "rayza portrait",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/undawn character.webp",
      alt: "undawn character",
      title: "undawn character",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/feya bust up.webp",
      alt: "feya bust up",
      title: "feya bust up",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/elishia full body (grayscale).webp",
      alt: "elishia full body",
      title: "elishia full body",
      category: "grayscale"
    },
    {
      src: "assets/images/artgallary/awakened from a deep slumber (2024).webp",
      alt: "awakened from a deep slumber",
      title: "awakened from a deep slumber",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/elishia portrait (2023).webp",
      alt: "elishia portrait",
      title: "elishia portrait",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/liliana portrait (2023).webp",
      alt: "liliana portrait",
      title: "liliana portrait",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/tekushiki (2023).webp",
      alt: "tekushiki",
      title: "tekushiki",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/feya landscape (2023).webp",
      alt: "feya landscape",
      title: "feya landscape",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/feya portrait (2023).webp",
      alt: "feya portrait",
      title: "feya portrait",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/elishia chibi grayscale (2023).webp",
      alt: "elishia chibi grayscale",
      title: "elishia chibi grayscale",
      category: "grayscale"
    },
    {
      src: "assets/images/artgallary/tragic past grayscale (2023).webp",
      alt: "tragic past grayscale",
      title: "tragic past grayscale",
      category: "grayscale"
    },
    {
      src: "assets/images/artgallary/former falcon squad (2023).webp",
      alt: "former falcon squad",
      title: "former falcon squad",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/old rivals grayscale (2023).webp",
      alt: "old rivals grayscale",
      title: "old rivals grayscale",
      category: "grayscale"
    },
    {
      src: "assets/images/artgallary/until we meet again (2022).webp",
      alt: "until we meet again",
      title: "until we meet again",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/elishia portrait (2022).webp",
      alt: "elishia portrait",
      title: "elishia portrait",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/fell into despair (2022).webp",
      alt: "fell into despair",
      title: "fell into despair",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/wednesday fanart (2022).webp",
      alt: "wednesday fanart",
      title: "wednesday fanart",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/rebecca portrait fanart (2022).webp",
      alt: "rebecca portrait fanart",
      title: "rebecca portrait fanart",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/a mothers love grayscale (2022).webp",
      alt: "a mothers love grayscale",
      title: "a mothers love grayscale",
      category: "grayscale"
    },
    {
      src: "assets/images/artgallary/fallen angel (2022).webp",
      alt: "fallen angel",
      title: "fallen angel",
      category: "grayscale"
    },
    {
      src: "assets/images/artgallary/raging blood of the past (2022).webp",
      alt: "raging blood of the past",
      title: "raging blood of the past",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/the return (2022).webp",
      alt: "the return",
      title: "the return",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/phantom nightwalker (2022).webp",
      alt: "phantom nightwalker",
      title: "phantom nightwalker",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/hidden truth (2022).webp",
      alt: "hidden truth",
      title: "hidden truth",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/mission one (2022).webp",
      alt: "mission one",
      title: "mission one",
      category: "grayscale"
    },
    {
      src: "assets/images/artgallary/ren portrait (2022).webp",
      alt: "ren portrait",
      title: "ren portrait",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/elishia summer grayscale (2022).webp",
      alt: "elishia summer grayscale",
      title: "elishia summer grayscale",
      category: "grayscale"
    },
    {
      src: "assets/images/artgallary/bday art (2022).webp",
      alt: "bday art",
      title: "bday art",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/elishia padoru (2022).webp",
      alt: "elishia padoru",
      title: "elishia padoru",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/teku padoru (2022).webp",
      alt: "teku padoru",
      title: "teku padoru",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/restricted zone (2022).webp",
      alt: "restricted zone",
      title: "restricted zone",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/elishia younger self (2022).webp",
      alt: "elishia younger self",
      title: "elishia younger self",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/childhood bestfriend (2022).webp",
      alt: "childhood bestfriend",
      title: "childhood bestfriend",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/RB (2022).webp",
      alt: "RB",
      title: "RB",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/the twin dragon blade (2022).webp",
      alt: "the twin dragon blade",
      title: "the twin dragon blade",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/ren & rayza (2022).webp",
      alt: "ren & rayza",
      title: "ren & rayza",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/hexxana portrait grayscale (2022).webp",
      alt: "hexxana portrait grayscale",
      title: "hexxana portrait grayscale",
      category: "grayscale"
    },
    {
      src: "assets/images/artgallary/hexx emote.webp",
      alt: "hexx emote",
      title: "hexx emote",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/hexaana close up grayscale (2022).webp",
      alt: "hexaana close up grayscale",
      title: "hexaana close up grayscale",
      category: "grayscale"
    },
    {
      src: "assets/images/artgallary/inner demon (2022).webp",
      alt: "inner demon",
      title: "inner demon",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/hexxana star dust witch (2022).webp",
      alt: "hexxana star dust witch",
      title: "hexxana star dust witch",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/enemy territory (2021).webp",
      alt: "enemy territory",
      title: "enemy territory",
      category: "landscape"
    },
    {
      src: "assets/images/artgallary/elishia cute emote.webp",
      alt: "elishia cute emote",
      title: "elishia cute emote",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/hexxana cute emote.webp",
      alt: "hexxana cute emote",
      title: "hexxana cute emote",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/ren cute emote.webp",
      alt: "ren cute emote",
      title: "ren cute emote",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/rayza cute emote.webp",
      alt: "rayza cute emote",
      title: "rayza cute emote",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/drakeon cute emote.webp",
      alt: "drakeon cute emote",
      title: "drakeon cute emote",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/arzhel cute emote.webp",
      alt: "arzhel cute emote",
      title: "arzhel cute emote",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/stelia cute emote.webp",
      alt: "stelia cute emote",
      title: "stelia cute emote",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/shelain cute emote.webp",
      alt: "shelain cute emote",
      title: "shelain cute emote",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/flora cute emote.webp",
      alt: "flora cute emote",
      title: "flora cute emote",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/H.R.E (2021).webp",
      alt: "H.R.E",
      title: "H.R.E",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/day off (2021).webp",
      alt: "day off",
      title: "day off",
      category: "landscape"
    },
    {
      src: "assets/images/artgallary/christmas theme (2020).webp",
      alt: "christmas theme",
      title: "christmas theme",
      category: "landscape"
    },
    {
      src: "assets/images/artgallary/RB9 cover (2020).webp",
      alt: "RB9 cover",
      title: "RB9 cover",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/elishia portrait (2020).webp",
      alt: "elishia portrait",
      title: "elishia portrait",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/hexxana portrait (2020).webp",
      alt: "hexxana portrait",
      title: "hexxana portrait",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/rayza portrait (2020).webp",
      alt: "rayza portrait",
      title: "rayza portrait",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/stellia portrait (2020).webp",
      alt: "stellia portrait",
      title: "stellia portrait",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/blessica portrait (2020).webp",
      alt: "blessica portrait",
      title: "blessica portrait",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/journey (2020).webp",
      alt: "journey",
      title: "journey",
      category: "landscape"
    },
    {
      src: "assets/images/artgallary/ruins (2020).webp",
      alt: "ruins",
      title: "ruins",
      category: "landscape"
    },
    {
      src: "assets/images/artgallary/elishia hexxana (2020).webp",
      alt: "elishia hexxana",
      title: "elishia hexxana",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/tekushiki portrait fanart (2020).webp",
      alt: "tekushiki portrait fanart",
      title: "tekushiki portrait fanart",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/duel (2020).webp",
      alt: "duel",
      title: "duel",
      category: "landscape"
    },
    {
      src: "assets/images/artgallary/hexxana tekushiki (2020).webp",
      alt: "hexxana tekushiki",
      title: "hexxana tekushiki",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/shelain (2020).webp",
      alt: "shelain",
      title: "shelain",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/hexxana full body (2020).webp",
      alt: "hexxana full body",
      title: "hexxana full body",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/rayza full body (2020).webp",
      alt: "rayza full body",
      title: "rayza full body",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/hexxana star dust witch (2020).webp",
      alt: "hexxana star dust witch",
      title: "hexxana star dust witch",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/first characters (2020).webp",
      alt: "first characters",
      title: "first characters",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/stelia full body (2020).webp",
      alt: "stelia full body",
      title: "stelia full body",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/humanoid (2019).webp",
      alt: "humanoid",
      title: "humanoid",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/hexxana star dust witch (2019).webp",
      alt: "hexxana star dust witch",
      title: "hexxana star dust witch",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/hexxana stardust witch (2019).webp",
      alt: "hexxana stardust witch",
      title: "hexxana stardust witch",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/fan art gate (2019).webp",
      alt: "fan art gate",
      title: "fan art gate",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/hexxana first digital portrait.webp",
      alt: "hexxana first digital portrait",
      title: "hexxana first digital portrait",
      category: "anime-style"
    },
  ];

  const gallery = document.getElementById('gallery');
  if (!gallery) return;

  // Render gallery
  const fragment = document.createDocumentFragment();
  images.forEach(image => {
    const link = document.createElement('a');
    link.href = image.src;
    link.dataset.lightbox = 'Art';
    link.dataset.title = image.title;
    link.dataset.category = image.category;
    link.addEventListener('contextmenu', e => e.preventDefault());

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.draggable = false;
    img.loading = 'lazy';

    link.appendChild(img);
    fragment.appendChild(link);
  });
  gallery.appendChild(fragment);

  // Event delegation for category filtering
  const categoryContainer = document.querySelector('.category-links');
  if (categoryContainer) {
    categoryContainer.addEventListener('click', (event) => {
      const link = event.target.closest('.category-link');
      if (!link) return;
      event.preventDefault();
      const category = link.dataset.category;
      filterImages(category);
    });
  } else {
    // fallback for direct .category-link elements
    document.querySelectorAll('.category-link').forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        filterImages(link.dataset.category);
      });
    });
  }

  function filterImages(category) {
    document.querySelectorAll('#gallery a').forEach(link => {
      link.style.display = (category === 'all' || link.dataset.category === category) ? '' : 'none';
    });
  }

  // Default to showing all images
  filterImages('all');
});

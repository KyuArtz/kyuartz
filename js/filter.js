document.addEventListener("DOMContentLoaded", () => {
  const images = [
    {
      src: "images/artgallary/Wasteland.jpg",
      title: "",
      category: "anime-style"
    },
    {
      src: "images/artgallary/Awakened_from_a_deep_slumber (2024).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Elishia_portrait (2023).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Liliana_portrait (2023).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Tekushiki (2023).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Feya_landscape (2023).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Feya_portrait (2023).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Elishia_chibi_grayscale (2023).jpg",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/Tragic_past_grayscale (2023).jpg",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/Former_falcon_squad (2023).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Old_rivals_grayscale (2023).jpg",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/Until_we_meet_again (2022).jpg",
      title: "",
      category: "anime-style"
    },
    {
      src: "images/artgallary/Elishia_portrait (2022).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Fall_into_despair (2022).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Wednesday_Fanart (2022).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Rebecca_portrait_fanart (2022).jpg",
      title: "",
      category: "anime-style"
    },
    {
      src: "images/artgallary/A_mothers_love_grayscale (2022).jpg",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/Fallen_angel (2022).jpg",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/Raging_blood_of_the_past (2022).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/The_return (2022).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Silent_killer (2022).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Hidden_truth (2022).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Mission_one (2022).jpg",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/R9 (2022).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Elishia_Summer_grayscale (2022).jpg",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/Bday_art (2022).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Elishia_padoru (2022).jpg",
      title: "",
      category: "anime-style"
    },
    {
      src: "images/artgallary/Teku_padoru (2022).jpg",
      title: "",
      category: "anime-style"
    },
    {
      src: "images/artgallary/Restricted_zone (2022).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Elishia_younger_self (2022).jpg",
      title: "",
      category: "anime-style"
    },
    {
      src: "images/artgallary/Childhood_bestfriend (2022).jpg",
      title: "",
      category: "anime-style"
    },
    {
      src: "images/artgallary/RB (2022).jpg",
      title: "",
      category: "anime-style"
    },
    {
      src: "images/artgallary/The_twin_dragon_blade (2022).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Ren_Rayza (2022).jpg",
      title: "",
      category: "anime-style"
    },
    {
      src: "images/artgallary/Hexxana_bust_up_graycale (2022).jpg",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/Hexx_emote.jpg",
      title: "",
      category: "anime-style"
    },
    {
      src: "images/artgallary/dark_legion_elite_grayscale (2022).jpg",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/Inner_demon (2022).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Hexxana_star_dust_witch (2022).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Enemy_territory (2021).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Elishia_cute_emote.jpg",
      title: "",
      category: "anime-style"
    },
    {
      src: "images/artgallary/Hexxana_cute_emote.jpg",
      title: "",
      category: "anime-style"
    },
    {
      src: "images/artgallary/Ren_cute_emote.jpg",
      title: "",
      category: "anime-style"
    },
    {
      src: "images/artgallary/Rayza_cute_emote.jpg",
      title: "",
      category: "anime-style"
    },
    {
      src: "images/artgallary/Drakion_cute_emote.jpg",
      title: "",
      category: "anime-style"
    },
    {
      src: "images/artgallary/Arzhel_cute_emote.jpg",
      title: "",
      category: "anime-style"
    },
    {
      src: "images/artgallary/Stelia_cute_emote.jpg",
      title: "",
      category: "anime-style"
    },
    {
      src: "images/artgallary/Shelain_cute_emote.jpg",
      title: "",
      category: "anime-style"
    },
    {
      src: "images/artgallary/Flora_cute_emote.jpg",
      title: "",
      category: "anime-style"
    },
    {
      src: "images/artgallary/H.R.E. (2021).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Day_off (2021).jpg",
      title: "",
      category: "anime-style"
    },
    {
      src: "images/artgallary/Christmas_theme (2020).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/RB9_cover (2020).jpg",
      title: "",
      category: "anime-style"
    },
    {
      src: "images/artgallary/Elishia_portrait (2020).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Hexxana_portrait (2020).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Rayza_portrait (2020).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Stellia_portrait (2020).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Blessica_portrait (2020).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Journey (2020).jpg",
      title: "",
      category: "all"
    },
    {
      src: "images/artgallary/Ruins (2020).jpg",
      title: "",
      category: "all"
    },
    {
      src: "images/artgallary/Elishia_Hexxana (2020).jpg",
      title: "",
      category: "anime-style"
    },
    {
      src: "images/artgallary/Tekushiki_portrait_fanart (2020).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Duel (2020).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Hexxana_tekushiki (2020).jpg",
      title: "",
      category: "anime-style"
    },
    {
      src: "images/artgallary/Shelain (2020).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Hexxana_full_body (2020).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Rayza_full_body (2020).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Hexxana_star_dust_witch (2020).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/First_characters (2020).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Stelia_full_body (2020).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/humanoid (2019).jpg",
      title: "",
      category: "anime-style"
    },
    {
      src: "images/artgallary/Hexxana_star_dust_witch (2019).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Hexxana_stardust_witch (2019).jpg",
      title: "",
      category: "semi-realism"
    },
    {
      src: "images/artgallary/Fan_art_gate (2019).jpg",
      title: "",
      category: "anime-style"
    },
    {
      src: "images/artgallary/Hexxana_first_digital_portrait.jpg",
      title: "",
      category: "anime-style"
    },
    
    // Add more images here
  ];

  const gallery = document.getElementById('gallery');

  images.forEach(image => {
    const link = document.createElement('a');
    link.href = image.src;
    link.setAttribute('data-lightbox', 'Art');
    link.setAttribute('data-title', image.title);
    link.setAttribute('data-category', image.category);
    link.oncontextmenu = () => false;

    const img = document.createElement('img');
    img.src = image.src;
    link.appendChild(img);

    gallery.appendChild(link);
  });

  document.querySelectorAll('.category-link').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const category = event.target.getAttribute('data-category');
      filterImages(category);
    });
  });

  function filterImages(category) {
    const links = document.querySelectorAll('#gallery a');
    links.forEach(link => {
      if (category === 'all' || link.getAttribute('data-category') === category) {
        link.style.display = '';
      } else {
        link.style.display = 'none';
      }
    });
  }

  // Default to showing all images
  filterImages('all');
});
document.addEventListener("DOMContentLoaded", () => {
  const images = [
    {
      src: "../assets/images/artgallary/Legend_of_the_crystalight (2024).webp",
      title: "",
      category: "landscape"
    },
    {
      src: "../assets/images/artgallary/Bday_Art(2024).webp",
      title: "",
      category: "anime-style"
    },
    {
      src: "../assets/images/artgallary/Elishia_avatar.webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Wasteland.webp",
      title: "",
      category: "landscape"
    },
    {
      src: "../assets/images/artgallary/Rayza_character_design.webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Undawn_character.webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Feya_bust_up.webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Elishia_full_body (grayscale).webp",
      title: "",
      category: "grayscale"
    },
    {
      src: "../assets/images/artgallary/Awakened_from_a_deep_slumber (2024).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Elishia_portrait (2023).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Liliana_portrait (2023).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Tekushiki (2023).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Feya_landscape (2023).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Feya_portrait (2023).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Elishia_chibi_grayscale (2023).webp",
      title: "",
      category: "grayscale"
    },
    {
      src: "../assets/images/artgallary/Tragic_past_grayscale (2023).webp",
      title: "",
      category: "grayscale"
    },
    {
      src: "../assets/images/artgallary/Former_falcon_squad (2023).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Old_rivals_grayscale (2023).webp",
      title: "",
      category: "grayscale"
    },
    {
      src: "../assets/images/artgallary/Until_we_meet_again (2022).webp",
      title: "",
      category: "anime-style"
    },
    {
      src: "../assets/images/artgallary/Elishia_portrait (2022).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Fall_into_despair (2022).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Wednesday_Fanart (2022).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Rebecca_portrait_fanart (2022).webp",
      title: "",
      category: "anime-style"
    },
    {
      src: "../assets/images/artgallary/A_mothers_love_grayscale (2022).webp",
      title: "",
      category: "grayscale"
    },
    {
      src: "../assets/images/artgallary/Fallen_angel (2022).webp",
      title: "",
      category: "grayscale"
    },
    {
      src: "../assets/images/artgallary/Raging_blood_of_the_past (2022).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/The_return (2022).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Silent_killer (2022).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Hidden_truth (2022).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Mission_one (2022).webp",
      title: "",
      category: "grayscale"
    },
    {
      src: "../assets/images/artgallary/R9 (2022).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Elishia_Summer_grayscale (2022).webp",
      title: "",
      category: "grayscale"
    },
    {
      src: "../assets/images/artgallary/Bday_art (2022).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Elishia_padoru (2022).webp",
      title: "",
      category: "anime-style"
    },
    {
      src: "../assets/images/artgallary/Teku_padoru (2022).webp",
      title: "",
      category: "anime-style"
    },
    {
      src: "../assets/images/artgallary/Restricted_zone (2022).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Elishia_younger_self (2022).webp",
      title: "",
      category: "anime-style"
    },
    {
      src: "../assets/images/artgallary/Childhood_bestfriend (2022).webp",
      title: "",
      category: "anime-style"
    },
    {
      src: "../assets/images/artgallary/RB (2022).webp",
      title: "",
      category: "anime-style"
    },
    {
      src: "../assets/images/artgallary/The_twin_dragon_blade (2022).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Ren_Rayza (2022).webp",
      title: "",
      category: "anime-style"
    },
    {
      src: "../assets/images/artgallary/Hexxana_bust_up_graycale (2022).webp",
      title: "",
      category: "grayscale"
    },
    {
      src: "../assets/images/artgallary/Hexx_emote.webp",
      title: "",
      category: "anime-style"
    },
    {
      src: "../assets/images/artgallary/dark_legion_elite_grayscale (2022).webp",
      title: "",
      category: "grayscale"
    },
    {
      src: "../assets/images/artgallary/Inner_demon (2022).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Hexxana_star_dust_witch (2022).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Enemy_territory (2021).webp",
      title: "",
      category: "landscape"
    },
    {
      src: "../assets/images/artgallary/Elishia_cute_emote.webp",
      title: "",
      category: "anime-style"
    },
    {
      src: "../assets/images/artgallary/Hexxana_cute_emote.webp",
      title: "",
      category: "anime-style"
    },
    {
      src: "../assets/images/artgallary/Ren_cute_emote.webp",
      title: "",
      category: "anime-style"
    },
    {
      src: "../assets/images/artgallary/Rayza_cute_emote.webp",
      title: "",
      category: "anime-style"
    },
    {
      src: "../assets/images/artgallary/Drakion_cute_emote.webp",
      title: "",
      category: "anime-style"
    },
    {
      src: "../assets/images/artgallary/Arzhel_cute_emote.webp",
      title: "",
      category: "anime-style"
    },
    {
      src: "../assets/images/artgallary/Stelia_cute_emote.webp",
      title: "",
      category: "anime-style"
    },
    {
      src: "../assets/images/artgallary/Shelain_cute_emote.webp",
      title: "",
      category: "anime-style"
    },
    {
      src: "../assets/images/artgallary/Flora_cute_emote.webp",
      title: "",
      category: "anime-style"
    },
    {
      src: "../assets/images/artgallary/H.R.E. (2021).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Day_off (2021).webp",
      title: "",
      category: "landscape"
    },
    {
      src: "../assets/images/artgallary/Christmas_theme (2020).webp",
      title: "",
      category: "landscape"
    },
    {
      src: "../assets/images/artgallary/RB9_cover (2020).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Elishia_portrait (2020).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Hexxana_portrait (2020).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Rayza_portrait (2020).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Stellia_portrait (2020).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Blessica_portrait (2020).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Journey (2020).webp",
      title: "",
      category: "landscape"
    },
    {
      src: "../assets/images/artgallary/Ruins (2020).webp",
      title: "",
      category: "landscape"
    },
    {
      src: "../assets/images/artgallary/Elishia_Hexxana (2020).webp",
      title: "",
      category: "anime-style"
    },
    {
      src: "../assets/images/artgallary/Tekushiki_portrait_fanart (2020).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Duel (2020).webp",
      title: "",
      category: "landscape"
    },
    {
      src: "../assets/images/artgallary/Hexxana_tekushiki (2020).webp",
      title: "",
      category: "anime-style"
    },
    {
      src: "../assets/images/artgallary/Shelain (2020).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Hexxana_full_body (2020).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Rayza_full_body (2020).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Hexxana_star_dust_witch (2020).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/First_characters (2020).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Stelia_full_body (2020).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/humanoid (2019).webp",
      title: "",
      category: "anime-style"
    },
    {
      src: "../assets/images/artgallary/Hexxana_star_dust_witch (2019).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Hexxana_stardust_witch (2019).webp",
      title: "",
      category: "semi-realism"
    },
    {
      src: "../assets/images/artgallary/Fan_art_gate (2019).webp",
      title: "",
      category: "anime-style"
    },
    {
      src: "../assets/images/artgallary/Hexxana_first_digital_portrait.webp",
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
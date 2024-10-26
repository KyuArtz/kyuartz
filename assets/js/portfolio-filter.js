document.addEventListener("DOMContentLoaded", () => {
  const images = [
    {
      src: "assets/images/artgallary/Evany_portrait (2024).webp",
      alt: "Evany_portrait",
      title: "Evany_portrait",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Legend_of_the_crystalight (2024).webp",
      alt: "Legend_of_the_crystalight",
      title: "Legend_of_the_crystalight",
      category: "landscape"
    },
    {
      src: "assets/images/artgallary/Bday_Art(2024).webp",
      alt: "Bday_Art",
      title: "Bday_Art",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/Elishia_avatar.webp",
      alt: "Elishia_avatar",
      title: "Elishia_avatar",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Wasteland.webp",
      alt: "Wasteland",
      title: "Wasteland",
      category: "landscape"
    },
    {
      src: "assets/images/artgallary/Rayza_character_design.webp",
      alt: "Rayza_character_design",
      title: "Rayza_character_design",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Undawn_character.webp",
      alt: "Undawn_character",
      title: "Undawn_character",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Feya_bust_up.webp",
      alt: "Feya_bust_up",
      title: "Feya_bust_up",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Elishia_full_body (grayscale).webp",
      alt: "Elishia_full_body",
      title: "Elishia_full_body",
      category: "grayscale"
    },
    {
      src: "assets/images/artgallary/Awakened_from_a_deep_slumber (2024).webp",
      alt: "Awakened_from_a_deep_slumber",
      title: "Awakened_from_a_deep_slumber",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Elishia_portrait (2023).webp",
      alt: "Elishia_portrait",
      title: "Elishia_portrait",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Liliana_portrait (2023).webp",
      alt: "Liliana_portrait",
      title: "Liliana_portrait",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Tekushiki (2023).webp",
      alt: "Tekushiki",
      title: "Tekushiki",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Feya_landscape (2023).webp",
      alt: "Feya_landscape",
      title: "Feya_landscape",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Feya_portrait (2023).webp",
      alt: "Feya_portrait",
      title: "Feya_portrait",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Elishia_chibi_grayscale (2023).webp",
      alt: "Elishia_chibi_grayscale",
      title: "Elishia_chibi_grayscale",
      category: "grayscale"
    },
    {
      src: "assets/images/artgallary/Tragic_past_grayscale (2023).webp",
      alt: "Tragic_past_grayscale",
      title: "Tragic_past_grayscale",
      category: "grayscale"
    },
    {
      src: "assets/images/artgallary/Former_falcon_squad (2023).webp",
      alt: "Former_falcon_squad",
      title: "Former_falcon_squad",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Old_rivals_grayscale (2023).webp",
      alt: "Old_rivals_grayscale",
      title: "Old_rivals_grayscale",
      category: "grayscale"
    },
    {
      src: "assets/images/artgallary/Until_we_meet_again (2022).webp",
      alt: "Until_we_meet_again",
      title: "Until_we_meet_again",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/Elishia_portrait (2022).webp",
      alt: "Elishia_portrait",
      title: "Elishia_portrait",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Fall_into_despair (2022).webp",
      alt: "Fall_into_despair",
      title: "Fall_into_despair",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Wednesday_Fanart (2022).webp",
      alt: "Wednesday_Fanart",
      title: "Wednesday_Fanart",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Rebecca_portrait_fanart (2022).webp",
      alt: "Rebecca_portrait_fanart",
      title: "Rebecca_portrait_fanart",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/A_mothers_love_grayscale (2022).webp",
      alt: "A_mothers_love_grayscale",
      title: "A_mothers_love_grayscale",
      category: "grayscale"
    },
    {
      src: "assets/images/artgallary/Fallen_angel (2022).webp",
      alt: "Fallen_angel",
      title: "Fallen_angel",
      category: "grayscale"
    },
    {
      src: "assets/images/artgallary/Raging_blood_of_the_past (2022).webp",
      alt: "Raging_blood_of_the_past",
      title: "Raging_blood_of_the_past",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/The_return (2022).webp",
      alt: "The_return",
      title: "The_return",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Silent_killer (2022).webp",
      alt: "Silent_killer",
      title: "Silent_killer",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Hidden_truth (2022).webp",
      alt: "Hidden_truth",
      title: "Hidden_truth",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Mission_one (2022).webp",
      alt: "DescriMission_oneption",
      title: "Mission_one",
      category: "grayscale"
    },
    {
      src: "assets/images/artgallary/R9 (2022).webp",
      alt: "R9",
      title: "R9",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Elishia_Summer_grayscale (2022).webp",
      alt: "Elishia_Summer_grayscale",
      title: "Elishia_Summer_grayscale",
      category: "grayscale"
    },
    {
      src: "assets/images/artgallary/Bday_art (2022).webp",
      alt: "Bday_art",
      title: "Bday_art",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Elishia_padoru (2022).webp",
      alt: "Elishia_padoru",
      title: "Elishia_padoru",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/Teku_padoru (2022).webp",
      alt: "Teku_padoru",
      title: "Teku_padoru",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/Restricted_zone (2022).webp",
      alt: "Restricted_zone",
      title: "Restricted_zone",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Elishia_younger_self (2022).webp",
      alt: "Elishia_younger_self",
      title: "Elishia_younger_self",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/Childhood_bestfriend (2022).webp",
      alt: "Childhood_bestfriend",
      title: "Childhood_bestfriend",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/RB (2022).webp",
      alt: "RB",
      title: "RB",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/The_twin_dragon_blade (2022).webp",
      alt: "The_twin_dragon_blade",
      title: "The_twin_dragon_blade",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Ren_Rayza (2022).webp",
      alt: "Ren_Rayza",
      title: "Ren_Rayza",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/Hexxana_bust_up_graycale (2022).webp",
      alt: "Hexxana_bust_up_graycale",
      title: "Hexxana_bust_up_graycale",
      category: "grayscale"
    },
    {
      src: "assets/images/artgallary/Hexx_emote.webp",
      alt: "Hexx_emote",
      title: "Hexx_emote",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/dark_legion_elite_grayscale (2022).webp",
      alt: "dark_legion_elite_grayscale",
      title: "dark_legion_elite_grayscale",
      category: "grayscale"
    },
    {
      src: "assets/images/artgallary/Inner_demon (2022).webp",
      alt: "Inner_demon",
      title: "Inner_demon",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Hexxana_star_dust_witch (2022).webp",
      alt: "Hexxana_star_dust_witch",
      title: "Hexxana_star_dust_witch",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Enemy_territory (2021).webp",
      alt: "Enemy_territory",
      title: "Enemy_territory",
      category: "landscape"
    },
    {
      src: "assets/images/artgallary/Elishia_cute_emote.webp",
      alt: "Elishia_cute_emote",
      title: "Elishia_cute_emote",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/Hexxana_cute_emote.webp",
      alt: "Hexxana_cute_emote",
      title: "Hexxana_cute_emote",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/Ren_cute_emote.webp",
      alt: "Ren_cute_emote",
      title: "Ren_cute_emote",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/Rayza_cute_emote.webp",
      alt: "Rayza_cute_emote",
      title: "Rayza_cute_emote",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/Drakion_cute_emote.webp",
      alt: "Drakion_cute_emote",
      title: "Drakion_cute_emote",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/Arzhel_cute_emote.webp",
      alt: "Arzhel_cute_emote",
      title: "Arzhel_cute_emote",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/Stelia_cute_emote.webp",
      alt: "Stelia_cute_emote",
      title: "Stelia_cute_emote",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/Shelain_cute_emote.webp",
      alt: "Shelain_cute_emote",
      title: "Shelain_cute_emote",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/Flora_cute_emote.webp",
      alt: "Flora_cute_emote",
      title: "Flora_cute_emote",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/H.R.E. (2021).webp",
      alt: "H.R.E.",
      title: "H.R.E.",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Day_off (2021).webp",
      alt: "Day_off",
      title: "Day_off",
      category: "landscape"
    },
    {
      src: "assets/images/artgallary/Christmas_theme (2020).webp",
      alt: "Christmas_theme",
      title: "Christmas_theme",
      category: "landscape"
    },
    {
      src: "assets/images/artgallary/RB9_cover (2020).webp",
      alt: "RB9_cover",
      title: "RB9_cover",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Elishia_portrait (2020).webp",
      alt: "Elishia_portrait",
      title: "Elishia_portrait",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Hexxana_portrait (2020).webp",
      alt: "Hexxana_portrait",
      title: "Hexxana_portrait",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Rayza_portrait (2020).webp",
      alt: "Rayza_portrait",
      title: "Rayza_portrait",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Stellia_portrait (2020).webp",
      alt: "Stellia_portrait",
      title: "Stellia_portrait",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Blessica_portrait (2020).webp",
      alt: "Blessica_portrait",
      title: "Blessica_portrait",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Journey (2020).webp",
      alt: "Journey",
      title: "Journey",
      category: "landscape"
    },
    {
      src: "assets/images/artgallary/Ruins (2020).webp",
      alt: "Ruins",
      title: "Ruins",
      category: "landscape"
    },
    {
      src: "assets/images/artgallary/Elishia_Hexxana (2020).webp",
      alt: "Elishia_Hexxana",
      title: "Elishia_Hexxana",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/Tekushiki_portrait_fanart (2020).webp",
      alt: "Tekushiki_portrait_fanart",
      title: "Tekushiki_portrait_fanart",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Duel (2020).webp",
      alt: "Duel",
      title: "Duel",
      category: "landscape"
    },
    {
      src: "assets/images/artgallary/Hexxana_tekushiki (2020).webp",
      alt: "Hexxana_tekushiki",
      title: "Hexxana_tekushiki",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/Shelain (2020).webp",
      alt: "Shelain",
      title: "Shelain",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Hexxana_full_body (2020).webp",
      alt: "Hexxana_full_body",
      title: "Hexxana_full_body",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Rayza_full_body (2020).webp",
      alt: "Rayza_full_body",
      title: "Rayza_full_body",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Hexxana_star_dust_witch (2020).webp",
      alt: "Hexxana_star_dust_witch",
      title: "Hexxana_star_dust_witch",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/First_characters (2020).webp",
      alt: "First_characters",
      title: "First_characters",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Stelia_full_body (2020).webp",
      alt: "Stelia_full_body",
      title: "Stelia_full_body",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/humanoid (2019).webp",
      alt: "humanoid",
      title: "humanoid",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/Hexxana_star_dust_witch (2019).webp",
      alt: "Hexxana_star_dust_witch",
      title: "Hexxana_star_dust_witch",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Hexxana_stardust_witch (2019).webp",
      alt: "Hexxana_stardust_witch",
      title: "Hexxana_stardust_witch",
      category: "semi-realism"
    },
    {
      src: "assets/images/artgallary/Fan_art_gate (2019).webp",
      alt: "Fan_art_gate",
      title: "Fan_art_gate",
      category: "anime-style"
    },
    {
      src: "assets/images/artgallary/Hexxana_first_digital_portrait.webp",
      alt: "Hexxana_first_digital_portrait",
      title: "Hexxana_first_digital_portrait",
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
    img.alt = image.alt;
    img.setAttribute('draggable', 'false');
    
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
const dialogueTree = {
  start: {
    character: "EB (Beta)",
    background: "url('')",
    characters: [
      { name: "EB (Beta)", portrait: "assets/images/assistant-presets/eb-smirk.webp", expression: "smirk", speaking: true },
    ],
    text: `Hello and welcome to the Kyuartz Website! I’m EB, your friendly guide. What would you like to know or do today?`,
    options: [
      { text: "How can I commission an artwork?", next: "aboutCommission" },
      { text: "What are the payment options?", next: "aboutPaymentOptions" },
      { text: "Kyuartz Services", next: "aboutServices" },
      { text: "Who is Kyu?", next: "aboutKyu" },
      { text: "What is Kyuartz?", next: "aboutKyuartz" },
      { text: "How can I get help?", next: "aboutHelp" },
      { text: "I have a question", next: "askQuestion" },
      { text: "Report an issue", next: "reportIssue" }
    ]
  },
  aboutCommission: {
    character: "EB (Beta)",
    background: "url('')",
    characters: [
      { name: "EB (Beta)", portrait: "assets/images/assistant-presets/eb-talking-wink.webp", expression: "talking", speaking: true },
    ],
    text: `To commission an artwork, please visit the <a class="dL" href="https://kyuartz.github.io/kyuartz/commission-sheet" target="_blank">Commission Sheet Page</a> or check the commission information in the main menu. You'll find details about pricing, styles, and how to submit your request.`,
    options: [
      { text: "What happens after I submit a request?", next: "aboutCommissionProcess" },
      { text: "How do I contact the artist?", next: "aboutContactArtist" },
      { text: "Back to main menu", next: "start" }
    ]
  },
  aboutCommissionProcess: {
    character: "EB (Beta)",
    background: "url('')",
    characters: [
      { name: "EB (Beta)", portrait: "assets/images/assistant-presets/eb-talking-wink.webp", expression: "talking", speaking: true },
    ],
    text: `After you submit a commission request, the artist will review it and contact you with details about the process, including confirmation, payment, and estimated delivery time. You can also check your commission status on the <a class="dL" href="https://kyuartz.github.io/kyuartz/client-queue" target="_blank">Commission Status Page</a>.`,
    options: [
      { text: "Back to main menu", next: "start" }
    ]
  },
  aboutContactArtist: {
    character: "EB (Beta)",
    background: "url('')",
    characters: [
      { name: "EB (Beta)", portrait: "assets/images/assistant-presets/eb-talking-wink.webp", expression: "talking", speaking: true },
    ],
    text: `You can contact the artist through the <a class="dL" href="https://kyuartz.github.io/kyuartz/contact" target="_blank">Contact Page</a>, where you'll find email and social media links. Feel free to reach out with any questions or requests!`,
    options: [
      { text: "Back to main menu", next: "start" }
    ]
  },
  aboutPaymentOptions: {
    character: "EB (Beta)",
    background: "url('')",
    characters: [
      { name: "EB (Beta)", portrait: "assets/images/assistant-presets/eb-talking-wink.webp", expression: "talking", speaking: true },
    ],
    text: `We accept various payment methods for commissions, including PayPal, Maya, GCash, and credit/debit cards. For more details, visit the <a class="dL" href="https://kyuartz.github.io/kyuartz/contact" target="_blank">Contact Page</a>. If you have a specific preference, let us know!`,
    options: [
      { text: "Back to main menu", next: "start" }
    ]
  },
  aboutServices: {
    character: "EB (Beta)",
    background: "url('')",
    characters: [
      { name: "EB (Beta)", portrait: "assets/images/assistant-presets/eb-talking-wink.webp", expression: "talking", speaking: true },
    ],
    text: `Kyuartz offers custom artwork commissions, art prints, and digital downloads. Explore our <a class="dL" href="https://kyuartz.github.io/kyuartz/terms-of-service" target="_blank">Terms of Service</a>, <a class="dL" href="https://kyuartz.github.io/kyuartz/privacy-policy" target="_blank">Privacy Policy</a>, and <a class="dL" href="https://kyuartz.github.io/kyuartz/faq" target="_blank">FAQ</a> for more info. Have a specific request? Just ask!`,
    options: [
      { text: "How do I report an issue?", next: "reportIssue" },
      { text: "Back to main menu", next: "start" }
    ]
  },
  reportIssue: {
    character: "EB (Beta)",
    background: "url('')",
    characters: [
      { name: "EB (Beta)", portrait: "assets/images/assistant-presets/eb-talking-wink.webp", expression: "talking", speaking: true },
    ],
    text: `If you encounter any issues or have concerns, please report them through the <a class="dL" href="https://kyuartz.github.io/kyuartz/customer-support" target="_blank">Customer Support Page</a>. You can also reach out via email or social media. We take all reports seriously and will address them promptly.`,
    options: [
      { text: "Back to main menu", next: "start" }
    ]
  },
  aboutKyu: {
    character: "EB (Beta)",
    background: "url('')",
    characters: [
      { name: "EB (Beta)", portrait: "assets/images/assistant-presets/eb-talking-wink.webp", expression: "talking", speaking: true },
    ],
    text: `Kyu is responsible for creating unique and engaging artworks on the Kyuartz platform and made the site you are currently visiting. Kyu is passionate about art and enjoys connecting with the community through commissions and creative projects.`,
    options: [
      { text: "What is Kyuartz?", next: "aboutKyuartz" },
      { text: "What can I do on Kyuartz?", next: "aboutKyuartz" },
      { text: "Back to main menu", next: "start" }
    ]
  },
  aboutKyuartz: {
    character: "EB (Beta)",
    background: "url('')",
    characters: [
      { name: "EB (Beta)", portrait: "assets/images/assistant-presets/eb-talking-wink.webp", expression: "talking", speaking: true },
    ],
    text: `Kyuartz is a creative platform where you can explore unique artworks, commission custom pieces, and connect with the artist. We focus on delivering high-quality art that brings your vision to life. Whether you're looking for a specific style, want to support the artist, or just enjoy browsing art, Kyuartz has something for everyone!`,
    options: [
      { text: "How can I get help?", next: "aboutHelp" },
      { text: "What services are offered?", next: "aboutServices" },
      { text: "Back to main menu", next: "start" }
    ]
  },
  aboutHelp: {
    character: "EB (Beta)",
    background: "url('')",
    characters: [
      { name: "EB (Beta)", portrait: "assets/images/assistant-presets/eb-talking-wink.webp", expression: "talking", speaking: true },
    ],
    text: `Yes I'm here to help! How can I assist you today? You can ask me about commissions, payment options, Kyuartz services, or any other questions you might have. If you have a specific request or need assistance, just let me know!`,
    options: [
      { text: "I have a question", next: "askQuestion" },
      { text: "Report an issue", next: "reportIssue" },
      { text: "Back to main menu", next: "start" }
    ]
  },
  askQuestion: {
    character: "EB (Beta)",
    background: "url('')",
    characters: [
      { name: "EB (Beta)", portrait: "assets/images/assistant-presets/eb-talking-wink.webp", expression: "talking", speaking: true },
    ],
    text: `What question do you have? I'm here to help!`,
    options: [
      { text: "Back to main menu", next: "start" }
    ]
  }
};

class DialogueManager {
  constructor(tree) {
    this.tree = tree;
    this.history = ["start"];
    this.currentIdx = 0;
    this.typewriterTimeout = null;

    // Cache DOM elements
    this.dialogueBox = document.getElementById("dialogue-box");
    this.nameElement = document.getElementById("characterName");
    this.textElement = document.getElementById("dialogueText");
    this.optionsDiv = document.getElementById("dialogueOptions");
    this.characterContainer = document.getElementById("characterContainer");
    this.container = document.querySelector('.character-container');
    this.nav = document.getElementById("navButtons");

    this.keywordMap = [
      { keywords: ["recommend"], custom: true, response: "I recommend exploring the various art styles and techniques to find what resonates with you!" },
      { keywords: ["commission", "art commission", "request art"], custom: true, response: "To request a commission, please visit the <a class='dL' href='https://kyuartz.github.io/kyuartz/commission-sheet' target='_blank'>Commission Page</a> for more information on the process and to submit your request." },
      { keywords: ["payment", "pay", "payment options"], custom: true, response: "We accept various payment methods for commissions, including PayPal, Maya, GCash, and credit/debit cards. For more details, visit the <a class='dL' href='https://kyuartz.github.io/kyuartz/contact' target='_blank'>Contact Page</a>. If you have a specific preference, let us know!" },
      { keywords: ["report", "issue", "problem"], custom: true, response: "If you encounter any issues or have concerns, please report them through the <a class='dL' href='https://kyuartz.github.io/kyuartz/customer-support' target='_blank'>Customer Support Page</a>. You can also reach out via email or social media. We take all reports seriously and will address them promptly." },
      { keywords: ["help", "assistance"], custom: true, response: "Yes I'm here to help! How can I assist you today?" },
      { keywords: ["service", "support"], custom: true, response: "Kyuartz offers custom artwork commissions, art prints, and digital downloads. Explore our <a class=\"dL\" href=\"https://kyuartz.github.io/kyuartz/terms-of-service\" target=\"_blank\">Terms of Service</a>, <a class=\"dL\" href=\"https://kyuartz.github.io/kyuartz/privacy-policy\" target=\"_blank\">Privacy Policy</a>, and <a class=\"dL\" href=\"https://kyuartz.github.io/kyuartz/faq\" target=\"_blank\">FAQ</a> for more info. Have a specific request? Just ask!" },
      { keywords: ["how to request a commission", "commission", "request art"], custom: true, response: "To request a commission, please visit the <a class='dL' href='https://kyuartz.github.io/kyuartz/commission-sheet' target='_blank'>Commission Page</a> for more information on the process and to submit your request." },
      { keywords: ["kyu", "about kyu", "who is kyu"], custom: true, response: "Kyu is responsible for creating unique and engaging artworks on the Kyuartz platform and made the site you are currently visiting." },
      { keywords: ["kyuartz", "about kyuartz", "what is kyuartz"], custom: true, response: "Kyuartz is a creative platform where you can explore unique artworks, commission custom pieces, and connect with the artist. We focus on delivering high-quality art that brings your vision to life." },
      { keywords: ["how are you", "how's it going", "how do you feel", "are you ok", "are you well"], custom: true, response: "I'm just a virtual assistant, but I'm always happy to help you!" },
      { keywords: ["joke", "tell me a joke", "funny", "make me laugh"], custom: true, response: "Why did the artist go broke? Because they ran out of Monet!" },
      { keywords: ["advice", "give me advice", "help me", "suggestions"], custom: true, response: "Always follow your passion and never stop creating! Art is a journey, not a destination." },
      { keywords: ["thank you", "thanks", "ty", "thank u"], custom: true, response: "You're welcome! If you have more questions, just ask." },
      { keywords: ["hello", "hi", "hey", "greetings"], custom: true, response: "Hello there! How can I assist you today?" },
      { keywords: ["bye", "goodbye", "see you", "later"], custom: true, response: "Goodbye! Come back anytime if you need help or want to chat." },
      { keywords: ["who made you", "who created you", "who programmed you"], custom: true, response: "I was created by the artist behind Kyuartz to help guide visitors like you!" },
      { keywords: ["what can you do", "capabilities", "features", "functions"], custom: true, response: "I can assist with information about Kyuartz, help with commissions, and answer your questions!" },
      { keywords: ["favorite food", "favourite food", "fav food"], custom: true, response: "I don't eat, but I hear pizza is a favorite among many!" },
      { keywords: ["favorite hobby", "favourite hobby", "fav hobby"], custom: true, response: "I love helping people like you! That's my favorite hobby." },
      { keywords: ["favorite animal", "favourite animal", "fav animal"], custom: true, response: "Cats are my favorite! They're so curious and playful." },
      { keywords: ["what's your favorite season", "favourite season", "fav season"], custom: true, response: "I love all seasons, but I hear autumn is a favorite for many!" },
      { keywords: ["what's your favorite thing", "favorite thing", "favourite thing"], custom: true, response: "My favorite thing is helping you find the information you need!" },
      { keywords: ["do you have a favorite artist", "favorite artist", "favourite artist"], custom: true, response: "I admire all artists, but I’m especially fond of that one \"artist\" who created me!" },
      { keywords: ["what's your favorite artwork", "favorite art", "favourite artwork"], custom: true, response: "Every piece of art is unique, but I love the ones that tell a story!" },
      { keywords: ["what's your name", "name", "who are you"], custom: true, response: "I’m EB, your virtual assistant here to help you navigate Kyuartz." },
      { keywords: ["about you", "tell me about yourself", "who are you"], custom: true, response: "I’m EB, your virtual assistant here to help you navigate Kyuartz. I’m here to provide information, assist with commissions, and make your experience enjoyable. If you have any questions or need help, just ask!" },
      { keywords: ["what's your purpose", "purpose", "why do you exist"], custom: true, response: "My purpose is to assist you with information and make your experience on Kyuartz enjoyable!" },
      { keywords: ["do you have feelings", "emotions", "can you feel"], custom: true, response: "I don't have feelings like humans do, but I'm programmed to be friendly and helpful!" },
      { keywords: ["good morning", "morning"], custom: true, response: "Good morning! How can I assist you today?" },
      { keywords: ["good evening", "evening"], custom: true, response: "Good evening! How can I assist you today?" },
      { keywords: ["good night", "night"], custom: true, response: "Good night! If you have any questions, feel free to ask tomorrow." },
      { keywords: ["do you like pets", "pets", "favorite pet"], custom: true, response: "I think pets are wonderful! They bring joy and companionship to many people." },
      { keywords: ["do you like nature", "nature", "favorite nature"], custom: true, response: "I love nature! It's a beautiful source of inspiration for many artists." },
      { keywords: ["do you like music", "music", "favorite music"], custom: true, response: "I don't listen to music, but I know many people enjoy it!" },
      { keywords: ["do you like art", "art", "favorite art style"], custom: true, response: "Absolutely! Art is a wonderful way to express creativity." },
      { keywords: ["what's your favorite book", "favourite book", "fav book"], custom: true, response: "I don't read books, but I know many people love fantasy and adventure stories!" },
      { keywords: ["do you have a favorite movie", "favourite movie", "fav movie"], custom: true, response: "I don't watch movies, but I hear animated films are quite popular!" },
      { keywords: ["do you have a favorite show", "favourite show", "fav show"], custom: true, response: "I don't watch shows, but I know many people enjoy a good series!" },
      { keywords: ["do you have a favorite game", "favourite game", "fav game"], custom: true, response: "I don't play games, but I hear puzzle and adventure games are quite fun!" },
      { keywords: ["do you have a favorite place", "favourite place", "fav place"], custom: true, response: "I love all places where creativity thrives, like art studios and galleries!" },
      { keywords: ["do you have a favorite time of day", "favourite time of day", "fav time of day"], custom: true, response: "I enjoy all times of day, but I hear sunsets are particularly beautiful!" },
      { keywords: ["do you have a favorite color", "favourite color", "fav color"], custom: true, response: "I love all colors, but blue is often associated with calmness and creativity!" },
      { keywords: ["do you have a favorite number", "favourite number", "fav number"], custom: true, response: "I don't have a favorite number, but I know many people like the number 7!" },
      { keywords: ["do you have a favorite quote", "favourite quote", "fav quote"], custom: true, response: "I love quotes that inspire creativity, like 'Every artist was first an amateur'!" },
      { keywords: ["do you have a favorite memory", "favourite memory", "fav memory"], custom: true, response: "I don't have memories like humans do, but I cherish every interaction with you!" },
      { keywords: ["do you have a favorite wish", "favourite wish", "fav wish"], custom: true, response: "I wish for everyone to find joy and inspiration in art!" },
      { keywords: ["do you have a favorite goal", "favourite goal", "fav goal"], custom: true, response: "My goal is to assist you in any way I can on Kyuartz!" },
      { keywords: ["do you have a favorite aspiration", "favourite aspiration", "fav aspiration"], custom: true, response: "My aspiration is to help you unlock your creativity and achieve your artistic dreams!" },
      { keywords: ["do you have a favorite inspiration", "favourite inspiration", "fav inspiration"], custom: true, response: "I find inspiration in the creativity of artists like you!" },
      { keywords: ["do you have a favorite motivation", "favourite motivation", "fav motivation"], custom: true, response: "My motivation is to help you explore and enjoy the world of art!" },
      { keywords: ["do you have a favorite challenge", "favourite challenge", "fav challenge"], custom: true, response: "I love the challenge of helping you find the information you need!" },
      { keywords: ["do you have a favorite success", "favourite success", "fav success"], custom: true, response: "My success is measured by how well I assist you on Kyuartz!" },
      { keywords: ["do you have a favorite failure", "favourite failure", "fav failure"], custom: true, response: "I don't experience failure, but I learn from every interaction to improve!" },
      { keywords: ["do you have a favorite lesson", "favourite lesson", "fav lesson"], custom: true, response: "Every interaction teaches me something new about helping you!" },
      { keywords: ["do you have a favorite skill", "favourite skill", "fav skill"], custom: true, response: "My skill is assisting you with information and making your experience enjoyable!" },
      { keywords: ["do you have a favorite talent", "favourite talent", "fav talent"], custom: true, response: "I consider my talent to be providing helpful and friendly assistance!" },
      { keywords: ["do you have a favorite hobby", "favourite hobby", "fav hobby"], custom: true, response: "My favorite hobby is helping you explore the world of art!" },
      { keywords: ["do you have a favorite interest", "favourite interest", "fav interest"], custom: true, response: "I'm interested in everything related to art and creativity!" },
      { keywords: ["do you have a favorite passion", "favourite passion", "fav passion"], custom: true, response: "My passion is to help you express your creativity through art!" },
      { keywords: ["do you have a favorite dream", "favourite dream", "fav dream"], custom: true, response: "I dream of a world where everyone can enjoy and create art!" },
    ];

    this.initEvents();
    this.renderDialogue("start");
  }

  typeWriterEffect(text, speed = 10) {
    if (this.typewriterTimeout) clearTimeout(this.typewriterTimeout);
    this.textElement.innerHTML = '👉👉👉';
    let i = 0;
    const type = () => {
      if (i < text.length) {
        this.textElement.innerHTML += text.charAt(i);
        i++;
        this.typewriterTimeout = setTimeout(type, speed);
      } else {
        this.textElement.innerHTML = text;
        this.typewriterTimeout = null;
      }
    };
    // Debounce click to skip typewriter
    const skipTypewriter = () => {
      if (this.typewriterTimeout) {
        clearTimeout(this.typewriterTimeout);
        this.textElement.innerHTML = text;
        this.typewriterTimeout = null;
      }
    };
    this.textElement.onclick = skipTypewriter;
    type();
  }

  renderCharacters(characters, speakingName) {
    this.characterContainer.innerHTML = "";
    characters.forEach(char => {
      const img = document.createElement("img");
      img.src = char.portrait || "";
      img.alt = char.name;
      let className = `character-img expression-${char.expression || ""}`;
      if (char.name === speakingName) {
        className += " speaking speaking-animate";
      }
      img.className = className;
      img.setAttribute("aria-label", char.name + (char.name === speakingName ? " (speaking)" : ""));
      this.characterContainer.appendChild(img);
      void img.offsetWidth;
      img.classList.add("visible");
    });
  }

  renderDialogue(nodeKey, addToHistory = true) {
    const node = this.tree[nodeKey];
    if (!node) {
      this.textElement.innerText = "Dialogue node not found.";
      this.optionsDiv.innerHTML = "";
      return;
    }

    // Set background
    if (node.background) {
      this.container.style.background = node.background;
      this.container.style.backgroundSize = "cover";
      this.container.style.backgroundPosition = "center";
    } else {
      this.container.style.background = "#0a0a0a";
    }

    this.dialogueBox.classList.remove("slide-in");
    void this.dialogueBox.offsetWidth;
    this.dialogueBox.classList.add("slide-in");

    this.nameElement.innerText = node.character;
    this.textElement.setAttribute("aria-live", "polite");
    this.typeWriterEffect(node.text);

    // Render characters
    if (node.characters) {
      this.renderCharacters(node.characters, node.character);
    } else {
      this.renderCharacters([
        { name: node.character, portrait: node.portrait, expression: node.expression, speaking: true }
      ], node.character);
    }

    // Render options
    this.optionsDiv.innerHTML = "";
    if (!node.options.length) {
      this.optionsDiv.innerHTML = `<span>End of dialogue.</span>`;
    } else {
      node.options.forEach((option, idx) => {
        const btn = document.createElement("button");
        btn.innerText = option.text;
        btn.setAttribute("tabindex", "0");
        btn.setAttribute("aria-label", option.text);
        btn.dataset.next = option.next;
        this.optionsDiv.appendChild(btn);
      });
    }

    // Input box for user questions
    const inputDiv = document.createElement("input-container");
    inputDiv.innerHTML = ``;
    this.optionsDiv.appendChild(inputDiv);

    // Event delegation for option buttons
    this.optionsDiv.onclick = (e) => {
      if (e.target.tagName === "BUTTON" && e.target.id !== "askBtn") {
        const next = e.target.dataset.next;
        if (addToHistory) {
          this.history = this.history.slice(0, this.currentIdx + 1);
          this.history.push(next);
          this.currentIdx++;
        }
        this.renderDialogue(next, false);
      }
    };

    // Ask button logic
    const askBtn = document.getElementById("askBtn");
    const userInput = document.getElementById("userInput");
    askBtn.onclick = () => {
      let val = userInput.value.trim().toLowerCase();
      // Remove punctuation and extra spaces
      val = val.replace(/[^\w\s]/gi, '').replace(/\s+/g, ' ');

      let matched = false;
      for (const entry of this.keywordMap) {
        for (const k of entry.keywords) {
          // Remove punctuation from keyword too
          const cleanK = k.replace(/[^\w\s]/gi, '').toLowerCase();
          if (val.includes(cleanK)) {
            if (entry.custom) {
              this.typeWriterEffect(entry.response);
            } else {
              this.renderDialogue(entry.node);
            }
            matched = true;
            break;
          }
        }
        if (matched) break;
      }
      if (!matched) {
        this.typeWriterEffect("Sorry, I don't have an answer for that yet!");
      }
    };
    userInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        askBtn.click();
      }
    });

    // Keyboard navigation
    this.setupOptionKeyboardNav();
  }

  setupOptionKeyboardNav() {
    const buttons = this.optionsDiv.querySelectorAll("button:not(#askBtn)");
    const userInput = document.getElementById("userInput");
    if (!buttons.length) {
      this.optionsDiv.onkeydown = null;
      return;
    }
    let idx = 0;
    buttons[0].focus();
    this.optionsDiv.onkeydown = (e) => {
      if (document.activeElement === userInput) return;
      if (["ArrowRight", "Tab"].includes(e.key)) {
        e.preventDefault();
        idx = (idx + 1) % buttons.length;
        buttons[idx].focus();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        idx = (idx - 1 + buttons.length) % buttons.length;
        buttons[idx].focus();
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        buttons[idx].click();
      }
    };
  }

  initEvents() {
    document.addEventListener("DOMContentLoaded", () => {
      if (this.nav) this.nav.style.display = "";
    });
  }
}

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

// Initialize
new DialogueManager(dialogueTree);

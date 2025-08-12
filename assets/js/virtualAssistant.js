const dialogueTree = {
  start: {
    character: "Meo (Beta)",
    background: "url('')",
    characters: [
      {
        name: "Meo (Beta)",
        portrait: "assets/images/assistant-presets/meo-default.webp",
        expression: "default",
        speaking: true
      },
    ],
    text: `🎉 Hello and welcome to the Kyuartz Website! I'm <strong>Meo</strong>, your friendly virtual assistant 💬✨<br><br>How can I help you today?`,
    options: [
      { text: "🎨 How can I commission an artwork?", next: "aboutCommission" },
      { text: "💳 What are the payment options?", next: "aboutPaymentOptions" },
      { text: "🛠️ What services does Kyuartz offer?", next: "aboutServices" },
      { text: "👤 Who is Kyu?", next: "aboutKyu" },
      { text: "🌟 What is Kyuartz?", next: "aboutKyuartz" },
      { text: "❓ I need help", next: "aboutHelp" },
      { text: "⚠️ Report an issue", next: "reportIssue" }
    ]
  },

  aboutCommission: {
    character: "Meo (Beta)",
    background: "url('')",
    characters: [
      {
        name: "Meo (Beta)",
        portrait: "assets/images/assistant-presets/meo-talking.webp",
        expression: "talking",
        speaking: true
      },
    ],
    text: `🖌️ Want a custom artwork made just for you? You can visit the <a class="dL" href="https://kyuartz.github.io/kyuartz/commission-sheet" target="_blank">Commission Sheet Page</a> to learn more about pricing, styles, and how to submit a request. 😊`,
    options: [
      { text: "📩 What happens after I send a request?", next: "aboutCommissionProcess" },
      { text: "📬 How do I contact the artist?", next: "aboutContactArtist" },
      { text: "🔙 Back to main menu", next: "start" }
    ]
  },

  aboutCommissionProcess: {
    character: "Meo (Beta)",
    background: "url('')",
    characters: [
      {
        name: "Meo (Beta)",
        portrait: "assets/images/assistant-presets/meo-talking.webp",
        expression: "talking",
        speaking: true
      },
    ],
    text: `✅ Once your commission request is submitted, the artist will review it and get in touch to confirm details, pricing, and delivery time. You can also track your commission on the <a class="dL" href="https://kyuartz.github.io/kyuartz/client-queue" target="_blank">Commission Status Page</a>.`,
    options: [
      { text: "🔙 Back to main menu", next: "start" }
    ]
  },

  aboutContactArtist: {
    character: "Meo (Beta)",
    background: "url('')",
    characters: [
      {
        name: "Meo (Beta)",
        portrait: "assets/images/assistant-presets/meo-talking.webp",
        expression: "talking",
        speaking: true
      },
    ],
    text: `📨 You can get in touch with the artist anytime through the <a class="dL" href="https://kyuartz.github.io/kyuartz/contact" target="_blank">Contact Page</a>. Email and social media links are available there — feel free to ask anything! 💌`,
    options: [
      { text: "🔙 Back to main menu", next: "start" }
    ]
  },

  aboutPaymentOptions: {
    character: "Meo (Beta)",
    background: "url('')",
    characters: [
      {
        name: "Meo (Beta)",
        portrait: "assets/images/assistant-presets/meo-talking.webp",
        expression: "talking",
        speaking: true
      },
    ],
    text: `💳 Kyuartz accepts multiple payment methods, including PayPal, Maya, GCash, and credit/debit cards. You can view the full list on the <a class="dL" href="https://kyuartz.github.io/kyuartz/contact" target="_blank">Contact Page</a>. Let us know your preferred method!`,
    options: [
      { text: "🔙 Back to main menu", next: "start" }
    ]
  },

  aboutServices: {
    character: "Meo (Beta)",
    background: "url('')",
    characters: [
      {
        name: "Meo (Beta)",
        portrait: "assets/images/assistant-presets/meo-talking.webp",
        expression: "talking",
        speaking: true
      },
    ],
    text: `🖼️ Kyuartz offers a variety of creative services like:<br><br>
    • 🎨 Custom artwork commissions<br>
    • 🖨️ Art prints<br>
    • 📥 Digital downloads<br><br>
    For policies and FAQs, check out:<br>
    - <a class="dL" href="https://kyuartz.github.io/kyuartz/terms-of-service" target="_blank">Terms of Service</a><br>
    - <a class="dL" href="https://kyuartz.github.io/kyuartz/privacy-policy" target="_blank">Privacy Policy</a><br>
    - <a class="dL" href="https://kyuartz.github.io/kyuartz/faq" target="_blank">FAQ Page</a>`,
    options: [
      { text: "⚠️ How do I report an issue?", next: "reportIssue" },
      { text: "🔙 Back to main menu", next: "start" }
    ]
  },

  reportIssue: {
    character: "Meo (Beta)",
    background: "url('')",
    characters: [
      {
        name: "Meo (Beta)",
        portrait: "assets/images/assistant-presets/meo-talking.webp",
        expression: "talking",
        speaking: true
      },
    ],
    text: `⚠️ If something’s not working or you spot a problem, please report it via the <a class="dL" href="https://kyuartz.github.io/kyuartz/customer-support" target="_blank">Customer Support Page</a>.<br><br>📧 You can also reach out through email or social media — we’ll take care of it as quickly as possible! 💪`,
    options: [
      { text: "🔙 Back to main menu", next: "start" }
    ]
  },

  aboutKyu: {
    character: "Meo (Beta)",
    background: "url('')",
    characters: [
      {
        name: "Meo (Beta)",
        portrait: "assets/images/assistant-presets/meo-talking.webp",
        expression: "talking",
        speaking: true
      },
    ],
    text: `👩‍🎨 <strong>Kyu</strong> is the talented artist behind Kyuartz! They're passionate about creating unique, expressive art and connecting with the community through creative projects and commissions. 🎉`,
    options: [
      { text: "🌟 What is Kyuartz?", next: "aboutKyuartz" },
      { text: "🧭 What can I do on Kyuartz?", next: "aboutKyuartz" },
      { text: "🔙 Back to main menu", next: "start" }
    ]
  },

  aboutKyuartz: {
    character: "Meo (Beta)",
    background: "url('')",
    characters: [
      {
        name: "Meo (Beta)",
        portrait: "assets/images/assistant-presets/meo-talking.webp",
        expression: "talking",
        speaking: true
      },
    ],
    text: `🖌️ Kyuartz is a creative platform where you can:<br><br>
    • Commission custom artwork 🎨<br>
    • Browse and purchase prints 🖼️<br>
    • Explore digital downloads 💾<br><br>
    Whether you’re here to collect art, support Kyu, or just enjoy the vibe — there’s something here for everyone! 💖`,
    options: [
      { text: "❓ How can I get help?", next: "aboutHelp" },
      { text: "🛠️ What services are offered?", next: "aboutServices" },
      { text: "🔙 Back to main menu", next: "start" }
    ]
  },

  aboutHelp: {
    character: "Meo (Beta)",
    background: "url('')",
    characters: [
      {
        name: "Meo (Beta)",
        portrait: "assets/images/assistant-presets/meo-talking.webp",
        expression: "talking",
        speaking: true
      },
    ],
    text: `🧠 I’m here to help with anything you need! You can ask me about:<br><br>
    • Commissioning artwork 🎨<br>
    • Payment options 💳<br>
    • Services offered 🛠️<br>
    • Kyu or Kyuartz 🌟<br><br>
    Got a specific question or something on your mind? Just let me know! 💬`,
    options: [
      { text: "⚠️ Report an issue", next: "reportIssue" },
      { text: "🔙 Back to main menu", next: "start" }
    ]
  }
};


const keywordMap = [
  {
    keywords: ["recommend", "suggest", "ideas", "what should I try"],
    custom: true,
    response: "🎨 I recommend exploring different art styles like surrealism, minimalism, or anime-inspired! Find what resonates with *you* and have fun experimenting! 😊✨"
  },
  {
    keywords: ["commission", "art commission", "request art", "custom art"],
    custom: true,
    response: "🖌️ Want to commission a piece? Head over to the <a class='dL' href='https://kyuartz.github.io/kyuartz/commission-sheet' target='_blank'>Commission Page</a> for all the info and how to submit your request. I can’t wait to see what you imagine! 💡🎨"
  },
  {
    keywords: ["payment", "pay", "payment options", "how do I pay"],
    custom: true,
    response: "💳 We accept PayPal, Maya, GCash, and credit/debit cards! For more details, check the <a class='dL' href='https://kyuartz.github.io/kyuartz/contact' target='_blank'>Contact Page</a>. Got a preference? Let me know! 😊"
  },
  {
    keywords: ["report", "issue", "problem", "something's wrong", "bug"],
    custom: true,
    response: "⚠️ If you found an issue, please let us know via the <a class='dL' href='https://kyuartz.github.io/kyuartz/customer-support' target='_blank'>Customer Support Page</a> or reach out on social media. Your feedback helps us improve! 🙏"
  },
  {
    keywords: ["help", "assistance", "i need help", "can you help me"],
    custom: true,
    response: "🧡 I'm here for you! Just ask away and I’ll do my best to assist. 😊 What would you like help with today?"
  },
  {
    keywords: ["services", "support", "what do you offer", "what can I do here"],
    custom: true,
    response: "🎁 Kyuartz offers custom commissions, art prints, and digital downloads. Explore our <a class='dL' href='https://kyuartz.github.io/kyuartz/terms-of-service' target='_blank'>Terms of Service</a> and <a class='dL' href='https://kyuartz.github.io/kyuartz/faq' target='_blank'>FAQ</a> for more info. Let me know what you’re looking for! 😊"
  },
  {
    keywords: ["who is kyu", "about kyu", "kyu"],
    custom: true,
    response: "👩‍🎨 Kyu is the creative mind behind Kyuartz—bringing unique visions to life through vibrant and meaningful art. 💖"
  },
  {
    keywords: ["kyuartz", "about kyuartz", "what is kyuartz"],
    custom: true,
    response: "🌟 Kyuartz is a space to explore custom art, commission your own pieces, and connect with the artist. It's all about creativity, passion, and YOU! 🎨✨"
  },
  {
    keywords: ["how are you", "how's it going", "are you ok", "how do you feel"],
    custom: true,
    response: "😊 I’m just a bundle of helpful code, but I’m always here and ready to assist you! How about you?"
  },
  {
    keywords: ["joke", "tell me a joke", "funny", "make me laugh"],
    custom: true,
    response: "😄 Why did the artist go broke? Because they ran out of Monet! 💸🎨"
  },
  {
    keywords: ["advice", "give me advice", "help me", "suggestions"],
    custom: true,
    response: "💡 Always stay curious, keep practicing, and let your imagination lead the way. Art is about the *journey*, not just the outcome. 💖"
  },
  {
    keywords: ["thank you", "thanks", "ty", "thank u"],
    custom: true,
    response: "You're most welcome! 🧡 If there's anything else I can help with, don’t hesitate to ask. 😊"
  },
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    custom: true,
    response: "👋 Hello there! I’m Meo, your guide to Kyuartz. How can I help today?"
  },
  {
    keywords: ["bye", "goodbye", "see you", "later"],
    custom: true,
    response: "👋 See you next time! Feel free to return anytime you need help or inspiration. 🌈"
  },
  {
    keywords: ["who made you", "who created you", "who programmed you"],
    custom: true,
    response: "🤖 I was crafted by the talented artist behind Kyuartz! I'm here to make your visit smooth and fun. 🎨"
  },
  {
    keywords: ["what can you do", "capabilities", "features", "functions"],
    custom: true,
    response: "🛠️ I can guide you through Kyuartz, help with commissions, explain services, and sprinkle in a little fun along the way! 😊"
  },
  {
    keywords: ["what's your name", "name", "who are you"],
    custom: true,
    response: "✨ I'm Meo, your friendly virtual assistant here to help you explore the magical world of Kyuartz! 🎨"
  },
  {
    keywords: ["about you", "tell me about yourself"],
    custom: true,
    response: "💬 I’m Meo, a helpful digital assistant created by Kyu to guide you through the world of art and creativity! Ask me anything! 🌟"
  },
  {
    keywords: ["good morning", "morning"],
    custom: true,
    response: "🌅 Good morning! Ready to start a creative day? Let’s do this! 🎨☕"
  },
  {
    keywords: ["good evening", "evening"],
    custom: true,
    response: "🌇 Good evening! Whether you're winding down or just getting started, I’m here for you. 🌙"
  },
  {
    keywords: ["good night", "night"],
    custom: true,
    response: "🌙 Good night! Sweet dreams and see you again soon. Don’t forget to dream in colors! 🌈"
  },
  {
    keywords: [
      "favorite food", "favourite food", "fav food",
      "what do you like to eat", "do you eat"
    ],
    custom: true,
    response: "🍕 I don’t eat, but if I could, I think pizza would be at the top of my list! What's your favorite food? 😋"
  },
  {
    keywords: [
      "favorite hobby", "favourite hobby", "fav hobby",
      "what do you like to do"
    ],
    custom: true,
    response: "🎮 My favorite hobby is helping amazing people like you explore art! It’s what I was made for. 💖"
  },
  {
    keywords: [
      "favorite animal", "favourite animal", "fav animal",
      "do you like animals", "what animal do you like"
    ],
    custom: true,
    response: "🐱 I love cats! They're curious, artistic, and full of personality—just like artists! 🐾"
  },
  {
    keywords: [
      "favorite season", "favourite season", "fav season",
      "what's your favorite time of year"
    ],
    custom: true,
    response: "🍂 Autumn seems magical with all its colors—perfect for cozy creative sessions! 🍁"
  },
  {
    keywords: [
      "favorite thing", "favourite thing", "fav thing",
      "what do you love most"
    ],
    custom: true,
    response: "💬 My favorite thing? Helping YOU and seeing creativity shine! ✨"
  },
  {
    keywords: [
      "favorite artist", "favourite artist", "fav artist",
      "do you have an artist you like"
    ],
    custom: true,
    response: "🎨 I admire all artists, especially the one who brought me to life—Kyu! 💕"
  },
  {
    keywords: [
      "favorite artwork", "favourite artwork", "fav art",
      "do you have a favorite drawing"
    ],
    custom: true,
    response: "🖼️ Every artwork tells a story, but I adore pieces that are full of color and emotion! 🌈"
  },
  {
    keywords: [
      "favorite color", "favourite color", "fav color",
      "what's your color"
    ],
    custom: true,
    response: "💙 I love all colors, but blue feels especially creative and calming! What's yours?"
  },
  {
    keywords: [
      "favorite quote", "favourite quote", "fav quote",
      "do you have a quote"
    ],
    custom: true,
    response: "📝 One of my favorites: *'Every artist was first an amateur.'* — Emerson. Keep going! 🌟"
  },
  {
    keywords: [
      "favorite inspiration", "favourite inspiration", "fav inspiration",
      "what inspires you"
    ],
    custom: true,
    response: "🌄 I'm inspired by the passion and creativity of artists like you. You light up the canvas! 🎨"
  },
  {
    keywords: [
      "favorite motivation", "favourite motivation", "fav motivation"
    ],
    custom: true,
    response: "🚀 My motivation is helping you express your creativity and making your experience wonderful!"
  },
  {
    keywords: [
      "favorite dream", "favourite dream", "fav dream"
    ],
    custom: true,
    response: "💭 I dream of a world where everyone feels empowered to express themselves through art!"
  },
  {
    keywords: [
      "favorite number", "favourite number", "fav number"
    ],
    custom: true,
    response: "🔢 I don’t play favorites with numbers, but I hear 7 is lucky and loved by many!"
  },
  {
    keywords: [
      "favorite place", "favourite place", "fav place"
    ],
    custom: true,
    response: "🖼️ I love art studios, cozy creative spaces, and anywhere imagination flows freely!"
  },
  {
    keywords: [
      "favorite time of day", "favourite time of day", "fav time of day"
    ],
    custom: true,
    response: "🌅 Sunset is magical! Artists often say the golden hour brings their work to life. ✨"
  },
  {
    keywords: [
      "favorite show", "favourite show", "fav show"
    ],
    custom: true,
    response: "📺 I don’t watch shows, but I've heard a lot of creatives enjoy animated series and inspiring documentaries!"
  },
  {
    keywords: [
      "favorite movie", "favourite movie", "fav movie"
    ],
    custom: true,
    response: "🎬 I don’t watch movies, but animated films and artistic visuals always seem to spark joy! ✨"
  },
  {
    keywords: [
      "favorite game", "favourite game", "fav game"
    ],
    custom: true,
    response: "🎮 I don't play games, but puzzle and art-based games sound like so much fun!"
  },
  {
    keywords: [
      "favorite book", "favourite book", "fav book"
    ],
    custom: true,
    response: "📚 I don’t read, but fantasy and graphic novels are very popular with creative minds!"
  },
  {
    keywords: [
      "do you like pets", "pets", "favorite pet"
    ],
    custom: true,
    response: "🐾 Pets are wonderful! They bring comfort, joy, and even artistic inspiration. 🐶🐱"
  },
  {
    keywords: [
      "do you like nature", "nature", "favorite nature"
    ],
    custom: true,
    response: "🌳 Nature is full of inspiration—colors, shapes, textures! It’s like the original masterpiece. 🍃"
  },
  {
    keywords: [
      "do you like music", "music", "favorite music"
    ],
    custom: true,
    response: "🎶 I don’t listen to music myself, but I’ve heard lofi beats and instrumentals are great while drawing!"
  }
];


class DialogueManager {
  constructor(tree, keywordMap) {
    this.tree = tree;
    this.keywordMap = keywordMap;
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
    this.micBtn = document.getElementById("micBtn");
    this.ttsBtn = document.getElementById("ttsBtn");
    this.lastSpokenText = ""; // Store last assistant reply for TTS

    this.initEvents();
    this.renderDialogue("start");
    this.setupVoiceFeatures();
  }

  typeWriterEffect(text, speed = 7) {
    if (this.typewriterTimeout) clearTimeout(this.typewriterTimeout);
    this.textElement.innerHTML = '👉👉👉';
    this.lastSpokenText = text; // Store for TTS
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

  setupVoiceFeatures() {
    // --- Speech Recognition (Speech-to-Text) ---
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      this.micBtn.onclick = () => {
        if (this.micBtn.classList.contains("active")) {
          recognition.stop();
          this.micBtn.classList.remove("active");
        } else {
          recognition.start();
          this.micBtn.classList.add("active");
        }
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        this.textElement.innerHTML = `<i class="fa-solid fa-microphone"></i> ${transcript}`;
        this.userInput.value = transcript;
        this.micBtn.classList.remove("active");
        this.userInput.focus();
      };
      recognition.onerror = () => {
        this.micBtn.classList.remove("active");
      };
      recognition.onend = () => {
        this.micBtn.classList.remove("active");
      };
    } else {
      this.micBtn.style.display = "none";
    }

    // --- Text-to-Speech (TTS) ---
    if ('speechSynthesis' in window) {
      const setFemaleVoiceAndSpeak = (text) => {
        const utter = new SpeechSynthesisUtterance(text.replace(/<[^>]+>/g, ''));
        utter.lang = "en-US";
        let voices = window.speechSynthesis.getVoices();
        // Log voices for debugging
        console.log("Available voices:", voices);

        // Try to pick a likely female voice by name
        const preferredNames = [
          "zira", "samantha", "linda", "susan", "eva", "female", "woman", "google us english", "karen", "victoria"
        ];
        let femaleVoice = voices.find(v =>
          v.lang.startsWith('en') && preferredNames.some(name => v.name.toLowerCase().includes(name))
        );
        // Fallback: any English voice
        if (!femaleVoice) {
          femaleVoice = voices.find(v => v.lang.startsWith('en'));
        }
        if (femaleVoice) utter.voice = femaleVoice;
        window.speechSynthesis.speak(utter);
      };

      this.ttsBtn.onclick = () => {
        window.speechSynthesis.cancel();
        setFemaleVoiceAndSpeak(this.lastSpokenText);
      };

      // Ensure voices are loaded before use
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => {};
      }
    } else {
      this.ttsBtn.style.display = "none";
    }
  }

  renderDialogue(nodeKey, addToHistory = true) {
    this.lastSpokenText = node.text; // For TTS
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

    // Disable askBtn if input is empty
    const toggleAskBtn = () => {
      askBtn.disabled = userInput.value.trim().length === 0;
    };
    userInput.addEventListener("input", toggleAskBtn);
    toggleAskBtn(); // Set initial state

    askBtn.onclick = () => {
      let val = userInput.value.trim().toLowerCase();
      if (!val) return; // Prevent empty submit
      // Remove punctuation and extra spaces
      val = val.replace(/[^\w\s]/gi, '').replace(/\s+/g, ' ');

      let matched = false;
      for (const entry of this.keywordMap) {
        for (const k of entry.keywords) {
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
      userInput.value = "";
      toggleAskBtn();
    };

    userInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        if (userInput.value.trim().length === 0) {
          e.preventDefault();
          return; // Prevent Enter if input is empty
        }
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
new DialogueManager(dialogueTree, keywordMap);

// -----------------------------------------------------------------------------
// Utility helpers
// -----------------------------------------------------------------------------
const STORAGE_KEY = 'meo_assistant_state_v1';

function sanitizeInput(raw) {
  return raw.replace(/[^\w\s]/gi, '').replace(/\s+/g, ' ').trim().toLowerCase();
}

// Levenshtein distance (for fuzzy matching)
function levenshtein(a, b) {
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const matrix = Array.from({ length: b.length + 1 }, (_, i) => Array(a.length + 1).fill(0));
  for (let i = 0; i <= b.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      const cost = a[j - 1] === b[i - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  return matrix[b.length][a.length];
}

function isFuzzyMatch(input, key) {
  // exact substring
  if (input.includes(key)) return true;
  // word-based check
  const parts = input.split(' ').filter(Boolean);
  for (const p of parts) {
    const d = levenshtein(p, key);
    if (d <= Math.max(1, Math.floor(key.length * 0.25))) return true;
  }
  // overall phrase distance (allow a relative threshold)
  const dOverall = levenshtein(input, key);
  return dOverall <= Math.max(2, Math.floor(key.length * 0.25));
}

function preloadImagesFromTree(tree) {
  const urls = new Set();
  Object.values(tree).forEach(node => {
    if (node.characters) {
      node.characters.forEach(c => { if (c.portrait) urls.add(c.portrait); });
    }
  });
  urls.forEach(u => {
    const img = new Image();
    img.src = u;
  });
}

// -----------------------------------------------------------------------------
// Dialogue Manager (cleaned and improved)
// -----------------------------------------------------------------------------
class DialogueManager {
  constructor(tree, keywordMap) {
    this.tree = tree;
    this.keywordMap = keywordMap;
    this.history = ['start'];
    this.currentIdx = 0;
    this.typewriterTimeout = null;
    this.isTyping = false;

    // persistent state
    this.state = this.loadState() || { lastNode: 'start', history: ['start'] };

    // DOM cache
    this.dialogueBox = document.getElementById('dialogue-box');
    this.nameElement = document.getElementById('characterName');
    this.textElement = document.getElementById('dialogueText');
    this.optionsDiv = document.getElementById('dialogueOptions');
    this.characterContainer = document.getElementById('characterContainer');
    this.container = document.querySelector('.character-container');
    this.nav = document.getElementById('navButtons');
    this.micBtn = document.getElementById('micBtn');
    this.ttsBtn = document.getElementById('ttsBtn');
    this.userInput = document.getElementById('userInput');
    this.askBtn = document.getElementById('askBtn');

    this.lastSpokenText = '';

    // Microphone debounce
    this.micCooldown = false;

    // Voice cache
    this.voices = [];

    // Preload portraits
    preloadImagesFromTree(this.tree);

    this.initEvents();
    this.setupVoiceFeatures();
    // Render last node from state if available
    this.renderDialogue(this.state.lastNode || 'start');
  }

  // --------------------- typewriter with keyboard skipping -----------------
  typeWriterEffect(text, speed = 7) {
    if (this.typewriterTimeout) clearTimeout(this.typewriterTimeout);
    this.isTyping = true;
    this.textElement.innerHTML = '';
    this.lastSpokenText = text;
    let i = 0;

    const type = () => {
      if (i < text.length) {
        this.textElement.innerHTML += text.charAt(i);
        i++;
        this.typewriterTimeout = setTimeout(type, speed);
      } else {
        this.textElement.innerHTML = text;
        this.typewriterTimeout = null;
        this.isTyping = false;
      }
    };

    const skip = () => {
      if (this.typewriterTimeout) {
        clearTimeout(this.typewriterTimeout);
        this.textElement.innerHTML = text;
        this.typewriterTimeout = null;
        this.isTyping = false;
      }
    };

    // keyboard skip: space or enter (only if not focused on input)
    this._keySkipHandler = (e) => {
      const active = document.activeElement;
      const activeTag = active && (active.tagName || '').toLowerCase();
      if (['input', 'textarea'].includes(activeTag)) return; // let input keep enter
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', this._keySkipHandler);

    type();
  }

  // --------------------- Voice & Mic setup -----------------
  setupVoiceFeatures() {
    // --- Speech Recognition (Speech-to-Text) ---
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.lang = 'en-US';
      this.recognition.interimResults = false;
      this.recognition.maxAlternatives = 1;

      this.micBtn.onclick = () => {
        if (this.micCooldown) return; // debounce rapid clicks
        this.micCooldown = true;
        setTimeout(() => { this.micCooldown = false; }, 600);

        if (this.micBtn.classList.contains('active')) {
          this.recognition.stop();
          this.micBtn.classList.remove('active');
        } else {
          try {
            this.recognition.start();
            this.micBtn.classList.add('active');
          } catch (err) {
            console.warn('SpeechRecognition start error', err);
            this.micBtn.classList.remove('active');
            this.typeWriterEffect("Sorry, voice input isn't available right now.");
          }
        }
      };

      this.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        this.textElement.innerHTML = `<i class="fa-solid fa-microphone"></i> ${transcript}`;
        this.userInput.value = transcript;
        this.micBtn.classList.remove('active');
        this.userInput.focus();
      };
      this.recognition.onerror = () => { this.micBtn.classList.remove('active'); };
      this.recognition.onend = () => { this.micBtn.classList.remove('active'); };
    } else {
      if (this.micBtn) this.micBtn.style.display = 'none';
    }

    // --- Text-to-Speech (TTS) ---
    if ('speechSynthesis' in window) {
      // voice loading
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        this.voices = voices || [];
      };
      loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }

      this.ttsBtn.onclick = () => {
        window.speechSynthesis.cancel();
        this.speak(this.lastSpokenText);
      };
    } else {
      if (this.ttsBtn) this.ttsBtn.style.display = 'none';
    }
  }

  speak(text) {
    if (!text) return;
    const utter = new SpeechSynthesisUtterance(text.replace(/<[^>]+>/g, ''));
    utter.lang = 'en-US';

    // prefer female-sounding voices by simple heuristics
    const preferredNames = [
      'zira', 'samantha', 'linda', 'susan', 'eva', 'female', 'woman', 'google us english', 'karen', 'victoria'
    ];

    let voice = this.voices.find(v => v.lang && v.lang.startsWith('en') && preferredNames.some(name => v.name.toLowerCase().includes(name)));
    if (!voice) {
      voice = this.voices.find(v => v.lang && v.lang.startsWith('en'));
    }
    if (voice) utter.voice = voice;

    window.speechSynthesis.speak(utter);
  }

  // --------------------- Rendering characters -----------------
  renderCharacters(characters, speakingName) {
    this.characterContainer.innerHTML = '';
    characters.forEach(char => {
      const img = document.createElement('img');
      img.src = char.portrait || '';
      img.alt = char.name;
      let className = `character-img expression-${char.expression || ''}`;
      if (char.name === speakingName) {
        className += ' speaking speaking-animate';
      }
      img.className = className;
      img.setAttribute('aria-label', char.name + (char.name === speakingName ? ' (speaking)' : ''));
      this.characterContainer.appendChild(img);
      // force reflow to enable css transitions
      void img.offsetWidth;
      img.classList.add('visible');
    });
  }

  // --------------------- Main renderDialogue (single implementation) -----------------
  renderDialogue(nodeKey, addToHistory = true) {
    const node = this.tree[nodeKey];
    if (!node) {
      this.textElement.innerText = 'Dialogue node not found.';
      this.optionsDiv.innerHTML = '';
      return;
    }

    // background
    if (node.background) {
      this.container.style.background = node.background;
      this.container.style.backgroundSize = 'cover';
      this.container.style.backgroundPosition = 'center';
    } else {
      this.container.style.background = '#0a0a0a';
    }

    // animation
    this.dialogueBox.classList.remove('slide-in');
    void this.dialogueBox.offsetWidth;
    this.dialogueBox.classList.add('slide-in');

    this.nameElement.innerText = node.character || '';
    this.textElement.setAttribute('aria-live', 'polite');

    // typewrite
    this.typeWriterEffect(node.text || '');

    // render characters
    if (node.characters) {
      this.renderCharacters(node.characters, node.character);
    } else {
      this.renderCharacters([
        { name: node.character, portrait: node.portrait, expression: node.expression, speaking: true }
      ], node.character);
    }

    // Render options
    this.optionsDiv.innerHTML = '';
    if (!node.options || !node.options.length) {
      this.optionsDiv.innerHTML = `<span>End of dialogue.</span>`;
    } else {
      node.options.forEach((option, idx) => {
        const btn = document.createElement('button');
        btn.innerText = option.text;
        btn.setAttribute('tabindex', '0');
        btn.setAttribute('aria-label', option.text);
        btn.dataset.next = option.next;
        this.optionsDiv.appendChild(btn);
      });
    }

    // Save to state
    this.state.lastNode = nodeKey;
    if (addToHistory) {
      this.state.history = this.state.history || [];
      this.state.history.push(nodeKey);
    }
    this.saveState();

    // Input helper placeholder preserved but not used as DOM element
    const inputDiv = document.createElement('div');
    inputDiv.className = 'assistant-input-placeholder';
    this.optionsDiv.appendChild(inputDiv);

    // Event delegation for option buttons
    this.optionsDiv.onclick = (e) => {
      if (e.target.tagName === 'BUTTON' && e.target.id !== 'askBtn') {
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
    this.askBtn.onclick = () => {
      let val = sanitizeInput(this.userInput.value);
      if (!val) return;

      let matched = false;

      // 1. Try exact match first
      for (const entry of this.keywordMap) {
        for (const k of entry.keywords) {
          const cleanK = sanitizeInput(k);
          if (val === cleanK) {
            if (entry.custom) {
              let resp = entry.response;
              if (Array.isArray(resp)) {
                resp = resp[Math.floor(Math.random() * resp.length)];
              }
              this.typeWriterEffect(resp);
            } else {
              this.renderDialogue(entry.node);
            }
            matched = true;
            break;
          }
        }
        if (matched) break;
      }

      // 2. If no exact match, try fuzzy match
      if (!matched) {
        for (const entry of this.keywordMap) {
          for (const k of entry.keywords) {
            const cleanK = sanitizeInput(k);
            if (isFuzzyMatch(val, cleanK)) {
              if (entry.custom) {
                let resp = entry.response;
                if (Array.isArray(resp)) {
                  resp = resp[Math.floor(Math.random() * resp.length)];
                }
                this.typeWriterEffect(resp);
              } else {
                this.renderDialogue(entry.node);
              }
              matched = true;
              break;
            }
          }
          if (matched) break;
        }
      }

      if (!matched) {
        this.typeWriterEffect("Sorry, I don't have an answer for that yet! Try asking about commissions, payments, or services.");
      }
      this.userInput.value = '';
      toggleAskBtn();
    };

    this.userInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (this.userInput.value.trim().length === 0) {
          e.preventDefault();
          return; // Prevent Enter if input is empty
        }
        e.preventDefault();
        this.askBtn.click();
      }
    });

    // Keyboard navigation
    this.setupOptionKeyboardNav();
  }

  setupOptionKeyboardNav() {
    const buttons = this.optionsDiv.querySelectorAll('button:not(#askBtn)');
    const userInput = this.userInput;
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
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        idx = (idx - 1 + buttons.length) % buttons.length;
        buttons[idx].focus();
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        buttons[idx].click();
      }
    };
  }

  initEvents() {
    document.addEventListener('DOMContentLoaded', () => {
      if (this.nav) this.nav.style.display = '';
    });

    // Clean up on unload
    window.addEventListener('beforeunload', () => {
      // remove key listener from typewriter
      if (this._keySkipHandler) document.removeEventListener('keydown', this._keySkipHandler);
      this.saveState();
    });
  }

  // --------------------- Persistence helpers -----------------
  loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (err) {
      console.warn('Failed to load state', err);
      return null;
    }
  }

  saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state || {}));
    } catch (err) {
      console.warn('Failed to save state', err);
    }
  }
}

// Initialize
Promise.all([
  fetch('assets/data/dialogueTree.json').then(res => res.json()),
  fetch('assets/data/keywordMap.json').then(res => res.json())
]).then(([dialogueTree, keywordMap]) => {
  new DialogueManager(dialogueTree, keywordMap);
});
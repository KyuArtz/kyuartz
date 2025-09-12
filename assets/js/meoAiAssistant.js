class MeoAssistant {
  constructor() {
    this.chatMessages = document.getElementById('chatMessages');
    this.userInput = document.getElementById('userInput');
    this.sendBtn = document.getElementById('sendBtn');
    this.voiceBtn = document.getElementById('voiceBtn');
    this.emojiBtn = document.getElementById('emojiBtn');
    this.emojiPicker = document.getElementById('emojiPicker');
    this.characterStatus = document.getElementById('characterStatus');
    this.characterAvatar = document.getElementById('characterAvatar');
    this.suggestions = document.getElementById('suggestions');

    if (!this.chatMessages || !this.userInput) {
      console.warn('Essential chat elements missing');
      return;
    }

    this.isTyping = false;
    this.recognition = null;
    this.synthesis = window.speechSynthesis;
    this.conversationHistory = [];
    this.lastActivity = Date.now();

    this.responses = {};
    this.loadResponses(); // async loader

    this.initializeAssistant();
    this.setupEventListeners();
    this.setupSpeechRecognition();
    this.startActivityMonitoring();
  }

  initializeAssistant() {
    this.chatMessages.setAttribute('aria-live', 'polite');
    this.updateCharacterMood('happy');
    this.addSuggestionListeners();
    this.loadHistory();
    this.showNotification('Welcome to KyuArtz! Meo is ready to assist you.', 3000);
  }

  setupEventListeners() {
    this.sendBtn?.addEventListener('click', () => this.handleUserInput());

    this.userInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.handleUserInput();
      }
    });

    this.userInput.addEventListener('input', () => {
      this.updateSendButton();
      this.updateActivity();
    });

    this.voiceBtn?.addEventListener('click', () => this.toggleVoiceInput());
    this.emojiBtn?.addEventListener('click', () => this.toggleEmojiPicker());

    document.getElementById('openPreferences')?.addEventListener('click', () => this.showSettings());
    document.getElementById('historyToggle')?.addEventListener('click', () => this.showHistory());
    document.getElementById('exportChat')?.addEventListener('click', () => this.exportChat());

    // Close emoji picker when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.emojiBtn?.contains(e.target) && !this.emojiPicker?.contains(e.target)) {
        this.emojiPicker?.classList.remove('show');
      }
    });

    // Add emoji selection
    this.emojiPicker?.addEventListener('click', (e) => {
      if (e.target.tagName === 'SPAN') {
        this.userInput.value += e.target.textContent;
        this.emojiPicker.classList.remove('show');
        this.userInput.focus();
        this.updateSendButton();
      }
    });
  }

  setupSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.lang = 'en-US';

      this.recognition.onstart = () => {
        this.voiceBtn?.classList.add('active');
        this.updateCharacterStatus('Listening...');
        this.updateCharacterMood('listening');
      };

      this.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        this.userInput.value = transcript;
        this.updateSendButton();
        this.handleUserInput();
      };

      this.recognition.onend = () => {
        this.voiceBtn?.classList.remove('active');
        this.updateCharacterStatus('Ready to help');
        this.updateCharacterMood('happy');
      };

      this.recognition.onerror = (event) => {
        this.voiceBtn?.classList.remove('active');
        this.updateCharacterStatus('Voice error - try again');
        this.updateCharacterMood('sad');
        this.showNotification('Voice recognition error. Please try again.', 3000);
        setTimeout(() => {
          this.updateCharacterStatus('Ready to help');
          this.updateCharacterMood('happy');
        }, 2000);
      };
    } else {
      this.voiceBtn && (this.voiceBtn.style.display = 'none');
    }
  }

  startActivityMonitoring() {
    setInterval(() => {
      const timeSinceActivity = Date.now() - this.lastActivity;
      if (timeSinceActivity > 60000) { // 1 minute
        this.updateCharacterStatus('Still here if you need me!');
        this.updateCharacterMood('waiting');
      }
    }, 60000); // Check every minute
  }

  updateActivity() {
    this.lastActivity = Date.now();
  }

  updateSendButton() {
    if (this.sendBtn) {
      const hasText = this.userInput.value.trim().length > 0;
      this.sendBtn.style.background = hasText ? 'var(--accent-color)' : 'var(--content-color)';
      this.sendBtn.style.transform = hasText ? 'scale(1.05)' : 'scale(1)';
    }
  }

  updateCharacterStatus(text) {
    if (this.characterStatus) {
      this.characterStatus.textContent = text;
    }
  }

  toggleVoiceInput() {
    if (!this.recognition) return;

    if (this.voiceBtn?.classList.contains('active')) {
      this.recognition.stop();
    } else {
      try {
        this.recognition.start();
      } catch (e) {
        this.showNotification('Voice recognition not available', 3000);
      }
    }
  }

  toggleEmojiPicker() {
    this.emojiPicker?.classList.toggle('show');
  }

  async handleUserInput() {
    const input = this.userInput.value.trim();
    if (!input || this.isTyping) return;

    this.updateActivity();
    this.addMessage(input, 'user');
    this.userInput.value = '';
    this.updateSendButton();

    this.showTypingIndicator();
    this.updateCharacterStatus('Thinking...');
    this.updateCharacterMood('thinking');

    const response = await this.generateResponse(input);

    this.hideTypingIndicator();
    this.addMessage(response, 'ai');

    this.updateCharacterMood('happy');
    this.updateCharacterStatus('Ready to help');

    if (this.synthesis && this.getPreference('autoSpeak', true)) {
      this.speakText(response);
    }

    this.clearSuggestionsAfterDelay();
  }

  generateResponse(input) {
    return new Promise((resolve) => {
      const delay = 800 + Math.random() * 1500;

      setTimeout(() => {
        const cleanInput = input.toLowerCase().trim();
        let response = null;

        // Check for keywords in input
        for (const [keyword, responses] of Object.entries(this.responses)) {
          if (cleanInput.includes(keyword)) {
            response = responses[Math.floor(Math.random() * responses.length)];
            break;
          }
        }

        // Enhanced fallbacks with more personality
        if (!response) {
          const fallbacks = [
            "I'm sorry I dont have an answer for that yet, rest assured next time we interact, I will have a proper answer of that inquery!",
            "Sorry my knowledge is limited for now, rest assured I'm willing to learn everyday while we interact!",
            "Oops! sorry something went wrong on my part please try again later!"
          ];
          response = fallbacks[Math.floor(Math.random() * fallbacks.length)];
        }

        resolve(response);
      }, delay);
    });
  }

  addMessage(text, type) {
    const messageEl = document.createElement('div');
    messageEl.className = `message ${type}`;

    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = type === 'user' ? '👤' : '😸';

    const content = document.createElement('div');
    content.className = 'message-content';

    const messageText = document.createElement('div');
    messageText.innerHTML = this.formatMessage(text);

    const time = document.createElement('div');
    time.className = 'message-time';
    time.textContent = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });

    const actions = document.createElement('div');
    actions.className = 'message-actions';

    if (type === 'ai') {
      actions.innerHTML = `
            <button class="message-action" onclick="assistant.copyMessage('${text.replace(/'/g, "\\'")}')">
              <i class="fas fa-copy"></i>
            </button>
            <button class="message-action" onclick="assistant.speakText('${text.replace(/'/g, "\\'")}')">
              <i class="fas fa-volume-up"></i>
            </button>
          `;
    } else {
      actions.innerHTML = `
            <button class="message-action" onclick="assistant.copyMessage('${text.replace(/'/g, "\\'")}')">
              <i class="fas fa-copy"></i>
            </button>
          `;
    }

    content.appendChild(messageText);
    content.appendChild(time);
    content.appendChild(actions);
    messageEl.appendChild(avatar);
    messageEl.appendChild(content);

    this.chatMessages.appendChild(messageEl);

    setTimeout(() => messageEl.classList.add('show'), 50);
    messageEl.scrollIntoView({ behavior: 'smooth', block: 'end' });

    this.conversationHistory.push({
      type,
      text,
      timestamp: Date.now()
    });
    this.saveHistory();
  }

  formatMessage(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br>');
  }

  copyMessage(text) {
    navigator.clipboard.writeText(text.replace(/<[^>]*>/g, '')).then(() => {
      this.showNotification('Message copied to clipboard!', 2000);
    }).catch(() => {
      this.showNotification('Copy failed. Please select and copy manually.', 3000);
    });
  }

  showTypingIndicator() {
    this.isTyping = true;

    if (this.chatMessages.querySelector('.typing-message')) return;

    const typingEl = document.createElement('div');
    typingEl.className = 'message ai typing-message';
    typingEl.innerHTML = `
          <div class="message-avatar">😸</div>
          <div class="typing-indicator">
            <div class="typing-dots">
              <div class="typing-dot"></div>
              <div class="typing-dot"></div>
              <div class="typing-dot"></div>
            </div>
            <div class="typing-indicator-text">Meo is thinking...</div>
          </div>
        `;

    this.chatMessages.appendChild(typingEl);
    typingEl.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  hideTypingIndicator() {
    this.isTyping = false;
    const typingMessage = this.chatMessages.querySelector('.typing-message');
    typingMessage?.remove();
  }

  updateCharacterMood(mood) {
    const moods = {
      happy: '😊',
      thinking: '🤔',
      listening: '👂',
      excited: '😯',
      sad: '😔',
      waiting: '😴',
    };

    // Preference: 'auto' | 'img' | 'text'
    const displayMode = this.getPreference('moodDisplay', 'auto');

    // Helper to place emoji/text
    const setTextMood = () => {
      if (this.characterAvatar) this.characterAvatar.textContent = moods[mood] || mood;
    };

    // Helper to try setting an image and fall back to text on error
    const trySetImageMood = () => {
      if (!this.characterAvatar) return;
      const img = document.createElement('img');
      // path relative to your served root - adjust if necessary
      img.src = `assets/images/assistant/${mood}.webp`;
      img.alt = mood;
      img.width = 230;
      img.height = 230;
      img.style.objectFit = 'cover';
      img.style.objectPosition = 'center'
      img.onload = () => {
        this.characterAvatar.innerHTML = '';
        this.characterAvatar.appendChild(img);
      };
      img.onerror = () => {
        // fallback to emoji/text if image missing
        setTextMood();
      };
    };

    if (displayMode === 'img') {
      trySetImageMood();
    } else if (displayMode === 'text') {
      setTextMood();
    } else { // auto: attempt image, fallback to text
      trySetImageMood();
    }

    const dots = Array.from(document.querySelectorAll('.mood-dot'));

    if (this.moodInterval) {
      clearInterval(this.moodInterval);
      this.moodInterval = null;
    }

    dots.forEach(d => {
      d.classList.remove('active', 'pulse');
    });

    if (mood === 'thinking' || mood === 'listening') {
      let idx = 0;
      const cycle = () => {
        dots.forEach((d, i) => {
          d.classList.toggle('active', i === idx);
          d.classList.toggle('pulse', i === idx);
        });
        idx = (idx + 1) % Math.max(dots.length, 1);
      };
      cycle();
      this.moodInterval = setInterval(cycle, 450);
    } else {
      const moodKeys = Object.keys(moods);
      const targetIndex = moodKeys.indexOf(mood);
      const activeIndex = targetIndex >= 0 ? (targetIndex % dots.length) : 0;
      dots[activeIndex]?.classList.add('active');
    }
  }

  speakText(text) {
    if (!this.synthesis) return;

    this.synthesis.cancel();
    const cleanText = text.replace(/<[^>]*>/g, '').replace(/[🎨🌟✨💫🤔😊👋💰📝🎭🧠💡]/g, '');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = this.getPreference('speechRate', 0.9);
    utterance.pitch = 1.1;

    const setVoice = () => {
      const voices = this.synthesis.getVoices();
      const preferredVoice = voices.find(voice => {
        const name = voice.name.toLowerCase();
        return name.includes('zira') || name.includes('samantha') ||
          name.includes('eva') || name.includes('karen');
      });
      if (preferredVoice) utterance.voice = preferredVoice;
    };

    setVoice();
    this.synthesis.speak(utterance);
  }

  addSuggestionListeners() {
    this.suggestions?.addEventListener('click', (e) => {
      if (e.target.classList.contains('suggestion')) {
        this.userInput.value = e.target.textContent;
        this.updateSendButton();
        this.handleUserInput();
      }
    });
  }

  clearSuggestionsAfterDelay() {
    if (this.suggestions?.children.length > 0) {
      setTimeout(() => {
        if (this.suggestions) this.suggestions.innerHTML = '';
      }, 3000);
    }
  }

  showSettings() {
    const modal = this.createModal();
    const panel = document.createElement('div');
    panel.style.cssText = `
          background: var(--secondary-color); 
          padding: 30px; 
          border-radius: var(--border-stylized); 
          max-width: 500px; 
          width: 95%;
          box-shadow: var(--shadow);
        `;

    const currentRate = this.getPreference('speechRate', 0.9);
    const autoSpeak = this.getPreference('autoSpeak', true);
    const notifications = this.getPreference('notifications', true);

    panel.innerHTML = `
          <h3 style="margin-bottom: 20px; color: var(--accent-color); text-align: center; font-family: var(--my-font)">
            <i class="fas fa-cog"></i> Assistant Settings
          </h3>
          
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 8px; font-weight: bold;">
              🔊 Voice Speed: <span id="speedValue">${currentRate}</span>
            </label>
            <input type="range" min="0.5" max="2" step="0.1" value="${currentRate}" id="voiceSpeed" 
                   style="width: 100%; margin-bottom: 10px;">
            <div style="display: flex; justify-content: space-between; font-size: 12px; opacity: 0.7;">
              <span>Slow</span><span>Normal</span><span>Fast</span>
            </div>
          </div>

          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 12px;">
              <input type="checkbox" id="autoSpeak" ${autoSpeak ? 'checked' : ''}
                     style="margin-right: 8px;"> 
              🔊 Auto-speak AI responses
            </label>
            <label style="display: block; margin-bottom: 12px;">
              <input type="checkbox" id="notifications" ${notifications ? 'checked' : ''}
                     style="margin-right: 8px;"> 
              🔔 Show notifications
            </label>
          </div>

          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 8px; font-weight: bold;">
              🖼️ Mood Display:
            </label>
            <select id="moodDisplay" style="width:100%; padding:8px; margin-bottom:10px; border:2px solid var(--accent-color); border-radius: var(--border-stylized); background: var(--primary-color); color:var(--accent-color);">
              <option value="auto">Auto (image → emoji)</option>
              <option value="img">Always image</option>
              <option value="text">Always emoji/text</option>
            </select>
          </div>

          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <button id="testVoice" style="flex: 1; min-width: 120px; padding: 10px; background: var(--secondary-color); color: var(--accent-color); border: 2px solid var(--accent-color); border-radius: var(--border-stylized); cursor: pointer;">
              <i class="fas fa-microphone"></i> Test Voice
            </button>
            <button id="closeSettings" style="flex: 1; min-width: 120px; padding: 10px; background: var(--success-bg); color: var(--success); border: 2px solid var(--success); border-radius: var(--border-stylized); cursor: pointer;">
              <i class="fas fa-check"></i> Save & Close
            </button>
            <button id="clearHistory" style="flex: 1; min-width: 120px; padding: 10px; background: var(--error-bg); color: var(--error); border: 2px solid var(--error); border-radius: var(--border-stylized); cursor: pointer;">
              <i class="fas fa-trash-can"></i> Clear History
            </button>
          </div>
        `;

    modal.appendChild(panel);
    document.body.appendChild(modal);

    const voiceSpeed = panel.querySelector('#voiceSpeed');
    const speedValue = panel.querySelector('#speedValue');
    const autoSpeakBox = panel.querySelector('#autoSpeak');
    const notificationsBox = panel.querySelector('#notifications');
    const moodSelect = panel.querySelector('#moodDisplay');

    moodSelect.value = this.getPreference('moodDisplay', 'auto');
    moodSelect.addEventListener('change', () => {
      this.setPreference('moodDisplay', moodSelect.value);
      this.updateCharacterMood(this.currentMood || 'happy');
    });

    voiceSpeed.addEventListener('input', (e) => {
      speedValue.textContent = e.target.value;
      this.setPreference('speechRate', parseFloat(e.target.value));
    });

    autoSpeakBox.addEventListener('change', () => {
      this.setPreference('autoSpeak', autoSpeakBox.checked);
    });

    notificationsBox.addEventListener('change', () => {
      this.setPreference('notifications', notificationsBox.checked);
    });

    panel.querySelector('#testVoice').addEventListener('click', () => {
      this.speakText('Hello! This is a voice test from Meo. How do I sound?');
    });

    panel.querySelector('#closeSettings').addEventListener('click', () => modal.remove());

    panel.querySelector('#clearHistory').addEventListener('click', () => {
      if (confirm('Are you sure you want to clear all conversation history?')) {
        this.clearHistory();
        modal.remove();
        this.showNotification('Conversation history cleared', 3000);
      }
    });
  }

  showHistory() {
    const modal = this.createModal();
    const panel = document.createElement('div');
    panel.style.cssText = `
          background: var(--secondary-color); 
          padding: 30px; 
          border-radius: var(--border-stylized); 
          max-width: 800px; 
          width: 95%; 
          max-height: 80vh; 
          overflow: auto;
          box-shadow: var(--shadow);
        `;

    panel.innerHTML = `
          <h3 style="color: var(--accent-color); margin-bottom: 20px; text-align: center; font-family: var(--my-font);">
            <i class="fas fa-history"></i> Conversation History
          </h3>
        `;

    const list = document.createElement('div');
    if (this.conversationHistory.length === 0) {
      list.innerHTML = '<p style="text-align: center; opacity: 0.7;">No conversation history yet. Start chatting!</p>';
    } else {
      this.conversationHistory.slice(-50).forEach(item => { // Show last 50 messages
        const entry = document.createElement('div');
        entry.style.cssText = `
              padding: 12px; 
              margin: 8px 0; 
              border-left: 3px solid ${item.type === 'user' ? 'var(--content-color)' : 'var(--accent-color)'}; 
              background: var(--secondary-color); 
              border-radius: var(--border-stylized);
              box-shadow: var(--shadow);
            `;

        const time = new Date(item.timestamp).toLocaleString();
        const type = item.type === 'user' ? '👤 You' : '😸 Meo';
        entry.innerHTML = `
              <div style="font-size: 12px; opacity: 0.7; margin-bottom: 6px;">
                ${time} - ${type}
              </div>
              <div>${this.formatMessage(item.text)}</div>
            `;
        list.appendChild(entry);
      });
    }

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = 'Close';
    closeBtn.style.cssText = `
          margin-top: 20px; 
          padding: 10px 20px; 
          background: var(--accent-color); 
          color: var(--primary-color); 
          border: none; 
          border-radius: var(--border-stylized); 
          cursor: pointer;
          width: 100%;
        `;
    closeBtn.addEventListener('click', () => modal.remove());

    panel.appendChild(list);
    panel.appendChild(closeBtn);
    modal.appendChild(panel);
    document.body.appendChild(modal);
  }

  exportChat() {
    const chatData = {
      export_date: new Date().toISOString(),
      conversation_count: this.conversationHistory.length,
      messages: this.conversationHistory.map(msg => ({
        type: msg.type,
        content: msg.text,
        timestamp: new Date(msg.timestamp).toISOString()
      }))
    };

    const blob = new Blob([JSON.stringify(chatData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `meo-chat-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    this.showNotification('Chat exported successfully!', 3000);
  }

  createModal() {
    const modal = document.createElement('div');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--default-overlay);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          animation: fadeIn 0.3s ease;
        `;

    return modal;
  }

  showNotification(message, duration = 3000) {
    if (!this.getPreference('notifications', true)) return;

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'slideInRight 0.3s ease reverse';
      setTimeout(() => notification.remove(), 300);
    }, duration);
  }

  clearHistory() {
    this.conversationHistory = [];
    this.saveHistory();

    while (this.chatMessages.firstChild) {
      this.chatMessages.removeChild(this.chatMessages.firstChild);
    }

    const welcome = document.createElement('div');
    welcome.className = 'welcome-message';
    welcome.innerHTML = `
          <h2>Meo at your service</h2>
          <p>How can I assist you today?</p>
        `;

    this.suggestions.innerHTML = `
          <button class="suggestion">😸 Tell me about KyuArtz</button>
          <button class="suggestion">😸 What services do you offer?</button>
          <button class="suggestion">😸 Commission info</button>
          <button class="suggestion">😸 Gallery</button>
          <button class="suggestion">😸 Joke</button>
          <button class="suggestion">😸 Fun Facts</button>
        `;

    this.chatMessages.appendChild(welcome);
    this.chatMessages.appendChild(this.suggestions);
  }

  getPreference(key, defaultValue) {
    try {
      const stored = localStorage.getItem(`meo_${key}`);
      return stored !== null ? JSON.parse(stored) : defaultValue;
    } catch {
      return defaultValue;
    }
  }

  async loadResponses() {
    try {
      const res = await fetch('assets/data/assistantResponses.json');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      this.responses = await res.json();
      console.info('Assistant responses loaded');
    } catch (err) {
      console.warn('Could not load assistant responses, using fallback.', err);
      // Minimal fallback so the assistant still works if JSON can't be fetched.
      this.responses = {
        "hello": ["Hello! I'm Meo, your assistant."],
        "help": ["I can tell you about KyuArtz, services, pricing and commissions."]
      };
    }
  }

  setPreference(key, value) {
    try {
      localStorage.setItem(`meo_${key}`, JSON.stringify(value));
    } catch (e) {
      console.warn('Could not save preference', key, e);
    }
  }

  saveHistory() {
    try {
      localStorage.setItem('meo_history', JSON.stringify(this.conversationHistory));
    } catch (e) {
      console.warn('Could not save history', e);
    }
  }

  loadHistory() {
    try {
      const raw = localStorage.getItem('meo_history');
      if (!raw) return;

      const items = JSON.parse(raw);
      if (!Array.isArray(items)) return;

      this.conversationHistory = items;

      // Clear welcome message if there's history
      if (items.length > 0) {
        this.chatMessages.innerHTML = '';
        items.slice(-20).forEach(item => { // Load last 20 messages
          this.addMessageToDOM(item.text, item.type, item.timestamp);
        });
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
      }
    } catch (e) {
      console.warn('Could not load history', e);
    }
  }

  addMessageToDOM(text, type, timestamp) {
    const messageEl = document.createElement('div');
    messageEl.className = `message ${type} show`;

    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = type === 'user' ? '👤' : '😸';

    const content = document.createElement('div');
    content.className = 'message-content';

    const messageText = document.createElement('div');
    messageText.innerHTML = this.formatMessage(text);

    const time = document.createElement('div');
    time.className = 'message-time';
    time.textContent = new Date(timestamp).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });

    const actions = document.createElement('div');
    actions.className = 'message-actions';

    if (type === 'ai') {
      actions.innerHTML = `
            <button class="message-action" onclick="assistant.copyMessage('${text.replace(/'/g, "\\'")}')">
              <i class="fas fa-copy"></i>
            </button>
            <button class="message-action" onclick="assistant.speakText('${text.replace(/'/g, "\\'")}')">
              <i class="fas fa-volume-up"></i>
            </button>
          `;
    } else {
      actions.innerHTML = `
            <button class="message-action" onclick="assistant.copyMessage('${text.replace(/'/g, "\\'")}')">
              <i class="fas fa-copy"></i>
            </button>
          `;
    }

    content.appendChild(messageText);
    content.appendChild(time);
    content.appendChild(actions);
    messageEl.appendChild(avatar);
    messageEl.appendChild(content);

    this.chatMessages.appendChild(messageEl);
  }
}

// Global reference for onclick handlers
let assistant;

document.addEventListener('DOMContentLoaded', () => {
  assistant = new MeoAssistant();
});

document.head.appendChild(style);
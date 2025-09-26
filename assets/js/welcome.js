const dialogueTree = {
  start: {
    character: "Meo",
    text: "Hey there! Welcome to Kyuartz Studio — your go-to destination for digital art, comics, commission work, and so much more! ✨",
    options: [
      { text: "Thanks! Tell me more", next: "about" },
      { text: "Let's get started!", next: "getStarted" }
    ]
  },
  about: {
    character: "Meo",
    text: "We specialize in creating stunning digital artwork, engaging comics, and personalized commissions. Whether you're looking for character designs, illustrations, or unique art pieces, we've got you covered!",
    options: [
      { text: "That sounds amazing!", next: "amazing" },
      { text: "How can I commission art?", next: "commission" }
    ]
  },
  commission: {
    character: "Meo",
    text: "Great question! You can reach out through our contact form or social media. We'll discuss your vision, provide a quote, and bring your ideas to life with our artistic expertise!",
    options: [
      { text: "Perfect! Let's explore", next: "explore" }
    ]
  },
  amazing: {
    character: "Meo",
    text: "Thank you! We pour our heart into every piece we create. Ready to dive into our world of creativity?",
    options: [
      { text: "Absolutely!", next: "explore" }
    ]
  },
  getStarted: {
    character: "Meo",
    text: "Awesome! Feel free to browse our portfolio, check out our latest works, and don't hesitate to reach out if anything catches your eye!",
    options: [
      { text: "Will do!", next: "explore" }
    ]
  },
  explore: {
    character: "Meo",
    text: "Fantastic! Enjoy exploring Kyuartz Studio. We can't wait to create something amazing together! 🎨",
    options: []
  }
};

class DialogueManager {
  constructor(tree) {
    this.tree = tree;
    this.currentNode = 'start';
    this.typewriterTimeout = null;
    this.isTyping = false;

    this.nameElement = document.getElementById('mascotName');
    this.textElement = document.getElementById('dialogueText');
    this.optionsDiv = document.getElementById('dialogueOptions');
    this.mascotImg = document.getElementById('mascotImg');
    this.typingCursor = document.getElementById('typingCursor');

    this.initParticles();
    this.renderDialogue('start');
  }

  initParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 8 + 's';
      particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
      particlesContainer.appendChild(particle);
    }
  }

  typeWriterEffect(text, speed = 10) {
    if (this.typewriterTimeout) clearTimeout(this.typewriterTimeout);

    this.isTyping = true;
    this.textElement.innerHTML = '';
    this.typingCursor.style.opacity = '1';

    let i = 0;
    const type = () => {
      if (i < text.length) {
        this.textElement.innerHTML += text.charAt(i);
        i++;
        this.typewriterTimeout = setTimeout(type, speed);
      } else {
        this.isTyping = false;
        this.typingCursor.style.opacity = '0';
      }
    };
    type();
  }

  renderDialogue(nodeKey) {
    const node = this.tree[nodeKey];
    if (!node) return;

    if (nodeKey === 'end') {
      this.closeWelcome();
      return;
    }

    this.currentNode = nodeKey;
    this.nameElement.textContent = node.character;

    // Add speaking animation
    this.mascotImg.classList.add('speaking');

    // Type the text
    this.typeWriterEffect(node.text);

    // Render options
    this.optionsDiv.innerHTML = '';

    // Add a small delay before showing options
    setTimeout(() => {
      node.options.forEach((option) => {
        const btn = document.createElement('button');
        btn.textContent = option.text;
        btn.onclick = () => {
          if (!this.isTyping) {
            this.renderDialogue(option.next);
          }
        };
        this.optionsDiv.appendChild(btn);
      });
    }, node.text.length * 20); // Delay based on text length
  }

  closeWelcome() {
    const overlay = document.getElementById('welcomeOverlay');
    overlay.style.animation = 'fadeInOverlay 0.5s reverse';
    setTimeout(() => {
      overlay.remove();
      document.body.style.overflow = 'auto';
    }, 500);
  }
}

// Initialize the dialogue system
let dialogueManager;
window.addEventListener('DOMContentLoaded', () => {
  dialogueManager = new DialogueManager(dialogueTree);
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeWelcomeMessage();
  }
});
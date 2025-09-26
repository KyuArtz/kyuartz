const ImageReplyPlugin = {
  init(assistant) {
    console.info("ImageReply plugin loaded ✅");
  },

  async onMessage(input, assistant) {
    if (input.toLowerCase().includes("cat pic")) {
      assistant.addMessage("Here’s a cute cat 🐱", "ai", {
        type: "image",
        url: "https://media.gettyimages.com/id/615582402/photo/meerkat-cat.jpg?s=612x612&w=0&k=20&c=ahEQhJyiWNbMUuGlqflnKkuzrENb3HxQ6b5OGsoOFLI=",
        alt: "cute cat"
      });
      return true;
    };
    return false;
  }
};

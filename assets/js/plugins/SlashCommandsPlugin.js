const SlashCommandsPlugin = {
  init(assistant) {
    console.info("SlashCommands plugin loaded ✅");
  },

  async onMessage(input, assistant) {
    const cmd = input.toLowerCase().trim();

    const commands = {
      "/help": "Available commands: /help, /clear, /joke, /fact",
      "/clear": () => {
        assistant.clearHistory();
        return "Chat cleared!";
      },
      "/joke": [
        "😸 Why don’t cats play poker in the jungle? Too many cheetahs!",
        "😸 Parallel lines have so much in common… it’s a shame they’ll never meet."
      ],
      "/fact": [
        "🌍 Did you know? The Eiffel Tower can grow up to 15 cm in summer.",
        "🐱 Cats sleep 70% of their lives."
      ]
    };

    if (commands[cmd]) {
      let response = commands[cmd];
      if (typeof response === "function") response = response();
      if (Array.isArray(response)) response = response[Math.floor(Math.random() * response.length)];
      assistant.addMessage(response, "ai");
      return true; // handled
    }

    return false; // not handled
  }
};

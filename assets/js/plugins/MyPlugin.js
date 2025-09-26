// Example Plugin Template for Meo AI Assistant
const MyPlugin = {
  // Called once when registered
  init(assistant) {
    console.info("MyPlugin initialized ✅");
    // You can also add UI hooks or settings here if needed
    // e.g., add a custom button in the chat header
  },

  /**
   * Called when the user sends a message
   * @param {string} input - The raw user text
   * @param {VirtualAssistant} assistant - The assistant instance
   * @returns {boolean|Promise<boolean>} - Return true if handled
   */
  async onMessage(input, assistant) {
    const text = input.toLowerCase();

    // Example: trigger on keyword
    if (text.includes("hello plugin")) {
      assistant.addMessage("👋 Hi! I’m a custom plugin response.", "ai");
      return true;
    }

    // Example: trigger on slash command
    if (text === "/myplugin") {
      assistant.addMessage("⚡ Custom plugin activated!", "ai", {
        type: "link",
        url: "https://example.com",
        text: "Click here"
      });
      return true;
    }

    return false; // not handled → let core assistant handle
  },

  // Optional: called when assistant shuts down or reloads
  destroy(assistant) {
    console.info("MyPlugin destroyed ❌");
  }
};

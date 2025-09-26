const QuotesPlugin = {
    name: "Quotes",
    description: "Get random motivational quotes from meo.",
    commands: ["/quote → Get a random quote"],
    init() {
        console.info("Quotes plugin loaded ✅");
    },

    async onMessage(input, assistant) {
        if (input.toLowerCase() === "/quote") {
            const quotes = [
                "✨ *Believe you can and you're halfway there.*",
                "💡 *Every day is a second chance.*",
                "🚀 *Dream big. Start small. Act now.*",
                "🌈 *The best way to predict the future is to create it.*"
            ];
            const q = quotes[Math.floor(Math.random() * quotes.length)];
            assistant.addMessage(q, "ai");
            return true;
        }
        return false;
    }
};

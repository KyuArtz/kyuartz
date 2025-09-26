const FunFactsPlugin = {
    name: "FunFacts",
    description: "Get random fun facts from meo.",
    commands: ["/FunFacts → Get a random fun facts"],
    init() {
        console.info("FunFacts plugin loaded ✅");
    },

    async onMessage(input, assistant) {
        if (input.toLowerCase() === "/fact") {
            const facts = [
                "🐱 Cats have over 20 muscles controlling their ears.",
                "🌍 Bananas are berries, but strawberries are not.",
                "💻 The first 1GB hard drive weighed over 500 pounds!",
                "🔥 Lightning is five times hotter than the surface of the sun."
            ];
            const f = facts[Math.floor(Math.random() * facts.length)];
            assistant.addMessage(f, "ai");
            return true;
        }
        return false;
    }
};

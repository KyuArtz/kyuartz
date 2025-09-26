const WeatherPlugin = {
    name: "Weather",
    description: "Get random weather updates from meo.",
    commands: ["/Weather → Get a random weather update"],
    init() {
        console.info("Weather plugin loaded ✅");
    },

    async onMessage(input, assistant) {
        if (input.toLowerCase().startsWith("/weather")) {
            const location = input.split(" ").slice(1).join(" ") || "your city";
            const responses = [
                `☀️ The weather in ${location} is sunny and bright!`,
                `🌧️ It's raining in ${location}. Don’t forget your umbrella!`,
                `❄️ Snowfall expected in ${location}. Stay warm!`,
                `🌤️ Cloudy skies over ${location} today.`
            ];
            assistant.addMessage(
                responses[Math.floor(Math.random() * responses.length)],
                "ai"
            );
            return true;
        }
        return false;
    }
};

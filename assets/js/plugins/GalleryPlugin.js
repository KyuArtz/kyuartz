const GalleryPlugin = {
    name: "Gallery",
    description: "Get random art from kyuartz gallery.",
    commands: ["/Gallery → Get a random art"],
    init() {
        console.info("Gallery plugin loaded ✅");
    },

    async onMessage(input, assistant) {
        if (input.toLowerCase() === "/gallery") {
            assistant.addMessage("🎨 Here’s a sample from the gallery:", "ai", {
                type: "image",
                url: "https://kyuartz.github.io/kyuartz/assets/images/artgallary/Wasteland.webp",
                alt: "art preview"
            });
            assistant.addMessage(
                "👉 [View full gallery](https://kyuartz.github.io/kyuartz/gallery)",
                "ai",
                { type: "link", url: "https://kyuartz.github.io/kyuartz/gallery" }
            );
            return true;
        }
        return false;
    }
};

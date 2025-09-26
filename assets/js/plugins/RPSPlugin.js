const RPSPlugin = {
    name: "RPS",
    description: "Play rock paper scissors with meo",
    commands: ["/RPS → Mini game"],
    init() {
        console.info("RPS mini-game plugin loaded ✅");
    },

    async onMessage(input, assistant) {
        if (input.toLowerCase().startsWith("/rps")) {
            const choices = ["rock", "paper", "scissors"];
            const userChoice = input.split(" ")[1]?.toLowerCase();
            const aiChoice = choices[Math.floor(Math.random() * choices.length)];

            if (!choices.includes(userChoice)) {
                assistant.addMessage("🎮 Usage: `/rps rock | paper | scissors`", "ai");
                return true;
            }

            let result = "";
            if (userChoice === aiChoice) {
                result = "🤝 It's a tie!";
            } else if (
                (userChoice === "rock" && aiChoice === "scissors") ||
                (userChoice === "paper" && aiChoice === "rock") ||
                (userChoice === "scissors" && aiChoice === "paper")
            ) {
                result = "🎉 You win!";
            } else {
                result = "😸 I win!";
            }

            assistant.addMessage(
                `You chose **${userChoice}**, I chose **${aiChoice}**. ${result}`,
                "ai"
            );
            return true;
        }
        return false;
    }
};

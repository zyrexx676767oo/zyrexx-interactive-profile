const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("\n=== ZYREXX HUB ===");
console.log("Minecraft YouTuber & Future JavaScript Developer\n");

function showMenu() {
  console.log("\nChoose an option (1-4):");
  console.log("1. Who is Zyrexx?");
  console.log("2. My Minecraft Journey");
  console.log("3. Learning JavaScript");
  console.log("4. Future Plans & Goals");
  console.log("Type 'exit' to quit.\n");
  
  rl.question("> ", handleInput);
}

function handleInput(answer) {
  console.log("");
  
  if (answer === '1') {
    console.log("Who is Zyrexx?");
    console.log("I'm Zyrexx, a passionate Minecraft YouTuber who loves creating content around survival, building, and crazy challenges.");
    console.log("Started my channel because Minecraft is more than just a game to me — it's a creative world where I can express ideas and have fun with the community.");
  } 
  else if (answer === '2') {
    console.log("My Minecraft Journey");
    console.log("I've been playing Minecraft since the early days. What began as casual survival worlds quickly turned into full series with custom rules, hardcore attempts, and big building projects.");
    console.log("My videos focus on chill vibes, funny moments, and trying to push my creativity every time I record.");
  } 
  else if (answer === '3') {
    console.log("Learning JavaScript");
    console.log("Right now I'm grinding hard to become a strong JavaScript developer.");
    console.log("Started from basics and now moving into more advanced stuff like async programming, APIs, and building real projects.");
    console.log("The goal is to eventually create my own Minecraft tools, web apps for the community, and maybe even mods or plugins later on.");
  } 
  else if (answer === '4') {
    console.log("Future Plans & Goals");
    console.log("• Grow my YouTube channel and keep delivering fun Minecraft content");
    console.log("• Reach a solid intermediate/advanced level in JavaScript");
    console.log("• Build useful tools for Minecraft players (mods, servers, websites)");
    console.log("• Combine my two passions: gaming + programming");
    console.log("• One day create my own indie game or big open-source project");
  } 
  else if (answer.toLowerCase() === 'exit') {
    console.log("Thanks for checking out my profile! See you in the next video ✌️");
    rl.close();
    return;
  } 
  else {
    console.log("Invalid option. Please type a number between 1 and 4.");
  }

  showMenu();
}

console.log("Welcome to my interactive profile!");
showMenu();
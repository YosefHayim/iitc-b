// # Text-Based Adventure Game Exercise

// ## Objective
// Create a simple text-based adventure game using JavaScript. This exercise will reinforce your understanding of variables, arithmetic operations, logical operators, comparison operators, and assignment operators.

// ## Game Scenario
// You're creating a game where the player is an explorer in a mysterious temple. The player will make choices that affect their score and determine the outcome of their adventure.

// ## Part 1: Game Setup

// ### Task
// Initialize the necessary variables for the game.

// ### Requirements
// - Create variables for the player's name, score, and health.
// - Initialize a variable to store the player's current room.
let playerName;
let score;
let health;

// ### Hints
// - Use `let` for variables that might change during the game.
// - Consider using `const` for any values that won't change.

// ### Resources
// - [JavaScript Variables](https://www.w3schools.com/js/js_variables.asp)

// ## Part 2: Player Information

// ### Task
// Create a function to set up the player's information.
function playerInfo() {
    playerName = `Joseph`
    score = 0
    health = 100
    console.log(`Name: ${playerName}\nStart score: ${score}\nStart Health: ${health}`);
}
playerInfo();
// ### Requirements
// - The function should prompt the user for their name.
// - It should set the initial score to 0 and health to 100.

// ### Hints
// - Use the `prompt()` function to get user input.
// - Remember to use assignment operators to set the initial values.

// ### Resources
// - [JavaScript Popup Boxes](https://www.w3schools.com/js/js_popup.asp)
// - [JavaScript Assignment](https://www.w3schools.com/js/js_assignment.asp)

// ## Part 3: Game Choices

// ### Task
// Create functions for different choices the player can make.

let questionFirst;
function hauntedLibrary() {
    console.log(`Current score: ${score}\nCurrent Health: ${health}\n`)
    console.log(`You have entered an old, dusty library filled with ancient books and an eerie silence. As you explore, you find a mysterious book on a pedestal.`);
    questionFirst = prompt(`What would you choose?:\n1. Open the book and read the first page.\n2. Close the book and leave it untouched.`);
    
    while (questionFirst !== '1' && questionFirst !== '2') {
        console.log(`Invalid input, please choose 1 or 2.`);
        questionFirst = prompt(`What would you choose?:\n1. Open the book and read the first page.\n2. Close the book and leave it untouched.`);
    }

    if (questionFirst === '1') {
        console.log(`You gain knowledge (+100 score) but lose some health (-10 health) as a ghostly figure drains some of your energy.`);
        score += 100;
        health -= 10;
        console.log(`Current score: ${score}\nCurrent Health: ${health}`)
    } else if (questionFirst === '2') {
        console.log(`You avoid the ghostly figure but miss out on valuable information (+500 score, no health change).`);
        score += 500;
        console.log(`Current score: ${score}\nCurrent Health: ${health}`)

    }
}

let questionSecond;
function ancientCrypt() {
    console.log(`Current score: ${score}\nCurrent Health: ${health}\n`)
    console.log(`You find yourself in a dimly lit ancient crypt. The air is cold and damp, and you can hear faint whispers. In the center of the room, there's an ornate chest.`);
    questionSecond = prompt(`What would you choose?:\n1. Open the chest and take what's inside.\n2. Ignore the chest and explore the rest of the crypt.`);
    
    while (questionSecond !== '1' && questionSecond !== '2') {
        console.log(`Invalid input, please choose 1 or 2.`);
        questionSecond = prompt(`What would you choose?:\n1. Open the chest and take what's inside.\n2. Ignore the chest and explore the rest of the crypt.`);
    }

    if (questionSecond === '1') {
        console.log(`You find a valuable artifact (+150 score), but a trap triggers, reducing your health (-20) health).`);
        score += 150;
        health -= 20;
        console.log(`Current score: ${score}\nCurrent Health: ${health}`)

    } else if (questionSecond === '2') {
        console.log(`You avoid the trap but find only minor treasures (+250 score).`);
        score += 250;
        console.log(`Current score: ${score}\nCurrent Health: ${health}`)

    }
}

let questionThree;
function mysticForestClearing() {
    console.log(`Current score: ${score}\nCurrent Health: ${health}\n`)
    console.log(`You arrive at a clearing in a mystic forest, where a glowing portal is hovering above the ground. Beside the portal, there's a talking tree offering guidance.`);
    questionThree = prompt(`What would you choose?:\n1. Enter the portal.\n2. Talk to the tree.`);
    
    while (questionThree !== '1' && questionThree !== '2') {
        console.log(`Invalid input, please choose 1 or 2.`);
        questionThree = prompt(`What would you choose?:\n1. Enter the portal.\n2. Talk to the tree.`);
    }

    if (questionThree === '1') {
        console.log(`The portal transports you to a hidden treasure room (+200 score), but it's guarded by a beast, and you must escape (-15 health).`);
        score += 200;
        health -= 15;
        console.log(`Current score: ${score}\nCurrent Health: ${health}`)
    } else if (questionThree === '2') {
        console.log(`The tree gives you valuable information (+100 score) and heals some of your health (+60 health).`);
        score += 100;
        health += 60
        console.log(`Current score: ${score}\nCurrent Health: ${health}`)
    }
}

let questionFour;
function abandonedAlchemistsLab() {
    console.log(`Current score: ${score}\nCurrent Health: ${health}\n`)
    console.log(`You enter an abandoned alchemist's laboratory filled with strange potions and mysterious ingredients. The air is thick with the scent of herbs and chemicals. On a table, you see a glowing vial labeled "Elixir of Power" and an old, dusty grimoire.`);
    questionFour = prompt(`What would you choose?:\n1. Drink the elixir.\n2. Read the grimoire.`);
    
    while (questionFour !== '1' && questionFour !== '2') {
        console.log(`Invalid input, please choose 1 or 2.`);
        questionFour = prompt(`What would you choose?:\n1. Drink the elixir.\n2. Read the grimoire.`);
    }

    if (questionFour === '1') {
        console.log(`The elixir grants you temporary strength and insight (+225 score, +10 health), but it also causes strange visions (-5 health).`);
        score += 225;
        health -= 5;
        console.log(`Current score: ${score}\nCurrent Health: ${health}`)
    } else if (questionFour === '2') {
        console.log(`The grimoire reveals secrets of ancient magic (+125 score), but it curses you with a lingering hex that reduces your health over time (-10 health).`);
        score += 125;
        health -10
        console.log(`Current score: ${score}\nCurrent Health: ${health}`)

    }
}
// ### Requirements
// - Create at least three functions representing different rooms or scenarios.
// - Each function should present a choice to the player and update their score or health based on their decision.

// ### Hints
// - Use `if...else` statements to handle different player choices.
// - Use arithmetic operators to update the player's score and health.

// ### Resources
// - [JavaScript if...else Statements](https://www.w3schools.com/js/js_if_else.asp)
// - [JavaScript Arithmetic](https://www.w3schools.com/js/js_arithmetic.asp)

// ## Part 4: Game Logic

// ### Task
// Create the main game logic function.
let playerFeedback = [
    "Excellent job! Your decisions were spot-on!",
    "Great work! You handled the challenges with ease.",
    "Well done! Your intuition led you to success.",
    "Impressive! You navigated the obstacles like a pro.",
    "Fantastic! Your choices were clever and well thought out.",
    "Outstanding performance! You showed great skill and strategy.",
    "Superb! Your adventure was filled with smart decisions.",
    "Remarkable! You made all the right moves.",
    "Awesome! You tackled the game with great determination.",
    "Amazing job! You excelled in every scenario."];

let randomNum = Math.floor(Math.random() * 10) + 1;

function endGame() {
    console.log(`Dear ${playerName}, you have reached the end game.\nYour final score is: ${score}\nHealth left: ${health}\n`);
    console.log(`${playerFeedback[randomNum]}\n`);

}

let chooseScene;
function main() {
    console.log(`Welcome to text-adventure-game-exercise!\n`);
    console.log(`How the game works?...\nWe will provide you a scene and a situation.\nYou will have two options to choose from based on your intuition.\nReady? Even if not, here we go!!!`);
    console.log(`Current score: ${score}\nCurrent Health: ${health}\n`);

    chooseScene = prompt(`Which scene would you like to start first?:\n1. hauntedLibrary\n2. ancientCrypt\n3. mysticForestClearing\n4. abandonedAlchemistsLab`);

    while (chooseScene !== '1' && chooseScene !== '2' && chooseScene !== '3' && chooseScene !== '4') {
        console.log(`Invalid input, please choose a number between 1-4.`);
        chooseScene = prompt(`Which scene would you like to start first?:\n1. hauntedLibrary\n2. ancientCrypt\n3. mysticForestClearing\n4. abandonedAlchemistsLab`);
    }

    if (chooseScene === '1') {
        hauntedLibrary()
        console.log(`\nMoving to scene 2nd...\n`);
        ancientCrypt()
        console.log(`\nMoving to scene 3rd...\n`);
        mysticForestClearing()
        console.log(`\nMoving to scene 4nd...\n`);
        abandonedAlchemistsLab()
        endGame()
    } else if (chooseScene === '2') {
        ancientCrypt()
        console.log(`\nMoving to scene 2nd...\n`);
        mysticForestClearing()
        console.log(`\nMoving to scene 3rd...\n`);
        abandonedAlchemistsLab()
        console.log(`\nMoving to scene 4nd...\n`);
        hauntedLibrary()
        endGame()
    } else if (chooseScene === '3') {
        mysticForestClearing()
        abandonedAlchemistsLab()
        hauntedLibrary()
        ancientCrypt()
        endGame()
    } else if (chooseScene === '4') {
        abandonedAlchemistsLab()
        console.log(`\nMoving to scene 2nd...\n`);
        hauntedLibrary()
        console.log(`\nMoving to scene 3rd...\n`);
        ancientCrypt()
        console.log(`\nMoving to scene 4nd...\n`);
         mysticForestClearing()
         endGame()
    }
}
main()

// ### Requirements
// - The function should call the player setup function.
// - It should then present the first scenario to the player.
// - Based on the player's choice, it should call the appropriate scenario function.

// ### Hints
// - Use a series of `if...else` statements to determine which scenario to present next.
// - Consider using the logical AND (&&) or OR (||) operators to combine conditions.

// ### Resources
// - [JavaScript Comparison and Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)

// ## Part 5: End Game

// ### Task
// Create a function to end the game and display the final result.

// ### Requirements
// - The function should display the player's final score and health.
// - It should also give a message based on how well the player did.

// ### Hints
// - Use template literals to format the output string nicely.
// - Use comparison operators to determine what message to display.

// ### Resources
// - [JavaScript Template Literals](https://www.w3schools.com/js/js_string_templates.asp)

// ## Bonus Challenges
// 1. Add an inventory system where players can collect items.
// 2. Implement a simple combat system using random number generation.
// 3. Create multiple endings based on the player's final score and health.

// ## Final Steps
// - Test your game thoroughly with different choices.
// - Make sure all paths through the game are possible and make sense.
// - Add descriptive comments to your code to explain what each part does.

// Remember to apply the concepts of variables, arithmetic operations, logical operators, comparison operators, and assignment operators throughout your solution. Have fun creating your adventure!

// [JavaScript Tutorial](https://www.w3schools.com/js/default.asp)

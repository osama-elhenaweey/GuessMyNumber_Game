"use strict";
let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// factor the repetitive code
const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};
// clicking on check button
document.querySelector(".check").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        // document.querySelector(".message").textContent = "⛔ No Number !!";
        displayMessage("⛔ No Number !!");
    } else if (guess === randomNumber) {
        // document.querySelector(".message").textContent = "✅ Correct Guess";
        displayMessage("✅ Correct Guess");
        document.querySelector("body").style.backgroundColor = "#60b347";

        document.querySelector(".number").textContent = randomNumber;
        document.querySelector(".number").style.width = "30rem";
        // if you win you cant click again
        document
            .querySelector(".check")
            .addEventListener("click", function (event) {
                event.preventDefault();
            });
        // check high score
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = `${highScore}`;
        }
        // check if the score is higher or lower than the secret number
    } else if (guess !== randomNumber) {
        if (score > 1) {
            // document.querySelector(".message").textContent =
            //     guess > randomNumber ? "📈 too high" : "📉 too low";
            displayMessage(guess > randomNumber ? "📈 too high" : "📉 too low");
            score--;
            document.querySelector(".score").textContent = score;
            highScore--;
            // if he finished his 20 tries
        } else {
            // document.querySelector(".message").textContent = "You Lose";
            displayMessage("❌ You lost the game");
            document.querySelector(".score").textContent = "0";
            if (document.querySelector(".score").textContent === "0") {
                document.querySelector("body").style.backgroundColor =
                    "#ED2939";
            }
        }
    }
});
// try again
document.querySelector(".again").addEventListener("click", function () {
    score = 20;

    randomNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    // document.querySelector(".message").textContent = "Start guessing...";
    displayMessage("Start guessing...");

    document.querySelector(".guess").value = "";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
});

// before refactor
// else if (guess > randomNumber) {
//     if (score > 1) {
//         document.querySelector(".message").textContent = "📈 too high";
//         score--;
//         document.querySelector(".score").textContent = score;
//         highScore--;
//     } else {
//         document.querySelector(".message").textContent = "You Lose";
//         document.querySelector(".score").textContent = "0";
//         if (document.querySelector(".score").textContent === "0") {
//             document.querySelector("body").style.backgroundColor =
//                 "#ED2939";
//         }
//     }
// } else if (guess < randomNumber) {
//     if (score > 1) {
//         document.querySelector(".message").textContent = "📉 too low";
//         score--;
//         document.querySelector(".score").textContent = score;
//         highScore--;
//     } else {
//         document.querySelector(".message").textContent = "You Lose";

//         document.querySelector(".score").textContent = "0";
//         if (document.querySelector(".score").textContent === "0") {
//             document.querySelector("body").style.backgroundColor =
//                 "#ED2939";
//         }
//     }
// }

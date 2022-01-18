function computerPlay() {
    let x = Math.floor(Math.random() * 3) + 1;

    if (x == 1) return "ROCK";
    if (x == 2) return "PAPER";
    if (x == 3) return "SCISSOR";
}


function playRound(humanPick, computerPick) {
    
    let result = false;
    humanPick = humanPick.toUpperCase();

    if (humanPick == computerPick) return "It's A Draw";

    else if (humanPick == "ROCK") {
        if (computerPick == "SCISSOR") result = true;
        else if (computerPick == "PAPER") result = false;
    }

    else if (humanPick == "PAPER") {
        if (computerPick == "ROCK") result = true;
        else if (computerPick == "SCISSOR") result = false;
    }

    else if (humanPick == "SCISSOR") {
        if (computerPick == "PAPER") result = true;
        else if (computerPick == "ROCK") result = false;
    }

    if (result == true) {

        humanCount++;
        return "You win! " + humanPick + " beats " + computerPick + ".";
    }
    else if (result == false) {
        computerCount++;
        return "You lose! " + humanPick + " loses to " + computerPick + ".";
    }

}

function game(humanPick) {

    if (humanCount < 5 && computerCount < 5) {
        const winner = playRound(humanPick, computerPlay());

        const result = document.querySelector('.result');

        const content = document.createElement('div');

        content.classList.add('content');

        content.textContent = winner;

        result.appendChild(content);
    }

    else {


        if (!beenHere) {
            let winner;

            if (humanCount == 5) winner = "You won. Match has ended.";
            else winner = "You lose! Match has ended.";

            const result = document.querySelector('.result');

            const content = document.createElement('div');

            content.textContent = winner;

            result.appendChild(content);

            beenHere = true;
        }
    }
    
}

let humanPick;
let computerCount = 0, humanCount = 0;
let beenHere = false;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const restart = document.getElementById("restart");

        rock.addEventListener("click", function() {
            humanPick = "rock";
            game(humanPick);
        });
        paper.addEventListener("click", function() {
            humanPick = "paper";
            game(humanPick);
        });
        scissor.addEventListener("click", function() {
            humanPick = "scissor";
            game(humanPick);
        });

        restart.addEventListener("click", function() {
            location.reload();
        });
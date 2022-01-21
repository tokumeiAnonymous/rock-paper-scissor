function computerPlay() {
    let x = Math.floor(Math.random() * 3) + 1;

    if (x == 1) {
        addImage("COMPUTER", "ROCK");
        return "ROCK";
    }
    if (x == 2) {
        addImage("COMPUTER", "PAPER");
        return "PAPER";
    }
    if (x == 3) {
        addImage("COMPUTER", "SCISSOR"); 
        return "SCISSOR";
    }
}


function playRound(humanPick, computerPick) {
    
    let result = false;
    humanPick = humanPick.toUpperCase();

    addImage("HUMAN", humanPick);

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

        const computerPick = computerPlay();

        const winner = playRound(humanPick, computerPick);

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

function addImage(player, choice) {
    
    let playerImg;

    if (player == "HUMAN") {
        playerImg = document.querySelector('#human-choice');
    } else {
        playerImg = document.querySelector('#computer-choice');
    }

    if (choice == "ROCK"){
        playerImg.innerHTML = `<img src="images/rock.png">`;
    } else if (choice == "PAPER") {
        playerImg.innerHTML = `<img src="images/paper.png">`;
    } else if (choice == "SCISSOR") {
        playerImg.innerHTML = `<img src="images/scissor.png">`;
    }
}

let humanPick;
let computerCount = 0, humanCount = 0;
let beenHere = false;


const humanChoice = document.getElementById("human-choice");
const computerChoice = document.getElementById("computer-choice");

addImage("HUMAN","ROCK");
addImage("COMPUTER", "ROCK");

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
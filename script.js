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
        return "You win! " + humanPick + " beats " + computerPick + ".";
    }
    else if (result == false) {
        return "You lose! " + humanPick + " loses to " + computerPick + ".";
    }

}

function game() {

    
    for (let i = 0; i < 5; i++){
        let humanPick = prompt("Choose between Rock-Paper-Scissor");
        console.log(playRound(humanPick, computerPlay()));
    }
}


game();
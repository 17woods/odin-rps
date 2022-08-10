function computerPlay() {
    let compNum = Math.floor(Math.random() * 3);

    switch(compNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissors";
        default:
            return "E0";
    }
}

function play(playerChoice) {
    let compChoice = computerPlay();

    if (playerChoice === compChoice) {
        return 2;
    };

    if (playerChoice == "rock") {
        if (compChoice == "paper") {
            return 1;
        } else if (compChoice == "scissors") {
            return 0;
        } else {return 3;}
    }

    if (playerChoice == "paper") {
        if (compChoice == "rock") {
            return 0;
        } else if (compChoice == "scissors") {
            return 1;
        } else {return 3;}
    }

    if (playerChoice == "scissors") {
        if (compChoice == "rock") {
            return 1;
        } else if (compChoice == "paper") {
            return 0;
        } else {return 3;}
    }
}

function pick() {
    let compPoints = document.querySelector(".compPoints");
    let playerPoints = document.querySelector(".playerPoints");
    let tieTally = document.querySelector(".ties");
    let win = document.querySelector(".win")

    result = play(this.innerHTML.toLowerCase());

    console.log("result", result);

    switch(result) {
        case 0:
            pPoints += 1;
            console.log("p win");
            playerPoints.innerHTML = `Player: ${pPoints}`;
            break;
        case 1:
            cPoints += 1;
            console.log("c win");
            compPoints.innerHTML = `Computer: ${cPoints}`;
            break;
        case 2:
            ties += 1;
            console.log('tie');
            tieTally.innerHTML = `Ties: ${ties}`;
            break;
        case 3:
            console.log("AAAAAAAAAAAAAA", );
    }

    if (pPoints == 5) {
        win.innerHTML = "YOU WIN!";
    } else if (cPoints == 5) {
        win.innerHTML = "COMPUTER WIN !";
    }

    return 0;
}

function main() {
    const btnR = document.querySelector(".btnR");
    const btnP = document.querySelector(".btnP");
    const btnS = document.querySelector(".btnS");

    btnR.addEventListener("click", pick);
    btnP.addEventListener("click", pick);
    btnS.addEventListener("click", pick);
}

let pPoints = 0;
let cPoints = 0;
let ties = 0;
let result = [];

main()
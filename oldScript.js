function capitalize(str) {
    return (str[0].toUpperCase() + str.slice(1));
}

function computerPlay() {
    const compNum = Math.floor(Math.random() * 3);
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

function play(playerChoice="rock") {
    let compChoice = computerPlay().toLowerCase();

    playerChoice = playerChoice.toLowerCase();

    if (compChoice === playerChoice) {
        return 2;
    }
    
    if (playerChoice == "rock") {
        if (compChoice == "paper") {
            return 0;
        } else if (compChoice == "scissors") {
            return 1;
        }
    } else if (playerChoice == "paper") {
        if (compChoice == "rock") {
            return 1;
        } else if (compChoice == "scissors") {
            return 0;
        }
    } else if (playerChoice == "scissors") {
        if (compChoice == "rock") {
            return 0;
        } else if (compChoice == "paper") {
            return 1;
        }
    }
}

function pick() {
    play(this.innerHTML.toLowerCase());
}

function game() {
    let pPoints = 0;
    let cPoints = 0;
    let result = [];
    let cChoice = computerPlay().toLowerCase();
    let pChoice = "rock"; //prompt("Enter: ")

    const btnR = document.querySelector(".btnR");
    const btnP = document.querySelector(".btnP");
    const btnS = document.querySelector(".btnS");

    btnR.addEventListener("click", pick);
    btnP.addEventListener("click", pick);
    btnS.addEventListener("click", pick);

    console.log(result);

    // result = play(cChoice, pChoice);
    
    switch(result) {
        case 0:
            cPoints += 1;
            console.log(`You win the round! ${capitalize(pChoice)} beats ${cChoice}!`);
        case 1:
            pPoints += 1;
            console.log(`You lose the round! ${capitalize(pChoice)} loses to ${cChoice}!`);
        case 2:
            console.log(`A tie! You both picked ${pChoice.ca}!`);
    }

    console.log(result, cPoints, pPoints);
}

//const btnR = document.querySelector("#btnR");
//const btnP = document.querySelector("#btnP");
//const btnS = document.querySelector("#btnS");

//document.getElementById("btnR").addEventListener("click", play)

//btnR.addEventListener("click", );
//btnP.addEventListener("click", play);
//btnS.addEventListener("click", play);

//console.log(btnR);

console.log(game());
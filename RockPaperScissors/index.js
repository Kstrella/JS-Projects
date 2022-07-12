//# for id
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
// . for class
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

//for each button on click we see what we played then call for computer to go
choiceBtns.forEach(button => button.addEventListener("click",() => {

    player = button.textContent;
    computerTurn();

    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();

}));

//picks a random value of 3 choices and with a switch we pair it to an option
function computerTurn()
{
    const randNum = Math.floor(Math.random()*3)+1;

    switch(randNum)
    {
        case 1:
            computer = "ROCK"
            break;
        
        case 2:
            computer = "PAPER"
             break;
    
        case 3:
            computer = "SCISSORS"
            break;

    }
}

function checkWinner()
{
    if(player == computer)
    {
        return "Draw!"
    } 
    else if(computer == "ROCK")
    {
        return(player =="PAPER")?"You Win!" : "You Lose!"
    }
    else if(computer == "PAPER")
    {
        return(player =="SCISSORS")?"You Win!" : "You Lose!"
    }
    else if(computer == "SCISSORS")
    {
        return(player =="ROCK")?"You Win!" : "You Lose!"
    }
}
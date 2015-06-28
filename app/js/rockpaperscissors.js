////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
   return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = 'tie'
    } else if (playerMove === 'rock' && computerMove === 'scissors') {
        winner = 'player'
    } else if (playerMove === 'paper' && computerMove === 'rock') {
        winner = 'player'
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
        winner = 'player'
    } else {
        winner = 'computer'
    }
    return winner;
}

function playToFive() {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
  while (playerWins < 5 && computerWins < 5) {
     var playerMove = getPlayerMove();
     var computerMove = getComputerMove();
        if (getWinner(playerMove,computerMove) === 'tie')  {
            console.log('No one won');
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
            console.log('It is a tie!');
            console.log('Player: ' + playerWins + '. Computer: ' + computerWins );
        }
        else if (getWinner(playerMove,computerMove) === 'player')  {
            console.log('Player chose ' + playerMove + '. Computer chose ' + computerMove);
            console.log('Player wins!');
            playerWins += 1;
            console.log('Player: ' + playerWins + '. Computer: ' + computerWins );
        }
        else if (getWinner(playerMove,computerMove) === 'computer')  {
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
            console.log('Computer wins!');
            computerWins += 1;
            console.log('Player: ' + playerWins + '. Computer: ' + computerWins );
        }
    }
}

playToFive()

// element to show the message of the outcome
let message = document.getElementById('message');
// element to show the score
let score = document.getElementById('score');
// to select all the buttons in the class selections
let buttons = document.getElementsByClassName('selections');
// element to assign a different function to the reset button
let resetBtn = document.getElementById('reset');
// element to update the score
let winnerScores = [0, 0];

//add event listeners to buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', playGame);
}
resetBtn.addEventListener('click', restart);

function playGame(choice) {
    // setup player's selection: get the text of the target that triggers the event
    let playerSelection = choice.target.innerText;
    // setup a random number to select for computer
    // selects a number between 0 and 1 (1 not-inclusive)
    let computerSelection = Math.random();

    // if computerSelection is less than .2, computer selects rock
    if (computerSelection < .2) {
        computerSelection = 'Rock';
    }
    // if computerSelection is less than .4 or equal to .4, computer selects paper
    else if (computerSelection <= .4) {
        computerSelection = 'Paper';
    }
    // if computerSelection is less than .6 or equal to .6, computer selects scissors
    else if (computerSelection <= .6) {
        computerSelection = 'Scissors';
    }
    // if computerSelection is less than .8 or equal to .8, computer selects scissors
    else if (computerSelection <= .8) {
        computerSelection = 'Lizard';
    }
    // if none of the above is applicable, computer selects spock
    else {
        computerSelection = 'Spock';
    }

    //setup a function to check the winner and return result
    let result = checkWinner(playerSelection, computerSelection);

    function checkWinner(player, computer) {
        if (player === computer) {
            return 'draw';
        } else if (player === 'Rock') {
            if (computer === 'Scissor' || computer === 'Lizard') {
                return 'player';
            } else {
                return 'computer';
            }
        } else if (player === 'Paper') {
            if (computer === 'Rock' || computer === 'Spock') {
                return 'player';
            } else {
                return 'computer';
            }
        } else if (player === 'Scissors') {
            if (computer === 'Paper' || computer === 'Lizard') {
                return 'player';
            } else {
                return 'computer';
            }
        } else if (player === 'Spock') {
            if (computer === 'Scissors' || computer === 'Rock') {
                return 'player';
            } else {
                return 'computer'
            }
        } else if (player === 'Lizard') {
            if (computer === 'Paper' || computer === 'Spock') {
                return 'player';
            } else {
                return 'computer'
            }
        }

    }

//output scores to the DOM
    if (result === 'player') {
        result += ' wins!';
        //update score
        winnerScores[0]++;
    }

    if (result === 'computer') {
        result += ' wins!';
        winnerScores[1]++;
    }

    if (result === 'draw') {
        result += ". It's a tie!"
    }

//output score into Score DIV
    score.innerHTML = 'Player: [ ' + winnerScores[0] + ' ] Computer: [ ' + winnerScores[1] + ' ]';

//output player and computer's selections
    messenger('Player: <strong>' + playerSelection + '</strong> Computer: <strong>' + computerSelection + '</strong><br>' + result);
}
// function for the reset button
function restart() {
    winnerScores = [0, 0];
}
// to display the message
function messenger(selectionMessage) {
    message.innerHTML = selectionMessage;
}


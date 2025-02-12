{
let playerScore=0

let computerScore=0

const buttonRock=document.getElementById('button-rock');

const buttonPaper=document.getElementById('button-paper');

const buttonScissors=document.getElementById('button-scissors');

    const getMoveName = (argMoveId) => {
        //console.log('wywolano funkcje getMoveName z argumentem '+ argMoveId);
        if (argMoveId=='1') {
            return 'kamien';
            }
            else if (argMoveId=='2') {
                return 'papier';
            }
            else if (argMoveId=='3') {
                return 'nozyce';
            }
            else {
            printMessage ('Nie znam ruchu o id ' + argMoveId+' Zakładam, że chodziło ci o kamien')
            return 'kamien'
        }
    }

    const displayResult= (argPlayerMove, argComputerMove) => {
        //console.log ('wywolano funckcje displayResult z argumentami:' + argPlayerMove + ',' + argComputerMove)
        if (argPlayerMove =='papier' && argComputerMove=='kamien') {
            printMessage('Wygrywasz!');
            playerScore++
        }   else if (argPlayerMove=='kamien' && argComputerMove=='nozyce') {
            printMessage('Wygrywasz!');
            playerScore++
        }   else if (argPlayerMove=='nozyce' && argComputerMove=='papier'){
            printMessage('Wygrywasz!');
            playerScore++
        }   else if (argComputerMove==argPlayerMove) {
            printMessage('Mamy remis');
        }
            else {
            printMessage('Przegrywasz :(');
            computerScore++
        }
        document.getElementById('score-display').textContent=`${playerScore}-${computerScore}`

        printMessage('Zagrałem ' + argComputerMove + ' a Ty ' + argPlayerMove);

    };

    const buttonClicked = (playerMove) => {
        clearMessages();
        console.log(playerMove +' został kliknięty!(ruch gracza)');

        const randomNumber=Math.floor(Math.random()*3+1);
        console.log('Wylosowana liczba to: '+ randomNumber)
        const computerMove=(getMoveName(randomNumber));
        console.log('ruch komputera to: '+ computerMove);

        displayResult(playerMove, computerMove);
    };

    buttonRock.addEventListener('click',() =>{buttonClicked('kamien')});

    buttonPaper.addEventListener('click', () =>{buttonClicked('papier')});

    buttonScissors.addEventListener('click', () =>{buttonClicked('nozyce')});

}


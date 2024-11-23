



var argButtonName, buttonRock, buttonPaper, buttonScissors;

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName+' został kliknięty!');
    function getMoveName (argMoveId) {
        console.log('wywolano funkcje getMoveName z argumentem '+ argMoveId);
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
    
    
    function displayResult (argPlayerMove, argComputerMove) {
        console.log ('wywolano funckcje displayResult z argumentami:' + argPlayerMove + ',' + argComputerMove)
        if (argPlayerMove =='papier' && argComputerMove=='kamien') {
            printMessage('Wygrywasz!');
        }   else if (argPlayerMove=='kamien' && argComputerMove=='nozyce') {
            printMessage('Wygrywasz!');
        }   else if (argPlayerMove=='nozyce' && argComputerMove=='papier'){
            printMessage('Wygrywasz!');
        }   else if (argComputerMove==argPlayerMove) {
            printMessage('Mamy remis');
        }
            else {
            printMessage('Przegrywasz :(');
        }   
        printMessage('Zagrałem ' + argComputerMove + ' a Ty ' + argPlayerMove);
    }
    
    
    playerMove = argButtonName
    console.log('ruch gracza to: '+ playerMove);
    randomNumber=Math.floor(Math.random()*3+1);
    console.log('Wylosowana liczba to: '+ randomNumber)
    computerMove=(getMoveName(randomNumber));
    console.log('ruch komputera to: '+ computerMove);
    
    displayResult(playerMove, computerMove);
};

buttonRock=document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){buttonClicked('kamien')});

buttonPaper=document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){buttonClicked('papier')});

buttonScissors=document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){buttonClicked('nozyce')});
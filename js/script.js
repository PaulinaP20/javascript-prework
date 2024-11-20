
var computerMove, randomMove;
randomNumber=Math.floor(Math.random() *3+1);
console.log('wylosowana liczba to:'+ randomNumber);
if (randomNumber=='1'){
    computerMove='kamien';
}   else if (randomNumber=='2') {
    computerMove='papier';
}   else if (randomNumber=='3'){
    computerMove='nozyce'
}
printMessage('Moj ruch: ' + computerMove)


var playerMove, playerInput;
playerInput=prompt('wybierz swoj ruch:1:kamien, 2:papier, 3:nozyce.');
console.log('Wpisana odpowiedz to:'+ playerInput);
if (playerInput=='1') {
    playerMove='kamien';
}   else if (playerInput=='2') {
    playerMove='papier';
}   else if (playerInput=='3') {
    playerMove='nozyce';
}   else {
    playerMove='bledny wybor';
}
printMessage('Twoj ruch: '+ playerMove)
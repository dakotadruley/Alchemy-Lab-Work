fucntion computerThrow () {
const randomNumber = Math.floor(Math.random() * 3);
return getThrowFromNumber(randomNumber);
}

function getTrhowFromNumber (number) {
    if (number === 0) return 'rock';
    if (number === 1) return 'paper';
    if(number === 2) return 'scissors';
}

function checkResult (player, computer) {
    


}
export default function checkResult(player, computer) {
    if (player === 'rock' && computer === 'rock') {
        return 'draw';
    } else if (player === 'paper' && computer === 'rock') {
        return 'win';
    } else if (player === 'scissors' && computer === 'rock') {
        return 'lose';
    } else if (player === 'rock' && computer === 'paper') {
        return 'lose';
    } else if (player === 'paper' && computer === 'paper') {
        return 'draw';
    } else if (player === 'scissors' && computer === 'paper') {
        return 'win';
    } else if (player === 'rock' && computer === 'scissors') {
        return 'win';
    } else if (player === 'paper' && computer === 'scissors') {
        return 'lose';
    } else if (player === 'scissors' && computer === 'scissors') {
        return 'draw';
    }}


// to make dry
 // create septerate if statement for draw
 // then if and else ifs for just wins 
 // then else loss
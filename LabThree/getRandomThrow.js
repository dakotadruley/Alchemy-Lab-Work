export default function getRandomThrow() {
    const randomNumber = Math.floor(Math.random() * 3);
    let number = randomNumber;

    console.log(number);

    if (number === 1) {
        return 'rock';
    } else if (number === 2) {
        return 'paper';
    } else return 'scissors';
}
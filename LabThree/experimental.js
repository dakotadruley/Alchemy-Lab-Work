window.onload=function(){

    import { computerThrow, checkResult } from './get-random-throw.js';
    

    const userRock =document.querySelector('input:checked');
    const userPaper = document.querySelector('input:checked');
    const userScissors = document.querySelector('input:checked');

   
    const playButton = document.getElementById('playSubmit');
    alert(playButton);
    const resetButton = document.getElementById('resetSubmit');

    const gamesDisplay = document.getElementById('games');
    const winDisplay = document.getElementById('wins');

    let winTotal = 0;
    let gameTotal = 0;
    let drawTotal = 0;

   // playButton.addEventListener('click', play ();

        //const userInput = 

        //const userChoice = userInput.value;

        //const computerChoice = getRandomThrow();
}
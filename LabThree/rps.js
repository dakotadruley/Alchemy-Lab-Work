window.onload=function(){

    import { getRandomThrow, checkResult } from './get-random-throw.js';


    const resultDisplay = document.getElementById('games');
    const button = document.getElementById('playSubmit');
    const resultImage = document.getElementById('');
    const winsDisplay = document.getElementById('wins');
    const lossesDisplay = document.getElementById('losses');
    const drawsDisplay = document.getElementById('draws');

    let winTotal = 0;
    let gameTotal = 0;
    let drawTotal = 0;

    button.addEventListener('click', () => {
        alert('works');

        const userInput = document.querySelector('input:checked');

         const userChoice = userInput.value;
    //alert(userChoice);

        const computerChoice = getRandomThrow();

        const result = checkResult(userChoice, computerChoice);
        
        if(computerChoice === 'rock')  resultImage.src="https://www.wickedhorror.com/wp-content/uploads/2019/08/The-Rock-864x467.jpg";

        if(computerChoice === 'scissors')  resultImage.src="https://www.wweek.com/resizer/86tt-U3ytIrtb7bBYXAIg7XWz7A=/1200x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/wweek/wp-content/uploads/2019/08/30145212/Nicolas-Cage.jpg";
        
        if(computerChoice === 'paper') 
        resultImage.src="https://cdn.britannica.com/97/194197-050-5BD88874/Vin-Diesel-The-Fast-and-the-Furious.jpg";
  
        if(resluts === 'win') {
            winTotal++;
            wins.textContent = winTotal;
            resultDisplay.classList.remove('hidden');
            .textContent =
        }
        

    })
}
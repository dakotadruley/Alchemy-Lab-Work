import getRandomThrow from './getRandomThrow.js';

    const button = document.getElementById('my-button');
    const resetButton = document.getElementById('reset-button');

    const sumamarySpan = document.getElementById('summary');
    const resultsDisplay = document.getElementById('result');
    const winsDisplay = document.getElementById('wins');
    const lossesDisplay = document.getElementById('losses');
    const drawsDisplay = document.getElementById('draws');

    const rockGet = document.getElementById('rock');
    const paperGet = document.getElementById('paper');
    const scissorsGet = document.getElementById('scissors');

    const rockPaperScissors = {
        rock: 1,
        paper: 2,
        scissors: 3,
    };
  
    let winsCounter = 0;
    let lossesCounter = 0;
    let drawsCounter = 0;

    resetButton.addEventListener('click', () => {
        winsDisplay = 0;
        lossesDisplay = 0;
        drawsDisplay = 0;
        sumamarySpan.classList.add('hidden');
        
    })

    button.addEventListener('click', () => {
        alert('button works, good news');

        const selectedRadioButton = document.querySelector('input:checked');

        const userThrow = selectedRadioButton.value;

        const randomNumber = Math.floor(Math.random() * 3);

        let number = randomNumber 



    // let options = [{rock : 1}, {paper : 2}, {scisssors: 3}];

    //   switch (userThrow === rock) {
    //       case 1: number === option[0].value;
    //       return this.console.log('here');
    //      break;
    //      case 2: number === option[1].value;
    //        return this.console.log('here');
    //       break;
    //      case 3: number === option[2].value;
    //      return this.console.log('here');
    //      break;
    //      default : null;
     //   }

        //let rockThrow = rock;
        //let paperThrow = paper;
        //let scissorsThrow = scissors;

        //let outcomes = [{rockThrow : 0}, {papaerThrow : 1}, {scissorsThrow : 2}];

        
        if(computerThrow === 'rock')  resultImage.src="https://www.wickedhorror.com/wp-content/uploads/2019/08/The-Rock-864x467.jpg";

        if(computerThrow === 'scissors')  resultImage.src="https://www.wweek.com/resizer/86tt-U3ytIrtb7bBYXAIg7XWz7A=/c1200x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/wweek/wp-content/uploads/2019/08/30145212/Nicolas-Cage.jpg";
        
        if(computerThrow === 'paper') 
        resultImage.src="https://cdn.britannica.com/97/194197-050-5BD88874/Vin-Diesel-The-Fast-and-the-Furious.jpg";
  
        if(resluts === 'win') {
            winTotal++;
            wins.textContent = winTotal;
            resultDisplay.classList.remove('hidden');
        }
        

    })

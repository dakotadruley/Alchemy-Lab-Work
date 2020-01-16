const beginButton = document.getElementById('submit');

let amountBank = document.getElementById('amountCount');
 
let tooHighText = document.getElementById('tooHigh');

let tooLowText = document.getElementById('tooLow');

let winnerText = document.getElementById('win');

let loseText = document.getElementById('lose')

const number = Math.floor(Math.random()*10);

 beginButton.addEventListener ('click', () => {
    console.log('woooooo!')
    
    amountBank.textContent--;

      let guess = document.getElementById("guess").value;
    
      if (number > guess) {
            tooHighText.textContent = 'Too High';

         } else if (number < guess) {
          tooLow.textContent = 'Too Low';
    
             } else {
             alert ("Perfect!");
            
             };
    
    //     //alert ("The number was " + number);
    
        
    });
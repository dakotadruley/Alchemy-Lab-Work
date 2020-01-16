

var wacky = document.getElementById("userInput");
if (wacky){
    wacky.addEventListener("click", guessThis);
};


function guessThis (){
    let userAttempts = 5;
    let number = Math.random() * 10;
        if (number > userNumber) {
           // spanobj.textContent = "too many integers, try again";
    } else if (number < userNumber) {
        //spanobj.textContent = 'Too few integers,try again';
        } else {
 //spanobj.textContent = "Winner, winner!!!!";
        };
    };
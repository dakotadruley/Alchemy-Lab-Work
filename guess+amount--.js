<html>
<body>



  <!-- THIS WORKS!! -->




<form method="get" onsubmit="return myFunction()">
  <p>Guess a number between 0-10</p>
  Your Guess: <input type="text" id="guess" size="2" name="guess"><br>
  <input type="submit" value="Submit">
    <span id="amountCount"></span>
</form>

<script>

let remainingGuessText = document.getElementById('remainingGuess');

let amountCount = 5;



function myFunction() {
  
  var number = Math.floor(Math.random()*10);
  var guess = document.getElementById("guess").value;

  if (number > guess) {
           alert ("Too Low!");
           amountCount--;
           amountCount.value = remainingGuessText.textcontent
           
    } else if (number < guess) {
           alert ("Too High!");
           amountCount--;
           amountCount.value = remainingGuessText.textcontent
        
        } else {
          alert ("Perfect!");
        
        };

    alert ("The number was " + number);

    
}
</script>

</body>
</html>

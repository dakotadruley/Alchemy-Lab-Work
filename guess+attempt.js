<html>
<body>


<form method="get" onsubmit="return theWholeEnchilada()">
  <p>Guess a number between 0-10</p>
  Your Guess: <input type="text" id="guess" size="2" name="guess"><br>
  <input type="submit" value="Submit">
</form>

<script>
function theWholeEnchilada.floor(Math.random()*10);
  var guess = document.getElementById("guess").value;

var attemptTotal = 5;
var attemptTry = 1;

    while ( attemptTry > attemptTotal; )

  if (number > guess) {
           alert ("Too Low!");
           attemptTry++

    } else if (number < guess) {
           alert ("Too High!");
           attemptTry++
        
        } else {
          alert ("Perfect!");
          attemptTry = 6
        
        };

    alert ("The number was " + number);

</script>

</body>
</html>

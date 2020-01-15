const clickClack = document.getElementById('beginButton');
const totalScore = document.getElementById('score');


clickClack.addEventListener('click', quiz()); 

function quiz() {
	
	const name = prompt('Who goes there?!');
	const confermation = confirm(`Is this the path you choose ${name}?`);
	
	if (confermation) { 
	
		alert('Then let it be so! Mwuahahaha!');
		
		
		const answer1 = prompt('Question 1');
		
			 function isDog(str) {
  if(str.toLowerCase() === 'dog' || str.toLowerCase() === 'Dog') return true;
  else return false;
			 }

		
		const answer2 = prompt('Question 2');
		
			function isFantasy(str) {
  if(str.toLowerCase() === 'Fantasy' || str.toLowerCase() === 'fantasy') return true;
  else return false;
			}
		
		const answer3 = prompt('Question 3');
	
		function isJazz(str) {
  if(str.toLowerCase() === 'All that jazz' || str.toLowerCase() === 'all that jazz') return true;
  else return false;
}
	
}


		
		let count = 0
		
		if(isDog(answer1)) count += 1;
		if(isFantasy(answer2)) count += 1;
		if(isJazz(answer3)) count += 1;
		
		total.textContent=`${name}, You win ${count} this time.`;
	}	else	{
					return;
		
	}
}




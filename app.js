const clickClack = document.getElementById('beginButton');
const totalScore = document.getElementById('score');

clickClack.addEventListener('click', quiz()); 

function isDog(str) {
  if(str.toLowerCase() === 'dog' || str.toLowerCase() === 'Dog') return true;
  else return false;
}

function isFantasy(str) {
  if(str.toLowerCase() === 'Fantasy' || str.toLowerCase() === 'fantasy') return true;
  else return false;
}

function isJazz(str) {
  if(str.toLowerCase() === 'All that jazz' || str.toLowerCase() === 'all that jazz') return true;
  else return false;
}

beginButton.addEventListener('click', quiz());


function quiz() {
	
	const name = prompt('Who goes there?!');
	const confermation = confirm('Is this the path you choose ${name}?');
	
	if (confermation) { 
	
		prompt('Then let it be so! Mwuahahaha!');
		const answer1 = prompt('Question 1');
		const answer2 = prompt('Question 2');
		const answer3 = prompt('Question 3');
		
		if(isDog(answer1)) count += 1;
		if(isFantasy(answer2)) count += 1;
		if(isJazz(answer3)) count += 1;
		
		total.textContent=`${name}, You win ${count} this time.`;
	}	else	{
					return;
		
	}
}

let count = 0


const clickClack = document.getElementById('beginButton');
const totalScore = document.getElementById('score');

import isDog
import isJazz
import isFantasy

clickClack.addEventListener('click', quiz()); 


beginButton.addEventListener('click', quiz());


function quiz() {
	
	const name = prompt('Who goes there?!');
	const confermation = confirm(`Is this the path you choose ${name}?`);
	
	if (confermation) { 
	
		alert('Then let it be so! Mwuahahaha!');
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


const clickClack = document.getElementById('beginButton');
const totalScore = document.getElementById('score');

clickClack.addEventListener('click', quiz()); 

function quiz() {
	
	const name = prompt('Who goes there?!');
	const confirmation = confirm('Is this the path you choose ${name}?');
	
	if (confirmation) { 
	
		prompt('Then let it be so! Mwuahahaha!');
		
	}	else	{
					return;
		
	}
}

let count = 0


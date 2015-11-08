
// Question 1
function banjoQ() {
	var banjo = prompt('Can I play the banjo?'); 	// asks the question
	banjo = banjo.toLowerCase();					// makes the answer lowercase to prevent capitalization errors
	console.log("banjo variable set to " + banjo);  // console logs the answer
	var el = document.getElementById('firstAlert');	// in the HTML element with id = firstAlert, do the following:

	if (banjo === "no" || banjo === "n") {
		el.innerHTML = 'Excellent guess! I can\'t play the banjo, but I can play a little guitar.';
	}
	else {
		el.innerHTML = 'Sorry, that is incorrect!';
	}												// if-else statement returns the appropriate response based on the answer.

}

//Question 2
function hometownQ() {
	var home = prompt('Did I grow up in the Napa Valley?');
	home = home.toLowerCase();
	console.log("home variable set to " + home);
	var el = document.getElementById('secondAlert');

	if (home === "yes" || home === "y") {
		el.innerHTML = 'You are correct! Have a glass of wine to celebrate.';
	}
	else {
		el.innerHTML = 'Sorry, that is not the right answer. No wine for you.';
	}
}

//Question 3
function comicsQ() {
	var comics = prompt('Do I like Marvel comics better than DC comics?');
	comics = comics.toLowerCase();
	console.log("comics variable set to " + comics);
	var el = document.getElementById('thirdAlert');
	
	if (comics === "yes" || comics === "y") {
		el.innerHTML = 'Good job! Captain America salutes you!';
	}
	else {
		el.innerHTML = 'You have chosen... poorly. For your foolishness, Thor bops you on the head with his hammer.';
	} 
}

//Question 4
function jerseyQ() {
	var jerseyNumber = prompt('What is my number on my softball jersey?');
	console.log('jerseyNumber variable set to ' + jerseyNumber);
	var el = document.getElementById('fourthAlert');
	
	if (jerseyNumber == 25) {
		el.innerHTML = 'That is correct! Great guess!';
	}
		else if (jerseyNumber > 25) {
			el.innerHTML = 'Sorry that guess is too high';
		}
		else if (jerseyNumber < 25) {
			el.innerHTML = 'Nope. Your guess is too low!';
		}
	else {
		el.innerHTML = 'I\'m sorry, but I don\'t think you entered a valid number.';
	}
}

//Question 5
function foodQ() {
	var faveFood = prompt('Are enchiladas my favorite food?');
	faveFood = faveFood.toLowerCase(); 
	console.log('faveFood variable set to ' + 'faveFood');
	var el = document.getElementById('fifthAlert');
	
	if (faveFood === 'yes' || faveFood === 'y') {
		el.innerHTML = 'You\'re correct! If you know a good place for enchiladas in Seattle, be sure to let me know!';
	}
	else {
		el.innerHTML = 'That is incorrect. I luuuuuuuv enchiladas!';
	}
}

//Question 6
function seattleAgeQ() {
	var seattleAge = prompt('How old was I when I moved to Seattle?');
	console.log('seattleAge variable set to ' + seattleAge);
	var el = document.getElementById('sixthAlert');

	if (seattleAge == 24) {
		el.innerHTML = 'You got it! Nice work.';
	}
		else if (seattleAge > 24) {
			el.innerHTML = 'Sorry that guess is too high';
		}
		else if (seattleAge < 24) {
			el.innerHTML = 'Nope. Your guess is too low!';
		}
	else {
		el.innerHTML = 'I\'m sorry, but I don\'t think you entered a valid number.';
	}
}

banjoQ();
hometownQ();
comicsQ();
jerseyQ();
foodQ();
seattleAgeQ();
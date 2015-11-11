
// Questions array
var questions = [
	'Can I play the banjo?',
	'Did I grow up in the Napa Valley?',
	'Do I like Marvel comics better than DC comics?',
	'What is my number on my softball jersey?',
	'Are enchiladas my favorite food?',
	'How old was I when I moved to Seattle?' ];

var answers = ['yes','y','no','n', 25, 24];

//Question 1
function banjoQ() {
	var banjo = prompt(questions[0]); 	// asks the question
	banjo = banjo.toLowerCase();					// makes the answer lowercase to prevent capitalization errors
	console.log("banjo variable set to " + banjo);  // console logs the answer
	var el = document.getElementById('firstAlert');

	if (banjo == answers[2] || banjo == answers[3]) {
		el.innerHTML = 'Excellent guess! I can\'t play the banjo, but I can play a little guitar.<br /><img src = "images/spock.jpg" />';
		el.className = 'right';
	}
	else {
		el.textContent = 'Sorry, that is incorrect!';
		el.className ='wrong';
	}												// if-else statement returns the appropriate response based on the answer.

};

//Question 2
function hometownQ() {
	var home = prompt('Did I grow up in the Napa Valley?');
	home = home.toLowerCase();
	console.log("home variable set to " + home);
	var el = document.getElementById('secondAlert');

	if (home === answers[0] || home == answers[1]) {
		el.innerHTML = 'You are correct! Have a glass of wine to celebrate.<br /><img src = "images/picard.jpg" />';
		el.className = 'right';
	}
	else {
		el.textContent = 'Sorry, that is not the right answer. No wine for you.';
		el.className = 'wrong';
	}
}

//Question 3
function comicsQ() {
	var comics = prompt('Do I like Marvel comics better than DC comics?');
	comics = comics.toLowerCase();
	console.log("comics variable set to " + comics);
	var el = document.getElementById('thirdAlert');
	
	if (comics == answers[0] || comics == answers[1]) {
		el.innerHTML = 'Good job! Captain America salutes you!<br /><img src = "images/cap.jpg" />';
		el.className = 'right';
	}
	else {
		el.textContent = 'You have chosen... poorly. For your foolishness, Thor bops you on the head with his hammer.';
		el.className = 'wrong';
	} 
}

//Question 4
function jerseyQ() {
	var jerseyNumber = prompt('What is my number on my softball jersey?');
	console.log('jerseyNumber variable set to ' + jerseyNumber);
	var el = document.getElementById('fourthAlert');
	
	if (jerseyNumber == answers[4]) {
		el.innerHTML = 'That is correct! Great guess!<br /><img src = "images/picard.jpg" />';
		el.className = 'right';
	}
		else if (jerseyNumber > answers[4]) {
			el.textContent = 'Sorry that guess is too high';
			el.className = 'wrong';
		}
		else if (jerseyNumber < answers[4]) {
			el.textContent = 'Nope. Your guess is too low!';
			el.className = 'wrong';
		}
	else {
		el.textContent = 'I\'m sorry, but I don\'t think you entered a valid number.';
		el.className = 'wrong';
	}
}

//Question 5
function foodQ() {
	var faveFood = prompt('Are enchiladas my favorite food?');
	faveFood = faveFood.toLowerCase(); 
	console.log('faveFood variable set to ' + 'faveFood');
	var el = document.getElementById('fifthAlert');
	
	if (faveFood == answers[0] || faveFood == answers[1]) {
		el.innerHTML = 'You\'re correct! If you know a good place for enchiladas in Seattle, be sure to let me know!<br /><img src = "images/spock.jpg" />';
		el.className = 'right';	
	}
	else {
		el.textContent = 'That is incorrect. I luuuuuuuv enchiladas!';
		el.className = 'wrong';
	}
}

//Question 6
function seattleAgeQ() {
	var seattleAge = prompt('How old was I when I moved to Seattle?');
	console.log('seattleAge variable set to ' + seattleAge);
	var el = document.getElementById('sixthAlert');

	if (seattleAge == answers[5]) {
		el.innerHTML = 'You got it! Nice work.<br /><img src = "images/picard.jpg" />';
		el.className = 'right';
	}
		else if (seattleAge > answers[5]) {
			el.textContent = 'Sorry that guess is too high';
			el.className = 'wrong';
		}
		else if (seattleAge < answers[5]) {
			el.textContent = 'Nope. Your guess is too low!';
			el.className = 'wrong';
		}
	else {
		el.textContent = 'I\'m sorry, but I don\'t think you entered a valid number.';
		el.className = 'wrong';
	}
}

banjoQ();
hometownQ();
comicsQ();
jerseyQ();
foodQ();
seattleAgeQ(); 
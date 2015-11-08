
// Question 1
function banjoQ() {
	var banjo = prompt('Can I play the banjo?');
	banjo = banjo.toLowerCase();
	console.log("banjo variable set to " + banjo);

	if (banjo === "no" || banjo === "n") {
		alert("Excellent guess! I can't play the banjo, but I can play a little guitar.");
	}
	else {
		alert("Sorry, that is incorrect!");
	}
}

//Question 2
function hometownQ() {
	var home = prompt('Did I grow up in the Napa Valley?');
	home = home.toLowerCase();
	console.log("home variable set to " + home);

	if (home === "yes" || home === "y") {
		alert("You are correct! Have a glass of wine to celebrate.");
	}
	else {
		alert("Sorry, that is not the right answer. No wine for you.");
	}
}

//Question 3
function comicsQ() {
	var comics = prompt('Do I like Marvel comics better than DC comics?');
	comics = comics.toLowerCase();
	console.log("comics variable set to " + comics);
	
	if (comics === "yes" || comics === "y") {
		alert("Good job! Captain America salutes you!");
	}
	else {
		alert("You have chosen... poorly. For your foolishness, Thor bops you on the head with his hammer.");
	} 
}

//Question 4
function jerseyQ() {
	var jerseyNumber = prompt('What is my number on my softball jersey?');
	console.log('jerseyNumber variable set to ' + jerseyNumber);
	
	if (jerseyNumber == 25) {
		alert('That is correct! Great guess!');
	}
		else if (jerseyNumber > 25) {
			alert("Sorry that guess is too high");
		}
		else if (jerseyNumber < 25) {
			alert('Nope. Your guess is too low!');
		}
	else {
		alert('I\'m sorry, but I don\'t think you entered a valid number.');
	}
}

//Question 5
function foodQ() {
	var faveFood = prompt('Are enchiladas my favorite food?');
	faveFood = faveFood.toLowerCase(); 
	console.log('faveFood variable set to ' + 'faveFood');
	
	if (faveFood === 'yes' || faveFood === 'y') {
		alert('You\'re correct! If you know a good place for enchiladas in Seattle, be sure to let me know!');
	}
	else {
		alert('That is incorrect. I luuuuuuuv enchiladas!');
	}
}

//Question 6
function seattleAgeQ() {
	var seattleAge = prompt('How old was I when I moved to Seattle?');
	console.log('seattleAge variable set to ' + seattleAge);

	if (seattleAge == 24) {
		alert('You got it! Nice work.');
	}
		else if (seattleAge > 24) {
			alert("Sorry that guess is too high");
		}
		else if (seattleAge < 24) {
			alert('Nope. Your guess is too low!');
		}
	else {
		alert('I\'m sorry, but I don\'t think you entered a valid number.');
	}
}

banjoQ();
hometownQ();
comicsQ();
jerseyQ();
foodQ();
seattleAgeQ();
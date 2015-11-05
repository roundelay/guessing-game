var banjo = prompt('Can I play the banjo?');
console.log("banjo variable set to " + banjo);
if (banjo === "yes" || banjo === "y" || banjo === "Yes" || banjo === "Y"|| banjo === "YES") {
	alert("Sorry, that is incorrect!");
}
else {
	alert("Excellent guess! I can't play the banjo, but I can play a little guitar.");
}
var home = prompt('Did I grow up in the Napa Valley?');
console.log("home variable set to " + home);
if (home === "yes" || home === "y" || home === "Yes" || home === "Y"|| home === "YES") {
	alert("You are correct! Have a glass of wine to celebrate.");
}
else {
	alert("Sorry, that is not the right answer. No wine for you.");
}
var comics = prompt('Do I like Marvel comics better than DC comics?');
console.log("comics variable set to " + comics);
if (comics === "yes" || comics === "y" || comics === "Yes" || comics === "Y" || comics === "YES") {
	alert("Good job! Captain America salutes you!");
}
else {
	alert("You have chosen... poorly. For your foolishness, Thor bops you on the head with his hammer.");
} 
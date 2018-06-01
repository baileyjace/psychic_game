
// setting up the array of letters
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// global variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;

// an array to hold the letters the user chose
var yourChoice = [];

// the user's choice
var userGuess = null;

// computer randomly picks a letter from the alphabet array
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];


// here we go! the magic starts
document.onkeyup = function(event) {

	// the user can pick any key from the array too
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    // nifty thing i found via google, prevents the user from hitting other 
    // keys on the keyboard AND from picking the same key twice. cool!!!
	if (yourChoice.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
        // logs the user's choice into yourChoice array
        yourChoice[yourChoice.length]=userGuess;
		// guesses left decreases with each key pressed
		guessesLeft--;
	}

    // if the user picks the same letter as the computer, a win is added and the game
    // refreshes with a new computer choice
	if (computerGuess === userGuess) {
		wins++;
        console.log("You got it!");
        // refreshing the game
		guessesLeft = 10;
		yourChoice = [];
		computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log( " Computer picked: " + computerGuess);
	}

	// if you run out of guessesLeft, the game refreshes with a sad face
	if (guessesLeft === 0) {
		losses++;
        console.log(":-(");
        // refreshing the game
		guessesLeft = 10;
		yourChoice = [];
		computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
		
	}

	// here's how we show the results. this was really annoying for some reason
	var html = "<h4>Wins: " + wins + "</h4>" + "<h4>Losses: " + losses + "</h4>" + "<h4>Guesses Left: " + guessesLeft + "</h4>" + "<h4>Your guesses so far: " + yourChoice + "</h4>";
	
	document.querySelector("#game").innerHTML = html;

}
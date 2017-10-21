// When user repeated incorrect guess which was already guessed, # of guesses remaining stays same.
// When user guesses correct, win count increases and background music changes.
// Reset the game when # of guesses remaining reached out to zero count.
// Alert the result at the end of game.


var bandC = ["c","o","l","d","p","l","a","y"]
var bandT = ["t","o","m","m","i","s","c","h"]
var wins = 0
var guessesRemaining = 15
var lettersGuessed = []


// Game will start by displaying objects when user presses a key.
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		// if ((userGuess === "c") || (userGuess === "o") || 
		// 	(userGuess === "l") || (userGuess === "d") ||
		// 	(userGuess === "p") || (userGuess === "l") ||
		// 	(userGuess === "a") || (userGuess === "y")) {
		if (inputtxt.value.match(bandC))
				wins++;
				guessesRemaining--;
				lettersGuessed.push(userGuess);
				return true;
		}

		else if () {
			guessesRemaining--;
			lettersGuessed.push(userGuess);
			return false;
		}

		else (guessesRemaining < 0) {
			wins = 0;
			guessesRemaining = 15;
			lettersGuessed = [];
			}

	// Record wins, letters already guessed, # of guesses remaining (15 trials). # of guesses remaining will decrease.

	var html = 
	"<h1>Hangman Game</h2>" +
	"<p>Press any key to start playing!" +
	"<p>Wins: " + wins + "</p>" +
	"<p>Words:</p>" +
	"<p>" + 
	"<p>Hints: Name of bands or singers</p>" +
	"<p>Number of Guesses Remaining: " + guessesRemaining + "</p>" +
	"<p>Letters Already Guessed: " + lettersGuessed + "</p>";

	document.querySelector("#hangman-game").innerHTML = html;

	}

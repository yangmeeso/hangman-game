// When user repeated incorrect guess which was already guessed, # of guesses remaining stays same.
// When user guesses correct, win count increases and background music changes.
// Reset the game when # of guesses remaining reached out to zero count.
// Alert the result at the end of game.


var wordsList = ["coldplay", "snowpatrol", "radiohead"];
var chosenWord  = "";
var lettersChosen = [];
// number blaanks
var numBlanks = 0;
var blanksAndSucess = [];
var letterWrong = []


//
var wins = 0;
var loss = 0;
var numGuesses = 10;



function startGame(){
	numGuesses = 10;
	chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
	
	lettersChosen = chosenWord.split("");
	console.log(lettersChosen);

	/*for( var i = 0; i < chosenWord.length; i++){
		lettersChosen.push(chosenWord[i]);
	}*/

	numBlanks = lettersChosen.length;

	console.log(chosenWord);

	blanksAndSucess = [];
	letterWrong  = [];

	for(var i = 0; i < numBlanks; i++){
		blanksAndSucess.push("_");
	}
	console.log(blanksAndSucess);



	document.getElementById("guesses-left").innerHTML = numGuesses;

	document.getElementById("word-blanks").innerHTML = blanksAndSucess.join(" ");

	document.getElementById("wrong-guess").innerHTML = letterWrong.join(" ");


	//['c','o','l','p', 'l', 'a', 'y']
}

// c a t
// c    
// [ 'c' 'a' '_']
function checkLetters(letter){


	var letterInWord = false;
	for(var i = 0; i < numBlanks; i++){
		if(chosenWord[i] === letter){
			letterInWord = true;
		}
	}


	if(letterInWord === true){ // it is found 
		for(var j = 0; j < numBlanks; j++){
			if(chosenWord[j] === letter){
				blanksAndSucess[j] = letter;
			}
		}
	}
	else{ // letterInWord false then wrong
		letterWrong.push(letter);
		numGuesses--;
	}

}



function roundComplete(){
	console.log("Wins: " + wins);
	console.log("Loss: " + loss);
	console.log("Number Guesses: " + numGuesses);

	document.getElementById("guesses-left").innerHTML = numGuesses;


	document.getElementById("word-blanks").innerHTML = blanksAndSucess.join(" ");


	document.getElementById("wrong-guess").innerHTML = letterWrong.join(" ");

	if(lettersChosen.toString() === blanksAndSucess.toString()){
		win++;
		alert("You win");
		document.getElementById("win-counter").innerHTML = win;
		startGame();
	}
	else if(numGuesses === 0){
		loss++;
		alert("You lose");
		document.getElementById("loss-counter").innerHTML = loss;
		startGame()
	}

}


//var wins = 0
//var guessesRemaining = 15


//var lettersWrong = [];



startGame();
// Game will start by displaying objects when user presses a key.
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	checkLetters(userGuess);

	roundComplete();

		/*console.log(userGuess);
		for(var i = 0; i < bandC.length; i++ ){
			if()
		}
		if(banC.indexOf(userGuess) >= 0){
			lettersGuessed.push(userGuess);





		}
		else{
			lettersWrong.push(userGuess);
		}*/
		// if ((userGuess === "c") || (userGuess === "o") || 
		// 	(userGuess === "l") || (userGuess === "d") ||
		// 	(userGuess === "p") || (userGuess === "l") ||
		// 	(userGuess === "a") || (userGuess === "y")) {
		/*if (inputtxt.value.match(bandC))
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
		*/
	// Record wins, letters already guessed, # of guesses remaining (15 trials). # of guesses remaining will decrease.

	/*var html = 
	"<h1>Hangman Game</h2>" +
	"<p>Press any key to start playing!" +
	"<p>Wins: " + wins + "</p>" +
	"<p>Words:</p>" +
	"<p>" + 
	"<p>Hints: Name of bands or singers</p>" +
	"<p>Number of Guesses Remaining: " + guessesRemaining + "</p>" +
	"<p>Letters Already Guessed: " + lettersGuessed + "</p>";
	*/
	//document.querySelector("#hangman-game").innerHTML = html;

	}

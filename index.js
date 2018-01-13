const inquirer = require("inquirer");
const Letter = require('./letter.js');
const Word = require('./word.js');

function newGame() {
	// Word constructor
	var word = new Word();
	var randomWord = word.randomWord;
	console.log(randomWord);

	// Letter constructor
	var showLetter = new Letter();
	var currentWord = showLetter.currentWord;

	var lettersGuessed = [];
	var guessRemain = 5;


	function userInput() {
		var alphabet = [
			"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
		];
		
		inquirer.prompt([
		{
			name: "letter",
			type: "input",
			message: "enter lowercase letter",
			validate: function (ltr) {
				if (alphabet.indexOf(ltr) === -1) {
					console.log(" invalid entry");
					return false;
				}
				return true;
			}
		}
		]).then(function(answers) {
			startGame(answers.letter);
			});
	}

	function startGame(letter) {
		
		// If userInput is not a correct guess, decrease guesses remain, display letters guessed, display word with underscores
		if (randomWord.indexOf(letter) === -1) {
			guessRemain--;
			console.log("\n" + "INCORRECT!")
			console.log("Guesses Remaining: " + guessRemain);
			lettersGuessed.push(letter);
			console.log("Incorrect Letters Guessed: " + lettersGuessed.join(" ") + "\n");
			console.log(currentWord.join(" ") + "\n");
		}
		
		// If userInput is correct, display current word with guessed letter
		if (randomWord.indexOf(letter) !== -1) {
			console.log("\n" + "Correct!" + "\n");
			var b = randomWord.indexOf(letter);
			currentWord.splice(b, 1, letter);
			console.log(currentWord.join(" ") + "\n");
		}

		// If no guesses remaining, end game
		if (guessRemain === 0) {
			console.log("No guesses left!\n");
			playAgain();
			return;
		}

		// If no underscores remain, it means that complete word is guessed
		if (currentWord.indexOf(" _ ") === -1) {
			console.log("You win!!!\n");
			playAgain();
			return;
		}
	
		userInput();
	}

	
	userInput();
}


function playAgain() {
	inquirer.prompt([
		{
	message: "Would you like to play again?",
	type: "confirm",
	name: "playAgain"
		}
]).then(function(user) {
		if (user.playAgain === true) {
			newGame();
		}
	});
}


newGame();





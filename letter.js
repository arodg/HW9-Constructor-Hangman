var Letter = function (currentWord, randomWord, letter) {
	this.currentWord = currentWord;
	this.randomWord = randomWord;
	this.letter = letter;
}

Letter.prototype.incorrect = function () {
		console.log("\nINCORRECT!")
		console.log(this.currentWord.join(" ") + "\n");
}

Letter.prototype.correct = function () {
		var b = this.randomWord.indexOf(this.letter);
		this.currentWord.splice(b, 1, this.letter);
		console.log("\nCorrect!\n");
		console.log(this.currentWord.join(" ") + "\n");
}


module.exports = Letter;

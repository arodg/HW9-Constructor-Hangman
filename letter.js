const Word = require('./word.js');

var Letter = function () {

	this.currentWord = currentWord;
}

Letter.prototype.currentWord = function () {
	this.currentWord = [];

	for(i = 0; i < randomWord.length; i+=1) {
    	currentWord.push(" _ ");
	}

	console.log(currentWord.join(" ") + "\n");
}

module.exports = Letter;

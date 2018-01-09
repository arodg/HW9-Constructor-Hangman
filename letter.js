function Letter (letter) {
	this.letter = letter;
	this.display = false;
}

Letter.prototype.display = function() {
	if (this.display === false) {
		return "_";
	}
	else {
		return this.letter;
	}
}

module.exports = Letter;

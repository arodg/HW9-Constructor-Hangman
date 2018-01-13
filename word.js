
var Word = function () {

	var wordBank = [
		"rudolph", "frosty", "snowflake", "wreath", "jingle", "stocking"
		];

	this.randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
}	

module.exports = Word;



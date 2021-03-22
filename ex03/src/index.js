function printManyTimes(str) {
	"use strict";
    // Only change code above this line

	const SENTENCE = str + " is cool";
	for (let i = 0; i < str.length; i += 2) {
		console.log(SENTENCE);
	}
	// Only change code above this line
	return SENTENCE;
}

console.log(printManyTimes("Arena"));
module.exports = printManyTimes;
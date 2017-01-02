'use strict'
// Singleton creation using ES5-style prototypes

function LastYear(x, y) {
	this.x = x;
	this.y = y;
};
LastYear.prototype.greetMore = function () {
	console.log("hello "+this.x+"!");
}

// Create the NewYear object. Note that the greetMore function is from
// the LastYear class
function NewYear(x, y) {
	this._super = LastYear;				//
	this._super.call(this, x, y);
	this.greetMore = LastYear.prototype.greetMore;
}
NewYear.prototype.greet = function () {
	console.log("yo "+this.y +"!");
}

// Create a separate object instance for each "class"
var lastYear1 = new LastYear("Joe","Judy"); // Object - x="Joe"  y="Judy"
var newYear1 = new NewYear("John","Jane");	// Object - x="John" y="Jane"

// Test the methods in each of the two objects
lastYear1.greetMore();	// Console logs - hello Joe!
newYear1.greet();				// Console logs - yo Jane!
newYear1.greetMore();		// Console logs - hello John!
lastYear1.greetMore();	// Console logs - hello Joe!

console.log("lastYear1 object = ", JSON.stringify(lastYear1));
console.log(lastYear1.__proto__);
console.log("newYear1 object = ", JSON.stringify(newYear1));
console.log(newYear1.__proto__);

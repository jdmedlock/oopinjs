'use strict'
// Singleton creation using ES6-style prototypes

class LastYear {
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
	greetMore(){
		console.log("hello "+this.x+"!");
	}
}

class NewYear extends LastYear {
	constructor(x,y){
		super();
		this.x = x;
		this.y = y;
	}
	greet(){
		console.log("yo "+this.y +"!");
	}
}

// Create a separate object instance for each "class"
var lastYear1 = new LastYear("Joe","Judy"); // Object - x="Joe"  y="Judy"
var newYear1 = new NewYear("John","Jane");	// Object - x="John" y="Jane"

// Test the methods in each of the two objects
lastYear1.greetMore();	// Console logs - hello Joe!
newYear1.greet();				// Console logs - yo Jane!
newYear1.greetMore();		// Console logs - hello John!
lastYear1.greetMore();	// Console logs - hello Joe!

console.log("\nlastYear1 object = ", JSON.stringify(lastYear1));
console.log("newYear1 object = ", JSON.stringify(newYear1));

console.log("\nPrototype of lastYear1 is: ", Object.getPrototypeOf(lastYear1));
console.log("Descriptors of lastYear1 are: ", Object.getOwnPropertyDescriptors(lastYear1));
console.log("Prototype of newYear1 is: ", Object.getPrototypeOf(newYear1));
console.log("Descriptors of newYear1 are: ", Object.getOwnPropertyDescriptors(newYear1));

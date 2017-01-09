# Object Oriented Programming in JavaScript

##Contents
- [Purpose](#purpose)
- [Introduction](#introduction)
- [Contributing](#contributing)
- [OOP Recipes](#ooprecipes)
  - [ES5 Class Example](#es5classexample)
  - [ES6 Class Example](#es6classexample)
  - [ES5 Singleton Example](#es5singletonexample)
  - [ES6 Singleton Example](#es6singletonexample)
  - [ES6 Parent-Child Example](#es6parentchild)

<a name="purpose"/>
##Purpose
The intent of this project is to create a set of reference recipes for specific
object oriented needs. Like a cookbook this will show how to implement these in
Javascript, but each recipe will also be accompanied by a list of pros, cons,
and commentary about the technique.

<a name="introduction"/>
##Introduction
Object oriented programming (OOP) techniques are a valuable part of any
programmers tool kit. [OOP](https://en.wikipedia.org/wiki/Object-oriented_programming)
is a proven programming practice which first gained the notice of the
programmer community in the 1980's with Smalltalk and Lisp, and widespread
popularity in the 1990's with the advent of Java.

Traditional languages have chosen to implement OOP using *classical inheritance*.
This form of [inheritance](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming))
is based on classes, which describe the relationship of data and accompanying
methods in a parent-child organization. Classes describe the relationship
between objects of a certain type while objects are the runtime instantiation of
a particular class. Classes are therefore organized hierarchically.

OOP in Javascript, however, is based on *prototypal inheritance*. In [prototypal inheritance](https://en.wikipedia.org/wiki/Prototype-based_programming)
relationships are between objects rather than classes and is based on reusing
objects rather than on static class definitions.

At this point you might be
thinking "But what about the class implementation in ES6?". This is a good
question, but the *class* in ES6 is merely a syntactic wrapper around prototypal
inheritance. Furthermore, the implementation of class in ES6 is a
[leaky abstraction](https://en.wikipedia.org/wiki/Leaky_abstraction). A leaky
abstraction is like a six foot person trying to cover up with a five foot long
blanket - something is going to stick out. This means that understanding
Javascripts' prototypal inheritance is time well spent.

<a name="contributing"/>
##Contributing

This is an "open source" reference and as such your contributions are welcomed
and encouraged. The guidelines for contributing are:

1. Follow the format used for the first recipe. Don't post just code - include
a description of what the recipe does, as well as its pros, cons, and your
observations about the implementation. It's okay to make qualitative  in
addition to quantitative observations.
2. Tailor the code snippet in the first recipe for any new recipes. This will
maintain consistency and more importantly, will make it easier to compare and
contrast competing recipes.
3. Test your code before posting and include a link to the source in the
*Commentary* section of the recipe.
4. Be nice and keep it professional!

<a name="ooprecipes"/>
##OOP Recipes

---

<a name="es5classexample"/>
###ES5 Class Example
####Description
Demonstrate how to use prototypes in ES5 to implement inheritance between
prototypes and object instances.
####Javascript
```javascript
'use strict'

// ES5-style classless OOP example
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
function Last_year() {
}

// Define the greetMore method and attach it to the Last_Year prototype
Last_year.prototype.greetMore = function(){
  console.log("hello "+this.x+"!!")
}

function New_year(x,y){
  this.x = x;
  this.y = y;
}

// Force New_Year to inherit from the Last_year prototype
New_year.prototype = Object.create( Last_year.prototype );

// Define the greet method and attach it to the New_year object
New_year.prototype.greet = function(){
  console.log("yo "+this.y+"!!");
}

// Create an instance of the New_year object. Recall that since New_year
// inherits from Last_year this new object instance has access to the
// greetMore method on the Last_year prototype, as well as to the greet
// method on the New_year prototype.
var newYear2 = new New_year("John","Jane");

// Since the new object instance has access to the methods associated with
// its prototypes these methods can be invoked on its namespace.
newYear2.greetMore();
newYear2.greet();
console.log("Prototype of newYear2 is: ", Object.getPrototypeOf(newYear2));
console.log("Descriptors of newYear2 are: ", Object.getOwnPropertyDescriptors(newYear2));
```
####Pros/cons
| Pros                             | Cons                                |
|----------------------------------|-------------------------------------|
| Clear and concise code           | Slightly more code required than is the case using ES6-style 'class'  |

####Commentary
1. The [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript) recommends that ES6 classes be used over prototype manipulation due to their conciseness and clarity.
2. The source code is [es5class.js](https://github.com/jdmedlock/oopinjs/blob/master/es5class.js)
in this repo.
3. Thanks to [@kornil](https://github.com/Kornil) for providing the original
idea and source for this example.

---

<a name="es6classexample"/>
###ES6 Class Example
####Description
Demonstrate how to use the *class* and constructor new to ES6.
####Javascript
```javascript
'use strict'
// ES6 class constructor style
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes
class LastYear {
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
var newYear = new NewYear("John","Jane");
//////////////////////
// Classless OOP same as above, without classes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
function Last_year(){
  // code
}
Last_year.prototype.greetMore = function(){
  console.log("hello "+this.x+"!!")
}

function New_year(x,y){
  this.x = x;
  this.y = y;
}
New_year.prototype = Object.create( Last_year.prototype );

New_year.prototype.greet = function(){
  console.log("yo "+this.y+"!!");
}
var newYear2 = new New_year("John","Jane");
/////////////////////
// Kyle Simpson Object Linking Other Objects(OLOO) style
// https://github.com/getify/You-Dont-Know-JS/tree/master/this%20%26%20object%20prototypes
// chapter 4 and 5
var LastYear1 = {
  greetMore: function(){
    console.log("hello "+this.x)
  },
};
var NewYear1 = Object.create( LastYear1 );
NewYear1.x = "John";
NewYear1.y = "Jane";
NewYear1.greet = function(){
  console.log("yo "+this.y);
}
/////
// ES6 class
newYear.greetMore();
newYear.greet();
// OOP without classes
newYear2.greetMore();
newYear2.greet();
// OLOO programming
NewYear1.greetMore();
NewYear1.greet();
```
####Pros/cons
| Pros                             | Cons                                |
|----------------------------------|-------------------------------------|
| Clear and concise code           | In ES6 Class is a leaky abstraction which uses ES5-style prototypal inheritance  |

####Commentary
1. The [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript) recommends that ES6 classes be used over prototype manipulation due to their conciseness and clarity.
2. A working version can be found on [CodePen](https://goo.gl/0BAeNr).
3. Thanks to [@kornil](https://github.com/Kornil) for providing this example.

---
<a name="es5singletonexample"/>
###ES5 Singleton Object Example
####Description
Demonstrate a solution for creating singleton object instances using ES5
prototypes. A [singleton](https://en.wikipedia.org/wiki/Singleton_pattern) is
an object that has one and only one instance in an application.
####Javascript
```javascript
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
	this._super = LastYear;				
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

console.log("\nlastYear1 object = ", JSON.stringify(lastYear1));
console.log("newYear1 object = ", JSON.stringify(newYear1));

console.log("\nPrototype of lastYear1 is: ", Object.getPrototypeOf(lastYear1));
console.log("Descriptors of lastYear1 are: ", Object.getOwnPropertyDescriptors(lastYear1));
console.log("Prototype of newYear1 is: ", Object.getPrototypeOf(newYear1));
console.log("Descriptors of newYear1 are: ", Object.getOwnPropertyDescriptors(newYear1));
```
####Pros/cons
| Pros                             | Cons                                |
|----------------------------------|-------------------------------------|
| Supported in virtually all browsers | Code is lengthy and not concise  |
|                                  | Code is unintuitive to the novice   |

####Commentary
1. The source code is [es5singleton.js](https://github.com/jdmedlock/oopinjs/blob/master/es5singleton.js)
in this repo.
2. It is important to note that `newYear1` uses the `greetMore()` function, but the
data used is always from the referencing object. This is why the invocation on
the `lastYear1` object produces different results from that of the `newYear1`
object.
3. The `greetMore` function only exists in `LastYear`. `NewYear` references this
method.

---

<a name="es6singletonexample"/>
###ES6 Singleton Object Example
####Description
Demonstrate a solution for creating singleton object instances using ES6
prototypes. A [singleton](https://en.wikipedia.org/wiki/Singleton_pattern) is
an object that has one and only one instance in an application.
####Javascript
```javascript
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
```

####Pros/cons
| Pros                             | Cons                                |
|----------------------------------|-------------------------------------|
| Concise and intuitive code       | Not available in all browsers. Transpilers like Babel may be used to circumvent this issue.  |

####Commentary
1. The source code is [es6singleton.js](https://github.com/jdmedlock/oopinjs/blob/master/es6singleton.js)
in this repo.
2. Notice that while the output of this is the same as it's ES5 counterpart,
the contents of `__proto__` for both object is empty. An open action item is to
research how the relationship is actually implemented between `LastYear` and
`NewYear`.

---

<a name="es6parentchild"/>
###ES6 Parent-Child Object Example
####Description
A common requirement is to represent objects in a parent-child relationship.
This relationship has one parent object instance that is related to zero or
more child object instances. This example demonstrates how the child object
can be generated by the constructor function of the parent when the
attributes of the child can be derived when the parent object is
instantiated.
####Javascript
```javascript
'use strict'
// Parent-Child object relationship example

class Year {
	constructor(year){
		this.year = year;
		const monthAttributes = [
			{name: "January",  noDays: 31},
			{name: "February",  noDays: 28},
			{name: "March",  noDays: 31},
			{name: "April",  noDays: 30},
			{name: "May",  noDays: 31},
			{name: "June",  noDays: 30},
			{name: "July",  noDays: 31},
			{name: "August",  noDays: 31},
			{name: "September", noDays: 30},
			{name: "October",  noDays: 31},
			{name: "November",  noDays: 31},
			{name: "December",  noDays: 31}		];

		// Adjust the number of days in February for leap years
		if (this.year % 4 === 0) {
			monthAttributes[1].noDays = 29;
		}
		// Create an array of initialized Month objects
		this.monthsInYear = monthAttributes.map( (month, monthIndex) => {
			return new Month(this.year, monthIndex, month.name, month.noDays);
		});
	}

	toString() {
		let resultString = this.year + " - ";
		this.monthsInYear.forEach((month, monthIndex) => {
			const monthString = month.toString();
			resultString += monthString.slice(5);
		});
		return resultString;
	}
}

class Month {
	constructor(year, monthNo, monthName, noDaysInMonth) {
		this.year = year;
		this.number = monthNo;
		this.name = monthName;
		this.noDays = noDaysInMonth;
		const firstDate = new Date(this.year, this.number, 1);
		const firstDay = firstDate.getDay();
		const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		this.firstDayName = daysOfWeek[firstDay];
		console.log(year, monthNo, monthName, noDaysInMonth, firstDate, firstDay);
	}

	toString() {
		let resultString = this.year + "," + this.number + "," +
					   this.name + "," + this.noDays + "," +
					   this.firstDayName +" / "
		return resultString;
	}
}

// Create a new object instance for a year
var lastYear = new Year(2016);
var currentYear = new Year(2017);

// Display the contents of each of the object instances
console.log("lastYear object = ", lastYear.toString());
console.log("currentYear object = ", currentYear.toString());

console.log("\nlastYear object = ", JSON.stringify(lastYear));
console.log("currentYear object = ", JSON.stringify(currentYear));

console.log("\nPrototype of lastYear is: ", Object.getPrototypeOf(lastYear));
console.log("Descriptors of lastYear are: ", Object.getOwnPropertyDescriptors(lastYear));
console.log("Prototype of currentYear is: ", Object.getPrototypeOf(currentYear));
console.log("Descriptors of currentYear are: ", Object.getOwnPropertyDescriptors(currentYear));
```

####Pros/cons
| Pros                             | Cons                                |
|----------------------------------|-------------------------------------|
| Concise and intuitive code       | ES6 not available in all browsers. Transpilers like Babel may be used to circumvent this issue.|
|                                  | Using an array in the parent object to contain references to child objects works well with a limited number of child obects. However, this is impactful on both memory and the execution time of the contructor function for very large numbers of child objects |

####Commentary
1. The source code is [es6singleton.js](https://github.com/jdmedlock/oopinjs/blob/master/es6singleton.js)
in this repo.

---

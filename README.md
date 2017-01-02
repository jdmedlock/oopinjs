# Object Oriented Programming in JavaScript

##Contents
- [Purpose](#purpose)
- [Introduction](#introduction)
- [Contributing](#contributing)
- [OOP Recipes](#ooprecipes)
  - [ES6 Class Example](#es6classexample)

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
your pros, cons, and your observations about the implementation. It's okay to
make qualitative  in addition to quantitative observations.
2. Tailor the code snippet in the first recipe for any new recipes. This will
maintain consistency and more importantly, will make it easier to compare and
contrast competing recipes.
3. Test your code before posting and include a link to the source in the
*Commentary* section of the recipe.
4. Be nice and keep it professional!

<a name="ooprecipes"/>
##OOP Recipes
---
<a name="es6classexample"/>
###ES6 Class Example
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
|                                  |                                     |


####Commentary
1. A working version can be found on [CodePen](https://goo.gl/0BAeNr)
2. Thanks to <a href="https://github.com/Kornil">@kornil</a> for providing this example.
---
<a name="es6classexample"/>
###ES5 Singleton Object Example
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
```
####Pros/cons
| Pros                             | Cons                                |
|----------------------------------|-------------------------------------|
| Supported in virtually all browsers | Code is lengthy and not concise  |
|                                  | Code is unintuitive to the novice   |


####Commentary
1. The source code is [es5singleton.js[https://github.com/jdmedlock/oopinjs/blob/master/es5singleton.js]
in this repo.
2. It is important to note that newYear1 uses the greetMore() function, but the
data used is always from the referencing object. This is why the invocation on
the lastYear1 object produces different results from that of the newYear1
object.
3. The greetMore function only exists in LastYear. NewYear references this
method.
---

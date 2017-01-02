# Object Oriented Programming in JavaScript

##Contents
- [Purpose](#Purpose)
- [Introduction](#Introduction)
- [Contributing](#Contributing)
- [OOP Recipes](#OOP Recipes)

##Purpose
The intent of this project is to create a set of reference recipes for specific
object oriented needs. Like a cookbook this will show how to implement these in
Javascript, but each recipe will also be accompanied by a list of pros, cons,
and commentary about the technique.

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

##Contributing

This is an "open source" reference and as such your contributions are welcomed
and encouraged. The guidelines for contributing are:

1. Follow the format used for the first recipe. Don't post just code - include
your pros, cons, and your observations about the implementation. It's okay to
make qualitative  in addition to quantitative observations.
2. Tailor the code snippet in the first recipe for any new recipes. This will
maintain consistency and more importantly, will make it easier to compare and
contrast competing recipes.
3. Be nice and keep it professional!

##OOP Recipes
---
###ES6 Class Constructor
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
newYear.greetMore();
NewYear1.greetMore();
```
####Pros/cons
| Pros                             | Cons                                |
|----------------------------------|-------------------------------------|
| Clear and concise code           | In ES6 Class is a leaky abstraction |
|                                  | which uses ES5-style prototypal     |
|                                  | inheritance.                        |

####Commentary
1. A working version can be found on [CodePen](https://goo.gl/0BAeNr)
2. Thanks to @kornil for providing this example.

---

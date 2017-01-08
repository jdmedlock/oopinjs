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

'use strict'
// ES6 class constructor style
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes
class LastYear {
    greetMore() {
        console.log("hello " + this.x + "!");
    }
}

class NewYear extends LastYear {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
    }
    greet() {
        console.log("yo " + this.y + "!");
    }
}

var newYear = new NewYear("John", "Jane");

//////////////////////
// Classless OOP same as above, without classes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
function Last_year() {
    // code
}

Last_year.prototype.greetMore = function() {
    console.log("hello " + this.x + "!!")
}

function New_year(x, y) {
    this.x = x;
    this.y = y;
}

New_year.prototype = Object.create(Last_year.prototype);

New_year.prototype.greet = function() {
    console.log("yo " + this.y + "!!");
}

var newYear2 = new New_year("John", "Jane");

/////////////////////
// Kyle Simpson Object Linking Other Objects(OLOO) style
// https://github.com/getify/You-Dont-Know-JS/tree/master/this%20%26%20object%20prototypes
// chapter 4 and 5
var LastYear1 = {
    greetMore: function() {
        console.log("hello " + this.x)
    },
};

var NewYear1 = Object.create(LastYear1);
NewYear1.x = "John";
NewYear1.y = "Jane";
NewYear1.greet = function() {
        console.log("yo " + this.y);
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

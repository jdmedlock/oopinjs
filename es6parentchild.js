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

'use strict'
// Singleton creation using ES6-style prototypes

class Year {
	constructor(year){
		this.year = year;
		const monthAttributes = [
			{no: 1, name: "January",  noDays: 31},
			{no: 2, name: "February",  noDays: 28},
			{no: 3, name: "March",  noDays: 31},
			{no: 4, name: "April",  noDays: 30},
			{no: 5, name: "May",  noDays: 31},
			{no: 6, name: "June",  noDays: 30},
			{no: 7, name: "July",  noDays: 31},
			{no: 8, name: "August",  noDays: 31},
			{no: 9, name: "September", noDays: 30},
			{no: 10, name: "October",  noDays: 31},
			{no: 11, name: "November",  noDays: 31},
			{no: 12, name: "December",  noDays: 31},
		];

		// Adjust the number of days in February for leap years
		if (this.year % 4 === 0) {
			monthAttributes[1].noDays = 29;
		}
		// Create an array of initialized Month objects
		this.monthsInYear = [];
		monthAttributes.forEach( (month, monthIndex) => {
			this.monthsInYear[monthIndex] = new Month(this.year, month.no, month.name, month.noDays);
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
		const firstDate = new Date(this.year, this.number, 1)
		const firstDay = firstDate.getDay();
		this.daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		this.firstDayName = this.daysOfWeek[firstDay];
	}

	toString() {
		let resultString = this.year + "," + this.number + "," +
					   this.name + "," + this.noDays + "," +
					   this.firstDayName
		return resultString;
	}
}

// Create a new object instance for a year
var currentYear = new Year(2017);
var lastYear = new Year(2016);

// Display the contents of each of the object instances
console.log("currentYear object = ", currentYear.toString());
console.log("lastYear object = ", lastYear.toString());

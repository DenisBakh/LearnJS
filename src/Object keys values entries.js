'use strict';


//1
/*
function sumSalaries(salaries) {
	return Object.values(salaries).reduce((sum, item) => sum + item, 0)
}

let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};

alert(sumSalaries(salaries)); // 650
*/

//1

function count(obj) {
	return Object.entries(obj).length
}

let user = {
	name: 'John',
	age: 30
};

alert(count(user)); // 2
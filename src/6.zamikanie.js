'use strict';

//1 
/*
function sum(a) {
	return function (b) {
		return a + b;
	}
}

alert(sum(2)(3));
*/


//2 
/*
function inBetween(a, b) {
	return function (value) {
		return (value >= a && value <= b)
	}
}

function inArray(arrFilter) {
	return function (value) {
		return arrFilter.includes(value)
	}
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

alert(arr.filter(inArray([1, 2, 10]))); // 1,2
*/
//3
/*
function byField(field) {
	return function (a, b) {
		return a[field] > b[field] ? 1 : -1;
	}
}

let users = [
	{ name: "John", age: 20, surname: "Johnson" },
	{ name: "Pete", age: 18, surname: "Peterson" },
	{ name: "Ann", age: 19, surname: "Hathaway" }
];
console.log(users)

users.sort(byField('name'));
console.log(users)
users.sort(byField('age'));
console.log(users)
*/


//4


function makeArmy() {
	let shooters = [];

	let i = 0;
	while (i < 10) {
		let shooter = function () { // функция shooter
			let n = i
			alert(n); // должна выводить порядковый номер
		};
		shooters.push(shooter);
		i++;
	}

	return shooters;
}

let army = makeArmy();

console.log(army)

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
  // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
'use strict';

function slice(str, start, end) {
	let a = Array.from(str)
	let b = a.slice(start, end).join('');
	return b
}

let str = '𝒳😂𩷶';

//alert(slice(str, 1, 3)); // 😂𩷶

// а вот встроенный метод не поддерживает суррогатные пары
//alert(str.slice(1, 3)); // мусор (две части различных суррогатных пар)

//===================================
/*
let arrayLike = { // есть индексы и свойство length => псевдомассив
	from: 1,
	to: 5,

	[Symbol.iterator]() {
		this.current = this.from;
		return this;
	},

	next() {
		if (this.current <= this.to) {
			return { done: false, value: this.current++ };
		} else {
			return { done: true };
		}
	}
};

// Ошибка (отсутствует Symbol.iterator)
for (let item of arrayLike) {
	console.log(item)
}
*/

/*
function unique(arr) {
	let result = new Set(arr);

	return Array.from(result);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
	"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

//alert(unique(values)); // Hare, Krishna, :-O
*/


/*
function aclean(arr) {
	let key;
	let obj = {};

	for (let item of arr) {
		key = item.toLowerCase().split('').sort().join('');
		obj[key] = item;
	}

	return Array.from(Object.values(obj))
}

let arrA = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arrA)); // "nap,teachers,ear" or "PAN,cheaters,era"
*/

/*
let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
*/
/*
let obj = { name: 'weakmap' }

const map = new Map([
	[obj, 'asdas']
])


console.log(map)
*/
/*
function sumSalaries(salaries) {
	return Object.values(salaries).reduce((total, salary) => {
		return total + salary
	}, 0)
}

let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};

alert(sumSalaries(salaries)); // 650
*/

/*
function count(user) {
	return Object.entries(user).length;
}

let user = {
	name: 'John',
	age: 30
};

alert(count(user)); // 2
*/


/*
let user = {
	name: "John",
	years: 30
};

let { name: name, years: age, isAdmin = false } = user
console.log(name)
console.log(age)
console.log(isAdmin)
*/

let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};

function topSalary(salaries) {
	let max = 0;
	let winner = null;

	for (let [name, salary] of Object.entries(salaries)) {
		if (salary > max) {
			max = salary;
			winner = name;
		}
	}

	console.log(winner);
}

topSalary(salaries)
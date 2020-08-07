'use strict';

//1

function filterRange(arr, a, b) {
	return arr.filter(item => (item <= b && item >= a))
}

//let arr = [5, 3, 8, 1];
//let filtered = filterRange(arr, 1, 4);

//alert(filtered); // 3,1 (совпадающие значения)
//alert(arr); // 5,3,8,1 (без изменений)

//1

function camelize2(str) {
	let result = str.split('-');

	for (let i = 1; i < result.length; i++) {
		result[i] = result[i][0].toUpperCase() + result[i].slice(1)
	}
	result = result.join('')
	alert(result)
}

function camelize(str) {
	let res = str
		.split('-')
		.map(
			(item, index) => index > 0 ? item[0].toUpperCase() + item.slice(1) : item)
		.join('')
	alert(res)
}

//camelize("background-color") == 'backgroundColor';
//camelize("list-style-image") == 'listStyleImage';
//camelize("-webkit-transition") == 'WebkitTransition';

//3

function filterRangeInPlace(arr, a, b) {
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] < a || arr[i] > b) {
			arr.splice(i, 1)
			i--
		}
	}
}

//let arr = [5, 3, 8, 1];

//filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

//alert(arr); // [3, 1]


//4

//let arr = [5, 2, 1, -10, 8];

//arr.sort((a, b) => b - a)

//alert(arr); // 8, 5, 2, 1, -10

//5

//function copySorted(arr) {
//	return arr.slice('').sort()
//}

//let arr = ["HTML", "JavaScript", "CSS"];

//let sorted = copySorted(arr);

//alert(sorted); // CSS, HTML, JavaScript
//alert(arr); // HTML, JavaScript, CSS (без изменений)


//6
/*
function Calculator(str) {
	this.operators = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b
	}

	this.calculate = (str) => {
		let operator = str.split(' ')[1]

		if (this.operators[operator] && isFinite(str.split(' ')[0]) && isFinite(str.split(' ')[2])) {
			let a = +str.split(' ')[0]
			let b = +str.split(' ')[2]

			return this.operators[operator](a, b)
		} else {
			return 'не числа или нет оператора'
		}
	}

	this.addMethod = (name, func) => {
		this.operators[name] = func
	}
}

let calc = new Calculator;

alert(calc.calculate("6 + 7")); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("12 / 3");
alert(result); // 8
*/

//8

function sortByAge(users) {
	users.sort((a, b) => a.age - b.age)
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя
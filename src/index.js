'use strict';


function pow(x, n) {
	if (n < 0) return NaN;
	if (Math.round(n) != n) return NaN;

	let result = 1;

	for (let i = 0; i < n; i++) {
		result *= x;
	}

	return result;
}



/*

let user = {};
user.name = 'John';
user.surName = 'Smith';
user.name = 'Pete';
delete user.name;

let schedule = {};
alert(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
alert(isEmpty(schedule)); // false

function isEmpty(obj) {
	for (let key in obj) {
		return false;
	}

	return true;
}


let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
}

console.log(sumSalaries(salaries));

function sumSalaries(obj) {
	let result = 0;
	for (let key in obj) {
		result += obj[key];
	}

	return result;
}



let menu = {
	width: 200,
	height: 300,
	title: "My menu"
};

multiplyNumeric(menu);
function multiplyNumeric(obj) {
	for (let key in obj) {
		if (typeof (obj[key]) === 'number') {
			obj[key] *= 2;
		}
	}
}

console.log('высота:', menu.height, '; ширина: ', menu.width, '; title: ', menu.title);


let user = {
	name: "Jhon",
	hi() { alert(this.name); },
	bye() { alert("bye"); }
};

user.hi(); // Джон (простой вызов метода работает хорошо)

// теперь давайте попробуем вызывать user.hi или user.bye
// в зависимости от имени пользователя user.name
(user.name == "Jhon" ? user.hi() : user.bye()); // Ошибка!


let user = {
	firstName: "asd",
	sayHi() {
		alert(this.firstName);
	}
};

user.sayHi(); // Илья


let user = {
	name: "cxz",
	go: function () { alert(this.name) }
};

(user.go()) // ошибка!

function makeUser() {
	return {
		name: "Джон",
		ref: this
	};
};

let user = makeUser();

alert(user.ref.name); // Error: Cannot read property 'name' of undefined

let calculator = {
	a: 0,
	b: 0,
	read: function () {
		this.a = prompt('Enter the first value');
		this.b = prompt('Enter the second value');
	},
	sum: function () {
		return +this.a + +this.b;
	},
	mul: function () {
		return this.a * this.b;
	},
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());




let ladder = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
	down() {
		this.step--;
		return this;
	},
	showStep: function () { // показывает текущую ступеньку
		alert(this.step);
	}
};


ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1


ladder.up().up().down().showStep(); // 1
*/
/*
let user = {};
alert(!!user);

function User(name) {
	this.name = name;
	this.isAdmin = false;
}

let user = new User("asd");

alert(user.name); // Вася
alert(user.isAdmin); // false


function A() { 
	
 };

function B() {
	
 };

let a = new A;
let b = new B;

alert( a == b ); // true


function Calculator() {
	this.read = function () {
		this.a = prompt('Enter the first value');
		this.b = prompt('Enter the second value');
	};
	this.sum = function () {
		return +this.a + +this.b;
	};
	this.mul = function () {
		return this.a * this.b;
	};
};


let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());


function Accumulator(startingValue) {
	this.value = +startingValue;
	this.read = function () {
		let input = +prompt('Enter additional value', 0);
		this.value += input;
	};
};

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений


let str = "Привет";

str.test = 5; // (*)

alert(str.test);


let sumPrompt = () => {
	let a = +prompt('Enter the first value');
	let b = +prompt('Enter the second value');
	return a + b;
}

alert(sumPrompt());


alert(6.35.toFixed(20)); // 6.3
*/

/*
function readNumber() {
	let result = prompt('Enter the first value');
	console.log(result === null)
	console.log(result === '')
	console.log(isNaN(Number(result)))

	if (result === null || result === '' || !(isNaN(Number(result)))) {
		return null;
	} else {
		readNumber();
	};
};

readNumber();
*/

function random(min, max) {
	let result = Math.floor(Math.random() * (max - min + 1) + min);
	return result;

}

alert(random(1, 5)); // 1.2345623452
alert(random(1, 5)); // 3.7894332423
alert(random(1, 5)); // 4.3435234525
alert(random(1, 5)); // 4.3435234525
alert(random(1, 5)); // 4.3435234525
alert(random(1, 5)); // 4.3435234525
alert(random(1, 5)); // 4.3435234525

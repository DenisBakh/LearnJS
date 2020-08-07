'use strict'
/*
function first() {
	let arr = [];
	let sum = 0
	for (let i = 0; i <= 100000; i++) {
		sum += i ** 50;
		arr.unshift(sum)
	}
	console.log(1)
}
function second() {
	console.log(2)
}

first()
second()
*/
/*
let user = {
	firstName: "Вася",
	sayHi() {
		alert(`Привет, ${this.firstName}!`);
	}
};

//setTimeout(user.sayHi, 1000); // Привет, undefined!
//user.sayHi()
let f = user.sayHi.bind(user)
f()

function partial(func, ...argsBound) {
	return function (...args) { // (*)
		return func.call(this, ...argsBound, ...args);
	}
}

// использование:
let user = {
	firstName: "John",
	say(time, phrase) {
		alert(`[${time}] ${this.firstName}: ${phrase}!`);
	}
};

// добавляем частично применённый метод с фиксированным временем
//user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());
let sayNow = user.say.bind(user, new Date().getHours() + ':' + new Date().getMinutes())

//user.sayNow("Hello");
sayNow("Hello");
  // Что-то вроде этого:
  // [10:00] John: Hello!
*/


//1

/*
let user = {
	name: 'karl',
	g: f.bind(null)
};

user.g();

function f() {
	console.log(this);
}

//2

function sayHi() {
	alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
	name: "Вася"
});

alert(sayHi.test)
bound()

//alert(bound.test); // что выведет? почему?


//4

function askPassword(ok, fail) {
	let password = prompt("Password?", '');
	if (password == "rockstar") ok();
	else fail();
}

let user = {
	name: 'Вася',

	loginOk() {
		alert(`${this.name} logged in`);
	},

	loginFail() {
		alert(`${this.name} failed to log in`);
	},

};


askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
*/

//5
/*
function askPassword(ok, fail) {
	let password = prompt("Password?", '');
	if (password == "rockstar") ok();
	else fail();
}

let user = {
	name: 'John',

	login(result) {
		alert(this.name + (result ? ' logged in' : ' failed to log in'));
	}
};

askPassword(user.login.bind(user, true), user.login.bind(user, false)); 
*/

/*
let arr = [1, 2, 3, 4];

function multi(arr, n) {
	return arr.map(function (item) {
		return item * n;
	})
}

Array.prototype.multi = function (n) {
	return this.map(function (item) {
		return item * n;
	})
}

console.log(multi(arr, 3))
console.log(arr.multi(4))
*/

//Написать свою функцию bind
/*
function bind(context, func) {
	return function () {
		context['f'] = func;
		return context.f();
	}
}

function logPerson() {
	console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = { name: 'Михаил', age: 22, job: 'Frontend' }
const person2 = { name: 'Елена', age: 19, job: 'SMM' }

bind(person2, logPerson)()
*/

/*
function animate() {
	//delay();
	console.log(1)
}

//$.on('document', 'scroll', animate)

window.addEventListener('scroll', animate());
*/

let user = {
	firstName: "Вася",
	sayHi() {
		alert(`Привет, ${this.firstName}!`);
	}
};

setTimeout(user.sayHi.bind(user), 1000);

// ...в течение 1 секунды
user = { sayHi() { alert("Другой пользователь в 'setTimeout'!"); } };

  // Другой пользователь в 'setTimeout'!
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


function ucFirst(str) {
	if (!str) return str;

	return str[0].toUpperCase() + str.slice(1);
};

console.log(ucFirst('vasya'));



function checkSpam(str) {
	str = str.toLowerCase();

	console.log(str.includes('viagra') || str.includes('xxx'));
};

checkSpam('buy ViAgRA now')
checkSpam('free xxxxx')
checkSpam("innocent rabbit")


function truncate(str, maxlength) {
	if (str.length > maxlength) {
		return str.slice(0, maxlength - 1) + '…';
	} else {
		return str;
	}
}


console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

console.log(truncate("Всем привет!", 20));

function extractCurrencyValue(str) {
	if (str[0] === '$') {
		return +str.slice(1);
	}
}

alert(extractCurrencyValue('$120') === 120); // true



let styles = [];

console.log(Math.floor((styles.length - 1) / 2));

styles.push('Рок-н-ролл');

styles[Math.floor((styles.length - 1) / 2)] = 'Классика';

alert(styles.pop());

styles.unshift('Рэп', 'Регги');

function sumInput() {
	let input;
	let resultArr = [];

	while (true) {
		input = +prompt('Введите число для суммирования');
		console.log(isFinite(input) && input != '' && !(isNaN(input)));

		if (isFinite(input) && input != '' && !(isNaN(input))) {
			resultArr.push(input);
		} else {
			break;
		};
	};

	let resultSum = 0;

	for (let item of resultArr) {
		resultSum += item
	}

	alert(resultSum);
};

sumInput();



function getMaxSubSum(arr) {
	let sumMax = 0;

	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] <= 0) continue;

		let numberSum = 0;

		for (let j = i; j <= arr.length; j++) {
			numberSum += arr[j];

			if (numberSum > sumMax) sumMax = numberSum;
		}
	}

	console.log(sumMax);
}

getMaxSubSum([-1, 2, 3, -9]) //= 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]) //= 6
getMaxSubSum([-1, 2, 3, -9, 11])// = 11
getMaxSubSum([-2, -1, 1, 2])// = 3
getMaxSubSum([100, -9, 2, -3, 5]) //= 100
getMaxSubSum([1, 2, 3]) //= 6 (берём все)



let arr = [1, 2];

let arrayLike = {
	0: "что-то",
	1: "ещё",
	[Symbol.isConcatSpreadable]: true,
	length: 1
};

alert(arr.concat(arrayLike)); // 1,2,что-то,ещё



["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, arrays) => {
	alert(`${item} имеет позицию ${index} в ${arrays}`);
});


[1, -2, 15, 2, 0, 8].sort(function (a, b) {
	alert(a + " <> " + b);
});


let army = {
	minAge: 18,
	maxAge: 27,
	canJoin(user) {
		return user.age >= this.minAge && user.age < this.maxAge;
	}
};

let users = [
	{ age: 16 },
	{ age: 20 },
	{ age: 23 },
	{ age: 30 }
];

// найти пользователей, для которых army.canJoin возвращает true
let soldiers = users.filter(user => army.canJoin(user), army); //users.filter(army.canJoin, army);

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23



//======================Arrays==============
//=1
function camelize(str) {
	let arr = str.split('-');

	for (let i = 1; i < arr.length; i++) {
		arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
	}

	return arr.join('');
}


function camelize2(str) {
	return str
		.split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
		.map(
			// Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
			// превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
			(word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
		)
		.join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'


	console.log(camelize("background-color") == 'backgroundColor');
	console.log(camelize("list-style-image") == 'listStyleImage');
	console.log(camelize("-webkit-transition") == 'WebkitTransition');

//=2
function filterRange(arr, a, b) {
	return arr.filter((item) => item <= b && item >= a);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1 (совпадающие значения)

alert(arr); // 5,3,8,1 (без изменений)


//=3
function filterRangeInPlace(arr, a, b) {
	//arr = arr.filter((item) => item <= b && item >= a);

		//for (let i = 0; i < arr.length; i++) {
		//	if (!(arr[i] <= b && arr[i] >= a)) arr.splice(i, 1)
		//}

	arr.map((item, index, arr) => (item <= b && item >= a) ? 0 : arr.splice(index, 1))
}

let arr = [5, 3, 2, 8, 1, 2, 2, 4];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert(arr); // [3, 1]


//=4
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => a - b).reverse();

alert(arr); // 8, 5, 2, 1, -10


//=5
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (без изменений)

function copySorted(arr) {
	//let copyArr = arr.slice();

	//return copyArr.sort();
	return arr.slice().sort();
}
*/

//=6===!!!!!!!!!!!

function Calculator() {

	this.toArr = (str) => {
		this.arr = str.split(' ');
		this.name = this.arr[1];
		this.a = +this.arr[0];
		this.b = +this.arr[2];
	}

	this.formulaObj = {
		"-": (a, b) => a - b,
		"+": (a, b) => a + b,
		//Прочитать про отличие стрелочных функций. след код не работает 
		/*
		"+": (a, b) => {
			a + b
		},
		*/
	}

	this.calculate = (str) => {
		this.toArr(str)

		if (this.name in this.formulaObj) {
			return this.formulaObj[this.name](this.a, this.b);
		} else {
			return 'Такой операции калькулятор не знает';
		}

	};

	this.addMethod = function (name, func) {
		this.formulaObj[name] = func;
	}

}

let calc = new Calculator;

//alert(calc.calculate("5 - 13")); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

//console.log(powerCalc);

let result = powerCalc.calculate("2 ** 3");
//alert(result); // 8
result = powerCalc.calculate("24 / 3");
//alert(result); // 8
result = powerCalc.calculate("4 * 3");
//alert(result); // 8




//=7====================================
/*
function namesFromArray(arr) {
	let result = [];

	for (let item of arr) {
		result.push(item.name);
	}

	return result;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = namesFromArray(users);

let names2 = users.map(item => item.name);

alert(names2); // Вася, Петя, Маша
*/

//=8====================================
/*
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped2 = users.map(function (item) {
	return { fullName: item.name + ' ' + item.surname, id: item.id }
})

let usersMapped = fullNameFromArray(users);

function fullNameFromArray(arr) {
	let result = [];
	let newArr = {};

	for (let item of arr) {
		//newArr.length = 0;
		newArr['fullName'] = item.name + ' ' + item.surname;
		newArr['id'] = item.id;
		result.push(Object.assign({}, newArr));

	}

	return result;
}

alert(usersMapped2[1].id) // 
alert(usersMapped2[1].fullName) // Вася Пупкин
*/

//=9

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

//let sortedArr = sortByAge(arr);

sortByAge(arr);

function sortByAge(users) {
	users.sort((a, b) => a.age - b.age)
}


// теперь: [vasya, masha, petya]
//alert(arr[0].name); // Вася
//alert(arr[1].name); // Маша
//alert(arr[2].name); // Петя
/*
function sortByAge(users) {
	let ages = users.map(item => item.age);
	let result = [];
	let nameNew = '';
	let ageNew;

	ages.sort(compareAge);

	for (let item of ages) {
		nameNew = users.find(user => user.age == item).name;
		ageNew = item;
		result.push({ name: nameNew, age: ageNew })
	}

	function compareAge(a, b) {
		return a - b;
	}

	return result;
}
*/


//=10
/*
function shuffle(array) {
	let pos = 0;
	let arrCopy = array.slice();
	let arrResult = [];
	let poppedValue;
	let j = 0;

	while (array.length > 1) {
		pos = randomize(0, array.length - 1);

		arrResult.push(array[pos]);

		array.splice(pos, 1);
	}

	arrResult.push(array[0]);

	Object.assign(array, arrResult)

	function randomize(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
}

let arrA = [1, 2, 3];

shuffle(arrA);
console.log(arrA)
// arr = [3, 2, 1]

//shuffle(arrA);
// arr = [2, 1, 3]

//shuffle(arrA);
// arr = [3, 1, 2]
// ...

// подсчёт вероятности для всех возможных вариантов
let count = {
	'123': 0,
	'132': 0,
	'213': 0,
	'231': 0,
	'321': 0,
	'312': 0
};

for (let i = 0; i < 1000000; i++) {
	let array = [1, 2, 3];
	shuffle(array);
	count[array.join('')]++;
}

// показать количество всех возможных вариантов
for (let key in count) {
	console.log(`${key}: ${count[key]}`);
}

*/

//=11

function getAverageAge(arr) {
	let sum = 0;

	for (let item of arr) {
		sum += +item.age;
	}

	let firstVar = sum / arr.length;

	return arr.reduce((sumB, arr) => sumB + arr.age, 0) / arr.length;
}

let vasya1 = { name: "Вася", age: 25 };
let petya1 = { name: "Петя", age: 30 };
let masha1 = { name: "Маша", age: 29 };

let arrB = [vasya1, petya1, masha1];

//alert(getAverageAge(arrB)); // (25 + 30 + 29) / 3 = 28


//=12
function unique(arr) {
	for (let i = 1; i < arr.length; i++) {
		if (arr.slice(0, i).includes(arr[i])) {
			arr.splice(i, 1);
			i--;
		}
	}

	let firstVar = arr;
	//второй вариант
	return arr.reduce((arrRes, item) => {
		if (!arrRes.includes(item)) arrRes.push(item);

		return arrRes;
	}, [])
}

let strings = ["кришна", "кришна", "харе", "харе",
	"харе", "харе", "кришна", "кришна", ":-O"
];

//alert(unique(strings)); // кришна, харе, :-O
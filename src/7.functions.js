//1
/*
function makeCounter() {
	let count = 0;

	function abs() {
		return count++;
	}

	abs.set = function (value) {
		count = 123
		return count
	}

	abs.decrease = function () {
		count -= 1
		return count
	}

	return abs
}

let counter = makeCounter();

alert(counter())
alert(counter())
alert(counter())
alert(counter.set(123))
alert(counter.decrease())
*/

//2
/*
let sum = function sumic(a) {
	return function (b) {
		if (b()) return a + b
		return sumic(a + b)
	}
}

function sums(a) {
	return function (b) {
		return a + b
	}
}

alert(sum(10)(3)(23)(2)(1))


//3
function sum(a) {

	let currentSum = a;

	function f(b) {
		currentSum += b;
		return f;
	}

	f.toString = function () {
		return currentSum;
	};

	return f;
}

alert(sum(1)(2)); // 3
alert(sum(5)(-1)(2)); // 6
alert(sum(6)(-1)(-2)(-3)); // 0
alert(sum(0)(1)(2)(3)(4)(5)); // 15
*/


let exp = prompt('Введите выражение :', '2 * 2');


let calculator = new Function('return ' + exp);


alert(calculator());
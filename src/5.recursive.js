
//1
/*
function sumTo(n) {
	if (n == 0) {
		return n;
	} else {
		return n + sumTo(n - 1)
	}
}

function sumTo2(n) {
	return (n + 1) * (2 * 0 + 1 * (n)) / 2
}

function sumTo3(n) {
	let sum = 0;

	for (let i = 0; i <= n; i++) {
		sum += i;
	}

	return sum
}

let startDate = Date.now()
let x = sumTo3(10000)
let endDate = Date.now()
console.log(x, (endDate - startDate))
*/

//2
/*
function factorial(n) {
	if (n == 1) return n
	return n * factorial(n - 1)
}

alert(factorial(4))
*/

//3
/*
function fib(n) {
	if (n <= 2) return 1
	return fib(n - 1) + fib(n - 2)
}

function fib2(n) {
	let fibArr = [1, 1]

	for (let i = 2; i < n; i++) {
		fibArr.push(fibArr[i - 1] + fibArr[i - 2])
	}

	return fibArr[n - 1]
}

alert(fib2(3)); // 2
alert(fib2(7)); // 13
alert(fib2(77)); // 5527939700884757
*/


//4
/*
function printList(list) {
	let tmp = list;

	while (tmp) {
		console.log(tmp.value)
		tmp = tmp.next
	}
}

function printList2(list) {
	if (!list.next) {
		console.log(list.value)
		return
	} else {
		console.log(list.value)
		return printList2(list.next)
	}

}

let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			}
		}
	}
};

printList2(list)
*/

//5
/*
function printList2(list) {
	if (!list.next) {
		console.log(list.value)
	} else {
		printList2(list.next)
		console.log(list.value)
	}
}

function printList1(list) {
	let tmp = list;
	let arr = []

	while (tmp) {
		arr.push(tmp.value)
		tmp = tmp.next
	}

	console.log(arr.reverse())
}

let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			}
		}
	}
};

printList1(list)
*/
/*
function f() {
	let showArg = () => alert(arguments[0]);
	showArg(2);
}

f(1); // 1
*/



/*
function makeWorker() {
	let name = "Pete";

	return function () {
		alert(name);
	};
}


let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // что будет показано? "

*/
function f() {
	let value = Math.random();

	function g() {
		debugger; // в консоли: напишите alert(value); Такой переменной нет!
	}

	return g;
}

let g = f();
g();
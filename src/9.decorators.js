// сделаем worker.slow кеширующим
/*
let worker = {
	someMethod() {
		let res = 0;
		for (let i = 1; i <= 10000000; i++) {
			res = res + (i ** 5);
			res = res ** 0.5
		}
		return res
	},

	slow(x) {
		// здесь может быть страшно тяжёлая задача для процессора
		alert("Called with " + x);
		return x * this.someMethod(); // (*)
	}
};

// тот же код, что и выше
function cachingDecorator(func) {
	let cache = new Map();
	return function (x) {
		if (cache.has(x)) {
			return cache.get(x);
		}
		let result = func.call(this, x); // (**)
		cache.set(x, result);
		return result;
	};
}

let start = Date.now()
alert(worker.slow(1)); // оригинальный метод работает
console.log(Date.now() - start)

start = Date.now()
alert(worker.slow(1)); // оригинальный метод работает
console.log(Date.now() - start)

worker.slow = cachingDecorator(worker.slow); // теперь сделаем его кеширующим

start = Date.now()
alert(worker.slow(1)); // оригинальный метод работает
console.log(Date.now() - start)

start = Date.now()
alert(worker.slow(1)); // оригинальный метод работает
console.log(Date.now() - start)



let worker = {
	slow(min, max, avg) {
		alert(`Called with ${min},${max}`);
		return min + max + avg;
	}
};

function cachingDecorator(func, hash) {
	let cache = new Map();
	return function () {
		let key = hash(arguments); // (*)
		if (cache.has(key)) {
			return cache.get(key);
		}

		let result = func.call(this, ...arguments); // (**)

		cache.set(key, result);
		return result;
	};
}

function hash(args) {
	return Object.values(args).join(',');

}

worker.slow = cachingDecorator(worker.slow, hash);

alert(worker.slow(3, 5, 4)); // работает
alert("Again " + worker.slow(3, 5, 4)); // аналогично (из кеша)

*/

//1


/*
function work(a, b) {
	return (a + b); // произвольная функция или метод
}

function spy(func) {
	let cache = new Map();

	wrapper.calls = []

	function wrapper(...args) {
		let key = hash(args);
		let result

		if (cache.has(key)) {
			result = cache.get(key)
			//alert('from cache')
		} else {
			result = func.apply(this, arguments);
			cache.set(key, result);
		}

		wrapper.calls.push(args);

		return result
	}

	return wrapper

}

function hash(args) {
	return Object.values(args).join(',');
}

work = spy(work);

alert(work(1, 2)); // 3
alert(work(4, 5)); // 9
alert(work(1, 2)); // 9

for (let args of work.calls) {
	alert('call:' + args.join()); // "call:1,2", "call:4,5"
}
*/


//2
/*
function f(x) {
	alert(x);
}

// создаём обёртки
function delay(f, ms) {
	return function (...args) {
		let arg = args
		let i = 0
		let savedThis = this
		return setTimeout(function func() {
			f.call(savedThis, args[i])
			i++
			if (i < args.length) return setTimeout(func, ms)
		}, ms);
	}
}


let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test", "test2"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс


//3

function alerts(text) {
	alert(text)
}

function debounce(func, ms) {
	let timer = 0

	return function () {
		if (timer === 0 || (Date.now() - timer >= ms)) {
			timer = Date.now()
			return func.apply(this, arguments)
		} else {
			return
		}
	}
}

let f = debounce(alerts, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)


//3

//1

function work(a, b) {
	alert(a + b); // произвольная функция или метод
}

function spy(func) {
	wrapper.calls = [];

	function wrapper(...args) {
		wrapper.calls.push(Object.values(arguments))
		return func.apply(this, arguments)
		//return func(arguments[0], arguments[1])
	}

	return wrapper
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
	alert('call:' + args.join()); // "call:1,2", "call:4,5"
}
*/

//2
/*
function f(x) {
	alert(x);
}

function delay(f, ms) {
	return function () {
		return setTimeout(() => {
			f.apply(this, arguments)
		}, ms)
	}

}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 4500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс
*/

//3
/*
function alerts(text) {
	alert(text)
}

function debounce(f, ms) {
	isCD = false;

	return function () {

		if (!isCD) {
			f.apply(this, arguments)
			isCD = true;
			setTimeout(() => isCD = false, ms);
		}
	}
}

let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
*/

//4

/*
function throttle(f, ms) {
	let isCD = false;
	let queque = ''

	return function wrapper() {

		if (!isCD) {
			f.apply(this, arguments)
			queque = ''
			isCD = true;

			setTimeout(() => {
				if (queque) {
					//isCD = false
					//f.apply(this, queque)
					//queque = ''
					console.log(1)
					isCD = false
					wrapper.apply(this, queque)
				} else {
					isCD = false
				}
			}, ms);

		} else {
			queque = arguments
		}
	}
}

let f = throttle(alert, 3000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 200); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(5), 300); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(6), 300); // проигнорирован (прошло только 100 мс)

setTimeout(() => f(7), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(8), 1100); // выполняется
setTimeout(() => f(9), 3500); // проигнорирован (прошло только 400 мс от последнего вызова)
setTimeout(() => f(10), 3700); // проигнорирован (прошло только 400 мс от последнего вызова)
setTimeout(() => f(11), 4600); // проигнорирован (прошло только 400 мс от последнего вызова)
*/

/*
function ask(question, ...handlers) {
	let isYes = confirm(question);

	for (let handler of handlers) {
		if (handler.length == 0) {
			if (isYes) handler();
		} else {
			handler(isYes);
		}
	}

}

// для положительных ответов вызываются оба типа обработчиков
// для отрицательных - только второго типа
ask("Вопрос?", () => alert('Вы ответили да'), result => alert(result));



function sayHi() {
	alert("Hi");

	// давайте посчитаем, сколько вызовов мы сделали
	sayHi.counter++;
}
sayHi.counter = 0; // начальное значение

sayHi(); // Hi
sayHi(); // Hi

sayHi.counter = 5; // начальное значение
sayHi(); // Hi

alert(`Вызвана ${sayHi.counter} раза`); // Вызвана 2 раза
*/


function makeCounter() {

	function counter() {
		return counter.count++;
	};

	counter.count = 0;

	return counter;
}

let counter = makeCounter();

counter.count = 10;
alert(counter()); // 10
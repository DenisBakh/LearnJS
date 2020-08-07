//1 
/*
function printNumbers(from, to) {
	let n = from;
	let timer = setTimeout(function tick() {
		alert(n)
		if (n++ <= to) timer = setTimeout(tick, 1000)
	}, 1000)
}

function printNumbers2(from, to) {
	let n = from;
	let timer = setInterval(() => {
		alert(n++)
		if (n > to) clearInterval(timer)
	}, 1000);
}

printNumbers2(1, 5)
*/

function printNumbers(from, to) {
	let current = from;

	function go() {
		alert(current);
		if (current == to) {
			clearInterval(timerId);
		}
		current++;
	}

	go();
	let timerId = setInterval(go, 1000);
}

printNumbers(5, 10);


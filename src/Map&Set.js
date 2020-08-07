'use strict';


//let word2 = 'abras'.split('')
//let word = new Set([1, 2, 3, 1])
//console.log(word.values())


//1
/*
function unique(arr) {
	return Array.from(new Set(arr))
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
	"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values)); // Hare, Krishna, :-O
*/

//2

let messages = [
	{ text: "Hello", from: "John" },
	{ text: "How goes?", from: "John" },
	{ text: "See you soon", from: "Alice" }
];

let whenRead = new WeakMap();

messages[2].time = "23:42";
whenRead.set(messages[2]);
messages.pop();

console.log(whenRead, "\n", messages);
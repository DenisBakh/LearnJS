'use strict'
/*
let group = {
	title: "Our Group",
	students: ["John", "Pete", "Alice"],

	showList() {
		this.students.forEach(student => {
			title = "Ours Group",
				// Error: Cannot read property 'title' of undefined
				alert(this.title + ': ' + student)
		});
	}
};

group.showList();
*/
/*
function defer(f, ms) {
	return function () {
		//let ctx = this;
		setTimeout(function () {
			return f.apply(this, arguments);
		}, ms);
	};
}

function sayHi(who) {
	alert('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 1000);
sayHiDeferred("John"); // выводит "Hello, John" через 2 секунды
*/

function defer(func, ms) {
	return function () {
		//let th = this;
		setTimeout(() => func.apply(this, arguments), ms)
	}
}

function sayHi(friend) {
	alert(`Hello ${this.name} and ${friend}`)
}

let user = {
	name: 'kot',
	age: 1
}

let f = defer(sayHi, 1000);
f.bind(user)('molly');
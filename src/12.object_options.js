/*
let user = {};

Object.defineProperty(user, "name", {
	value: "John",
	writable: false,
	configurable: true
});

// теперь невозможно изменить user.name или его флаги
// всё это не будет работать:
//   user.name = "Pete"
//   delete user.name
//   defineProperty(user, "name", ...)
Object.defineProperty(user, "name", { configurable: false }); // Ошибка
Object.defineProperty(user, "name", { configurable: true }); // Ошибка
Object.defineProperty(user, "name", { writable: true }); // Ошибка
*/

let user = {
	name: "John",
	surname: "Smith",

	fullNames: `${name} ${surname}`,
	fullName: function () {
		return `${this.name} ${this.surname}`
	}
};

console.log(user.fullNames); // John Smith


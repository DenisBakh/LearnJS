
/*
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str);

alert(meetup.date); // Error!
*/

//1
/*
let user = {
	name: "Василий Иванович",
	age: 35
};

let userJson = JSON.stringify(user, null, 4)
alert(userJson)
let userObj = JSON.parse(userJson)
alert(userObj['age'])
*/

//2

/*
let room = {
	number: 23
};

let meetup = {
	title: "Совещание",
	occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
	place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer(key, value) {
	return (key != "" && value == meetup) ? undefined : value;
}, 4));
*/
/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/

// которая удалит свойства, ссылающиеся на meetup
let room = {
	number: 23,
	//occupiedBy: meetup
};

let meetup = {
	title: "Совещание",
	occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
	place: room,
	//self: meetup
};

// цикличные ссылки
//room.occupiedBy = meetup;
//meetup.self = meetup;

let json = JSON.stringify(meetup, function replacer(key, value) {
	console.log(key, value);
	return (key != "" && value == meetup) ? undefined : value;
}, 4);

let json2 = JSON.stringify(room, function replacer(key, value) {
	return ((value == room && key != "") || (this == value)) ? undefined : value;
}, 4);

console.log(json);
//console.log(json2);



function delCycle(obj) {
	let newObj = new Object(); // new Object will be prepare to JSON transform

	let twice = new Set();  // dublicate bank
	twice.add(obj);
	function engine(obj1, newObj1) {
		for (var key in obj1) {
			if (typeof (obj1[key]) !== 'object' || obj1[key] == null) {
				newObj1[key] = obj1[key];
			}
			else if (!twice.has(obj1[key])) // объект встретился впервые
			{
				newObj1[key] = new Object();
				twice.add(obj1[key]);
				engine(obj1[key], newObj1[key]);
			}
			else {
				newObj1[key] = undefined;
			}
		}
	}
	engine(obj, newObj);
	return newObj;
}
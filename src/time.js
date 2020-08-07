/*
let start = new Date(); // начинаем отсчёт времени

// выполняем некоторые действия
for (let i = 0; i < 100000; i++) {
	let doSomething = i * i * i;
}

let end = new Date(); // заканчиваем отсчёт времени

alert(`Цикл отработал за ${end - start} миллисекунд`);
*/
/*
function diffSubtract(date1, date2) {
	return date2 - date1;
}

function diffGetTime(date1, date2) {
	return date2.getTime() - date1.getTime();
}

function bench(f) {
	let date1 = new Date(0);
	let date2 = new Date();

	let start = Date.now();
	for (let i = 0; i < 100000; i++) f(date1, date2);
	return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

// добавляем для "разогрева" перед основным циклом
bench(diffSubtract);
bench(diffGetTime);

// bench(upperSlice) и bench(upperLoop) поочерёдно запускаются 10 раз
for (let i = 0; i < 10; i++) {
	time1 += bench(diffSubtract);
	time2 += bench(diffGetTime);
}

alert('Итоговое время diffSubtract: ' + time1);
alert('Итоговое время diffGetTime: ' + time2);
*/
/*
let date = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'));

alert(date);
*/

//1
/*
const newDate = new Date('2012-02-20T03:12:00');
const newDate2 = new Date(2012, 1, 20, 3, 12);
alert(newDate2)
*/

//2
/*
function getWeekDay(date) {
	let weekArr = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС',]
	return weekArr[date.getDay()]
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert(getWeekDay(date));        // нужно вывести "ВТ"
*/

//3
/*
function getWeekDay(date) {
	let day = date.getDay() + 1

	if (day > 7) day = 0

	return day
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert(getWeekDay(date));        // нужно вывести "ВТ"
*/

//4
/*
function getDateAgo(date, days) {
	return new Date(date - days * 24 * 3600 * 1000)
}

let date = new Date(2015, 0, 2);

alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)
*/

//5
/*
function getLastDayOfMonth(year, month) {
	return new Date(year, month + 1, 0).getDate()
}

alert(getLastDayOfMonth(2012, 1))
*/

//6
/*
function getSecondsToday() {
	let today = new Date()
	let year = today.getFullYear()
	let month = today.getMonth()
	let day = today.getDate()

	let today2 = new Date(year, month, day)

	return (today - today2) / 1000 / 60 / 60

	today.setDate(year, month, day)
	console.log(year, month, day, today2)
}

alert(getSecondsToday())
*/

//7
/*
function getSecondsToTomorrow() {
	let now = new Date()

	let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)

	return (tomorrow - now) / 1000
}

alert(getSecondsToTomorrow())
*/

//8

function formatDate(date) {
	let now = new Date();
	let diff = now - date;

	if (diff < 1000) {
		return "прямо сейчас"
	} else if (diff < 60000) {
		return `${diff / 1000} секунд назад`
	} else if (diff < 60000 * 60) {
		return `${diff / (60 * 1000)} минут назад`
	} else {
		let yearPre = date.getFullYear().toString().slice(-2)
		let year = yearPre < 10 ? '0' + yearPre : yearPre
		let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
		let day = (date.getDate() + 1) < 10 ? '0' + (date.getDate() + 1) : (date.getDate() + 1)
		let hour = (date.getHours()) < 10 ? '0' + (date.getHours()) : (date.getHours())
		let minute = (date.getMinutes()) < 10 ? '0' + (date.getMinutes()) : (date.getMinutes())
		return `${day}.${month}.${year} ${hour}:${minute}`
	}
}

alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date - 86400 * 1000)));
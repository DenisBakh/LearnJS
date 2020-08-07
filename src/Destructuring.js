//1
/*
let user = {
	name: "John",
	years: 30
};


let {
	name: name,
	years: age,
	isAdmin: isAdmin = false
} = user

alert(name); // John
alert(age); // 30
alert(isAdmin); // false
*/


//2

function topSalary(salaries) {
	if (Object.entries(salaries).length == 0) return null
	let [[, max = null]] = Object.entries(salaries).sort((a, b) => b[1] - a[1])
	return Object.entries(salaries)
		.filter((item) => item[1] == max)
		.map((item) => item[0])
}


let salaries = {
	"John": 300,
	"Pete": 300,
	"Mary": 250
};

console.log(topSalary(salaries))


/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n\r\nfunction pow(x, n) {\r\n\tif (n < 0) return NaN;\r\n\tif (Math.round(n) != n) return NaN;\r\n\r\n\tlet result = 1;\r\n\r\n\tfor (let i = 0; i < n; i++) {\r\n\t\tresult *= x;\r\n\t}\r\n\r\n\treturn result;\r\n}\r\n\r\n\r\n\r\n/*\r\n\r\nlet user = {};\r\nuser.name = 'John';\r\nuser.surName = 'Smith';\r\nuser.name = 'Pete';\r\ndelete user.name;\r\n\r\nlet schedule = {};\r\nalert(isEmpty(schedule)); // true\r\nschedule[\"8:30\"] = \"get up\";\r\nalert(isEmpty(schedule)); // false\r\n\r\nfunction isEmpty(obj) {\r\n\tfor (let key in obj) {\r\n\t\treturn false;\r\n\t}\r\n\r\n\treturn true;\r\n}\r\n\r\n\r\nlet salaries = {\r\n\tJohn: 100,\r\n\tAnn: 160,\r\n\tPete: 130\r\n}\r\n\r\nconsole.log(sumSalaries(salaries));\r\n\r\nfunction sumSalaries(obj) {\r\n\tlet result = 0;\r\n\tfor (let key in obj) {\r\n\t\tresult += obj[key];\r\n\t}\r\n\r\n\treturn result;\r\n}\r\n\r\n\r\n\r\nlet menu = {\r\n\twidth: 200,\r\n\theight: 300,\r\n\ttitle: \"My menu\"\r\n};\r\n\r\nmultiplyNumeric(menu);\r\nfunction multiplyNumeric(obj) {\r\n\tfor (let key in obj) {\r\n\t\tif (typeof (obj[key]) === 'number') {\r\n\t\t\tobj[key] *= 2;\r\n\t\t}\r\n\t}\r\n}\r\n\r\nconsole.log('высота:', menu.height, '; ширина: ', menu.width, '; title: ', menu.title);\r\n\r\n\r\nlet user = {\r\n\tname: \"Jhon\",\r\n\thi() { alert(this.name); },\r\n\tbye() { alert(\"bye\"); }\r\n};\r\n\r\nuser.hi(); // Джон (простой вызов метода работает хорошо)\r\n\r\n// теперь давайте попробуем вызывать user.hi или user.bye\r\n// в зависимости от имени пользователя user.name\r\n(user.name == \"Jhon\" ? user.hi() : user.bye()); // Ошибка!\r\n\r\n\r\nlet user = {\r\n\tfirstName: \"asd\",\r\n\tsayHi() {\r\n\t\talert(this.firstName);\r\n\t}\r\n};\r\n\r\nuser.sayHi(); // Илья\r\n\r\n\r\nlet user = {\r\n\tname: \"cxz\",\r\n\tgo: function () { alert(this.name) }\r\n};\r\n\r\n(user.go()) // ошибка!\r\n\r\nfunction makeUser() {\r\n\treturn {\r\n\t\tname: \"Джон\",\r\n\t\tref: this\r\n\t};\r\n};\r\n\r\nlet user = makeUser();\r\n\r\nalert(user.ref.name); // Error: Cannot read property 'name' of undefined\r\n\r\nlet calculator = {\r\n\ta: 0,\r\n\tb: 0,\r\n\tread: function () {\r\n\t\tthis.a = prompt('Enter the first value');\r\n\t\tthis.b = prompt('Enter the second value');\r\n\t},\r\n\tsum: function () {\r\n\t\treturn +this.a + +this.b;\r\n\t},\r\n\tmul: function () {\r\n\t\treturn this.a * this.b;\r\n\t},\r\n};\r\n\r\ncalculator.read();\r\nalert(calculator.sum());\r\nalert(calculator.mul());\r\n\r\n\r\n\r\n\r\nlet ladder = {\r\n\tstep: 0,\r\n\tup() {\r\n\t\tthis.step++;\r\n\t\treturn this;\r\n\t},\r\n\tdown() {\r\n\t\tthis.step--;\r\n\t\treturn this;\r\n\t},\r\n\tshowStep: function () { // показывает текущую ступеньку\r\n\t\talert(this.step);\r\n\t}\r\n};\r\n\r\n\r\nladder.up();\r\nladder.up();\r\nladder.down();\r\nladder.showStep(); // 1\r\n\r\n\r\nladder.up().up().down().showStep(); // 1\r\n*/\r\n/*\r\nlet user = {};\r\nalert(!!user);\r\n\r\nfunction User(name) {\r\n\tthis.name = name;\r\n\tthis.isAdmin = false;\r\n}\r\n\r\nlet user = new User(\"asd\");\r\n\r\nalert(user.name); // Вася\r\nalert(user.isAdmin); // false\r\n\r\n\r\nfunction A() {\r\n\r\n };\r\n\r\nfunction B() {\r\n\r\n };\r\n\r\nlet a = new A;\r\nlet b = new B;\r\n\r\nalert( a == b ); // true\r\n\r\n\r\nfunction Calculator() {\r\n\tthis.read = function () {\r\n\t\tthis.a = prompt('Enter the first value');\r\n\t\tthis.b = prompt('Enter the second value');\r\n\t};\r\n\tthis.sum = function () {\r\n\t\treturn +this.a + +this.b;\r\n\t};\r\n\tthis.mul = function () {\r\n\t\treturn this.a * this.b;\r\n\t};\r\n};\r\n\r\n\r\nlet calculator = new Calculator();\r\ncalculator.read();\r\n\r\nalert(\"Sum=\" + calculator.sum());\r\nalert(\"Mul=\" + calculator.mul());\r\n\r\n\r\nfunction Accumulator(startingValue) {\r\n\tthis.value = +startingValue;\r\n\tthis.read = function () {\r\n\t\tlet input = +prompt('Enter additional value', 0);\r\n\t\tthis.value += input;\r\n\t};\r\n};\r\n\r\nlet accumulator = new Accumulator(1); // начальное значение 1\r\n\r\naccumulator.read(); // прибавит ввод prompt к текущему значению\r\naccumulator.read(); // прибавит ввод prompt к текущему значению\r\n\r\nalert(accumulator.value); // выведет сумму этих значений\r\n\r\n\r\nlet str = \"Привет\";\r\n\r\nstr.test = 5; // (*)\r\n\r\nalert(str.test);\r\n\r\n\r\nlet sumPrompt = () => {\r\n\tlet a = +prompt('Enter the first value');\r\n\tlet b = +prompt('Enter the second value');\r\n\treturn a + b;\r\n}\r\n\r\nalert(sumPrompt());\r\n\r\n\r\nalert(6.35.toFixed(20)); // 6.3\r\n*/\r\n\r\n/*\r\nfunction readNumber() {\r\n\tlet result = prompt('Enter the first value');\r\n\tconsole.log(result === null)\r\n\tconsole.log(result === '')\r\n\tconsole.log(isNaN(Number(result)))\r\n\r\n\tif (result === null || result === '' || !(isNaN(Number(result)))) {\r\n\t\treturn null;\r\n\t} else {\r\n\t\treadNumber();\r\n\t};\r\n};\r\n\r\nreadNumber();\r\n\r\n\r\nfunction random(min, max) {\r\n\tlet result = Math.floor(Math.random() * (max - min + 1) + min);\r\n\treturn result;\r\n\r\n}\r\n\r\nalert(random(1, 5)); // 1.2345623452\r\nalert(random(1, 5)); // 3.7894332423\r\nalert(random(1, 5)); // 4.3435234525\r\nalert(random(1, 5)); // 4.3435234525\r\nalert(random(1, 5)); // 4.3435234525\r\nalert(random(1, 5)); // 4.3435234525\r\nalert(random(1, 5)); // 4.3435234525\r\n\r\n\r\nfunction ucFirst(str) {\r\n\tif (!str) return str;\r\n\r\n\treturn str[0].toUpperCase() + str.slice(1);\r\n};\r\n\r\nconsole.log(ucFirst('vasya'));\r\n\r\n\r\n\r\nfunction checkSpam(str) {\r\n\tstr = str.toLowerCase();\r\n\r\n\tconsole.log(str.includes('viagra') || str.includes('xxx'));\r\n};\r\n\r\ncheckSpam('buy ViAgRA now')\r\ncheckSpam('free xxxxx')\r\ncheckSpam(\"innocent rabbit\")\r\n\r\n\r\nfunction truncate(str, maxlength) {\r\n\tif (str.length > maxlength) {\r\n\t\treturn str.slice(0, maxlength - 1) + '…';\r\n\t} else {\r\n\t\treturn str;\r\n\t}\r\n}\r\n\r\n\r\nconsole.log(truncate(\"Вот, что мне хотелось бы сказать на эту тему:\", 20));\r\n\r\nconsole.log(truncate(\"Всем привет!\", 20));\r\n\r\nfunction extractCurrencyValue(str) {\r\n\tif (str[0] === '$') {\r\n\t\treturn +str.slice(1);\r\n\t}\r\n}\r\n\r\nalert(extractCurrencyValue('$120') === 120); // true\r\n\r\n\r\n\r\nlet styles = [];\r\n\r\nconsole.log(Math.floor((styles.length - 1) / 2));\r\n\r\nstyles.push('Рок-н-ролл');\r\n\r\nstyles[Math.floor((styles.length - 1) / 2)] = 'Классика';\r\n\r\nalert(styles.pop());\r\n\r\nstyles.unshift('Рэп', 'Регги');\r\n\r\nfunction sumInput() {\r\n\tlet input;\r\n\tlet resultArr = [];\r\n\r\n\twhile (true) {\r\n\t\tinput = +prompt('Введите число для суммирования');\r\n\t\tconsole.log(isFinite(input) && input != '' && !(isNaN(input)));\r\n\r\n\t\tif (isFinite(input) && input != '' && !(isNaN(input))) {\r\n\t\t\tresultArr.push(input);\r\n\t\t} else {\r\n\t\t\tbreak;\r\n\t\t};\r\n\t};\r\n\r\n\tlet resultSum = 0;\r\n\r\n\tfor (let item of resultArr) {\r\n\t\tresultSum += item\r\n\t}\r\n\r\n\talert(resultSum);\r\n};\r\n\r\nsumInput();\r\n\r\n\r\n\r\nfunction getMaxSubSum(arr) {\r\n\tlet sumMax = 0;\r\n\r\n\tfor (let i = 0; i <= arr.length; i++) {\r\n\t\tif (arr[i] <= 0) continue;\r\n\r\n\t\tlet numberSum = 0;\r\n\r\n\t\tfor (let j = i; j <= arr.length; j++) {\r\n\t\t\tnumberSum += arr[j];\r\n\r\n\t\t\tif (numberSum > sumMax) sumMax = numberSum;\r\n\t\t}\r\n\t}\r\n\r\n\tconsole.log(sumMax);\r\n}\r\n\r\ngetMaxSubSum([-1, 2, 3, -9]) //= 5 (сумма выделенных)\r\ngetMaxSubSum([2, -1, 2, 3, -9]) //= 6\r\ngetMaxSubSum([-1, 2, 3, -9, 11])// = 11\r\ngetMaxSubSum([-2, -1, 1, 2])// = 3\r\ngetMaxSubSum([100, -9, 2, -3, 5]) //= 100\r\ngetMaxSubSum([1, 2, 3]) //= 6 (берём все)\r\n\r\n\r\n\r\nlet arr = [1, 2];\r\n\r\nlet arrayLike = {\r\n\t0: \"что-то\",\r\n\t1: \"ещё\",\r\n\t[Symbol.isConcatSpreadable]: true,\r\n\tlength: 1\r\n};\r\n\r\nalert(arr.concat(arrayLike)); // 1,2,что-то,ещё\r\n\r\n\r\n\r\n[\"Bilbo\", \"Gandalf\", \"Nazgul\"].forEach((item, index, arrays) => {\r\n\talert(`${item} имеет позицию ${index} в ${arrays}`);\r\n});\r\n\r\n\r\n[1, -2, 15, 2, 0, 8].sort(function (a, b) {\r\n\talert(a + \" <> \" + b);\r\n});\r\n\r\n\r\nlet army = {\r\n\tminAge: 18,\r\n\tmaxAge: 27,\r\n\tcanJoin(user) {\r\n\t\treturn user.age >= this.minAge && user.age < this.maxAge;\r\n\t}\r\n};\r\n\r\nlet users = [\r\n\t{ age: 16 },\r\n\t{ age: 20 },\r\n\t{ age: 23 },\r\n\t{ age: 30 }\r\n];\r\n\r\n// найти пользователей, для которых army.canJoin возвращает true\r\nlet soldiers = users.filter(user => army.canJoin(user), army); //users.filter(army.canJoin, army);\r\n\r\nalert(soldiers.length); // 2\r\nalert(soldiers[0].age); // 20\r\nalert(soldiers[1].age); // 23\r\n\r\n\r\n\r\n//======================Arrays==============\r\n//=1\r\nfunction camelize(str) {\r\n\tlet arr = str.split('-');\r\n\r\n\tfor (let i = 1; i < arr.length; i++) {\r\n\t\tarr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);\r\n\t}\r\n\r\n\treturn arr.join('');\r\n}\r\n\r\n\r\nfunction camelize2(str) {\r\n\treturn str\r\n\t\t.split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']\r\n\t\t.map(\r\n\t\t\t// Переводит в верхний регистр первые буквы всех элементом массива за исключением первого\r\n\t\t\t// превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']\r\n\t\t\t(word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)\r\n\t\t)\r\n\t\t.join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'\r\n\r\n\r\n\tconsole.log(camelize(\"background-color\") == 'backgroundColor');\r\n\tconsole.log(camelize(\"list-style-image\") == 'listStyleImage');\r\n\tconsole.log(camelize(\"-webkit-transition\") == 'WebkitTransition');\r\n\r\n//=2\r\nfunction filterRange(arr, a, b) {\r\n\treturn arr.filter((item) => item <= b && item >= a);\r\n}\r\n\r\nlet arr = [5, 3, 8, 1];\r\n\r\nlet filtered = filterRange(arr, 1, 4);\r\n\r\nalert(filtered); // 3,1 (совпадающие значения)\r\n\r\nalert(arr); // 5,3,8,1 (без изменений)\r\n\r\n\r\n//=3\r\nfunction filterRangeInPlace(arr, a, b) {\r\n\t//arr = arr.filter((item) => item <= b && item >= a);\r\n\r\n\t\t//for (let i = 0; i < arr.length; i++) {\r\n\t\t//\tif (!(arr[i] <= b && arr[i] >= a)) arr.splice(i, 1)\r\n\t\t//}\r\n\r\n\tarr.map((item, index, arr) => (item <= b && item >= a) ? 0 : arr.splice(index, 1))\r\n}\r\n\r\nlet arr = [5, 3, 2, 8, 1, 2, 2, 4];\r\n\r\nfilterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4\r\n\r\nalert(arr); // [3, 1]\r\n\r\n\r\n//=4\r\nlet arr = [5, 2, 1, -10, 8];\r\n\r\narr.sort((a, b) => a - b).reverse();\r\n\r\nalert(arr); // 8, 5, 2, 1, -10\r\n\r\n\r\n//=5\r\nlet arr = [\"HTML\", \"JavaScript\", \"CSS\"];\r\n\r\nlet sorted = copySorted(arr);\r\n\r\nalert(sorted); // CSS, HTML, JavaScript\r\nalert(arr); // HTML, JavaScript, CSS (без изменений)\r\n\r\nfunction copySorted(arr) {\r\n\t//let copyArr = arr.slice();\r\n\r\n\t//return copyArr.sort();\r\n\treturn arr.slice().sort();\r\n}\r\n*/\r\n\r\n//=6===!!!!!!!!!!!\r\n\r\nfunction Calculator() {\r\n\r\n\tthis.toArr = (str) => {\r\n\t\tthis.arr = str.split(' ');\r\n\t\tthis.name = this.arr[1];\r\n\t\tthis.a = +this.arr[0];\r\n\t\tthis.b = +this.arr[2];\r\n\t}\r\n\r\n\tthis.formulaObj = {\r\n\t\t\"-\": (a, b) => a - b,\r\n\t\t\"+\": (a, b) => a + b,\r\n\t\t//Прочитать про отличие стрелочных функций. след код не работает \r\n\t\t/*\r\n\t\t\"+\": (a, b) => {\r\n\t\t\ta + b\r\n\t\t},\r\n\t\t*/\r\n\t}\r\n\r\n\tthis.calculate = (str) => {\r\n\t\tthis.toArr(str)\r\n\r\n\t\tif (this.name in this.formulaObj) {\r\n\t\t\treturn this.formulaObj[this.name](this.a, this.b);\r\n\t\t} else {\r\n\t\t\treturn 'Такой операции калькулятор не знает';\r\n\t\t}\r\n\r\n\t};\r\n\r\n\tthis.addMethod = function (name, func) {\r\n\t\tthis.formulaObj[name] = func;\r\n\t}\r\n\r\n}\r\n\r\nlet calc = new Calculator;\r\n\r\nalert(calc.calculate(\"5 - 13\")); // 10\r\n\r\nlet powerCalc = new Calculator;\r\npowerCalc.addMethod(\"*\", (a, b) => a * b);\r\npowerCalc.addMethod(\"/\", (a, b) => a / b);\r\npowerCalc.addMethod(\"**\", (a, b) => a ** b);\r\n\r\n//console.log(powerCalc);\r\n\r\nlet result = powerCalc.calculate(\"2 ** 3\");\r\n//alert(result); // 8\r\nresult = powerCalc.calculate(\"24 / 3\");\r\n//alert(result); // 8\r\nresult = powerCalc.calculate(\"4 * 3\");\r\n//alert(result); // 8\r\n\r\n\r\n\r\n\r\n//=7====================================\r\n/*\r\nfunction namesFromArray(arr) {\r\n\tlet result = [];\r\n\r\n\tfor (let item of arr) {\r\n\t\tresult.push(item.name);\r\n\t}\r\n\r\n\treturn result;\r\n}\r\n\r\nlet vasya = { name: \"Вася\", age: 25 };\r\nlet petya = { name: \"Петя\", age: 30 };\r\nlet masha = { name: \"Маша\", age: 28 };\r\n\r\nlet users = [vasya, petya, masha];\r\n\r\nlet names = namesFromArray(users);\r\n\r\nlet names2 = users.map(item => item.name);\r\n\r\nalert(names2); // Вася, Петя, Маша\r\n*/\r\n\r\n//=8====================================\r\nlet vasya = { name: \"Вася\", surname: \"Пупкин\", id: 1 };\r\nlet petya = { name: \"Петя\", surname: \"Иванов\", id: 2 };\r\nlet masha = { name: \"Маша\", surname: \"Петрова\", id: 3 };\r\n\r\nlet users = [vasya, petya, masha];\r\n\r\n//let usersMapped = users.map((item, arr) => (arr.item.name + ' ' + arr.item.surname))\r\n\r\nlet usersMapped = fullNameFromArray(users);\r\n\r\nfunction fullNameFromArray(arr) {\r\n\tlet result = [];\r\n\tlet newArr = [];\r\n\r\n\tfor (let item of arr) {\r\n\t\tnewArr['fullName'] = item.name + ' ' + item.surname;\r\n\t\tnewArr['id'] = item.id;\r\n\t\tresult.push(newArr);\r\n\t}\r\n\r\n\treturn result;\r\n}\r\n\r\n/*\r\nusersMapped = [\r\n  { fullName: \"Вася Пупкин\", id: 1 },\r\n  { fullName: \"Петя Иванов\", id: 2 },\r\n  { fullName: \"Маша Петрова\", id: 3 }\r\n]\r\n*/\r\n\r\n\r\n\r\nalert(usersMapped[0].id) // 1\r\nalert(usersMapped[0].fullName) // Вася Пупкин\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });
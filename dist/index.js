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
eval("\r\n\r\n\r\nfunction pow(x, n) {\r\n\tif (n < 0) return NaN;\r\n\tif (Math.round(n) != n) return NaN;\r\n\r\n\tlet result = 1;\r\n\r\n\tfor (let i = 0; i < n; i++) {\r\n\t\tresult *= x;\r\n\t}\r\n\r\n\treturn result;\r\n}\r\n\r\n\r\n\r\n/*\r\n\r\nlet user = {};\r\nuser.name = 'John';\r\nuser.surName = 'Smith';\r\nuser.name = 'Pete';\r\ndelete user.name;\r\n\r\nlet schedule = {};\r\nalert(isEmpty(schedule)); // true\r\nschedule[\"8:30\"] = \"get up\";\r\nalert(isEmpty(schedule)); // false\r\n\r\nfunction isEmpty(obj) {\r\n\tfor (let key in obj) {\r\n\t\treturn false;\r\n\t}\r\n\r\n\treturn true;\r\n}\r\n\r\n\r\nlet salaries = {\r\n\tJohn: 100,\r\n\tAnn: 160,\r\n\tPete: 130\r\n}\r\n\r\nconsole.log(sumSalaries(salaries));\r\n\r\nfunction sumSalaries(obj) {\r\n\tlet result = 0;\r\n\tfor (let key in obj) {\r\n\t\tresult += obj[key];\r\n\t}\r\n\r\n\treturn result;\r\n}\r\n\r\n\r\n\r\nlet menu = {\r\n\twidth: 200,\r\n\theight: 300,\r\n\ttitle: \"My menu\"\r\n};\r\n\r\nmultiplyNumeric(menu);\r\nfunction multiplyNumeric(obj) {\r\n\tfor (let key in obj) {\r\n\t\tif (typeof (obj[key]) === 'number') {\r\n\t\t\tobj[key] *= 2;\r\n\t\t}\r\n\t}\r\n}\r\n\r\nconsole.log('высота:', menu.height, '; ширина: ', menu.width, '; title: ', menu.title);\r\n\r\n\r\nlet user = {\r\n\tname: \"Jhon\",\r\n\thi() { alert(this.name); },\r\n\tbye() { alert(\"bye\"); }\r\n};\r\n\r\nuser.hi(); // Джон (простой вызов метода работает хорошо)\r\n\r\n// теперь давайте попробуем вызывать user.hi или user.bye\r\n// в зависимости от имени пользователя user.name\r\n(user.name == \"Jhon\" ? user.hi() : user.bye()); // Ошибка!\r\n\r\n\r\nlet user = {\r\n\tfirstName: \"asd\",\r\n\tsayHi() {\r\n\t\talert(this.firstName);\r\n\t}\r\n};\r\n\r\nuser.sayHi(); // Илья\r\n\r\n\r\nlet user = {\r\n\tname: \"cxz\",\r\n\tgo: function () { alert(this.name) }\r\n};\r\n\r\n(user.go()) // ошибка!\r\n\r\nfunction makeUser() {\r\n\treturn {\r\n\t\tname: \"Джон\",\r\n\t\tref: this\r\n\t};\r\n};\r\n\r\nlet user = makeUser();\r\n\r\nalert(user.ref.name); // Error: Cannot read property 'name' of undefined\r\n\r\nlet calculator = {\r\n\ta: 0,\r\n\tb: 0,\r\n\tread: function () {\r\n\t\tthis.a = prompt('Enter the first value');\r\n\t\tthis.b = prompt('Enter the second value');\r\n\t},\r\n\tsum: function () {\r\n\t\treturn +this.a + +this.b;\r\n\t},\r\n\tmul: function () {\r\n\t\treturn this.a * this.b;\r\n\t},\r\n};\r\n\r\ncalculator.read();\r\nalert(calculator.sum());\r\nalert(calculator.mul());\r\n\r\n\r\n\r\n\r\nlet ladder = {\r\n\tstep: 0,\r\n\tup() {\r\n\t\tthis.step++;\r\n\t\treturn this;\r\n\t},\r\n\tdown() {\r\n\t\tthis.step--;\r\n\t\treturn this;\r\n\t},\r\n\tshowStep: function () { // показывает текущую ступеньку\r\n\t\talert(this.step);\r\n\t}\r\n};\r\n\r\n\r\nladder.up();\r\nladder.up();\r\nladder.down();\r\nladder.showStep(); // 1\r\n\r\n\r\nladder.up().up().down().showStep(); // 1\r\n*/\r\n/*\r\nlet user = {};\r\nalert(!!user);\r\n\r\nfunction User(name) {\r\n\tthis.name = name;\r\n\tthis.isAdmin = false;\r\n}\r\n\r\nlet user = new User(\"asd\");\r\n\r\nalert(user.name); // Вася\r\nalert(user.isAdmin); // false\r\n\r\n\r\nfunction A() { \r\n\t\r\n };\r\n\r\nfunction B() {\r\n\t\r\n };\r\n\r\nlet a = new A;\r\nlet b = new B;\r\n\r\nalert( a == b ); // true\r\n\r\n\r\nfunction Calculator() {\r\n\tthis.read = function () {\r\n\t\tthis.a = prompt('Enter the first value');\r\n\t\tthis.b = prompt('Enter the second value');\r\n\t};\r\n\tthis.sum = function () {\r\n\t\treturn +this.a + +this.b;\r\n\t};\r\n\tthis.mul = function () {\r\n\t\treturn this.a * this.b;\r\n\t};\r\n};\r\n\r\n\r\nlet calculator = new Calculator();\r\ncalculator.read();\r\n\r\nalert(\"Sum=\" + calculator.sum());\r\nalert(\"Mul=\" + calculator.mul());\r\n\r\n\r\nfunction Accumulator(startingValue) {\r\n\tthis.value = +startingValue;\r\n\tthis.read = function () {\r\n\t\tlet input = +prompt('Enter additional value', 0);\r\n\t\tthis.value += input;\r\n\t};\r\n};\r\n\r\nlet accumulator = new Accumulator(1); // начальное значение 1\r\n\r\naccumulator.read(); // прибавит ввод prompt к текущему значению\r\naccumulator.read(); // прибавит ввод prompt к текущему значению\r\n\r\nalert(accumulator.value); // выведет сумму этих значений\r\n\r\n\r\nlet str = \"Привет\";\r\n\r\nstr.test = 5; // (*)\r\n\r\nalert(str.test);\r\n\r\n\r\nlet sumPrompt = () => {\r\n\tlet a = +prompt('Enter the first value');\r\n\tlet b = +prompt('Enter the second value');\r\n\treturn a + b;\r\n}\r\n\r\nalert(sumPrompt());\r\n\r\n\r\nalert(6.35.toFixed(20)); // 6.3\r\n*/\r\n\r\n/*\r\nfunction readNumber() {\r\n\tlet result = prompt('Enter the first value');\r\n\tconsole.log(result === null)\r\n\tconsole.log(result === '')\r\n\tconsole.log(isNaN(Number(result)))\r\n\r\n\tif (result === null || result === '' || !(isNaN(Number(result)))) {\r\n\t\treturn null;\r\n\t} else {\r\n\t\treadNumber();\r\n\t};\r\n};\r\n\r\nreadNumber();\r\n*/\r\n\r\nfunction random(min, max) {\r\n\tlet result = Math.floor(Math.random() * (max - min + 1) + min);\r\n\treturn result;\r\n\r\n}\r\n\r\nalert(random(1, 5)); // 1.2345623452\r\nalert(random(1, 5)); // 3.7894332423\r\nalert(random(1, 5)); // 4.3435234525\r\nalert(random(1, 5)); // 4.3435234525\r\nalert(random(1, 5)); // 4.3435234525\r\nalert(random(1, 5)); // 4.3435234525\r\nalert(random(1, 5)); // 4.3435234525\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });
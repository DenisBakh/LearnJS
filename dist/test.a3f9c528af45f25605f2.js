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
/******/ 	return __webpack_require__(__webpack_require__.s = "./test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./test.js":
/*!*****************!*\
  !*** ./test.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//import './index.js'\r\n\r\n// chai предоставляет большое количество функций. Объявим assert глобально\r\nlet assert = chai.assert;\r\n\r\n\r\n\r\ndescribe(\"pow\", function () {\r\n\r\n\tdescribe(\"возводит x в степень 3\", function () {\r\n\r\n\t\tfor (let x = 1; x <= 5; x++) {\r\n\t\t\tmakeTest(x);\r\n\t\t}\r\n\r\n\t\tfunction makeTest(x) {\r\n\t\t\tlet expected = x * x * x;\r\n\t\t\tit(`${x} в степени 3 будет ${expected}`, function () {\r\n\t\t\t\tassert.equal(pow(x, 3), expected);\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t});\r\n\r\n\tdescribe(\"возвоздит x в степень n\", function () {\r\n\r\n\t\tfor (let x = 0; x <= 5; x++) {\r\n\t\t\tfor (let n = 0; n <= 5; n++) {\r\n\t\t\t\tlet expected = 1;\r\n\t\t\t\tfor (let i = 1; i <= n; i++) {\r\n\t\t\t\t\texpected *= x;\r\n\t\t\t\t}\r\n\t\t\t\tit(`${x} в степени ${n} будет ${expected}`, function () {\r\n\t\t\t\t\tassert.equal(pow(x, n), expected)\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t});\r\n\r\n\tit(\"если n - отрицательное число, результат будет NaN\", function () {\r\n\t\tassert.isNaN(pow(2, -1));\r\n\t});\r\n\r\n\tit(\"если n не число, результат будет NaN\", function () {\r\n\t\tassert.isNaN(pow(2, 1.5));\r\n\t});\r\n\r\n});\r\n\r\n\r\n// запускаем тесты! \r\nmocha.run();\n\n//# sourceURL=webpack:///./test.js?");

/***/ })

/******/ });
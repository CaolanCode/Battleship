/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/gameboard */ \"./src/scripts/gameboard.js\");\n\nvar gameboard = (0,_scripts_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\ngameboard.placeShip(0, 0, 'S', 3);\ngameboard.receiveAttack(0, 0);\ngameboard.receiveAttack(1, 0);\ngameboard.receiveAttack(2, 0);\nconsole.log(gameboard.checkShips());\n\n//# sourceURL=webpack://battleship/./src/app.js?");

/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/scripts/ship.js\");\n\nvar Gameboard = function Gameboard() {\n  var numberOfShips = 0;\n  var gameboard = new Array(10);\n  for (var i = 0; i < 10; i++) {\n    gameboard[i] = new Array(10).fill(false);\n  }\n  var placeShip = function placeShip(i, j, dir, length) {\n    numberOfShips++;\n    var ship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(length);\n    if (dir === 'S') {\n      for (var k = 0; k < ship.length; k++) {\n        gameboard[i + k][j] = true;\n      }\n    } else if (dir === 'E') {\n      for (var _k = 0; _k < ship.length; _k++) {\n        gameboard[i][j + _k] = true;\n      }\n    }\n  };\n  var receiveAttack = function receiveAttack(i, j) {\n    if (gameboard[i][j] === true) {\n      placeShip.ship.hit();\n      return true;\n    }\n    return false;\n  };\n  var checkShips = function checkShips() {\n    if (numberOfShips === 0) {\n      return true;\n    }\n    return false;\n  };\n  return {\n    placeShip: placeShip,\n    receiveAttack: receiveAttack,\n    checkShips: checkShips\n  };\n};\n\n//# sourceURL=webpack://battleship/./src/scripts/gameboard.js?");

/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nvar Ship = function Ship(l) {\n  var length = l;\n  var hits = 0;\n  var hit = function hit() {\n    return hits++;\n  };\n  var isSunk = function isSunk() {\n    return length === hits ? true : false;\n  };\n  return {\n    hit: hit,\n    isSunk: isSunk\n  };\n};\n\n//# sourceURL=webpack://battleship/./src/scripts/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
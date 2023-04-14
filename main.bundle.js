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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_gameloop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/gameloop.js */ \"./src/scripts/gameloop.js\");\n/* harmony import */ var _scripts_styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/styles/style.css */ \"./src/scripts/styles/style.css\");\n\n\n\n// google symbol link \nvar link = document.createElement('link');\nlink.rel = 'stylesheet';\nlink.href = \"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,600,0,0\";\ndocument.head.appendChild(link);\n\n//# sourceURL=webpack://battleship/./src/app.js?");

/***/ }),

/***/ "./src/scripts/dom.js":
/*!****************************!*\
  !*** ./src/scripts/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createBoard\": () => (/* binding */ createBoard),\n/* harmony export */   \"fillBoard\": () => (/* binding */ fillBoard),\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"setListeners\": () => (/* binding */ setListeners),\n/* harmony export */   \"startControls\": () => (/* binding */ startControls)\n/* harmony export */ });\n/* harmony import */ var _gameloop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameloop */ \"./src/scripts/gameloop.js\");\n\nvar header = function header() {\n  var container = document.createElement('div');\n  container.classList.add('header');\n  container.innerText = 'Battleship';\n  return container;\n};\nvar createBoard = function createBoard(name, className) {\n  var board = document.createElement('div');\n  board.classList.add(className);\n  board.innerText = name;\n  for (var i = 0; i < 10; i++) {\n    var row = document.createElement('div');\n    row.classList.add('board-row');\n    for (var j = 0; j < 10; j++) {\n      var square = document.createElement('div');\n      square.classList.add('square');\n      row.appendChild(square);\n    }\n    board.appendChild(row);\n  }\n  return board;\n};\nvar displayShot = function displayShot(i, j, enemy, enemyBoard) {\n  var gameboard = enemy.getBoard();\n  var board = gameboard.getBoard();\n  var rows = enemyBoard.querySelectorAll('.board-row');\n  var squares = rows[i].querySelectorAll('.square');\n  var square = squares[j];\n  if (board[i][j] !== 'water' && board[i][j] !== 'buffer') square.classList.add('hit');else square.classList.add('miss');\n};\nvar fillBoard = function fillBoard(gameboard, screenBoard) {\n  var board = gameboard.getBoard();\n  var rows = screenBoard.querySelectorAll('.board-row');\n  for (var i = 0; i < rows.length; i++) {\n    var squares = rows[i].querySelectorAll('.square');\n    for (var j = 0; j < squares.length; j++) {\n      var square = squares[j];\n      if (board[i][j] !== 'water' && board[i][j] !== 'buffer') square.classList.add('ship-box');\n    }\n  }\n};\nvar displayWinner = function displayWinner(winner) {\n  var container = document.createElement('div');\n  container.classList.add('winner-notice');\n  container.innerText = winner.getName() + ' is the winner';\n  return container;\n};\nvar setListeners = function setListeners(player, computer) {\n  var computerBoard = document.querySelector('.computer-board');\n  var rows = computerBoard.querySelectorAll('.board-row');\n  var _loop = function _loop(i) {\n    var squares = rows[i].querySelectorAll('.square');\n    var _loop2 = function _loop2(j) {\n      squares[j].addEventListener('click', function () {\n        return handleListeners(i, j, player, computer);\n      });\n    };\n    for (var j = 0; j < 10; j++) {\n      _loop2(j);\n    }\n  };\n  for (var i = 0; i < 10; i++) {\n    _loop(i);\n  }\n};\nvar removeAllListeners = function removeAllListeners() {\n  var computerBoard = document.querySelector('.computer-board');\n  var squares = computerBoard.querySelectorAll('.square');\n  squares.forEach(function (square) {\n    var newSquare = square.cloneNode(true);\n    square.parentNode.replaceChild(newSquare, square);\n  });\n};\nvar handleListeners = function handleListeners(i, j, player, computer) {\n  var computerBoard = document.querySelector('.computer-board');\n  var playerBoard = document.querySelector('.player-board');\n  player.attack(i, j, computer);\n  displayShot(i, j, computer, computerBoard);\n  removeLastListener(i, j, computerBoard);\n  if (checkForWinner(player, computer, computerBoard)) return;\n  var cmptShot = computer.randomAttack(player);\n  displayShot(cmptShot[0], cmptShot[1], player, playerBoard);\n  if (checkForWinner(player, computer, computerBoard)) return;\n};\nvar checkForWinner = function checkForWinner(player, computer, computerBoard) {\n  if (computer.getBoard().checkShips()) {\n    removeAllListeners(computerBoard);\n    document.body.appendChild(displayWinner(player));\n    return true;\n  } else if (player.getBoard().checkShips()) {\n    removeAllListeners(computerBoard);\n    document.body.appendChild(displayWinner(computer));\n    return true;\n  }\n  return false;\n};\nvar removeLastListener = function removeLastListener(i, j, computerBoard) {\n  var rows = computerBoard.querySelectorAll('.board-row');\n  var squares = rows[i].querySelectorAll('.square');\n  squares[j].replaceWith(squares[j].cloneNode(true));\n};\nvar startControls = function startControls() {\n  var container = document.createElement('div');\n  container.classList.add('control-container');\n  var nameInput = document.createElement('input');\n  nameInput.classList.add('name-input');\n  nameInput.placeholder = 'Enter name';\n  container.appendChild(nameInput);\n  var randomPosBtn = document.createElement('button');\n  randomPosBtn.classList.add('control-btn');\n  randomPosBtn.innerText = 'Random';\n  randomPosBtn.addEventListener('click', _gameloop__WEBPACK_IMPORTED_MODULE_0__.playerRandomShips);\n  container.appendChild(randomPosBtn);\n  var dragDropBtn = document.createElement('button');\n  dragDropBtn.classList.add('control-btn');\n  dragDropBtn.innerText = 'Drag-&-Drop';\n  dragDropBtn.addEventListener('click', _gameloop__WEBPACK_IMPORTED_MODULE_0__.dragDropShips);\n  container.appendChild(dragDropBtn);\n  return container;\n};\n\n//# sourceURL=webpack://battleship/./src/scripts/dom.js?");

/***/ }),

/***/ "./src/scripts/dragDrop.js":
/*!*********************************!*\
  !*** ./src/scripts/dragDrop.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dragDropMenu\": () => (/* binding */ dragDropMenu)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/scripts/ship.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/scripts/dom.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n\n\n\nvar dragDropMenu = function dragDropMenu(player) {\n  var ships = [];\n  var carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5);\n  ships.push(carrier);\n  var battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4);\n  ships.push(battleship);\n  var destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\n  ships.push(destroyer);\n  var submarine1 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2);\n  ships.push(submarine1);\n  var submarine2 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2);\n  ships.push(submarine2);\n  var patrolBoat1 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1);\n  ships.push(patrolBoat1);\n  var patrolBoat2 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1);\n  ships.push(patrolBoat2);\n  var container = document.createElement('div');\n  container.classList.add('boards-container');\n  var shipBtn = document.createElement('div');\n  shipBtn.classList.add('ship-btn');\n  container.appendChild(dragDropBoard(player, 'player-board', ships));\n  var dirBtn = document.createElement('button');\n  dirBtn.classList.add('dir-btn');\n  dirBtn.classList.add('vertical');\n  dirBtn.innerHTML = '<span class=\"material-symbols-outlined\">south</span>';\n  dirBtn.addEventListener('click', function () {\n    var isSouth = dirBtn.classList.contains('vertical');\n    if (isSouth) {\n      dirBtn.innerHTML = '<span class=\"material-symbols-outlined\">east</span>';\n      dirBtn.classList.remove('vertical');\n      dirBtn.classList.add('horizontal');\n      changeShipDir();\n    } else {\n      dirBtn.innerHTML = '<span class=\"material-symbols-outlined\">south</span>';\n      dirBtn.classList.remove('horizontal');\n      dirBtn.classList.add('vertical');\n      changeShipDir();\n    }\n  });\n  shipBtn.appendChild(dirBtn);\n  var dragDropShips = document.createElement('div');\n  dragDropShips.classList.add('drag-drop-ships');\n  dragDropShips.classList.add('horizontal');\n  ships.forEach(function (ship) {\n    var shipContainer = document.createElement('div');\n    shipContainer.classList.add('dd-ship');\n    shipContainer.setAttribute('draggable', true);\n    shipContainer.setAttribute('data-ship-id', ship.getID());\n    shipContainer.addEventListener('dragstart', function (event) {\n      event.dataTransfer.setData('text/plain', ship.getID());\n    });\n    for (var i = 0; i < ship.getLength(); i++) {\n      var shipSquare = document.createElement('div');\n      shipSquare.classList.add('ship-box');\n      shipContainer.appendChild(shipSquare);\n    }\n    dragDropShips.appendChild(shipContainer);\n  });\n  shipBtn.appendChild(dragDropShips);\n  container.appendChild(shipBtn);\n  return container;\n};\nvar changeShipDir = function changeShipDir() {\n  var shipContainer = document.querySelector('.drag-drop-ships');\n  var ships = document.querySelectorAll('.dd-ship');\n  if (shipContainer.classList.contains('vertical')) {\n    shipContainer.classList.remove('vertical');\n    shipContainer.classList.add('horizontal');\n    shipContainer.style.flexDirection = 'column';\n    ships.forEach(function (ship) {\n      ship.style.flexDirection = 'row';\n    });\n  } else {\n    shipContainer.classList.remove('horizontal');\n    shipContainer.classList.add('vertical');\n    shipContainer.style.flexDirection = 'row';\n    ships.forEach(function (ship) {\n      ship.style.flexDirection = 'column';\n    });\n  }\n};\nvar dragDropBoard = function dragDropBoard(player, className, ships) {\n  var board = document.createElement('div');\n  board.classList.add(className);\n  board.innerText = player.getName();\n  var _loop = function _loop(i) {\n    var row = document.createElement('div');\n    row.classList.add('board-row');\n    var _loop2 = function _loop2(j) {\n      var square = document.createElement('div');\n      square.classList.add('square');\n      square.classList.add('water');\n      square.addEventListener('dragover', function (event) {\n        event.preventDefault();\n      });\n      square.addEventListener('drop', function (event) {\n        event.preventDefault();\n        var shipID = event.dataTransfer.getData('text/plain');\n        var shipLength = document.querySelector(\"[data-ship-id=\\\"\".concat(shipID, \"\\\"]\")).children.length;\n        var shipDir = document.querySelector('.drag-drop-ships').classList.contains('horizontal') ? 'horizontal' : 'vertical';\n        if (shipDir === 'vertical' && shipLength + i <= 10) {\n          if (checkSpace(i, j, shipLength, shipDir)) {\n            var ship = ships.find(function (ele) {\n              return ele.getID() === shipID;\n            });\n            player.getBoard().placeShip(i, j, shipDir, ship);\n            positionShip(i, j, shipLength, shipDir);\n            var shipToRemove = document.querySelector(\"[data-ship-id=\\\"\".concat(shipID, \"\\\"]\"));\n            shipToRemove.remove();\n            if (document.querySelector('.drag-drop-ships').innerHTML.trim() === \"\") startGame(player);\n          }\n        } else if (shipDir === 'horizontal' && shipLength + j <= 10) {\n          if (checkSpace(i, j, shipLength, shipDir)) {\n            var _ship = ships.find(function (ele) {\n              return ele.getID() === shipID;\n            });\n            player.getBoard().placeShip(i, j, shipDir, _ship);\n            positionShip(i, j, shipLength, shipDir);\n            var _shipToRemove = document.querySelector(\"[data-ship-id=\\\"\".concat(shipID, \"\\\"]\"));\n            _shipToRemove.remove();\n            if (document.querySelector('.drag-drop-ships').innerHTML.trim() === \"\") startGame(player);\n          }\n        }\n      });\n      row.appendChild(square);\n    };\n    for (var j = 0; j < 10; j++) {\n      _loop2(j);\n    }\n    board.appendChild(row);\n  };\n  for (var i = 0; i < 10; i++) {\n    _loop(i);\n  }\n  return board;\n};\nvar checkSpace = function checkSpace(i, j, shipLength, shipDir) {\n  var board = document.querySelector('.player-board');\n  var rows = board.querySelectorAll('.board-row');\n  if (shipDir === 'horizontal') {\n    for (var k = i; k <= i; k++) {\n      var squares = rows[k].querySelectorAll('.square');\n      for (var l = j; l < shipLength + j; l++) {\n        if (!squares[l].classList.contains('water')) {\n          return false;\n        }\n      }\n    }\n  } else if (shipDir === 'vertical') {\n    for (var _k = i; _k < shipLength + i; _k++) {\n      var _squares = rows[_k].querySelectorAll('.square');\n      for (var _l = j; _l <= j; _l++) {\n        if (!_squares[_l].classList.contains('water')) {\n          return false;\n        }\n      }\n    }\n  }\n  return true;\n};\nvar positionShip = function positionShip(i, j, shipLength, shipDir) {\n  var board = document.querySelector('.player-board');\n  var rows = board.querySelectorAll('.board-row');\n  if (shipDir === 'horizontal') {\n    for (var k = i; k <= i; k++) {\n      var squares = rows[k].querySelectorAll('.square');\n      for (var l = j; l < shipLength + j; l++) {\n        squares[l].classList.remove('water');\n        squares[l].classList.add('ship-box');\n      }\n    }\n  } else if (shipDir === 'vertical') {\n    for (var _k2 = i; _k2 < shipLength + i; _k2++) {\n      var _squares2 = rows[_k2].querySelectorAll('.square');\n      for (var _l2 = j; _l2 <= j; _l2++) {\n        _squares2[_l2].classList.remove('water');\n        _squares2[_l2].classList.add('ship-box');\n      }\n    }\n  }\n  bufferShip(i, j, shipLength, shipDir);\n};\nvar bufferShip = function bufferShip(i, j, shipLength, shipDir) {\n  var upper, lower, left, right;\n  i === 0 ? upper = 0 : upper = i - 1;\n  j === 0 ? left = 0 : left = j - 1;\n  if (shipDir === 'vertical') {\n    i + shipLength >= 8 ? lower = 9 : lower = i + shipLength;\n    j === 9 ? right = 9 : right = j + 1;\n  } else {\n    i === 9 ? lower = 9 : lower = i + 1;\n    j + shipLength >= 8 ? right = 9 : right = j + shipLength;\n  }\n  var board = document.querySelector('.player-board');\n  var rows = board.querySelectorAll('.board-row');\n  for (var k = upper; k <= lower; k++) {\n    var squares = rows[k].querySelectorAll('.square');\n    for (var l = left; l <= right; l++) {\n      if (squares[l].classList.contains('water')) {\n        squares[l].classList.remove('water');\n        squares[l].classList.add('buffer');\n      }\n    }\n  }\n};\nvar startGame = function startGame(player) {\n  var boardsContainer = document.querySelector('.boards-container');\n  boardsContainer.innerHTML = \"\";\n  boardsContainer.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.createBoard)(player.getName(), 'player-board'));\n  boardsContainer.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.createBoard)('Computer', 'computer-board'));\n  document.body.appendChild(boardsContainer);\n  var playerBoard = document.querySelector('.player-board');\n  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.fillBoard)(player.getBoard(), playerBoard);\n  var computer = (0,_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Computer');\n  computer.getBoard().randomShip(5);\n  computer.getBoard().randomShip(4);\n  computer.getBoard().randomShip(3);\n  computer.getBoard().randomShip(2);\n  computer.getBoard().randomShip(2);\n  computer.getBoard().randomShip(1);\n  computer.getBoard().randomShip(1);\n  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.setListeners)(player, computer);\n};\n\n//# sourceURL=webpack://battleship/./src/scripts/dragDrop.js?");

/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/scripts/ship.js\");\n\nvar Gameboard = function Gameboard() {\n  var ships = [];\n  var gameboard = new Array(10);\n  for (var i = 0; i < 10; i++) {\n    gameboard[i] = new Array(10).fill('water');\n  }\n  var placeShip = function placeShip(i, j, dir, ship) {\n    if (dir === 'S') {\n      for (var k = 0; k < ship.getLength(); k++) {\n        gameboard[i + k][j] = ship.getID();\n      }\n    } else {\n      for (var _k = 0; _k < ship.getLength(); _k++) {\n        gameboard[i][j + _k] = ship.getID();\n      }\n    }\n    var buffers = getOuterBuffer(i, j, ship.getLength(), dir);\n    var top = buffers[0];\n    var bottom = buffers[1];\n    var left = buffers[2];\n    var right = buffers[3];\n    for (var _k2 = top; _k2 <= bottom; _k2++) {\n      for (var l = left; l <= right; l++) {\n        if (gameboard[_k2][l] === 'water') gameboard[_k2][l] = 'buffer';\n      }\n    }\n    ships.push(ship);\n  };\n  var receiveAttack = function receiveAttack(i, j) {\n    if (gameboard[i][j] !== 'water' && gameboard[i][j] !== 'buffer') {\n      var ship = ships.find(function (item) {\n        return item.getID() === gameboard[i][j];\n      });\n      ship.hit();\n      if (ship.isSunk()) ships = ships.filter(function (item) {\n        return item !== ship;\n      });\n    }\n  };\n  var randomShip = function randomShip(size) {\n    var ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(size);\n    var i, j, dir;\n    var squareEmpty;\n    var allEmpty = false;\n    do {\n      squareEmpty = true;\n      dir = Math.random() < 0.5 ? 'E' : 'S';\n      i = Math.floor(Math.random() * 10);\n      j = Math.floor(Math.random() * 10);\n      if (dir === 'S') {\n        if (i + size > 9) i = 9 - size;\n        for (var k = i; k <= i + size; k++) {\n          if (gameboard[k][j] !== 'water') {\n            squareEmpty = false;\n            break;\n          }\n        }\n      } else {\n        if (j + size > 9) j = 9 - size;\n        for (var _k3 = j; _k3 <= j + size; _k3++) {\n          if (gameboard[i][_k3] !== 'water') {\n            squareEmpty = false;\n            break;\n          }\n        }\n      }\n      if (squareEmpty) allEmpty = true;\n    } while (!allEmpty);\n    placeShip(i, j, dir, ship);\n  };\n  var checkShips = function checkShips() {\n    return ships.length === 0 ? true : false;\n  };\n  var getBoard = function getBoard() {\n    return gameboard;\n  };\n  return {\n    placeShip: placeShip,\n    receiveAttack: receiveAttack,\n    checkShips: checkShips,\n    getBoard: getBoard,\n    randomShip: randomShip\n  };\n};\nvar getOuterBuffer = function getOuterBuffer(i, j, size, dir) {\n  var upper, lower, left, right;\n  i === 0 ? upper = 0 : upper = i - 1;\n  j === 0 ? left = 0 : left = j - 1;\n  if (dir === 'S') {\n    i + size >= 8 ? lower = 9 : lower = i + size;\n    j === 9 ? right = 9 : right = j + 1;\n  } else {\n    i === 9 ? lower = 9 : lower = i + 1;\n    i + size >= 8 ? right = 9 : right = j + size;\n  }\n  return [upper, lower, left, right];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./src/scripts/gameboard.js?");

/***/ }),

/***/ "./src/scripts/gameloop.js":
/*!*********************************!*\
  !*** ./src/scripts/gameloop.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dragDropShips\": () => (/* binding */ dragDropShips),\n/* harmony export */   \"playerRandomShips\": () => (/* binding */ playerRandomShips),\n/* harmony export */   \"startGame\": () => (/* binding */ startGame)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/scripts/dom.js\");\n/* harmony import */ var _dragDrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dragDrop */ \"./src/scripts/dragDrop.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n\n\n\nvar getPlayer = function getPlayer() {\n  var nameInput = document.querySelector('.name-input');\n  var player;\n  if (nameInput.value !== null && nameInput.value !== '') player = (0,_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(nameInput.value);else player = (0,_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Player');\n  var controls = document.querySelector('.control-container');\n  controls.remove();\n  return player;\n};\nvar playerRandomShips = function playerRandomShips() {\n  var player = getPlayer();\n  var boardsContainer = document.createElement('div');\n  boardsContainer.classList.add('boards-container');\n  boardsContainer.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createBoard)(player.getName(), 'player-board'));\n  boardsContainer.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createBoard)('Computer', 'computer-board'));\n  document.body.appendChild(boardsContainer);\n  var playerBoard = document.querySelector('.player-board');\n  player.getBoard().randomShip(5);\n  player.getBoard().randomShip(4);\n  player.getBoard().randomShip(3);\n  player.getBoard().randomShip(2);\n  player.getBoard().randomShip(2);\n  player.getBoard().randomShip(1);\n  player.getBoard().randomShip(1);\n  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.fillBoard)(player.getBoard(), playerBoard);\n  var computer = (0,_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Computer');\n  computer.getBoard().randomShip(5);\n  computer.getBoard().randomShip(4);\n  computer.getBoard().randomShip(3);\n  computer.getBoard().randomShip(2);\n  computer.getBoard().randomShip(2);\n  computer.getBoard().randomShip(1);\n  computer.getBoard().randomShip(1);\n  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.setListeners)(player, computer);\n};\nvar dragDropShips = function dragDropShips() {\n  var player = getPlayer();\n  document.body.appendChild((0,_dragDrop__WEBPACK_IMPORTED_MODULE_1__.dragDropMenu)(player));\n};\nvar startGame = function () {\n  document.body.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.header)());\n  document.body.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.startControls)());\n}();\n\n//# sourceURL=webpack://battleship/./src/scripts/gameloop.js?");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/scripts/gameboard.js\");\n\nvar Player = function Player(n) {\n  var name = n;\n  var gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  var shots = new Map();\n  var attack = function attack(i, j, enemy) {\n    shots.set(\"\".concat(i, \",\").concat(j), true);\n    enemy.getBoard().receiveAttack(i, j);\n  };\n  var randomAttack = function randomAttack(enemy) {\n    var i, j;\n    do {\n      i = Math.floor(Math.random() * 10);\n      j = Math.floor(Math.random() * 10);\n    } while (shots.has(\"\".concat(i, \",\").concat(j)));\n    shots.set(\"\".concat(i, \",\").concat(j), true);\n    enemy.getBoard().receiveAttack(i, j);\n    return [i, j];\n  };\n  var checkShots = function checkShots(i, j) {\n    return shots.has(\"\".concat(i, \",\").concat(j)) ? true : false;\n  };\n  var getName = function getName() {\n    return name;\n  };\n  var getBoard = function getBoard() {\n    return gameboard;\n  };\n  return {\n    attack: attack,\n    randomAttack: randomAttack,\n    checkShots: checkShots,\n    getName: getName,\n    getBoard: getBoard\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship/./src/scripts/player.js?");

/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\nvar Ship = function Ship(l) {\n  var length = l;\n  var hits = 0;\n  var id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  var hit = function hit() {\n    return hits++;\n  };\n  var isSunk = function isSunk() {\n    return length === hits ? true : false;\n  };\n  var getLength = function getLength() {\n    return length;\n  };\n  var getID = function getID() {\n    return id;\n  };\n  return {\n    hit: hit,\n    isSunk: isSunk,\n    getLength: getLength,\n    getID: getID\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./src/scripts/ship.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/scripts/styles/style.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/scripts/styles/style.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: 'Black Ops One', cursive;\\n}\\n/* header*/\\n.header{\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: 3rem;\\n  height: 10vh;\\n  border-bottom: 1px solid black;\\n}\\n\\n/* gameboard */\\n.boards-container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  column-gap: 9vw;\\n  text-align: center;\\n  height: 90vh;\\n}\\nbody, .boards-container {\\n  background: linear-gradient(to right, #87cefa, #0000cd );\\n  width: 100vw;\\n}\\n.player-board, .computer-board, .ship-btn {\\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6)\\n}\\n.player-board, .computer-board {\\n  color: white;\\n}\\n.board-row{\\n  display: flex;\\n}\\n.square {\\n  background: white;\\n}\\n.square, .ship-box {\\n  height: 2vw;\\n  width: 2vw;\\n  cursor: pointer;\\n}\\n.ship-box{\\n  background: gray;\\n}\\n.square, .ship-box {\\n  border: 1px solid black;\\n}\\n.hit, .computer-board{\\n  background: red;\\n}\\n.miss, .player-board{\\n  background: blue;\\n}\\n\\n/* controls */\\n.control-container {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  gap: .5vh;\\n  width: 30vw;\\n  height: 10vh;\\n  position:absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n.name-input {\\n  grid-column: 1 / span 2;\\n  text-align: center;\\n  border: none;\\n}\\n.control-btn, .dir-btn span {\\n  cursor: pointer;\\n}\\n.control-btn, .dir-btn, .dd-ship {\\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3)\\n}\\n.control-btn, .dir-btn {\\n  border: none;\\n}\\n.header, .control-btn {\\n  background: #4E4E4C;\\n  color: white;\\n}\\n.control-btn:hover {\\n  background: #454545;\\n}\\n\\n/* drag drop ships */\\n.ship-btn, .drag-drop-ships, .dd-ship {\\n  display: flex;\\n}\\n.drag-drop-ships, .ship-btn {\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: column;\\n}\\n.ship-btn {\\n  gap: 1vh;\\n  background: rgba(255, 255, 255, 0.5);\\n  padding: 2vh;\\n}\\n.drag-drop-ships {\\n  gap: 0.5vh;\\n}\\n.dir-btn {\\n  height: 4vh;\\n  width: 4vh;\\n}\\n.dir-btn span {\\n  height: 100%;\\n  width: 100%;\\n  background: white;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.dir-btn span:hover {\\n  background-color: #E1D9D1;\\n}\\n/* winner notice */\\n.winner-notice {\\n  position: absolute;\\n  top: 20%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  font-size: 3rem;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/scripts/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/scripts/styles/style.css":
/*!**************************************!*\
  !*** ./src/scripts/styles/style.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/scripts/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/scripts/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID\n});\n\n//# sourceURL=webpack://battleship/./node_modules/uuid/dist/esm-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://battleship/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nlet getRandomValues;\nconst rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://battleship/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"unsafeStringify\": () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\n\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();\n}\n\nfunction stringify(arr, offset = 0) {\n  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://battleship/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://battleship/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://battleship/./node_modules/uuid/dist/esm-browser/validate.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
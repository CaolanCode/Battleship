import Gameboard from "../gameboard"

test('Create ship South', () => {
  const gameboard = Gameboard()
  gameboard.placeShip(0, 0, 'S', 3)
  const board = gameboard.getBoard()
  expect(board[0][0]).toBe(true)
  expect(board[1][0]).toBe(true)
  expect(board[2][0]).toBe(true)
})

test('Create ship East', () => {
  const gameboard = Gameboard()
  gameboard.placeShip(0, 2, 'E', 4)
  const board = gameboard.getBoard()
  expect(board[0][2]).toBe(true)
  expect(board[0][3]).toBe(true)
  expect(board[0][4]).toBe(true)
  expect(board[0][5]).toBe(true)
})

test('Attack ship', () => {
  const gameboard = Gameboard()
  const ship = gameboard.placeShip(0, 2, 'S', 2)
  expect(gameboard.receiveAttack(0, 2, ship)).toBe(true)
})

test('Sink ship', () => {
  const gameboard = Gameboard()
  const ship = gameboard.placeShip(0, 4, 'E', 3)
  gameboard.receiveAttack(0, 4, ship)
  gameboard.receiveAttack(0, 5, ship)
  gameboard.receiveAttack(0, 6, ship)
  expect(ship.isSunk()).toBe(true)
})

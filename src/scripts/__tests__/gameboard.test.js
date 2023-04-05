const Gameboard = require('../gameboard')

const gameboard = new Gameboard() 
test('Create ship', () => {
  gameboard.placeShip(0,0,'S',3)
  const board = gameboard.getBoard()
  expect(board[0][0]).toBe(true)
})
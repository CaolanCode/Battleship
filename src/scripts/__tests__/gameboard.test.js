import Gameboard from "../gameboard"

const gameboard = Gameboard()
test('Create ship', () => {
  gameboard.placeShip(0, 0, 'S', 3)
  const board = gameboard.getBoard()
  expect(board[0][0]).toBe(true)
  expect(board[1][0]).toBe(true)
  expect(board[2][0]).toBe(true)
})

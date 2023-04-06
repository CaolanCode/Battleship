import Gameboard from "../gameboard"
import Ship from "../ship"

describe('Gameboard Test', () => {

  let gameboard 
  beforeEach(() => {
    gameboard = Gameboard()
  })

  test('Create ship facing South', () => {
    const ship = Ship(3)
    gameboard.placeShip(0, 0, 'S', ship)
    const board = gameboard.getBoard()
    expect(board[0][0]).toBe(ship.getNumber())
    expect(board[1][0]).toBe(ship.getNumber())
    expect(board[2][0]).toBe(ship.getNumber())
  })

  test('Create ship facing East', () => {
    const ship = Ship(4)
    gameboard.placeShip(0, 2, 'E', ship)
    const board = gameboard.getBoard()
    expect(board[0][2]).toBe(ship.getNumber())
    expect(board[0][3]).toBe(ship.getNumber())
    expect(board[0][4]).toBe(ship.getNumber())
    expect(board[0][5]).toBe(ship.getNumber())
  })

  test('Attack ship', () => {
    const ship = Ship(3)
    gameboard.placeShip(0, 2, 'S', ship)
    expect(gameboard.receiveAttack(0, 2)).toBe(true)
  })

  test('Miss ship', () => {
    const ship = Ship(2)
    gameboard.placeShip(0, 2, 'S', ship)
    expect(gameboard.receiveAttack(0, 4)).toBe(false)
  })

  test('Sink ship', () => {
    const ship = Ship(3)
    gameboard.placeShip(0, 4, 'E', ship)
    gameboard.receiveAttack(0, 4)
    gameboard.receiveAttack(0, 5)
    gameboard.receiveAttack(0, 6)
    expect(ship.isSunk()).toBe(true)
  })

  test('Check if ship is NOT sunk', () => {
    const ship = Ship(4)
    gameboard.placeShip(0, 4, 'E', ship)
    gameboard.receiveAttack(0, 4)
    gameboard.receiveAttack(0, 5)
    expect(ship.isSunk()).toBe(false)
  })

  test('Check if all ships destroyed', () => {
    const ship = Ship(3)
    gameboard.placeShip(0, 4, 'E', ship)
    gameboard.receiveAttack(0, 4)
    gameboard.receiveAttack(0, 5)
    gameboard.receiveAttack(0, 6)
    expect(gameboard.checkShips()).toBe(true)
  })

  test('Check if NOT all ships destroyed', () => {
    const ship = Ship(3)
    gameboard.placeShip(0, 4, 'E', ship)
    expect(gameboard.checkShips()).toBe(false)
  })
})
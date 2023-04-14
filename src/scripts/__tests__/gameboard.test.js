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
    expect(board[0][0]).toBe(ship.getID())
    expect(board[1][0]).toBe(ship.getID())
    expect(board[2][0]).toBe(ship.getID())
  })

  test('Create ship facing East', () => {
    const ship = Ship(4)
    gameboard.placeShip(0, 2, 'E', ship)
    const board = gameboard.getBoard()
    expect(board[0][2]).toBe(ship.getID())
    expect(board[0][3]).toBe(ship.getID())
    expect(board[0][4]).toBe(ship.getID())
    expect(board[0][5]).toBe(ship.getID())
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

  test('Check outer buffer', () => {
    const ship = Ship(3)
    gameboard.placeShip(2, 4, 'E', ship)
    const board = gameboard.getBoard()
    expect(board[1][4]).toBe('buffer')
    expect(board[0][4]).toBe('water')
    expect(board[2][3]).toBe('buffer')
    expect(board[2][2]).toBe('water')
    expect(board[3][4]).toBe('buffer')
    expect(board[2][7]).toBe('buffer')
    expect(board[2][8]).toBe('water')
    expect(board[3][7]).toBe('buffer')
    expect(board[1][7]).toBe('buffer')
    expect(board[1][8]).toBe('water')
  })

  test('Check outer buffer when at top/left', () => {
    const ship = Ship(3)
    gameboard.placeShip(0, 0, 'E', ship)
    const board = gameboard.getBoard()
    expect(board[1][0]).toBe('buffer')
    expect(board[1][1]).toBe('buffer')
    expect(board[0][3]).toBe('buffer')
    expect(board[1][3]).toBe('buffer')
    expect(board[1][4]).toBe('water')
    expect(board[2][0]).toBe('water')
    expect(board[0][4]).toBe('water')
  })

  test('Check outer buffer when at bottom/right', () => {
    const ship = Ship(3)
    gameboard.placeShip(7, 9, 'S', ship)
    const board = gameboard.getBoard()
    expect(board[6][9]).toBe('buffer')
    expect(board[6][8]).toBe('buffer')
    expect(board[7][8]).toBe('buffer')
    expect(board[9][8]).toBe('buffer')
    expect(board[5][9]).toBe('water')
    expect(board[9][7]).toBe('water')
  })
})
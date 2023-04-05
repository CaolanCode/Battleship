import Ship from './ship.js'

const Gameboard = () => {
  let numberOfShips = 0
  const gameboard = new Array(10)
  for(let i = 0; i < 10; i++) {
    gameboard[i] = new Array(10).fill(false)
  }
  const placeShip = (i, j, dir, length,) => {
    numberOfShips++
    const ship = Ship(length) 
    if(dir === 'S') {
      for(let k = 0; k < ship.getLength(); k++) {
        gameboard[i+k][j] = true
      }
    } else if(dir === 'E') {
      for(let k = 0; k < ship.getLength(); k++) {
        gameboard[i][j+k] = true
      }
    }
    return ship
  }
  const receiveAttack = (i, j, ship) => {
    if(gameboard[i][j] === true) {
      ship.hit()
      if(ship.isSunk()) numberOfShips--
      return true
    }  
    return false
  }
  const checkShips = () => {
    if(numberOfShips === 0) {
      return true
    }
    return false
  }
  const getBoard = () => {
    return gameboard
  }
  return {
    placeShip,
    receiveAttack,
    checkShips,
    getBoard
  }
}

export default Gameboard


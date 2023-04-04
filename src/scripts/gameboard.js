import {Ship} from './ship.js'
export const Gameboard = () => {
  let numberOfShips = 0
  const gameboard = new Array(10)
  for(let i = 0; i < 10; i++) {
    gameboard[i] = new Array(10).fill(false)
  }
  const placeShip = (i, j, dir, length,) => {
    numberOfShips++
    const ship = Ship(length) 
    if(dir === 'S') {
      for(let k = 0; k < ship.length; k++) {
        gameboard[i+k][j] = true
      }
    } else if(dir === 'E') {
      for(let k = 0; k < ship.length; k++) {
        gameboard[i][j+k] = true
      }
    }
  }
  const receiveAttack = (i, j) => {
    if(gameboard[i][j] === true) {
      placeShip.ship.hit()
      numberOfShips--
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
  return {
    placeShip,
    receiveAttack,
    checkShips
  }
}


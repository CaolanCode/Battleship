import {v4 as uuidv4} from 'uuid'

const Gameboard = () => {
  let ships = []
  const gameboard = new Array(10)
  for(let i = 0; i < 10; i++) {
    gameboard[i] = new Array(10).fill(false)
  }

  const placeShip = (i, j, dir, ship) => { 
    ship.assignNumber(uuidv4())
    if(dir === 'S') {
      for(let k = 0; k < ship.getLength(); k++) {
        gameboard[i+k][j] = ship.getNumber()
      }
    } else if(dir === 'E') {
      for(let k = 0; k < ship.getLength(); k++) {
        gameboard[i][j+k] = ship.getNumber()
      }
    }
    ships.push(ship)
  }

  const receiveAttack = (i, j) => {
    if(gameboard[i][j] !== false) {
      const ship = ships.find((item) => item.getNumber() === gameboard[i][j])
      ship.hit()
      if(ship.isSunk()) ships = ships.filter(item => item !== ship)
      return true
    }
    return false
  } 
  
  const checkShips = () => ships.length === 0 ? true : false
  
  const getBoard = () => gameboard

  return {
    placeShip,
    receiveAttack,
    checkShips,
    getBoard
  }
}

export default Gameboard


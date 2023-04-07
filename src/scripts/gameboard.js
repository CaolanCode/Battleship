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
    const buffers = getOuterBuffer(i, j, ship.getLength(), dir)
    const top = buffers[0]
    const bottom = buffers[1]
    const left = buffers[2]
    const right = buffers[3]
    for(let k = top; k < bottom; k++) {
      for(let l = left; l < right; l++) {
        if(gameboard[k][l] === false) gameboard[k][l] = true
      }
    }
    ships.push(ship)
  }

  const receiveAttack = (i, j) => {
    if(gameboard[i][j] !== false && gameboard[i][j] !== true) {
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

const getOuterBuffer = (i, j, size, dir) => {
  let topOuter 
  let bottomOuter
  let leftOuter
  let rightOuter
  let height 
  let width

  if(dir === 'S') height = size + 1
  else height = 3
  if(dir === 'E') width = size + 1
  else width = 3

  if((i === 0 || i ===9) && dir === 'E') height--
  else if((j === 0 || j === 9) && dir === 'S') width--
  
  if(i === 0) topOuter = 0 
  else topOuter = i - 1 
  if((i + size) === 9) bottomOuter = i + size
  else bottomOuter = i + height
  if(j === 0) leftOuter = 0
  else leftOuter = j - 1
  if((j + size) === 9) rightOuter = j + size
  else rightOuter = j + width

  return [topOuter, bottomOuter, leftOuter, rightOuter]
}
export default Gameboard


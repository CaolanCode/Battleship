import Ship from './ship'

const Gameboard = () => {
  let ships = []
  const gameboard = new Array(10)
  for(let i = 0; i < 10; i++) {
    gameboard[i] = new Array(10).fill('water')
  }

  const placeShip = (i, j, dir, ship) => { 
    if(dir === 'vertical') {
      for(let k = 0; k < ship.getLength(); k++) {
        gameboard[i+k][j] = ship.getID()
      }
    } else {
      for(let k = 0; k < ship.getLength(); k++) {
        gameboard[i][j+k] = ship.getID()
      }
    }
    const buffers = getOuterBuffer(i, j, ship.getLength(), dir)
    const top = buffers[0]
    const bottom = buffers[1]
    const left = buffers[2]
    const right = buffers[3]
    for(let k = top; k <= bottom; k++) {
      for(let l = left; l <= right; l++) {
        if(gameboard[k][l] === 'water') gameboard[k][l] = 'buffer'
      }
    }
    ships.push(ship)
  }

  const receiveAttack = (i, j) => {
    if(gameboard[i][j] !== 'water' && gameboard[i][j] !== 'buffer') {
      const ship = ships.find((item) => item.getID() === gameboard[i][j])
      ship.hit()
      if(ship.isSunk()) ships = ships.filter(item => item !== ship)
      return true
    }
    return false
  } 

  const randomShip = (size) => {
    const ship = Ship(size)
    let i, j, dir 
    let squareEmpty 
    let allEmpty = false 
    do {
      squareEmpty = true
      dir = Math.random() < 0.5 ? 'horizontal' : 'vertical'
      i = Math.floor(Math.random() * 10)
      j = Math.floor(Math.random() * 10)
      if(dir === 'vertical') {
        if((i + size) > 9) i = 9 - size
        for(let k = i; k <= i + size; k++) {
          if(gameboard[k][j] !== 'water') {
            squareEmpty = false
            break
          } 
        }
      } else {
        if((j + size) > 9) j = 9 - size
        for(let k = j; k <= j + size; k++) {
          if(gameboard[i][k] !== 'water') {
            squareEmpty = false
            break
          }
        }
      }
    if(squareEmpty) allEmpty = true
    }while(!allEmpty)

    placeShip(i, j, dir, ship)
  }

  
  const checkShips = () => ships.length === 0 ? true : false
  
  const getBoard = () => gameboard

  return {
    placeShip,
    receiveAttack,
    checkShips,
    getBoard,
    randomShip
  }
}

const getOuterBuffer = (i, j, size, dir) => {
  let upper, lower, left, right

  i === 0 ? upper = 0 : upper = i - 1
  j === 0 ? left = 0 : left = j - 1

  if(dir === 'vertical') {
    i + size >= 8 ? lower = 9 : lower = i + size
    j === 9 ? right = 9 : right = j + 1 
  } else {
    i === 9 ? lower = 9 : lower = i + 1
    i + size >= 8 ? right = 9 : right = j + size
  }

  return [upper, lower, left, right]
}
export default Gameboard


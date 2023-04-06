import Gameboard from "./gameboard"

const Player = (n) => {
  const name = n
  const gameboard = Gameboard()
  const shots = new Map()

  const attack = (i, j, enemy) => {
    shots.set(`${i},${j}`, true)
    return enemy.getBoard().receiveAttack(i, j)
  } 

  const randomAttack = () => {
    let i, j
    do{
      i = Math.floor(Math.random() * 10)
      j = Math.floor(Math.random() * 10)
    } while(shots.has(`${i},${j}`))
    shots.set(`${i},${j}`, true)
    return [i, j]
  }

  const checkShots = (i, j) => shots.has(`${i},${j}`) ? true : false

  const getName = () => name

  const getBoard = () => gameboard



  return {
    attack,
    randomAttack,
    checkShots,
    getName,
    getBoard
  }
}

export default Player
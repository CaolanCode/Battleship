import { Gameboard } from "./gameboard"

export const Player = (n) => {
  const name = n
  const gameboard = Gameboard()
  const shots = new Map()

  const attack = (i, j, enemy) => {
    return enemy.gameboard.recieveAttack(i, j)
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

  return {
    attack,
    randomAttack
  }
}
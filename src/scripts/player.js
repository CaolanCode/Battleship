import { Gameboard } from "./gameboard"

const Player = (n) => {
  const name = n
  const gameboard = Gameboard()

  const attack = (i, j, enemy) => {
    return enemy.gameboard.recieveAttack()
  } 

  const randomAttack = () => {
    const i = Math.floor(Math.random() * 10)
    const j = Math.floor(Math.random() * 10)
    return [i, j]
  }

  return {
    attack,
    randomAttack
  }
}
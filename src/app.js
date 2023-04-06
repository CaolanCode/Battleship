import Gameboard from "./scripts/gameboard"
import Ship from "./scripts/ship"

const gameboard = Gameboard()
const ship1 = Ship(2)
const ship2 = Ship(4)
gameboard.placeShip(0,0,'S',ship1)
gameboard.placeShip(0,0,'E',ship2)
gameboard.receiveAttack(0,2)
console.log(gameboard.ships)
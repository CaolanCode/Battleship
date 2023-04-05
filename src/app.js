import Gameboard from "./scripts/gameboard"

const gameboard = Gameboard()
const ship = gameboard.placeShip(0,0,'S',3)
gameboard.receiveAttack(0,2,ship)
console.log(ship)
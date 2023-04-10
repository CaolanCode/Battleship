import {header, displayBoards, setListeners, fillPlayerBoard} from './dom'
import Player from './player'
import Ship from './ship'

export const playGame = (() => {
  document.body.appendChild(header())
  document.body.appendChild(displayBoards())

  const player = Player('Player') 
  const computer = Player('Computer')
  const computerBoard = document.querySelector('.computer-board')
  const playerBoard = document.querySelector('.player-board')

  const carrier = Ship(5)
  player.getBoard().placeShip(0,0,'E',carrier)
  const battleship = Ship(4)
  player.getBoard().placeShip(2,0,'E',battleship)
  const destroyer = Ship(3)
  player.getBoard().placeShip(6,0,'S',destroyer)
  const submarine1 = Ship(2)
  player.getBoard().placeShip(0,6,'E',submarine1)
  const submarine2 = Ship(2)
  player.getBoard().placeShip(0,9,'S',submarine2)
  const patrolBoat1 = Ship(1)
  player.getBoard().placeShip(4,8,'E',patrolBoat1)
  const patrolBoat2 = Ship(1)
  player.getBoard().placeShip(4,5,'E',patrolBoat2)
  fillPlayerBoard(player.getBoard(), playerBoard)

  computer.getBoard().randomShip(5)
  computer.getBoard().randomShip(4)
  computer.getBoard().randomShip(3)
  computer.getBoard().randomShip(2)
  computer.getBoard().randomShip(2)
  computer.getBoard().randomShip(1)
  computer.getBoard().randomShip(1)
  fillPlayerBoard(computer.getBoard(), computerBoard)

  setListeners(player, playerBoard, computer, computerBoard)
})()

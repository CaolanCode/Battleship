import {header, displayBoards, setListeners, fillBoard, startControls} from './dom'
import Player from './player'
import Ship from './ship'

export const playerRandomShips = () => {
  const nameInput = document.querySelector('.name-input')
  if(nameInput.value !== null && nameInput.value !== '') player = Player(nameInput.value)
  else player = Player('Player')
  const controls = document.querySelector('.control-container')
  controls.remove()

  document.body.appendChild(displayBoards(player))
  const playerBoard = document.querySelector('.player-board')
  const computerBoard = document.querySelector('.computer-board')

  const computer = Player('Computer')
  let player
  player.getBoard().randomShip(5)
  player.getBoard().randomShip(4)
  player.getBoard().randomShip(3)
  player.getBoard().randomShip(2)
  player.getBoard().randomShip(2)
  player.getBoard().randomShip(1)
  player.getBoard().randomShip(1)
  fillBoard(player.getBoard(), playerBoard)

  computer.getBoard().randomShip(5)
  computer.getBoard().randomShip(4)
  computer.getBoard().randomShip(3)
  computer.getBoard().randomShip(2)
  computer.getBoard().randomShip(2)
  computer.getBoard().randomShip(1)
  computer.getBoard().randomShip(1)
  fillBoard(computer.getBoard(), computerBoard)
  setListeners(player, computer)
}

export const dragDropShips = () => {
  document.body.appendChild(displayBoards())
  const playerBoard = document.querySelector('.player-board')
  const computerBoard = document.querySelector('.computer-board')
  const nameInput = document.querySelector('.name-input')
  const controls = document.querySelector('.control-container')
  controls.remove()

  const ships = []
  const carrier = Ship(5)
  ships.push(carrier)
  const battleship = Ship(4)
  ships.push(battleship)
  const destroyer = Ship(3)
  ships.push(destroyer)
  const submarine1 = Ship(2)
  ships.push(submarine1)
  const submarine2 = Ship(2)
  ships.push(submarine2)
  const patrolBoat1 = Ship(1)
  ships.push(patrolBoat1)
  const patrolBoat2 = Ship(1)
  ships.push(patrolBoat2)

}

export const startGame = (() => {
  document.body.appendChild(header())
  document.body.appendChild(startControls())

})()
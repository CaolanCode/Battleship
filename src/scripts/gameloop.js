import {header, displayBoards, setListeners, fillBoard, startControls} from './dom'
import Player from './player'
import Ship from './ship'

export const playerRandomShips = () => {
  playGame()
  const playerBoard = document.querySelector('.player-board')
  const nameInput = document.querySelector('.name-input')
  const controls = document.querySelector('.control-container')
  controls.remove()
  let player
  if(nameInput.value !== null && nameInput.value !== '')  player = Player(nameInput.value)
  else player = Player('Player')
  player.getBoard().randomShip(5)
  player.getBoard().randomShip(4)
  player.getBoard().randomShip(3)
  player.getBoard().randomShip(2)
  player.getBoard().randomShip(2)
  player.getBoard().randomShip(1)
  player.getBoard().randomShip(1)
  fillBoard(player.getBoard(), playerBoard)
}


export const playGame = (() => {
  document.body.appendChild(displayBoards())

  const computerBoard = document.querySelector('.computer-board')
  const playerBoard = document.querySelector('.player-board')
  const carrier = Ship(5)
  const battleship = Ship(4)
  const destroyer = Ship(3)
  const submarine1 = Ship(2)
  const submarine2 = Ship(2)
  const patrolBoat1 = Ship(1)
  const patrolBoat2 = Ship(1)


  computer.getBoard().randomShip(5)
  computer.getBoard().randomShip(4)
  computer.getBoard().randomShip(3)
  computer.getBoard().randomShip(2)
  computer.getBoard().randomShip(2)
  computer.getBoard().randomShip(1)
  computer.getBoard().randomShip(1)
  fillBoard(computer.getBoard(), computerBoard)

  setListeners(player, computer)
})

export const startGame = (() => {
  document.body.appendChild(header())
  document.body.appendChild(startControls())

})()
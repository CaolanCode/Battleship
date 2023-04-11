import {header, displayBoards, setListeners, fillBoard, startControls, showShips} from './dom'
import Player from './player'
import Ship from './ship'

const getPlayer = () => {
  const nameInput = document.querySelector('.name-input')
  let player
  if(nameInput.value !== null && nameInput.value !== '') player = Player(nameInput.value)
  else player = Player('Player')
  const controls = document.querySelector('.control-container')
  controls.remove()
  return player
}

const randomComputer = () => {
  const computer = Player('Computer')
  computer.getBoard().randomShip(5)
  computer.getBoard().randomShip(4)
  computer.getBoard().randomShip(3)
  computer.getBoard().randomShip(2)
  computer.getBoard().randomShip(2)
  computer.getBoard().randomShip(1)
  computer.getBoard().randomShip(1)
  return computer
}

export const playerRandomShips = () => {
  const player = getPlayer()
  document.body.appendChild(displayBoards(player))
  const playerBoard = document.querySelector('.player-board')
  const computerBoard = document.querySelector('.computer-board')

  player.getBoard().randomShip(5)
  player.getBoard().randomShip(4)
  player.getBoard().randomShip(3)
  player.getBoard().randomShip(2)
  player.getBoard().randomShip(2)
  player.getBoard().randomShip(1)
  player.getBoard().randomShip(1)
  fillBoard(player.getBoard(), playerBoard)

  const computer = randomComputer()
  fillBoard(computer.getBoard(), computerBoard)
  setListeners(player, computer)
}

export const dragDropShips = () => {
  const player = getPlayer()
  document.body.appendChild(displayBoards(player))
  const computerBoard = document.querySelector('.computer-board')

  const computer = randomComputer()
  fillBoard(computer.getBoard(), computerBoard)
  setListeners(player, computer)

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

  document.body.appendChild(showShips(ships))
}

export const startGame = (() => {
  document.body.appendChild(header())
  document.body.appendChild(startControls())
})()
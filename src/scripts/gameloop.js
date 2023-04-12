import {header, createBoard, setListeners, fillBoard, startControls } from './dom'
import { dragDropMenu } from './dragDrop'
import Player from './player'

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

  const boardsContainer = document.createElement('div')
  boardsContainer.classList.add('boards-container')
  boardsContainer.appendChild(createBoard(player.getName(), 'player-board'))
  boardsContainer.appendChild(createBoard('Computer', 'computer-board'))
  document.body.appendChild(boardsContainer)

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
  setListeners(player, computer)
}

export const dragDropShips = () => {
  const player = getPlayer()

  const computerBoard = document.querySelector('.computer-board')
  const computer = randomComputer()

  document.body.appendChild(dragDropMenu(player))
}

export const startGame = (() => {
  document.body.appendChild(header())
  document.body.appendChild(startControls())
})()
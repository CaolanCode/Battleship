import {header, displayBoards} from './dom'
import Player from './player'
import Ship from './ship'

const posCarrier = (i, j, dir, name) => {
  const ship = Ship(5)
  name.getBoard(). placeShip(i, j, dir, ship)
}

const posBattleship = (i, j, dir, name) => {
  const ship = Ship(4)
  name.getBoard(). placeShip(i, j, dir, ship)
}

const posDestroyer = (i, j, dir, name) => {
  const ship = Ship(3)
  name.getBoard(). placeShip(i, j, dir, ship)
}

const posSubmarine = (i, j, dir, name) => {
  const ship = Ship(2)
  name.getBoard(). placeShip(i, j, dir, ship)
}

const posPatrolBoat = (i, j, dir, name) => {
  const ship = Ship(1)
  name.getBoard(). placeShip(i, j, dir, ship)
}

const fillPlayerBoard = (gameboard, screenBoard) => {
  const board = gameboard.getBoard()
  const rows = screenBoard.querySelectorAll('.board-row')
  for(let i = 0; i < rows.length; i++) {
    const squares = rows[i].querySelectorAll('.square')
    for(let j = 0; j < squares.length; j++) {
      const square = squares[j]
      if(board[i][j] !== false && board[i][j] !== true) {
        square.classList.add('ship-box')
      }
    }
  }
}

const fireShot = (i, j, shooter, enemyBoard) => {
  const gameboard = shooter.getBoard()
  const board = gameboard.getBoard()
  const rows = enemyBoard.querySelectorAll('.board-row')
  const squares = rows[i].querySelectorAll('.square')
  const square = squares[j]
  if(board[i][j] !== false && board[i][j] !== true) square.classList.add('hit')
  else square.classList.add('miss')
}

export const playGame = (() => {
  const body = document.body
  body.appendChild(header())
  body.appendChild(displayBoards())

  const player = Player('Player') 
  const computer = Player('Computer')
  const computerBoard = document.querySelector('.computer-board')
  const playerBoard = document.querySelector('.player-board')

  posCarrier(0, 0, 'E', player)
  posBattleship(2, 0, 'E', player)
  posDestroyer(6, 0, 'S', player)
  posSubmarine(0, 6, 'S', player)
  posSubmarine(7, 7, 'S', player)
  posPatrolBoat(4, 8, 'E', player)
  posPatrolBoat(4, 5, 'E', player)
  fillPlayerBoard(player.getBoard(), playerBoard)

  posCarrier(0, 0, 'E', computer)
  posBattleship(2, 0, 'E', computer)
  posDestroyer(6, 0, 'S', computer)
  posSubmarine(0, 6, 'S', computer)
  posSubmarine(7, 7, 'S', computer)
  posPatrolBoat(4, 8, 'E', computer)
  posPatrolBoat(4, 5, 'E', computer)

  fireShot(0, 0, player, computerBoard)
  const cmptShot = computer.randomAttack()
  fireShot(cmptShot[0], cmptShot[1], computer, playerBoard)



})()

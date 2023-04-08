import {header, displayBoards} from './dom'
import Player from './player'
import Ship from './ship'

const fillPlayerBoard = (gameboard, screenBoard) => {
  const board = gameboard.getBoard()
  const rows = screenBoard.querySelectorAll('.board-row')
  for(let i = 0; i < rows.length; i++) {
    const squares = rows[i].querySelectorAll('.square')
    for(let j = 0; j < squares.length; j++) {
      const square = squares[j]
      if(board[i][j] !== 'water' && board[i][j] !== 'buffer') square.classList.add('ship-box')
    }
  }
}

const displayShot = (i, j, shooter, enemyBoard) => {
  const gameboard = shooter.getBoard()
  const board = gameboard.getBoard()
  const rows = enemyBoard.querySelectorAll('.board-row')
  const squares = rows[i].querySelectorAll('.square')
  const square = squares[j]
  if(board[i][j] !== 'water' && board[i][j] !== 'buffer') square.classList.add('hit')
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

  const squares = computerBoard.querySelectorAll('.square')
  let squareCount = 0
  for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
      squares[squareCount].addEventListener('click', () => {
        player.attack(i, j, computer)
        displayShot(i, j, player, computerBoard)
        const cmptShot = computer.randomAttack()
        displayShot(cmptShot[0], cmptShot[1], computer, playerBoard)
      })
      squareCount++
    }
  }

  let finGame = false
  while(finGame) {
    if(player.getBoard().checkShips() || computer.getBoard().checkShips()) {
      finGame = true
    }
  }
})()

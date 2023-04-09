import {header, displayBoards, displayShot, fillPlayerBoard} from './dom'
import Player from './player'
import Ship from './ship'

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
        displayShot(i, j, computer, computerBoard)
        if(player.getBoard().checkShips()) {
          console.log(computer.getName(), ' wins!')
        }
        const cmptShot = computer.randomAttack()
        displayShot(cmptShot[0], cmptShot[1], player, playerBoard)
        if(computer.getBoard().checkShips()) {
          console.log(player.getName(), ' wins!')
        }
      })
      squareCount++
    }
  }
})()

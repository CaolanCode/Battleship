import { dragDropShips, playerRandomShips } from "./gameloop"

export const header = () => {
  const container = document.createElement('div')
  container.classList.add('header')
  container.innerText = 'Battleship'
  return container
}

export const createBoard = (name, className) => {
  const board = document.createElement('div')
  board.classList.add(className)
  board.innerText = name
  for(let i = 0; i < 10; i++) {
    let row = document.createElement('div')
    row.classList.add('board-row')
    for(let j = 0; j < 10; j++) {
      let square = document.createElement('div')
      square.classList.add('square')
      row.appendChild(square)
    }
    board.appendChild(row)
  }
  return board
}

const displayShot = (i, j, enemy, enemyBoard) => {
  const gameboard = enemy.getBoard()
  const board = gameboard.getBoard()
  const rows = enemyBoard.querySelectorAll('.board-row')
  const squares = rows[i].querySelectorAll('.square')
  const square = squares[j]
  if(board[i][j] !== 'water' && board[i][j] !== 'buffer') square.classList.add('hit')
  else square.classList.add('miss')
}

export const fillBoard = (gameboard, screenBoard) => {
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

const displayWinner = (winner) => {
  const container = document.createElement('div')
  container.classList.add('winner-notice')
  container.innerText = winner.getName() + ' is the winner'
  return container
}

export const setListeners = (player, computer) => {
  const computerBoard = document.querySelector('.computer-board')
  const rows = computerBoard.querySelectorAll('.board-row')
  for(let i = 0; i < 10; i++) {
    const squares = rows[i].querySelectorAll('.square')
    for(let j = 0; j < 10; j++) {
      squares[j].addEventListener('click', () => handleListeners(i, j, player, computer))
    }
  }
}

const removeAllListeners = () => {
  const computerBoard = document.querySelector('.computer-board')
  const squares = computerBoard.querySelectorAll('.square')
  squares.forEach(square => {
    const newSquare = square.cloneNode(true)
    square.parentNode.replaceChild(newSquare, square)
  })
}

const handleListeners = (i, j, player, computer) => {
  const computerBoard = document.querySelector('.computer-board')
  const playerBoard = document.querySelector('.player-board')
  player.attack(i, j, computer)
  displayShot(i, j, computer, computerBoard)
  removeLastListener(i, j, computerBoard)
  if(checkForWinner(player, computer, computerBoard)) return
  const cmptShot = computer.randomAttack(player)
  displayShot(cmptShot[0], cmptShot[1], player, playerBoard)
  if(checkForWinner(player, computer, computerBoard)) return
}

const checkForWinner = (player, computer, computerBoard) => {
  if(computer.getBoard().checkShips()) {
    removeAllListeners(computerBoard)
    document.body.appendChild(displayWinner(player))
    return true
  } else if(player.getBoard().checkShips()) {
    removeAllListeners(computerBoard)
    document.body.appendChild(displayWinner(computer))
    return true
  }
  return false
}

const removeLastListener = (i, j, computerBoard) => {
  const rows = computerBoard.querySelectorAll('.board-row')
  const squares = rows[i].querySelectorAll('.square')
  squares[j].replaceWith(squares[j].cloneNode(true))
}

export const startControls = () => {
  const container = document.createElement('div')
  container.classList.add('control-container')

  const nameInput = document.createElement('input')
  nameInput.classList.add('name-input')
  nameInput.placeholder = 'Enter name'
  container.appendChild(nameInput)

  const randomPosBtn = document.createElement('button')
  randomPosBtn.classList.add('random-ships-btn')
  randomPosBtn.innerText = 'Random'
  randomPosBtn.addEventListener('click', playerRandomShips)
  container.appendChild(randomPosBtn)

  const dragDropBtn = document.createElement('button')
  dragDropBtn.classList.add('drag-drop-btn')
  dragDropBtn.innerText = 'Drag-&-Drop'
  dragDropBtn.addEventListener('click', dragDropShips)
  container.appendChild(dragDropBtn)

  return container
}


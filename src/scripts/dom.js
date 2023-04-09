export const header = () => {
  const container = document.createElement('div')
  container.classList.add('header')
  container.innerText = 'Battleship'
  return container
}

const createBoard = (player) => {
  const board = document.createElement('div')
  board.classList.add('board')
  board.innerText = player
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

export const displayBoards = () => {
  const container = document.createElement('div')
  container.classList.add('boards-container')
  const playerBoard = createBoard('Player')
  playerBoard.classList.add('player-board')
  const computerBoard = createBoard('Computer') 
  computerBoard.classList.add('computer-board')
  container.appendChild(playerBoard)
  container.appendChild(computerBoard)
  return container
}

const createShips = (quantity, size, name) => {
  const container = document.createElement('div')
  container.classList.add('ship-model-container')
  for(let i = 0; i < quantity; i++) {
    let ship = document.createElement('div')
    ship.classList.add('ship')
    for(let j = 0; j < size; j++) {
      let square = document.createElement('div')
      square.classList.add('ship-square')
      ship.appendChild(square)
    }
    container.appendChild(ship)
  }
  return container
}

export const displayShips = () => {
  const container = document.createElement('div')
  container.classList.add('ships-container')
  const carrier = createShips(1, 5, 'carrier')
  const battleships = createShips(2, 4, 'battleship')
  const destroyers = createShips(3, 3, 'destroyer')
  const submarines = createShips(4, 3, 'submarine')
  const patrolBoats = createShips(5, 2, 'patrol-boat')
  container.appendChild(carrier)
  container.appendChild(battleships)
  container.appendChild(destroyers)
  container.appendChild(submarines)
  container.appendChild(patrolBoats)
  return container
}

export const displayShot = (i, j, enemy, enemyBoard) => {
  const gameboard = enemy.getBoard()
  const board = gameboard.getBoard()
  const rows = enemyBoard.querySelectorAll('.board-row')
  const squares = rows[i].querySelectorAll('.square')
  const square = squares[j]
  if(board[i][j] !== 'water' && board[i][j] !== 'buffer') square.classList.add('hit')
  else square.classList.add('miss')
}

export const fillPlayerBoard = (gameboard, screenBoard) => {
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
export const header = () => {
  const container = document.createElement('div')
  container.classList.add('header')
  container.innerText = 'Battleship'
  return container
}

const createBoard = () => {
  const board = document.createElement('div')
  board.classList.add('board')
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
  const playerBoard = createBoard()
  const computerBoard = createBoard() 
  container.appendChild(playerBoard)
  container.appendChild(computerBoard)
  return container
}
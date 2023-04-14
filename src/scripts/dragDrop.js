import Ship from "./ship"

export const dragDropMenu = (player) => {
  const container = document.createElement('div')
  container.classList.add('boards-container')
  const shipBtn = document.createElement('div')
  shipBtn.classList.add('ship-btn')
  container.appendChild(dragDropBoard(player.getName(), 'player-board'))
  
  const dirBtn = document.createElement('button')
  dirBtn.classList.add('dir-btn')
  dirBtn.classList.add('vertical')
  dirBtn.innerHTML = '<span class="material-symbols-outlined">south</span>'
  dirBtn.addEventListener('click', () => {
    const isSouth = dirBtn.classList.contains('vertical')
    if (isSouth) {
      dirBtn.innerHTML = '<span class="material-symbols-outlined">east</span>'
      dirBtn.classList.remove('vertical')
      dirBtn.classList.add('horizontal')
      changeShipDir()
    } else {
      dirBtn.innerHTML = '<span class="material-symbols-outlined">south</span>'
      dirBtn.classList.remove('horizontal')
      dirBtn.classList.add('vertical')
      changeShipDir()
    }
  })
  shipBtn.appendChild(dirBtn)

  const dragDropShips = document.createElement('div')
  dragDropShips.classList.add('drag-drop-ships')
  dragDropShips.classList.add('horizontal')

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

  ships.forEach(ship => {
    const shipContainer = document.createElement('div')
    shipContainer.classList.add('dd-ship')
    shipContainer.setAttribute('draggable', true)
    shipContainer.setAttribute('data-ship-id', ship.getID())
    shipContainer.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/plain', ship.getID())
    })
    for(let i = 0; i < ship.getLength(); i++) {
      const shipSquare = document.createElement('div')
      shipSquare.classList.add('ship-box')
      shipContainer.appendChild(shipSquare)
    }
    dragDropShips.appendChild(shipContainer)
  })
  shipBtn.appendChild(dragDropShips)
  container.appendChild(shipBtn)

  return container
}

const changeShipDir = () => {
  const shipContainer = document.querySelector('.drag-drop-ships')
  const ships = document.querySelectorAll('.dd-ship')
  if(shipContainer.classList.contains('vertical')) {
    shipContainer.classList.remove('vertical')
    shipContainer.classList.add('horizontal')
    shipContainer.style.flexDirection = 'column'
    ships.forEach(ship => {
      ship.style.flexDirection = 'row'
    })
  } else {
    shipContainer.classList.remove('horizontal')
    shipContainer.classList.add('vertical')
    shipContainer.style.flexDirection = 'row'
    ships.forEach(ship => {
      ship.style.flexDirection = 'column'
    })
  }
}

const dragDropBoard = (name, className) => {
  const board = document.createElement('div')
  board.classList.add(className)
  board.innerText = name
  for(let i = 0; i < 10; i++) {
    let row = document.createElement('div')
    row.classList.add('board-row')
    for(let j = 0; j < 10; j++) {
      let square = document.createElement('div')
      square.classList.add('square')
      square.classList.add('water')
      square.addEventListener('dragover', (event) => {
        event.preventDefault()
      })
      square.addEventListener('drop', (event) => {
        event.preventDefault()
        const shipID = event.dataTransfer.getData('text/plain')
        const shipLength = document.querySelector(`[data-ship-id="${shipID}"]`).children.length
        const shipDir = document.querySelector('.drag-drop-ships').classList.contains('horizontal') ? 'horizontal' : 'vertical'
        if(shipDir === 'vertical' && (shipLength + i) <= 10) {
          if(checkSpace(i, j, shipLength, shipDir)) {
            placeShip(i, j, shipLength, shipDir)
            const shipToRemove = document.querySelector(`[data-ship-id="${shipID}"]`);
            shipToRemove.remove();
          }
        } else if(shipDir === 'horizontal' && (shipLength + j) <= 10) {
          if(checkSpace(i, j, shipLength, shipDir)) {
            placeShip(i, j, shipLength, shipDir)
            const shipToRemove = document.querySelector(`[data-ship-id="${shipID}"]`);
            shipToRemove.remove();
          }
        }
      })
      row.appendChild(square)
    }
    board.appendChild(row)
  }
  return board
}

const checkSpace = (i, j, shipLength, shipDir) => {
  const board = document.querySelector('.player-board')
  const rows = board.querySelectorAll('.board-row')
  if(shipDir === 'horizontal') {
    for(let k = i; k <= i; k++) {
      const squares = rows[k].querySelectorAll('.square')
      for(let l = j; l < (shipLength + j); l++) {
        if(!squares[l].classList.contains('water')) {
          return false
        } 
      }
    }
  } else if(shipDir === 'vertical') {
    for(let k = i; k < (shipLength + i); k++) {
      const squares = rows[k].querySelectorAll('.square')
      for(let l = j; l <= j; l++) {
        if(!squares[l].classList.contains('water')) {
          return false
        } 
      }
    }
  }
  return true
}

const placeShip = (i, j, shipLength, shipDir) => {
  const board = document.querySelector('.player-board')
  const rows = board.querySelectorAll('.board-row')
  if(shipDir === 'horizontal') {
    for(let k = i; k <= i; k++) {
      const squares = rows[k].querySelectorAll('.square')
      for(let l = j; l < (shipLength + j); l++) {
        squares[l].classList.remove('water')
        squares[l].classList.add('ship-box')
      }
    }
  } else if(shipDir === 'vertical') {
    for(let k = i; k < (shipLength + i); k++) {
      const squares = rows[k].querySelectorAll('.square')
      for(let l = j; l <= j; l++) {
        squares[l].classList.remove('water')
        squares[l].classList.add('ship-box')
      }
    }
  }
  bufferShip(i, j, shipLength, shipDir)
}

const bufferShip = (i, j, shipLength, shipDir) => {
  let upper, lower, left, right

  if(i === 0) upper = 0 
  else upper = i - 1 
  if(j === 0) left = 0
  else left = j - 1

  if(shipDir === 'vertical') {
    if((i + shipLength) >= 8) lower = 9
    else lower = i + shipLength
    if(j === 9) right = 9
    else right = j + 1
  } else {
    if(i === 9) lower = 9
    else lower = i + 1
    if((j + shipLength) >= 8) right = 9
    else right = j + shipLength
  }

  const board = document.querySelector('.player-board')
  const rows = board.querySelectorAll('.board-row')
  for(let k = upper; k <= lower; k++) {
    const squares = rows[k].querySelectorAll('.square')
    for(let l = left; l <= right; l++) {
      if(squares[l].classList.contains('water')) {
        squares[l].classList.remove('water')
        squares[l].classList.add('buffer')
      }
    }
  }
}
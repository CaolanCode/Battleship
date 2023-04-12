import Ship from "./ship"
import { createBoard } from "./dom"

export const dragDropMenu = (player) => {
  const container = document.createElement('div')
  container.classList.add('drag-drop-container')
  const shipBtn = document.createElement('div')
  shipBtn.classList.add('ship-btn')
  container.appendChild(createBoard(player.getName(), 'player-board'))
  
  const dirBtn = document.createElement('button')
  dirBtn.classList.add('dir-btn')
  dirBtn.classList.add('dir-east')
  dirBtn.innerHTML = '<span class="material-symbols-outlined">east</span>'
  dirBtn.addEventListener('click', () => {
    const isEast = dirBtn.classList.contains('dir-east')
    if (isEast) {
      dirBtn.innerHTML = '<span class="material-symbols-outlined">south</span>'
      dirBtn.classList.remove('dir-east')
      dirBtn.classList.add('dir-south')
      changeShipDir()
    } else {
      dirBtn.innerHTML = '<span class="material-symbols-outlined">east</span>'
      dirBtn.classList.remove('dir-south')
      dirBtn.classList.add('dir-east')
      changeShipDir()
    }
  })
  shipBtn.appendChild(dirBtn)

  const dragDropShips = document.createElement('div')
  dragDropShips.classList.add('drag-drop-ships')
  dragDropShips.classList.add('drag-drop-east')

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
    for(let i = 0; i < ship.getLength(); i++) {
      const shipSquare = document.createElement('div')
      shipSquare.classList.add('ship-box')
      if(i === 0) {
        shipSquare.addEventListener('dragstart', (event) => {
          event.dataTransfer.setData('text/plain', ship.getID())
        })
      }
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
  if(shipContainer.classList.contains('drag-drop-south')) {
    shipContainer.classList.remove('drag-drop-south')
    shipContainer.classList.add('drag-drop-east')
    shipContainer.style.flexDirection = 'column'
    ships.forEach(ship => {
      ship.style.flexDirection = 'row'
    })
  } else {
    shipContainer.classList.remove('drag-drop-east')
    shipContainer.classList.add('drag-drop-south')
    shipContainer.style.flexDirection = 'row'
    ships.forEach(ship => {
      ship.style.flexDirection = 'column'
    })
  }
}


const getDirection = () => {
  const shipContainer = document.querySelector('.drag-drop-ships')
  const isSouth = shipContainer.classList.contains('.drag-drop-south')
  if(isSouth) return 'south'
  return 'east'
}
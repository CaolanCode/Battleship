import {header, displayBoards, displayShips} from './dom'

export const playGame = (() => {
  const body = document.body
  body.appendChild(header())
  body.appendChild(displayBoards())
  body.appendChild(displayShips())
})()
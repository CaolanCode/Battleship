import {v4 as uuidv4} from 'uuid'
const Ship = (l) => {
  const length = l
  let hits = 0
  const id = uuidv4()
  const hit = () => hits++
  const isSunk = () => length === hits ? true : false
  const assignNumber = (n) => number = n
  const getLength = () => length
  const getID = () => id
  return {
    hit,
    isSunk,
    getLength,
    assignNumber,
    getID
  }
}

export default Ship
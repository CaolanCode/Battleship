import {v4 as uuidv4} from 'uuid'
const Ship = (l) => {
  const length = l
  let hits = 0
  const id = uuidv4()
  const hit = () => hits++
  const isSunk = () => length === hits ? true : false
  const getLength = () => length
  const getID = () => id
  return {
    hit,
    isSunk,
    getLength,
    getID
  }
}

export default Ship
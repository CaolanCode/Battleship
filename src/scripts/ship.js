import {v4 as uuidv4} from 'uuid'
const Ship = (l) => {
  const length = l
  let hits = 0
  const number = uuidv4()
  const hit = () => hits++
  const isSunk = () => length === hits ? true : false
  const assignNumber = (n) => number = n
  const getLength = () => length
  const getNumber = () => number
  return {
    hit,
    isSunk,
    getLength,
    assignNumber,
    getNumber
  }
}

export default Ship
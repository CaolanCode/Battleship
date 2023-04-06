const Ship = (l) => {
  const length = l
  let hits = 0
  let number
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
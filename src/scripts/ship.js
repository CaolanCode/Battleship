const Ship = (l) => {
  const length = l
  let hits = 0
  const hit = () => hits++
  const isSunk = () => length === hits ? true : false
  const getLength = () => length
  return {
    hit,
    isSunk,
    getLength
  }
}

export default Ship
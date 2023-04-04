export const Ship = (l) => {
  const length = l
  let hits = 0
  const hit = () => hits++
  const isSunk = () => length === hits ? true : false
  return {
    hit,
    isSunk
  }
}

import Player from "../player";

describe('Player Test', () => {
  
  let player1
  let computer
  beforeEach(() => {
    player1 = Player('Player')
    computer = Player('Computer')
  })

  test('Create two players, check names', () => {
    expect(player1.getName()).toBe('Player')
    expect(computer.getName()).toBe('Computer')
  })

  test('Check recorded shots', () => {
    player1.attack(0, 0, computer)
    expect(player1.checkShots(0, 0)).toBe(true)
  })

  test('Check computer shot', () => {
    const shot = computer.randomAttack()
    expect(computer.checkShots(shot[0], shot[1])).toBe(true)
  })
})
import Player from "../player";

describe('Player Test', () => {
  
  let player
  let computer
  beforeEach(() => {
    player = Player('Player')
    computer = Player('Computer')
  })

  test('Create two players, check names', () => {
    expect(player.getName()).toBe('Player')
    expect(computer.getName()).toBe('Computer')
  })

  test('Check recorded shots', () => {
    player.attack(0, 0, computer)
    expect(player.checkShots(0, 0)).toBe(true)
  })

  test('Check computer shot', () => {
    const shot = computer.randomAttack(player)
    expect(computer.checkShots(shot[0], shot[1])).toBe(true)
  })
})
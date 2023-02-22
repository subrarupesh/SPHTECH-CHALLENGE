const players = require('./players');
 
test('2 players with different ages resulting in 0', () => {
    expect(players.calculatePlayer(10,1,9,5)).toBe(0);
  });

  test('2 players with different ages resulting in 1', () => {
    expect(players.calculatePlayer(9,2,5,4)).toBe(1);
  });
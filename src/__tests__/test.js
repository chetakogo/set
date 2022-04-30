import Team from '../js/set';

test('add new character with error', () => {
  const character = new Team();
  character.add('Magician');
  expect(() => character.add('Magician')).toThrowError('the player is already on the team');
});

test('add new character', () => {
  const character = new Team();
  character.addAll('Magician', 'Deamon', 'Undead');
  expect(character.toArray()).toEqual(['Magician', 'Deamon', 'Undead']);
});

test('array', () => {
  const character = new Team();
  character.add('Magician');
  character.add('Deamon');
  character.add('Undead');
  const array = character.toArray();
  expect(array).toEqual(['Magician', 'Deamon', 'Undead']);
});

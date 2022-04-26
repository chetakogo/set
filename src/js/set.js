export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('the player is already on the team');
    }
    this.members.add(character);
  }

  addAll(...character) {
    character.forEach((name) => {
      this.add(name);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}

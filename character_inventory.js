/* Character inventory
Improve the example RPG to add character inventory management according to the following rules:

A character's inventory contains a number of gold and a number of keys.

Each character begins with 10 gold and 1 key.

The character description must show the inventory state.

When a character slays another character, the victim's inventory goes to its vanquisher.
*/

class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = name;
    this.strength = strength;
    this.xp = 0;
    // ...
  }
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(
        `${this.name} attacks ${target.name} and causes ${damage} damage points`
      );
      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} has ${target.heath} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        console.log(`
        ${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`);
        this.xp += bonusXP;
      }
    } else {
      console.log(`${this.name} can't attack because they've been eliminated`);
    }
  }
  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} as XP points`;
  }
}

const myObject = new Character("Dave", 100, 50);
myObject.method1(/* ... */);

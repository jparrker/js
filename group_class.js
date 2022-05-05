class Group {
  constructor() {
    this.group = [];
  }
  add(value) {
    if (!this.group.includes(value)) this.group.push(value);
  }

  delete() {
    if (this.group.includes(value)) {
      this.group.splice(this.group.indexOf(value), 1);
    }
  }
  has(value) {
    return this.group.includes(value);
  }
  static from(obj) {
    let newGroup = new Group();
    for (let item of obj) {
      newGroup.add(item);
    }
    return newGroup;
  }
}

let group = Group.from([10, 20, 20, 30, 30]);

console.log(group);
console.log(group.has(10));

console.log(group.has(30));
console.log(group.has(75));
console.log(add(75));
group.delete(10);

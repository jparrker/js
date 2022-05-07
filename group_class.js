class Group {
  constructor() {
    this.group = [];
  }
  add(value) {
    if (!this.group.includes(value)) this.group.push(value);
  }

  delete(value) {
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

class GroupIterator {
  constructor(obj) {
    this.index = 0;
    this.group = obj.group;
  }
  next() {
    if (this.index == this.group.length) {
      return { done: true };
    }
    let value = this.group[this.index];
    this.index++;
    return { value, done: false };
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this);
};

let group = Group.from([10, 20, 20, 30, 30]);

console.log(group);
console.log(group.has(10));

console.log(group.has(30));
console.log(group.has(75));
console.log(group.add(75));
group.delete(10);
console.log(group);
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}

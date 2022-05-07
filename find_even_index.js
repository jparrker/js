function findEvenIndex(arr) {
  let equalPoint = -1;
  arr.forEach((item, index) => {
    let lhs = arr.slice(0, index).reduce((acc, c) => acc + c, 0);
    let rhs = arr.slice(index + 1).reduce((acc, c) => acc + c, 0);
    if (lhs === rhs) {
      equalPoint = index;
    }
  });
  return equalPoint;
}

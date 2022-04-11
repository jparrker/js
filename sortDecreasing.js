//Sort in decreasing order

let arr = [5, 2, 1, -10, 8]

const sortDecreasing = arr => {
  return arr.sort((a, b) => b - a)
}

sortDecreasing(arr) //[ 8, 5, 2, 1, -10 ]
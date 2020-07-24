const diagonalDifference = function (arr, n) {
  let principalSum = 0,
    secondarySum = 0
  for (let i = 0; i < arr.length; i++) {
    principalSum += arr[i][i]
    secondarySum += arr[i][n - 1 - i]
  }

  return Math.abs(principalSum - secondarySum)
}

let array = [
  [3, 2, 1],
  [3, 4, 9],
  [15, 6, 5],
]

const result = diagonalDifference(array, 3)
console.log("result", result)

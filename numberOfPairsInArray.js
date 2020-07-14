// n is the length of the array
// ar is the array

function numberOfPairsInArray(n, ar) {
  let numberOfPairs = 0
  let pairedIndices = []

  for (let i = 0; i < ar.length; i++) {
    if (pairedIndices.includes(i)) continue

    for (let j = 0; j < ar.length; j++) {
      if (pairedIndices.includes(j)) continue
      if (j == i) continue

      if (ar[i] === ar[j]) {
        pairedIndices.push(i, j)
        numberOfPairs++
        break
      }
    }
  }
  return numberOfPairs
}

let ar = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]

const result = numberOfPairsInArray(15, ar)

console.log(result)

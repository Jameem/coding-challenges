// n is the length of the array
// ar is the array

function numberOfPairsInArray(n, arr) {
  let occuppances = {}

  for (let i = 0; i < arr.length; i++) {
    if (occuppances[arr[i]] === undefined) {
      occuppances[arr[i]] = 1
    } else {
      occuppances[arr[i]]++
    }
  }

  let keys = Object.keys(occuppances)

  let numberOfPairs = 0
  for (let i = 0; i < keys.length; i++) {
    numberOfPairs += Math.floor(occuppances[keys[i]] / 2)
  }

  return numberOfPairs
}

let ar = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]

const result = numberOfPairsInArray(15, ar)

console.log(result)

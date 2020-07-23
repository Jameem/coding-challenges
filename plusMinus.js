const plusMinus = function (arr) {
  let postiveCount = 0,
    negativeCount = 0,
    zeroCount = 0,
    n = arr.length

  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) zeroCount++
    if (arr[i] > 0) postiveCount++
    if (arr[i] < 0) negativeCount++
  }

  console.log(postiveCount / n)
  console.log(negativeCount / n)
  console.log(zeroCount / n)
}

let array = [-4, 3, -9, 0, 4, 1]

const result = plusMinus(array)

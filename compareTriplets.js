function compare(a, b) {
  let aCount = 0,
    bCount = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) aCount++
    if (a[i] < b[i]) bCount++
  }

  return [aCount, bCount]
}
let a = [5, 6, 7]
let b = [3, 6, 10]

const res = compare(a, b)

console.log(res)

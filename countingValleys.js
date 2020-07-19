const countValleys = function (n, s) {
  let height = 0,
    count = 0
  for (let i = 0; i < s.length; i++) {
    const element = s[i]

    if (element == "U") height++
    if (element == "D") {
      if (height === 0) count++
      height--
    }
  }

  return count
}

let s = "DDUUUUDD"
let n = 8

const count = countValleys(n, s)
console.log(count)

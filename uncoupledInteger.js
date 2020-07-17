function getUncoupledInteger(input) {
  input = JSON.parse("[" + input + "]")
  console.log(input)

  let array = input.sort()

  for (let i = 0; i < array.length; i += 2) {
    if (array[i] != array[i + 1]) return array[i]
  }
}

function getUncoupledIntegerWithBitOperation(input) {
  let uncoupled = 0
  for (let i = 0; i < input.length; i++) {
    uncoupled ^= input[i]
  }

  return uncoupled
}

console.log(getUncoupledInteger(b))

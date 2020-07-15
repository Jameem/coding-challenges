function fibonacci(n) {
  if (n < 2) return n

  return fibonacci(n - 1) + fibonacci(n - 2)
}

const number = fibonacci(0)
console.log(number)

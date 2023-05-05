const sum1 = (n) => (n * (n + 1)) / 2

const sum2 = (n) =>
  new Array(n)
    .fill(0)
    .map((_, i) => i + 1)
    .reduce((a, b) => a + b, 0)

const sum3 = (n) => {
  let result = 0

  for (let i = 1; i <= n; i++) {
    result += i
  }
  return result
}

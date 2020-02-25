function dev(n) {
  if (n === 2) {
    return 3
  }
  return dev(n - 1) + n
}

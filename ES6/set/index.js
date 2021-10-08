let s = new Set([1, 2, 3, 4, 4])
console.log(s) // [1, 2, 3, 4]

s.add(5).add(6)
console.log(s) // [1, 2, 3, 4, 5, 6]

s.delete(6)
console.log(s) // [1, 2, 3, 4, 5]

// s.clear()
// console.log(s) // []

console.log(s.has(5)) // true

console.log(s.size())

for (let item in s) {
  console.log(item)
}

for (let item in s.keys()) {
  console.log(item)
}

for (let item in s.values()) {
  console.log(item)
}


// 数组循环的方式

const arr = [1, 2, 3, 4, 5]

/**
 * for
 */

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 2) {
    break
  }
  console.log(arr[i])
}

/**
 * forEach
 */

arr.forEach(function(elem, index, array) {
  console.log(elem, index)
})

// map 不会改变原数组

let result = arr.map(function(value, index) {
  value += 1
  return value
})
// result [2, 3, 4]

/**
 * filter 返回新数组，数组的值为筛选后的值
 */
arr.filter(function(value) {
  console.log(value)
})

// some 遍历数组中是否有符合条件的值，返回boolean值
arr.some(function(value) {
  console.log(value)
})

// every 遍历数组检测数组中的每一个值是否都符合条件，返回boolean值
arr.every(function(value) {
  console.log(value)
})

/**
 * reduce
 */

// 数组求和
let sum = arr.reduce(function(prev, cur, index, array) { // sum = 6
  return prev + cur
}, 0)

// 寻找数组最大值
arr.reduce(function(pre, cur){
  return Math.max(pre, cur)
})

// 数组去重

arr.reduce(function(prev, cur){
  prev.indexOf(cur) == -1 && prev.push(cur)
  return prev
}, [])

/**
 * for in
 */

Array.prototype.foo = () => {
  console.log('foo')
}

for (let index in arr) {
  console.log(index, arr[index])
}

// for in 在循环的时候不仅能循环出数组的值，也会循环数组原型下自定义的方法

/**
 * find 返回通过测试的第一个元素
 */

let res = arr.find(function(value) {
  return value === 2
})
console.log(arr, res)

/**
 * findIndex 返回符合条件的第一次出现的元素的索引
 */

let res = arr.findIndex(function(value) {
  return value === 2
})

/**
 * for of 循环数组的值 values() keys() entries()
 */

for (let [item, index] of arr.entries()) {
  console.log(item, index)
}
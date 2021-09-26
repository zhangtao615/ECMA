/**
 * 1. 对象简洁表示
 * 2. 属性名变量表示
 */

let name = 'Tom'
let age = 21
let s = 'school'
let obj = {
  name,
  age,
  [s]: 'school'
}
console.log(obj) // { name: 'Tom', age: 21 }

/**
 * object.is 判断两个值是否严格相等
 */
Object.is(2, '2') // false
Object.is(NaN, NaN) // true

/**
 * 扩展运算符与Object.assign() 合并对象
 */

let x = {
  a: 3,
  b: 4
}
let y = {...x}
let z = {}
Object.assign(z, x)

/**
 * in 判断当前位置是否有值
 */

let arr = [1, 2, 3]
console.log(3 in arr) // false 

/**
 * 对象遍历
 */

// 1. for in
for (let key in obj) {
  console.log(key, obj[key])
}

// 2. Object.keys()
Object.keys(obj).forEach(key => {
  console.log(key, obj[key])
})

// getOwnPropertyNames
Object.getOwnPropertyNames(obj).forEach(key => {
  console.log(key, obj[key])
})

// Reflect.ownKeys
Reflect.ownKeys(obj).forEach(key => {
  console.log(key, obj[key])
})
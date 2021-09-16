/**
 * 数组解构
 */

// let arr = [1, 2, 3]
// let [a, b, c] = arr

// console.log(a, b, c)

// let arr = [1, 2,  [3, 4]]

// let [a, b, [c, d]] = arr
// console.log(a, b, c, d);

/**
 * 对象解构
 */

// let user = {
//   name: 'Tom',
//   age: 30
// }

// let { age, name } = user
// console.log(age, name);

/**
 * 字符串解构
 */

// let str = 'hello'

// let [a, b, c, d, e] = str

/**
 * 应用
 */

// function foo () {
//   console.log(123)
// }

// let [a = foo()] = [1]

// 函数参数解构

let arr = [1, 3, 5]
function foo([a, b, c]) {
  console.log(a, b, c)
}
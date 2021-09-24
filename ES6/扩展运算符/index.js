/**
 * 扩展运算符
 */

function foo(a, b, c) {
  console.log(a, b, c)
}

let arr = [1, 2, 3]
foo(...arr) // 1, 2, 3

/**
 * rest参数
 */

function foo2(...args) {
  console.log(args);
}

foo2(1, 2) // 1, 2
foo2(1, 2, 3) // 1, 2, 3
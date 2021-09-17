// 类数组/伪数组  HTMLCollection/NodeList/arguments
 // Array.prototype.slice.call()将伪数组转为数组


 /**
  * Array.from() 伪数组转为数组，必须有length属性
  */
 let arrayLike = {
   0: 'es6',
   1: 'es7',
   2: 'es8',
   length: 3
 }
 let arr = Array.from(arrayLike)

 /**
  * Array.of() 创建数组
  */
 let arr = Array.of(1) // [1]
 Array.of(1, true, [1, 2, 3])

/**
 * copyWithin
 * @param {number} 从该索引下开始替换
 * @param {number} 从这个位置开始读取元素
 * @param {number} 到这个位置结束
 */

console.log(arr.copyWithin(1, 3))

/**
 * fill 填充
 */

let fillArr = new Array(3).fill(0) // [0, 0, 0]

/**
 * includes 检测数组中是否有该元素,返回boolean,可以检测NaN
 */


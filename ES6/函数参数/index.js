/**
 * 函数参数默认值
 */
function foo(x, y = 'world') {
  console.log(x + y) // hello world
}

foo('hello')

/**
 * 与解构赋值结合
 */
 function ajax(url, {
   body = '',
   method = 'GET',
   headers = {}
 } = {}) {
  
}

ajax('', {
  method = "POST"
})

/**
 * length 返回没有指定默认值的函数的额函数
 */

function argsLength (x, y, z = 0) {

}
console.log(argsLength.length); // 2
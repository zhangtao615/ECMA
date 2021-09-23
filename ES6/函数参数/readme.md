## ES6 函数新特性

### 函数参数默认值
在函数中可以为函数参数设置默认值，默认值要放在参数列表的最后

```
function foo(x, y = 'world') {
  console.log(x + y) // hello world
}

foo('hello')
```

### 与解构赋值结合
```
 function ajax(url, {
   body = '',
   method = 'GET',
   headers = {}
 } = {}) {
  
}

ajax('', {
  method = "POST"
})

```

### length属性
```
function argsLength (x, y, z = 0) {

}
console.log(argsLength.length); // 
```

### 作用域
```
let x = 1
function foo (x, y = x) {
  console.log(y) // 2
}
foo(2)
```

### 函数的name属性
```
function foo() {}
console.log(foo.name) // foo

(new Function).name // 匿名函数
```
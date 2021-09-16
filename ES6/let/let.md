## 新声明方式：let

### let 和 var 区别
1. 不属于顶层对象window
2. 不允许重复声明
3. 不存在变量提升
4. 暂时性死区
5. 块级作用域

### 1.不属于顶层对象window
```
  let a = 5
  console.log(window.a) // undefind
```

### 2. 不允许重复声明
```
let a = 5
let a = 6  // Identifier 'a' has already been declared
```

### 3. 不存在变量提升
```
  console.log(a) // Cannot access 'a' before initialization
  let a = 5
```

### 4. 暂时性死区
```
var a = 5
if (true) {
  a = 6 // Cannot access 'a' before initialization
  let a = 5
}
```

### 5. 块级作用域

js中块级作用域，以花括号判定，没有花括号则判定没有块级作用域
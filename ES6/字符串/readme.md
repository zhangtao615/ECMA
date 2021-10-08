## 字符串扩展

### unicode

```
\u0000 => '\u' + 码点
码点取值范围0000 ～ ffff

如果超出可以使用\u{20BB7}形式表示
```

### 字符串遍历器接口

```
let s = 'hello'

for (let item of s) {
  console.log(s) // h e l l o
}
```

### 模版字符串  ``

```
let a = 10, b = 11

let str = `我的年龄是${a + b}`
```
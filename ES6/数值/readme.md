## 数值扩展

1. 进制转换
```
// 十进制->二进制
const a = 5
a.toString(2)

// 表示二进制0B前缀、八进制0O前缀

const b = 0B1101
console.log(b) // 13

const c = 0O26371
console.log(c) // 11513
```

2. Number.isFinite() 判断数值是否有限

```
Number.isFinite(1) // true
Number.isFinite('a') // false
Number.isFinite(true) // false
Number.isFinite(Infinity) // false
```

3. Number.isNaN() 判断是否是NaN

```
Number.isNaN(NaN) // true
Number.isNaN(1) // false
```

4. Number.parseInt() Number.parseFloat()

```
Number.parseInt(5.5) // 5
Number.parseFloat(5.5) // 5.5
```
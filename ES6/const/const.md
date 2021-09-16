## 声明常量的方式const

### ES5中定义常量的方式

```
Object.defineProperty(globalThis, 'PI', {
  value: 3.14,
  writable: false
})
```

### const特性

1. 不属于顶层对象window
2. 不允许重复声明
3. 不存在变量提升
4. 暂时性死区
5. 块级作用域
6. 常量不能改变
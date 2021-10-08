## Symbol 表示独一无二的值

### 声明一个Symbol值
```
let s1 = Symbol('a')
s1 // 
```

### Symbol.description

```
s1.description // a
```

### Symbol.for()

```
let s1 = Symbol.for('foo')
let s2 = Symbol.for('foo') // true

s1 === s2
```

使用Symbol.for()创建的Symbol定义在全局上，当声明s2时会在全局上找是否有同名Symbol被定义，如果有则指向上一个

### Symbol.keyFor()

返回一个已经登记的Symbol的key

```
const s1 = Symbol('foo')
console.log(Symbol.keyFor(s1)) // undefined

const s2 = Symbol.for('foo')
console.log(Symbol.keyFor(s2)) // foo
```

### 应用场景

1. 保证对象的key不重复
```
const stu1 = Symbol('李四')
const stu2 = Symbol('李四')

const grade = {
  stu1: { age: 20, address: 'Beijing' },
  stu2: { age: 21, address: 'Shanghai' }
}
console.log(grade[stu1])
```

2. 消除魔术字符串

```
const shapeType = {
  triangle: Symbol(),
  circle: Symbol()
}
function getArea(shape) {
  let area = 0
  switch (shape) {
    case shapeType.Triangle:
      area = 1
      break
    case shapeType.circle:
      area = 2
      break
  }
  return area
}

getArea(shapeType.triangle)
```
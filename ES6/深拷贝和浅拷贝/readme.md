## 深拷贝和浅拷贝

### 浅拷贝

1. target = source
```
let target = {
  a: 1,
  b: 2
}
let source = target
```

2. Object.assign()
```
let target = {
  a: 1,
  b: 2,
  c: {
    d: 3
    e: 4
  }
}
let source = {
  a: 1,
  b: 2,
  c: {
    d: 3
    e: 4,
    f: 5
  }
}
Object.assign(source, target)
```

### 深拷贝

1. JSON.parse(JSON.stringify())
```
let taregt = {
  a: 1,
  b: 2
}
let source = JSON.parse(JSON.stringify(target))
```

2. deepClone
```

```
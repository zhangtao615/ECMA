## set

类似于数组，在集合中不存在相同的数

### set基本使用
```
// 创建set
let s = new Set([1, 2, 3, 4, 4)
console.log(s) // [1, 2, 3, 4]

// 添加
s.add(5).add(6)
console.log(s) // [1, 2, 3, 4, 5, 6]

// 清空
// s.clear()
// console.log(s) // []

// 判读是否有某个值
console.log(s.has(5)) // true

// 集合大小
console.log(s.size())

// 遍历set
s.forEach(item => console.log(item))

for (let item in s) {
  console.log(item)
}

for (let item in s.keys()) {
  console.log(item)
}

for (let item in s.values()) {
  console.log(item)
}
```

### 使用场景

1. 数组去重

```
const arr = [1, 1, 1]
let s = new Set(arr)
```

2. 数组合并去重

```
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [3, 4, 5, 6, 7, 8]

let s = new Set([...arr1, ...arr2])
```

3. 求数组交集

```
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [3, 4, 5, 6, 7, 8]

let res = new Set(arr1.filter(item => s2.has(item)))
```
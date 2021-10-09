## includes 检查数组中是否包含某个值

### 基本使用
```
// Array.prototype.includes(searchElment, fromIndex) => boolean  第二个参数是搜索开始的位置, 如果传入负数，表示倒数第几个

const arr = ['es6', 'es7', 'es8']

arr.includes('es7') // true
arr.includes('es9') // false

arr.includes('es7', 1) // true

// indexOf 返回的是元素的索引，未找到则返回 -1
arr.indexOf('es7') // 1 
```

### includes和indexOf区别

1. 两个方法只能用于判断数组中的基本数据类型，不能判断是否包含引用数据类型
2. includes的返回值是boolean类型的值，indexOf返回元素的下标，若不存在则返回-1
3. includes可以检测数组是否包含NaN,indexOf不行
4. 

// Array.prototype.includes(searchElment, fromIndex) => boolean  第二个参数是搜索开始的位置, 如果传入负数，表示倒数第几个

const arr = ['es6', 'es7', 'es8']

arr.includes('es7') // true
arr.includes('es9') // false

arr.includes('es7', 1) // true

// indexOf 返回的是元素的索引，未找到则返回 -1
arr.indexOf('es7') // 1 
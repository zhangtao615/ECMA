// ES5中定义常量的方式

Object.defineProperty(globalThis, 'PI', {
  value: 3.14,
  writable: false
})

console.log(PI);
## Object.getOwnPropertyDescriptor/s 获取单个或全部属性的描述

1. value: 对象的值
2. writable: 是否可写
3. enumerable: 是否可以被循环
4. configurable: 是否可被删除

### 设置对象属性

```
const obj = {}
Reflect.defineProperty(obj, 'name', {
  value: 'Tom',
  writable: false,
  enumerable: true,
  configurable: true
})
```
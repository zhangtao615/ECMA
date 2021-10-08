## 类和继承

### 类

1. ES5中类声明
```
function People(name, age) {
  this.name = name
  this.age = age
}
People.prototype.showName = function() {
  console.log('我的名字是' + this.name)
}
let p1 = new People('Tom', 21)
```
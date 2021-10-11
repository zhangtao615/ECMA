## 对象扩展 Rest&Spread

### Spread

和数组扩展类似，可以将两个或多个对象合并成一个对象，当多个对象中包含同一个属性时，后面的属性的值会覆盖前一个的值
```
const obj1 = {
  name: 'Tom',
  age: 20
}
const obj2 = {
  address: 'Beijing',
  age: 21
}

const obj = { ...obj1, ...obj2 }
{
  name: 'Tom',
  age: 21,
  address: 'Beijing'
}
```

### Rest

解构对象

```
const obj = { 
  name: 'Tom',
  age: 20,
  address: 'Beijing',
  hobby: 'video game',
  position: 'FE'
}

const { name, age, ...rest } = obj

console.log(name) // Tom
console.log(age)  // 20
console.log(rest) // { address: 'Beijing', hobby: 'video game', position: 'FE' }
```
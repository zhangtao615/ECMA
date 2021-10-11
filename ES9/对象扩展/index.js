// const obj1 = {
//   name: 'Tom',
//   age: 20
// }
// const obj2 = {
//   address: 'Beijing',
//   age: 21
// }

// const Obj3 = {
//   ...obj2,
//   ...obj1
// }
// console.log(Obj3)

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
// let obj = {}
// let p = new Proxy(obj, {})
// p.name = 'Tom'
// console.log(obj.name)

// get
// let arr = [1, 2, 3]
// arr = new Proxy(arr, {
//   get(target, prop) {
//     console.log(target, prop)
//     return prop in target ? target[prop] : 'error'
//   }
// })
// console.log(arr[0])

// let dict = {
//   'hello': '你好',
//   'world': '世界'
// }
// dict = new Proxy(dict, {
//   get(target, prop) {
//     return prop in target ? target[prop] : prop
//   }
// })
// console.log(dict['hello'])

// set
// let arr = []
// arr = new Proxy(arr, {
//   set(target, prop, val) {
//     if (typeof val === 'number') {
//       target[prop] = val
//       return true
//     }
//     return false
//   }
// })

// arr.push(5)
// console.log(arr.length)

// has

// let range = {
//   start: 1,
//   end: 5
// }

// range = new Proxy(range, {
//   has(target, prop) {
//     return prop >= target.start && prop <= target.end
//   }
// })

// ownKeys
// let obj = {
//   name: 'Tom', 
//   age: 5,
//   [Symbol('es')]: 'es6'
// }

// console.log(Object.getOwnPropertyNames(obj))
// console.log(Object.getOwnPropertySymbols(obj))
// console.log(Object.keys(obj))

let userInfo = {
  username: 'Jerry', 
  age: 20, 
  _password: '**********'
}

userInfo = new Proxy(userInfo, {
  ownKeys(target) {
    return Object.keys(target).filter(key => !key.startsWith('_'))
  }
})

for(let key in userInfo) {
  console.log(key)
}
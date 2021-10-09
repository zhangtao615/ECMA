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

// let userInfo = {
//   username: 'Jerry', 
//   age: 20, 
//   _password: '**********'
// }
// userInfo = new Proxy(userInfo, {
//   ownKeys(target) {
//     return Object.keys(target).filter(key => !key.startsWith('_'))
//   }
// })
// 循环userInfo
// for(let key in userInfo) {
//   console.log(key)
// }

// delete(userInfo)
let userInfo = {
  username: 'Jerry',
  age: 20,
  _password: '**********'
}

user = new Proxy(userInfo, {
  get(target, prop) {
    if (prop.startsWith('_')) {
      throw new Error('不可访问')
    } else {
      return target[prop]
    }
  },
  set(target, prop, value) {
    if (prop.startsWith('_')) {
      throw new Error('不可访问')
    } else {
      target[prop] = value
      return true
    }
  }, 
  deleteProperty(target, prop) {
    if (prop.startsWith('_')) {
      throw new Error('不可删除')
    } else {
      delete target[prop]
      return true
    }
  },
  ownKeys(target) {
    return Object.keys(target).filter(item => !item.startsWith('_'))
  }
})
// user.age = 18
// try {
//   user._password = '11513'
// } catch (e) {
//   console.log(e.message)
// }
// try {
//   delete user.age
// } catch(e) {
//   console.log(e.message)
// }
// console.log(user.age)
// for(let key in user) {
//   console.log(key);
// }

// apply
// let sum = (...args) => {
//   let num = 0
//   args.forEach(item => {
//     num += item
//   })
// }
// sum = new Proxy(sum, { 
//   apply(target, ctx, args) {
//     return target(...args) * 2
//   }
// })
// console.log(sum(1, 2))

// construct
let User = class {
  constructor(name) {
    this.name = name
  }
}
User = new Proxy(User, {
  constructor(target, args, newTarget) {
    return newTarget(...args)
  }
})

console.log(new User('Tom'))
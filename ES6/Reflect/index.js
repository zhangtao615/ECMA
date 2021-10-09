// Object -> Reflect
// let user = {
//   username: 'Jerry', 
//   age: 22,
//   address: 'Beijing'
// }
// Reflect.defineProperty(user, {
//   get: function (target, prop) {
//     try {
//       return target[prop]
//     } catch (error) {
//       console.log(error.message)
//     }
//   },
//   set: function (target, prop, value) {
//     try {
//       if (target[prop] !== value) {
//         target[prop] = value
//         return true
//       }
//     } catch (error) {
//       console.log(errot.message)
//     }
//   }
// })


// change Object return

// if (Reflect.defineProperty()) {

// } else {

// }

// Object -> function
// console.log('assign' in Object) // true 
// console.log(Reflect.has(Object, 'assign')) // true

// Reflect -> Proxy

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
      // return target[prop]
      return Reflect.get(target, prop)
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
user.age = 18
try {
  user._password = '11513'
} catch (e) {
  console.log(e.message)
}
try {
  delete user.age
} catch(e) {
  console.log(e.message)
}
console.log(user.age)
for(let key in user) {
  console.log(key);
}
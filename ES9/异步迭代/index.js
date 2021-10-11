// const arr = ['es6', 'es7', 'es8', 'es9']

// arr[Symbol.iterator] = () => {
//   let nextIndex = 0
//   return {
//     next() {
//       return nextIndex < arr.length ? {
//         value: arr[nextIndex++],
//         done: false
//       } : {
//         value: undefined,
//         done: true
//       }
//     }
//   }
// }

// for (let item in arr) {
//   console.log(item)
// }

function getPromise(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value: time,
        done: false
      })
    }, time)
  })
}

const arr = [getPromise(1000), getPromise(1100), getPromise(1200)]

arr[Symbol.asyncIterator] = () => {
  let nextIndex = 0
  return {
    next() {
      return nextIndex < arr.length ? arr[nextIndex++] : 
        Promise.resolve({
          value: undefined,
          done: true
        })
    }
  }
}

async function test() {
  for await (let item of arr) {
    console.log(item)
  }
}
test()
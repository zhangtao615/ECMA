// async function foo() {
//   let result = await 'async'
//   console.log(result)
// }

// foo()

function timeout() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
}

async function foo() {
  let res = await timeout()
  console.log(res)
  console.log(2)
}

foo()
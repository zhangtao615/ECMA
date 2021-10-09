// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('promise')
//     resolve()
//   }, 1000)
// }).then(() => {
//   console.log('success')
// }).catch(err => {
//   console.log(err)
// })

let p = new Promise((resolve, reject) => {
  console.log(1)
  resolve(3)
})
console.log(2)
p.then(res => {
  console.log(res)
})


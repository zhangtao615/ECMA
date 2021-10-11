new Promise((resolve, reject) => {
  resolve('success')
}).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
  reject('fail')
}).finally(() => {
  console.log('done')
})
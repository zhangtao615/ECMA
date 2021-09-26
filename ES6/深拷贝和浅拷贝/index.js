/**
 * deepClone方法
 */

let deepClone = obj => {
  if (typeof target !== 'object' || typeof obj == null) {
    return obj
  }
  let res = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnproperty(key)) {
      res[key] = deepClone(obj[key])
    }
  }
  return res
}
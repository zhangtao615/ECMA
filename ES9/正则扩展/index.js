// 具名组匹配 可以为正则的每个组命名，通过groups来取每个组的值

const reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/

const groups = reg.exec('2021-10-11').groups

// console.log(groups.year)

// 后行断言

const str = 'ecmascript9'
console.log(str.match(/(?<=ecma)script/))
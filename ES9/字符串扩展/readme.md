主要扩展：放松了模版字符串转义序列的语法限制，当模版字符串是unicode码时，当unicode码不正确时不会报错

```
const foo = arg => {
  console.log(arg) // undefined
}
foo`\u{061} and \unicode`
```
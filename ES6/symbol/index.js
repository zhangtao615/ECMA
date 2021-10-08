// let s1 = Symbol('foo')
// let s2 = Symbol('bar')

// console.log(s1);
// console.log(s2.description);

// let s3 = Symbol.for('foo')
// let s4 = Symbol.for('foo') // true

// console.log(s3 === s4);

const s1 = Symbol('foo')
console.log(Symbol.keyFor(s1)) // undefined

const s2 = Symbol.for('foo')
console.log(Symbol.keyFor(s2)) // foo
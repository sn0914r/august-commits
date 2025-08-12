# Data types in Js

1. The Data types are classified into two types:
   1. Primitive Data Types - Stored directly in the memory and immutable.
   2. Non-Primitive Data Types - Stored by reference in memory, can contain multiple values.

## Primitive Data Types

### String

1. It is the textual data written between single and double quotations.

2. Strings are indexed & immutable.

```JS
let name = "Sivananda Reddy"
```

### Number

1. It represents all numbers i.e., integers and floating-points.

```JS
let age = 21
let price = 99.99
```

### BigInt

1. It is used to represent integers larger than `Number.MAX_SAFE_INTEGER` (`9007199254740991`).

2. We add `n` at the end of a number literal to define it as a BigInt.

3. We use BigInt to preserve precision for integers beyond `9007199254740991`, because normal Number type loses accuracy after this limit.

4. We can't perform operations on Number and Bigint type.

```JS
console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991

console.log(90071992547409911223n);
// 90071992547409911223n
```

## Boolean

1. It represents `true` or `false` values.

```JS
let isLoggedIn = true
let isComplete = false
```

## Undefined

1. It represents a variable that has been declared but not assigned any value.

2. The default value of uninitialized variables is `undefined`.

```JS
let name;
console.log(name); // undefined
console.log(typeof name); // undefined
```

## null

1. It represents an absence of value.

2. We explicitly assign it to a variable to say, _this currently has no value._

3. The `typeof null` returns `object`. (it is a bug).

4. We use `null` to reset or clear a variable's value.

5. The main difference between `null` and `undefined` is, programmer sets `null` value manually where as javascript sets `undefined` automatically.

## Non Primitive Data Types

### Object

1. An object is a collection of key-value pairs.

2. The keys are usually strings or Symbols (a new datatype introduced in `ES6`) while the values can be anything like numbers, strings, arrays, functions, even other objects.

3. The Objects are:
   1. Unordered - Objects keys don't have a fixed order.
   2. Flexible - Values can be any type, even functions.
   3. Dynamic - We can add, update, or remove properties at any time.

```JS
const object = {
    "name": "Gajala",
    "profession": "Software Engineer"
}
```

## Arrays

1. An array is a special type of object used to store multiple values in an ordered list.

2. It can store any time of data.

3. It allows dynamic sizing, we can add or remove elements at any time.

```JS
const array = ["Gajala", "Gajini", 12, 284n, [455, "33"], {"name": "tiGOr"}]
```

## function

1. A function is a block of reusable code that can be executed when called.

2. Technically, `typeof` a function returns `function` but under the hood, it's an object with callable behavior.

```JS
function greet() {
  console.log("Hello, world!");
}
greet(); // Hello, world!
```

## Note

1. JavaScript is dynamically typed language, meaning we don't declare the stype of variable - it's determined at runtime.

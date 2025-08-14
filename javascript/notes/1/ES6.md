# ES6

## `let` and `const`

1. `let` and `const` are block-scoped (they are accessible only within the block they are created).

2. In browser environment, the variables declared with `var` are automatically attached to the `window` object. This problem is fixed with `let` and `const` introduced in Es6.

3. `let` allows reassignment of values, where `const` doesn't.

4. `const` is used to declare constant variables.

## Arrow functions

1. Arrow functions are a shorter way to write functions.

2. Syntax: `const functionName = (parameters) => expression;`

```JS
const Sum = (a, b) => a+b;
console.log(Sum(5, 7)); // Output: 12
```

## Template Literals

1. Template literals allows us to include variables or expression into a string without the need of concatenation.

```JS
console.log(`total sum: ${35+25}`); // output:- total sum: 60
```

## Default Parameters

1. We can assign default values to function parameters.

2. When no argument is passed, the function uses the default value as its argument.

```JS
const greet = (name="User") => console.log(`Hello ${name}`);

greet(); // output:- Hello User
greet("tiGor"); // output:- Hello tiGOr
```

## Destructuring

1. Destructuring is a way to extract values from arrays or objects and store them in separate variables.

2. In arrays destructuring gets values by position (index) and in objects destructuring gets values by property name.

```JS
// Array Destructuring

const [a, b] = [1, 2];
console.log(a); // output: 1
console.log(b); // output: 2
```

```JS
// Object Destructuring
const object = {
    name: "tiGor",
    friends: {
        friend1 : "bhAAi",
        friend2 : "bOb"
    }
}

const {name, friends: {friend1, friend2}} = object;
console.log(name);
console.log(friend1);
console.log(friend2);
```

## Rest & Spread Operators

1. The Rest and Spread uses the same syntax i.e., `...` (three dots) but behave differently on where they are used.

2. The Rest Operator `...` is used to collect multiple values into one variable.

```JS
// Used to collect the arguments
const Sum = (...nums) => nums.reduce((acc, cur) => a+b, 0);
console.log(sum(1, 2, 3, 4)); // output: 6

// Used to collect elements of array while destructuring
const [a, ...rest] = [1, 2, 3];
console.log(a); // 1
console.log(rest); // [2, 3]
```

3. The spread operator `...` is used to expand values from array or objects.

```JS
// Arrays
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // output:- [1, 2, 3, 4]

// Objects
const obj1 = {name: "tiGOr"};
const obj2 = {...obj1, age: 47};
console.log(obj2); // output:- {name: "tiGor", age: 47}
```

4. In short Rest **Collects** and Spread **Expands** and both use `...`.

## Other Features

1. `map` and `sets`

2. Promises

3. Modules - `import` & `export`

4. `classes`

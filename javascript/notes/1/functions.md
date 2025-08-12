# Function

A Function is a reusable block of code designed to perform a specific task, which can be executed (called) whenever needed.

### Some of the key Features are

1. **Reusable** i.e, Write once, use multiple times.

2. **Parameterized** i.e., It can accept inputs (parameters) and return outputs.

3. **Encapsulated** i.e., We can organize code into logical units.

4. **Callable** i.e., we run a function by calling/invoking it.

## Types of Functions

### Regular Functions

These are the commonly used functions that supports hositing (i.e., we can call this Fns before declaration)

```JS
function Sum(a,b){
    console.log("Sum is:", a+b);
}

Sum(2,3); // output:- 5
```

### Anonymous Functions

A function without name is called an Anonymous Function. It's generally used as a callback argument.

```JS
function greet(cb){
    console.log("Hello");
}

greet(function(){
    console.log("How are you?");
});
// output:
// Hello
// How are you?
```

### Function Expression or Named Function

A function is said to be Named Function when we assign an anonymous function to a variable.

```JS
const Sum = function(a, b){
    console.log("Sum is:", a+b);
}

Sum(2, 3); // 5
```

### Arrow Functions

1. Introduced in ES6
2. They Provide a shorter and cleaner syntax to write functions.
3. They do not support hoisting.

```JS
const Sum = (a, b) => console.log("Sum is:", a+b);
```

### IIFE - Immediately Invoking Function Expression

1. These functions run immediately after they are defined.

2. Syntax: `(Fn)();`

```JS
(()=>console.log(5))();
```

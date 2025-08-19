# High Order Function

1. A Function is called a **Higher-Order Funtion (HOF)** if it does at least one of these two things:

   - Takes another function (_callback_) as an argument (like `map`, `filter`, `reduce`). OR

   - Returns a function.

2. It doesn't have to do both at the same time. Even if it does just one, it is still a higher-order function.

```JS

function anotherFn(){
    console.log("Hello");
}

function Fn(fn){
    return fn(); // calling the passed function
}

Fn(anotherFn); // logs "Hello"
// Takes another function as argument. Therefore it is an HOF
```

```JS
funtion returnFn(){
    return function () {
        console.log("Hello")
    }
}

returnFn()(); // logs "Hello"
// Returns a function. Therefore it is an HOF
```

3. The HOFs are common in JS, we use this in array methods, event listeners, currying, decorators, etc

4. They make code more flexible and reusable.

## callback Function

A callback function is simply a function that is passed as an argument to another function, and usually executed later (or _called back_).

```JS
function greet(callback, name = "User"){
    console.log(`Hello ${name}`);
    callback(); // calling the function argument
}

function ask(){
    console.log("How are you?");
}

greet(ask); // Here ask function is a callback because it's passed into greet.
```

### Summary

1. callback = A function that's passed.

2. Higher Order Funtion = the function that receives or returns another function.
# Error Handling

1. Error Handling allows us to manage the unexpected error in our program without crashing it.

2. When an error occurs, instead of terminating the entire program, error handling lets us define what actions to do like:
    - Logging the error,
    - Retrying the operations,
    - Showing a user-friendly error message,
    - Performing cleanup tasks. etc

3. we use `try...catch` blocks to handle runtime errors.

4. If we don't catch it, the program will stop with an error.

```JS
try{
    // write the code that may throw an error here   
}catch(error){
    console.log(error.name); // logs error name
    console.log(error.message); // logs error message
}
```

```JS
try {
  let x = y + 10; // y is not defined, raises an error
} catch (err) {
  console.log("Error caught:", err.message);
}
// output:- Error caught: y is not defined
```

6. `throw` keyword is used to manually raise error.

```JS
try{
    console.log("hello");
    throw new Error("manually thrown error")
}catch(error){
    console.log("Error:", error.message)
}

// output:- Error: Cannot divide by zero
```

7. `finally` block always runs wheather an error occurs or not and it is mainly used for cleanup tasks.

```JS
try{
    console.log("hello");
    throw new Error("manually thrown error")
}catch(error){
    console.log("Error:", error.message)
}finally{
    console.log("i always run");
}
/*
Output:-

hello
Error: manually thrown error
i always run
*/
```

## Creating custom errors

We can create our own error types like `SyntaxError`, `ReferanceError`, etc by using the built in class called `Error`.

```JS
class ZeroError extends Error {
    constructor (message) {
        super(message)
        this.name = "ZeroDivisionError"
    }
}

try{
    let a = 5
    let b = 0

    if (b===0) throw new ZeroError("Cannot divide with Zero");

    console.log("Result: ", a/b)
}catch(error){
    console.log(error.name); // ZeroDivisionError
    console.log(error.message); // Cannot divide with Zero
}

/*
Output:-

ZeroDivisionError
Cannot divide with Zero
*/
```
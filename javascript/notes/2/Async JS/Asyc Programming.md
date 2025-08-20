# Asynchronous Programming

1. JavaScript is a **single-threaded** i.e., it runs one task at at a time.

2. If it only run synchronously, long tasks (_like fetching data, reading files, timers_) would block the page (freeze).

3. Asynchronous Programming allows JS to start a task, run it in the background i.e., outiside the main thread (**handled outside JS by browser or Node APIS**), and continue with other code.

4. Once the async task finishes, it's added back into JS execution via Event Loop.

## Ways to Handle Async Code

### Promises

1. Promises are special Objects in JavaScript that represents the result of an asynchronous operation.

2. It's mainly used to handle long running tasks like fetching data from a server, waiting for a timeout, etc

3. A promise can be in one of these three states:

   1. **pending**:- Initial State, represents the operation is still in progress.

   2. **fullfilled**:- Represents the operation successfully completed and has a result.

   3. **rejected**:- Represents operation is failed and promise has an error.

4. Syntax:

   ```JS
   function func(resolve, reject){
    // some tasks here

    if (/*task successful*/){
        resolve("Result or success result");
    }else{
        reject("Error message here");
    }
   }
   const promise = new Promise(func)
   ```

#### `.then()`, `.catch()`, & `.finally()` methods

1. These methods are used to handle the result of a promise (whether it's success or failure).

2. `.then()` takes a callback as an argument and runs when the promise is resolved and passes the resolved value to the callback function.

```JS
promise.then(function(result) {
    // handle success
    console.log("Success:", result);
});

```

3. `.catch()` takes a callback as an argument and runs when the promise is rejected and passes the error value to the callback function.

```JS
promise.catch(function(error) {
    // handle error
    console.log("Error:", error);
});
```

4. `.finally()` takes a callback function and runs no matter whether the promise is fulfilled or rejected, commonly used for clean-up code (closing connections, hiding loaders, etc) and callback doesn't receive anything.

```JS
promise.finally(function() {
    // always runs after .then() or .catch()
    console.log("Cleanup done");
});
```

##### **Promise Chaining**

1. Promise chaining means calling multiple .then() methods in sequence, each waiting for the previous one.

2. It lets us perform async tasks step-by-step, passing the output of one step to the next.

3. Every .then() returns a new promise.

4. If a .then() callback returns a value, JS wraps it in a resolved promise (`Promise.resolve(value)`).

5. If a .then() callback returns a promise, the next .then() waits for it to settle.

6. If nothing is returned, JS implicitly returns `Promise.resolve(undefined)`.

7. A single `.catch()` at the end can handle errors from any earlier step in the chain.

### `async/await`

1. `async/await` is syntactic sugar over promises.

2. `async` keyword is written before a function to declare it as an async function that always returns a promise.

3. `await` keyword is used before a promise inside an async function, it waits until the promise resolves and gives resolved value.

4. If the promise rejects, the error can be caught using `try...catch`.

5. It makes async code look and behave like synchronous code, improving readability.

```JS
async function fetchData() {
    try{
        const data = await new Promise(resolve=>setTimeOut(()=>resolve("tiGor")), 5000);
        console.log(data)
    }catch(error){
        console.log("Error:", error)
    }
}
```

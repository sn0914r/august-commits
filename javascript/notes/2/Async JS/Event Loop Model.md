# Event Loop Model – Concurrency Model

## Key Components

### Call Stack

1. This is where synchronous code runs.

2. Works like a stack (LIFO – Last In, First Out).

3. It executes the functions.

```JS
function a() { console.log("A"); }
function b() { a(); }
b();
// Call Stack: b() -> a() -> prints -> pop -> done
```

### Web APIs (Browser APIs/Node APIs)

1. These are provided by the browser or Node.js (Not part of the JS engine).

2. They handle async tasks like `setTimeOut`, `setInterval`, `fetch`, DOM events, etc

### Microtask Queue (Job Queue)

1. Stores microtasks such as Promises, `async/await`, etc

2. All microtasks are executed completely before moving on to the next macrotask.

3. Microtasks always have higher priority than macrotasks.

### Macrotask Queue (Callback Queue/Task Queue)

1. Stores macrotasks like callbacks from timers, events, and I/O.

2. The event loop takes one macrotask at a time, and after it finishes, it checks for microtasks.

3. The cycle looks like this:

   ```JS
   Call Stack → Microtasks (all) → Macrotask (one) → Microtasks (all) → Next Macrotask → ...

   ```

### Event Loop

1. It acts like a traffic controller.

2. It constantly checks:
   1. Is the Call Stack empty? If yes, moves tasks from queues.
   2. Always run all microtasks first, then moves to one macrotask.

## Process

1. JavaScript is a single-threaded language, meaning it runs one task at a time (line by line).

```JS
function one() {
    console.log("one");
}

function two() {
    console.log("two");
}

one();
two();

/*
Output:
one
two
*/

// This happens because JS runs code line by line.
```

2. If JavaScript blocked on async tasks like `setTimeOut` or `fetch`, the browser would freeze. But thanks to Web APIs and event loop, it doesn't make browser freez.

```JS
console.log("Start");

setTimeout(() => {
    console.log("Inside Timeout");
}, 2000);

console.log("End");

/*
Output:
Start
End
Inside Timeout
*/
```

3. In the above Program, the `setTimeOut()` didn't block execution for 2 seconds. Because the browser handled it in the background using the Timer API (a Web API).

4. Under the Hood the above program works like this:

   1. `console.log("Start")` → goes to Call Stack → runs → prints.

   2. `setTimeout()` → goes to Call Stack → Web API (Timer API) takes away from Callstack → timer starts (2s).

   3. `console.log("End")` → runs immediately.

   4. After 2s, the Web API pushes the callback into the **Callback Queue**.

   5. The Event Loop checks: Is the Call Stack empty? **If yes** → moves the callback to the stack → executes → prints `"Inside Timeout"`.

## Example

```JS
setTimeout(() => console.log("Macrotask 1"), 0);

Promise.resolve().then(() => console.log("Microtask 1"));
Promise.resolve().then(() => console.log("Microtask 2"));

setTimeout(() => console.log("Macrotask 2"), 0);
```

#### **Execution flow**:

1. Sync → nothing printed.

2. Microtasks → `"Microtask 1"`, `"Microtask 2"`.

3. Macrotask → `"Macrotask 1"`.

4. Check Microtasks → none.

5. Next Macrotask → `"Macrotask 2"`.

```JS
// output:
Microtask 1
Microtask 2
Macrotask 1
Macrotask 2
```

6. All microtasks are always cleared before moving to the next macrotask. This is why Promises (.then) run before setTimeout, even with 0ms delay.
